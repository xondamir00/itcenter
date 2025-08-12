import { motion } from 'framer-motion';

import { statsData } from '../../constants/index';
import { containerVariants, itemVariants } from '../../type';
import { useTranslation } from 'react-i18next';



const Statistika = () => {
  const {t} = useTranslation()
  return (
    <section className="py-16 ">
      <div className="max-w-7xl dark:border-2 dark:border-white rounded-2xl dark:p-8 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group  hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold  mb-2">{t(stat.value)}</div>
                <div className=" font-medium">{t(stat.label)}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Statistika