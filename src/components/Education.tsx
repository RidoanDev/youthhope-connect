import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { ExternalLink, BookOpen } from 'lucide-react';
import { educationData } from '../data/educationData';

interface EducationProps {
  language: 'en' | 'bn';
}

import SectionHeader from './ui/SectionHeader';

// Premium Section Layout
const PremiumSection = ({ children, title, icon, theme = 'emerald', className = '' }: {
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
    return gradients[theme as keyof typeof gradients] || gradients.emerald;
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

const Education = ({ language }: EducationProps) => {

  return (
    <Element name="education">
      <PremiumSection
        title={educationData.title[language]}
        icon={<BookOpen className="text-white" size={24} />}
        theme="emerald"
      >

        <div className="space-y-6">
          {educationData.educationHistory.map((education) => (
            <motion.div
              key={education.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className="border-l-4 border-emerald-500 pl-4 py-4 hover:bg-emerald-50 rounded-r-lg transition-all duration-300 group relative"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors flex-shrink-0 shadow-sm">
                  <education.icon size={20} className={education.iconColor} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-bold text-lg text-gray-800">
                      {education.title[language]}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {education.duration[language]}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 mt-1 flex items-center gap-1">
                    {education.institution[language]}
                    <a
                      href={education.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                      aria-label={language === 'en' ? 'View institution' : 'প্রতিষ্ঠান দেখুন'}
                    >
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </p>
                  
                  <p className="font-medium mt-2 text-emerald-700">
                    {education.gpa[language]}
                  </p>
                  
                  <ul className="mt-2 space-y-1 text-gray-700">
                    {education.details[language].map((detail, index) => (
                      <li key={index} className="text-sm">• {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PremiumSection>
    </Element>
  );
};

export default Education;