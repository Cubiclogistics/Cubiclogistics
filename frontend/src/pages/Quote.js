import { useState } from 'react';
import { FileText } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_type: '',
    origin: '',
    destination: '',
    cargo_type: '',
    weight: '',
    additional_info: '',
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
      await axios.post(`${API}/quote`, formData);
      toast.success('Quote request submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_type: '',
        origin: '',
        destination: '',
        cargo_type: '',
        weight: '',
        additional_info: '',
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quote-page" data-testid="quote-page">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center grain-overlay overflow-hidden" data-testid="quote-hero">
        <div className="absolute inset-0 bg-secondary"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tight text-white mb-4">
            Get a <span className="text-primary">Quote</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Request a customized quote for your logistics needs and receive a competitive pricing proposal
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-card border-l-4 border-primary p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <FileText size={32} className="text-primary" />
              <h2 className="font-heading font-semibold text-3xl uppercase tracking-tight text-foreground/90">
                Request a Quote
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="quote-form">
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
                    data-testid="quote-name-input"
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
                    data-testid="quote-email-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="your@email.com"
                  />
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
                    data-testid="quote-phone-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-heading text-sm uppercase mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    data-testid="quote-company-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service_type" className="block font-heading text-sm uppercase mb-2">
                  Service Type *
                </label>
                <select
                  id="service_type"
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                  required
                  data-testid="quote-service-select"
                  className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all focus:ring-0 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Supply Chain Management">Supply Chain Management</option>
                  <option value="Warehousing & Distribution">Warehousing & Distribution</option>
                  <option value="Other Services">Other Services</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="origin" className="block font-heading text-sm uppercase mb-2">
                    Origin *
                  </label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    required
                    data-testid="quote-origin-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="Pickup location"
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="block font-heading text-sm uppercase mb-2">
                    Destination *
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    data-testid="quote-destination-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="Delivery location"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cargo_type" className="block font-heading text-sm uppercase mb-2">
                    Cargo Type *
                  </label>
                  <input
                    type="text"
                    id="cargo_type"
                    name="cargo_type"
                    value={formData.cargo_type}
                    onChange={handleChange}
                    required
                    data-testid="quote-cargo-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="e.g., Electronics, Furniture"
                  />
                </div>

                <div>
                  <label htmlFor="weight" className="block font-heading text-sm uppercase mb-2">
                    Approximate Weight *
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    data-testid="quote-weight-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="e.g., 500 kg, 2 tons"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="additional_info" className="block font-heading text-sm uppercase mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additional_info"
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleChange}
                  rows="4"
                  data-testid="quote-additional-input"
                  className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none resize-none"
                  placeholder="Any special requirements or additional details..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="quote-submit-btn"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wide px-8 py-6 text-lg transition-all duration-300 hover:tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}