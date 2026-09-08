// Central configuration file for all site-wide static content
// Edit this file to update personal info, site content, and messaging

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Zeeshan",
    fullName: "Zeeshan",
    role: "Web Developer",
    email: "zeeshanbhatti0109@gmail.com",
    phone: "+923113629211",
    phoneDisplay: "0311-3629211",
    location: "Multan, Pakistan",
    availability: "Currently open to new projects",
    
    // Social Links
    social: {
      github: "https://github.com/zeeshanbhatti0109/",
      githubDisplay: "github.com/zeeshanbhatti0109",
      linkedin: "https://linkedin.com/in/zeeshanbhatti-45aa02378/",
      linkedinDisplay: "linkedin.com/in/zeeshanbhatti",
    },
  },

  // Site Navigation
  navigation: [
    { to: "/work", label: "Work" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/process", label: "Process" },
    { to: "/contact", label: "Contact" },
  ],

  // Hero Section
  hero: {
    headline: "Websites that make businesses look better, work better, and grow.",
    subheading: "I design and build business websites, WordPress sites, React interfaces and Laravel applications — for companies that need a web presence that actually works for them.",
    panelKicker: "What that looks like",
    capabilities: [
      "Business Websites",
      "Web Applications", 
      "Modern Frontend",
      "Performance & SEO",
    ],
    locationNote: "Based in Multan, working with clients everywhere",
    primaryCta: { text: "View my work", to: "/work" },
    secondaryCta: { text: "Let's work together", to: "/contact" },
  },

  // SEO Page Configuration
  seo: {
    home: {
      title: "Web Developer",
      description: "Zeeshan builds business websites, WordPress sites, React interfaces and Laravel applications for businesses ready to move forward.",
    },
    work: {
      title: "Work",
      description: "Selected projects showcasing web development work across business websites, WordPress, React, Laravel and custom applications.",
    },
    services: {
      title: "Services",
      description: "Web development services including business websites, WordPress, React/Next.js, Laravel/PHP, custom applications and performance optimization.",
    },
    about: {
      title: "About",
      description: "Zeeshan is a web developer working across PHP, Laravel, WordPress and modern frontend development, based in Multan, Pakistan.",
    },
    process: {
      title: "Process",
      description: "A structured approach to web development projects from discovery through launch, with clear planning and communication at each stage.",
    },
    contact: {
      title: "Contact",
      description: "Get in touch to start a web development project — business websites, WordPress, React, Laravel and custom applications.",
    },
  },

  // Page Headings
  pageHeadings: {
    work: "A selection of websites and web applications I've built across business, content and operational use cases.",
    services: "Development services built around what your business actually needs.",
    process: "How a project actually moves from idea to something live.",
  },

  // Project Detail Page Labels
  projectDetail: {
    backLink: "All work",
    nextProject: "Next project",
    startSimilarProject: "Start a similar project",
    labels: {
      overview: "Overview",
      challenge: "Challenge",
      approach: "Approach",
      solution: "Solution",
      keyFeatures: "Key features",
      visualGallery: "Visual gallery",
      developmentDetails: "Development details",
      outcome: "Outcome",
      technology: "Technology",
      category: "Category",
      year: "Year",
    },
  },

  // Contact Form Configuration
  contact: {
    projectTypes: [
      "Business Website",
      "WordPress Website",
      "React / Next.js",
      "Laravel / PHP",
      "Custom Web Application",
      "Website Redesign",
      "Performance Optimization",
      "Other",
    ],
    budgets: [
      "Under $500",
      "$500 – $1,500",
      "$1,500 – $5,000",
      "$5,000+",
      "Not sure yet",
    ],
    emailSubject: "New project inquiry — ",
  },

  // About Page Content
  about: {
    heroHeading: "I build the parts of a business that live on the internet.",
    introduction: "", // Will be set dynamically using personal info
    journey: "I moved into web development the way a lot of developers do — by building things and figuring out what was actually needed to make them work properly. That path took me from frontend basics into PHP and Laravel, then into WordPress and database design, because real projects rarely stay inside one discipline.",
    experience: "I've worked hands-on across WordPress builds, Laravel applications, PHP backends, React interfaces, JavaScript and relational databases — including a multi-factory ERP system, a business website for a rehab center, and a full CRUD task management application. That range means I can move between the frontend and backend of a project without losing context.",
    otherExperience: "Alongside development, I have experience in content writing and SEO/content strategy. That means I don't only think about how a website is built — I think about how content, search intent and user experience affect whether it actually gets found and read. It's a practical advantage when planning site structure and copy, not just development.",
    approach: [
      "Clean, uncluttered interfaces over decoration for its own sake",
      "Responsive by default — not just checked at the end",
      "Practical solutions matched to the actual problem, not the trendiest stack",
      "Performance and maintainability, so a site holds up after launch",
      "Usability and business goals over technical showing-off",
    ],
    techHeading: "What I build with.",
  },

  // CTA Banner Messages
  cta: {
    home: {
      heading: "Let's build something worth visiting.",
      text: "Tell me what you're working on, what you need, and where you'd like to take it.",
      buttonText: "Start a project",
      buttonTo: "/contact",
    },
    about: {
      heading: "Like how this sounds?",
      text: "Let's talk about what you're building.",
      buttonText: "Get in touch",
      buttonTo: "/contact",
    },
    services: {
      heading: "Not sure which service fits?",
      text: "Tell me what you're trying to achieve and I'll tell you what actually makes sense to build.",
      buttonText: "Get in touch",
      buttonTo: "/contact",
    },
    process: {
      heading: "Ready to start with step one?",
      text: "A short conversation is all it takes to get moving.",
      buttonText: "Start a project",
      buttonTo: "/contact",
    },
    footer: {
      label: "Currently open to new projects",
      link: "Let's talk",
    },
  },

  // Footer Content
  footer: {
    description: "Building thoughtful websites and web applications with a focus on design, performance and functionality.",
    bottomText: "Designed & built from scratch.",
  },
};

// Helper function to get dynamic content with fallbacks
export const getPersonalInfo = () => siteConfig.personal;

export const getNavigation = () => siteConfig.navigation;

export const getHeroContent = () => siteConfig.hero;

export const getSeoConfig = (page) => siteConfig.seo[page] || {};

export const getContactConfig = () => siteConfig.contact;

export const getAboutContent = () => {
  const personal = getPersonalInfo();
  return {
    ...siteConfig.about,
    introduction: `I'm ${personal.name}, a web developer based in ${personal.location}, working across frontend development, backend development, databases and WordPress. I build business websites, web applications and custom interfaces for clients who need a web presence that actually does something for them — not just exists.`,
  };
};

export const getCtaContent = (type) => siteConfig.cta[type] || {};

export const getFooterContent = () => siteConfig.footer;

export const getPageHeading = (page) => siteConfig.pageHeadings[page] || "";

export const getProjectDetailConfig = () => siteConfig.projectDetail;