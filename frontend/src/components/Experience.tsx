import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Autodesk',
    location: 'Pune, IN',
    period: '05/2024 – Current',
    bullets: [
      'Core backend contributor to the Fusion Collaborative Editing (CE) Hub, enabling cloud-based team workspaces and real-time collaboration for global customers.',
      'Designed and built a scratch-made Data Retention engine using Spring Boot and AWS to orchestrate complex workflows for user entitlements, lifecycle management, and GDPR compliance.',
      'Engineered scalable, event-driven microservices leveraging AWS Lambda, SQS, and DynamoDB to orchestrate high-volume data retention workflows and ensure enterprise-wide GDPR compliance.',
      'Worked on and owned internal tooling, including Supportal, used by support and operations teams to fix customer data, perform daily triage, and resolve high-priority production issues.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Tricentis',
    location: 'Pune, IN',
    period: '06/2021 – 05/2024',
    bullets: [
      'Designed and developed a Spring REST API based on the MVC framework for the company\'s flagship product, resulting in a 25% increase in user engagement and a 30% reduction in response time.',
      'Improved dashboard monitoring by implementing robust support for large custom filters, optimizing performance by 30%, and enhancing the user experience by using local storage instead of cookies.',
      'Effectively determined the underlying cause of a critical failure in the Atlassian Jira Migration flow for a prominent product by collaborating with the Atlassian community and performing meticulous analysis and troubleshooting. Collaborated with R&D teams to optimize Jira Rate Limit logic, reducing Jira Webhook API sync time by 20%.',
      'Developed and maintained unit tests using JUnit and Mockito Framework to ensure code quality and reliability.',
      'Proven expertise in identifying root causes of application performance issues, leveraging tools like thread dump, Datadog, and CloudWatch and collaborating with the DevOps team for effective solutions and optimized application performance.',
    ],
  },
  {
    role: 'Java Developer',
    company: 'Tata Communications',
    location: 'Pune, IN',
    period: '07/2018 – 06/2021',
    bullets: [
      'Developed Java modules implementing business rules and designed BPMN workflows using Red Hat (RHPAM) and Spring Boot.',
      'Designed and developed multiple service business components using Java 8 and Spring Boot. Implemented RESTful APIs to deliver high-performance, scalable, and secure APIs based on JWT tokens using Spring OAuth 2.0 and Keycloak for RHPAM.',
    ],
  },
];

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-fade relative pl-8 md:pl-12"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-teal border-2 border-background shadow-teal" />

      {/* Card */}
      <div className="bg-surface border border-border rounded-lg p-6 hover:border-teal/30 transition-colors duration-300 group">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-foreground font-semibold text-lg group-hover:text-teal transition-colors">
              {item.role}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-teal font-mono text-sm font-medium">{item.company}</span>
              <span className="text-border">·</span>
              <span className="text-muted-foreground text-sm">{item.location}</span>
            </div>
          </div>
          <span className="font-mono text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded border border-border whitespace-nowrap self-start">
            {item.period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-teal mt-1.5 flex-shrink-0">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const headerRef = useScrollAnimation();

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="section-fade flex items-center gap-4 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Experience</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.5 md:left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-teal/60 via-border to-transparent" />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <ExperienceCard key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
