import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-muted border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Suraksha PG" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight">Suraksha PG</span>
                <span className="text-xs text-muted-foreground">For Ladies</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium accommodation for working women and students in Bangalore. Safe, comfortable, and affordable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground cursor-pointer">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground cursor-pointer">About Us</Link></li>
              <li><Link to="/rooms" className="text-muted-foreground hover:text-foreground cursor-pointer">Rooms & Facilities</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-foreground cursor-pointer">Gallery</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-foreground cursor-pointer">Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">HSR Layout, Bangalore - 560102</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+919743824684" className="text-muted-foreground hover:text-foreground cursor-pointer">+91 97438 24684</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:surakshahomespg@gmail.com" className="text-muted-foreground hover:text-foreground cursor-pointer">surakshahomespg@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-background hover:bg-accent cursor-pointer transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background hover:bg-accent cursor-pointer transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background hover:bg-accent cursor-pointer transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Suraksha PG for Ladies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
