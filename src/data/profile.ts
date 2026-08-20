// Single source of truth: extracted from Aayush Chounkar's resume (Resume_2026.pdf).
// Do not add information that is not present in the resume.

export const profile = {
  name: "Aayush Chounkar",
  initials: "AC",
  location: "Chembur, Mumbai 400071",
  email: "aayushchounkar@gmail.com",
  phone: "+91 7678071710",
  // Not present in the resume — add your URLs here to enable these links.
  linkedin: "",
  github: "",
  headline: "I build products, lead teams, and turn business problems into working systems.",
  positioning: [
    "Computer Science Engineering",
    "Product Ownership",
    "Project Management",
    "AI Automation",
  ],
  intro:
    "Computer Science Engineering student with experience across software testing, AI automation and business development — currently working as a Project Manager Intern and Product Owner at Tag8.",
  languages: ["English", "Hindi", "Marathi"],
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location?: string;
  period: string;
  status: "ACTIVE" | "COMPLETED";
  brief: string;
  log: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "tag8",
    company: "Tag8",
    role: "Project Manager Intern",
    period: "May 2026 — Aug 2026",
    status: "ACTIVE",
    brief:
      "Owned product execution while running AI-driven projects and a distributed sales and marketing team.",
    log: [
      "Worked as a Product Owner, driving product execution and strategy.",
      "Led a 5-member sales and marketing team across multiple cities.",
      "Managed AI-driven projects and workflow automation.",
      "Analyzed business requirements and supported AI integrations.",
      "Conducted software testing and bug identification.",
      "Created AI-powered marketing collateral and business documents.",
      "Managed inventory, B2B partnerships, and stakeholder relationships.",
    ],
    tags: ["Product Ownership", "AI Automation", "QA Testing", "Team Leadership", "B2B"],
  },
  {
    id: "letsupgrade",
    company: "LetsUpgrade",
    role: "Operations",
    location: "Mumbai",
    period: "Nov 2025 — Jan 2026",
    status: "COMPLETED",
    brief:
      "Kept day-to-day operations moving and owned the communication loop between community and clients.",
    log: [
      "Supported day-to-day business operations and workflow coordination.",
      "Managed community communications and enhanced audience engagement.",
      "Coordinated client meetings, scheduling, and stakeholder communication.",
    ],
    tags: ["Operations", "Community", "Stakeholder Management"],
  },
  {
    id: "playbox",
    company: "Play Box",
    role: "Tech Intern",
    location: "Mumbai",
    period: "July 2024",
    status: "COMPLETED",
    brief:
      "First exposure to the full loop: test the product, manage the client data, then help pitch it.",
    log: [
      "Assisted in software testing, bug identification, and product quality assurance.",
      "Managed CRM operations and maintained client records.",
      "Coordinated meetings and streamlined stakeholder communication.",
      "Supported daily business operations and cross-functional workflows.",
      "Created presentations, documentation, and process workflows.",
      "Contributed to client pitches, market research, and business development.",
    ],
    tags: ["QA Testing", "CRM", "Market Research", "Business Development"],
  },
];

export type Project = {
  id: string;
  name: string;
  code: string;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  result: string;
  tech: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "bank",
    name: "Console Bank Application",
    code: "ARC-01",
    summary: "A console-based banking application covering core account operations.",
    problem:
      "Core banking logic — accounts, balances, transactions — is where correctness matters most and where beginners usually cut corners.",
    approach:
      "Built the application from the ground up in a console environment so the focus stayed entirely on program logic, state handling and input validation.",
    solution:
      "A working console bank application handling account operations end to end.",
    result:
      "Strengthened programming fundamentals and structured problem solving that later carried into QA and testing work.",
    tech: ["C++", "Problem Solving"],
    links: [],
  },
  {
    id: "youtube",
    name: "YouTube Clone — Responsive Front End",
    code: "ARC-02",
    summary: "A responsive YouTube front-end clone, built as a team project in React.",
    problem:
      "Recreating a familiar, dense interface is a real test of layout, component structure and responsive behaviour.",
    approach:
      "Split the interface into reusable React components and coordinated the build across a team so work could progress in parallel.",
    solution:
      "A responsive front end that holds up across screen sizes, assembled from a shared component structure.",
    result:
      "Hands-on experience with React component architecture and collaborating inside a team codebase.",
    tech: ["ReactJS", "HTML", "CSS"],
    links: [],
  },
  {
    id: "desidestiny",
    name: "Desi Destiny",
    code: "ARC-03",
    summary: "A dating application concept built as a product, not just a screen flow.",
    problem:
      "A matchmaking product lives or dies on its user experience — profiles, discovery and interaction have to feel effortless.",
    approach:
      "Approached it with a product mindset: define the user journey first, then design the interface and structure the data around it.",
    solution: "Desi Destiny — a dating application built around a clear user journey.",
    result:
      "Combined UI/UX thinking with product ownership on a single build.",
    tech: ["UI & UX", "Product Thinking"],
    links: [],
  },
];

