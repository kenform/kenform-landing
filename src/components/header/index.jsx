import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';
import Theme from '../Theme';
import LanguageSwitcher from '../base/LanguageSwitcher';

const Header = () => {
        const { t } = useTranslation();
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const links = [
                { href: '.section__intro', label: t('header.About') },
                { href: '#projects', label: t('header.projects') },
                { href: '#reviews', label: t('header.reviews') },
                { href: '#contacts', label: t('header.contacts') },
        ];

        const closeMenu = () => {
                setIsMenuOpen(false);
                document.body.classList.remove('_lock');
        };

        const toggleMenu = () => {
                setIsMenuOpen((value) => {
                        const next = !value;
                        document.body.classList.toggle('_lock', next);
                        return next;
                });
        };

        const goTo = (event, target) => {
                event.preventDefault();
                closeMenu();

                const element = document.querySelector(target);
                if (!element) return;

                const headerOffset = 86;
                const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;

                window.scrollTo({
                        top,
                        behavior: 'smooth',
                });
        };

        useEffect(() => {
                const onKeyDown = (event) => {
                        if (event.key === 'Escape') closeMenu();
                };

                window.addEventListener('keydown', onKeyDown);

                return () => {
                        window.removeEventListener('keydown', onKeyDown);
                        document.body.classList.remove('_lock');
                };
        }, []);

        return (
                <header className='header landing-header'>
                        <div className='header__container landing-header__inner'>
                                <a href='#top' className='logo landing-logo' onClick={(event) => goTo(event, '.section__intro')}>
                                        <div className='logo__body'>
                                                <div className='logo__icon'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 640 512'>
                                                                <path
                                                                        fill='#5c62ec'
                                                                        d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'
                                                                />
                                                        </svg>
                                                </div>
                                        </div>
                                </a>

                                <nav className='landing-desktop-nav' aria-label='Main navigation'>
                                        {links.map((link) => (
                                                <a href={link.href} key={link.href} onClick={(event) => goTo(event, link.href)}>
                                                        {link.label}
                                                </a>
                                        ))}
                                </nav>

                                <div className='landing-header__actions'>
                                        <Theme />
                                        <LanguageSwitcher />

                                        <button
                                                type='button'
                                                className={`landing-burger ${isMenuOpen ? 'is-active' : ''}`}
                                                aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                                                aria-expanded={isMenuOpen}
                                                onClick={toggleMenu}
                                        >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                        </button>
                                </div>
                        </div>

                        <div className={`landing-menu-backdrop ${isMenuOpen ? 'is-open' : ''}`} onClick={closeMenu}></div>

                        <aside className={`landing-mobile-menu ${isMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMenuOpen}>
                                <div className='landing-mobile-menu__top'>
                                        <a href='#top' className='landing-mobile-menu__logo' onClick={(event) => goTo(event, '.section__intro')}>
                                                Sergey
                                        </a>

                                        <button type='button' className='landing-mobile-menu__close' aria-label='Закрыть меню' onClick={closeMenu}>
                                                ×
                                        </button>
                                </div>

                                <nav className='landing-mobile-menu__links'>
                                        {links.map((link) => (
                                                <a href={link.href} key={link.href} onClick={(event) => goTo(event, link.href)}>
                                                        {link.label}
                                                </a>
                                        ))}
                                </nav>

                                <a className='landing-mobile-menu__github' href='https://github.com/kenform' target='_blank' rel='noreferrer' onClick={closeMenu}>
                                        GitHub
                                </a>
                        </aside>
                </header>
        );
};

export default Header;
