import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const courses = [
  'OOP in Java',
  'Data Structures',
  'Algorithms',
  'Operating Systems',
  'Software Engineering',
];

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="section-fade">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Education</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Education Card */}
          <div className="bg-surface border border-border rounded-lg p-6 sm:p-8 hover:border-teal/30 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                  <GraduationCap size={22} className="text-teal" />
                </div>

                <div>
                  <h3 className="text-foreground font-semibold text-lg">
                    Bachelor of Computer Engineering
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-teal font-mono text-sm font-medium">MCTs RGIT</span>
                    <span className="text-border">·</span>
                    <span className="text-muted-foreground text-sm">Mumbai, IN</span>
                  </div>
                </div>
              </div>

              <span className="font-mono text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded border border-border whitespace-nowrap self-start">
                07/2014 – 05/2018
              </span>
            </div>

            {/* Courses */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-mono text-xs text-teal uppercase tracking-wider mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center px-3 py-1 rounded font-mono text-xs font-medium bg-muted/20 border border-border text-muted-foreground hover:border-teal/40 hover:text-teal transition-all duration-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
