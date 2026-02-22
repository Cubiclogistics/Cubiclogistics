import { Building2, Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page" data-testid="about-page">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center grain-overlay overflow-hidden" data-testid="about-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1764690690771-b4522d66b433?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NzE3NDkyODF8MA&ixlib=rb-4.1.0&q=85)',
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tight text-white mb-4">
            About <span className="text-primary">Cubic Logistics</span>
          </h1>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Your Trusted Partner In Logistics</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-32 bg-background" data-testid="company-overview">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Who We Are</p>
              <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight text-foreground/90 mb-6">
                Leading Logistics Provider
              </h2>
              <div className="space-y-4 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Cubic Logistics is a premier logistics and supply chain management company based in Chennai, Tamil Nadu. With years of industry experience, we have established ourselves as a trusted partner for businesses seeking reliable and efficient logistics solutions.
                </p>
                <p>
                  Our comprehensive range of services includes transportation, warehousing, distribution, and supply chain management. We are committed to delivering excellence through innovation, technology, and dedicated customer service.
                </p>
                <p>
                  At Cubic Logistics, we understand that every business has unique logistics needs. That's why we offer customized solutions designed to optimize your supply chain, reduce costs, and improve operational efficiency.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwJTIwb2NlYW4lMjBjYXJnb3xlbnwwfHx8fDE3NzE3NDkyODB8MA&ixlib=rb-4.1.0&q=85"
                alt="Logistics Operations"
                className="w-full h-full object-cover border-l-4 border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-muted" data-testid="mission-vision">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-background border-l-4 border-primary p-8" data-testid="mission-card">
              <div className="text-primary mb-4">
                <Target size={48} strokeWidth={1} />
              </div>
              <h3 className="font-heading font-medium text-3xl uppercase tracking-normal text-foreground/80 mb-4">
                Our Mission
              </h3>
              <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
                To provide innovative, reliable, and cost-effective logistics solutions that empower businesses to succeed in the global marketplace. We are dedicated to exceeding customer expectations through continuous improvement and operational excellence.
              </p>
            </div>

            <div className="bg-background border-l-4 border-primary p-8" data-testid="vision-card">
              <div className="text-primary mb-4">
                <Eye size={48} strokeWidth={1} />
              </div>
              <h3 className="font-heading font-medium text-3xl uppercase tracking-normal text-foreground/80 mb-4">
                Our Vision
              </h3>
              <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
                To be the most trusted and preferred logistics partner in India and beyond, recognized for our commitment to quality, innovation, and sustainability. We aim to set new standards in the logistics industry through technology-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-background" data-testid="core-values">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Our Foundation</p>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight text-foreground/90">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Reliability', description: 'Consistent delivery of promises and commitments' },
              { title: 'Innovation', description: 'Embracing new technologies and methodologies' },
              { title: 'Integrity', description: 'Operating with honesty and transparency' },
              { title: 'Excellence', description: 'Pursuing the highest quality in everything we do' },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-card border border-border/40 hover:border-primary/50 transition-all duration-500" data-testid={`value-card-${index}`}>
                <div className="text-primary mb-4 flex justify-center">
                  <Award size={40} strokeWidth={1} />
                </div>
                <h3 className="font-heading font-medium text-xl uppercase mb-2">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 md:py-32 bg-secondary text-white grain-overlay" data-testid="company-info">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-primary mb-4 flex justify-center">
              <Building2 size={56} strokeWidth={1} />
            </div>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight mb-6">
              Cubic Logistics
            </h2>
            <div className="font-body text-base md:text-lg text-white/80 space-y-2">
              <p>12/2, Munusamy Kovil Street, Menamedu Main Road</p>
              <p>Ambattur, Chennai, Tamil Nadu - 600053</p>
              <p className="mt-4">Phone: <a href="tel:+917604848540" className="text-primary hover:underline">+91 7604848540</a></p>
              <p>Email: <a href="mailto:admin@cubiclogistics.net" className="text-primary hover:underline">admin@cubiclogistics.net</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}