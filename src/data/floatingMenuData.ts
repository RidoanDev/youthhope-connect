import {
  User,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Mail,
  Search,
  PenTool,
  Chrome,
  Linkedin,
  Github,
  Facebook,
  Youtube,
  Twitter,
  MessageCircle,
} from 'lucide-react';

// Floating menu data and AI chat functionality
export const floatingMenuData = {
  // AI Chat responses and professional data
  professionalData: {
    personal: {
      name: { en: 'Md Ridoan Mahmud Zisan', bn: 'মো: রিদওয়ান মাহমুদ জিসান' },
      role: {
        en: 'Passionate Tech Learner | Social Impact Innovator | Web App & IT Solutions Developer',
        bn: 'প্রযুক্তিপ্রেমী শিক্ষার্থী | সামাজিক প্রভাব সৃষ্টিকারী উদ্ভাবক | ওয়েব অ্যাপ ও আইটি সমাধান ডেভেলপার',
      },
      age: new Date().getFullYear() - 2007,
      location: { en: 'Bogura, Bangladesh', bn: 'বগুড়া, বাংলাদেশ' },
      email: 'ridoan.zisan@gmail.com',
      phone: '+8801712525910',
      bloodGroup: 'B+',
      religion: { en: 'Islam', bn: 'ইসলাম' },
    },
    education: [
      {
        degree: {
          en: 'Higher Secondary Certificate (HSC)',
          bn: 'উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)',
        },
        institution: {
          en: 'Karatoa Multimedia School and College',
          bn: 'করতোয়া মাল্টিমিডিয়া স্কুল অ্যান্ড কলেজ',
        },
        year: '2023-2024',
        gpa: '5.00/5.00',
        group: { en: 'Science', bn: 'বিজ্ঞান' },
      },
      {
        degree: {
          en: 'Secondary School Certificate (SSC)',
          bn: 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)',
        },
        institution: {
          en: 'Dhunat Govt N.U. Pilot Model High School',
          bn: 'ধুনট সরকারি এন. ইউ. পাইলট মডেল উচ্চ বিদ্যালয়',
        },
        year: '2021-2022',
        gpa: '5.00/5.00',
        group: { en: 'Science', bn: 'বিজ্ঞান' },
      },
    ],
    skills: {
      technical: [
        'React.js',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'Firebase',
        'Node.js',
        'Python',
        'AI/ML Basics',
      ],
      languages: [
        { name: { en: 'Bengali (Native)', bn: 'বাংলা (মাতৃভাষা)' }, level: 5 },
        { name: { en: 'English (Professional)', bn: 'ইংরেজি (পেশাদার)' }, level: 4 },
      ],
      soft: [
        { en: 'Leadership', bn: 'নেতৃত্ব' },
        { en: 'Team Collaboration', bn: 'দলগত সমন্বয়' },
        { en: 'Problem Solving', bn: 'সমস্যা সমাধান' },
        { en: 'Communication', bn: 'যোগাযোগ' },
      ],
    },
    projects: [
      {
        name: 'HSCian',
        description: {
          en: 'Free educational platform for HSC students',
          bn: 'HSC শিক্ষার্থীদের জন্য বিনামূল্যে শিক্ষা প্ল্যাটফর্ম',
        },
        url: 'https://hsian.netlify.app',
        tech: ['React', 'Firebase', 'PWA'],
      },
      {
        name: 'BOBDO',
        description: {
          en: 'Blood donation platform serving 68k+ members',
          bn: '৬৮ হাজার+ সদস্যের জন্য রক্তদাতা প্ল্যাটফর্ম',
        },
        url: 'https://bobdo.vercel.app',
        tech: ['React', 'Firebase', 'PWA'],
      },
      {
        name: 'UniConverter',
        description: {
          en: 'Universal unit converter with 50+ categories',
          bn: '৫০+ বিভাগ সহ সর্বজনীন একক রূপান্তরকারী',
        },
        url: 'https://uniconverter.netlify.app',
        tech: ['React', 'PWA', 'JavaScript'],
      },
    ],
    achievements: [
      { en: 'AI Olympiad Semi-Finalist', bn: 'AI অলিম্পিয়াড সেমি-ফাইনালিস্ট' },
      { en: 'ICT Olympiad Quarter-Finalist', bn: 'ICT অলিম্পিয়াড কোয়ার্টার-ফাইনালিস্ট' },
      { en: 'Mathematics Olympiad Participant', bn: 'গণিত অলিম্পিয়াড অংশগ্রহণকারী' },
      {
        en: 'Academic Excellence (SSC & HSC GPA 5.00)',
        bn: 'একাডেমিক শ্রেষ্ঠত্ব (এসএসসি ও এইচএসসি জিপিএ ৫.০০)',
      },
    ],
  },

  // Social links
  socialLinks: [
    {
      name: 'Google',
      icon: Chrome,
      url: 'https://www.google.com/search?q=Md+Ridoan+Mahmud+Zisan',
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ridoan-zisan',
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/RidoanDev',
      color: 'text-gray-800 hover:text-gray-900',
      bgColor: 'bg-gray-50 hover:bg-gray-100',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/rid0anzisan',
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@ridoan-zisan',
      color: 'text-red-600 hover:text-red-700',
      bgColor: 'bg-red-50 hover:bg-red-100',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ridoan.zisan@gmail.com',
      color: 'text-green-600 hover:text-green-700',
      bgColor: 'bg-green-50 hover:bg-green-100',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/ridoan_zisan',
      color: 'text-sky-600 hover:text-sky-700',
      bgColor: 'bg-sky-50 hover:bg-sky-100',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/8801712525910',
      color: 'text-green-600 hover:text-green-700',
      bgColor: 'bg-green-50 hover:bg-green-100',
    },
  ],

  // Quick navigation items
  quickNavItems: [
    { id: 'profile', icon: User, label: { en: 'Profile', bn: 'প্রোফাইল' } },
    { id: 'education', icon: GraduationCap, label: { en: 'Education', bn: 'শিক্ষা' } },
    { id: 'experience', icon: Briefcase, label: { en: 'Experience', bn: 'অভিজ্ঞতা' } },
    { id: 'skills', icon: Code, label: { en: 'Skills', bn: 'দক্ষতা' } },
    { id: 'certificates', icon: Award, label: { en: 'Certificates', bn: 'সার্টিফিকেট' } },
    { id: 'contact', icon: Mail, label: { en: 'Contact', bn: 'যোগাযোগ' } },
    { id: 'research', icon: Search, label: { en: 'Research', bn: 'গবেষণা' } },
    { id: 'blog', icon: PenTool, label: { en: 'Blog', bn: 'ব্লগ' } },
  ],

  // UI Labels
  labels: {
    tabs: {
      navigate: { en: 'Navigate', bn: 'নেভিগেশন' },
      chat: { en: 'AI Chat', bn: 'AI চ্যাট' },
      social: { en: 'Social', bn: 'সামাজিক' },
    },
    navigation: {
      quickNavigation: { en: 'Quick Navigation', bn: 'দ্রুত নেভিগেশন' },
      quickActions: { en: 'Quick Actions', bn: 'দ্রুত ক্রিয়া' },
      downloadCV: { en: 'Download CV', bn: 'সিভি ডাউনলোড' },
      callNow: { en: 'Call Now', bn: 'এখনই কল' },
      emailMe: { en: 'Email Me', bn: 'ইমেইল করুন' },
      sendMessage: { en: 'Send Message', bn: 'বার্তা পাঠান' },
    },
    chat: {
      typeMessage: { en: 'Type your message...', bn: 'আপনার বার্তা লিখুন...' },
      aiAssistant: { en: 'AI Assistant', bn: 'AI সহায়ক' },
      defaultResponse: {
        en: `Hello! I'm Ghost AI, your assistant for information about {name}. You can ask about:\n\n• Education & Academic Background\n• Technical Skills & Expertise\n• Projects & Development Work\n• Contact Information\n• Achievements & Certifications\n• Personal Information\n• Or any other professional details!`,
        bn: `হ্যালো! আমি Ghost AI, {name} সম্পর্কে তথ্যের জন্য আপনার সহায়ক। আপনি জিজ্ঞাসা করতে পারেন:\n\n• শিক্ষা ও একাডেমিক পটভূমি\n• প্রযুক্তিগত দক্ষতা ও দক্ষতা\n• প্রকল্প ও উন্নয়ন কাজ\n• যোগাযোগের তথ্য\n• অর্জন ও সার্টিফিকেশন\n• ব্যক্তিগত তথ্য\n• বা অন্য কোনো পেশাদার বিবরণ!`,
      },
      errorMessage: {
        en: 'Sorry, I encountered an error. Please try again.',
        bn: 'দুঃখিত, আমি একটি ত্রুটির সম্মুখীন হয়েছি। অনুগ্রহ করে আবার চেষ্টা করুন।',
      },
      responseLabels: {
        educationBackground: { en: 'Education Background:', bn: 'শিক্ষাগত পটভূমি:' },
        technicalSkills: { en: 'Technical Skills:', bn: 'প্রযুক্তিগত দক্ষতা:' },
        softSkills: { en: 'Soft Skills:', bn: 'সফট স্কিল:' },
        languages: { en: 'Languages:', bn: 'ভাষা:' },
        notableProjects: { en: 'Notable Projects:', bn: 'উল্লেখযোগ্য প্রকল্প:' },
        contactInformation: { en: 'Contact Information:', bn: 'যোগাযোগের তথ্য:' },
        keyAchievements: { en: 'Key Achievements:', bn: 'মূল অর্জনসমূহ:' },
        age: { en: 'Age:', bn: 'বয়স:' },
        bloodGroup: { en: 'Blood Group:', bn: 'রক্তের গ্রুপ:' },
        location: { en: 'Location:', bn: 'অবস্থান:' },
        group: { en: 'Group:', bn: 'গ্রুপ:' },
        tech: { en: 'Tech:', bn: 'প্রযুক্তি:' },
        yearsOld: { en: 'years old', bn: 'বছর' },
      },
    },
    social: {
      socialLinks: { en: 'Social Links', bn: 'সামাজিক লিংক' },
      connectWithMe: { en: 'Connect with me on various platforms', bn: 'বিভিন্ন প্ল্যাটফর্মে আমার সাথে যুক্ত হন' },
    },
  },
};