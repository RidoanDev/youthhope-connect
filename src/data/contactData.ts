import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

// Contact data for the portfolio website
export const contactData = {
  title: {
    en: 'Contact',
    bn: 'যোগাযোগ',
  },
  form: {
    name: {
      en: 'Your Name',
      bn: 'আপনার নাম',
    },
    subject: {
      en: 'Subject',
      bn: 'বিষয়',
    },
    message: {
      en: 'Compose email',
      bn: 'ইমেল লিখুন',
    },
    submit: {
      en: 'Send Message',
      bn: 'বার্তা পাঠান',
    },
    success: {
      en: 'Message sent successfully!',
      bn: 'বার্তা সফলভাবে পাঠানো হয়েছে!',
    },
  },
  items: [
    {
      icon: Mail,
      content: {
        en: 'ridoan.zisan@gmail.com',
        bn: 'ridoan.zisan@gmail.com',
      },
      link: 'mailto:ridoan.zisan@gmail.com',
      isExternal: false,
      iconColor: 'text-green-700',
    },
    {
      icon: Phone,
      content: {
        en: '+8801712525910',
        bn: '+৮৮০১৭১২৫২৫৯১০',
      },
      link: 'tel:+8801712525910',
      isExternal: false,
      iconColor: 'text-green-700',
    },
    {
      icon: MapPin,
      content: {
        en: 'Bogura, Bangladesh',
        bn: 'বগুড়া, বাংলাদেশ',
      },
      link: 'https://maps.app.goo.gl/EV2Yob73hVp2KKpQ8',
      isExternal: true,
      iconColor: 'text-green-700',
    },
    {
      icon: Linkedin,
      content: {
        en: 'LinkedIn Profile',
        bn: 'লিঙ্কডইন প্রোফাইল',
      },
      link: 'https://linkedin.com/in/ridoan-zisan',
      isExternal: true,
      iconColor: 'text-green-700',
    },
  ],
};