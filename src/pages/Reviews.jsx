import { useTranslation } from 'react-i18next';
import ReviewsSection from '../components/Reviews';

export default function Reviews() {
  const { i18n } = useTranslation();
  const language = i18n.language?.startsWith('ru') ? 'ru' : 'en';

  return <ReviewsSection language={language} />;
}
