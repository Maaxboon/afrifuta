import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">AF</span>
              </div>
              <span className="text-xl font-bold">AfriFuta</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Connecting Africa's football talent with global opportunities. 
              Your journey to professional football starts here.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* For Players */}
          <div>
            <h3 className="font-semibold mb-4">For Players</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Create Profile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Opportunities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Upload Videos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* For Scouts */}
          <div>
            <h3 className="font-semibold mb-4">For Scouts & Clubs</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Search Players</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post Opportunities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Verify Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@afrifuta.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+234 800 AFRIFUTA</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2025 AfriFuta. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;