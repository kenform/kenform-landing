import { useTranslation } from 'react-i18next';
import './style.scss';
import DecorLayer from '../decor/DecorLayer';

const Footer = () => {
        const { t } = useTranslation();
        const year = new Date().getFullYear();

        return (
                <footer className='footer'>
                        <DecorLayer variant='footer' />
                        <div className='footer__container'>
                                <div className='footer__content'>
                                        <div className='footer__brand'>
                                                <a className='footer__logo' href='#top'>
                                                        Sergey
                                                </a>
                                                <p>{t('footer.description')}</p>
                                        </div>

                                        <nav className='footer__nav' aria-label={t('a11y.footerNav')}>
                                                <a href='#top'>{t('footer.home')}</a>
                                                <a href='#projects'>{t('footer.projects')}</a>
                                                <a href='#reviews'>{t('footer.reviews')}</a>
                                                <a href='#contacts'>{t('footer.contacts')}</a>
                                                <a href='https://github.com/kenform' target='_blank' rel='noreferrer'>
                                                        {t('footer.github')}
                                                </a>
                                        </nav>

                                        <div className='footer__bottom'>
                                                <p>{t('footer.rights', { year })}</p>
                                                <p>{t('footer.built')}</p>
                                                <p>{t('footer.crafted')}</p>
                                        </div>
                                </div>
                        </div>
                </footer>
        );
};

export default Footer;
