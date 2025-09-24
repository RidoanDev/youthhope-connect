import { Target, HeartHandshake, Facebook } from 'lucide-react';

// Experience data for the portfolio website
export const experienceData = {
  title: {
    en: 'Experience',
    bn: 'অভিজ্ঞতা',
  },
  experiences: [
    {
      id: 'bobdo',
      type: 'volunteer',
      title: {
        en: 'Bogura Online Blood Donation Organisation',
        bn: 'বগুড়া অনলাইন রক্তদান সংগঠন',
      },
      role: {
        en: 'Volunteer & Developer | 2023-Present',
        bn: 'স্বেচ্ছাসেবী ও ডেভেলপার | ২০২৩-বর্তমান',
      },
      links: [
        {
          label: {
            en: 'Facebook Group',
            bn: 'ফেসবুক গ্রুপ',
          },
          url: 'https://www.facebook.com/groups/BOBO.BD',
          icon: Facebook,
        },
        {
          label: {
            en: 'Web Application',
            bn: 'ওয়েব অ্যাপ্লিকেশন',
          },
          url: 'https://bobdo.vercel.app',
          icon: 'ExternalLink',
        },
      ],
      achievements: [
        {
          description: {
            en: 'Built blood donor platform serving 68k+ community members',
            bn: '৬৮ হাজার+ সদস্যের জন্য রক্তদাতা প্ল্যাটফর্ম তৈরি করা হয়েছে',
          },
          icon: Target,
          iconColor: 'text-red-500',
        },
        {
          description: {
            en: 'Implemented digital system reducing response time by 40%',
            bn: 'ডিজিটাল সিস্টেম চালু করে সাড়া দেওয়ার সময় ৪০% কমানো হয়েছে',
          },
          icon: HeartHandshake,
          iconColor: 'text-red-500',
        },
      ],
      borderColor: 'border-red-500',
      bgColor: 'bg-red-100',
      hoverBgColor: 'hover:bg-red-50',
      iconColor: 'text-red-500',
    },
    {
      id: 'youth-hope',
      type: 'volunteer',
      title: {
        en: 'Youth Hope BD',
        bn: 'ইয়ুথ হোপ বিডি',
      },
      role: {
        en: 'Volunteer & Developer | 2025-Present',
        bn: 'স্বেচ্ছাসেবী ও ডেভেলপার | ২০২৫-বর্তমান',
      },
      links: [
        {
          label: {
            en: 'Web Application',
            bn: 'ওয়েব অ্যাপ্লিকেশন',
          },
          url: 'https://youth-hope.netlify.app',
          icon: 'ExternalLink',
        },
      ],
      achievements: [
        {
          description: {
            en: 'Developed platform for youth development and social services',
            bn: 'যুব উন্নয়ন ও সামাজিক সেবার জন্য প্ল্যাটফর্ম তৈরি করা হয়েছে',
          },
          icon: Target,
          iconColor: 'text-green-500',
        },
        {
          description: {
            en: 'Created tools for volunteer management and event organization',
            bn: 'স্বেচ্ছাসেবী ব্যবস্থাপনা ও ইভেন্ট আয়োজনের জন্য টুলস তৈরি করা হয়েছে',
          },
          icon: HeartHandshake,
          iconColor: 'text-green-500',
        },
      ],
      borderColor: 'border-green-500',
      bgColor: 'bg-green-100',
      hoverBgColor: 'hover:bg-green-50',
      iconColor: 'text-green-500',
    },
    {
      id: 'projects',
      type: 'development',
      title: {
        en: 'Web Development Projects',
        bn: 'ওয়েব ডেভেলপমেন্ট প্রকল্পসমূহ',
      },
      role: {
        en: 'Independent Developer | 2023-Present',
        bn: 'স্বাধীন ডেভেলপার | ২০২৩-বর্তমান',
      },
      projects: [
        {
          name: {
            en: 'BOBDO',
            bn: 'বিওবিডিও',
          },
          description: {
            en: 'online blood donation website and web app',
            bn: ' অনলাইন রক্তদান ওয়েবসাইট এবং ওয়েব অ্যাপ',
          },
          url: 'https://bobdo.vercel.app',
        },
        {
          name: {
            en: 'YouthHopeBD',
            bn: 'ইয়ুথ হোপ বিডি',
          },
          description: {
            en: 'platform for youth development and social services',
            bn: ' যুব উন্নয়ন ও সামাজিক সেবার জন্য প্ল্যাটফর্ম তৈরি করা হয়েছে',
          },
          url: 'https://youth-hope.netlify.app',
        },
        {
          name: {
            en: 'UniConverter',
            bn: 'ইউনিকনভার্টার',
          },
          description: {
            en: 'Unit converter supporting 50+ measurement categories',
            bn: '৫০+ পরিমাপ বিভাগ সমর্থনকারী একক রূপান্তরকারী',
          },
          url: 'https://uniconverter.netlify.app',
        },
        {
          name: {
            en: 'DevHub',
            bn: 'ডেভহাব',
          },
          description: {
            en: 'My all projects',
            bn: 'আমার সকল প্রজেক্ট গুলো',
          },
          url: 'https://devhub-i.netlify.app',
        },
      ],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-100',
      hoverBgColor: 'hover:bg-blue-50',
      iconColor: 'text-blue-500',
    },
  ],
  labels: {
    view: {
      en: 'View',
      bn: 'দেখুন',
    },
  },
};