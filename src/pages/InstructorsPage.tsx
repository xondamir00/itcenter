import { instructorss, stats2 } from '@/constants';
import { containerVariants, itemVariants } from '@/type';
import { motion } from 'framer-motion';
import { Star, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface StatCardProps {
  icon: React.ReactNode;
  number: number | string;
  label: string;
}
const StatCard: React.FC<StatCardProps> = ({ icon, number, label }) => (
  <div className="text-center p-3 bg-gray-100 dark:bg-gray-600 rounded-lg">
    <div className="flex items-center justify-center mb-1">
      {icon}
      <span className="font-bold text-gray-900 dark:text-white">{number}</span>
    </div>
    <p className="text-xs text-gray-600 dark:text-gray-300">{label}</p>
  </div>
);

const InstructorsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-16 min-h-screen bg-white dark:bg-gray-900"
    >
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('instructorsPage.header.title', "Bizning o'qituvchilar")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t(
                'instructorsPage.header.subtitle',
                "IT sohasining eng tajribali va professional mutaxassislari sizni o'qitadi"
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats2.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {t(stat.number)}
                </div>
                <div className="text-blue-100 font-medium">
                  {t(stat.labelKey)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instructors List */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {instructorss.map((instructor) => (
              <motion.div
                key={instructor.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative p-6 pb-0">
                  <div className="text-center mb-6">
                    <img
                      src={instructor.image}
                      alt={t(instructor.name)}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-1">
                      {t(instructor.name)}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {t(instructor.role_key)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t(instructor.specialization_key)}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <StatCard
                      icon={<BookOpen className="h-4 w-4 text-blue-600 mr-1" />}
                      number={instructor.courses}
                      label={t('labels.courses', 'Kurslar')}
                    />
                    <StatCard
                      icon={<Users className="h-4 w-4 text-blue-600 mr-1" />}
                      number={instructor.students}
                      label={t('labels.students', 'Talabalar')}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        {instructor.rating}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm ml-1">
                        {t('labels.rating', 'reyting')}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {t(instructor.experience_key)}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 lg:h-[8vh] text-sm mb-4 leading-relaxed overflow-hidden">
                    {t(instructor.bio_key)}
                  </p>

                  <div className="space-y-2 h-[12vh] ">
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-300 mb-2">
                      <Award className="h-3 w-3 mr-1 text-orange-500" />
                      <span className="font-medium">
                        {t('labels.achievements', 'Yutuqlari')}:
                      </span>
                    </div>
                    {(instructor.achievements_keys || []).map((key, index) => (
                      <div
                        key={index}
                        className="flex items-center  text-xs text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {t(key)}
                      </div>
                    ))}
                  </div>

                  <Link to={'/contact'}>
                    <button className="w-full mt-6 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                      {t('labels.enroll', 'Kursga yozdirish')}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('join.title', "O'qituvchi bo'lishni xohlaysizmi?")}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {t(
                'join.description',
                "IT sohasidagi tajribangizni boshqalar bilan bo'lishishni istasangiz, bizga qo'shiling!"
              )}
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl transition-colors">
              {t('join.button', 'Ariza qoldirish')}
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default InstructorsPage;
