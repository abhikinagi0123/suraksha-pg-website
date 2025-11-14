import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Bus, Train, Plane } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

export default function Location() {
  const contactInfo = useQuery(api.pgData.getContactInfo);

  if (!contactInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const nearbyPlaces = [
    { name: "Koramangala", distance: "3 km", type: "IT Hub" },
    { name: "BTM Layout", distance: "4 km", type: "Commercial Area" },
    { name: "Electronic City", distance: "12 km", type: "IT Park" },
    { name: "Silk Board", distance: "2 km", type: "Junction" },
    { name: "Forum Mall", distance: "3.5 km", type: "Shopping" },
    { name: "Bangalore Central", distance: "4 km", type: "Shopping" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Location
            </h1>
            <p className="text-lg text-muted-foreground">
              Conveniently located in the heart of HSR Layout, Bangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
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
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-sm text-muted-foreground">{contactInfo.fullAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href={`tel:${contactInfo.phone}`} className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                          {contactInfo.phone}
                        </a>
                        <br />
                        <a href={`tel:${contactInfo.alternatePhone}`} className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                          {contactInfo.alternatePhone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href={`mailto:${contactInfo.email}`} className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Operating Hours</p>
                        <p className="text-sm text-muted-foreground">Open Daily: 6:00 AM - 9:45 PM</p>
                        <p className="text-xs text-muted-foreground mt-1">Visiting hours: 9:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Nearby Places</h2>
                  <div className="space-y-3">
                    {nearbyPlaces.map((place, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div>
                          <p className="font-semibold">{place.name}</p>
                          <p className="text-sm text-muted-foreground">{place.type}</p>
                        </div>
                        <span className="text-sm text-primary font-medium">{place.distance}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Easy to Reach
            </h2>
            <p className="text-lg text-muted-foreground">
              Well-connected by all modes of transport
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Bus className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">By Bus</h3>
                  <p className="text-sm text-muted-foreground">
                    Multiple BMTC bus routes available. Nearest bus stop: 200m
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Train className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">By Metro</h3>
                  <p className="text-sm text-muted-foreground">
                    Nearest metro station: Jayadeva Hospital (3 km)
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Plane className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">From Airport</h3>
                  <p className="text-sm text-muted-foreground">
                    Kempegowda International Airport: 45 km (1 hour drive)
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
