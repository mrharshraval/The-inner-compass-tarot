import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { FloatingElement } from "@/components/visual/FloatingElement";
import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { ArrowRight, Sparkles, User, Calendar, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* 1. HERO SECTION */}
      <Section fullscreen className="pt-0 pb-0">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto z-10">

          {/* Inner Compass Badge */}
          <FloatingElement delay={0} duration={4} yOffset={10}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-accent-blue" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-primary">
                Modern Mysticism
              </span>
            </div>
          </FloatingElement>

          {/* Headline */}
          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Clarity from <br />
            <span className="italic font-cormorant font-light text-accent-blue/90">The Void</span>
          </h1>

          {/* Subheadline */}
          <p className="text-text-secondary font-inter text-lg md:text-xl max-w-lg leading-relaxed mix-blend-plus-lighter">
            Tarot readings and Reiki healing to navigate your path.
            Grounded guidance for the modern soul.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <Link href="/booking">
              <Button size="lg" className="min-w-[200px]">Book Session</Button>
            </Link>
            <Link href="/tarot">
              <Button variant="secondary" size="lg" className="min-w-[200px]">Explore Services</Button>
            </Link>
          </div>
        </div>

        {/* Ambient Decor - Replacing specific images with CSS shapes for now */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Example 'Planet' or Glow */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px] opacity-50 animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-indigo/20 rounded-full blur-[100px] opacity-50 animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>
      </Section>

      {/* 2. SERVICES OVERVIEW */}
      <Section className="border-t border-border-subtle bg-space-surface/30">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-cinzel text-3xl md:text-4xl text-text-primary">Services</h2>
          <p className="text-text-secondary font-cormorant text-xl italic">Choose your vessel for the journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Tarot */}
          <GlassPanel className="p-8 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="w-5 h-5 text-accent-purple" />
            </div>
            <h3 className="font-cinzel text-xl text-text-primary mb-3">Tarot Analysis</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 min-h-[80px]">
              Archetypal mirroring to untangle complex situations. Not fortune telling, but future creation.
            </p>
            <Link href="/tarot" className="inline-flex items-center text-accent-blue text-xs uppercase tracking-widest hover:gap-2 transition-all">
              Details <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </GlassPanel>

          {/* Service 2: Reiki */}
          <GlassPanel className="p-8 hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-accent-indigo/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-5 h-5 text-accent-indigo" />
            </div>
            <h3 className="font-cinzel text-xl text-text-primary mb-3">Reiki Healing</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 min-h-[80px]">
              Energy realignment to reduce stress and restore balance. A touchless, meditative physiological reset.
            </p>
            <Link href="/reiki" className="inline-flex items-center text-accent-blue text-xs uppercase tracking-widest hover:gap-2 transition-all">
              Details <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </GlassPanel>

          {/* Service 3: Combined */}
          <GlassPanel className="p-8 border-accent-blue/20 bg-accent-blue/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 bg-accent-blue/10 rounded-bl-2xl">
              <Sparkles className="w-4 h-4 text-accent-blue animate-pulse" />
            </div>
            <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <User className="w-5 h-5 text-accent-blue" />
            </div>
            <h3 className="font-cinzel text-xl text-text-primary mb-3">The Alignment</h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 min-h-[80px]">
              Our signature 90-minute session. A full Tarot analysis followed by Reiki integration. Complete calibration.
            </p>
            <Link href="/combined" className="inline-flex items-center text-accent-blue text-xs uppercase tracking-widest hover:gap-2 transition-all">
              Details <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </GlassPanel>
        </div>
      </Section>

      {/* 3. PROCESS ("How it works") */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="font-cinzel text-3xl md:text-4xl text-text-primary leading-tight">
              The Session <br /><span className="text-accent-blue">Flow</span>
            </h2>

            <div className="space-y-6">
              {[
                { step: "01", title: "Book & Prepare", desc: "Select your time. Receive a simple guide on how to set your intention before we meet." },
                { step: "02", title: "The Session", desc: "We meet via Zoom. A grounded conversation focused on your questions, followed by energy work." },
                { step: "03", title: "Integration", desc: "Receive a recording of the reading and aftercare notes to help the shift settle." }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start group">
                  <span className="font-cinzel text-2xl text-white/20 group-hover:text-accent-blue transition-colors">{item.step}</span>
                  <div>
                    <h4 className="font-cinzel text-lg text-text-primary mb-2">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative h-[500px]">
            {/* Abstract Visual Representation of "Flow" */}
            <FloatingElement delay={0} duration={8} yOffset={20} className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-96 border border-white/10 rounded-full backdrop-blur-sm bg-gradient-to-tr from-white/5 to-transparent relative">
                {/* Inner Orbit */}
                <div className="absolute inset-12 border border-accent-blue/20 rounded-full" />
              </div>
            </FloatingElement>
          </div>
        </div>
      </Section>

      {/* 4. PRACTITIONER & TRUST */}
      <Section className="bg-space-surface/50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <User className="w-16 h-16 text-white/20 mx-auto" />

          <h2 className="font-cormorant text-2xl md:text-4xl text-text-primary italic font-light leading-relaxed">
            "I believe intuition is not magic—it's a skill. My role is to help you clear the noise so you can hear your own voice again."
          </h2>

          <div className="flex flex-col items-center gap-2">
            <span className="font-cinzel text-sm text-accent-blue tracking-widest uppercase">Preeti Jain</span>
            <span className="text-text-secondary text-xs uppercase tracking-widest">Certified Reiki Master & Tarot Reader</span>
          </div>

          <GlassPanel variant="ghost" className="p-6 inline-flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center text-left max-w-2xl mx-auto">
            <div>
              <h4 className="text-white font-cinzel text-2xl mb-1">5yrs+</h4>
              <span className="text-text-muted text-xs uppercase tracking-widest">Experience</span>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-white/10" />
            <div>
              <h4 className="text-white font-cinzel text-2xl mb-1">500+</h4>
              <span className="text-text-muted text-xs uppercase tracking-widest">Sessions</span>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-white/10" />
            <div>
              <h4 className="text-white font-cinzel text-2xl mb-1">100%</h4>
              <span className="text-text-muted text-xs uppercase tracking-widest">Confidential</span>
            </div>
          </GlassPanel>
        </div>
      </Section>

      {/* 5. ETHICS & FINAL CTA */}
      <Section className="py-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex gap-2 items-center text-text-muted text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Trauma-Informed</span>
          </div>
          <div className="flex gap-2 items-center text-text-muted text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Strictly Confidential</span>
          </div>
          <div className="flex gap-2 items-center text-text-muted text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Safe Space</span>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="pt-0 pb-32">
        <GlassPanel className="p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          {/* Background glow for CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/5 blur-[100px] pointer-events-none" />

          <h2 className="font-cinzel text-4xl md:text-5xl text-white relative z-10">Start Your Journey</h2>
          <p className="text-text-secondary max-w-xl mx-auto relative z-10">The cards are shuffled. The energy is waiting. All that is missing is your intention.</p>
          <div className="pt-4 relative z-10">
            <Link href="/booking">
              <Button size="lg" className="min-w-[240px]">Schedule Now</Button>
            </Link>
          </div>
        </GlassPanel>
      </Section>

    </main>
  );
}
