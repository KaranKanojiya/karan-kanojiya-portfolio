import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Contact CTA */}
        <div className="text-center mb-12">
          <p className="font-mono text-teal text-sm tracking-widest uppercase mb-3">What's Next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/KaranKanojiya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded border border-teal text-teal font-mono text-sm hover:bg-teal hover:text-background transition-all duration-200 group"
            >
              <SiGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/karan-kanojiya-38b86b95"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded border border-border text-muted-foreground font-mono text-sm hover:border-teal hover:text-teal transition-all duration-200"
            >
              <SiLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
          <p className="font-mono text-xs text-muted-foreground/60">
            © {year} Karan Kanojiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
