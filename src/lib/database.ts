import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types for Hajj & Umrah Packages
export interface HajjPackage {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  departureDate: string;
  returnDate: string;
  availableSlots: number;
  features: string[];
  accommodationDetails: string;
  transportationDetails: string;
  imageUrl: string;
}

export interface UmrahPackage {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  season: string;
  availableSlots: number;
  features: string[];
  accommodationDetails: string;
  transportationDetails: string;
  imageUrl: string;
}

// Booking types
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type PaymentStatus = 'unpaid' | 'partial' | 'paid';

export interface Booking {
  id: string;
  userId: string;
  packageType: 'hajj' | 'umrah';
  packageId: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentAmount: number;
  bookingDate: string;
  notes?: string;
  createdAt: string;
}

// Contact message types
export type MessageStatus = 'new' | 'read' | 'responded';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: MessageStatus;
  createdAt: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  userId?: string;
  name: string;
  avatarUrl?: string;
  rating: number; // 1-5
  comment: string;
  packageType: 'hajj' | 'umrah';
  isApproved: boolean;
  createdAt: string;
}

// Guide types
export interface Guide {
  id: string;
  title: string;
  content: string;
  category: 'hajj' | 'umrah' | 'general';
  imageUrl?: string;
  createdAt: string;
}

// Database state types
interface DatabaseState {
  hajjPackages: HajjPackage[];
  umrahPackages: UmrahPackage[];
  bookings: Booking[];
  contactMessages: ContactMessage[];
  testimonials: Testimonial[];
  guides: Guide[];
  
  // Methods for Hajj packages
  getHajjPackages: () => HajjPackage[];
  getHajjPackage: (id: string) => HajjPackage | undefined;
  
  // Methods for Umrah packages
  getUmrahPackages: () => UmrahPackage[];
  getUmrahPackage: (id: string) => UmrahPackage | undefined;
  
  // Methods for bookings
  getUserBookings: (userId: string) => Booking[];
  createBooking: (booking: Omit<Booking, 'id' | 'createdAt'>) => Booking;
  updateBooking: (id: string, data: Partial<Booking>) => Booking | null;
  
  // Methods for contact messages
  createContactMessage: (message: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>) => ContactMessage;
  
  // Methods for testimonials
  getApprovedTestimonials: () => Testimonial[];
  createTestimonial: (testimonial: Omit<Testimonial, 'id' | 'isApproved' | 'createdAt'>) => Testimonial;
  
  // Methods for guides
  getGuides: (category?: 'hajj' | 'umrah' | 'general') => Guide[];
  getGuide: (id: string) => Guide | undefined;
}

// Initial data
const initialHajjPackages: HajjPackage[] = [
  {
    id: 'hajj-premium',
    name: 'Premium Hajj Package',
    description: 'Luxurious Hajj package with 5-star accommodations and personalized service.',
    duration: 21,
    price: 7500,
    departureDate: '2025-06-15',
    returnDate: '2025-07-05',
    availableSlots: 50,
    features: [
      '5-star hotels in Makkah and Madinah',
      'Private transportation',
      'Personal guide',
      'VIP tents in Mina',
      'All meals included',
      'Ziyarat tours',
      'Visa processing'
    ],
    accommodationDetails: 'Stay in 5-star hotels with proximity to Haram. Rooms include premium amenities and services.',
    transportationDetails: 'Private air-conditioned vehicles for all transportation. Direct flights with premium airlines.',
    imageUrl: '/assets/hajj-premium.jpg'
  },
  {
    id: 'hajj-standard',
    name: 'Standard Hajj Package',
    description: 'Comprehensive Hajj package with comfortable accommodations and guided service.',
    duration: 18,
    price: 5000,
    departureDate: '2025-06-18',
    returnDate: '2025-07-05',
    availableSlots: 100,
    features: [
      '4-star hotels in Makkah and Madinah',
      'Shared transportation',
      'Group guide',
      'Premium tents in Mina',
      'All meals included',
      'Ziyarat tours',
      'Visa processing'
    ],
    accommodationDetails: 'Stay in 4-star hotels within reasonable distance to Haram. Comfortable rooms with necessary amenities.',
    transportationDetails: 'Shared air-conditioned buses for transportation. Economy class flights with reputable airlines.',
    imageUrl: '/assets/hajj-standard.jpg'
  },
  {
    id: 'hajj-economy',
    name: 'Economy Hajj Package',
    description: 'Affordable Hajj package with decent accommodations and essential services.',
    duration: 15,
    price: 3500,
    departureDate: '2025-06-20',
    returnDate: '2025-07-05',
    availableSlots: 200,
    features: [
      '3-star hotels in Makkah and Madinah',
      'Shared transportation',
      'Group guide',
      'Standard tents in Mina',
      'Breakfast and dinner included',
      'Basic Ziyarat tours',
      'Visa processing'
    ],
    accommodationDetails: 'Stay in 3-star hotels in Makkah and Madinah. Clean and functional accommodations.',
    transportationDetails: 'Shared air-conditioned buses for transportation. Economy class flights with standard airlines.',
    imageUrl: '/assets/hajj-economy.jpg'
  }
];

