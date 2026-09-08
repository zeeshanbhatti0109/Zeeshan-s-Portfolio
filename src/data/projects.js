// Central project data — kept separate from presentation components.
export const projects = [
  {
    slug: "multi-factory-erp",
    index: "01",
    name: "Multi-Factory ERP System",
    tagline: "Operational software for manufacturing businesses running more than one site.",
    category: "Web Application",
    year: "2024",
    tech: ["Laravel", "Filament PHP", "PHP", "MySQL", "Filament Shield"],
    layout: "featured",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    summary:
      "A resource planning system built for a business operating several factories at once, covering inventory, staff access and day-to-day operations from one dashboard.",
    overview:
      "Businesses running more than one factory tend to end up with disconnected spreadsheets and manual handoffs between sites. This project replaces that with a single Laravel application that gives each factory its own inventory records, staff accounts and permissions, while keeping everything visible from one place.",
    challenge:
      "The core difficulty wasn't the interface — it was the data model and access control. Different factories needed to manage their own stock and staff without seeing or editing another factory's records, while a small number of admin accounts needed visibility across all of them.",
    approach:
      "I built the application on Laravel with Filament PHP for the admin panel, which meant the interface could be generated directly from the underlying data models rather than hand-built screen by screen. Filament Shield handled the permission layer, so access rules could be defined per role rather than hard-coded into individual pages.",
    solution:
      "The result is a multi-factory system where inventory, users and permissions are scoped correctly by default. Adding a new factory, role or permission doesn't require touching the interface code — it's configuration, not development.",
    features: [
      "Separate inventory records per factory with shared reporting for admin roles",
      "Role-based access control across factory, department and individual permission levels",
      "User management with Filament Shield-driven permission assignment",
      "A scalable database structure designed to support additional factories without rework",
    ],
    development:
      "Built with Laravel for the application logic and Filament PHP for the admin interface, backed by a relational schema designed around factories, inventory items, users and roles as first-class entities. Filament Shield manages the permission layer on top of that structure.",
    outcome:
      "The system gives the business one place to manage inventory and staff access across multiple factories, replacing manual processes with structured, role-aware records.",
    gallery: [
      { label: "Dashboard overview", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
      { label: "Inventory management", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
      { label: "Role & permission editor", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" },
    ],
  },
  {
    slug: "flexfit-rehab-center",
    index: "02",
    name: "Flexfit Rehab Center",
    tagline: "A responsive business website built around appointments and local search visibility.",
    category: "Business Website",
    year: "2024",
    tech: ["WordPress", "Responsive Design", "SEO", "Plugins"],
    layout: "split",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    summary:
      "A WordPress website for a rehabilitation center, structured around booking appointments and being found locally.",
    overview:
      "Flexfit Rehab Center needed a website that did two things well: let prospective patients understand the services on offer, and make it easy to get in touch or book an appointment. WordPress was the right fit for a business that would need to update content themselves over time.",
    challenge:
      "Healthcare-adjacent businesses need to build trust quickly. The site had to present services clearly, work well on mobile — where most local searches happen — and be structured so it could actually rank for local, service-specific searches.",
    approach:
      "I planned the site content around what patients actually search for, then built it in WordPress with a responsive layout and a set of plugins to handle appointment requests and contact forms without custom backend development. Local SEO configuration — page structure, metadata and content — was handled alongside the build rather than after it.",
    solution:
      "A clean, responsive WordPress site with clear service pages, an appointment request flow and contact forms, configured for local search from the outset rather than retrofitted later.",
    features: [
      "Responsive layout tested across mobile, tablet and desktop",
      "Appointment scheduling and contact forms",
      "Local SEO configuration — metadata, structure and content",
      "Business-focused content structure organised around services, not internal jargon",
    ],
    development:
      "Built on WordPress with a set of vetted plugins to handle scheduling and forms, avoiding unnecessary custom code where an existing, well-maintained plugin covered the requirement.",
    outcome:
      "Flexfit now has a professional web presence structured around the two things that matter for a local service business: being understood quickly, and being easy to contact.",
    gallery: [
      { label: "Homepage", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
      { label: "Services layout", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80" },
      { label: "Appointment form", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
    ],
  },
  {
    slug: "task-management-system",
    index: "03",
    name: "Task Management System",
    tagline: "A CRUD web application built for teams to create, update and organise work.",
    category: "Web Application",
    year: "2023",
    tech: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap"],
    layout: "compact",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    summary:
      "A web-based task management application covering the full create, update, delete and organise workflow for teams.",
    overview:
      "A straightforward but complete task management application: teams can create tasks, update their status, delete completed ones and keep everything organised in a responsive interface.",
    challenge:
      "The brief was simple on paper — build a task manager — but the implementation needed to handle the full CRUD cycle cleanly, stay responsive across devices and remain easy to extend.",
    approach:
      "I built the backend in PHP with a structured approach to handling create, read, update and delete operations, and used Bootstrap alongside custom CSS to keep the interface responsive without excess markup.",
    solution:
      "A functional task management system where every core action — creating, updating, deleting and organising tasks — works reliably and the interface adapts cleanly from desktop to mobile.",
    features: [
      "Task creation with structured fields",
      "Status updates and editing",
      "Task deletion and organisation",
      "Responsive interface built with Bootstrap and custom CSS",
    ],
    development:
      "PHP handles the server-side CRUD logic, with JavaScript used for interface behaviour and Bootstrap providing the responsive grid and component base, version-controlled with Git throughout.",
    outcome:
      "A complete, working task management tool that demonstrates the full CRUD cycle in a responsive, usable interface.",
    gallery: [
      { label: "Task board", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80" },
      { label: "Task creation form", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
    ]
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
