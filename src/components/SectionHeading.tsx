interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="text-center mb-16">
    <h2
      className="text-3xl md:text-4xl font-display font-bold gradient-text inline-block mb-4 relative"
      style={{ textShadow: '0 2px 8px rgba(0,0,0,0.0)' }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
        {subtitle}
      </p>
    )}
    <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow" />
  </div>
);

export default SectionHeading;