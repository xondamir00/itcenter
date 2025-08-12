
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { achievements, oqituvchilar, values } from '@/constants';
import { containerVariants, itemVariants } from '@/type';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16 min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">{t('about.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t('about.story.title')}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t('about.story.paragraph1')}</p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t('about.story.paragraph2')}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{t('about.story.paragraph3')}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t('about.story.imageAlt')}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <TrendingUp className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">{t('about.story.experienceYears')}</div>
                <div className="text-sm">{t('about.story.experienceLabel')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('about.values.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about.values.subtitle')}</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 dark:border-2 dark:border-white p-8 rounded-2xl lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(value.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(value.descriptionKey)}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t('about.achievements.title')}</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t('about.achievements.subtitle')}</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-blue-100 font-medium">{t(achievement.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about.team.subtitle')}</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {oqituvchilar.map((member, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={t(member.nameKey)}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{t(member.nameKey)}</h3>
                <p className="text-blue-600 font-medium mb-2">{t(member.roleKey)}</p>
                <p className="text-gray-600">{t(member.descriptionKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
