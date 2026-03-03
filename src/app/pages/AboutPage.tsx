import { motion } from 'motion/react';
import { MapPin, Users, Heart, Award, BookOpen, Globe, Crown } from 'lucide-react';
import { SubTowns } from '../components/SubTowns';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-[#3a6b35] to-[#2d5016]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1670615431202-6a7159da3f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NzE0ODI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mpraeso Landscape"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <motion.div
          className="relative h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Mpraeso
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              History, Geography, Culture & Leadership
            </p>
          </div>
        </motion.div>
      </section>

      {/* History, Geography, Culture, Leadership */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: BookOpen, title: 'History', desc: 'Centuries of tradition as a key settlement in the Kwahu traditional area, with deep roots in Akan heritage.' },
              { icon: Globe, title: 'Geography', desc: 'Perched on the Kwahu Plateau in the Eastern Region, with stunning hills, pleasant climate, and scenic views.' },
              { icon: Heart, title: 'Culture', desc: 'Rich traditions, festivals like Odwira, kente weaving, and the famous Easter celebrations on the Kwahu ridge.' },
              { icon: Crown, title: 'Leadership', desc: 'Traditional authority under the Omanhene, working with the Municipal Assembly for community development.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#faf8f5] rounded-xl p-6 border border-[#3a6b35]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#3a6b35] rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 border-4 border-[#d4a574] rotate-45"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  Mpraeso is the administrative capital of the Kwahu South Municipal District in the Eastern Region of Ghana. Situated in the scenic Kwahu hills, our community is blessed with breathtaking landscapes, rich cultural heritage, and a strong sense of unity.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our town serves as a hub for traditional governance, education, commerce, and cultural activities. We are proud custodians of age-old traditions while embracing modern development and progress. The name "Mpraeso" itself reflects our identity as a place of unity and strength.
                </p>

                <p className="text-lg leading-relaxed">
                  The community is characterized by its elevated position in the Kwahu Plateau, offering stunning panoramic views and a pleasant climate year-round. This unique geographical setting has made Mpraeso not only an administrative center but also a growing tourist destination, especially during the famous Easter celebrations.
                </p>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 pt-16">
              <motion.div
                className="bg-[#faf8f5] rounded-xl p-8 border-l-4 border-[#3a6b35]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#3a6b35] rounded-lg">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Location</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Perched on the Kwahu Plateau in the Eastern Region, Mpraeso enjoys a strategic location with easy access to major towns and serves as the gateway to the Kwahu highlands.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#faf8f5] rounded-xl p-8 border-l-4 border-[#d4a574]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#d4a574] rounded-lg">
                    <Users size={28} className="text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">People</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Our diverse community comprises 10 sub-towns, each contributing unique traditions and perspectives while sharing common values of hospitality, hard work, and unity.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#faf8f5] rounded-xl p-8 border-l-4 border-[#d4a574]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#d4a574] rounded-lg">
                    <Heart size={28} className="text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Culture</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Rich in tradition, Mpraeso celebrates festivals like Kwahu Odwira and hosts the famous Easter celebrations, attracting thousands of visitors annually to experience our vibrant culture.
                </p>
              </motion.div>

              <motion.div
                className="bg-[#faf8f5] rounded-xl p-8 border-l-4 border-[#3a6b35]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#3a6b35] rounded-lg">
                    <Award size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Development</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  As the municipal capital, Mpraeso leads in education, healthcare, and infrastructure development, with ongoing projects improving lives across all communities.
                </p>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-r from-[#3a6b35] to-[#2d5016] rounded-2xl p-12 text-white text-center mb-16">
              <h3 className="text-3xl font-bold mb-8">Mpraeso at a Glance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#d4a574] mb-2">10</div>
                  <div className="text-white/90">Sub-Towns</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#d4a574] mb-2">25</div>
                  <div className="text-white/90">Churches</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#d4a574] mb-2">100+</div>
                  <div className="text-white/90">Years History</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#d4a574] mb-2">1000s</div>
                  <div className="text-white/90">In Diaspora</div>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="text-center">
                <div className="inline-block bg-[#3a6b35]/10 text-[#3a6b35] px-4 py-2 rounded-full mb-4 font-semibold">
                  Our Vision
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a model municipal capital that harmoniously blends rich cultural heritage with modern development, providing quality life for all residents while preserving our traditions for future generations.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block bg-[#d4a574]/20 text-[#8b6f47] px-4 py-2 rounded-full mb-4 font-semibold">
                  Our Mission
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To foster unity among our communities, promote sustainable development, preserve our cultural identity, and create opportunities for all citizens through education, commerce, and good governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Towns Section */}
      <SubTowns />

      {/* Call to Action */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Experience Mpraeso Hospitality
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            Whether you are a resident, a visitor, or a member of our diaspora, Mpraeso welcomes you with open arms and warm hospitality that reflects the true spirit of Ghana.
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex gap-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rotate-45"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#3a6b35' : '#d4a574'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
