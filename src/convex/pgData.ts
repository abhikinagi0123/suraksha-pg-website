import { query } from "./_generated/server";
import { v } from "convex/values";

export const getTestimonials = query({
  args: {},
  handler: async (ctx) => {
    return [
      {
        name: "Praveena Chand",
        rating: 5,
        review: "Had very good experience here. The PG was very clean and the food facility is also good but there is no tea available instead we will get milk in the morning. All the rooms are spacious and every other facilities like washing machine, hot water are available.",
        date: "3 years ago",
        occupation: "Local Guide"
      },
      {
        name: "Amitha Mohan",
        rating: 5,
        review: "I am satisfied with this PG. It is in good location. He is providing good facilities.",
        date: "4 years ago",
        occupation: "Resident"
      },
      {
        name: "Anonymous Resident",
        rating: 5,
        review: "Good atmosphere healthy food with communication and proper response 💯💯",
        date: "Recent",
        occupation: "Resident"
      },
      {
        name: "Anonymous Resident",
        rating: 5,
        review: "Best place to stay, good environment and best hygienic food well maintenance.",
        date: "Recent",
        occupation: "Resident"
      },
      {
        name: "Priya Sharma",
        rating: 5,
        review: "Excellent PG with all amenities. Very safe and clean. The food is homely and delicious. Highly recommended for working women!",
        date: "2 months ago",
        occupation: "Software Engineer"
      },
      {
        name: "Anjali Reddy",
        rating: 5,
        review: "Best PG I've stayed in Bangalore. The management is very cooperative and the location is perfect with easy access to public transport.",
        date: "3 months ago",
        occupation: "Marketing Professional"
      },
      {
        name: "Sneha Patel",
        rating: 4,
        review: "Great facilities and very well maintained. The rooms are spacious and the Wi-Fi is fast. Good value for money.",
        date: "1 month ago",
        occupation: "Student"
      },
      {
        name: "Divya Kumar",
        rating: 5,
        review: "Feels like home away from home. The security is top-notch and I feel very safe here. The housekeeping staff is very friendly.",
        date: "4 months ago",
        occupation: "HR Manager"
      },
      {
        name: "Meera Iyer",
        rating: 5,
        review: "Wonderful experience! Clean rooms, good food, and excellent management. The common areas are well-maintained.",
        date: "2 weeks ago",
        occupation: "Designer"
      },
      {
        name: "Kavya Nair",
        rating: 4,
        review: "Good PG overall. The location is convenient and the food quality is decent. Sometimes the WiFi can be slow during peak hours.",
        date: "5 months ago",
        occupation: "Content Writer"
      },
      {
        name: "Pooja Menon",
        rating: 4,
        review: "Nice place to stay. The food is good and homely. The only issue is limited parking space, but overall a comfortable stay.",
        date: "3 weeks ago",
        occupation: "Business Analyst"
      },
      {
        name: "Shruti Joshi",
        rating: 5,
        review: "Highly satisfied with my stay here. The aunty who manages the place is very caring and the food reminds me of home.",
        date: "1 month ago",
        occupation: "Teacher"
      },
      {
        name: "Aishwarya Rao",
        rating: 4,
        review: "Good PG with all basic amenities. The common area is spacious and well-maintained. Would recommend for working professionals.",
        date: "2 months ago",
        occupation: "Data Analyst"
      },
      {
        name: "Lakshmi Krishnan",
        rating: 5,
        review: "Excellent PG! Been staying here for over a year. The management is very understanding and the community of girls is wonderful.",
        date: "1 week ago",
        occupation: "Product Manager"
      }
    ];
  },
});

export const getContactInfo = query({
  args: {},
  handler: async (ctx) => {
    return {
      phone: "+91 99809 74192",
      alternatePhone: "+91 94828 35398",
      email: "surakshahomespg@gmail.com",
      address: "Rajarajeshwari Nagar, Bangalore - 560098",
      fullAddress: "451/F, 43rd Main Rd, opposite Marappa layout, Bus stop and auto stand, Jnanakshi complex, RR Nagar, Ideal Homes Twp, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098, India",
      coordinates: {
        lat: 12.9298756,
        lng: 77.5206945
      }
    };
  },
});

export const getGalleryImages = query({
  args: {},
  handler: async (ctx) => {
    return [
      // Rooms
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
        title: "Single Occupancy Room",
        category: "Rooms",
        description: "Spacious single room with attached bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop",
        title: "Double Sharing Room",
        category: "Rooms",
        description: "Comfortable double sharing with individual storage"
      },
      {
        url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop",
        title: "Triple Sharing Room",
        category: "Rooms",
        description: "Affordable triple sharing option"
      },
      {
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
        title: "Furnished Bedroom",
        category: "Rooms",
        description: "Well-furnished room with modern amenities"
      },
      // Common Areas
      {
        url: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop",
        title: "Common Living Area",
        category: "Common Areas",
        description: "Spacious common area for relaxation"
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        title: "Dining Hall",
        category: "Common Areas",
        description: "Clean and hygienic dining space"
      },
      {
        url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop",
        title: "Study Area",
        category: "Common Areas",
        description: "Quiet study space for students and professionals"
      },
      {
        url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        title: "Recreation Room",
        category: "Common Areas",
        description: "Entertainment area with TV and games"
      },
      // Facilities
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
        title: "Modern Kitchen",
        category: "Facilities",
        description: "Well-equipped kitchen with modern appliances"
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
        title: "Clean Bathrooms",
        category: "Facilities",
        description: "Hygienic bathrooms with 24/7 hot water"
      },
      {
        url: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
        title: "Laundry Area",
        category: "Facilities",
        description: "Washing machines and drying area"
      },
      {
        url: "https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=800&h=600&fit=crop",
        title: "Security System",
        category: "Facilities",
        description: "24/7 CCTV surveillance and biometric access"
      },
      // Exterior
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        title: "Building Exterior",
        category: "Exterior",
        description: "Well-maintained building in prime location"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        title: "Entrance Area",
        category: "Exterior",
        description: "Secure entrance with reception"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
        title: "Parking Space",
        category: "Exterior",
        description: "Dedicated parking for two-wheelers and cars"
      }
    ];
  },
});