import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { ExternalLink, Heart } from 'lucide-react';
import { familyData } from '../data/familyData';
import SectionHeader from './ui/SectionHeader';

interface InformationProps {
  language: 'en' | 'bn';
  age: number;
}

// Premium Section Layout
const PremiumSection = ({ children, title, icon, theme = 'red', className = '' }: {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  theme?: 'blue' | 'emerald' | 'purple' | 'orange' | 'red' | 'cyan' | 'pink';
  className?: string;
}) => {
  const getBackgroundGradient = (theme: string) => {
    const gradients = {
      blue: 'from-blue-50/20 via-white to-cyan-50/20',
      emerald: 'from-emerald-50/20 via-white to-teal-50/20',
      purple: 'from-purple-50/20 via-white to-indigo-50/20', 
      orange: 'from-orange-50/20 via-white to-amber-50/20',
      red: 'from-red-50/20 via-white to-pink-50/20',
      cyan: 'from-cyan-50/20 via-white to-blue-50/20',
      pink: 'from-pink-50/20 via-white to-rose-50/20'
    };
    return gradients[theme as keyof typeof gradients] || gradients.red;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`premium-section bg-gradient-to-br ${getBackgroundGradient(theme)} ${className}`}
    >
      <div className="premium-content">
        <SectionHeader 
          icon={icon}
          title={title}
          theme={theme}
        />
        {children}
      </div>
    </motion.section>
  );
};

const Information = ({ language, age }: InformationProps) => {

  return (
    <Element name="family">
      <PremiumSection
        title={familyData.title[language]}
        icon={<Heart className="text-white" size={24} />}
        theme="red"
      >

        <div className="space-y-8">
          {/* Family Information */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="border-l-4 border-red-500 pl-4 py-2 hover:bg-red-50 rounded-r-lg transition-colors duration-200"
          >
            <h3 className="font-bold text-lg mb-4">
              {familyData.familyInfo.title[language]}
            </h3>
            <ul className="space-y-3">
              {familyData.familyInfo.members.map((member, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">
                    {member.relation[language]}:
                  </span>{' '}
                  {member.name[language]}
                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 ml-1"
                      aria-label={`View ${member.relation[language]} document`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            className="border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 rounded-r-lg transition-colors duration-200"
          >
            <h3 className="font-bold text-lg mb-4">
              {familyData.personalInfo.title[language]}
            </h3>
            <ul className="space-y-3">
              {familyData.personalInfo.details.map((detail, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">
                    {detail.label[language]}:
                  </span>{' '}
                  {detail.label[language] === (language === 'en' ? 'Age' : 'বয়স') 
                    ? `${age} ${language === 'en' ? 'years' : 'বছর'}`
                    : detail.value && detail.value[language]
                  }
                  {detail.link && (
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 ml-1"
                      aria-label={`View ${detail.label[language]} document`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </PremiumSection>
    </Element>
  );
};

export default Information;
