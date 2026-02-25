import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AVATAR_SRC = '/assets/generated/karan-avatar.dim_400x400.png';

export default function Hero() {
  const ref = useScrollAnimation();
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-6 max-w-5xl py-12 md:py-16">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="section-fade flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16"
        >
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting */}
            <p className="font-mono text-teal text-sm tracking-widest mb-4 uppercase">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3">
              Karan{' '}
              <span className="text-teal">Kanojiya</span>
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-light text-muted-foreground mb-6 font-mono">
              Senior Software Engineer
            </h2>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-teal mb-6 mx-auto md:mx-0" />

            {/* Summary */}
            <p className="text-muted-foreground leading-relaxed max-w-xl text-base sm:text-lg mb-8">
              Product-driven software engineer with{' '}
              <span className="text-foreground font-medium">7+ years</span> of experience in
              software design and development. Proven ability to apply data structures,
              algorithms, and object-oriented programming to deliver high-quality software
              products.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/KaranKanojiya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded border border-teal text-teal font-mono text-sm hover:bg-teal hover:text-background transition-all duration-200 group"
              >
                <SiGithub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/karan-kanojiya-38b86b95"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded border border-border text-muted-foreground font-mono text-sm hover:border-teal hover:text-teal transition-all duration-200"
              >
                <SiLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-teal/10 blur-2xl scale-110" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-teal/40 glow-teal">
                {avatarError ? (
                  <div
                    className="w-full h-full flex items-center justify-center bg-muted text-4xl sm:text-5xl md:text-6xl font-bold text-teal"
                    aria-hidden
                  >
                    K
                  </div>
                ) : (
                  <img
                    src={AVATAR_SRC}
                    alt="Karan Kanojiya"
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                )}
              </div>
              {/* Status dot */}
              <div className="absolute bottom-3 right-3 w-4 h-4 bg-teal rounded-full border-2 border-background animate-pulse-teal" />
            </div>
          </div>
        </div>

        {/* Scroll indicator – compact, links to Skills */}
        <a
          href="#skills"
          className="hidden md:flex flex-col items-center gap-2 mt-8 py-3 px-5 rounded-full border border-teal/30 text-muted-foreground hover:text-teal hover:border-teal/60 hover:bg-teal/5 transition-all duration-300 no-underline group"
          aria-label="Scroll to Skills"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="text-teal/70 group-hover:text-teal group-hover:animate-bounce" />
        </a>
      </div>
    </section>
  );
}
