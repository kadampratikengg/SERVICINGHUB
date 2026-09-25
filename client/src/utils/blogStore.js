// client/src/utils/blogStore.js

const INITIAL_BLOGS = [
  {
    id: 'b1',
    title: 'DevOps Best Practices for High-Scale Enterprise Applications',
    author: 'IT Servicing Hub',
    category: 'DevOps & Automation',
    readTime: '5 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Explore modern CI/CD automation, Docker containerization, and Kubernetes cluster orchestration guidelines for zero-downtime releases.',
    content: `Implementing robust DevOps practices is essential for scaling modern digital products. Automating continuous integration and deployment pipelines reduces code rollout errors and ensures zero downtime during production updates.

Key pillars of DevOps transformation include:
1. Automated Container Orchestration using Kubernetes & Helm charts.
2. Infrastructure as Code (IaC) with Terraform and Ansible playbooks.
3. Centralized log analytics with Prometheus & Grafana dashboards.
4. Zero-trust security scans integrated directly into GitHub Actions or GitLab pipelines.`,
    createdAt: '2026-09-24',
  },
  {
    id: 'b2',
    title: 'Why Move Your Enterprise to AWS & Azure Cloud Infrastructure?',
    author: 'Cloud Architect',
    category: 'Cloud Services',
    readTime: '4 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Key strategic benefits of cloud infrastructure migration, elasticity, auto-scaling, and FinOps cost optimization strategies.',
    content: `Cloud computing offers unparalleled elasticity and reliability. By migrating workloads to AWS or Azure, enterprises achieve 99.99% infrastructure uptime SLA while reducing overall IT maintenance costs.

Our cloud architects recommend:
- Multi-region database replication for disaster recovery.
- Automated serverless microservices with AWS Lambda & Azure Functions.
- FinOps cost auditing to eliminate idle compute resources.`,
    createdAt: '2026-09-22',
  },
  {
    id: 'b3',
    title: 'Top Cybersecurity Shielding Practices for 2026 Web Portals',
    author: 'Security Architect',
    category: 'IT Security',
    readTime: '6 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Protecting web applications against OWASP Top 10 vulnerabilities, DDoS attacks, and ransomware threats.',
    content: `Cyber threats are evolving rapidly. Implementing multi-layer perimeter security with Cloudflare WAF, SSL enforcement, vulnerability scans, and immutable database backups is vital to data protection.

Essential security steps:
- Enforce MFA across all corporate access gateways.
- Lock down administrative ports to trusted static IP addresses.
- Execute automated vulnerability testing on all staging branches.`,
    createdAt: '2026-09-20',
  },
  {
    id: 'b4',
    title: 'Modernizing Legacy Web Applications with React & Node.js',
    author: 'Lead Developer',
    category: 'Software & Web Development',
    readTime: '4 min read',
    featured: false,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    excerpt: 'Transform monolithic PHP and ASP legacy systems into lightning-fast React micro-frontends backed by Node REST APIs.',
    content: `Upgrading legacy web portals enhances performance, improves security, and delivers a modern user experience across mobile and desktop devices.`,
    createdAt: '2026-09-18',
  },
];

export const getBlogPosts = () => {
  const saved = localStorage.getItem('admin_blogs');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return INITIAL_BLOGS;
    }
  }
  localStorage.setItem('admin_blogs', JSON.stringify(INITIAL_BLOGS));
  return INITIAL_BLOGS;
};

export const saveBlogPost = (post) => {
  const blogs = getBlogPosts();
  if (post.id) {
    // Update existing
    const updated = blogs.map((b) => (b.id === post.id ? { ...b, ...post } : b));
    localStorage.setItem('admin_blogs', JSON.stringify(updated));
    return post;
  } else {
    // Add new
    const newPost = {
      ...post,
      id: 'blog_' + Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
      author: post.author || 'IT Servicing Hub',
      readTime: post.readTime || '3 min read',
      image:
        post.image ||
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    };
    const updated = [newPost, ...blogs];
    localStorage.setItem('admin_blogs', JSON.stringify(updated));
    return newPost;
  }
};

export const deleteBlogPost = (id) => {
  const blogs = getBlogPosts();
  const updated = blogs.filter((b) => b.id !== id);
  localStorage.setItem('admin_blogs', JSON.stringify(updated));
  return updated;
};