export const skillGroups = [
  {
    id: "development",
    label: "Development",
    caption: "Building and shipping",
    skills: ["Python", "C++", "ReactJS", "HTML", "CSS", "SQL"],
  },
  {
    id: "product",
    label: "Product & Design",
    caption: "Deciding what to build",
    skills: ["Product Management", "UI & UX", "Problem Solving", "Adaptability"],
  },
  {
    id: "data",
    label: "Data & Database",
    caption: "Where the state lives",
    skills: ["SQL", "MongoDB", "Firebase"],
  },
  {
    id: "quality",
    label: "Quality & Research",
    caption: "Proving it works",
    skills: [
      "Software Testing & QA",
      "Business Research",
      "Market Research",
      "Competitive Analysis",
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    caption: "Moving people and outcomes",
    skills: [
      "Team Leadership",
      "Stakeholder Management",
      "Business Development",
      "Networking",
    ],
  },
];

export const leadership = [
  {
    id: "l1",
    title: "Led a 5-member sales and marketing team",
    context: "Tag8 · Project Manager Intern",
    detail: "Ran the team across multiple cities, not a single location.",
  },
  {
    id: "l2",
    title: "Product Owner on live product work",
    context: "Tag8 · Project Manager Intern",
    detail: "Drove product execution and strategy rather than only delivery tasks.",
  },
  {
    id: "l3",
    title: "Owned B2B partnerships and inventory",
    context: "Tag8 · Project Manager Intern",
    detail: "Managed inventory, B2B partnerships and stakeholder relationships.",
  },
  {
    id: "l4",
    title: "Ran community and client communication",
    context: "LetsUpgrade · Operations",
    detail:
      "Managed community communications, audience engagement, client meetings and scheduling.",
  },
  {
    id: "l5",
    title: "Coordinated cross-functional workflows",
    context: "Play Box · Tech Intern",
    detail:
      "Streamlined stakeholder communication and supported cross-functional daily operations.",
  },
];

export const impact = [
  {
    id: "i1",
    label: "Product Owner",
    text: "Trusted with product execution and strategy as an intern at Tag8.",
  },
  {
    id: "i2",
    label: "Team of 5, Multi-City",
    text: "Led a 5-member sales and marketing team operating across multiple cities.",
  },
  {
    id: "i3",
    label: "AI Automation",
    text: "Managed AI-driven projects, workflow automation and AI integrations.",
  },
  {
    id: "i4",
    label: "Three Internships",
    text: "Tag8, LetsUpgrade and Play Box — tech, operations and business development.",
  },
  {
    id: "i5",
    label: "Quality Ownership",
    text: "Software testing, bug identification and product quality assurance across two roles.",
  },
  {
    id: "i6",
    label: "Trilingual",
    text: "English, Hindi and Marathi — useful when the team spans cities.",
  },
];

export const education = [
  {
    id: "e1",
    school: "ITM Skills University",
    place: "Navi Mumbai",
    program: "Computer Science Engineering",
    period: "Aug 2023 — Present",
  },
  {
    id: "e2",
    school: "A.F.A.C English School and Junior College",
    place: "Mumbai",
    program: "HSC & SSC — Maharashtra State Board",
    period: "Completed",
  },
];

export const drives = [
  {
    title: "Ownership over titles",
    text: "Product Owner as an intern happened because the work got picked up, not handed down.",
  },
  {
    title: "Build, then test it honestly",
    text: "Writing code and breaking code are the same discipline. QA taught me to distrust my own first version.",
  },
  {
    title: "Technology that answers to a business",
    text: "AI automation, market research and B2B partnerships all point at the same question: does this actually help someone?",
  },
  {
    title: "Teams beat individuals",
    text: "Leading five people across cities is a communication problem before it is a management problem.",
  },
];