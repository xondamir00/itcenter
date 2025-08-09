import { useTranslation } from "react-i18next";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      value={i18n.language}
      onValueChange={(lang: string) => i18n.changeLanguage(lang)}
    >
      <SelectTrigger className="w-[180px] p-2 border rounded-lg">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ru">Русский</SelectItem>
        <SelectItem value="uz">O'zbekcha</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
