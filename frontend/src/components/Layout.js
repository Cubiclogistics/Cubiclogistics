import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-primary">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3" data-testid="header-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_85bb121a-3f20-45aa-803a-fae73f9861da/artifacts/x44xp81u_UPD%20LOGO.PNG" 
                alt="Cubic Logistics" 
                className="h-12 w-auto"
              />
              <span className="font-heading text-xl md:text-2xl font-bold text-primary uppercase tracking-tight hidden sm:block">
                Cubic Logistics
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                  className={`font-heading uppercase tracking-wide text-sm transition-all duration-300 hover:text-primary ${
                    isActive(link.path) ? 'text-primary border-b-2 border-primary' : 'text-secondary border-b-2 border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                data-testid="nav-get-quote-btn"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading uppercase tracking-wide px-6 py-3 text-sm transition-all duration-300 hover:tracking-widest"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-primary p-2"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-primary/20" data-testid="mobile-menu">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                  className={`block py-3 font-heading uppercase tracking-wide text-sm transition-colors ${
                    isActive(link.path) ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-get-quote-btn"
                className="block mt-4 bg-primary text-primary-foreground text-center py-3 font-heading uppercase tracking-wide text-sm"
              >
                Get Quote
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_85bb121a-3f20-45aa-803a-fae73f9861da/artifacts/x44xp81u_UPD%20LOGO.PNG" 
                alt="Cubic Logistics" 
                className="h-16 w-auto mb-4"
              />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Your Trusted Partner In Logistics
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-lg uppercase tracking-wide text-primary mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm hover:text-primary transition-colors" data-testid={`footer-link-${link.name.toLowerCase()}`}>
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/quote" className="text-sm hover:text-primary transition-colors" data-testid="footer-link-quote">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading text-lg uppercase tracking-wide text-primary mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-primary transition-colors cursor-pointer">Transportation</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Supply Chain Management</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Warehousing & Distribution</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Other Services</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-lg uppercase tracking-wide text-primary mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>12/2, Munusamy Kovil Street, Menamedu Main Road, Ambattur, Chennai, Tamil Nadu - 600053</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <a href="tel:+917604848540" className="hover:text-primary transition-colors">+91 7604848540</a>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <a href="mailto:admin@cubiclogistics.net" className="hover:text-primary transition-colors">admin@cubiclogistics.net</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/20 mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Cubic Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};