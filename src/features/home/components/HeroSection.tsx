import GradientText from '@/components/ui/GradientText';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          <GradientText
            colors={["#F5F3EE", "#5fd986", "#F5F3EE"]}
            animationSpeed={25}
            showBorder={false}
            pauseOnHover={false}
            yoyo={true}
          >
            Imagination is infinite.<br />
            Realization has its own timing.
          </GradientText>
        </h1>
        
        <div className="hero-subtext">
          <p>A real-time ledger for the modern Da Vinci.</p>
          <p>Map the connections.</p>
        </div>
      </div>
    </section>
  );
}
