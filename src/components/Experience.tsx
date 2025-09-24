import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Briefcase, ExternalLink, Target } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import SectionHeader from './ui/SectionHeader';

interface ExperienceProps {
  language: 'en' | 'bn';
}

// Premium Section Layout
const PremiumSection = ({ children, title, icon, theme = 'orange', className = '' }: {
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
    return gradients[theme as keyof typeof gradients] || gradients.orange;
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

const Experience = ({ language }: ExperienceProps) => {

  const renderProjectItem = (project: any, iconColor: string) => (
    <div className="flex flex-wrap items-center gap-2">
      <Target size={18} className={`flex-shrink-0 ${iconColor}`} />
      <h4 className="font-medium">{project.name[language]}</h4>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
      >
        <ExternalLink size={16} />
        {experienceData.labels.view[language]}
      </a>
    </div>
  );

  return (
    <Element name="experience">
      <PremiumSection
        title={experienceData.title[language]}
        icon={<Briefcase className="text-white" size={24} />}
        theme="orange"
      >

        <div className="space-y-8">
          {experienceData.experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className={`border-l-4 ${experience.borderColor} pl-4 py-4 ${experience.hoverBgColor} rounded-r-lg transition-colors duration-200 group`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-2 ${
                    experience.bgColor
                  } rounded-full group-hover:${experience.bgColor.replace(
                    '100',
                    '200'
                  )} transition-colors flex-shrink-0`}
                >
                  <Briefcase size={20} className={experience.iconColor} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-bold text-lg">
                      {experience.title[language]}
                    </h3>
                    {experience.links && (
                      <div className="flex flex-wrap gap-2">
                        {experience.links.map((link, index) => {
                          const LinkIcon = typeof link.icon === 'string' ? ExternalLink : link.icon;
                          return (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                            >
                              <LinkIcon size={16} />
                              {link.label[language]}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mt-1">{experience.role[language]}</p>

                  {experience.achievements && (
                    <ul className="mt-3 space-y-2 text-gray-700">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <achievement.icon size={18} className={achievement.iconColor} />
                          <span>{achievement.description[language]}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {experience.projects && (
                    <div className="mt-3 space-y-4">
                      {experience.projects.map((project, index) => (
                        <div key={index}>
                          {renderProjectItem(project, experience.iconColor)}
                          <p className="text-gray-700 ml-7 mt-1">
                            {project.description[language]}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PremiumSection>
    </Element>
  );
};

export default Experience;