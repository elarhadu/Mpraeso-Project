import { motion } from 'motion/react';
import { Crown, Users, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TraditionalAuthorityPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660675134062-7d3bbb340608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYSUyMHRyYWRpdGlvbmFsJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3MTQ4Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Traditional Authority"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        </div>
        <motion.div
          className="relative h-full flex items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Traditional Authority
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Omanhene and the Chiefs of Mpraeso
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#3a6b35]/10 text-[#3a6b35] px-4 py-2 rounded-full mb-4">
              Chieftaincy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Traditional Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The traditional authority of Mpraeso upholds centuries of heritage, serving as custodians of our culture, customs, and the welfare of our people. Our Omanhene and chiefs work in harmony with modern governance to foster development and unity.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Crown, title: 'Omanhene', desc: 'The paramount chief leads with wisdom and ensures the traditions of our ancestors are preserved.' },
              { icon: Users, title: 'Sub-Chiefs', desc: 'Chiefs of our sub-towns support the Omanhene and represent their respective communities.' },
              { icon: Award, title: 'Queen Mothers', desc: 'Our queen mothers play a vital role in cultural preservation and community welfare.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#faf8f5] rounded-xl p-8 text-center border border-[#3a6b35]/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3a6b35] rounded-full mb-6">
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
