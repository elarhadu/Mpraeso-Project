import { Gallery } from '../components/Gallery';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-[#3a6b35] to-[#2d5016]">
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Capturing the beauty, culture, and spirit of Mpraeso
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Component */}
      <Gallery />
    </div>
  );
}
