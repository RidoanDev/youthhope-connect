import {
  Code,
  LineChart,
  BrainCircuit,
  Target,
  Binary,
  Calculator,
  Network,
  Shield,
  Database,
  Cloud,
  Trophy,
  BookOpen,
} from 'lucide-react';

// Courses and professional development data
export const coursesData = {
  title: {
    en: 'Professional Development',
    bn: 'পেশাদার উন্নয়ন',
  },
  sections: {
    olympiads: {
      title: {
        en: 'Academic Olympiads',
        bn: 'একাডেমিক অলিম্পিয়াড',
      },
      icon: Trophy,
      data: [
        {
          id: 'zero-olympiad',
          title: {
            en: 'Zero Olympiad',
            bn: 'জিরো অলিম্পিয়াড',
          },
          description: {
            en: 'UN SDGs and climate action strategies',
            bn: 'জাতিসংঘের এসডিজি এবং জলবায়ু কর্ম কৌশল',
          },
          icon: Target,
          iconColor: 'text-red-500',
          certificateUrl: 'https://drive.google.com/drive/folders/10q_vKhkwR6a5rKgoutz_spN4qpOp1J1C',
          websiteUrl: 'https://faatihaaayat.com/zeroolympiad/',
        },
        {
          id: 'ai-olympiad',
          title: {
            en: 'Bangladesh Artificial Intelligence Olympiad',
            bn: 'বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড',
          },
          description: {
            en: 'National AI competition testing knowledge in machine learning, neural networks, and AI ethics',
            bn: 'মেশিন লার্নিং, নিউরাল নেটওয়ার্ক এবং এআই নীতিশাস্ত্রের জ্ঞান পরীক্ষা করে জাতীয় এআই প্রতিযোগিতা',
          },
          icon: Binary,
          iconColor: 'text-indigo-500',
          certificateUrl: 'https://example.com/certificates/ai-olympiad',
          websiteUrl: 'https://bdaio.org/',
        },
        {
          id: 'ict-olympiad',
          title: {
            en: 'ICT Olympiad Bangladesh',
            bn: 'আইসিটি অলিম্পিয়াড বাংলাদেশ',
          },
          description: {
            en: 'National competition testing knowledge in information and communication technologies',
            bn: 'তথ্য ও যোগাযোগ প্রযুক্তি বিষয়ক জ্ঞান পরীক্ষা করে জাতীয় প্রতিযোগিতা',
          },
          icon: Network,
          iconColor: 'text-emerald-500',
          certificateUrl: 'https://drive.google.com/drive/folders/1bfZ0wgs_YPL9VW0IFRD_G2MW4xkrZUwP',
          websiteUrl: 'https://www.ictolympiadbangladesh.com/',
        },
        {
          id: 'math-olympiad',
          title: {
            en: 'Math Olympiad',
            bn: 'গণিত অলিম্পিয়াড',
          },
          description: {
            en: 'Prestigious mathematics competition for exceptional problem-solving skills',
            bn: 'অসাধারণ সমস্যা সমাধানের দক্ষতার জন্য মর্যাদাপূর্ণ গণিত প্রতিযোগিতা',
          },
          icon: Calculator,
          iconColor: 'text-cyan-500',
          certificateUrl: 'https://drive.google.com/drive/folders/1v6cYDB9Rdyc4YyaFSZ-54w7EZ-dy6QbC',
          websiteUrl: 'https://online.matholympiad.org.bd/',
        },
      ],
    },
    courses: {
      title: {
        en: 'Professional Courses & Certifications',
        bn: 'পেশাদার কোর্স এবং সার্টিফিকেশন',
      },
      icon: BookOpen,
      data: [
        {
          id: 'google-it-course',
          title: {
            en: 'Google IT Support Professional Certificate',
            bn: 'গুগল আইটি সাপোর্ট প্রফেশনাল সার্টিফিকেট',
          },
          description: {
            en: 'Comprehensive training on IT fundamentals, troubleshooting, customer service, systems administration, and security',
            bn: 'আইটি বুনিয়াদি, সমস্যা সমাধান, গ্রাহক সেবা, সিস্টেম প্রশাসন এবং নিরাপত্তা সম্পর্কে বিস্তৃত প্রশিক্ষণ',
          },
          platform: 'Google via Coursera',
          duration: { en: '6 months', bn: 'ছয় মাস' },
          icon: Shield,
          iconColor: 'text-blue-500',
          certificateUrl: 'https://coursera.org/share/ea676f483e647fe0f5488ce6a1c111bd',
          courseUrl: 'https://www.coursera.org/professional-certificates/google-it-support',
        },
        {
          id: 'digital-marketing-course',
          title: {
            en: 'Digital Marketing Certification',
            bn: 'ডিজিটাল মার্কেটিং সার্টিফিকেশন',
          },
          description: {
            en: 'Mastered SEO, SEM, social media marketing, content strategy, and analytics',
            bn: 'এসইও, এসইএম, সোশ্যাল মিডিয়া মার্কেটিং, কন্টেন্ট কৌশল এবং অ্যানালিটিক্স আয়ত্ত',
          },
          platform: 'HubSpot Academy',
          duration: { en: '8 weeks', bn: '৮ সপ্তাহ' },
          icon: LineChart,
          iconColor: 'text-green-500',
          certificateUrl: 'https://drive.google.com/file/d/1Nn9RHmgluP_gwMa9Z6qPlI_bE1cXRSz3/view?usp=drivesdk',
          courseUrl: 'https://academy.hubspot.com/',
        },
        {
          id: 'web-development-course',
          title: {
            en: 'Complete Web Development Bootcamp',
            bn: 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট বুটক্যাম্প',
          },
          description: {
            en: 'Full-stack development with HTML, CSS, JavaScript, React, Node.js, and MongoDB',
            bn: 'এইচটিএমএল, সিএসএস, জাভাস্ক্রিপ্ট, রিয়্যাক্ত, Node.js, এবং MongoDB দিয়ে ফুল-স্ট্যাক ডেভেলপমেন্ট',
          },
          platform: 'Programming Hero',
          duration: { en: '6 months', bn: 'ছয় মাস' },
          icon: Code,
          iconColor: 'text-orange-500',
          certificateUrl: 'https://drive.google.com/drive/folders/11FkUYKGYxO7OeeMtZgl-3iUlB4lu7wIp',
          courseUrl: 'https://www.programming-hero.com',
        },
        {
          id: 'ai-ml-course',
          title: {
            en: 'Artificial Intelligence & Machine Learning',
            bn: 'আর্টিফিশিয়াল ইন্টেলিজেন্স এবং মেশিন লার্নিং',
          },
          description: {
            en: 'Fundamentals of AI, machine learning algorithms, neural networks, and deep learning',
            bn: 'এআই-এর মৌলিক বিষয়, মেশিন লার্নিং অ্যালগরিদম, নিউরাল নেটওয়ার্ক এবং ডিপ লার্নিং',
          },
          platform: 'IBM via Coursera | Simplilearn',
          duration: { en: '4 months', bn: 'চার মাস' },
          icon: BrainCircuit,
          iconColor: 'text-purple-500',
          certificateUrl: 'https://example.com/certificates/ai-ml',
          courseUrls: [
            'https://www.coursera.org/professional-certificates/ai-engineer',
            'https://www.simplilearn.com/artificial-intelligence-master-program-training-course'
          ],
        },
        {
          id: 'cloud-computing-course',
          title: {
            en: 'Cloud Computing Fundamentals',
            bn: 'ক্লাউড কম্পিউটিং ফান্ডামেন্টালস',
          },
          description: {
            en: 'Introduction to cloud services, deployment models, and virtualization technologies',
            bn: 'ক্লাউড পরিষেবা, ডেপ্লয়মেন্ট মডেল এবং ভার্চুয়ালাইজেশন প্রযুক্তির পরিচিতি',
          },
          platform: 'Microsoft Learn',
          duration: { en: '1 month', bn: 'এক মাস' },
          icon: Cloud,
          iconColor: 'text-blue-400',
          certificateUrl: 'https://example.com/certificates/cloud-computing',
          courseUrl: 'https://docs.microsoft.com/learn/',
        },
        {
          id: 'data-science-course',
          title: {
            en: 'Data Science Essentials',
            bn: 'ডেটা সায়েন্স এসেনশিয়ালস',
          },
          description: {
            en: 'Data analysis, visualization, statistical modeling, and predictive analytics',
            bn: 'ডেটা বিশ্লেষণ, ভিজ্যুয়ালাইজেশন, পরিসংখ্যানগত মডেলিং এবং প্রেডিক্টিভ অ্যানালিটিক্স',
          },
          platform: 'Sololearn',
          duration: { en: '2 months', bn: 'দুই মাস' },
          icon: Database,
          iconColor: 'text-teal-500',
          certificateUrl: 'https://example.com/certificates/data-science',
          courseUrl: 'https://www.sololearn.com/',
        },
      ],
    },
  },
  labels: {
    certificate: {
      en: 'Certificate',
      bn: 'সার্টিফিকেট',
    },
    course: {
      en: 'Course',
      bn: 'কোর্স',
    },
    courseNum: {
      en: 'Course',
      bn: 'কোর্স',
    },
    website: {
      en: 'Website',
      bn: 'ওয়েবসাইট',
    },
  },
};