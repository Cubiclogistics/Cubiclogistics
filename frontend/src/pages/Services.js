import { Truck, Globe, Warehouse, Package, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const fleetTypes = [
    { type: 'Tata Ace / Dost', capacity: '750 kg - 1.5 Ton', size: '7-8 feet' },
    { type: 'Pickup / Chhota Hathi', capacity: '1.5 - 2 Ton', size: '8-10 feet' },
    { type: '407 / Taurus', capacity: '2.5 - 3.5 Ton', size: '12-14 feet' },
    { type: 'LCV (Light Commercial Vehicle)', capacity: '4 - 5 Ton', size: '14-17 feet' },
    { type: 'MCV (Medium Commercial Vehicle)', capacity: '7 - 9 Ton', size: '17-19 feet' },
    { type: 'ICV (Intermediate Commercial Vehicle)', capacity: '9 - 12 Ton', size: '19-20 feet' },
    { type: 'SCV (Small Container Vehicle)', capacity: '12 - 15 Ton', size: '20-24 feet' },
    { type: 'Multi-Axle Truck', capacity: '15 - 25 Ton', size: '24-32 feet' },
    { type: 'Trailer / Container', capacity: '25 - 32 Ton', size: '32-40 feet' },
  ];

  const services = [
    {
      icon: <Truck size={56} strokeWidth={1} />,
      title: 'Transportation',
      subtitle: 'FTL Services Across India',
      description: 'Full Truck Load (FTL) services covering all major cities and routes across India with our diverse fleet of vehicles in all sizes.',
      features: [
        'Pan-India Coverage - All major cities & industrial hubs',
        'Full Truck Load (FTL) - Dedicated vehicle for your cargo',
        'Part Truck Load (PTL) - Cost-effective shared solutions',
        'Express Delivery - Time-critical shipments',
        'Temperature Controlled - Reefer trucks for sensitive cargo',
        'GPS Tracking - Real-time shipment monitoring',
      ],
      image: 'https://images.unsplash.com/photo-1766561993246-c021a9110166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXl8ZW58MHx8fHwxNzcxNzQ5Mjc4fDA&ixlib=rb-4.1.0&q=85',
      hasFleet: true,
    },
    {
      icon: <Globe size={56} strokeWidth={1} />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization to improve efficiency and reduce operational costs.',
      features: [
        'Supply Chain Consulting - Strategic planning',
        'Inventory Management - Optimized stock control',
        'Order Fulfillment - Efficient processing',
        'Demand Forecasting - Data-driven predictions',
        'Vendor Management - Supplier coordination',
      ],
      image: 'https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      icon: <Warehouse size={56} strokeWidth={1} />,
      title: 'Warehousing & Distribution',
      description: 'State-of-the-art warehousing facilities with advanced inventory management systems.',
      features: [
        'Secure Storage - Climate-controlled facilities',
        'Inventory Management - Real-time tracking',
        'Pick & Pack Services - Efficient order processing',
        'Distribution Network - Strategic locations',
        'Cross-docking - Direct transfer services',
      ],
      image: 'https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwzfHxsYXJnZSUyMGNsZWFuJTIwd2FyZWhvdXNlJTIwaW50ZXJpb3IlMjBzaGVsdmVzfGVufDB8fHx8MTc3MTc0OTI3OXww&ixlib=rb-4.1.0&q=85',
    },
    {
      icon: <Package size={56} strokeWidth={1} />,
      title: 'Other Services',
      description: 'Specialized logistics solutions tailored to meet your unique business requirements.',
      features: [
        'Customs Clearance - Import/export documentation',
        'Cargo Insurance - Comprehensive coverage',
        'Packaging Solutions - Safe cargo handling',
        'Real-time Tracking - GPS monitoring',
        'Consultation Services - Expert logistics advice',
      ],
      image: 'https://images.unsplash.com/photo-1768463852099-49f2db7d7c8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXl8ZW58MHx8fHwxNzcxNzQ5Mjc4fDA&ixlib=rb-4.1.0&q=85',
    },
  ];

  return (
    <div className="services-page" data-testid="services-page">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center grain-overlay overflow-hidden" data-testid="services-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1621862681400-a2a7321dc1c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxjb250YWluZXIlMjBzaGlwJTIwb2NlYW4lMjBjYXJnb3xlbnwwfHx8fDE3NzE3NDkyODB8MA&ixlib=rb-4.1.0&q=85)',
          }}
        >
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tight text-white mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive logistics solutions designed to meet all your transportation and supply chain needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                data-testid={`service-detail-${index}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-primary mb-6">{service.icon}</div>
                  <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight text-foreground/90 mb-4">
                    {service.title}
                  </h2>
                  <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-3">
                        <ArrowRight size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="font-body text-base text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-96 lg:h-[500px] ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover border-l-4 border-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary text-white grain-overlay" data-testid="services-cta">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight mb-6">
            Need a Custom Solution?
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific logistics requirements and get a tailored solution.
          </p>
          <Link
            to="/quote"
            data-testid="services-get-quote-btn"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wide px-8 py-6 text-lg transition-all duration-300 hover:tracking-widest"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}