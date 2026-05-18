import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';
import Button from '../base/Button';
import Theme from '../Theme';
import LanguageSwitcher from '../base/LanguageSwitcher';

const Header = () => {
        const { t } = useTranslation();
        const [click, setClick] = useState(false);

        const closeMobileMenu = () => {
                setClick(false);
                document.body.classList.remove('_lock');
        };

        const onClickIcon = () => {
                setClick((value) => {
                        const next = !value;
                        document.body.classList.toggle('_lock', next);
                        return next;
                });
        };

        const goTo = (event, target) => {
                event.preventDefault();
                closeMobileMenu();

                const element = document.querySelector(target);
                if (!element) return;

                const headerOffset = 88;
                const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;

                window.scrollTo({
                        top,
                        behavior: 'smooth',
                });
        };

        useEffect(() => {
                const onKeyDown = (event) => {
                        if (event.key === 'Escape') closeMobileMenu();
                };

                window.addEventListener('keydown', onKeyDown);

                return () => {
                        window.removeEventListener('keydown', onKeyDown);
                        document.body.classList.remove('_lock');
                };
        }, []);

        const links = [
                { href: '.section__intro', label: t('header.About') },
                { href: '#projects', label: t('header.projects') },
                { href: '#reviews', label: t('header.reviews') },
                { href: '#contacts', label: t('header.contacts') },
        ];

        return (
                <div className='header landing-header'>
                        <div className={`header__container menu ${click ? 'menu-open' : ''}`}>
                                <a href='#top' className='logo' onClick={(event) => goTo(event, '.section__intro')}>
                                        <div className='logo__body'>
                                                <div className='logo__icon'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'>
                                                                <path
                                                                        fill='#5c62ec'
                                                                        d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17 5-34.7 22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
                                                                />
                                                        </svg>
                                                </div>

                                                <div className='logo__title'>
                                                        <p>{t('header.logo-title')}</p>
                                                </div>
                                        </div>
                                </a>

                                <Theme />

                                <button
                                        type='button'
                                        className='menu__icon icon-menu'
                                        aria-label={t('a11y.burger')}
                                        aria-expanded={click}
                                        onClick={onClickIcon}
                                >
                                        <span></span>
                                </button>

                                <nav className='menu__body'>
                                        <ul className='menu__list'>
                                                {links.map((link) => (
                                                        <li className='menu__item' key={link.href}>
                                                                <a href={link.href} onClick={(event) => goTo(event, link.href)} className='menu__link'>
                                                                        {link.label}
                                                                </a>
                                                        </li>
                                                ))}

                                                <li>
                                                        <Button
                                                                modifier='header__button menu-list__body'
                                                                link='https://github.com/kenform'
                                                                icon='github'
                                                                text={t('header.Button')}
                                                                alt={t('a11y.githubIcon')}
                                                        />
                                                </li>
                                        </ul>
                                </nav>

                                <Button
                                        modifier='header__button'
                                        link='https://github.com/kenform'
                                        icon='github'
                                        text={t('header.Button')}
                                        alt={t('a11y.githubIcon')}
                                />

                                <LanguageSwitcher />
                        </div>
                </div>
        );
};

export default Header;
