import { Link } from "react-router-dom"
import { itemVariants } from "../../type"
import { ArrowRight } from "lucide-react"
import {motion} from 'framer-motion'
import { useTranslation } from "react-i18next"

const Cta = () => {
  const {t} = useTranslation()
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          {t("home.ctaname")}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
            {t('home.ctasub')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl transition-colors"
              >
             {t("home.ctalink")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl transition-colors"
              >
                {t("home.ctainfo")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default Cta