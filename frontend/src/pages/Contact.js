import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = https://cubiclogistics.onrender.com;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page" data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center grain-overlay overflow-hidden" data-testid="contact-hero">
        <div className="absolute inset-0 bg-secondary"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tight text-white mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or logistics support
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading font-semibold text-4xl uppercase tracking-tight text-foreground/90 mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4 p-6 bg-card border-l-4 border-primary" data-testid="contact-address">
                  <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg uppercase mb-2">Address</h3>
                    <p className="font-body text-muted-foreground">
                      12/2, Munusamy Kovil Street, Menamedu Main Road,<br />
                      Ambattur, Chennai, Tamil Nadu - 600053
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card border-l-4 border-primary" data-testid="contact-phone">
                  <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg uppercase mb-2">Phone</h3>
                    <a href="tel:+917604848540" className="font-body text-muted-foreground hover:text-primary transition-colors">
                      +91 7604848540
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card border-l-4 border-primary" data-testid="contact-email">
                  <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg uppercase mb-2">Email</h3>
                    <a href="mailto:admin@cubiclogistics.net" className="font-body text-muted-foreground hover:text-primary transition-colors">
                      admin@cubiclogistics.net
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-96 border-4 border-primary" data-testid="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.624!2d80.15764!3d13.11667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzAwLjAiTiA4MMKwMDknMjcuNSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin&q=12/2+Munusamy+Kovil+Street+Menamedu+Main+Road+Ambattur+Chennai+Tamil+Nadu+600053"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cubic Logistics Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-semibold text-4xl uppercase tracking-tight text-foreground/90 mb-8">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block font-heading text-sm uppercase mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="contact-name-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-heading text-sm uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="contact-email-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-heading text-sm uppercase mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    data-testid="contact-phone-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-heading text-sm uppercase mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    data-testid="contact-subject-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none"
                    placeholder="Subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-heading text-sm uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    data-testid="contact-message-input"
                    className="w-full bg-background border-b-2 border-border focus:border-primary px-0 py-4 transition-all placeholder:text-muted-foreground/50 focus:ring-0 focus:outline-none resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit-btn"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wide px-8 py-6 text-lg transition-all duration-300 hover:tracking-widest flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
