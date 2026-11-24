import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Calendar, Flame, FolderGit2, RefreshCw } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

interface GitHubUserSummary {
  public_repos?: number;
}

const WEEKDAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const LEVEL_CLASSES: Record<number, string> = {
  0: 'bg-[#0B0F14] border-white/[0.07]',
  1: 'bg-[#00C853]/25 border-[#00C853]/30',
  2: 'bg-[#00C853]/50 border-[#00C853]/50',
  3: 'bg-[#00C853]/75 border-[#00C853]/70',
  4: 'bg-[#00E676] border-[#00E676]',
};

function formatReadableDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) return isoDate;
  const monthLabel = MONTH_NAMES[month - 1] ?? '';
  return `${monthLabel} ${day}, ${year}`;
}

export default function GitHubHeatmap() {
  const [selectedYear, setSelectedYear] = useState<string>('last');
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [publicRepos, setPublicRepos] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const username = PROFILE.githubHandle;

  const fetchActivity = useCallback(
    async (yearParam: string) => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${encodeURIComponent(yearParam)}`
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = (await res.json()) as ContributionsResponse;
        const list = Array.isArray(data.contributions) ? data.contributions : [];
        setContributions(list);

        const periodKey = yearParam === 'last' ? 'lastYear' : yearParam;
        const total =
          data.total?.[periodKey] ?? list.reduce((sum, day) => sum + (day.count || 0), 0);
        setTotalCount(total);
      } catch {
        setError('Unable to load live GitHub contribution data right now.');
      } finally {
        setLoading(false);
      }
    },
    [username]
  );

  // Discover available contribution years and public repository count once
  useEffect(() => {
    let active = true;

    fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: ContributionsResponse | null) => {
        if (!active || !data?.total) return;
        const years = Object.keys(data.total)
          .filter((k) => /^\d{4}$/.test(k))
          .sort((a, b) => Number(b) - Number(a));
        setAvailableYears(years);
      })
      .catch(() => {
        // Year tabs gracefully stay on Last 12 Months if summary lookup fails
      });

    fetch(`https://api.github.com/users/${encodeURIComponent(username)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((user: GitHubUserSummary | null) => {
        if (!active || typeof user?.public_repos !== 'number') return;
        setPublicRepos(user.public_repos);
      })
      .catch(() => {
        // Optional public repo count
      });

    return () => {
      active = false;
    };
  }, [username]);

  useEffect(() => {
    fetchActivity(selectedYear);
  }, [selectedYear, fetchActivity]);

  // Organize days into Sunday-aligned weeks + month label markers
  const { weeks, monthLabels, stats } = useMemo(() => {
    if (contributions.length === 0) {
      return {
        weeks: [] as (ContributionDay | null)[][],
        monthLabels: [] as { weekIndex: number; label: string }[],
        stats: { activeDays: 0, longestStreak: 0, bestDay: 0 },
      };
    }

    const firstDate = new Date(`${contributions[0].date}T00:00:00Z`);
    const leadingEmptyDays = Number.isNaN(firstDate.getTime()) ? 0 : firstDate.getUTCDay();

    const padded: (ContributionDay | null)[] = [
      ...Array.from({ length: leadingEmptyDays }, () => null),
      ...contributions,
    ];

    const groupedWeeks: (ContributionDay | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) {
      const slice = padded.slice(i, i + 7);
      while (slice.length < 7) {
        slice.push(null);
      }
      groupedWeeks.push(slice);
    }

    const labels: { weekIndex: number; label: string }[] = [];
    let lastMonth = -1;
    groupedWeeks.forEach((week, weekIdx) => {
      const firstRealDay = week.find((d) => d !== null);
      if (!firstRealDay) return;
      const monthIdx = Number(firstRealDay.date.split('-')[1]) - 1;
      if (monthIdx !== lastMonth && monthIdx >= 0 && monthIdx < 12) {
        // Avoid colliding labels on consecutive narrow columns
        if (labels.length === 0 || weekIdx - labels[labels.length - 1].weekIndex >= 3) {
          labels.push({ weekIndex: weekIdx, label: MONTH_NAMES[monthIdx] });
        }
        lastMonth = monthIdx;
      }
    });

    let activeDays = 0;
    let currentStreak = 0;
    let longestStreak = 0;
    let bestDay = 0;

    for (const day of contributions) {
      if (day.count > 0) {
        activeDays += 1;
        currentStreak += 1;
        if (currentStreak > longestStreak) longestStreak = currentStreak;
        if (day.count > bestDay) bestDay = day.count;
      } else {
        currentStreak = 0;
      }
    }

    return {
      weeks: groupedWeeks,
      monthLabels: labels,
      stats: { activeDays, longestStreak, bestDay },
    };
  }, [contributions]);

  const yearOptions = ['last', ...availableYears];

  return (
    <div className="glass-surface relative mt-10 overflow-hidden rounded-2xl border border-white/[0.1] p-6 sm:p-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-10 h-px w-32 bg-gradient-to-r from-transparent via-[#00C853]/70 to-transparent"
      />

      {/* Header Row */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-5 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00C853]">
            <FolderGit2 className="h-4 w-4" aria-hidden="true" />
            <span>GitHub Activity · @{username}</span>
            {publicRepos !== null && (
              <span className="text-slate-400 tabular-nums">
                · {publicRepos} public repositories
              </span>
            )}
          </div>
          <h3 className="mt-1.5 font-display text-xl font-bold text-white sm:text-2xl">
            Contribution Heatmap
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Period / Year Filter Tabs */}
          <div
            role="tablist"
            aria-label="Select GitHub contribution period"
            className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#0B0F14]/90 p-1"
          >
            {yearOptions.map((opt) => {
              const active = selectedYear === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedYear(opt)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#00C853] text-[#0B0F14] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {opt === 'last' ? 'Last 12 Months' : opt}
                </button>
              );
            })}
          </div>

          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[36px] items-center gap-1.5 rounded-xl border border-white/12 bg-[#0B0F14] px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-[#00C853]/55 hover:text-[#00E676] whitespace-nowrap shrink-0"
          >
            <span>Open GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#00C853]" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Live Summary Metrics & Active Day Inspector */}
      <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <div>
            <span className="text-xs text-slate-400">Contributions</span>
            <p className="font-display text-lg font-bold text-white tabular-nums">
              {loading ? '—' : totalCount}
            </p>
          </div>
          <div>
            <span className="text-xs text-slate-400">Active Days</span>
            <p className="font-display text-lg font-bold text-white tabular-nums">
              {loading ? '—' : stats.activeDays}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-[#00C853]" aria-hidden="true" />
            <div>
              <span className="text-xs text-slate-400">Longest Streak</span>
              <p className="font-display text-lg font-bold text-white tabular-nums">
                {loading ? '—' : `${stats.longestStreak} days`}
              </p>
            </div>
          </div>
          <div>
            <span className="text-xs text-slate-400">Peak Day</span>
            <p className="font-display text-lg font-bold text-white tabular-nums">
              {loading ? '—' : stats.bestDay}
            </p>
          </div>
        </div>

        <div className="flex min-h-[32px] items-center gap-2 rounded-lg border border-white/[0.07] bg-[#0B0F14]/75 px-3 py-1.5 text-xs text-slate-300">
          <Calendar className="h-3.5 w-3.5 shrink-0 text-[#00C853]" aria-hidden="true" />
          {hoveredDay ? (
            <span className="tabular-nums">
              <strong className="font-semibold text-white">
                {hoveredDay.count}{' '}
                {hoveredDay.count === 1 ? 'contribution' : 'contributions'}
              </strong>{' '}
              on {formatReadableDate(hoveredDay.date)}
            </span>
          ) : (
            <span className="text-slate-400">Hover or tap a cell to inspect daily activity</span>
          )}
        </div>
      </div>

      {/* Contribution Matrix */}
      <div className="mt-6">
        {loading ? (
          <div
            aria-busy="true"
            aria-label="Loading GitHub contribution heatmap"
            className="flex h-36 items-center justify-center rounded-xl border border-white/[0.06] bg-[#0B0F14]/60 text-xs font-mono text-slate-400"
          >
            Loading contributions for @{username}...
          </div>
        ) : error ? (
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#0B0F14]/80 p-5 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-300">{error}</p>
            <button
              type="button"
              onClick={() => fetchActivity(selectedYear)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-[#101820] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-[#00C853]/50 hover:text-[#00C853] cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Retry</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto pb-2">
            <div className="inline-block min-w-full">
              {/* Month Header Row */}
              <div className="mb-2 flex items-center pl-8">
                <div className="relative h-4 w-full min-w-[680px]">
                  {monthLabels.map((m) => (
                    <span
                      key={`${m.label}-${m.weekIndex}`}
                      style={{
                        left: `${(m.weekIndex / Math.max(weeks.length, 1)) * 100}%`,
                      }}
                      className="absolute top-0 font-mono text-[11px] text-slate-400"
                    >
                      {m.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Weekday Labels + 53-Week Grid */}
              <div className="flex items-stretch gap-2">
                <div className="grid w-6 shrink-0 grid-rows-7 gap-1 py-0.5">
                  {WEEKDAY_LABELS.map((label, idx) => (
                    <span
                      key={idx}
                      className="flex items-center font-mono text-[10px] leading-none text-slate-500"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div
                  className="grid min-w-[680px] flex-1 gap-1"
                  style={{
                    gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                  }}
                >
                  {weeks.map((week, weekIdx) => (
                    <div key={weekIdx} className="grid grid-rows-7 gap-1">
                      {week.map((day, dayIdx) => {
                        if (!day) {
                          return (
                            <span
                              key={`empty-${weekIdx}-${dayIdx}`}
                              aria-hidden="true"
                              className="aspect-square w-full rounded-[3px] bg-transparent"
                            />
                          );
                        }

                        return (
                          <button
                            key={day.date}
                            type="button"
                            onMouseEnter={() => setHoveredDay(day)}
                            onFocus={() => setHoveredDay(day)}
                            aria-label={`${day.count} contributions on ${formatReadableDate(day.date)}`}
                            className={`aspect-square w-full rounded-[3px] border transition-transform duration-100 hover:scale-125 focus-visible:scale-125 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white cursor-pointer ${
                              LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0]
                            }`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Legend Footer */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4 text-xs text-slate-400">
        <span>Live public contribution graph via GitHub (@{username})</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <span
              key={lvl}
              aria-hidden="true"
              className={`h-3 w-3 rounded-[3px] border ${LEVEL_CLASSES[lvl]}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
