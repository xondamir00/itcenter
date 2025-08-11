import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, } from 'lucide-react';
import { navItems } from '../constants';
import { ModeToggle } from './mode-toggle';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './Lang';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const {t} = useTranslation()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md dark:backdrop-blur-none' : 'bg-white '
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 text-black sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img className='w-[50px]' src="https://www.aziz-academy.uz/static/home/aziz2/itpark.png" alt="logo" />
            </div>
            <span className="text-xl font-bold   group-hover:text-blue-600 transition-colors">
              IT Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-xl font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : ' hover:text-blue-600'
                }`}
              >
                {t(item.name)}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className='flex  items-center gap-3'>
              <LanguageSwitcher />
            <div className='dark:text-white'>
              <ModeToggle />
            </div>
          </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-white border-t"
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {t(item.name)}
            </Link>
          ))}
         <div className='flex text-black items-center gap-3'>
            <div className='dark:text-white'>
              <ModeToggle />
            </div>
          <LanguageSwitcher/>
         </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;