import { motion } from "framer-motion";
import { Github, Server, BookOpen, ShoppingBag } from "lucide-react";
import flipBoxScreenshot from "../assets/images/Screenshot_10.png";
import atsAnalyzerImage from "../assets/images/ats-analyzer.png";
import pixelFlowImage from "../assets/images/pixelflow.png";

const projects = [
  {
    id: 1,
    title: "FlipBox | Multivendor Ecommerce Marketplace",
    desc: "A full-stack multivendor marketplace built with Django REST Framework and React (Vite), supporting customer shopping and independent seller order management.",
    features: [
      "Full-Stack Marketplace: Built with Django REST Framework and React (Vite), supporting product search, cart and wishlist management, order placement, and reviews for delivered items. Implemented JWT authentication and role-based access for customers, sellers, and admins using API permissions, ownership checks, and protected routes.",
      "Multi-Seller Order Management: Split checkout into seller-specific sub-orders for independent management through seller dashboards. Used database transactions, row locking, and server-side price and stock validation to prevent overselling.",
      "Secure Payment Flow: Integrated SSLCommerz and Cash on Delivery. Validated transaction ID, amount, and currency server-side before confirming payment, preventing order fulfillment until payment verification.",
      "Automated Testing: Wrote 59 backend tests covering authentication, role permissions, checkout, stock management, multi-seller orders, search, filtering, pagination, payment validation, and cross-user access restrictions."
    ],
    tech: "Django REST Framework, React (Vite), PostgreSQL, JWT, SSLCommerz",
    image: flipBoxScreenshot,
    github: "https://github.com/indrojchowdhury/Multivendor_Ecommerce_Marketplace",
    live: "https://flipbox-marketplace.vercel.app",
    backend: "",
    swagger: "",
    category: "E-Commerce"
  },
  {
    id: 2,
    title: "ATS Analyzer",
    desc: "A resume analysis web app that compares resumes with job descriptions and provides keyword matching, resume quality scoring, and optional AI feedback.",
    features: [
      "Resume Analysis: Users can upload a PDF or DOCX resume, paste a job description, and get a keyword match score, missing keywords, and a resume quality score based on six key sections.",
      "Optional AI Feedback: Added Gemini-powered suggestions for semantic matching, strengths, and resume rewrites. AI is opt-in, so standard analysis works without it.",
      "Personal Dashboard: Added token-based login and a dashboard to revisit saved resumes and reports, with each user's data private to their own account."
    ],
    tech: "React, Django REST Framework, PostgreSQL, Gemini API",
    image: atsAnalyzerImage,
    github: "https://github.com/indrojchowdhury/ATS_Analyzer",
    live: "https://ats-analyzer-alpha.vercel.app",
    backend: "",
    swagger: "",
    category: "AI & Career"
  },
  {
    id: 3,
    title: "PixelFlow",
    desc: "An image management platform for organizing albums, processing image uploads in the background, and downloading optimized files in batches.",
    features: [
      "Image Upload & Validation: Users can create albums and upload up to 20 JPEG, PNG, or WebP images at once. The server validates the actual image content, not just the file extension.",
      "Background Processing: Used Celery, Redis, and Pillow to generate optimized thumbnail, medium, and large WebP versions while preserving aspect ratio and transparency.",
      "Dashboard & Batch Download: Developed a JWT-secured dashboard with processing status, storage savings, ZIP downloads, and scheduled file cleanup."
    ],
    tech: "React, Django REST Framework, PostgreSQL, Celery, Redis, Pillow",
    image: pixelFlowImage,
    github: "https://github.com/indrojchowdhury/PixelFlow",
    live: "https://pixelflow-rust.vercel.app",
    backend: "",
    swagger: "",
    category: "Image Processing"
  },
  {
    id: 4,
    title: "Single-Vendor Ecommerce",
    desc: "A single-vendor ecommerce platform for product discovery, secure checkout, and order tracking.",
    features: [
      "Ecommerce Management: Developed a platform with product management, category browsing, search, filtering, cart, wishlist, and order tracking.",
      "Secure Checkout & Payment: Implemented Cash on Delivery and SSLCommerz with server-side transaction validation, stock verification, and database transactions to prevent overselling.",
      "Authentication & Testing: Implemented JWT authentication and role-based access for customers and admins. Wrote 59 automated backend tests covering authentication, permissions, checkout, stock management, product filtering, and payment validation."
    ],
    tech: "JWT, SSLCommerz",
    github: "",
    backend: "",
    swagger: "",
    category: "E-Commerce"
  },
  {
    id: 5,
    title: "HireOS | AI-Powered Multi-Tenant SaaS Job Portal & ATS",
    desc: "A full-stack, AI-powered multi-tenant SaaS job portal and Applicant Tracking System built with Django REST Framework and React.",
    features: [
      "Full-Stack SaaS: Built with Django REST Framework and React. Developed role-based JWT authentication and database transaction logic to auto-create isolated company workspaces and dashboards upon employer registration.",
      "Async Feature Engine: Used OOP principles to extend backend generic views and user models. Integrated Celery and Redis for background resume processing, automated score evaluation, and dynamic PDF offer letter delivery.",
      "Query & DSA Optimization: Used data structures and logical filters for job feeds and subscription limits. Eliminated N+1 bottlenecks with select_related and prefetch_related, improving PostgreSQL query speeds by 10x.",
      "Employer Dashboard & Testing: Created a drag-and-drop Kanban board with optimistic state updates and secured core workflows with 21 automated backend integration tests."
    ],
    tech: "Python, Django REST Framework, React, PostgreSQL, Celery, Redis, JWT",
    github: "https://github.com/indrojchowdhury/HireOS-AI-Powered-Multi-Tenant-SaaS-Job-Portal-ATS",
    backend: "",
    swagger: "",
    category: "AI & SaaS"
  },
  {
    id: 6,
    title: "Hospital Management System (HMS)",
    desc: "A full-stack web application designed to streamline hospital operations, patient bookings, doctor schedules, and dashboard management.",
    features: [
      "Authentication & Role Management: Separate access for patients, doctors, receptionists, and admins.",
      "Appointment Booking: Patients can book appointments for themselves, while admins and doctors can book on behalf of patients.",
      "Appointment Lifecycle: Track appointments through Pending, Approved, Completed, and Cancelled statuses.",
      "Doctor Dashboard & Filtering: Show real-time analytics for today's active appointments, pending requests, and active patients, with dynamic status-based appointment filtering."
    ],
    tech: "Python, Django, Django REST Framework, React (Vite), SQLite, Tailwind CSS, Axios, JWT",
    github: "https://github.com/indrojchowdhury/Hospital-Management-Systems",
    backend: "",
    swagger: "",
    category: "Healthcare"
  },
];

