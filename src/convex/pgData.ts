import { query } from "./_generated/server";
import { v } from "convex/values";

export const getTestimonials = query({
  args: {},
  handler: async (ctx) => {
    return [
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
      }
    ];
  },
});

export const getContactInfo = query({
  args: {},
  handler: async (ctx) => {
    return {
      phone: "+91 9743824684",
      alternatePhone: "+91 9482835398",
      email: "surakshahomespg@gmail.com",
      address: "HSR Layout, Bangalore - 560102",
      fullAddress: "118, Boopathy Mansion, 13th Main, Sector-5, Near Devi Eye Hospital, HSR Layout, Bangalore - 560102",
      coordinates: {
        lat: 12.9298756,
        lng: 77.5206945
      }
    };
  },
});
