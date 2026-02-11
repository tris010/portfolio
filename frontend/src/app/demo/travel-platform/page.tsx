"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Star, Calendar, ArrowRight, X, Leaf, Mountain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock Data for Destinations (Indian Small Towns)
const destinations = [
    {
        id: 1,
        name: "Jibhi, Himachal",
        image: "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?q=80&w=2070&auto=format&fit=crop",
        rating: 4.8,
        price: "₹12,000",
        description: "A hidden gem in Tirthan Valley, known for its wooden treehouses and serene waterfalls.",
        tags: ["Nature", "Mountains", "Offbeat"]
    },
    {
        id: 2,
        name: "Ziro Valley, Arunachal",
        image: "https://images.unsplash.com/photo-1501854140884-074cf2b21d25?q=80&w=2072&auto=format&fit=crop",
        rating: 4.7,
        price: "₹15,500",
        description: "Home to the Apatani tribe and lush green rice fields, famous for its music festival.",
        tags: ["Culture", "Nature", "Festival"]
    },
    {
        id: 3,
        name: "Gokarna, Karnataka",
        image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=2070&auto=format&fit=crop",
        rating: 4.6,
        price: "₹8,000",
        description: "A peaceful alternative to Goa with pristine beaches and ancient temples.",
        tags: ["Beach", "Spirituality", "Relax"]
    },
    {
        id: 4,
        name: "Mawlynnong, Meghalaya",
        image: "https://images.unsplash.com/photo-1565118531796-763e5082d113?q=80&w=2070&auto=format&fit=crop",
        rating: 4.9,
        price: "₹10,000",
        description: "Known as Asia's cleanest village, featuring living root bridges and stunning viewpoints.",
        tags: ["Eco-Tourism", "Nature", "Village"]
    },
    {
        id: 5,
        name: "Hampi, Karnataka",
        image: "https://images.unsplash.com/photo-1601224748193-d34f112b9263?q=80&w=1974&auto=format&fit=crop",
        rating: 4.9,
        price: "₹7,500",
        description: "Explore the ruins of the Vijayanagara Empire amidst a surreal boulder landscape.",
        tags: ["History", "Architecture", "Backpacking"]
    },
    {
        id: 6,
        name: "Landour, Uttarakhand",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop",
        rating: 4.7,
        price: "₹14,000",
        description: "A colonial-era hill station with pine forests, winterlines, and charming bakeries.",
        tags: ["Hills", "Colonial", "Relax"]
    }
];

export default function TravelDemoPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);

    const filteredDestinations = destinations.filter(dest =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-[#fdfbf7] font-sans selection:bg-emerald-100 text-stone-800">
            {/* Navbar Mockup */}
            <nav className="fixed top-0 w-full z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-stone-200">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                            <Leaf size={18} />
                        </div>
                        <span className="text-xl font-bold text-emerald-800 tracking-tight font-heading">ghumogaon</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
                        <a href="#" className="hover:text-emerald-700 transition-colors">Destinations</a>
                        <a href="#" className="hover:text-emerald-700 transition-colors">Stays</a>
                        <a href="#" className="hover:text-emerald-700 transition-colors">Our Story</a>
                        <button className="px-5 py-2 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-md shadow-emerald-700/20">
                            Book Your Trip
                        </button>
                    </div>
                    {/* Back to Portfolio Link */}
                    <Link href="/preview" className="md:hidden text-xs text-stone-400">Exit Demo</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto text-center max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-emerald-700 text-sm font-medium mb-6 shadow-sm"
                    >
                        <Mountain size={14} /> Roots of India
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-stone-900 mb-8 font-heading leading-tight"
                    >
                        Discover India's <br />
                        <span className="italic text-emerald-800">hidden soul.</span>
                    </motion.h1>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl mx-auto relative group"
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Find a village..."
                            className="w-full pl-12 pr-6 py-4 rounded-full border border-stone-200 bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 transition-all outline-none shadow-xl shadow-stone-200/50 text-lg placeholder:text-stone-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </motion.div>
                </div>
            </header>

            {/* Destinations Grid */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-stone-900 font-heading mb-2">Curated Villages</h2>
                            <p className="text-stone-500">Places where time stands still.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-emerald-700 font-medium hover:gap-3 transition-all">
                            View All <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredDestinations.map((dest, index) => (
                            <motion.div
                                key={dest.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-[1.5rem] p-3 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all border border-stone-100 cursor-pointer"
                                onClick={() => setSelectedDestination(dest)}
                            >
                                <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden mb-4 bg-stone-100">
                                    <Image
                                        src={dest.image}
                                        alt={dest.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-emerald-800 shadow-sm border border-stone-100">
                                        {dest.price}
                                    </div>
                                </div>
                                <div className="px-2 pb-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-stone-800">{dest.name}</h3>
                                        <div className="flex items-center gap-1 text-amber-500 font-medium text-sm">
                                            <Star size={14} fill="currentColor" /> {dest.rating}
                                        </div>
                                    </div>
                                    <p className="text-stone-500 text-sm mb-4 line-clamp-2 leading-relaxed">{dest.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {dest.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium border border-stone-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Modal (Mock) */}
            <AnimatePresence>
                {selectedDestination && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm"
                        onClick={() => setSelectedDestination(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-[2rem] max-w-md w-full p-8 shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedDestination(null)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 transition-colors"
                            >
                                <X size={20} className="text-stone-400" />
                            </button>

                            <div className="mb-6">
                                <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-2 block">Confirm Booking</span>
                                <h2 className="text-3xl font-bold font-heading text-stone-800 mb-2">{selectedDestination.name}</h2>
                                <p className="text-stone-500 leading-relaxed">{selectedDestination.description}</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100">
                                    <Calendar className="text-emerald-600" />
                                    <div>
                                        <p className="text-xs text-stone-400 font-semibold uppercase">Dates</p>
                                        <p className="font-medium text-stone-800">Oct 24 - Oct 30, 2026</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-4">
                                    <span className="text-stone-500">Total Price</span>
                                    <span className="text-2xl font-bold text-stone-800">{selectedDestination.price}</span>
                                </div>
                            </div>

                            <button
                                className="w-full py-4 rounded-xl bg-emerald-700 text-white font-bold text-lg hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-700/20 transition-all transform hover:scale-[1.01]"
                                onClick={() => {
                                    alert("Welcome to ghumogaon! Booking confirmed for " + selectedDestination.name);
                                    setSelectedDestination(null);
                                }}
                            >
                                Confirm & Pay
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Back to Portfolio Button */}
            <div className="fixed bottom-6 right-6 z-40">
                <Link
                    href="/#projects"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-stone-800 rounded-full shadow-xl border border-stone-200 font-medium hover:bg-stone-50 transition-colors"
                >
                    <ArrowRight size={16} className="rotate-180" /> Back to Portfolio
                </Link>
            </div>
        </div>
    );
}
