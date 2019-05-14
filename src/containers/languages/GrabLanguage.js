import languageList from './index';

export const getLanguages = () => {
    const selectedLanguage = localStorage.getItem('language');
    const { categories } = languageList[`${selectedLanguage}`]? 
    languageList[`${selectedLanguage}`][`${selectedLanguage}`]: languageList.English.English;
    return categories;
}