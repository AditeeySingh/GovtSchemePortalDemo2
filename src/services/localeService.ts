export function getUserLocale(): string {
  // Try to get the language from navigator
  const navigatorLocale = 
    navigator.languages?.[0] || 
    navigator.language || 
    'en';

  return navigatorLocale;
}

export function getStateLanguage(state: string): string {
  const stateLanguageMap: Record<string, string> = {
    'Tamil Nadu': 'ta',
    'Kerala': 'ml',
    'Karnataka': 'kn',
    'Andhra Pradesh': 'te',
    'Maharashtra': 'mr',
    'Gujarat': 'gu',
    'West Bengal': 'bn',
    'Punjab': 'pa',
    'Bihar': 'hi',
    'Uttar Pradesh': 'hi',
    'Rajasthan': 'hi',
    'Madhya Pradesh': 'hi',
    'Haryana': 'hi',
    'Delhi': 'hi'
  };

  return stateLanguageMap[state] || 'en';
}