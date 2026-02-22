import { useState } from 'react';
import { Briefcase, Users } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    cover_letter: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/careers`, formData);
      toast.success('Application submitted successfully! We will review and contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        cover_letter: '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const openPositions = [
    {
      title: 'Logistics Coordinator',
      department: 'Operations',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
    },
    {
      title: 'Warehouse Manager',
      department: 'Warehousing',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
    },
    {
      title: 'Supply Chain Analyst',
      department: 'Supply Chain',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
    },
    {
      title: 'Transportation Specialist',
      department: 'Transportation',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
    },
  ];

  return (
    <div className="careers-page" data-testid="careers-page">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center grain-overlay overflow-hidden" data-testid="careers-hero">
        <div className="absolute inset-0 bg-secondary"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tight text-white mb-4">
            <span className="text-primary">Careers</span> at Cubic
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Join our team and be part of a dynamic logistics company shaping the future of supply chain management
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-32 bg-background" data-testid="why-join-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Work With Us</p>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight text-foreground/90">
              Why Join Cubic Logistics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Advance your career with continuous learning and development programs',
              },
              {
                title: 'Competitive Benefits',
                description: 'Comprehensive compensation packages and employee benefits',
              },
              {
                title: 'Collaborative Culture',
                description: 'Work with a passionate team in a supportive and inclusive environment',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-card border-l-4 border-primary p-8" data-testid={`benefit-card-${index}`}>
                <div className="text-primary mb-4">
                  <Users size={40} strokeWidth={1} />
                </div>
                <h3 className="font-heading font-medium text-2xl uppercase mb-3">{benefit.title}</h3>
                <p className="font-body text-base text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-32 bg-muted" data-testid="positions-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Current Openings</p>
            <h2 className="font-heading font-semibold text-4xl md:text-5xl uppercase tracking-tight text-foreground/90">
              Open Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                data-testid={`position-card-${index}`}
                className="bg-background border border-border/40 hover:border-primary/50 transition-all duration-500 p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-primary">
                    <Briefcase size={32} strokeWidth={1} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">{position.type}</span>
                </div>
                <h3 className="font-heading font-medium text-2xl uppercase mb-2">{position.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-1">{position.department}</p>
                <p className="font-body text-sm text-muted-foreground">{position.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-32 bg-background" data-testid="application-section">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-card border-l-4 border-primary p-8 md:p-12">
            <h2 className="font-heading font-semibold text-3xl uppercase tracking-tight text-foreground/90 mb-8">
              Apply Now
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="career-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-heading text-sm uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="career-name-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-heading text-sm uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="career-email-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block font-heading text-sm uppercase mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  data-testid="career-phone-input"
                  className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="position" className="block font-heading text-sm uppercase mb-2">
                  Position Applying For *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  data-testid="career-position-input"
                  className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                  placeholder="e.g., Logistics Coordinator"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block font-heading text-sm uppercase mb-2">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  data-testid="career-experience-input"
                  className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                  placeholder="e.g., 3 years"
                />
              </div>

              <div>
                <label htmlFor="cover_letter" className="block font-heading text-sm uppercase mb-2">
                  Cover Letter *
                </label>
                <textarea
                  id="cover_letter"
                  name="cover_letter"
                  value={formData.cover_letter}
                  onChange={handleChange}
                  required
                  rows="6"
                  data-testid="career-cover-input"
                  className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none resize-none"
                  placeholder="Tell us why you're a great fit for this position..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="career-submit-btn"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wide px-8 py-6 text-lg transition-all duration-300 hover:tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}