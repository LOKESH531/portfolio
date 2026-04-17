export const personalInfo = {
  name: "Lokesh G",
  role: "Front-End Developer",
  location: "Bangalore, India",
  tagline: "Building responsive and user-friendly web applications with Angular & React",
  email: "lokesh@example.com",
  github: "https://github.com/lokeshg",
  linkedin: "https://linkedin.com/in/lokeshg",
  twitter: "https://twitter.com/lokeshg",
};

export const about = {
  description: "Detail-oriented Front-End Developer with 5 years of experience building responsive and user-friendly web applications using Angular and React.js. Strong in UI development, API integration, and performance optimization. Currently working at Capgemini and recognized with multiple performance awards.",
  yearsOfExperience: 5,
  projectsCompleted: 15,
  awardsReceived: 3,
};

export const skills = [
  { name: "Angular", level: 95, category: "Framework" },
  { name: "React.js", level: 90, category: "Framework" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "JavaScript (ES6+)", level: 95, category: "Language" },
  { name: "HTML5", level: 95, category: "Markup" },
  { name: "CSS3", level: 90, category: "Styling" },
  { name: "Tailwind CSS", level: 85, category: "Styling" },
  { name: "Bootstrap", level: 85, category: "Styling" },
  { name: "REST API Integration", level: 90, category: "Backend" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
];

export const experience = [
  {
    id: 1,
    company: "Capgemini",
    position: "Senior Process Associate (Front-End / UI Developer)",
    duration: "June 2023 – Present",
    location: "Bangalore, India",
    description: "Leading front-end development projects, mentoring junior developers, and implementing best practices for UI/UX design.",
    achievements: [
      "Received multiple performance awards",
      "Led migration of legacy applications to modern frameworks",
      "Improved application performance by 40%",
    ],
  },
  {
    id: 2,
    company: "Capgemini",
    position: "Process Associate (Front-End Developer)",
    duration: "May 2022 – May 2023",
    location: "Bangalore, India",
    description: "Developed responsive web applications using Angular and React, integrated REST APIs, and collaborated with cross-functional teams.",
    achievements: [
      "Delivered 10+ projects on time",
      "Implemented reusable component library",
      "Enhanced code quality through code reviews",
    ],
  },
  {
    id: 3,
    company: "Freelance / Personal Projects",
    position: "Front-End Developer",
    duration: "June 2020 – April 2022",
    location: "Remote",
    description: "Built custom web applications for clients, focusing on responsive design and modern UI frameworks.",
    achievements: [
      "Completed 5+ freelance projects",
      "Built personal portfolio and open-source projects",
      "Gained expertise in React and Angular",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Web App",
    description: "Full-featured e-commerce platform with product listing, cart functionality, checkout process, and payment integration.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/lokeshg/ecommerce-app",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Comprehensive admin dashboard with charts, tables, dynamic UI components, and real-time data visualization.",
    technologies: ["Angular", "TypeScript", "Bootstrap", "Chart.js"],
    image: "/projects/dashboard.jpg",
    github: "https://github.com/lokeshg/admin-dashboard",
    demo: "https://dashboard-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Responsive personal portfolio website showcasing projects, skills, and professional experience with modern design.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/lokeshg/portfolio",
    demo: "https://lokeshg.vercel.app",
    featured: true,
  },
];
