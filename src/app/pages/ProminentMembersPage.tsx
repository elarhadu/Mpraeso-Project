import { motion } from 'motion/react';
import { Users, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const prominentMembers = [
  { name: 'Nana Abra-Appiah', description: 'Renowned Banker and Football Administrator' },
  { name: 'Dr. Mrs. Beatrice Wiafe Addae', description: 'Breast Cancer Specialist' },
  { name: 'Mr. Adjare Danquah', description: 'CEO of Metalex Group' },
  { name: 'Emmanuel Agyei', description: 'Prominent member of the Mpraeso community' },
  { name: 'Mrs. Justice Beatrice Agyeman-Dapaah', description: 'Distinguished member of the judiciary' },
  { name: 'Hon. Mike Sakyi Akyeampong', description: 'Former Chairman of the World Fisheries at the United Nations and Former Deputy Agriculture Minister of Ghana' },
  { name: 'Mr. Bediako Amoatohene', description: 'CEO of East Cantonment Pharmacy' },
  { name: 'S.E. Aniniagyei', description: 'Former Ambassador of Ghana to the United Nations' },
  { name: 'Nana Antwi Darkwa', description: 'Ghanaian Business Mogul' },
  { name: 'Richard Kwame Appiah', description: 'Prominent businessman' },
  { name: 'Mr. Asiedu-Sekyere', description: 'CEO of Virtual Security Africa and Virtual Infosec Africa' },
  { name: 'Nana Bamfo Awobeng', description: 'Alias Ebitiyie' },
  { name: 'Lawyer Kwaku Baah', description: 'Legal professional and community leader' },
  { name: 'Mr. Ernest Bediako', description: 'CEO of Ernest Chemist' },
  { name: 'Mr. Bediako Sarpong', description: 'Pioneer Pharmaceuticals Sector Businessman' },
  { name: 'Mr. Ofosu Bediako', description: 'CEO of Bedita Pharmacy' },
  { name: 'Nana Buansi', description: 'Prominent member of the Mpraeso community' },
  { name: 'Mr. Okyere Darko', description: 'Community leader and businessman' },
  { name: 'Mr. Alfred Kwadwo Dankwa', description: 'CEO of Rocksters Roofing Limited' },
  { name: 'Nana Wiafe Kogyan', description: 'Famous Ghanaian Businessman and Timber Merchant' },
  { name: 'Dr. D.A. Koranteng', description: 'Former moderator of the Presbyterian Church' },
  { name: 'Osei Kuffour', description: 'Outstanding Ghanaian Architect' },
  { name: 'J.K. Mensah', description: 'Alias Asikafuohene' },
  { name: 'Madam Suzzy Mensah', description: 'Community leader and prominent member' },
  { name: 'Nana Obenewaa', description: 'CEO of Blackpark and Benkumhene of Mpraeso' },
  { name: 'Prof. Ebenezer Owusu Odoro', description: 'Former Deputy VC of the University of Ghana' },
  { name: 'Kingsley Young Opare', description: 'Prominent member of the Mpraeso community' },
  { name: 'Oppong Sasu', description: 'Former Director, Ghana Forestry Commission' },
  { name: 'Justice Omari Sasu', description: 'An Iconic Ghanaian Judge' },
  { name: 'Lawyer George Sarpong', description: 'Former Director of the Ghana School of Law' },
  { name: 'Obaa Yaa', description: 'Prominent member of the Mpraeso community' },
  { name: 'Hon. Amankwah Yenoah', description: 'National Treasurer of the New Patriotic Party' },
];

export function ProminentMembersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Prominent Members of Mpraeso"
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
              Prominent Members
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Business Leaders, Academics & Community Icons
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#3a6b35]/10 text-[#3a6b35] px-4 py-2 rounded-full mb-4">
              Our Distinguished Citizens
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leaders Who Shape Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mpraeso takes pride in its sons and daughters who have excelled in business, academia, public service, and various fields—both at home and abroad. Listed in alphabetical order.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3a6b35] to-transparent mx-auto mt-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {prominentMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-lg p-6 border border-[#3a6b35]/20 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.02, 0.3) }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#3a6b35] rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
