
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight,  } from 'lucide-react';
import Featured from '../components/homecomp/Featured';
import { containerVariants, itemVariants } from '../type';

import Statistika from '../components/homecomp/statistika';
import Cta from '../components/homecomp/Cta';
import { useTranslation } from 'react-i18next';

const HomePage = () => { 
  const {t} = useTranslation()
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16"
    >
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900  overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 text-white gap-12 items-center">
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                 {t('home.hero.title1')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                  {t('home.hero.title2')}
                </span>
                             {t('home.hero.title3')}

              </h1>
              <p className="text-xl lg:text-2xl mb-8   leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/courses"
                  className="group inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600  font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  {t('home.hero.btnCourses')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white  hover:bg-white hover:text-blue-900 font-semibold rounded-xl transition-all duration-300"
                >
                 {t('home.hero.btnConsult')}
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="https://it-park.uz/storage/images/newsimage/IMG_6594_1603376676%20(%D0%9A%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C)_1603381811.jpg"
                  alt="IT ta'lim"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  <Statistika/>
     <Featured/>
      <Cta/>
    </motion.div>
  );
};

export default HomePage;