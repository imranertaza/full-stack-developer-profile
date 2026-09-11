/* ============================================================
   PROJECTS DATA — CASE STUDY FORMAT
   ------------------------------------------------------------
   Central store for all portfolio project case studies.
   Each project is keyed by a unique slug used in the URL:
   e.g. project-details.html?project=finer-labels

   Structure per project:
   - title / tagline        : headline content
   - client / industry      : meta strip info
   - technology             : e.g. "Laravel / Vue / MySQL"
   - challenge              : "The client needed..." narrative
   - work                   : "What I Did" bullet list
   - results                : measurable outcomes (value + label)
   - liveUrl                : "Visit Live Website" link ("#" = hidden)
   - gallery                : optional screenshot images

   To add a new project: copy a block, change the key, fill fields.
   ============================================================ */

const PROJECTS = {
    "price-matters": {
        title: "PriceMatters",
        tagline: "A global product sourcing and dropshipping platform connecting online businesses with factory-direct products.",
        client: "PriceMatters",
        industry: "Dropshipping / Ecommerce / Product Sourcing",
        technology: "PHP / MySQL / JavaScript / REST APIs / Payment Gateway Integration",
        cover: "assets/images/projects/pricematters.png",
        liveUrl: "https://www.pricematters.com/",
        challenge: "The client needed a complete online platform that could simplify product discovery, sourcing, ordering, payment, and international fulfillment for ecommerce businesses. The system needed to connect with external product data, support product discovery, handle multiple currencies and languages, and provide customers with a smooth purchasing experience.",
        work: [
            "Developed the ecommerce and product sourcing platform from the ground up",
            "Integrated Alibaba product APIs to retrieve and display a large product catalog",
            "Implemented product search and product discovery functionality",
            "Integrated payment gateways for secure online transactions",
            "Integrated currency conversion functionality to support international customers",
            "Integrated Google Translate functionality to improve multilingual product and supplier communication",
            "Developed customer account functionality for managing products, orders, payments, and sourcing activities",
            "Implemented order and transaction management workflows",
            "Developed responsive interfaces for desktop and mobile users",
            "Integrated multiple third-party services and APIs into a unified platform",
            "Implemented backend logic for product, customer, order, payment, and sourcing management"
        ],
        results: [
            { value: "1B+", label: "Products accessible through sourcing platform" },
            { value: "API", label: "Alibaba product integration" },
            { value: "Multi", label: "Currency and payment support" },
            { value: "Multi", label: "Language support" },
            { value: "End-to-End", label: "Product sourcing to ordering workflow" }
        ],
        gallery: []
    },

    "finer-labels": {
        title: "Finer Labels",
        tagline: "A custom fashion ecommerce platform built to deliver a smooth shopping experience and flexible product management.",
        client: "Finer Labels",
        industry: "Fashion / Ecommerce",
        technology: "PHP / Codeigniter / MySQL",
        cover: "assets/images/projects/fl.png",
        liveUrl: "https://finerlabels.io/",
        challenge: "The client needed a modern ecommerce platform capable of managing a large fashion product catalog with different products, variants, sizes, pricing, inventory, and customer orders. The platform also required a flexible administration system and a reliable shopping and checkout experience.",
        work: [
            "Developed the ecommerce platform using PHP Codeigniter framework and Mysql",
            "Built custom product and category management functionality",
            "Implemented product variants, sizes, pricing, and inventory management",
            "Developed customer registration, authentication, cart, and checkout functionality",
            "Integrated few international payment gateways and order processing workflows",
            "Developed administrative tools for managing products, customers, orders, and content",
            "Optimized database queries and application performance",
            "Implemented responsive frontend interfaces",
            "Improved product browsing, filtering, and search experience",
            "Implemented order management and customer notification functionality"
        ],
        results: [
            { value: "Codeigniter", label: "Scalable backend architecture" },
            { value: "Mysql", label: "Modern interactive frontend" },
            { value: "Ecommerce", label: "Complete online shopping workflow" },
            { value: "Custom", label: "Product and inventory management" },
            { value: "Integration", label: "International Payment Gateway integration" },
            { value: "Responsive", label: "Desktop and mobile experience" },
        ],
        gallery: []
    },

    "trustytime": {
        title: "TrustyTime QC Pictures",
        tagline: "A feature-rich ecommerce platform designed for managing a large product catalog and customer-focused shopping experience.",
        client: "TrustyTime",
        industry: "Retail / Ecommerce / Image Gallery",
        technology: "Laravel / Vue / JavaScript",
        cover: "assets/images/projects/trustytime.png",
        liveUrl: "https://qcpics.com/",
        challenge: "The project required a complete ecommerce environment for managing a large number of products, product variations, customer orders, quality-control information, and supporting product documentation. The platform needed to make product information easily accessible while maintaining a practical shopping workflow.",
        work: [
            "Developed and customized the ecommerce platform",
            "Implemented product catalog and category management",
            "Developed product detail pages with detailed product information",
            "Integrated customer-facing quality-control picture functionality",
            "Implemented product and order management workflows",
            "Customized the ecommerce shopping and checkout experience",
            "Worked with product URLs and existing ecommerce structures",
            "Implemented frontend improvements for product discovery and usability",
            "Optimized the platform for a large product catalog",
            "Maintained and enhanced existing ecommerce functionality"
        ],
        results: [
            { value: "Large", label: "Product catalog support" },
            { value: "QC", label: "Customer-facing quality-control images" },
            { value: "Custom", label: "Ecommerce functionality" },
            { value: "Product", label: "Detailed product information" },
            { value: "Live", label: "Production ecommerce platform" }
        ],
        gallery: []
    },

    "gawsia": {
        title: "Gawsia",
        tagline: "A professional business website designed to present the company's services, brand, and online presence.",
        client: "Gawsia",
        industry: "Business / Corporate",
        technology: "WordPress / PHP / MySQL / HTML / CSS",
        cover: "assets/images/projects/gawsia.png",
        liveUrl: "https://gawsia.com/",
        challenge: "The client needed a professional web presence that could clearly communicate its business, services, brand identity, and key information to potential customers. The website needed to be responsive, easy to navigate, and structured around the company's business goals.",
        work: [
            "Designed and developed the website structure",
            "Implemented responsive layouts for desktop, tablet, and mobile",
            "Developed business-focused content sections and navigation",
            "Implemented reusable website components",
            "Optimized images and frontend assets",
            "Implemented contact and customer inquiry functionality",
            "Structured the website for search-engine-friendly content",
            "Integrated the required frontend interactions and functionality",
            "Performed cross-browser and responsive testing"
        ],
        results: [
            { value: "Responsive", label: "Multi-device website" },
            { value: "Professional", label: "Corporate online presence" },
            { value: "SEO", label: "Search-friendly structure" },
            { value: "Custom", label: "Business-focused design" }
        ],
        gallery: []
    },

    "eurhythmy": {
        title: "Eurhythmy",
        tagline: "A professional international website created to communicate a specialized architech organization and its services to a global audience.",
        client: "Eurhythmy",
        industry: "Architech Organization / Professional Services",
        technology: "WordPress / PHP / MySQL / HTML / CSS",
        cover: "assets/images/projects/eurhythmy.png",
        liveUrl: "https://eurhythmy.co.uk/",
        challenge: "The client required a professional website that could present its organization, services, information, and resources clearly to an international audience. The platform needed a clean structure, responsive design, easy navigation, and a professional visual presentation.",
        work: [
            "Designed and developed the website frontend and backend structure",
            "Created responsive layouts for desktop and mobile devices",
            "Implemented structured navigation and content sections",
            "Developed reusable content components",
            "Implemented contact and inquiry functionality",
            "Optimized website assets and frontend performance",
            "Implemented SEO-friendly page structures",
            "Improved usability and content accessibility",
            "Tested the website across different devices and browsers"
        ],
        results: [
            { value: "International", label: "Professional web presence" },
            { value: "Responsive", label: "Mobile-friendly experience" },
            { value: "SEO", label: "Search-friendly content structure" },
            { value: "Custom", label: "Tailored website implementation" }
        ],
        gallery: []
    },

    "shohoz-hishab": {
        title: "Shohoz Hishab",
        tagline: "A business accounting and financial management system designed to simplify day-to-day business transactions and reporting.",
        client: "Shohoz Hishab",
        industry: "Accounting / Business Management Software",
        technology: "CodeIgniter 4 / PHP 8 / MySQL / JavaScript",
        cover: "assets/images/projects/shohoz-hishab.png",
        liveUrl: "#",
        challenge: "Businesses need a simple way to record sales, purchases, payments, receipts, transactions, customer balances, supplier balances, and financial reports. The goal of Shohoz Hishab is to bring these everyday accounting operations into a centralized web-based management system while keeping the workflow practical for business users.",
        work: [
            "Designed and developed the accounting management system architecture",
            "Developed sales and purchase transaction modules",
            "Implemented customer and supplier account management",
            "Implemented debit and credit transaction handling",
            "Developed ledger and transaction history functionality",
            "Implemented daily book and transaction reporting",
            "Developed trial balance and financial reporting functionality",
            "Implemented bank and cash transaction management",
            "Developed running balance calculations for financial transactions",
            "Designed database structures for accounting records and relationships",
            "Implemented business-focused workflows for day-to-day financial management"
        ],
        results: [
            { value: "Accounting", label: "Core financial management system" },
            { value: "Sales", label: "Sales and transaction management" },
            { value: "Purchase", label: "Purchase management" },
            { value: "Ledger", label: "Customer and supplier ledger" },
            { value: "Reports", label: "Financial reporting and analysis" }
        ],
        gallery: []
    },

    "h-office": {
        title: "H-Office",
        tagline: "A modern Laravel and Vue-based business application designed to centralize operational management.",
        client: "H-Office",
        industry: "Business Management / Web Application",
        technology: "Laravel / MySQL / Vite",
        cover: "assets/images/projects/h-office.png",
        liveUrl: "#",
        challenge: "The project required a modern business application with a structured backend and interactive frontend. The system needed to provide administrators with an efficient interface for managing business information, records, and operational workflows through a centralized web application.",
        work: [
            "Developed the application using Laravel and Vue 3",
            "Implemented a modern Vue-based administrative interface",
            "Developed reusable frontend components",
            "Implemented backend business logic and database relationships",
            "Developed CRUD-based management modules",
            "Implemented authentication and administrator functionality",
            "Designed API-driven communication between frontend and backend",
            "Integrated Vite into the frontend development workflow",
            "Implemented responsive administrative interfaces",
            "Structured the application for future module expansion"
        ],
        results: [
            { value: "Laravel", label: "Modern backend framework" },
            { value: "Vue 3", label: "Interactive frontend application" },
            { value: "API", label: "Frontend-backend integration" },
            { value: "Modular", label: "Expandable business architecture" }
        ],
        gallery: []
    },

    "ccart": {
        title: "CCART Ecommerce CMS",
        tagline: "A reusable ecommerce CMS built to help businesses launch and manage customized online stores.",
        client: "DNationSoft",
        industry: "Ecommerce / Software Product",
        technology: "CodeIgniter / PHP / MySQL / JavaScript",
        cover: "assets/images/projects/ccart.png",
        liveUrl: "#",
        challenge: "Businesses often need ecommerce functionality without building an entire platform from scratch. CCART was developed as a reusable ecommerce CMS providing the core functionality required to manage products, customers, orders, categories, and online shopping workflows while remaining flexible enough for project-specific customization.",
        work: [
            "Designed and developed the ecommerce CMS architecture",
            "Implemented product and category management",
            "Developed customer and account management functionality",
            "Implemented cart and checkout workflows",
            "Developed order management functionality",
            "Implemented payment integration capabilities",
            "Developed configurable ecommerce components",
            "Created reusable modules for future ecommerce projects",
            "Implemented database structures for products, orders, customers, and transactions",
            "Customized the platform according to individual client requirements"
        ],
        results: [
            { value: "Reusable", label: "Ecommerce software platform" },
            { value: "Modular", label: "Customizable architecture" },
            { value: "Ecommerce", label: "Complete online store workflow" },
            { value: "Scalable", label: "Foundation for multiple projects" }
        ],
        gallery: []
    },

    // "business-analytics-dashboard": {
    //     title: "Business Analytics Dashboard",
    //     tagline: "A centralized web dashboard designed to turn operational data into clear business insights.",
    //     client: "Confidential Client",
    //     industry: "Business Intelligence / Analytics",
    //     technology: "CodeIgniter / PHP / MySQL / JavaScript / Chart.js",
    //     cover: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    //     liveUrl: "#",
    //     challenge: "The client needed a centralized interface for monitoring business data and operational performance instead of relying on disconnected reports and spreadsheets. The dashboard needed to present important information in a simple and actionable format for management users.",
    //     work: [
    //         "Designed the dashboard architecture and database structure",
    //         "Developed management dashboards and reporting screens",
    //         "Implemented dynamic charts and data visualizations",
    //         "Developed filtering and date-based reporting functionality",
    //         "Implemented role-based access for different types of users",
    //         "Optimized database queries for reporting operations",
    //         "Developed exportable and printable reports",
    //         "Created reusable dashboard components",
    //         "Implemented responsive layouts for management users"
    //     ],
    //     results: [
    //         { value: "Centralized", label: "Business reporting" },
    //         { value: "Real-time", label: "Operational data visibility" },
    //         { value: "Role-based", label: "Controlled dashboard access" },
    //         { value: "Reports", label: "Management reporting tools" }
    //     ],
    //     gallery: []
    // },

    "custom-cms": {
        title: "Custom CMS Web Application",
        tagline: "A flexible custom CMS designed for businesses that need more control than an off-the-shelf platform can provide.",
        client: "Confidential Client",
        industry: "Content Management / Web Application",
        technology: "Laravel / Vue / PHP / MySQL / JavaScript",
        cover: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
        liveUrl: "#",
        challenge: "The client required a content management platform tailored to its specific business workflow rather than adapting an existing CMS around its limitations. The system needed flexible content management, administrative controls, media handling, and an architecture that could be extended as the business evolved.",
        work: [
            "Designed the CMS database and application architecture",
            "Developed custom content management modules",
            "Implemented administrator and user management",
            "Developed media and file management functionality",
            "Implemented dynamic content fields",
            "Developed reusable frontend templates",
            "Implemented SEO-friendly URLs and metadata management",
            "Added access control and authentication functionality",
            "Optimized database queries and application performance",
            "Created a maintainable architecture for future feature development"
        ],
        results: [
            { value: "Custom", label: "Business-specific CMS" },
            { value: "Flexible", label: "Content management structure" },
            { value: "SEO", label: "Search-friendly content management" },
            { value: "Scalable", label: "Expandable application architecture" }
        ],
        gallery: []
    }
};
