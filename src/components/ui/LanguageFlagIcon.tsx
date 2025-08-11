import { BR, US } from 'country-flag-icons/react/3x2';

interface LanguageFlagIconProps {
  language: 'pt' | 'en';
  className?: string;
}

export function LanguageFlagIcon({ language, className }: LanguageFlagIconProps) {
  if (language === 'pt') {
    return <BR title="Brasil" className={className} />;
  }
  return <US title="United States" className={className} />;
}