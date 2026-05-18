import '../styles/style.scss';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

import animScroll from '../utils/animScroll';
import Skills from '../components/Skills';
import DecorLayer from '../components/decor/DecorLayer';
const Home = () => {
	const { t } = useTranslation();
	const [isMobileHero, setIsMobileHero] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 767.98px)').matches);
	useEffect(() => {
		animScroll();
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const mq = window.matchMedia('(max-width: 767.98px)');
		const updateMobileHero = () => setIsMobileHero(mq.matches);
		updateMobileHero();

		if (mq.addEventListener) mq.addEventListener('change', updateMobileHero);
		else mq.addListener(updateMobileHero);

		return () => {
			if (mq.removeEventListener) mq.removeEventListener('change', updateMobileHero);
			else mq.removeListener(updateMobileHero);
		};
	}, []);
	return (
		<div>
			<main className='main'>
				<div className='section__intro'>
					<DecorLayer variant='intro' />
					<div className='intro __container fullscreen'>
						<div className='intro__body _anim-items _anim-no-hide anim_1'>
							<h1 className='intro__title'>
								{t('intro.title')}
								<br />
								<span>
									{t('intro.IM')}
									{isMobileHero ? (
																<span className='intro__static-accent'>{t('intro.typeWritter-frontend')}</span>
															) : (
																<Typewriter
																	options={{
																		strings: [
																			t('intro.typeWritter-programmer'),
																			t('intro.typeWritter-frontend'),
																		],
																		autoStart: true,
																		loop: true,
																		delay: 65,
																		deleteSpeed: 35,
																	}}
																/>
															)}
								</span>
							</h1>

							<div className='intro__text'>
								<p>{t('intro.text')}</p>
							</div>
						</div>

						<div className='intro__image _anim-items _anim-no-hide anim_2'>
							<img src='Intro__profile.png' alt={t('a11y.profile')} />
						</div>
					</div>
				</div>
				<div className='section section__skills'>
					<DecorLayer variant='skills' />
					<Skills />
				</div>
				{/* <div className='section section__experience'>
					<Experience />
				</div> */}
				{/* <div className='section section__education'>
					<Education />
				</div> */}
			</main>
		</div>
	);
};

export default Home;