const initialUmrahPackages: UmrahPackage[] = [
  {
    id: 'umrah-premium',
    name: 'Premium Ramadan Umrah',
    description: 'Experience the blessed month of Ramadan in the holy cities with premium services.',
    duration: 14,
    price: 3500,
    season: 'Ramadan',
    availableSlots: 30,
    features: [
      '5-star hotels in Makkah and Madinah',
      'Private transportation',
      'Personal guide',
      'All meals included for Suhoor and Iftar',
      'Extended stay in both cities',
      'Ziyarat tours'
    ],
    accommodationDetails: 'Premium rooms in 5-star hotels located within walking distance to Haram in both cities.',
    transportationDetails: 'Private transportation between cities and airports. Business class flights available upon request.',
    imageUrl: '/assets/umrah-premium.jpg'
  },
  {
    id: 'umrah-standard',
    name: 'Standard Umrah Package',
    description: 'Balanced Umrah package with quality accommodation and services.',
    duration: 10,
    price: 2200,
    season: 'Year-round',
    availableSlots: 50,
    features: [
      '4-star hotels in Makkah and Madinah',
      'Shared transportation',
      'Group guide',
      'Breakfast included',
      'Ziyarat tours'
    ],
    accommodationDetails: 'Comfortable rooms in 4-star hotels with good proximity to Haram in both cities.',
    transportationDetails: 'Shared transportation in modern vehicles. Economy class flights with reputable airlines.',
    imageUrl: '/assets/umrah-standard.jpg'
  },
  {
    id: 'umrah-economy',
    name: 'Economy Umrah Package',
    description: 'Affordable Umrah package focusing on essential services.',
    duration: 7,
    price: 1500,
    season: 'Year-round',
    availableSlots: 100,
    features: [
      '3-star hotels in Makkah and Madinah',
      'Shared transportation',
      'Group guide',
      'Basic Ziyarat'
    ],
    accommodationDetails: 'Clean and functional rooms in 3-star hotels within reasonable distance to Haram.',
    transportationDetails: 'Shared transportation in standard vehicles. Economy class flights.',
    imageUrl: '/assets/umrah-economy.jpg'
  },
  {
    id: 'umrah-short',
    name: 'Short Stay Umrah',
    description: 'Quick Umrah package for those with limited time.',
    duration: 5,
    price: 1200,
    season: 'Off-peak',
    availableSlots: 150,
    features: [
      '3-star hotels in Makkah and Madinah',
      'Shared transportation',
      'Group guidance',
      'Essential services only'
    ],
    accommodationDetails: 'Standard rooms in 3-star hotels in good locations.',
    transportationDetails: 'Shared transportation. Economy class flights with standard airlines.',
    imageUrl: '/assets/umrah-short.jpg'
  }
];

const initialGuides: Guide[] = [
  {
    id: 'guide-hajj-rituals',
    title: 'Complete Guide to Hajj Rituals',
    content: 'Detailed explanation of all Hajj rituals, from Ihram to the Farewell Tawaf, with step-by-step instructions and spiritual significance.',
    category: 'hajj',
    imageUrl: '/assets/guide-hajj.jpg',
    createdAt: new Date().toISOString()
  },
  {
    id: 'guide-umrah-steps',
    title: 'Understanding Umrah Steps',
    content: 'Comprehensive guide to performing Umrah correctly, including preparation, Ihram, Tawaf, Sa\'i, and Halq/Taqsir.',
    category: 'umrah',
    imageUrl: '/assets/guide-umrah.jpg',
    createdAt: new Date().toISOString()
  },
  {
    id: 'guide-preparation',
    title: 'Preparing for Your Pilgrimage',
    content: 'Essential preparation tips for both Hajj and Umrah, including physical preparation, packing lists, and spiritual readiness.',
    category: 'general',
    imageUrl: '/assets/guide-preparation.jpg',
    createdAt: new Date().toISOString()
  },
  {
    id: 'guide-dua',
    title: 'Dua Collection for Pilgrims',
    content: 'Collection of important duas and supplications for various stages of Hajj and Umrah, with translations and transliterations.',
    category: 'general',
    imageUrl: '/assets/guide-dua.jpg',
    createdAt: new Date().toISOString()
  },
  {
    id: 'guide-madinah',
    title: 'Ziyarat Guide for Madinah',
    content: 'Guide to visiting the Prophet\'s Mosque and other significant sites in Madinah, with historical context and visitation etiquette.',
    category: 'general',
    imageUrl: '/assets/guide-madinah.jpg',
    createdAt: new Date().toISOString()
  }
];

const initialTestimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Abdullah Rahman',
    rating: 5,
    comment: 'The Premium Hajj package exceeded all my expectations. The accommodations were excellent, and the guides were knowledgeable and attentive. Truly a life-changing experience.',
    packageType: 'hajj',
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'testimonial-2',
    name: 'Aisha Mohammad',
    rating: 5,
    comment: 'I was initially hesitant about the Economy Hajj package, but I was pleasantly surprised. Everything was well-organized, and the staff was very helpful.',
    packageType: 'hajj',
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'testimonial-3',
    name: 'Omar Farooq',
    rating: 4,
    comment: 'The Standard Umrah package provided great value for money. The hotels were clean and conveniently located. Would recommend to friends and family.',
    packageType: 'umrah',
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'testimonial-4',
    name: 'Khadija Ahmed',
    rating: 5,
    comment: 'My Ramadan Umrah experience was spiritually fulfilling and logistically seamless. The staff took care of everything, allowing me to focus on worship.',
    packageType: 'umrah',
    isApproved: true,
    createdAt: new Date().toISOString()
  }
];

// Create the store with localStorage persistence
export const useDatabase = create<DatabaseState>()(
  persist(
    (set, get) => ({
      hajjPackages: initialHajjPackages,
      umrahPackages: initialUmrahPackages,
      bookings: [],
      contactMessages: [],
      testimonials: initialTestimonials,
      guides: initialGuides,
      
      // Hajj package methods
      getHajjPackages: () => get().hajjPackages,
      getHajjPackage: (id) => get().hajjPackages.find(pkg => pkg.id === id),
      
      // Umrah package methods
      getUmrahPackages: () => get().umrahPackages,
      getUmrahPackage: (id) => get().umrahPackages.find(pkg => pkg.id === id),
      
      // Booking methods
      getUserBookings: (userId) => get().bookings.filter(booking => booking.userId === userId),
      
      createBooking: (bookingData) => {
        const newBooking: Booking = {
          ...bookingData,
          id: `booking_${Math.random().toString(36).substring(2)}`,
          createdAt: new Date().toISOString()
        };
        
        set(state => ({
          bookings: [...state.bookings, newBooking]
        }));
        
        return newBooking;
      },
      
      updateBooking: (id, data) => {
        let updatedBooking: Booking | null = null;
        
        set(state => {
          const index = state.bookings.findIndex(b => b.id === id);
          if (index === -1) return state;
          
          const updatedBookings = [...state.bookings];
          updatedBookings[index] = {
            ...updatedBookings[index],
            ...data
          };
          
          updatedBooking = updatedBookings[index];
          
          return { bookings: updatedBookings };
        });
        
        return updatedBooking;
      },
      
      // Contact message methods
      createContactMessage: (messageData) => {
        const newMessage: ContactMessage = {
          ...messageData,
          id: `msg_${Math.random().toString(36).substring(2)}`,
          status: 'new',
          createdAt: new Date().toISOString()
        };
        
        set(state => ({
          contactMessages: [...state.contactMessages, newMessage]
        }));
        
        return newMessage;
      },
      
      // Testimonial methods
      getApprovedTestimonials: () => get().testimonials.filter(t => t.isApproved),
      
      createTestimonial: (testimonialData) => {
        const newTestimonial: Testimonial = {
          ...testimonialData,
          id: `testimonial_${Math.random().toString(36).substring(2)}`,
          isApproved: false,
          createdAt: new Date().toISOString()
        };
        
        set(state => ({
          testimonials: [...state.testimonials, newTestimonial]
        }));
        
        return newTestimonial;
      },
      
      // Guide methods
      getGuides: (category) => {
        const guides = get().guides;
        return category ? guides.filter(g => g.category === category) : guides;
      },
      
      getGuide: (id) => get().guides.find(guide => guide.id === id),
    }),
    {
      name: 'mabrurx-database',
    }
  )
);