import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Camera } from 'lucide-react';

export function Hero() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1670615431202-6a7159da3f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Scenic view of Mpraeso hills"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Decorative Kente Pattern Border */}
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#d4a574] via-[#3a6b35] to-[#d4a574] mb-8"></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover the Beauty of Mpraeso
            </h1>
            <p className="text-2xl md:text-3xl text-[#d4a574] mb-6 font-semibold">
              The Heart of Kwahu, Eastern Region of Ghana
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              Experience breathtaking landscapes, vibrant festivals, and rich cultural heritage in the majestic Kwahu hills.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {isHomePage ? (
                <>
                  <a
                    href="#tourism"
                    className="bg-[#3a6b35] hover:bg-[#2d5016] text-white px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg font-semibold"
                  >
                    <Camera size={24} />
                    Visit Mpraeso
                  </a>
                  <a
                    href="#events"
                    className="bg-[#d4a574] hover:bg-[#c89560] text-gray-900 px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg font-semibold"
                  >
                    <MapPin size={24} />
                    Explore Our Culture
                  </a>
                </>
              ) : (
                <>
                  <Link
                    to="/tourism"
                    className="bg-[#3a6b35] hover:bg-[#2d5016] text-white px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg font-semibold"
                  >
                    <Camera size={24} />
                    Visit Mpraeso
                  </Link>
                  <Link
                    to="/news-events"
                    className="bg-[#d4a574] hover:bg-[#c89560] text-gray-900 px-10 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg font-semibold"
                  >
                    <MapPin size={24} />
                    Explore Our Culture
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}