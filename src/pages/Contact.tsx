import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const contactInfo = useQuery(api.pgData.getContactInfo);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!contactInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Buttons - Mobile Priority */}
      <section className="py-6 sm:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <motion.a
              href="tel:+919743824684"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              <Button className="w-full h-14 sm:h-16 text-base sm:text-lg cursor-pointer bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                Call Now
              </Button>
            </motion.a>
            <motion.a
              href="https://wa.me/919743824684?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20Suraksha%20PG."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              <Button className="w-full h-14 sm:h-16 text-base sm:text-lg cursor-pointer bg-[#25D366] hover:bg-[#20BA5A] hover:shadow-lg transition-all">
                <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                WhatsApp Us
              </Button>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Card className="shadow-lg">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        disabled={isSubmitting}
                        className="h-11 sm:h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                        className="h-11 sm:h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        disabled={isSubmitting}
                        className="h-11 sm:h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full h-11 sm:h-12 cursor-pointer text-base" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <Card className="shadow-lg">
                <CardContent className="pt-6 px-4 sm:px-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base">Address</h3>
                        <p className="text-sm text-muted-foreground break-words">{contactInfo.fullAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                        <a href={`tel:${contactInfo.phone}`} className="text-sm text-muted-foreground hover:text-primary cursor-pointer block break-all">
                          {contactInfo.phone}
                        </a>
                        <a href={`tel:${contactInfo.alternatePhone}`} className="text-sm text-muted-foreground hover:text-primary cursor-pointer block break-all">
                          {contactInfo.alternatePhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                        <a href={`mailto:${contactInfo.email}`} className="text-sm text-muted-foreground hover:text-primary cursor-pointer break-all">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base">Visiting Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday - Sunday</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Card */}
              <Card className="shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d${contactInfo.coordinates.lng}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQ3LjYiTiA3N8KwMzEnMTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Suraksha PG Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              We're Here to Help
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Get answers to all your questions about accommodation, facilities, and booking
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Quick Response",
                description: "We respond to all inquiries within 24 hours",
                icon: "⚡",
              },
              {
                title: "Schedule a Visit",
                description: "Book a free tour of our facilities anytime",
                icon: "🏠",
              },
              {
                title: "Flexible Booking",
                description: "Easy booking process with transparent pricing",
                icon: "📅",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 px-4">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{item.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}