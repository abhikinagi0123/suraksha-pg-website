import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Bed,
  Wifi,
  Utensils,
  Droplet,
  Tv,
  WashingMachine,
  Car,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  IndianRupee,
} from "lucide-react";

export default function Rooms() {
  const roomTypes = [
    {
      type: "Single Sharing",
      price: "₹8,000 - ₹10,000",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
      features: [
        "Private room with attached bathroom",
        "Personal cupboard and study table",
        "Queen-size bed with premium mattress",
        "Air conditioning",
        "24/7 power backup",
        "Daily housekeeping",
      ],
    },
    {
      type: "Double Sharing",
      price: "₹6,000 - ₹7,500",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop",
      features: [
        "Shared with 1 person",
        "Attached bathroom",
        "Individual cupboards and study tables",
        "Comfortable beds with quality mattresses",
        "Air conditioning",
        "Daily housekeeping",
      ],
    },
    {
      type: "Triple Sharing",
      price: "₹5,000 - ₹6,000",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop",
      features: [
        "Shared with 2 people",
        "Common bathroom (attached to room)",
        "Individual storage space",
        "Comfortable beds",
        "Ceiling fan",
        "Daily housekeeping",
      ],
    },
  ];

  const facilities = [
    { icon: Shield, title: "24/7 Security", description: "CCTV surveillance, biometric access, and security guards" },
    { icon: Wifi, title: "High-Speed WiFi", description: "Unlimited high-speed internet throughout the premises" },
    { icon: Utensils, title: "Nutritious Meals", description: "3 meals a day with vegetarian home-cooked food" },
    { icon: Droplet, title: "24/7 Water Supply", description: "Hot and cold water available round the clock" },
    { icon: Tv, title: "Entertainment", description: "LED TV in common area with DTH connection" },
    { icon: WashingMachine, title: "Laundry Facility", description: "Automatic washing machine available for use" },
    { icon: Car, title: "Parking Space", description: "Secure parking for two-wheelers and four-wheelers" },
    { icon: Clock, title: "Housekeeping", description: "Daily cleaning and maintenance services" },
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
              Rooms & Facilities
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose from our range of comfortable rooms with world-class amenities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Available Room Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All rooms are fully furnished with modern amenities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.type}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {room.price}
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-4">{room.type}</h3>
                    <ul className="space-y-3 mb-6">
                      {room.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="tel:+919743824684">
                      <Button className="w-full cursor-pointer">
                        <Phone className="mr-2 h-4 w-4" />
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

      {/* Facilities Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Premium Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable stay
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <facility.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{facility.title}</h3>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground">
              Transparent pricing with no hidden charges
            </p>
          </motion.div>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Accommodation</h3>
                    <p className="text-sm text-muted-foreground">Fully furnished room with bed, mattress, cupboard, and study table</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Food</h3>
                    <p className="text-sm text-muted-foreground">3 nutritious vegetarian meals per day (breakfast, lunch, and dinner)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Utilities</h3>
                    <p className="text-sm text-muted-foreground">Electricity, water, WiFi, and housekeeping included</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Security Deposit</h3>
                    <p className="text-sm text-muted-foreground">Refundable deposit of ₹5,000 (one-time payment)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Book Your Room?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today for availability and booking
            </p>
            <a href="tel:+919743824684">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 97438 24684
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
