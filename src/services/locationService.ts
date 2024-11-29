import { getUserLocale } from './localeService';

export async function getUserLocation(): Promise<{ lat: number; lng: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export async function getLocalLanguage(): Promise<string> {
  try {
    // Fallback to browser locale detection instead of Google Maps
    const locale = getUserLocale();
    return getLanguageFromLocale(locale);
  } catch (error) {
    console.error('Error getting local language:', error);
    return 'en';
  }
}

function getLanguageFromLocale(locale: string): string {
  const languageMap: Record<string, string> = {
    'ta': 'ta', // Tamil
    'ml': 'ml', // Malayalam
    'kn': 'kn', // Kannada
    'te': 'te', // Telugu
    'mr': 'mr', // Marathi
    'gu': 'gu', // Gujarati
    'bn': 'bn', // Bengali
    'pa': 'pa', // Punjabi
    'hi': 'hi', // Hindi
    'en': 'en'  // English
  };

  const language = locale.split('-')[0].toLowerCase();
  return languageMap[language] || 'en';
}