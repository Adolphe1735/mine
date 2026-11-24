import studentMgmtImg from '../assets/images/project_student_management_1794679750908.jpg';
import abcEcommerceImg from '../assets/images/project_abc_ecommerce_1794679750184.jpg';
import classWebsiteImg from '../assets/images/project_class_website_1794679751845.jpg';
import smartLearningApiImg from '../assets/images/project_smart_learning_api_1794679751926.jpg';
import rwandaAirImg from '../assets/images/project_rwanda_air_1794679751863.jpg';
import hospitalMgmtImg from '../assets/images/project_hospital_management_1794679753419.jpg';

export interface NavItem {
  id: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'React.js' | 'Full-Stack & API' | 'Web UI';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  focus: string;
}

export interface ExperienceItem {
  index: string;
  role: string;
  context: string;
  summary: string;
  deliverables: string[];
  appliedProjects: string[];
  stack: string[];
}

export const PROFILE = {
  fullName: 'Iragena Adolphe',
  profession: 'Software Developer',
  heroHeadline: "HELLO, I'M IRAGENA ADOLPHE",
  heroSubtitle: 'Software Developer | React.js Developer | Full-Stack Development Enthusiast',
  heroDescription: 'Building modern digital experiences through code, creativity, and innovation.',
  educationLevel: 'Level 5 Software Development (L5 SOD)',
  institution: 'EAV Kivumu TSS',
  country: 'Rwanda',
  githubUrl: 'https://github.com/Adolphe1735',
  githubHandle: 'Adolphe1735',
  email: 'iragenaadolphe@gmail.com',
  interests: [
    'Software Development',
    'Full-Stack Development',
    'Database Management',
    'Networking',
    'Technology Innovation',
  ],
  aboutParagraph:
    'I am Iragena Adolphe, a passionate Software Development student at Level 5 (L5 SOD) in Rwanda. I enjoy designing, developing, and implementing modern software applications that solve real-world problems. I have experience working with frontend technologies, backend development, databases, and version control. I continuously improve my programming skills by building practical projects and exploring new technologies. My goal is to become a professional full-stack developer and contribute to innovative technology solutions.',
  heroImage: '/assets/aistudio/image_8c2a95b0.png',
  heroImageAlt: 'Portrait photo of Iragena Adolphe, Software Developer',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    summary: 'Interactive user interfaces, component architecture, and responsive styling.',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'JSX',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    summary: 'Server-side application logic, routing, and MVC web frameworks.',
    items: ['PHP', 'Node.js', 'Express.js', 'Laravel', 'Python'],
  },
  {
    id: 'database',
    title: 'Database Management',
    summary: 'Relational schema design, SQL querying, and document data storage.',
    items: ['MySQL', 'MongoDB', 'SQL'],
  },
  {
    id: 'tools',
    title: 'Programming and Tools',
    summary: 'Core languages, collaborative version control, and developer workflows.',
    items: [
      'JavaScript',
      'TypeScript',
      'PHP',
      'Python',
      'Dart',
      'Java',
      'C',
      'Git',
      'GitHub',
      'VS Code',
      'Vite',
      'Postman',
    ],
  },
  {
    id: 'concepts',
    title: 'Other Technical Areas',
    summary: 'Foundational software engineering, API integration, and network concepts.',
    items: [
      'REST API Development',
      'Responsive Web Design',
      'Authentication and Authorization',
      'CRUD Operations',
      'Networking Fundamentals',
      'Software Development Principles',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'student-management-system',
    title: 'Student Management System',
    category: 'React.js',
    shortDescription:
      'React.js application featuring student registration, listing, live searching, deleting, and detailed student profile views.',
    fullDescription:
      'A practical academic administration interface built with React.js. Designed around clean component state management using React hooks and structured event handling for quick student registration, real-time filtering, record inspection, and removal.',
    technologies: ['React.js', 'JSX', 'React Hooks', 'Event Handling', 'CSS3'],
    features: [
      'Student registration workflow with input validation',
      'Dynamic directory listing with instant search filtering',
      'Individual student detail view and record deletion',
      'Responsive layout built with reusable React components',
    ],
    image: studentMgmtImg,
    imageAlt: 'Student Management System React dashboard preview',
  },
  {
    id: 'abc-ecommerce-website',
    title: 'ABC E-Commerce Website',
    category: 'React.js',
    shortDescription:
      'Online storefront built in React.js with product listing, interactive shopping cart, multi-view navigation, and user profile.',
    fullDescription:
      'A modern retail web application built with React.js focused on intuitive shopping flows. Includes structured product catalog browsing, stateful shopping cart management, seamless section navigation, and a dedicated customer profile area.',
    technologies: ['React.js', 'JavaScript', 'JSX', 'CSS3'],
    features: [
      'Structured product catalog with clean card hierarchy',
      'Interactive shopping cart state updates and item management',
      'Responsive storefront navigation and user profile view',
    ],
    image: abcEcommerceImg,
    imageAlt: 'ABC E-Commerce Website React storefront preview',
  },
  {
    id: 'class-website',
    title: 'Class Website',
    category: 'React.js',
    shortDescription:
      'Collaborative class portal built with React.js and JSX, deployed live on Vercel with open source code on GitHub.',
    fullDescription:
      'A dedicated web portal created using React.js and JSX to organize class resources, schedules, and announcements in a clean, accessible interface. Deployed live on Vercel with full source code hosted on GitHub.',
    technologies: ['React.js', 'JSX', 'CSS3', 'Vercel'],
    features: [
      'Deployed production build live on Vercel',
      'Clean JSX component structure for class information',
      'Responsive navigation across desktop and mobile devices',
    ],
    image: classWebsiteImg,
    imageAlt: 'Class Website academic portal preview',
    githubUrl: 'https://github.com/Adolphe1735/class-website',
    liveUrl: 'https://class-website-eta.vercel.app',
  },
  {
    id: 'smart-learning-center-api',
    title: 'Smart Learning Center API',
    category: 'Full-Stack & API',
    shortDescription:
      'RESTful backend service built with Node.js, Express.js, and MySQL supporting student management, authentication, and authorization.',
    fullDescription:
      'A structured backend REST API engineered with Node.js, Express.js, and a MySQL relational database. Implements core CRUD operations for student management alongside role-aware authentication and authorization middleware.',
    technologies: ['Node.js', 'Express.js', 'MySQL', 'REST API', 'Auth'],
    features: [
      'RESTful API endpoints for student CRUD management',
      'Relational MySQL database schema integration',
      'Authentication and route authorization handling',
    ],
    image: smartLearningApiImg,
    imageAlt: 'Smart Learning Center Node.js Express and MySQL REST API architecture diagram',
  },
  {
    id: 'rwanda-air-concept',
    title: 'Rwanda Air Website Concept',
    category: 'Web UI',
    shortDescription:
      'Airline information and flight booking interface concept crafted with semantic HTML, CSS, and interactive JavaScript.',
    fullDescription:
      'A frontend web design concept exploring airline travel presentation and flight booking ergonomics. Built using core HTML5, CSS3 layout techniques, and vanilla JavaScript for destination browsing and booking form interactions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Flight search and booking interface concept',
      'Airline destination showcase and travel information layout',
      'Pure HTML, CSS, and JavaScript interactive controls',
    ],
    image: rwandaAirImg,
    imageAlt: 'Rwanda Air Website Concept flight booking UI preview',
  },
  {
    id: 'hospital-management-system',
    title: 'Hospital Management System',
    category: 'React.js',
    shortDescription:
      'React.js healthcare interface designed for hospital administration workflows and patient-related management features.',
    fullDescription:
      'A frontend React.js application organizing hospital administrative tasks and patient-centered workflows into a clear, readable interface. Built to streamline access to patient records, scheduling views, and clinical overview panels.',
    technologies: ['React.js', 'JavaScript', 'JSX', 'CSS3'],
    features: [
      'Patient record and intake management interface',
      'Organized hospital workflow navigation in React.js',
      'Clean visual hierarchy tailored for administrative clarity',
    ],
    image: hospitalMgmtImg,
    imageAlt: 'Hospital Management System React interface preview',
  },
];

