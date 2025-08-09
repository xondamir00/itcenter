
import { Link } from 'react-router-dom';
import {  Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
               <img src="https://www.aziz-academy.uz/static/home/aziz2/itpark.png" className='w-[50px]' alt="" />
              </div>
              <span className="text-xl font-bold">IT Markazi</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Zamonaviy IT ta'lim markazi. Dasturlash va kompyuter savodxonligi yo'nalishida professional kadrlar tayyorlash.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tez havolalar</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Kurslar</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Biz haqimizda</Link></li>
              <li><Link to="/instructors" className="text-gray-300 hover:text-white transition-colors">O'qituvchilar</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Aloqa</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mashhur kurslar</h3>
            <ul className="space-y-2">
              <li><h1 className="text-gray-300 hover:text-white transition-colors">Frontend Development</h1></li>
              <li><h1 className="text-gray-300 hover:text-white transition-colors">Backend Development</h1></li>
              <li><h1 className="text-gray-300 hover:text-white transition-colors">Mobile Development</h1></li>
              <li><h1 className="text-gray-300 hover:text-white transition-colors">Data Science</h1></li>
              <li><h1 className="text-gray-300 hover:text-white transition-colors">DevOps</h1></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Aloqa ma'lumotlari</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Jizzax sh, Zarbdor tumani,Davlad xizmatlari binosi, 1-qavat</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+998 (77) 030-43-21</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@itmarkazi.uz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} IT Markazi. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;