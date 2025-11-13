import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Ghost,
  X,
  MessageCircle,
} from 'lucide-react';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Ghost floating animation variants (for welcome screen only)
  const ghostVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Message animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Enhanced constant replies with more information
  const getConstantReply = (userInput: string): string | null => {
    const lowerInput = userInput.toLowerCase().trim();

    // Profile/Developer/Creator information
    if (
      lowerInput.includes('profile') ||
      lowerInput.includes('developer') ||
      lowerInput.includes('creator') ||
      lowerInput.includes('who made you') ||
      lowerInput.includes('your creator') ||
      lowerInput.includes('zisan') ||
      lowerInput.includes('ridoan') ||
      lowerInput.includes('about') ||
      lowerInput === 'profile'
    ) {
      return `I was created by Md Ridoan Mahmud Zisan, a Self-Driven Web Developer & IT Specialist from Bogura, Bangladesh. 
      \n\nHere's some info about him:
      \n- 📫 Email: ridoan.zisan@gmail.com
      \n- 📞 Phone: +8801712525910
      \n- 📍 Location: Bogura, Bangladesh
      \n- 🔗 LinkedIn: https://linkedin.com/in/ridoan-zisan
      \n- 🩸 Blood Group: B+
      \n- 🎂 Date of Birth: December 31, 2007
      \n- 🌐 Religion: Humanity`;
    }

    // Education information
    if (
      lowerInput.includes('education') ||
      lowerInput.includes('study') ||
      lowerInput.includes('school') ||
      lowerInput.includes('college')
    ) {
      return `Md Ridoan Mahmud Zisan's Education:
      \n🎓 Higher Secondary Certificate (HSC)
      \n- Institution: KARATOA MULTIMEDIA SCHOOL AND COLLEGE
      \n- Year: 2023-2024
      \n- GPA: 4.25/5.00
      \n- Group: Science
      \n- Major: Higher Math
      \n\n🎓 Secondary School Certificate (SSC)
      \n- Institution: DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL
      \n- Year: 2021-2022
      \n- GPA: 5.00/5.00
      \n- Group: Science
      \n- Major: Higher Math`;
    }

    // Skills information
    if (
      lowerInput.includes('skill') ||
      lowerInput.includes('expertise') ||
      lowerInput.includes('what can you do') ||
      lowerInput.includes('ability')
    ) {
      return `Md Ridoan Mahmud Zisan's Skills:
      \n💻 Additional Skills:
      \n- Canva/Photoshop
      \n- Social Media
      \n- Web and App Development
      \n- The concept of AI
      \n\n🗣️ Language Skills:
      \n- Bengali (Fluent)
      \n- English (Professional)
      \n\n🏆 Core Professional Skills:
      \n- MS Office Suite
      \n- Email Communication
      \n- Team Collaboration
      \n- Time Management
      \n- Problem Solving
      \n- Professional Ethics
      \n\n💬 Communication Skills:
      \n- Report Writing
      \n- Active Listening
      \n- Presentation
      \n- Professional Email`;
    }

    // Projects information
    if (
      lowerInput.includes('project') ||
      lowerInput.includes('work') ||
      lowerInput.includes('build') ||
      lowerInput.includes('developed') ||
      lowerInput === 'projects'
    ) {
      return `Md Ridoan Mahmud Zisan's Notable Projects:
      \n🩸 BOBDO
      \n- Online blood donation website and web app
      \n- Built blood donor platform serving 68k+ community members
      \n- Implemented digital system reducing response time by 40%
      \n- Link: https://bobdo.vercel.app
      \n\n🌐 YouthHopeBD
      \n- Platform for youth development and social services
      \n- Link: https://youth-hope.netlify.app
      \n\n🛒 ZupraMart
      \n- All in one shopping platform
      \n- All daily necessities available including website source code
      \n- Link: https://zupramart.netlify.app
      \n\n📐 UniConverter
      \n- Unit converter supporting 50+ measurement categories
      \n- Link: https://uniconverter.netlify.app
      \n\n💻 DevHub
      \n- My all projects showcase
      \n- Link: https://devhub-i.netlify.app`;
    }

    // Certificates information
    if (
      lowerInput.includes('certificate') ||
      lowerInput.includes('certification') ||
      lowerInput.includes('achievement') ||
      lowerInput.includes('award') ||
      lowerInput.includes('olympiad') ||
      lowerInput === 'certificates'
    ) {
      return `Md Ridoan Mahmud Zisan's Certifications & Achievements:
      \n🏅 Academic Olympiads:
      \n- Bangladesh Mathematical Olympiad
      \n- ICT Olympiad - Quarter Final
      \n- National GK Olympiad
      
      \n📜 Professional Certifications:
      \n- Google IT Support
      \n- Foundations of Cybersecurity
      \n- Digital Marketing
      \n- Python for Data Science and AI
      \n- Introduction to Artificial Intelligence
      \n- Machine Learning
      \n- Complete Web Development
      \n- Introduction to Python
      
      \n🌍 Climate & Sustainability:
      \n- Gender equality and human rights in climate action and renewable energy
      \n- Net Zero 101: What, Why and How
      \n- Introduction to Sustainable Development in Practice
      \n- The UN Climate Change process`;
    }

    // Contact information
    if (
      lowerInput.includes('contact') ||
      lowerInput.includes('email') ||
      lowerInput.includes('phone') ||
      lowerInput.includes('address') ||
      lowerInput.includes('reach') ||
      lowerInput.includes('connect')
    ) {
      return `You can contact Md Ridoan Mahmud Zisan through:
      \n📧 Email: ridoan.zisan@gmail.com
      \n📞 Phone: +8801712525910
      \n📍 Location: Bogura, Bangladesh
      \n🔗 LinkedIn: https://linkedin.com/in/ridoan-zisan
      \n\nYou can also use the email button in the bottom right corner to send him a message directly.`;
    }

    // Volunteer work
    if (
      lowerInput.includes('volunteer') ||
      lowerInput.includes('blood') ||
      lowerInput.includes('donation') ||
      lowerInput.includes('bobdo') ||
      lowerInput.includes('youthhope')
    ) {
      return `Md Ridoan Mahmud Zisan's Volunteer Work:
      \n🩸 Bogura Online Blood Donation Organisation
      \n- Role: Volunteer & Developer (2023-Present)
      \n- Built blood donor platform serving 68k+ community members
      \n- Implemented digital system reducing response time by 40%
      \n- Link: https://bobdo.vercel.app
      
      \n💙 Youth Hope BD
      \n- Role: Volunteer & Developer (2025-Present)
      \n- Developed platform for youth development and social services
      \n- Created tools for volunteer management and event organization
      \n- Link: https://youthhope-bd.netlify.app`;
    }

    // Family information
    if (
      lowerInput.includes('family') ||
      lowerInput.includes('father') ||
      lowerInput.includes('mother') ||
      lowerInput.includes('parent') ||
      lowerInput.includes('sibling')
    ) {
      return `Md Ridoan Mahmud Zisan's Family:
      \n👨‍👩‍👧‍👦 Family Members:
      \n- Father: Md Rokibul Hasan Shekh
      \n- Mother: Mst. Zosna Khatun
      \n- Siblings: Raisa Jannat (Younger)`;
    }

    // Research information
    if (
      lowerInput.includes('research') ||
      lowerInput === 'research'
    ) {
      return `Md Ridoan Mahmud Zisan's Research Work:
      \n📚 He has conducted research in various fields including web development, AI, and social impact projects.
      \nVisit the Research page on his website to learn more about his research publications and ongoing projects.`;
    }

    // Blog information
    if (
      lowerInput.includes('blog') ||
      lowerInput === 'blog'
    ) {
      return `Md Ridoan Mahmud Zisan's Blog:
      \n✍️ He writes about technology, web development, AI, and his experiences.
      \nVisit the Blog page on his website to read his latest articles and insights.`;
    }

    // Social media information
    if (
      lowerInput.includes('social') ||
      lowerInput.includes('social media') ||
      lowerInput === 'social media'
    ) {
      return `Connect with Md Ridoan Mahmud Zisan on social media:
      \n🔗 LinkedIn: https://linkedin.com/in/ridoan-zisan
      \n💼 You can also find him on various professional platforms.
      \n📧 For direct contact: ridoan.zisan@gmail.com`;
    }

    // Basic greetings
    if (
      lowerInput.includes('hello') ||
      lowerInput.includes('hi') ||
      lowerInput.includes('hey')
    ) {
      return "Hello there! I'm Ghost AI, here to tell you about Md Ridoan Mahmud Zisan. How can I help you today?\n\nYou can ask about:\n- Profile\n- Education\n- Experience\n- Projects\n- Certificates\n- Skills\n- Family\n- Contact\n- Research\n- Blog\n- Social Media";
    }

    // Thank you responses
    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return "You're welcome! Let me know if you need any more information about Md Ridoan Mahmud Zisan.";
    }

    // Age information
    if (
      lowerInput.includes('age') ||
      lowerInput.includes('old') ||
      lowerInput.includes('birth')
    ) {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return `Md Ridoan Mahmud Zisan is ${age} years old (born December 31, 2007).`;
    }

    // Blood group
    if (lowerInput.includes('blood') && lowerInput.includes('group')) {
      return "Md Ridoan Mahmud Zisan's blood group is B+ (B positive).";
    }

    return null;
  };

  useEffect(() => {
    if (isChatOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isChatOpen]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isChatOpen &&
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node) &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    };

    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Typing animation effect
  const typeMessage = async (text: string) => {
    setTypingText('');
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 20));
      setTypingText(text.substring(0, i + 1));
    }
    return text;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const callAPI = async (prompt: string) => {
    setIsLoading(true);

    // Check for constant replies first
    const constantReply = getConstantReply(prompt);
    if (constantReply) {
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
      return data.status === 'success'
        ? data.text
        : 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('API Error:', error);
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

    try {
      const response = await callAPI(userMessage.content);
      
      // Show typing animation
      const typedResponse = await typeMessage(response);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: typedResponse,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setTypingText('');
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          'Sorry, I could not connect to the server. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setTypingText('');
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeywordClick = async (keyword: string) => {
    // Directly show result without pasting in text box
    // Create a user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: keyword,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await callAPI(keyword);
      const typedResponse = await typeMessage(response);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: typedResponse,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setTypingText('');
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, there was an error processing your request.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setTypingText('');
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const renderMessageContent = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 underline"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      {/* Backdrop blur overlay */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
          />
        )}
      </AnimatePresence>

      <div
        className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-[9999]"
        ref={containerRef}
      >
      {/* Main Floating Button - Chat Icon */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 sm:p-4 rounded-full shadow-lg bg-purple-50 hover:bg-purple-100 border border-purple-200 hover:border-purple-300 text-purple-600 hover:text-purple-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-purple-200"
        title={isChatOpen ? 'Close chat' : 'Open Ghost AI chat'}
      >
        <MessageCircle size={24} className="sm:w-6 sm:h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            ref={chatWindowRef}
            className="fixed bottom-20 right-6 w-[350px] sm:w-[400px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-[9999] flex flex-col max-h-[500px] border border-purple-100"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Ghost className="w-5 h-5" />
                </div>
                <h2 className="font-semibold text-lg" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>Ghost AI</h2>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/20 rounded-full"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[350px] bg-gradient-to-b from-purple-50/30 to-white">
              {messages.length === 0 && (
                <motion.div
                  className="text-center text-gray-600 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  style={{ fontFamily: "'Poppins', 'Inter', 'Noto Sans Bengali', sans-serif" }}
                >
                  <motion.div variants={ghostVariants} animate="float" className="mb-4">
                    <div className="inline-block p-4 bg-purple-100 rounded-full">
                      <Ghost className="w-12 h-12 text-purple-600" />
                    </div>
                  </motion.div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">I'm Ghost AI 👋</p>
                  <p className="text-sm text-gray-600 mb-4 px-4">
                    Ask me about Md Ridoan Mahmud Zisan
                  </p>
                  <div className="mt-4 text-xs text-gray-600 space-y-2 px-4">
                    <p className="font-medium text-purple-600 mb-2">Try asking:</p>
                    <div className="flex flex-wrap gap-2">
                      {['profile', 'education', 'experience', 'projects', 'certificates', 'skills', 'family', 'contact', 'research', 'blog', 'social media'].map((keyword) => (
                        <button
                          key={keyword}
                          onClick={() => handleKeywordClick(keyword)}
                          className="bg-white hover:bg-purple-50 text-purple-600 rounded-full px-3 py-1 shadow-sm border border-purple-200 hover:border-purple-300 transition-all text-xs font-medium capitalize"
                        >
                          {keyword}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex items-start gap-2 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' 
                        ? 'bg-gradient-to-br from-purple-500 to-purple-600' 
                        : 'bg-gradient-to-br from-purple-400 to-purple-500'
                    }`}
                  >
                    <Ghost className="w-4 h-4 text-white" />
                  </div>
                  <div
                    className={`rounded-2xl px-3 py-2 max-w-[75%] shadow-sm ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-100'
                    }`}
                    style={{ fontFamily: "'Poppins', 'Inter', 'Noto Sans Bengali', sans-serif" }}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {renderMessageContent(message.content)}
                    </p>
                    <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-purple-100' : 'text-gray-500'}`}>
                      {format(message.timestamp, 'HH:mm')}
                    </p>
                  </div>
                </motion.div>
              ))}

              {(isLoading || typingText) && (
                <motion.div
                  className="flex items-start gap-2"
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Ghost className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-3 py-2 shadow-sm border border-gray-100" style={{ fontFamily: "'Poppins', 'Inter', 'Noto Sans Bengali', sans-serif" }}>
                    {typingText ? (
                      <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">{typingText}<span className="animate-pulse">|</span></p>
                    ) : (
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-purple-500 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="border-t border-purple-100 p-3 bg-white rounded-b-2xl">
              <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Md Ridoan..."
                  disabled={isLoading || !!typingText}
                  className="flex-1 rounded-full border border-purple-200 px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  style={{ fontFamily: "'Poppins', 'Inter', 'Noto Sans Bengali', sans-serif" }}
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isLoading || !!typingText}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-9 h-9 hover:from-purple-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md flex-shrink-0"
                  whileHover={!isLoading && input.trim() && !typingText ? { scale: 1.05 } : {}}
                  whileTap={!isLoading && input.trim() && !typingText ? { scale: 0.95 } : {}}
                >
                  <Send className="w-4 h-4" />
                  <span className="sr-only">Send</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  );
};

export default LiveChat;
