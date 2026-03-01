import { AnimatedSection } from './AnimatedSection';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 border-4 border-[#d4a574] rotate-45"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Mpraeso Community
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto mb-8"></div>
          
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Mpraeso is the administrative capital of the Kwahu South Municipal District in the Eastern Region of Ghana. Situated in the scenic Kwahu hills, our community is blessed with breathtaking landscapes, rich cultural heritage, and a strong sense of unity.
            </p>
            <p>
              Our town serves as a hub for traditional governance, education, commerce, and cultural activities. We are proud custodians of age-old traditions while embracing modern development and progress.
            </p>
            <p>
              Whether you are a resident, a visitor, or a member of our diaspora, Mpraeso welcomes you with open arms and warm hospitality that reflects the true spirit of Ghana.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3a6b35]">50+</div>
              <div className="text-sm text-gray-600 mt-1">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3a6b35]">5</div>
              <div className="text-sm text-gray-600 mt-1">Major Festivals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3a6b35]">100+</div>
              <div className="text-sm text-gray-600 mt-1">Years of History</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3a6b35]">1000s</div>
              <div className="text-sm text-gray-600 mt-1">In Diaspora</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
