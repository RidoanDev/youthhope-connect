import { Mail } from 'lucide-react';

// Footer data for social links
export const footerData = {
  social: {
    title: {
      en: 'Connect with me',
      bn: 'আমার সাথে যুক্ত হোন',
    },
    links: [
      {
        name: 'Google',
        icon: 'GoogleIcon',
        href: 'https://www.google.com/search?q=Md+Ridoan+Mahmud+Zisan',
        color: 'hover:text-blue-500',
      },
      {
        name: 'LinkedIn',
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/ridoan-zisan',
        color: 'hover:text-blue-400',
      },
      {
        name: 'GitHub',
        icon: 'Github',
        href: 'https://github.com/RidoanDev',
        color: 'hover:text-blue-600',
      },
      {
        name: 'Facebook',
        icon: 'Facebook',
        href: 'https://www.facebook.com/rid0anzisan',
        color: 'hover:text-blue-500',
      },
      {
        name: 'YouTube',
        icon: 'Youtube',
        href: 'https://youtube.com/@ridoan-zisan',
        color: 'hover:text-red-500',
      },
      {
        name: 'Email',
        icon: Mail,
        href: 'mailto:ridoan.zisan@gmail.com',
        color: 'hover:text-blue-600',
      },
      {
        name: 'Twitter',
        icon: 'Twitter',
        href: 'https://x.com/ridoan_zisan',
        color: 'hover:text-sky-400',
      },
      {
        name: 'WhatsApp',
        icon: 'MessageCircle',
        href: 'https://wa.me/8801712525910',
        color: 'hover:text-green-400',
      },
    ],
  },
};