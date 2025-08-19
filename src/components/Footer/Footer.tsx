import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

         
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <img src="https://www.aziz-academy.uz/static/home/aziz2/itpark.png" className='w-[50px]' alt="logo" />
              </div>
              <span className="text-xl font-bold">{t("footers.brand")}</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">{t("footers.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
               <FaTelegram size={25} />          
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={25}/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footers.quickLinks")}</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">{t("footers.courses")}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t("footers.about")}</Link></li>
              <li><Link to="/instructors" className="text-gray-300 hover:text-white transition-colors">{t("footers.instructors")}</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">{t("footers.blog")}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t("footers.contact")}</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footers.popularCourses")}</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300 hover:text-white transition-colors">{t("footers.courseList.frontend")}</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors">{t("footers.courseList.backend")}</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors">{t("footers.courseList.mobile")}</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors">{t("footers.courseList.datascience")}</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors">{t("footers.courseList.devops")}</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footers.contactInfo")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{t("footers.address")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{t("footers.phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{t("footers.email")}</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {t("footers.brand")}. {t("footers.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
