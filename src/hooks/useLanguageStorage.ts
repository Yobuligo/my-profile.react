import { Value } from "../core/types/Value";
import { Language } from "../types/Language";
import { useLocalStorage } from "./useLocalStorage";

export const useLanguageStorage = (): Value<Language> => {
  const [language, setLanguage] = useLocalStorage(
    "my-profile.language",
    Language.EN
  );
  return [language, setLanguage];
};
