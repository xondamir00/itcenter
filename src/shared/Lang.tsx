import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; 

import enFlag from "@/assets/images/flags/en.png";
import ruFlag from "@/assets/images/flags/ru.png";
import uzFlag from "@/assets/images/flags/uz.png";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} 
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25, 
        }}
      >
        <Select onValueChange={changeLanguage} className="w-44">
          <SelectTrigger className="text-lg font-medium p-3 border-2 border-gray-300 rounded-lg hover:border-gray-500 focus:ring-2 focus:ring-blue-600 transition-all duration-200">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>

          <SelectContent className="border-2 border-gray-300 rounded-md mt-1">
            <SelectItem
              value="en"
              className="flex items-center gap-3 p-2 text-sm hover:bg-gray-100 transition-colors"
            >
              <img
                src={enFlag}
                alt="English"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-gray-800">English</span>
            </SelectItem>
            <SelectItem
              value="ru"
              className="flex items-center gap-3 p-2 text-sm hover:bg-gray-100 transition-colors"
            >
              <img
                src={ruFlag}
                alt="Russian"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-gray-800">Русский</span>
            </SelectItem>
            <SelectItem
              value="uz"
              className="flex items-center gap-3 p-2 text-sm hover:bg-gray-100 transition-colors"
            >
              <img src={uzFlag} alt="Uzbek" className="w-6 h-6 rounded-full" />
              <span className="text-gray-800">O'zbekcha</span>
            </SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
