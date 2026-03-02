import { Link } from 'react-router-dom';
import { Truck, Package, Warehouse, Globe, CheckCircle, Clock, Shield, Users } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Truck size={40} strokeWidth={1} />,
      title: 'Transportation',
      description: 'FTL, PTL & ODC services - Comprehensive transportation solutions for full loads, shared cargo, and oversized freight across India.',
      image: 'https://images.unsplash.com/photo-1766561993246-c021a9110166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXl8ZW58MHx8fHwxNzcxNzQ5Mjc4fDA&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: <Globe size={40} strokeWidth={1} />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization to enhance efficiency and reduce costs.',
      image: 'https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      icon: <Warehouse size={40} strokeWidth={1} />,
      title: 'Warehousing & Distribution',
      description: 'Secure storage facilities with advanced inventory management systems.',
      image: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwzfHxsYXJnZSUyMGNsZWFuJTIwd2FyZWhvdXNlJTIwaW50ZXJpb3IlMjBzaGVsdmVzfGVufDB8fHx8MTc3MTc0OTI3OXww&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: <Package size={40} strokeWidth={1} />,
      title: 'Other Services',
      description: 'Custom logistics solutions tailored to meet your unique business requirements.',
      image: 'https://images.unsplash.com/photo-1768463852099-49f2db7d7c8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXl8ZW58MHx8fHwxNzcxNzQ5Mjc4fDA&ixlib=rb-4.1.0&q=85',
    },
  ];

  const features = [
    {
      icon: <Clock size={32} strokeWidth={1} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service for all your logistics needs',
    },
    {
      icon: <Shield size={32} strokeWidth={1} />,
      title: 'Secure & Safe',
      description: 'Advanced security measures to protect your valuable cargo',
    },
    {
      icon: <CheckCircle size={32} strokeWidth={1} />,
      title: 'On-Time Delivery',
      description: 'Commitment to timely delivery with real-time tracking',
    },
    {
      icon: <Users size={32} strokeWidth={1} />,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success',
    },
  ];

  return (
    <div className="home-page" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center grain-overlay overflow-hidden" data-testid="hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1768463852099-49f2db7d7c8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXl8ZW58MHx8fHwxNzcxNzQ5Mjc4fDA&ixlib=rb-4.1.0&q=85)',
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tight text-white mb-6">
              Your Trusted Partner In{' '}
              <span className="text-primary">Logistics</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Delivering excellence through reliable transportation, efficient supply chain management, and secure warehousing solutions across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/quote"
                data-testid="hero-get-quote-btn"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wide px-8 py-6 text-lg transition-all duration-300 hover:tracking-widest text-center"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                data-testid="hero-our-services-btn"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading uppercase tracking-wide px-8 py-6 text-lg transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-background" data-testid="services-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">What We Offer</p>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight text-foreground/90">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                data-testid={`service-card-${index}`}
                className="bg-card border border-border/40 hover:border-primary/50 transition-all duration-500 p-8 flex flex-col gap-4 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                <div 
                  className="h-48 bg-cover bg-center mb-4 relative overflow-hidden"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-secondary/60 group-hover:bg-secondary/40 transition-all duration-500"></div>
                </div>
                <div className="text-primary">{service.icon}</div>
                <h3 className="font-heading font-medium text-2xl uppercase tracking-normal text-foreground/80">
                  {service.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              data-testid="view-all-services-btn"
              className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading uppercase tracking-wide px-8 py-6 text-lg border border-secondary transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-muted" data-testid="why-choose-us-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Why Work With Us</p>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight text-foreground/90">
              Why Choose Cubic Logistics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-testid={`feature-card-${index}`}
                className="text-center p-6 bg-background border-l-4 border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="font-heading font-medium text-xl uppercase mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary text-white grain-overlay" data-testid="cta-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight mb-6">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover how we can streamline your supply chain operations.
          </p>
          <Link
            to="/quote"
            data-testid="cta-get-quote-btn"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wide px-8 py-6 text-lg transition-all duration-300 hover:tracking-widest"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}