// client/src/data/servicesData.js
export const DEFAULT_SERVICES = {
  'software-development': {
    title: 'Software Development',
    category: 'Software & Web Development',
    iconClass: 'bi bi-code-square',
    badge: 'Enterprise Software',
    subtitle: 'Custom business logic, enterprise desktop applications, and backend software systems.',
    overview: [
      'We engineer custom software applications designed specifically to automate complex business workflows, eliminate operational friction, and drive organizational efficiency. From single-user utility tools to multi-tenant enterprise software suites, our engineering team ensures high security, scalable database architecture, and seamless integration with your existing IT infrastructure.',
      'Our development process follows strict Agile software development lifecycles (SDLC). We begin with thorough business analysis and architectural design, progressing through iterative sprint development, continuous integration, and comprehensive quality assurance testing. This methodology guarantees complete transparency, early risk mitigation, and predictable project timelines.',
      'In addition to new software builds, we specialize in legacy software modernization, refactoring monolithic applications into modular microservices, and providing long-term maintenance SLAs to keep your core business systems running reliably 24/7.',
    ],
    capabilities: [
      {
        title: 'Custom Business Logic',
        desc: 'Tailor-made application logic engineered precisely around your proprietary business rules.',
        icon: 'bi-cpu',
      },
      {
        title: 'Cross-Platform Compatibility',
        desc: 'Deploy seamlessly on Windows, macOS, Linux, and cloud server environments.',
        icon: 'bi-window-desktop',
      },
      {
        title: 'Legacy Code Modernization',
        desc: 'Refactor and upgrade outdated codebase to modern microservices and modern UI frameworks.',
        icon: 'bi-arrow-repeat',
      },
      {
        title: 'Database Architecture Design',
        desc: 'High-speed relational (PostgreSQL, MySQL) and NoSQL (MongoDB) data modeling.',
        icon: 'bi-database-gear',
      },
      {
        title: 'Third-Party API Integration',
        desc: 'Seamlessly link accounting, ERP, CRM, and payment services via REST/SOAP APIs.',
        icon: 'bi-plug-fill',
      },
      {
        title: 'Automated Testing & QA',
        desc: 'Comprehensive unit, integration, and end-to-end regression test coverage.',
        icon: 'bi-check-all',
      },
    ],
    techStack: ['Python', 'Node.js', 'React.js', 'Electron', 'PostgreSQL', 'C# / .NET', 'Docker'],
    benefits: [
      'Increased operational efficiency through workflow automation',
      'Reduced maintenance costs with clean, documented codebases',
      'Scalable architecture designed to handle growing data volume',
      '100% intellectual property ownership of source code',
    ],
  },

  'web-application-development': {
    title: 'Web Application Development',
    category: 'Software & Web Development',
    iconClass: 'bi bi-window-stack',
    badge: 'Full-Stack Web',
    subtitle: 'High-concurrency web applications, SaaS platforms, and enterprise web portals.',
    overview: [
      'Our web engineering team designs and develops modern, high-performance web applications using React.js, Next.js, Node.js, and cloud-native backends. We focus on lightning-fast page load times, responsive mobile rendering, robust API endpoints, and military-grade security to ensure your web platform scales effortlessly to millions of active users.',
      'We leverage modern full-stack architectures including microservices, server-side rendering (SSR), RESTful APIs, and GraphQL data layers. Real-time web sockets enable live dashboard updates, interactive user collaboration, and instant push alerts across web browsers.',
      'Every web application is engineered with elastic cloud autoscaling, CDN edge caching, Core Web Vitals performance tuning, and automated security headers to ensure bulletproof reliability under heavy traffic spikes.',
    ],
    capabilities: [
      {
        title: 'Single Page Applications (SPA)',
        desc: 'Ultra-fast, fluid user interfaces powered by React.js & modern JavaScript.',
        icon: 'bi-speedometer2',
      },
      {
        title: 'SaaS Platform Development',
        desc: 'Multi-tenant database isolation, subscription billing, and user role management.',
        icon: 'bi-clouds',
      },
      {
        title: 'RESTful & GraphQL APIs',
        desc: 'High-throughput API endpoints optimized for low latency and data serialization.',
        icon: 'bi-diagram-3-fill',
      },
      {
        title: 'Real-Time Web Sockets',
        desc: 'Live chat, notifications, real-time telemetry dashboarding, and web sockets.',
        icon: 'bi-broadcast',
      },
      {
        title: 'Progressive Web Apps (PWA)',
        desc: 'Offline accessibility, push notifications, and mobile app-like experiences on web.',
        icon: 'bi-phone-vibrate',
      },
      {
        title: 'SEO & Performance Tuning',
        desc: 'Core Web Vitals optimization, server-side rendering (SSR), and CDN caching.',
        icon: 'bi-search',
      },
    ],
    techStack: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Tailwind CSS'],
    benefits: [
      'Fluid 60FPS user experience across desktop and mobile browsers',
      'Bank-grade SSL/TLS encryption & session management',
      'Elastic cloud scalability to handle traffic surges seamlessly',
      'Modular code structure for effortless feature additions',
    ],
  },

  'mobile-app-hybrid': {
    title: 'Mobile App Development (Hybrid & Native)',
    category: 'Software & Web Development',
    iconClass: 'bi bi-phone',
    badge: 'iOS & Android',
    subtitle: 'Cross-platform mobile apps using React Native and Flutter with native speed.',
    overview: [
      'We craft sleek, feature-rich mobile applications for Apple iOS and Google Android using industry-leading cross-platform frameworks like React Native and Flutter. Get native-grade 60FPS user experiences, smooth touch gestures, and uniform brand aesthetics at a fraction of dual-team native build costs.',
      'Our mobile applications integrate directly with native smartphone hardware features, including GPS geolocation tracking, camera capture, biometric authentication (FaceID/Fingerprint), Bluetooth connectivity, and background location services.',
      'We handle the full mobile deployment pipeline, including offline data synchronization, Firebase Cloud Messaging (FCM) push notifications, payment gateway SDKs, and full submission management for the Apple App Store and Google Play Store.',
    ],
    capabilities: [
      {
        title: 'React Native & Flutter',
        desc: 'Single unified codebase delivering native 60FPS iOS and Android experiences.',
        icon: 'bi-device-ssd',
      },
      {
        title: 'Hardware Feature Access',
        desc: 'Native camera capture, GPS geolocation tracking, biometric auth, & Bluetooth.',
        icon: 'bi-gear-fill',
      },
      {
        title: 'Push Notifications & Messaging',
        desc: 'Firebase Cloud Messaging (FCM) & APNS setup for user re-engagement.',
        icon: 'bi-bell-fill',
      },
      {
        title: 'Offline Data Storage',
        desc: 'SQLite, Realm, and Async Storage for uninterrupted offline usage.',
        icon: 'bi-database-fill-check',
      },
      {
        title: 'App Store & Play Store Publish',
        desc: 'Complete submission management, compliance review, and store optimization.',
        icon: 'bi-shop',
      },
      {
        title: 'In-App Purchases & Payments',
        desc: 'Stripe, Razorpay, Apple Pay, & Google Pay SDK integrations.',
        icon: 'bi-wallet2',
      },
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Redux', 'REST API', 'GraphQL'],
    benefits: [
      '50% reduction in time-to-market compared to separate native builds',
      'Consistent design system across Apple iOS and Android devices',
      'Seamless over-the-air (OTA) code update capability',
      'High user engagement via personalized push notifications',
    ],
  },

  'api-development': {
    title: 'API Development & Integration',
    category: 'Software & Web Development',
    iconClass: 'bi bi-gear-wide-connected',
    badge: 'Microservices & REST',
    subtitle: 'Robust, secure RESTful & GraphQL microservice APIs built for speed.',
    overview: [
      'Connect software ecosystems, mobile apps, third-party services, and internal enterprise tools with high-throughput RESTful and GraphQL APIs. We design microservices with JWT bearer token authentication, rate limiting, strict JSON request validation, and OpenAPI / Swagger live interactive documentation.',
      'Our API architecture is built for ultra-low latency utilizing Redis caching layers, database indexing, and asynchronous queue workers. We ensure seamless data serialization and sub-50ms query response times under high concurrency loads.',
      'We also build custom webhook integrations connecting payment processors (Razorpay, Stripe), SMS gateways, WhatsApp Business API, CRM platforms, and accounting tools into unified event-driven pipelines.',
    ],
    capabilities: [
      {
        title: 'RESTful & GraphQL Endpoints',
        desc: 'Clean, standard-compliant API routes with flexible query payloads.',
        icon: 'bi-diagram-2',
      },
      {
        title: 'JWT & OAuth2 Security',
        desc: 'Role-based access control (RBAC), access token rotation, and SSL enforcement.',
        icon: 'bi-shield-lock-fill',
      },
      {
        title: 'Rate Limiting & Throttling',
        desc: 'Redis-backed token bucket rate limiting to prevent API abuse and DDoS attacks.',
        icon: 'bi-speedometer',
      },
      {
        title: 'OpenAPI / Swagger Specs',
        desc: 'Interactive live documentation for developer onboarding and client SDK generation.',
        icon: 'bi-file-code',
      },
      {
        title: 'Third-Party Webhooks',
        desc: 'Stripe, WhatsApp Business API, SMS gateway, & CRM webhook handlers.',
        icon: 'bi-send-check',
      },
      {
        title: 'Microservices Architecture',
        desc: 'Decoupled, independently deployable serverless and containerized services.',
        icon: 'bi-boxes',
      },
    ],
    techStack: ['Node.js', 'Express', 'Python FastAPI', 'PostgreSQL', 'Redis', 'Swagger / OpenAPI', 'Postman'],
    benefits: [
      'Instant data sync between mobile apps, web portals, & enterprise backends',
      'Sub-50ms API response times with intelligent Redis caching',
      'Comprehensive API security preventing unauthorized data leaks',
      'Self-documenting endpoints easing developer integration',
    ],
  },

  'ui-ux-design': {
    title: 'UI/UX Design & Prototyping',
    category: 'Software & Web Development',
    iconClass: 'bi bi-palette',
    badge: 'Product Design',
    subtitle: 'Apple-grade user interface design, design systems, and interactive wireframing.',
    overview: [
      'We blend visual aesthetics with human psychological principles to design intuitive, high-converting digital products. From user persona research and wireframe user journeys to high-fidelity Figma component libraries, responsive design tokens, and micro-interactions, we ensure your application captivates users.',
      'Our UI/UX team develops comprehensive design systems containing atomic UI elements, typography scales, color palettes, and interactive states. This ensures visual consistency across web, mobile, and tablet interfaces while accelerating frontend development.',
      'We conduct detailed UX usability audits, conversion funnel analyses, and Web Content Accessibility Guidelines (WCAG) audits to remove user friction, improve screen reader accessibility, and boost customer retention.',
    ],
    capabilities: [
      {
        title: 'User Journey & Wireframing',
        desc: 'Structural blueprints and click-through wireframe prototypes before coding.',
        icon: 'bi-journal-code',
      },
      {
        title: 'Figma Design Systems',
        desc: 'Reusable component libraries, typography scale, color tokens, and design guides.',
        icon: 'bi-grid-3x3-gap',
      },
      {
        title: 'Mobile-First Responsive Layouts',
        desc: 'Flawless visual rendering across desktop monitors, laptops, tablets, and smartphones.',
        icon: 'bi-display-port',
      },
      {
        title: 'Micro-Interactions & Motion',
        desc: 'Subtle visual animations and micro-feedback that enhance user delight.',
        icon: 'bi-magic',
      },
      {
        title: 'UX Usability Audits',
        desc: 'Heuristic evaluations, drop-off analysis, and conversion funnel optimizations.',
        icon: 'bi-graph-up-arrow',
      },
      {
        title: 'Accessibility (WCAG) Compliance',
        desc: 'High contrast ratios, screen reader support, and keyboard navigation.',
        icon: 'bi-person-arms-up',
      },
    ],
    techStack: ['Figma', 'Adobe XD', 'Protopie', 'Design Tokens', 'Tailwind Design System', 'Bootstrap'],
    benefits: [
      'Significantly higher user conversion and retention rates',
      'Reduced software rework costs through upfront prototype validation',
      'Consistent brand identity across all digital customer touchpoints',
      'Intuitive user flows minimizing customer support tickets',
    ],
  },

  'e-commerce-development': {
    title: 'E-commerce Development',
    category: 'Software & Web Development',
    iconClass: 'bi bi-cart3',
    badge: 'Digital Commerce',
    subtitle: 'High-conversion online stores, custom cart portals, and payment gateway setups.',
    overview: [
      'Launch and scale online retail operations with custom e-commerce web applications and headless commerce architectures. We build secure product catalogs, real-time inventory management, multi-currency pricing, automated checkout workflows, and integrated payment gateways.',
      'Our e-commerce platforms incorporate instant elastic product search, dynamic filtering, multi-variant inventory tracking, and customer account portals with automated invoice generation and shipment tracking links.',
      'We integrate top shipping partner APIs (Shiprocket, Delhivery, FedEx) alongside robust discount engines, promotional coupon rules, and abandoned cart recovery sequences to maximize your sales turnover.',
    ],
    capabilities: [
      {
        title: 'Custom Storefront & Catalog',
        desc: 'Blazing-fast product search, filtering, product variants, and dynamic galleries.',
        icon: 'bi-bag-check-fill',
      },
      {
        title: 'Payment Gateway Integration',
        desc: 'Razorpay, Stripe, PayPal, UPI, & Cash on Delivery (COD) workflows.',
        icon: 'bi-credit-card-fill',
      },
      {
        title: 'Inventory & Order Management',
        desc: 'Real-time stock tracking, invoice generation, and automated order updates.',
        icon: 'bi-box-seam-fill',
      },
      {
        title: 'Customer Account Portals',
        desc: 'Order history, wishlist, saved addresses, & automated tracking links.',
        icon: 'bi-person-badge',
      },
      {
        title: 'Shipping Partner Integration',
        desc: 'Shiprocket, Delhivery, FedEx API tracking & pincode serviceability checks.',
        icon: 'bi-truck',
      },
      {
        title: 'Discount & Coupon Engine',
        desc: 'Dynamic promo codes, threshold discounts, bundle deals, and referral tracking.',
        icon: 'bi-percent',
      },
    ],
    techStack: ['React.js', 'Node.js', 'WooCommerce', 'Shopify Liquid', 'Razorpay API', 'Stripe', 'MongoDB'],
    benefits: [
      'Sub-2 second page load speeds boosting checkout conversions',
      'Seamless multi-channel payment options for friction-free purchasing',
      'Automated order tracking reducing customer support inquiries',
      'Scalable database capable of handling Black Friday traffic spikes',
    ],
  },

  'ci-cd-pipeline-setup': {
    title: 'CI/CD Pipeline Setup',
    category: 'DevOps & Automation',
    iconClass: 'bi bi-diagram-3',
    badge: 'DevOps Automation',
    subtitle: 'Automated build, test, and zero-downtime deployment pipelines.',
    overview: [
      'Accelerate software delivery with fully automated Continuous Integration and Continuous Deployment (CI/CD) pipelines. We configure GitHub Actions, GitLab CI, or Jenkins pipelines that compile code, execute automated test suites, run security linters, build Docker images, and push zero-downtime deployments directly to cloud servers.',
      'Our DevOps engineers implement strict automated quality gates that block broken code or security vulnerabilities before they reach production. Automated environment variable and secret injection ensures military-grade credential isolation.',
      'We utilize zero-downtime deployment strategies including Blue-Green and Canary releases paired with instant rollout notification alerts to Slack, Microsoft Teams, or Telegram for complete engineering visibility.',
    ],
    capabilities: [
      {
        title: 'GitHub / GitLab Actions',
        desc: 'Custom YAML pipeline definitions triggered on code push or pull request.',
        icon: 'bi-git',
      },
      {
        title: 'Automated Testing Gates',
        desc: 'Block broken code builds by running unit, integration, & linting checks.',
        icon: 'bi-shield-check',
      },
      {
        title: 'Zero-Downtime Deployment',
        desc: 'Blue-Green & Canary deployment strategies for zero service disruption.',
        icon: 'bi-arrow-clockwise',
      },
      {
        title: 'Docker Image Build & Registry',
        desc: 'Automated container builds pushed to AWS ECR, DockerHub, or GitHub Packages.',
        icon: 'bi-box-seam',
      },
      {
        title: 'Secret & Key Management',
        desc: 'Secure injection of environment variables using AWS Secrets Manager / HashiCorp Vault.',
        icon: 'bi-key-fill',
      },
      {
        title: 'Slack / Teams Rollout Alerts',
        desc: 'Instant notifications to developer channels on deployment success or failure.',
        icon: 'bi-chat-left-text-fill',
      },
    ],
    techStack: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Docker', 'AWS ECR', 'Bash Scripts'],
    benefits: [
      '10x faster feature deployment speed from commit to production',
      'Zero downtime during code updates protecting user transactions',
      'Immediate automated feedback on broken builds before user impact',
      'Strict security isolation preventing leaked server credentials',
    ],
  },

  'docker-containerization': {
    title: 'Docker Containerization',
    category: 'DevOps & Automation',
    iconClass: 'bi bi-box-seam',
    badge: 'Containerization',
    subtitle: 'Package applications into lightweight, reproducible Docker containers.',
    overview: [
      'Eliminate "works on my machine" issues by containerizing your full application stack with Docker. We write optimized multi-stage Dockerfiles, Docker Compose environment setups, and security-hardened container images that run identically across developer laptops, staging environments, and production cloud clusters.',
      'Multi-stage Docker build strategies reduce container image sizes to lightweight Alpine footprints, accelerating container startup times and reducing bandwidth costs during cloud deployment rollouts.',
      'We enforce security best practices including non-root container execution, vulnerability image scanning (Trivy), read-only file systems, and private container registry management on AWS ECR or Docker Hub.',
    ],
    capabilities: [
      {
        title: 'Multi-Stage Dockerfiles',
        desc: 'Ultra-small production image footprints optimized for fast downloads.',
        icon: 'bi-file-binary',
      },
      {
        title: 'Docker Compose Local Stacks',
        desc: 'Single-command startup of web apps, APIs, databases, and Redis caches locally.',
        icon: 'bi-stack',
      },
      {
        title: 'Container Security Hardening',
        desc: 'Non-root user execution, minimal alpine base images, & vulnerability scanning.',
        icon: 'bi-shield-lock-fill',
      },
      {
        title: 'Volume & State Management',
        desc: 'Persistent storage configuration for database containers.',
        icon: 'bi-hdd-stack-fill',
      },
      {
        title: 'Network Isolation',
        desc: 'Internal container networks preventing direct exposure of backend databases.',
        icon: 'bi-diagram-3-fill',
      },
      {
        title: 'Private Container Registries',
        desc: 'Secure private image repositories on AWS ECR or Docker Hub.',
        icon: 'bi-box-arrow-in-right',
      },
    ],
    techStack: ['Docker', 'Docker Compose', 'Alpine Linux', 'AWS ECR', 'Trivy Scanner', 'Bash'],
    benefits: [
      'Consistent environment execution from local dev to production',
      'Rapid server provisioning in under 30 seconds via container launch',
      'Reduced cloud hosting overhead with high container density',
      'Isolated process security preventing host OS compromises',
    ],
  },

  'kubernetes-deployment': {
    title: 'Kubernetes Cluster Deployment',
    category: 'DevOps & Automation',
    iconClass: 'bi bi-cpu',
    badge: 'Cloud Native',
    subtitle: 'Production Kubernetes cluster provisioning, auto-scaling, & ingress management.',
    overview: [
      'Scale enterprise workloads with production-grade Kubernetes cluster deployments on AWS EKS, Azure AKS, Google GKE, or bare-metal K3s. We configure Horizontal Pod Autoscalers (HPA), NGINX Ingress controllers, TLS cert-manager, and Helm package charts.',
      'Kubernetes self-healing capabilities automatically detect failing containers, restart unresponsive pods, and execute rolling updates without a single millisecond of service downtime.',
      'We implement strict RBAC permission roles, pod security standards, namespace network isolation policies, and Prometheus cluster monitoring to keep containerized infrastructure rock-solid.',
    ],
    capabilities: [
      {
        title: 'EKS / AKS / GKE Provisioning',
        desc: 'Managed Kubernetes cluster setups with secure control planes.',
        icon: 'bi-cloud-check-fill',
      },
      {
        title: 'Horizontal Pod Autoscaling (HPA)',
        desc: 'Dynamic pod scaling based on CPU utilization, memory, and web traffic.',
        icon: 'bi-graph-up',
      },
      {
        title: 'Ingress & TLS Certificate Automation',
        desc: 'NGINX Ingress routing paired with Let’s Encrypt automated TLS renewal.',
        icon: 'bi-lock-fill',
      },
      {
        title: 'Helm Chart Management',
        desc: 'Modular Kubernetes package definitions for rapid environment duplication.',
        icon: 'bi-box-fill',
      },
      {
        title: 'RBAC & Network Policies',
        desc: 'Granular namespace isolation and network traffic restrictions.',
        icon: 'bi-shield-shaded',
      },
      {
        title: 'Self-Healing & Health Checks',
        desc: 'Automatic restart of failing containers and zero-downtime rolling updates.',
        icon: 'bi-heart-pulse-fill',
      },
    ],
    techStack: ['Kubernetes', 'Helm', 'AWS EKS', 'Azure AKS', 'NGINX Ingress', 'Cert-Manager', 'Prometheus'],
    benefits: [
      'High-availability cluster architecture withstands node hardware failures',
      'Automatic resource scaling handles sudden millions-user traffic spikes',
      'Declarative state management simplifies complex multi-service deployments',
      'Cloud provider portability avoids single-vendor lock-in',
    ],
  },

  'infrastructure-as-code': {
    title: 'Infrastructure as Code (Terraform)',
    category: 'DevOps & Automation',
    iconClass: 'bi bi-file-earmark-code',
    badge: 'Terraform & IaC',
    subtitle: 'Automated, version-controlled cloud provisioning using Terraform & Ansible.',
    overview: [
      'Replace error-prone manual cloud console clicking with deterministic Infrastructure as Code (IaC). We write modular Terraform configurations and Ansible playbooks to automate the provisioning of VPC networks, security groups, EC2 instances, RDS databases, S3 buckets, and DNS records.',
      'By storing infrastructure definitions in Git version control, every single server modification is tracked, audited, and peer-reviewed before application. Remote state storage with DynamoDB state locking prevents concurrent modification conflicts.',
      'We enable on-demand ephemeral environment creation, allowing engineering teams to spin up complete staging duplicates in minutes and destroy them after testing to eliminate cloud waste.',
    ],
    capabilities: [
      {
        title: 'Modular Terraform Scripts',
        desc: 'Reusable cloud infrastructure modules for staging and production.',
        icon: 'bi-file-code-fill',
      },
      {
        title: 'State File Management & Locking',
        desc: 'Remote S3 state storage with DynamoDB state locking preventing collision.',
        icon: 'bi-file-lock2-fill',
      },
      {
        title: 'Ansible Playbook Automation',
        desc: 'Automated OS software installation, user creation, and server hardening.',
        icon: 'bi-terminal-fill',
      },
      {
        title: 'Multi-Cloud Provisioning',
        desc: 'Single unified IaC workflow for AWS, Azure, GCP, and DigitalOcean.',
        icon: 'bi-clouds-fill',
      },
      {
        title: 'Drift Detection & Auditing',
        desc: 'Identify and remediate unauthorized cloud infrastructure changes.',
        icon: 'bi-eye-fill',
      },
      {
        title: 'Automated Tear-Down & Spin-Up',
        desc: 'Spin up ephemeral test environments on demand and destroy to save costs.',
        icon: 'bi-lightning-fill',
      },
    ],
    techStack: ['Terraform', 'Ansible', 'AWS CloudFormation', 'Git', 'AWS S3', 'DynamoDB'],
    benefits: [
      'Eliminate human configuration error during server provisioning',
      'Replicate entire cloud infrastructure environments in under 5 minutes',
      'Git version history tracks every single server configuration change',
      'Substantial cloud cost savings through ephemeral test environment destruction',
    ],
  },

  'monitoring-and-alerts': {
    title: 'Monitoring & Incident Alerts',
    category: 'DevOps & Automation',
    iconClass: 'bi bi-activity',
    badge: 'Observability',
    subtitle: 'Real-time cluster health, metric dashboards, and instant incident alerting.',
    overview: [
      'Gain 360-degree observability into your application and infrastructure health. We deploy Prometheus time-series metric scraping, Grafana visualization dashboards, centralized Loki/ELK log aggregation, and real-time alert routing.',
      'Our observability setups track vital operational metrics including CPU utilization, RAM consumption, disk I/O, network bandwidth, database query latency, HTTP error rate spikes, and SSL certificate expiration countdowns.',
      'When anomalous metric thresholds are breached, Alertmanager triggers instant notifications to Slack, Microsoft Teams, PagerDuty, or WhatsApp, ensuring your engineering team responds in seconds.',
    ],
    capabilities: [
      {
        title: 'Grafana Metric Dashboards',
        desc: 'Visual dashboards for CPU, RAM, disk I/O, network traffic, & HTTP response codes.',
        icon: 'bi-grid-1x2-fill',
      },
      {
        title: 'Prometheus Metric Scraping',
        desc: 'Automated time-series metric collection from servers, containers, & databases.',
        icon: 'bi-bar-chart-line-fill',
      },
      {
        title: 'Real-Time Alertmanager',
        desc: 'Multi-channel alert routing (Slack, Email, PagerDuty, WhatsApp) on metric threshold breaches.',
        icon: 'bi-bell-fill',
      },
      {
        title: 'Centralized Log Aggregation',
        desc: 'Full-text log search across thousands of containers using Grafana Loki / ELK Stack.',
        icon: 'bi-file-earmark-text-fill',
      },
      {
        title: 'Uptime & Latency Monitoring',
        desc: 'External HTTP ping probes measuring global site response times and SSL expiry.',
        icon: 'bi-clock-history',
      },
      {
        title: 'Application Performance (APM)',
        desc: 'Distributed transaction tracing identifying database query bottlenecks.',
        icon: 'bi-diagram-3-fill',
      },
    ],
    techStack: ['Prometheus', 'Grafana', 'Alertmanager', 'Loki', 'ELK Stack', 'Slack API', 'PagerDuty'],
    benefits: [
      'Detect infrastructure issues before they impact end customers',
      'Reduce Mean Time to Resolution (MTTR) with centralized log searches',
      'Data-driven capacity planning prevents unexpected server crashes',
      'Instant mobile alerts keep your engineering team informed 24/7',
    ],
  },

  'automation-scripting': {
    title: 'Automation & Shell Scripting',
    category: 'DevOps & Automation',
    iconClass: 'bi bi-terminal',
    badge: 'System Scripts',
    subtitle: 'Custom Python & Bash shell automation scripts for recurring server tasks.',
    overview: [
      'Save hundreds of manual administrative hours by automating repetitive system routines. We engineer custom Bash and Python scripts for automated database backups, log file rotation, SSL certificate renewals, data sync routines, and system health checks.',
      'Our scripts incorporate strict error-handling, logging outputs, and notification triggers. Tasks are scheduled using systemd timers or CRON jobs to execute with 100% reliability during off-peak hours.',
      'We also build multi-server SSH orchestration scripts capable of executing administrative commands, security patches, or software deployments across hundreds of cloud servers simultaneously.',
    ],
    capabilities: [
      {
        title: 'Automated Database Backups',
        desc: 'Daily compressed SQL snapshots uploaded directly to encrypted S3 cloud storage.',
        icon: 'bi-database-up',
      },
      {
        title: 'Log Rotation & Storage Cleanup',
        desc: 'Prevent disk full crashes by automatically archiving and purging old log files.',
        icon: 'bi-trash-fill',
      },
      {
        title: 'System Health Check Scripts',
        desc: 'Automated cron tasks verifying disk space, memory, & process availability.',
        icon: 'bi-cpu-fill',
      },
      {
        title: 'Bulk Data Import / Export',
        desc: 'High-speed CSV/JSON data transformation and ETL pipeline automation.',
        icon: 'bi-arrow-down-up',
      },
      {
        title: 'Remote SSH Multi-Server Execution',
        desc: 'Execute administrative commands across 100+ servers simultaneously.',
        icon: 'bi-pc-display',
      },
      {
        title: 'Automated Email / SMS Reports',
        desc: 'Periodic executive summary reports sent via email or Telegram bot.',
        icon: 'bi-send-fill',
      },
    ],
    techStack: ['Bash Shell', 'Python', 'Cron', 'AWS CLI', 'SSH', 'Linux CoreUtils', 'Powershell'],
    benefits: [
      'Eliminate manual human effort on repetitive daily maintenance tasks',
      'Prevent server crashes caused by unmonitored disk space exhaustion',
      'Ensure 100% consistent execution of scheduled administrative routines',
      'Fast automated recovery routines in case of service failures',
    ],
  },

  'aws-cloud-setup': {
    title: 'AWS Cloud Setup & Architecture',
    category: 'Cloud Services',
    iconClass: 'bi bi-cloud-check',
    badge: 'Amazon Web Services',
    subtitle: 'EC2, S3, RDS, Lambda, & VPC architecture engineered for security & scale.',
    overview: [
      'Build a resilient cloud backbone on Amazon Web Services (AWS). Our certified AWS cloud architects design Virtual Private Clouds (VPC), auto-scaling EC2 instance fleets, RDS database clusters, S3 storage buckets, CloudFront CDNs, and serverless Lambda functions aligned with AWS Well-Architected Framework standards.',
      'We enforce strict security isolation using public/private subnets, NAT Gateways, AWS Security Groups, Network ACLs, and Least-Privilege IAM role delegation with Multi-Factor Authentication (MFA).',
      'We also conduct AWS FinOps cost reviews, analyzing Reserved Instances, Savings Plans, and S3 lifecycle policies to reduce your monthly cloud infrastructure bill by up to 35%.',
    ],
    capabilities: [
      {
        title: 'AWS VPC Network Architecture',
        desc: 'Multi-AZ public & private subnets, NAT Gateways, Internet Gateways, & Route53.',
        icon: 'bi-diagram-3-fill',
      },
      {
        title: 'EC2 & Auto Scaling Fleets',
        desc: 'Optimized instance selection paired with Elastic Load Balancers (ALB/NLB).',
        icon: 'bi-cpu-fill',
      },
      {
        title: 'RDS & DynamoDB Database Clusters',
        desc: 'High-availability PostgreSQL/MySQL Multi-AZ replicas with automated backups.',
        icon: 'bi-database-check',
      },
      {
        title: 'S3 & CloudFront CDN',
        desc: 'Encrypted object storage paired with edge caching for global static asset delivery.',
        icon: 'bi-lightning-charge-fill',
      },
      {
        title: 'AWS IAM & Security Hardening',
        desc: 'Strict Least-Privilege IAM roles, MFA enforcement, and GuardDuty active scanning.',
        icon: 'bi-shield-lock-fill',
      },
      {
        title: 'AWS Cost Optimization (FinOps)',
        desc: 'Reserved Instance / Savings Plan analysis reducing monthly cloud bills by 30%+',
        icon: 'bi-cash-coin',
      },
    ],
    techStack: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'AWS VPC', 'CloudFront', 'AWS IAM'],
    benefits: [
      '99.99% infrastructure availability SLA across Multi-AZ deployments',
      'Enterprise security compliance protecting sensitive business data',
      'Elastic auto-scaling seamlessly absorbs unexpected traffic surges',
      'Significant monthly AWS bill reduction through FinOps optimization',
    ],
  },

  'azure-cloud-setup': {
    title: 'Azure Cloud Infrastructure',
    category: 'Cloud Services',
    iconClass: 'bi bi-microsoft',
    badge: 'Microsoft Azure',
    subtitle: 'Azure VMs, App Services, Active Directory, & Blob storage setup.',
    overview: [
      'Empower your organization with Microsoft Azure cloud infrastructure. We architect enterprise Azure environments incorporating Virtual Machines, Azure App Services, Azure SQL Databases, Blob Storage, Virtual Networks (VNet), and seamless hybrid integration.',
      'We specialize in Microsoft Entra ID (Active Directory) configuration, establishing Single Sign-On (SSO), Multi-Factor Authentication (MFA), and role-based identity security across your corporate applications.',
      'Using Azure VNet and ExpressRoute, we build secure hybrid cloud connections linking your local office servers directly into Azure cloud databases with high-speed geo-replication.',
    ],
    capabilities: [
      {
        title: 'Azure Virtual Machines & Scale Sets',
        desc: 'Windows Server & Linux VM provisioning with load balanced availability sets.',
        icon: 'bi-display-fill',
      },
      {
        title: 'Azure App Service & Container Apps',
        desc: 'Fully managed Web App hosting with zero-configuration SSL & CI/CD deployment.',
        icon: 'bi-window-fill',
      },
      {
        title: 'Microsoft Entra ID (Active Directory)',
        desc: 'Single Sign-On (SSO), Multi-Factor Auth (MFA), & corporate user identity controls.',
        icon: 'bi-person-lock',
      },
      {
        title: 'Azure SQL & Cosmos DB',
        desc: 'Managed cloud database clusters with Geo-replication and continuous backups.',
        icon: 'bi-database-fill-gear',
      },
      {
        title: 'Azure VNet & ExpressRoute',
        desc: 'Secure hybrid cloud network connectivity between on-premise servers & Azure.',
        icon: 'bi-hdd-network-fill',
      },
      {
        title: 'Azure Defender Security Center',
        desc: 'Continuous cloud security posture assessment and threat protection.',
        icon: 'bi-shield-check',
      },
    ],
    techStack: ['Azure VMs', 'Azure App Service', 'Entra ID', 'Azure SQL', 'Azure Blob', 'VNet'],
    benefits: [
      'Seamless integration with existing Microsoft 365 & Windows server networks',
      'Enterprise identity security with Single Sign-On and MFA enforcement',
      'Hybrid cloud architecture connecting local office infrastructure to cloud',
      'High-performance database geo-replication for business continuity',
    ],
  },

  'google-cloud-gcp': {
    title: 'Google Cloud Platform (GCP)',
    category: 'Cloud Services',
    iconClass: 'bi bi-cloud-arrow-up',
    badge: 'Google Cloud',
    subtitle: 'Google Compute Engine, Cloud Run, Cloud SQL, & BigQuery architecture.',
    overview: [
      'Harness Google’s hyper-scale network infrastructure with Google Cloud Platform (GCP). We design high-performance GCP setups using Compute Engine VMs, containerized Cloud Run deployments, Cloud SQL instances, Cloud Storage buckets, and BigQuery analytics.',
      'Google Cloud Run enables serverless execution of Docker containers with automatic scaling from 0 to thousands of instances, ensuring you only pay per second of active CPU execution time.',
      'We integrate Google BigQuery analytics data warehousing and Cloud Armor DDoS security to provide unmatched big-data processing speed and global network protection.',
    ],
    capabilities: [
      {
        title: 'Google Compute Engine (GCE)',
        desc: 'Custom VM instances with fast local SSDs and live VM migration.',
        icon: 'bi-cpu',
      },
      {
        title: 'GCP Cloud Run Serverless',
        desc: 'Zero-management serverless container deployment that scales automatically from 0 to N.',
        icon: 'bi-lightning-fill',
      },
      {
        title: 'Cloud SQL & BigQuery',
        desc: 'Managed MySQL/Postgres relational databases paired with BigQuery data analytics.',
        icon: 'bi-bar-chart-fill',
      },
      {
        title: 'Google Cloud Storage (GCS)',
        desc: 'High-speed object storage buckets with global multi-region redundancy.',
        icon: 'bi-hdd-fill',
      },
      {
        title: 'GCP VPC & Cloud Armor',
        desc: 'Google global network load balancing and DDoS protection via Cloud Armor.',
        icon: 'bi-shield-fill',
      },
      {
        title: 'GCP IAM & Service Accounts',
        desc: 'Granular service account key management and IAM role delegation.',
        icon: 'bi-key-fill',
      },
    ],
    techStack: ['Google Compute Engine', 'Cloud Run', 'Cloud SQL', 'BigQuery', 'GCS', 'Cloud Armor'],
    benefits: [
      'Access to Google’s ultra-low-latency global fiber network',
      'Cost-effective serverless container execution with pay-per-second billing',
      'Unmatched big data analytics speed via Google BigQuery integration',
      'Automatic live VM migration during infrastructure hardware upgrades',
    ],
  },

  'digitalocean-vps-setup': {
    title: 'DigitalOcean & VPS Setup',
    category: 'Cloud Services',
    iconClass: 'bi bi-hdd-network',
    badge: 'VPS Hosting',
    subtitle: 'Droplets, managed databases, load balancers, & NGINX web server setup.',
    overview: [
      'Get high-speed, cost-effective Cloud VPS infrastructure powered by DigitalOcean, Linode, or Hetzner. We specialize in Droplet provisioning, NGINX/Apache web server optimization, MySQL/Postgres setup, Redis caching, domain linking, SSL installation, and automated server snapshots.',
      'We optimize web server configurations utilizing HTTP/2, Brotli compression, FastCGI caching, and custom worker process tuning to achieve maximum concurrent request capacity.',
      'Our Linux security setup includes custom SSH ports, root password login disabling, UFW firewall rules, Fail2ban brute-force protection, and automated weekly full-disk snapshots.',
    ],
    capabilities: [
      {
        title: 'Droplet / VPS Provisioning',
        desc: 'Ubuntu / Debian / AlmaLinux server initialization hardened for production.',
        icon: 'bi-pc-display-horizontal',
      },
      {
        title: 'NGINX / Apache Web Server Setup',
        desc: 'High-concurrency web server configuration with HTTP/2 and Brotli compression.',
        icon: 'bi-gear-wide',
      },
      {
        title: 'Managed MySQL & Postgres Databases',
        desc: 'Reliable cloud database cluster provisioning with automated daily snapshots.',
        icon: 'bi-database-fill',
      },
      {
        title: 'DigitalOcean Load Balancers',
        desc: 'Distribute incoming web traffic across multiple Droplet application servers.',
        icon: 'bi-diagram-2-fill',
      },
      {
        title: 'UFW Firewall & SSH Hardening',
        desc: 'Disable root password logins, configure custom SSH ports, and active UFW firewall rules.',
        icon: 'bi-lock-fill',
      },
      {
        title: 'Automated Snapshot Backups',
        desc: 'Scheduled weekly full-server backup images for rapid disaster recovery.',
        icon: 'bi-clock-fill',
      },
    ],
    techStack: ['DigitalOcean Droplets', 'NGINX', 'Ubuntu Linux', 'MySQL', 'PostgreSQL', 'UFW Firewall'],
    benefits: [
      'High-performance cloud VPS hosting at predictable monthly pricing',
      'Optimized NGINX web server speeds up page load times dramatically',
      'Full root access and complete environment customizability',
      'Automated server snapshots for reliable disaster recovery',
    ],
  },

  'cloudflare-setup': {
    title: 'Cloudflare Security & CDN Setup',
    category: 'Cloud Services',
    iconClass: 'bi bi-shield-shaded',
    badge: 'CDN & WAF',
    subtitle: 'Global CDN, DNS proxy, DDoS protection, & Web Application Firewall (WAF).',
    overview: [
      'Shield your web applications from cyber threats while boosting global loading speed using Cloudflare. We configure Cloudflare Anycast DNS, edge caching rules, Web Application Firewall (WAF) rate limits, Bot Management, SSL/TLS encryption, and automated Page Rules.',
      'Cloudflare hides your origin server IP address behind a global proxy network spanning 300+ cities, preventing malicious hackers from directly targeting your web servers.',
      'Our WAF rules automatically block SQL injection, cross-site scripting (XSS), credential stuffing, and volumetric Layer 3, 4, and 7 DDoS attacks before they reach your infrastructure.',
    ],
    capabilities: [
      {
        title: 'Anycast DNS & Proxy Routing',
        desc: 'Ultra-fast global DNS resolution coupled with hidden origin IP proxying.',
        icon: 'bi-globe',
      },
      {
        title: 'DDoS Protection & Bot Management',
        desc: 'Active Layer 3, 4, and 7 DDoS mitigation stopping volumetric attacks.',
        icon: 'bi-shield-slash-fill',
      },
      {
        title: 'Web Application Firewall (WAF)',
        desc: 'Custom security rules blocking SQL injection, XSS attacks, & malicious scrapers.',
        icon: 'bi-shield-lock-fill',
      },
      {
        title: 'Global Edge CDN Caching',
        desc: 'Cache HTML, CSS, JavaScript, and images across 300+ global edge locations.',
        icon: 'bi-lightning-charge-fill',
      },
      {
        title: 'Full (Strict) SSL/TLS Encryption',
        desc: 'End-to-end SSL encryption between user browser, Cloudflare edge, & origin server.',
        icon: 'bi-lock-fill',
      },
      {
        title: 'Cloudflare Workers / Page Rules',
        desc: 'Edge serverless HTTP redirect rules, header modifications, & URL rewriting.',
        icon: 'bi-code-slash',
      },
    ],
    techStack: ['Cloudflare WAF', 'Cloudflare CDN', 'DNS Proxy', 'Cloudflare Workers', 'SSL/TLS'],
    benefits: [
      '100% origin IP hiding protecting backend servers from direct target attacks',
      'Instant speed boost via edge CDN caching reducing server bandwidth bills',
      'Zero-downtime protection against massive Layer 7 DDoS flood attacks',
      'Sub-10ms global DNS lookup resolution times',
    ],
  },

  'zoho-setup-support': {
    title: 'Zoho Workspace & CRM Setup',
    category: 'Cloud Services',
    iconClass: 'bi bi-envelope-at',
    badge: 'Business Apps',
    subtitle: 'Zoho Mail, Books, CRM, & custom domain email integration.',
    overview: [
      'Streamline corporate communication and business operations with official Zoho cloud applications. We handle end-to-end setup for Zoho Mail custom domain email routing, Zoho CRM sales pipelines, Zoho Books GST accounting, and mobile app synchronization.',
      'We configure SPF, DKIM, and DMARC DNS security TXT records ensuring your business emails achieve 100% inbox deliverability without getting flagged as spam by Gmail or Outlook.',
      'Our team manages seamless data migration of historical emails, contacts, and calendar archives from legacy cPanel, G Suite, or POP3/IMAP webmail into Zoho with zero lost data.',
    ],
    capabilities: [
      {
        title: 'Zoho Mail & Custom Domain Linking',
        desc: 'Professional @yourcompany.com email address setup with zero spam inbox delivery.',
        icon: 'bi-envelope-check-fill',
      },
      {
        title: 'SPF, DKIM, & DMARC DNS Security',
        desc: 'Configure DNS TXT records ensuring 100% email inbox placement and no spam flags.',
        icon: 'bi-patch-check-fill',
      },
      {
        title: 'Zoho CRM Pipeline Customization',
        desc: 'Lead tracking, deal stages, automated email sequences, and sales analytics.',
        icon: 'bi-person-gear',
      },
      {
        title: 'Zoho Books & Invoicing Setup',
        desc: 'GST compliant invoice templates, payment link integration, and financial reports.',
        icon: 'bi-receipt-cutoff',
      },
      {
        title: 'User Role & Permission Controls',
        desc: 'Departmental access rules for managers, sales teams, and accounting staff.',
        icon: 'bi-person-lock',
      },
      {
        title: 'Mobile Sync & Data Migration',
        desc: 'Migrate legacy emails and contacts from Google Workspace, cPanel, or Outlook.',
        icon: 'bi-phone-fill',
      },
    ],
    techStack: ['Zoho Mail', 'Zoho CRM', 'Zoho Books', 'DNS Records', 'IMAP/SMTP', 'DKIM/SPF'],
    benefits: [
      'Professional corporate email identity building client trust',
      '100% email deliverability without emails landing in spam folders',
      'Centralized customer CRM pipeline boosting sales closure rates',
      'Smooth migration of historical email archives with zero lost data',
    ],
  },

  'microsoft-365-setup': {
    title: 'Microsoft 365 Enterprise Setup',
    category: 'Cloud Services',
    iconClass: 'bi bi-envelope-paper',
    badge: 'Corporate Productivity',
    subtitle: 'Exchange Online, Teams, OneDrive, & enterprise security policy setup.',
    overview: [
      'Equip your organization with the Microsoft 365 enterprise productivity cloud. We configure Exchange Online corporate mailboxes, Microsoft Teams video conferencing, OneDrive cloud storage, SharePoint intranet portals, and security policy rules.',
      'We enforce robust security controls including Microsoft Entra ID Multi-Factor Authentication (MFA), Exchange Online Protection (EOP) anti-phishing filters, and device compliance rules.',
      'Every employee receives 1TB of secure OneDrive cloud storage with automated PC document backup, ensuring your company documents are protected against local hard drive failures.',
    ],
    capabilities: [
      {
        title: 'Exchange Online Mailbox Setup',
        desc: '50GB+ cloud mailboxes with shared calendars, distribution lists, & contact sync.',
        icon: 'bi-envelope-fill',
      },
      {
        title: 'Microsoft Teams & SharePoint Setup',
        desc: 'Team channels, HD video meetings, file collaboration, and intranet document repositories.',
        icon: 'bi-people-fill',
      },
      {
        title: 'OneDrive for Business Storage',
        desc: '1TB per-user cloud storage with automated PC document backup and file sharing.',
        icon: 'bi-cloud-fill',
      },
      {
        title: 'Anti-Phishing & Spam Defense',
        desc: 'Exchange Online Protection (EOP) filtering malicious email attachments and links.',
        icon: 'bi-shield-fill-check',
      },
      {
        title: 'Multi-Factor Authentication (MFA)',
        desc: 'Enforce Microsoft Authenticator App MFA across all corporate employee logins.',
        icon: 'bi-phone-landscape-fill',
      },
      {
        title: 'Legacy Mail Migration',
        desc: 'Seamless migration from G Suite, POP3/IMAP, or GoDaddy Webmail to Exchange.',
        icon: 'bi-arrow-right-square-fill',
      },
    ],
    techStack: ['Microsoft 365', 'Exchange Online', 'MS Teams', 'SharePoint', 'OneDrive', 'Entra ID'],
    benefits: [
      'Industry-standard productivity suite powering seamless remote teamwork',
      '1TB secure cloud storage per employee eliminating local drive loss',
      'Enterprise phishing and malware defense keeping company data safe',
      'Single sign-on access across Outlook, Teams, and Office applications',
    ],
  },

  'dns-domain-setup': {
    title: 'DNS Routing & Domain Setup',
    category: 'Cloud Services',
    iconClass: 'bi bi-globe2',
    badge: 'Domain Infrastructure',
    subtitle: 'Domain DNS record management, MX/SPF/DKIM setup, & host linking.',
    overview: [
      'Ensure flawless web traffic routing and corporate email delivery with professional DNS management. We handle A/AAAA record mapping, CNAME subdomains, MX mail records, TXT security records (SPF, DKIM, DMARC), and zero-downtime domain transfers.',
      'We configure DNS security extensions (DNSSEC) and SPF/DKIM authentication records to prevent bad actors from spoofing your domain name in phishing attacks.',
      'By tuning TTL values and leveraging GeoDNS routing on AWS Route53 or Cloudflare, we ensure your global users are automatically routed to the closest server location.',
    ],
    capabilities: [
      {
        title: 'A, AAAA & CNAME Record Mapping',
        desc: 'Direct subdomains and root domains to web servers, CDNs, or load balancers.',
        icon: 'bi-diagram-2-fill',
      },
      {
        title: 'MX & Email Routing Setup',
        desc: 'Configure mail exchange records for Google Workspace, Microsoft 365, or Zoho Mail.',
        icon: 'bi-envelope-at-fill',
      },
      {
        title: 'SPF, DKIM & DMARC Authentication',
        desc: 'Prevent domain spoofing and guarantee high email inbox deliverability.',
        icon: 'bi-shield-check',
      },
      {
        title: 'TTL Optimization & GeoDNS Routing',
        desc: 'Set low TTL for rapid DNS changes and route users to closest regional server.',
        icon: 'bi-lightning-fill',
      },
      {
        title: 'Domain Registrar Migration',
        desc: 'Transfer domain registration smoothly between GoDaddy, Namecheap, Route53, & Cloudflare.',
        icon: 'bi-arrow-left-right',
      },
      {
        title: 'Subdomain Wildcard Management',
        desc: 'Dynamic wildcard subdomain routing for multi-tenant SaaS platforms.',
        icon: 'bi-node-plus-fill',
      },
    ],
    techStack: ['Cloudflare DNS', 'AWS Route53', 'Google Cloud DNS', 'GoDaddy', 'Namecheap'],
    benefits: [
      'Zero downtime during domain migrations or web server IP changes',
      '100% email authentication preventing unauthorized domain impersonation',
      'Ultra-fast global DNS query resolution speeds under 15ms',
      'Clean subdomain structure for web, API, and staging environments',
    ],
  },

  'firewall-setup': {
    title: 'Firewall & Network Defense',
    category: 'IT Security',
    iconClass: 'bi bi-shield-lock',
    badge: 'Network Security',
    subtitle: 'Hardware & software firewall policy design for network perimeter protection.',
    overview: [
      'Protect your corporate network and cloud servers from unauthorized intrusions, port scans, and malicious attacks. We design and implement hardware firewalls (Fortinet, Sophos, pfSense) and Linux software firewalls (UFW, IPTables, AWS Security Groups).',
      'Our security engineers enforce strict default-deny ingress rules, locking down administrative SSH and RDP ports to authorized corporate static IP addresses only.',
      'We also configure encrypted Site-to-Site IPsec VPN tunnels and SSL VPN remote access, allowing your remote workforce to connect securely to corporate office networks.',
    ],
    capabilities: [
      {
        title: 'Hardware Firewall Installation',
        desc: 'Deploy Fortinet, Sophos, & pfSense appliances for corporate office protection.',
        icon: 'bi-hdd-rack-fill',
      },
      {
        title: 'Linux Server UFW & IPTables',
        desc: 'Lock down cloud servers allowing access only to essential web & SSH ports.',
        icon: 'bi-terminal-fill',
      },
      {
        title: 'Site-to-Site & IPsec VPN Setup',
        desc: 'Encrypted VPN tunnels connecting remote branch offices securely to headquarters.',
        icon: 'bi-key-fill',
      },
      {
        title: 'Intrusion Prevention (IPS/IDS)',
        desc: 'Deep packet inspection blocking known exploit patterns and brute-force attempts.',
        icon: 'bi-eye-fill',
      },
      {
        title: 'IP Whitelisting & Geo-Blocking',
        desc: 'Restrict server administrative access exclusively to trusted corporate IP addresses.',
        icon: 'bi-geo-alt-fill',
      },
      {
        title: 'Port Forwarding & NAT Rules',
        desc: 'Secure Network Address Translation routing internal server traffic safely.',
        icon: 'bi-diagram-3-fill',
      },
    ],
    techStack: ['Fortinet', 'Sophos', 'pfSense', 'UFW Firewall', 'IPTables', 'AWS Security Groups'],
    benefits: [
      'Complete insulation of internal corporate servers from public hacker scans',
      'Encrypted remote work VPN access for staff working outside the office',
      'Prevention of automated brute-force password cracking attacks',
      'Detailed network traffic log audits for security compliance',
    ],
  },

  'vulnerability-scan': {
    title: 'Vulnerability Scanning & Penetration Testing',
    category: 'IT Security',
    iconClass: 'bi bi-bug',
    badge: 'Cyber Audit',
    subtitle: 'Deep security audits, port scanning, and OWASP vulnerability assessments.',
    overview: [
      'Uncover and patch security flaws before malicious hackers exploit them. Our cyber security engineers perform comprehensive vulnerability assessments, OWASP Top 10 web app testing, automated port scans, SQL injection checks, and XSS testing.',
      'We perform deep API security audits, inspecting REST endpoints for authorization bypasses, broken object-level authorization (BOLA), token leakage, and unencrypted parameters.',
      'Following every scan, we deliver a prioritized remediation report categorized by Risk Score (Critical, High, Medium, Low) complete with step-by-step developer patching guides and post-patch verification re-scans.',
    ],
    capabilities: [
      {
        title: 'OWASP Top 10 Web Security Audit',
        desc: 'Test web apps for SQLi, XSS, CSRF, broken authentication, & data exposure.',
        icon: 'bi-shield-slash-fill',
      },
      {
        title: 'Network Port & Service Scan',
        desc: 'Identify open vulnerable server ports, outdated software, and weak SSL ciphers.',
        icon: 'bi-radar',
      },
      {
        title: 'API Penetration Audit',
        desc: 'Inspect REST API endpoints for unauthorized data access and token bypasses.',
        icon: 'bi-code-square',
      },
      {
        title: 'Automated Security Scanner Setup',
        desc: 'Integrate continuous vulnerability scanners (Trivy, Nessus) into CI/CD pipelines.',
        icon: 'bi-arrow-repeat',
      },
      {
        title: 'Remediation Roadmap Report',
        desc: 'Detailed vulnerability report prioritized by Risk Score (Critical, High, Medium, Low).',
        icon: 'bi-file-earmark-medical-fill',
      },
      {
        title: 'Patch Verification Re-Scan',
        desc: 'Re-test system post-patching to guarantee vulnerabilities are 100% resolved.',
        icon: 'bi-patch-check-fill',
      },
    ],
    techStack: ['Nmap', 'Nessus', 'OWASP ZAP', 'Burp Suite', 'Trivy', 'OpenVAS'],
    benefits: [
      'Proactively fix security vulnerabilities before data breaches occur',
      'Ensure compliance with ISO 27001, SOC2, and regional data privacy laws',
      'Protect corporate brand reputation from public security compromise',
      'Clear, actionable developer guides for patching code vulnerabilities',
    ],
  },

  'backup-solutions': {
    title: 'Automated Data Backup & Recovery',
    category: 'IT Security',
    iconClass: 'bi bi-database-up',
    badge: 'Disaster Recovery',
    subtitle: 'Automated offsite backup schedules, database snapshots, & disaster recovery.',
    overview: [
      'Never lose critical business data to ransomware, server hardware failures, or accidental deletion. We implement strict 3-2-1 backup strategies incorporating daily automated database dumps, encrypted offsite cloud storage, and system image snapshots.',
      'We configure ransomware-proof immutable cloud storage buckets (WORM) on AWS S3 Glacier or Azure Blob, preventing unauthorized deletion or encryption by malicious software.',
      'Our team establishes point-in-time database restoration procedures and conducts periodic disaster recovery simulation drills to guarantee your data can be restored in under 30 minutes.',
    ],
    capabilities: [
      {
        title: '3-2-1 Backup Strategy Implementation',
        desc: '3 data copies across 2 media types with 1 copy stored in an offsite cloud location.',
        icon: 'bi-layers-fill',
      },
      {
        title: 'Automated SQL & NoSQL Backups',
        desc: 'Compressed, encrypted database dumps executed nightly via scheduled cron tasks.',
        icon: 'bi-database-fill-up',
      },
      {
        title: 'Ransomware Immutable Storage',
        desc: 'Write-Once-Read-Many (WORM) cloud storage buckets preventing file deletion or encryption.',
        icon: 'bi-shield-lock-fill',
      },
      {
        title: 'Point-in-Time Database Recovery',
        desc: 'Restore database state down to the exact minute prior to data corruption.',
        icon: 'bi-clock-fill',
      },
      {
        title: 'Full Server OS Image Snapshots',
        desc: 'Weekly full cloud VM snapshot images for 1-click server reconstruction.',
        icon: 'bi-cpu-fill',
      },
      {
        title: 'Disaster Recovery Simulation Drills',
        desc: 'Periodically test data restoration procedures to verify 100% data integrity.',
        icon: 'bi-arrow-clockwise',
      },
    ],
    techStack: ['AWS S3 Glacier', 'Azure Blob', 'Veeam Backup', 'Duplicati', 'PostgreSQL pg_dump', 'Cron'],
    benefits: [
      '100% business data protection against ransomware extortion',
      'Near-zero Recovery Point Objective (RPO) minimizing potential data loss',
      'Rapid Recovery Time Objective (RTO) restoring systems in under 30 minutes',
      'Compliance with corporate data retention policy regulations',
    ],
  },

  'ssl-certificate-setup': {
    title: 'SSL Certificate & HTTPS Enforcement',
    category: 'IT Security',
    iconClass: 'bi bi-lock',
    badge: 'Web Security',
    subtitle: 'Wildcard SSL deployment, Let’s Encrypt auto-renewal, & HTTPS enforcement.',
    overview: [
      'Secure web traffic between your visitors and servers with robust SSL/TLS encryption. We install Wildcard and Multi-Domain SSL certificates (Let’s Encrypt, DigiCert, Comodo), enforce HTTP to HTTPS 301 redirects, and configure HSTS headers.',
      'We set up Certbot automated renewal cron jobs, eliminating manual certificate management and ensuring your domain SSL never expires unexpectedly.',
      'We disable outdated vulnerable protocols (TLS 1.0/1.1) and enforce modern TLS 1.3 cipher suites to achieve Grade A+ SSL security scores on SSL Labs audits.',
    ],
    capabilities: [
      {
        title: 'Let’s Encrypt Automated Renewal',
        desc: 'Free, auto-renewing SSL certificates using Certbot cron automation.',
        icon: 'bi-arrow-repeat',
      },
      {
        title: 'Wildcard & Multi-Domain SSL',
        desc: 'Secure root domain and all subdomains (*.yourcompany.com) with a single certificate.',
        icon: 'bi-grid-fill',
      },
      {
        title: 'HTTP to HTTPS 301 Redirects',
        desc: 'Enforce 100% secure encrypted connections across all site pages.',
        icon: 'bi-shield-check',
      },
      {
        title: 'HSTS Header Enforcement',
        desc: 'HTTP Strict Transport Security headers preventing SSL stripping attacks.',
        icon: 'bi-lock-fill',
      },
      {
        title: 'TLS 1.3 Security Hardening',
        desc: 'Disable legacy weak ciphers and enforce modern high-grade encryption.',
        icon: 'bi-speedometer2',
      },
      {
        title: 'SSL Expiry Monitoring',
        desc: 'Automated alert notifications sent 30 days before certificate expiration.',
        icon: 'bi-bell-fill',
      },
    ],
    techStack: ['Let’s Encrypt', 'Certbot', 'DigiCert', 'Comodo SSL', 'NGINX', 'Apache', 'Cloudflare SSL'],
    benefits: [
      'Eliminate browser "Not Secure" warnings building customer trust',
      'Improved Google SEO ranking boost for HTTPS-encrypted websites',
      'Complete encryption of customer passwords, credit cards, & personal data',
      'Zero manual effort required with automated certificate renewals',
    ],
  },

  'cctv-installation': {
    title: 'CCTV Surveillance System Installation',
    category: 'Electronics & Maintenance',
    iconClass: 'bi bi-camera-video',
    badge: 'K Electronics Division',
    subtitle: 'HD / IP camera installation, DVR/NVR setup, and mobile remote live view.',
    overview: [
      'Protect your commercial premises, office, or residence with professional CCTV surveillance solutions under K Electronics. We handle end-to-end IP/HD camera placement, Cat6 network cabling, DVR/NVR storage configuration, and night-vision alignment.',
      'We configure smartphone live viewing apps on Android and iOS devices, enabling business owners to stream live camera feeds and play back recorded footage from anywhere in the world.',
      'Our team installs surveillance-grade hard drives with multi-week continuous recording loops, motion detection alerts, concealed PVC conduit piping, and centralized SMPS power supplies.',
    ],
    capabilities: [
      {
        title: 'HD & IP Camera Installation',
        desc: 'Indoor dome, outdoor bullet, & 360-degree PTZ camera mounting.',
        icon: 'bi-camera-video-fill',
      },
      {
        title: 'DVR / NVR Storage Configuration',
        desc: 'Surveillance-grade hard drive storage setup with multi-week video recording loops.',
        icon: 'bi-hdd-fill',
      },
      {
        title: 'Mobile Phone Remote Live View',
        desc: 'View live video feeds and playback recordings anywhere on your Android or iPhone.',
        icon: 'bi-phone-fill',
      },
      {
        title: 'Night-Vision Infrared Setup',
        desc: 'Clear 24/7 night vision monitoring in pitch-dark conditions.',
        icon: 'bi-moon-stars-fill',
      },
      {
        title: 'Motion Detection Alerts',
        desc: 'Instant mobile notifications and email alerts triggered by movement.',
        icon: 'bi-bell-fill',
      },
      {
        title: 'Cable Conduit & Power Supply',
        desc: 'Neat concealed PVC piping, Cat6 network cabling, & centralized SMPS power.',
        icon: 'bi-plug-fill',
      },
    ],
    techStack: ['Hikvision', 'CP Plus', 'Dahua', 'IP Cameras', 'NVR / DVR', 'Cat6 Cabling', 'Mobile Apps'],
    benefits: [
      '24/7 continuous security coverage protecting assets from theft and vandalism',
      'Remote peace-of-mind with live video streaming directly on your smartphone',
      'High-definition recorded video evidence for legal and insurance purposes',
      'Neat professional cable installation preserving interior building aesthetics',
    ],
  },

  'laptop-repair': {
    title: 'Laptop Repair & Maintenance',
    category: 'Electronics & Maintenance',
    iconClass: 'bi bi-laptop',
    badge: 'K Electronics Division',
    subtitle: 'Chip-level motherboard repair, screen replacement, & RAM/SSD upgrades for all brands.',
    overview: [
      'Fast, reliable laptop servicing and hardware repairs by K Electronics. Our certified bench technicians service Dell, HP, Lenovo, Asus, Acer, and Apple MacBook laptops with genuine spare parts.',
      'We specialize in BGA chip-level motherboard repair, short-circuit diagnosis, Full HD screen replacement, original battery/charger replacement, keyboard repairs, and body hinge fabrication.',
      'We upgrade slow laptops with high-speed NVMe M.2 SSDs and additional RAM, coupled with internal dust blowing, fan lubrication, and premium thermal paste re-application.',
    ],
    capabilities: [
      {
        title: 'Chip-Level Motherboard Repair',
        desc: 'BGA IC replacement, short circuit diagnosis, & power section repair.',
        icon: 'bi-cpu-fill',
      },
      {
        title: 'Screen & Display Replacement',
        desc: 'Genuine Full HD / IPS laptop screen replacement with warranty.',
        icon: 'bi-display-fill',
      },
      {
        title: 'High-Speed SSD & RAM Upgrades',
        desc: 'Transform slow laptops with NVMe M.2 SSDs and DDR4/DDR5 RAM upgrades.',
        icon: 'bi-speedometer2',
      },
      {
        title: 'Battery & Adapter Replacement',
        desc: 'Original OEM laptop batteries and power adapters with backup warranty.',
        icon: 'bi-battery-charging',
      },
      {
        title: 'Overheating & Thermal Servicing',
        desc: 'Fan cleaning, dust removal, and premium Artic Silver thermal paste re-application.',
        icon: 'bi-thermometer-sun',
      },
      {
        title: 'Hinge & Body Panel Repair',
        desc: 'Broken laptop hinge fabrication, body panel replacement, & keyboard repair.',
        icon: 'bi-wrench-fill',
      },
    ],
    techStack: ['Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Apple MacBook', 'NVMe SSDs'],
    benefits: [
      'Extremely quick turnaround times with genuine spare parts',
      'Substantial cost savings compared to purchasing a new laptop',
      'Significant speed boost via NVMe SSD installation',
      'Transparent diagnostic reporting with up-front repair estimates',
    ],
  },

  'desktop-repair': {
    title: 'Desktop Computer Repair & Assembly',
    category: 'Electronics & Maintenance',
    iconClass: 'bi bi-display',
    badge: 'K Electronics Division',
    subtitle: 'Custom PC assembly, hardware troubleshooting, OS reinstallation, & hardware maintenance.',
    overview: [
      'Complete desktop computer servicing and custom PC assembly by K Electronics. Whether you require high-performance gaming/workstation PC builds or commercial office desktop troubleshooting, our team delivers on-site and bench support.',
      'We diagnose non-booting computers, replace faulty power supply units (SMPS), repair motherboards, perform OS reinstallations with official drivers, and recover lost data from corrupted hard drives.',
      'We offer corporate Annual Maintenance Contracts (AMC) for office PC fleets, conducting routine physical dust cleaning, software updates, and hardware health checks to keep your staff productive.',
    ],
    capabilities: [
      {
        title: 'Custom PC Assembly',
        desc: 'Tailored gaming, video editing, & office desktop workstation PC builds.',
        icon: 'bi-pc-display-horizontal',
      },
      {
        title: 'Power Supply (SMPS) Replacement',
        desc: 'Diagnose non-booting PCs and replace faulty power supply units.',
        icon: 'bi-lightning-fill',
      },
      {
        title: 'OS Reinstallation & Driver Setup',
        desc: 'Clean Windows 11 / Linux installation with official driver updates & software.',
        icon: 'bi-disc-fill',
      },
      {
        title: 'Data Recovery & Virus Removal',
        desc: 'Recover lost files from corrupted hard drives and remove deep malware/viruses.',
        icon: 'bi-shield-check',
      },
      {
        title: 'Cabinet Dust Cleaning & Servicing',
        desc: 'Complete internal dust blowing, fan lubrication, and cable management.',
        icon: 'bi-wind',
      },
      {
        title: 'Office Desktop AMC Maintenance',
        desc: 'Annual Maintenance Contracts (AMC) keeping corporate office PCs running smoothly.',
        icon: 'bi-file-earmark-check-fill',
      },
    ],
    techStack: ['Intel', 'AMD Ryzen', 'Nvidia GeForce', 'Gigabyte', 'ASUS', 'Corsair', 'Windows 11'],
    benefits: [
      'Maximized desktop performance and extended hardware lifespan',
      'Custom component selection matching your exact budget and workload',
      'Prompt on-site technician support for office computer emergencies',
      '100% data privacy and secure file recovery routines',
    ],
  },

  'ups-installation': {
    title: 'UPS Power Backup System Setup',
    category: 'Electronics & Maintenance',
    iconClass: 'bi bi-lightning-charge',
    badge: 'K Electronics Division',
    subtitle: 'Industrial & office power backup setup, online UPS installation, & load calculation.',
    overview: [
      'Prevent unexpected server shutdowns, data corruption, and hardware damage with professional UPS power backup solutions from K Electronics. We install line-interactive and online double-conversion UPS systems tailored for office PCs, server racks, and industrial equipment.',
      'Our team performs accurate electrical power load calculations to recommend the ideal KVA rating and battery backup runtime required to keep your business operating smoothly during utility power outages.',
      'We configure external tubular battery banks, surge protection, and manual maintenance bypass switches to allow UPS servicing without interrupting utility power to connected equipment.',
    ],
    capabilities: [
      {
        title: 'Online UPS System Installation',
        desc: 'Zero-transfer-time online double conversion UPS for servers & sensitive electronics.',
        icon: 'bi-lightning-charge-fill',
      },
      {
        title: 'Power Load Calculation',
        desc: 'Accurate wattage and backup runtime assessment tailored to your office load.',
        icon: 'bi-calculator-fill',
      },
      {
        title: 'External Battery Bank Setup',
        desc: 'Connect tubular battery banks for multi-hour extended power backup.',
        icon: 'bi-battery-full',
      },
      {
        title: 'Surge & Voltage Protection',
        desc: 'Shield computers and equipment from high-voltage electrical spikes.',
        icon: 'bi-shield-fill',
      },
      {
        title: 'UPS Battery Replacement & Testing',
        desc: 'Load testing, terminal cleaning, and replacement of degraded UPS batteries.',
        icon: 'bi-arrow-repeat',
      },
      {
        title: 'Bypass Switch Configuration',
        desc: 'Manual bypass switches ensuring uninterrupted utility power during UPS maintenance.',
        icon: 'bi-toggle-on',
      },
    ],
    techStack: ['APC by Schneider', 'Microtek', 'Luminous', 'Numeric', 'Online UPS', 'Tubular Batteries'],
    benefits: [
      'Uninterrupted business operations during sudden utility power outages',
      'Complete protection of expensive server and PC hardware against voltage spikes',
      'Zero data corruption caused by abrupt computer power cuts',
      'Optimal battery life longevity through expert charging calibration',
    ],
  },

  'battery-replacement': {
    title: 'Inverter & UPS Battery Replacement',
    category: 'Electronics & Maintenance',
    iconClass: 'bi bi-battery-charging',
    badge: 'K Electronics Division',
    subtitle: 'Inverter & UPS battery health check, terminal maintenance, & quick replacement.',
    overview: [
      'Keep your power backup infrastructure in peak operating condition with battery replacement services from K Electronics. We supply and install genuine Exide, Luminous, and Amaron tubular/SMF batteries for home inverters and office UPS systems.',
      'Our technicians conduct hydrometer electrolyte testing, digital load testing, terminal corrosion cleaning, and float voltage calibration to restore maximum backup hours.',
      'We offer attractive scrap buyback trade-in discounts on your old dead batteries during replacement, accompanied by doorstep delivery, installation, and official warranty cards.',
    ],
    capabilities: [
      {
        title: 'Battery Health & Specific Gravity Testing',
        desc: 'Hydrometer & digital load testing to accurately diagnose battery health.',
        icon: 'bi-speedometer',
      },
      {
        title: 'Genuine Tubular & SMF Battery Supply',
        desc: 'Top-tier Exide, Luminous, & Amaron batteries with manufacturer warranty.',
        icon: 'bi-battery-charging',
      },
      {
        title: 'Terminal Cleaning & Anti-Corrosion Treatment',
        desc: 'Remove lead sulfate buildup and apply protective terminal petroleum jelly.',
        icon: 'bi-wrench-fill',
      },
      {
        title: 'Distilled Water Top-Up Servicing',
        desc: 'Replenish electrolyte levels in tubular batteries to maximize lifespan.',
        icon: 'bi-droplet-fill',
      },
      {
        title: 'Old Battery Scrap Buyback',
        desc: 'Attractive trade-in discounts on your old dead batteries during replacement.',
        icon: 'bi-cash-stack',
      },
      {
        title: 'Inverter Charging Voltage Calibration',
        desc: 'Verify inverter float voltage to prevent overcharging or undercharging.',
        icon: 'bi-sliders',
      },
    ],
    techStack: ['Exide', 'Luminous', 'Amaron', 'SMF Batteries', 'Tubular Batteries', 'Hydrometers'],
    benefits: [
      'Restored maximum backup hours during power cuts',
      'Attractive scrap trade-in value reducing new battery purchase cost',
      'Extended battery operational lifespan through preventative terminal maintenance',
      'Hassle-free doorstep delivery, installation, and testing',
    ],
  },

  'appliance-repair': {
    title: 'Appliance Repair & Servicing',
    category: 'Electronics & Maintenance',
    iconClass: 'bi bi-wrench-adjustable',
    badge: 'K Electronics Division',
    subtitle: 'Commercial & office air conditioner, refrigerator, and appliance maintenance.',
    overview: [
      'Maintain office comfort and facility appliances with K Electronics maintenance services. We provide doorstep servicing and repairs for split/cassette ACs, refrigerators, water coolers, microwave ovens, and commercial appliances.',
      'Our technicians perform jet pressure washing of AC coils, filter cleaning, R32/R410 gas charging, compressor repairs, thermostat replacements, and inverter AC PCB circuit board repairs.',
      'We offer commercial Annual Maintenance Contracts (AMC) with scheduled pre-summer servicing visits to ensure optimal cooling performance and reduced monthly energy bills.',
    ],
    capabilities: [
      {
        title: 'Air Conditioner Servicing & Gas Charging',
        desc: 'Filter cleaning, jet washing, R32/R410 gas refilling, & compressor repairs.',
        icon: 'bi-snow',
      },
      {
        title: 'Refrigerator & Water Cooler Repair',
        desc: 'Thermostat replacement, gas leak repairs, & cooling coil servicing.',
        icon: 'bi-box-fill',
      },
      {
        title: 'Washing Machine & Microwave Repair',
        desc: 'PCB motherboard repair, motor replacement, & drum bearing servicing.',
        icon: 'bi-gear-fill',
      },
      {
        title: 'Preventative Maintenance Contracts',
        desc: 'Scheduled seasonal AC servicing before peak summer months.',
        icon: 'bi-calendar-check-fill',
      },
      {
        title: 'Electrical PCB Board Repair',
        desc: 'Component-level inverter AC circuit board repairs.',
        icon: 'bi-cpu-fill',
      },
      {
        title: 'Genuine Spare Parts Guarantee',
        desc: 'Use of original OEM capacitors, motors, & sensors with service warranty.',
        icon: 'bi-check-circle-fill',
      },
    ],
    techStack: ['Voltas', 'Daikin', 'LG', 'Samsung', 'Blue Star', 'Godrej', 'Whirlpool'],
    benefits: [
      'Optimal cooling performance and reduced electricity bills',
      'Prevention of major appliance breakdowns through timely servicing',
      'Prompt doorstep technician visits for commercial office spaces',
      'Upfront transparent spare part pricing with service guarantee',
    ],
  },

  'electrical-work': {
    title: 'Electrical Wiring & Distribution Setup',
    category: 'Electronics & Maintenance',
    iconClass: 'bi bi-plug',
    badge: 'K Electronics Division',
    subtitle: 'Office wiring, distribution board setup, surge protection, & electrical fitting.',
    overview: [
      'Safe, certified electrical installation and wiring services by K Electronics. We handle complete commercial office wiring, distribution board (DB) wiring, MCB/RCCB circuit breaker setup, and 3-phase power load balancing.',
      'We construct chemical copper/GI earthing grounding pits to safely discharge static electricity and protect expensive computer workstations and server hardware against electrical surges.',
      'Our electricians perform thermal imaging and insulation resistance tests to troubleshoot hidden short circuits, replace flickering LED panel lighting, and install modular switchboards.',
    ],
    capabilities: [
      {
        title: 'Commercial Office Electrical Wiring',
        desc: 'Concealed copper wiring, network conduit laying, & modular switchboard setup.',
        icon: 'bi-diagram-3-fill',
      },
      {
        title: 'Distribution Board (DB) & MCB Setup',
        desc: 'Organized main DB panel wiring with correctly rated MCBs, RCCBs, & isolators.',
        icon: 'bi-hdd-rack-fill',
      },
      {
        title: 'Earthing & Grounding Pit Setup',
        desc: 'Chemical copper/GI earthing pits protecting computers from static leakage.',
        icon: 'bi-shield-fill',
      },
      {
        title: '3-Phase Power Load Balancing',
        desc: 'Distribute electrical load evenly across phases to prevent tripping.',
        icon: 'bi-sliders',
      },
      {
        title: 'Short Circuit Fault Troubleshooting',
        desc: 'Thermal imaging and insulation resistance testing to locate hidden shorts.',
        icon: 'bi-search',
      },
      {
        title: 'Energy-Efficient LED Lighting Setup',
        desc: 'Office panel LED light mounting, decorative lighting, & motion sensor switches.',
        icon: 'bi-lightbulb-fill',
      },
    ],
    techStack: ['Havells', 'Schneider Electric', 'Polycab', 'Finolex', 'Legrand', 'Anchor'],
    benefits: [
      '100% electrical safety preventing fire hazards and equipment damage',
      'Proper earthing pit setup protecting sensitive IT computer hardware',
      'Balanced phase distribution preventing frequent main breaker trips',
      'Neat, labeled distribution board wiring for easy future maintenance',
    ],
  },

  'plumbing-services': {
    title: 'Plumbing & Facility Maintenance',
    category: 'Electronics & Maintenance',
    iconClass: 'bi bi-droplet',
    badge: 'K Electronics Division',
    subtitle: 'Sanitary fitting, pipeline maintenance, & commercial facility plumbing maintenance.',
    overview: [
      'Reliable commercial and residential plumbing maintenance services by K Electronics. Our experienced plumbers handle CPVC/UPVC/GI water pipeline installations, overhead tank plumbing, and sanitary fixture mounting.',
      'We install automatic water pressure booster pumps and float valves, ensuring consistent, high water pressure across office restrooms, pantries, and commercial facilities.',
      'We provide non-destructive pipe leak detection, motorized drain blockage clearing, and routine commercial facility plumbing inspections to prevent water damage.',
    ],
    capabilities: [
      {
        title: 'Water Pipe Line Installation',
        desc: 'CPVC, UPVC, & GI pipe fitting for hot & cold water distribution.',
        icon: 'bi-droplet-fill',
      },
      {
        title: 'Pressure Pump & Motor Installation',
        desc: 'Automatic booster pump setup ensuring high water pressure across all taps.',
        icon: 'bi-lightning-fill',
      },
      {
        title: 'Overhead Tank Plumbing & Valves',
        desc: 'Tank outlet piping, automatic float valve setup, & tank cleaning.',
        icon: 'bi-box-fill',
      },
      {
        title: 'Sanitary Ware & Tap Fitting',
        desc: 'Sensor taps, flush valves, wall-hung toilets, & sink installations.',
        icon: 'bi-wrench-fill',
      },
      {
        title: 'Pipe Leakage & Blockage Removal',
        desc: 'Non-destructive leak detection and motorized drain pipe clearing.',
        icon: 'bi-search',
      },
      {
        title: 'Commercial Facility AMC Plumbing',
        desc: 'Routine plumbing inspections for office complexes and commercial buildings.',
        icon: 'bi-file-earmark-check-fill',
      },
    ],
    techStack: ['Astral Pipes', 'Supreme', 'Jaquar', 'Hindware', 'Pressure Pumps', 'CPVC/UPVC'],
    benefits: [
      'Prompt resolution of water leaks preventing building structural damage',
      'Consistent, high water pressure across office restrooms and kitchens',
      'Durable, leak-proof CPVC/UPVC pipe fittings with long life guarantees',
      'Professional facility maintenance keeping commercial premises operational',
    ],
  },
};

export const getServicesData = () => {
  const saved = localStorage.getItem('admin_services');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return DEFAULT_SERVICES;
    }
  }
  return DEFAULT_SERVICES;
};

export const saveServiceData = (slug, updatedService) => {
  const current = getServicesData();
  const updated = {
    ...current,
    [slug]: {
      ...current[slug],
      ...updatedService,
    },
  };
  localStorage.setItem('admin_services', JSON.stringify(updated));
  return updated;
};

export const resetServicesData = () => {
  localStorage.removeItem('admin_services');
  return DEFAULT_SERVICES;
};

export const servicesData = getServicesData();
