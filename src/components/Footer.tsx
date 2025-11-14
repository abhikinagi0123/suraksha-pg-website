import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-t-2 border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg?v=2" alt="Suraksha PG" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Suraksha PG</span>
                <span className="text-xs text-muted-foreground">For Ladies</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium accommodation for working women and students in Bangalore. Safe, comfortable, and affordable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-secondary cursor-pointer transition-colors">About Us</Link></li>
              <li><Link to="/rooms" className="text-muted-foreground hover:text-accent cursor-pointer transition-colors">Rooms & Facilities</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-secondary cursor-pointer transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Rajarajeshwari Nagar, Bangalore - 560098</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+919980974192" className="text-muted-foreground hover:text-secondary cursor-pointer transition-colors">+91 99809 74192</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:surakshahomespg@gmail.com" className="text-muted-foreground hover:text-accent cursor-pointer transition-colors">surakshahomespg@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Operating Hours</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-foreground">Open Daily</p>
                <p className="text-muted-foreground">6:00 AM - 9:45 PM</p>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-foreground">Visiting Hours</p>
                <p className="text-muted-foreground">9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Suraksha PG for Ladies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}