export const EDUCATION_DATA = {
  institution: 'EAV Kivumu TSS',
  program: 'Software Development (SOD)',
  level: 'Level 5 (L5)',
  country: 'Rwanda',
  highlights: [
    {
      title: 'Frontend Application Development with React.js',
      detail: 'Building modular UI components, managing state with hooks, and handling interactive user flows in JSX.',
    },
    {
      title: 'Backend System Development',
      detail: 'Designing server-side routes, business logic, and request handling with Node.js, Express.js, and PHP.',
    },
    {
      title: 'Database Management',
      detail: 'Structuring relational tables in MySQL and document collections in MongoDB for reliable CRUD operations.',
    },
    {
      title: 'Data Structures and Algorithms',
      detail: 'Applying structured problem-solving patterns, logical thinking, and clean algorithmic code.',
    },
    {
      title: 'Version Control with Git and GitHub',
      detail: 'Tracking changes, branching workflows, and publishing source repositories cleanly on GitHub.',
    },
    {
      title: 'MVC Framework Development with Laravel',
      detail: 'Organizing full-stack PHP web applications with Model-View-Controller separation of concerns.',
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    index: '01',
    title: 'Website Development',
    description:
      'Designing and building clean, fast, and accessible websites tailored to individuals, schools, and growing organizations.',
    focus: 'HTML5 · CSS3 · JavaScript · Responsive Design',
  },
  {
    index: '02',
    title: 'Frontend Development',
    description:
      'Translating layouts and concepts into responsive, pixel-accurate user interfaces with smooth interactions across devices.',
    focus: 'UI Architecture · Cross-Device Layouts · Accessibility',
  },
  {
    index: '03',
    title: 'React.js Application Development',
    description:
      'Developing component-driven single-page applications using modern React hooks, clean state flows, and reusable modules.',
    focus: 'React.js · JSX · Hooks · Modular Components',
  },
  {
    index: '04',
    title: 'Database Design and Management',
    description:
      'Modeling structured relational schemas and managing application data cleanly using MySQL and MongoDB.',
    focus: 'MySQL · MongoDB · Schema Modeling · CRUD',
  },
  {
    index: '05',
    title: 'REST API Development',
    description:
      'Creating organized backend endpoints with Node.js, Express.js, or Laravel featuring authentication and data validation.',
    focus: 'Node.js · Express.js · Laravel · Auth',
  },
  {
    index: '06',
    title: 'Student Management Systems',
    description:
      'Building practical academic portals for student registration, directory searching, record updates, and classroom workflows.',
    focus: 'Registration · Search & Filtering · Records',
  },
  {
    index: '07',
    title: 'Business Website Development',
    description:
      'Crafting modern company and e-commerce storefront concepts that present products and services clearly online.',
    focus: 'Storefronts · Product Catalogs · Contact Flows',
  },
];

export const EXPERIENCE_TRACKS: ExperienceItem[] = [
  {
    index: '01',
    role: 'React.js Frontend & UI Engineering',
    context: 'Project & Academic Practice',
    summary:
      'Hands-on experience designing modular React.js applications with clean JSX architecture, interactive state flows using hooks, and responsive cross-device layouts.',
    deliverables: [
      'Built stateful student registration, search, and record deletion workflows in React.js',
      'Implemented multi-view e-commerce product catalogs, shopping carts, and user profiles',
      'Developed clean semantic HTML5, CSS3, and JavaScript web concepts such as Rwanda Air',
    ],
    appliedProjects: [
      'Student Management System',
      'ABC E-Commerce Website',
      'Hospital Management System',
      'Class Website',
    ],
    stack: ['React.js', 'JSX', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    index: '02',
    role: 'Backend & REST API Development',
    context: 'Server-Side & MVC Projects',
    summary:
      'Practical backend development experience building structured RESTful services, routing, authentication, and MVC web applications.',
    deliverables: [
      'Engineered REST API endpoints for student CRUD operations with Node.js and Express.js',
      'Implemented authentication and authorization middleware to protect application routes',
      'Practiced MVC separation of concerns using PHP and the Laravel framework',
    ],
    appliedProjects: ['Smart Learning Center API'],
    stack: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST API'],
  },
  {
    index: '03',
    role: 'Database Design & Data Management',
    context: 'Relational & NoSQL Modeling',
    summary:
      'Experience structuring relational tables and document collections to store, query, and manage real-world application records reliably.',
    deliverables: [
      'Designed relational MySQL schemas connected directly to Express.js API services',
      'Practiced CRUD queries, structured relationships, and data integrity patterns',
      'Worked with MongoDB for flexible document-oriented application storage',
    ],
    appliedProjects: ['Smart Learning Center API', 'Student Management System'],
    stack: ['MySQL', 'MongoDB', 'CRUD Operations'],
  },
  {
    index: '04',
    role: 'Version Control, Deployment & Networking',
    context: 'EAV Kivumu TSS · L5 SOD',
    summary:
      'Consistent workflow discipline using Git and GitHub for source control, deploying live web builds to Vercel, and applying networking fundamentals.',
    deliverables: [
      'Maintained clean source repositories and commits on GitHub (@Adolphe1735)',
      'Deployed production React web applications live via Vercel (class-website-eta.vercel.app)',
      'Applied networking fundamentals and data structures & algorithms coursework at EAV Kivumu TSS',
    ],
    appliedProjects: ['Class Website'],
    stack: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Networking'],
  },
];

