import { Linkedin, MessageCircle, Facebook, Twitter, Youtube, Github, Mail, Chrome } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'bn';
}

const Footer = ({ language }: FooterProps) => {
  const footerData = {
    social: {
      title: {
        en: 'Connect with me',
        bn: 'আমার সাথে যুক্ত হোন',
      },
      links: [
        {
          icon: <Chrome size={20} />,
          href: 'https://www.google.com/search?q=Md+Ridoan+Mahmud+Zisan',
          color: 'hover:text-blue-500',
        },
        {
          icon: <Linkedin size={20} />,
          href: 'https://www.linkedin.com/in/ridoan-zisan',
          color: 'hover:text-blue-400',
        },
        {
          icon: <Github size={20} />,
          href: 'https://github.com/RidoanDev',
          color: 'hover:text-blue-600',
        },
        {
          icon: <Facebook size={20} />,
          href: 'https://www.facebook.com/rid0anzisan',
          color: 'hover:text-blue-500',
        },
        {
          icon: <Youtube size={20} />,
          href: 'https://youtube.com/@ridoan-zisan',
          color: 'hover:text-red-500',
        },
        {
          icon: <Mail size={20} />,
          href: 'mailto:ridoan.zisan@gmail.com',
          color: 'hover:text-blue-600',
        },
        {
          icon: <Twitter size={20} />,
          href: 'https://x.com/ridoan_zisan',
          color: 'hover:text-sky-400',
        },
        {
          icon: <MessageCircle size={20} />,
          href: 'https://wa.me/8801712525910',
          color: 'hover:text-green-400',
        },
      ],
    },
  };

  return (
    <footer className="relative py-10 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent font-heading">
              {footerData.social.title[language]}
            </h2>
          </div>
          
          <div className="flex justify-center flex-wrap gap-3">
            {footerData.social.links.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20`}
                aria-label={`Social link ${index}`}
              >
                <div className="transform transition-transform duration-200">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
