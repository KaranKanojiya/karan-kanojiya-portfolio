import { useState, useEffect } from 'react';
import { Menu, X, User, Languages, Briefcase, GraduationCap, Mail } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#hero', icon: User },
  { label: 'Skills', href: '#skills', icon: Languages },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: "What's Next?", href: '#contact', icon: Mail },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'skills', 'experience', 'education', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between max-w-5xl">
        {/* Left: empty (kk.dev removed) — keeps nav links right-aligned */}
        <div className="w-20 flex-shrink-0" aria-hidden />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`flex items-center gap-2 font-mono text-sm tracking-wider transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-teal'
                      : 'text-muted-foreground hover:text-teal'
                  }`}
                >
                  <Icon size={14} className="flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-teal transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className={`flex items-center gap-2 font-mono text-base transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-teal'
                        : 'text-muted-foreground hover:text-teal'
                    }`}
                  >
                    <Icon size={16} className="flex-shrink-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
