import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />

        {/* Subtle section divider */}
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Skills />

        <div className="container mx-auto px-6 max-w-5xl">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Experience />

        <div className="container mx-auto px-6 max-w-5xl">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <Education />
      </main>
      <Footer />
    </div>
  );
}
