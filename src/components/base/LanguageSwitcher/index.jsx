import React from 'react';
import { ReactSVG as SVG } from 'react-svg';
import { useTranslation } from 'react-i18next';
import './style.scss';

export const locales = {
	en: { title: 'en' },
	ru: { title: 'ru' },
};

export const LanguageSwitcher = () => {
	const { t, i18n } = useTranslation();

	const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en';
	const nextLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

	const handleChangeLanguage = async () => {
		localStorage.setItem('i18nextLng', nextLanguage);
		await i18n.changeLanguage(nextLanguage);
	};

	return (
		<div className='language__switcher'>
			<button
				type='button'
				className='language__button'
				onClick={handleChangeLanguage}
				aria-label={t('language.switchTo', { lang: nextLanguage.toUpperCase() })}
				title={t('language.switchTo', { lang: nextLanguage.toUpperCase() })}
			>
				<SVG src={`${process.env.PUBLIC_URL}/icons/language.svg`} />
				<span className='language__text'>{currentLanguage.toUpperCase()}</span>
			</button>
		</div>
	);
};

export default LanguageSwitcher;
