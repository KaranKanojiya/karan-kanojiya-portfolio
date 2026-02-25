import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { IconType } from 'react-icons';
import {
  SiOpenjdk,
  SiPython,
  SiTypescript,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiLiquibase,
  SiJunit5,
  SiPostgresql,
  SiMysql,
  SiElasticsearch,
  SiRedis,
  SiMongodb,
  SiAmazonwebservices,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiSonarqube,
  SiDatadog,
  SiPrometheus,
  SiKibana,
} from 'react-icons/si';

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

/** Map skill name to brand icon (react-icons/si). Unmapped skills render without icon. */
const skillIconMap: Record<string, IconType> = {
  Java: SiOpenjdk,
  Python: SiPython,
  TypeScript: SiTypescript,
  'Spring Boot': SiSpringboot,
  'Spring MVC': SiSpring,
  'Spring Cloud': SiSpring,
  Hibernate: SiHibernate,
  Liquibase: SiLiquibase,
  JUnit: SiJunit5,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Elasticsearch: SiElasticsearch,
  Redis: SiRedis,
  MongoDB: SiMongodb,
  AWS: SiAmazonwebservices,
  Kubernetes: SiKubernetes,
  Docker: SiDocker,
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  SonarQube: SiSonarqube,
  Datadog: SiDatadog,
  Prometheus: SiPrometheus,
  Kibana: SiKibana,
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'TypeScript'],
    color: 'teal',
  },
  {
    title: 'Frameworks',
    skills: [
      'Spring Boot',
      'Spring MVC',
      'Spring Cloud',
      'Microservices',
      'Hibernate',
      'Liquibase',
      'JUnit',
      'Mockito',
    ],
    color: 'teal',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Elasticsearch', 'Redis', 'MongoDB', 'Cassandra'],
    color: 'teal',
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      'AWS',
      'Kubernetes',
      'Docker',
      'Git',
      'CI/CD',
      'GitHub Actions',
      'SonarQube',
      'Datadog',
      'Prometheus',
      'Kibana',
    ],
    color: 'teal',
  },
];

function SkillBadge({ skill }: { skill: string }) {
  const Icon = skillIconMap[skill];
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs font-medium bg-surface border border-border text-muted-foreground hover:border-teal hover:text-teal transition-all duration-200 cursor-default">
      {Icon ? <Icon size={16} className="flex-shrink-0" /> : null}
      <span>{skill}</span>
    </span>
  );
}

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="section-fade">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-surface border border-border rounded-lg p-6 hover:border-teal/30 transition-colors duration-300"
              >
                <h3 className="font-mono text-teal text-sm font-medium mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
