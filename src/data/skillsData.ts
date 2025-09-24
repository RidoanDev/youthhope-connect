import {
  Languages,
  Target,
  MessageSquare,
  PlusCircle,
  Star,
  ChevronRight,
} from 'lucide-react';

// Skills and competencies data
export const skillsData = {
  title: {
    en: 'Skills & Competencies',
    bn: 'দক্ষতা ও সক্ষমতা',
  },
  languages: {
    title: {
      en: 'Languages',
      bn: 'ভাষা',
    },
    icon: Languages,
    iconColor: 'text-blue-600',
    skills: [
      {
        name: {
          en: 'Bengali (Fluent)',
          bn: 'বাংলা (সাবলীল)',
        },
        level: 5,
      },
      {
        name: {
          en: 'English (Professional)',
          bn: 'ইংরেজি (পেশাদার)',
        },
        level: 4,
      },
    ],
  },
  professional: {
    title: {
      en: 'Core Professional Skills',
      bn: 'মূল পেশাদার দক্ষতা',
    },
    icon: Target,
    skills: [
      { en: 'MS Office Suite', bn: 'এমএস অফিস' },
      { en: 'Email Communication', bn: 'ইমেইল যোগাযোগ' },
      { en: 'Team Collaboration', bn: 'দলগত সমন্বয়' },
      { en: 'Time Management', bn: 'সময় ব্যবস্থাপনা' },
      { en: 'Problem Solving', bn: 'সমস্যা সমাধান' },
      { en: 'Professional Ethics', bn: 'পেশাদার নীতি' },
    ],
    color: 'bg-green-100',
    hoverColor: 'hover:bg-green-200',
    iconColor: 'text-green-600',
  },
  communication: {
    title: {
      en: 'Communication Skills',
      bn: 'যোগাযোগ দক্ষতা',
    },
    icon: MessageSquare,
    skills: [
      { en: 'Report Writing', bn: 'রিপোর্ট লেখা' },
      { en: 'Active Listening', bn: 'সক্রিয় শোনা' },
      { en: 'Presentation', bn: 'প্রেজেন্টেশন' },
      { en: 'Professional Email', bn: 'পেশাদার ইমেইল' },
    ],
    color: 'bg-blue-100',
    hoverColor: 'hover:bg-blue-200',
    iconColor: 'text-blue-600',
  },
  additional: {
    title: {
      en: 'Additional Skills',
      bn: 'অতিরিক্ত দক্ষতা',
    },
    icon: PlusCircle,
    skills: [
      { en: 'Canva/Photoshop', bn: 'ক্যানভা/ফটোশপ' },
      { en: 'Social Media', bn: 'সোশ্যাল মিডিয়া' },
      { en: 'Web and App Development', bn: 'ওয়েব এবং এ্যাপ ডেভেলপমেন্ট' },
      { en: 'The concept of AI', bn: 'AI এর ধারণা' },
    ],
    color: 'bg-purple-100',
    hoverColor: 'hover:bg-purple-200',
    iconColor: 'text-purple-600',
  },
  icons: {
    Star,
    ChevronRight,
  },
};