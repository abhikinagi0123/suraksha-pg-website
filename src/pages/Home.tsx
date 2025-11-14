import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Shield,
  Wifi,
  Utensils,
  Droplet,
  Tv,
  WashingMachine,
  Car,
  Clock,
  CheckCircle,
  Star,
  Phone,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  const features = [
    { icon: Shield, title: "24/7 Security", description: "CCTV surveillance & biometric access" },
    { icon: Wifi, title: "High-Speed WiFi", description: "Unlimited internet connectivity" },
    { icon: Utensils, title: "Homely Food", description: "Nutritious vegetarian meals" },
    { icon: Droplet, title: "24/7 Water", description: "Hot & cold water facility" },
    { icon: Tv, title: "Entertainment", description: "LED TV in common area" },
    { icon: WashingMachine, title: "Laundry", description: "Automatic washing machine" },
    { icon: Car, title: "Parking", description: "Secure vehicle parking" },
    { icon: Clock, title: "Housekeeping", description: "Daily cleaning service" },
  ];

  const roomTypes = [
    { type: "Single Sharing", price: "₹8,000 - ₹10,000", features: ["Private room", "Attached bathroom", "Personal cupboard"] },
    { type: "Double Sharing", price: "₹6,000 - ₹7,500", features: ["Shared with 1 person", "Attached bathroom", "Individual cupboards"] },
    { type: "Triple Sharing", price: "₹5,000 - ₹6,000", features: ["Shared with 2 people", "Common bathroom", "Storage space"] },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
                  <span className="text-xs sm:text-sm font-semibold text-primary">Premium Ladies PG in Bangalore</span>
                </div>
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 rounded-full">
                  <span className="text-xs sm:text-sm font-semibold text-secondary">Women-Owned & Operated</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
                Your Safe & Comfortable
                <span className="text-primary block mt-2">Home Away From Home</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Experience premium accommodation designed exclusively for working women and students. 
                Fully furnished rooms with all modern amenities in the heart of HSR Layout, Bangalore.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href="tel:+919743824684" className="w-full sm:w-auto">
                    <Button size="lg" className="cursor-pointer w-full">
                      <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Book Now
                    </Button>
                  </a>
                  <a href="https://wa.me/919743824684?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20Suraksha%20PG." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" variant="secondary" className="cursor-pointer w-full">
                      <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
                <Link to="/rooms" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="cursor-pointer w-full">
                    View Rooms
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm sm:text-base">4.3/5</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">(210 reviews)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop"
                  alt="Modern PG Room"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                  <p className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">Starting from</p>
                  <p className="text-2xl sm:text-3xl font-bold">₹5,000/month</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              World-Class Amenities
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Everything you need for a comfortable and convenient stay
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="pt-4 sm:pt-6 px-3 sm:px-6">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-3 sm:mb-4">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              Choose Your Perfect Room
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Flexible accommodation options to suit your needs and budget
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow h-full flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{room.type}</h3>
                    <p className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">{room.price}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="tel:+919743824684" className="w-full">
                      <Button className="w-full cursor-pointer">
                        Book Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
                Why Choose Suraksha PG?
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Prime location in HSR Layout with excellent connectivity",
                  "Strict security measures with CCTV and biometric access",
                  "Hygienic and nutritious home-cooked vegetarian meals",
                  "Fully furnished rooms with modern amenities",
                  "Friendly and supportive management",
                  "Regular housekeeping and maintenance",
                  "Power backup and 24/7 water supply",
                  "Affordable pricing with no hidden charges",
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-muted-foreground">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-first lg:order-last"
            >
              <img
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop"
                alt="Comfortable Living Space"
                className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              Ready to Make Suraksha Your Home?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 px-4">
              Contact us today for a free visit and see why hundreds of women trust Suraksha PG
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 max-w-md mx-auto">
              <a href="tel:+919743824684" className="w-full">
                <Button size="lg" variant="secondary" className="cursor-pointer w-full">
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Call: +91 97438 24684
                </Button>
              </a>
              <a href="https://wa.me/919743824684?text=Hi!%20I'm%20interested%20in%20booking%20a%20room%20at%20Suraksha%20PG." target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" variant="secondary" className="cursor-pointer w-full">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp Us
                </Button>
              </a>
              <Link to="/contact" className="w-full">
                <Button size="lg" variant="outline" className="cursor-pointer w-full bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Visit Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}