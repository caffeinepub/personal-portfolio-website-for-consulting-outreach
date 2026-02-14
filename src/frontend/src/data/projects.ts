export interface Project {
  title: string;
  description: string;
  roleStack: string;
  links: {
    demo?: string;
    repository?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Enterprise Digital Transformation",
    description: "Led a comprehensive digital transformation initiative for a Fortune 500 manufacturing company, implementing cloud infrastructure, data analytics platforms, and automated workflows. Resulted in 35% cost reduction and 50% faster time-to-market for new products.",
    roleStack: "Lead Consultant | Cloud Architecture, Change Management, Process Optimization",
    links: {
      demo: "https://example.com/case-study-1",
    },
  },
  {
    title: "Market Entry Strategy - FinTech",
    description: "Developed and executed go-to-market strategy for a fintech startup entering the European market. Conducted competitive analysis, regulatory assessment, and partnership development. Successfully launched in 5 countries within 12 months.",
    roleStack: "Strategy Consultant | Market Research, Business Development, Regulatory Compliance",
    links: {
      demo: "https://example.com/case-study-2",
    },
  },
  {
    title: "Operational Excellence Program",
    description: "Designed and implemented an operational excellence program for a healthcare provider network, focusing on patient experience, cost optimization, and quality metrics. Achieved 25% improvement in patient satisfaction scores and $5M annual savings.",
    roleStack: "Operations Consultant | Process Redesign, Six Sigma, Performance Management",
    links: {
      demo: "https://example.com/case-study-3",
    },
  },
  {
    title: "Data Analytics Platform",
    description: "Built a comprehensive data analytics platform for a retail chain, integrating multiple data sources and creating real-time dashboards for executive decision-making. Enabled data-driven inventory management and personalized marketing campaigns.",
    roleStack: "Analytics Consultant | Data Engineering, Business Intelligence, Predictive Modeling",
    links: {
      demo: "https://example.com/case-study-4",
      repository: "https://github.com/example/analytics-platform",
    },
  },
];
