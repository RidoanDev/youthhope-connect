import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { ExternalLink, BookOpen } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import SectionHeader from './ui/SectionHeader';

interface CoursesProps {
  language: 'en' | 'bn';
}

// Premium Section Layout  
const PremiumSection = ({ children, title, icon, theme = 'cyan', className = '' }: {
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
    return gradients[theme as keyof typeof gradients] || gradients.cyan;
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

const Courses = ({ language }: CoursesProps) => {

  const renderCourseItem = (course: any) => (
    <motion.div
      key={course.id}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="border-l-4 border-emerald-500 pl-4 py-4 hover:bg-emerald-50 rounded-r-lg transition-colors duration-200 group relative"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors flex-shrink-0">
          <course.icon size={20} className={course.iconColor} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{course.title[language]}</h4>
          <p className="text-gray-600 mt-2">{course.description[language]}</p>
          <p className="text-sm mt-3 text-gray-500">
            <span className="font-medium">{course.platform}</span>
            <span className="mx-2">•</span>
            <span>{course.duration[language]}</span>
          </p>
          <div className="flex gap-3 mt-3">
            {course.certificateUrl && (
              <a 
                href={course.certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-emerald-600 hover:text-emerald-800 transition-colors"
                aria-label={language === 'en' ? 'View certificate' : 'সার্টিফিকেট দেখুন'}
              >
                <ExternalLink size={14} />
                {coursesData.labels.certificate[language]}
              </a>
            )}
            {course.courseUrl ? (
              <a 
                href={course.courseUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label={language === 'en' ? 'View course' : 'কোর্স দেখুন'}
              >
                <ExternalLink size={14} />
                {coursesData.labels.course[language]}
              </a>
            ) : course.courseUrls?.map((url: string, index: number) => (
              <a 
                key={index}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label={language === 'en' ? 'View course' : 'কোর্স দেখুন'}
              >
                <ExternalLink size={14} />
                {coursesData.labels.courseNum[language]} {index + 1}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderOlympiadItem = (olympiad: any) => (
    <motion.div
      key={olympiad.id}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="border-l-4 border-amber-500 pl-4 py-4 hover:bg-amber-50 rounded-r-lg transition-colors duration-200 group relative"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors flex-shrink-0">
          <olympiad.icon size={20} className={olympiad.iconColor} />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{olympiad.title[language]}</h4>
          <p className="text-gray-600 mt-2">{olympiad.description[language]}</p>
          {olympiad.level && (
            <p className="text-sm mt-3 font-medium text-amber-700">{olympiad.level[language]}</p>
          )}
          <div className="flex gap-3 mt-3">
            {olympiad.certificateUrl && (
              <a 
                href={olympiad.certificateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-amber-600 hover:text-amber-800 transition-colors"
                aria-label={language === 'en' ? 'View certificate' : 'সার্টিফিকেট দেখুন'}
              >
                <ExternalLink size={14} />
                {coursesData.labels.certificate[language]}
              </a>
            )}
            {olympiad.websiteUrl && (
              <a 
                href={olympiad.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                aria-label={language === 'en' ? 'View website' : 'ওয়েবসাইট দেখুন'}
              >
                <ExternalLink size={14} />
                {coursesData.labels.website[language]}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Element name="courses">
      <PremiumSection
        title={coursesData.title[language]}
        icon={<BookOpen className="text-white" size={24} />}
        theme="cyan"
      >

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <coursesData.sections.olympiads.icon className="text-amber-500" />
            {coursesData.sections.olympiads.title[language]}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coursesData.sections.olympiads.data.map(renderOlympiadItem)}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <coursesData.sections.courses.icon className="text-emerald-500" />
            {coursesData.sections.courses.title[language]}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coursesData.sections.courses.data.map(renderCourseItem)}
          </div>
        </div>
      </PremiumSection>
    </Element>
  );
};

export default Courses;