const openExternal = (url) => {
  if (!url || url === "#") return;
  window.open(url, "_blank", "noopener,noreferrer");
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto mt-3"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production-grade full stack applications showcasing secure backend architecture,
            modern frontend design, and scalable system solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-blue-50 dark:bg-gray-700">
                    <ShoppingBag className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {project.title}
                    </span>
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-justify">
                  {project.desc}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, idx) => {
                      const separatorIndex = feature.indexOf(": ");
                      const featureTitle = separatorIndex >= 0 ? feature.slice(0, separatorIndex) : null;
                      const featureDescription = separatorIndex >= 0
                        ? feature.slice(separatorIndex + 2)
                        : feature;

                      return (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-blue-500 dark:text-blue-400 mt-0.5">▹</span>
                          <span className="flex-1 text-justify">
                            {featureTitle && <strong className="font-semibold">{featureTitle}: </strong>}
                            {featureDescription}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.split(', ').slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.split(', ').length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                        +{project.tech.split(', ').length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.github && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openExternal(project.github)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition shadow-sm"
                    >
                      <Github size={14} />
                      Code
                    </motion.button>
                  )}

                  {project.live && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openExternal(project.live)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
                    >
                      Live
                    </motion.button>
                  )}

                  {project.backend && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openExternal(project.backend)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <Server size={14} />
                      API
                    </motion.button>
                  )}

                  {project.swagger && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openExternal(project.swagger)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                    >
                      <BookOpen size={14} />
                      Docs
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;