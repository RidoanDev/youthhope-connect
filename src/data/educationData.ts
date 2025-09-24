import { GraduationCap, School } from 'lucide-react';

// Education data for the portfolio website
export const educationData = {
  title: {
    en: 'Education',
    bn: 'শিক্ষা',
  },
  educationHistory: [
    {
      id: 'hsc',
      title: {
        en: 'Higher Secondary Certificate (HSC)',
        bn: 'উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)',
      },
      institution: {
        en: 'KARATOA MULTIMEDIA SCHOOL AND COLLEGE',
        bn: 'করতোয়া মাল্টিমিডিয়া স্কুল অ্যান্ড কলেজ',
      },
      duration: {
        en: '2023-2024',
        bn: '২০২৩-২০২৪',
      },
      gpa: {
        en: 'GPA: 5.00/5.00 (Predicted)',
        bn: 'জিপিএ: ৫.০০/৫.০০ (আনুমানিক)',
      },
      details: {
        en: ['Group: Science', 'Major: Higher Math'],
        bn: ['গ্রুপ: বিজ্ঞান', 'মেজর: উচ্চতর গণিত'],
      },
      link: 'https://g.co/kgs/WZW688y',
      icon: GraduationCap,
      iconColor: 'text-blue-500',
    },
    {
      id: 'ssc',
      title: {
        en: 'Secondary School Certificate (SSC)',
        bn: 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)',
      },
      institution: {
        en: 'DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL',
        bn: 'ধুনট সরকারি এন. ইউ. পাইলট মডেল উচ্চ বিদ্যালয়',
      },
      duration: {
        en: '2021-2022',
        bn: '২০২১-২০২২',
      },
      gpa: {
        en: 'GPA: 5.00/5.00',
        bn: 'জিপিএ: ৫.০০/৫.০০',
      },
      details: {
        en: ['Group: Science', 'Major: Higher Math'],
        bn: ['গ্রুপ: বিজ্ঞান', 'মেজর: উচ্চতর গণিত'],
      },
      link: 'https://g.co/kgs/W57Ts2o',
      icon: School,
      iconColor: 'text-green-500',
    },
  ],
  labels: {
    viewInstitution: {
      en: 'View institution',
      bn: 'প্রতিষ্ঠান দেখুন',
    },
  },
};