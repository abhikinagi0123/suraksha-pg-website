import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms & Facilities", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Location", path: "/location" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-2 border-primary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
            <div className="relative">
              <img src="/logo.svg" alt="Suraksha PG" className="h-12 w-12 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Suraksha PG</span>
              <span className="text-xs text-muted-foreground">For Ladies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={`cursor-pointer transition-all ${isActive(link.path) ? 'bg-gradient-to-r from-primary to-secondary' : 'hover:bg-accent/20'}`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-2">
            <a href="tel:+919743824684">
              <Button className="cursor-pointer bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-lg transition-all">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent/20 cursor-pointer transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t-2 border-primary/20 bg-card"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(link.path) ? "default" : "ghost"}
                    className={`w-full justify-start cursor-pointer ${isActive(link.path) ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <a href="tel:+919743824684" className="block">
                <Button className="w-full cursor-pointer bg-gradient-to-r from-primary via-secondary to-accent">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}