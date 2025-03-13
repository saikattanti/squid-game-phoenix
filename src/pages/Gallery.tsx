
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

// Placeholder gallery items
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Gallery Image ${i + 1}`,
  category: ['Event Photos', 'Competitions', 'Behind the Scenes'][i % 3]
}));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Event Photos', 'Competitions', 'Behind the Scenes'];
  
  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Gallery</h1>
            <p className="text-lg text-squid-white/70 max-w-3xl mx-auto">
              Explore moments from our past events and get a glimpse of what awaits you at Phoenix 25.
            </p>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-squid-pink text-white'
                    : 'bg-squid-lightgray/10 text-squid-white/70 hover:bg-squid-lightgray/20'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="squid-card aspect-square overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="w-full h-full bg-squid-lightgray/10 flex items-center justify-center relative">
                  <span className="text-squid-white/40">Gallery Image</span>
                  
                  {/* Red light overlay on hover */}
                  <div className="absolute inset-0 bg-squid-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Image info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-squid-black to-transparent">
                    <h3 className="text-sm font-medium text-squid-white">{item.title}</h3>
                    <p className="text-xs text-squid-white/70">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Full-screen image viewer */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-squid-black/95 flex items-center justify-center p-4">
            <button
              className="absolute top-6 right-6 text-squid-white/70 hover:text-squid-white transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] w-full relative">
              {/* Neon frame effect */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-squid-pink/50 to-squid-red/50 blur-md"></div>
              
              {/* Image container */}
              <div className="relative bg-squid-lightgray/10 aspect-video rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-squid-white/40">Gallery Image {selectedImage}</span>
              </div>
              
              {/* Image caption */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-squid-white">Gallery Image {selectedImage}</h3>
                <p className="text-squid-white/70">
                  {galleryItems.find(item => item.id === selectedImage)?.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
