import React, { useState, useRef, useEffect } from 'react';
import { Send, Ghost, User, X, Menu } from 'lucide-react';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { floatingMenuData } from '../data/floatingMenuData';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface FloatingMenuProps {
  language: 'en' | 'bn';
  scrollToSection: (section: string) => void;
}

export const FloatingMenu = ({ language, scrollToSection }: FloatingMenuProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'nav' | 'chat' | 'social'>('nav');
  const [isThinking, setIsThinking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const ghostVariants = {
    float: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const particleVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: {
      scale: [0, 1, 1.5],
      opacity: [1, 0.8, 0],
      y: -50,
      transition: { duration: 1 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
    },
    tap: { scale: 0.95 },
  };

  useEffect(() => {
    if (isChatOpen) {
      inputRef.current?.focus();
    }
  }, [isChatOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const createParticles = () => {
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: 0,
    }));
    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.slice(5));
    }, 1000);
  };

  const getConstantReply = (userInput: string): string | null => {
    const lowerInput = userInput.toLowerCase();

    if (
      lowerInput.includes('developer') ||
      lowerInput.includes('creator') ||
      lowerInput.includes('zisan') ||
      lowerInput.includes('ridoan')
    ) {
      return `I was created by Md Ridoan Mahmud Zisan, a passionate web developer and student from Bogura, Bangladesh.
      \n📫 Contact: ridoan.zisan@gmail.com
      \n📞 Phone: +8801712525910
      \n📍 Location: Bogura, Bangladesh
      \n🔗 LinkedIn: https://linkedin.com/in/ridoan2007`;
    }

    if (lowerInput.includes('education') || lowerInput.includes('study')) {
      return `Md Ridoan Mahmud Zisan's Education:
      \n🎓 HSC - Karatoa Multimedia School and College (2023-2024) - GPA: 5.00/5.00
      \n🎓 SSC - Dhunat Govt N.U. Pilot Model High School (2021-2022) - GPA: 5.00/5.00`;
    }

    if (lowerInput.includes('skill') || lowerInput.includes('expertise')) {
      return `Skills: Web Development (HTML, CSS, JavaScript, React.js, Firebase), AI & Machine Learning, MS Office, Problem Solving, Team Collaboration`;
    }

    if (lowerInput.includes('project') || lowerInput.includes('work')) {
      return `Notable Projects:
      \n🩸 BOBDO - Blood management system (https://bobdo.netlify.app)
      \n📐 UniConverter - Unit converter PWA (https://uniconverter.netlify.app)
      \n💻 DevHub - Portfolio (https://devhub-i.netlify.app)`;
    }

    if (lowerInput.includes('contact') || lowerInput.includes('email')) {
      return `Contact: ridoan.zisan@gmail.com | Phone: +8801712525910 | LinkedIn: https://linkedin.com/in/ridoan2007`;
    }

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return floatingMenuData.chatData.welcomeMessage[language];
    }

    if (lowerInput.includes('thank')) {
      return language === 'en' 
        ? "You're welcome! Let me know if you need anything else."
        : "আপনাকে স্বাগতম! আরো কিছু জানতে চাইলে বলুন।";
    }

    return null;
  };

  const callAPI = async (prompt: string) => {
    setIsLoading(true);
    setIsThinking(true);

    const constantReply = getConstantReply(prompt);
    if (constantReply) {
      setIsThinking(false);
      return constantReply;
    }

    try {
      const apiUrl =
        'https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5HUEtMSjJkakVjcF9IQ0M0VFhRQ0FmSnNDSHNYTlJSblE0UXo1Q3RBcjFPcl9YYy1OZUhteDZWekxHdWRLM1M1alNZTkJMWEhNOWd4S1NPSDBTWC12M0U2UGc9PQ==';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setIsThinking(false);
      return data.status === 'success'
        ? data.text
        : 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('API Error:', error);
      setIsThinking(false);
      return 'Sorry, there was an error processing your request.';
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    createParticles();

    try {
      const response = await callAPI(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      createParticles();
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I could not connect to the server. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      inputRef.current?.focus();
    }
  };

  const handleQuickAction = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div
      className="fixed bottom-4 right-4 flex flex-col items-end gap-2 z-[9999]"
      ref={containerRef}
    >
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-400 rounded-full pointer-events-none"
            style={{ left: particle.x, top: particle.y }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden w-72"
          >
            <div className="flex bg-gradient-to-r from-blue-50 to-purple-50 p-1 gap-1">
              {(['nav', 'chat', 'social'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'nav' && (language === 'en' ? 'Quick Nav' : 'দ্রুত নেভ')}
                  {tab === 'chat' && (language === 'en' ? 'Ghost Chat' : 'ঘোস্ট চ্যাট')}
                  {tab === 'social' && (language === 'en' ? 'Social' : 'সোশ্যাল')}
                </button>
              ))}
            </div>

            <div className="p-3 max-h-96 overflow-y-auto">
              {activeTab === 'nav' && (
                <motion.div className="space-y-1">
                  {floatingMenuData.quickActions.map((action, i) => (
                    <motion.button
                      key={action.id}
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => handleQuickAction(action.section)}
                      whileHover={{ x: 4, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {action.label[language]}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {activeTab === 'chat' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div variants={ghostVariants} animate="float">
                      <Ghost className="w-5 h-5 text-blue-500" />
                    </motion.div>
                    <p className="text-xs text-gray-600">
                      {language === 'en' ? 'Ask me anything!' : 'আমাকে কিছু জিজ্ঞাসা করুন!'}
                    </p>
                  </div>
                  
                  {floatingMenuData.chatData.suggestions[language].map((suggestion, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => {
                        setInput(suggestion);
                        setIsChatOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                  
                  <button
                    onClick={() => {
                      setIsChatOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                  >
                    {language === 'en' ? 'Open Chat' : 'চ্যাট খুলুন'}
                  </button>
                </motion.div>
              )}

              {activeTab === 'social' && (
                <motion.div className="grid grid-cols-2 gap-2">
                  {floatingMenuData.socialLinks.map((social, i) => (
                    <motion.a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 border border-gray-200 text-center transition-all shadow-sm hover:shadow-md"
                    >
                      <div className="text-xs font-medium text-gray-700">{social.label}</div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        className={`p-3 rounded-full shadow-lg transition-all ${
          isMenuOpen
            ? 'bg-gradient-to-r from-red-500 to-red-600'
            : 'bg-gradient-to-r from-blue-500 to-blue-600'
        } text-white relative overflow-hidden`}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.div>
        
        {!isMenuOpen && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="fixed bottom-20 right-4 w-80 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 flex flex-col max-h-[500px]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <motion.div variants={ghostVariants} animate="float">
                  <Ghost className="w-5 h-5" />
                </motion.div>
                <h2 className="font-semibold text-sm">Ghost AI</h2>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[300px]">
              {messages.length === 0 && (
                <motion.div
                  className="text-center text-gray-500 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div variants={ghostVariants} animate="float">
                    <Ghost className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                  </motion.div>
                  <p className="text-sm">{floatingMenuData.chatData.welcomeMessage[language]}</p>
                </motion.div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex items-start gap-2 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      message.role === 'user' ? 'bg-blue-500' : 'bg-gradient-to-br from-purple-500 to-blue-500'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Ghost className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-3 py-2 max-w-[75%] ${
                      message.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-xs whitespace-pre-wrap">{message.content}</p>
                    <p className="text-[10px] mt-1 opacity-70">
                      {format(message.timestamp, 'HH:mm')}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isThinking && (
                <motion.div
                  className="flex items-start gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    >
                      <Ghost className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-3 py-2">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-3">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={language === 'en' ? 'Ask me anything...' : 'কিছু জিজ্ঞাসা করুন...'}
                  disabled={isLoading}
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg px-3 py-2 hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingMenu;
