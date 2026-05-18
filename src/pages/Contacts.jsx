import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '../styles/style.scss';
import Form from '../components/Form';
import DecorLayer from '../components/decor/DecorLayer';
import animScroll from '../utils/animScroll';
import React, { useEffect } from 'react';

const Container = styled.div`
	padding: 125px 0 86px;

	@media (max-width: 767.98px) {
		padding: 105px 0 56px;
	}
`;

const Header = styled.div`
	max-width: 790px;
	margin: 0 auto 38px;
	text-align: center;

	@media (max-width: 767.98px) {
		margin-bottom: 26px;
	}
`;

const Title = styled.div`
	font-size: 60px;
	font-weight: 800;
	letter-spacing: -0.05em;
	margin-bottom: 16px;

	@media (max-width: 767.98px) {
		font-size: 36px;
		margin-bottom: 14px;
	}
`;

const Subtitle = styled.p`
	max-width: 730px;
	margin: 0 auto;
	font-size: 18px;
	line-height: 1.75;
	opacity: 0.86;

	@media (max-width: 767.98px) {
		font-size: 16px;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: minmax(280px, 0.92fr) minmax(0, 1.08fr);
	gap: 24px;
	align-items: stretch;

	@media (max-width: 991.98px) {
		grid-template-columns: 1fr;
	}
`;

const InfoCard = styled.aside`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 28px;
	border-radius: 24px;
	background: var(--project-bg-card);
	border: 1px solid rgba(92, 98, 236, 0.18);
	box-shadow: 0 18px 46px rgba(0, 0, 0, 0.14);

	@media (max-width: 767.98px) {
		padding: 20px;
		border-radius: 20px;
	}
`;

const Eyebrow = styled.div`
	display: inline-flex;
	width: fit-content;
	align-items: center;
	gap: 8px;
	padding: 7px 12px;
	border-radius: 999px;
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	border: 1px solid rgba(92, 98, 236, 0.24);
	color: var(--projects-title);
	background: rgba(92, 98, 236, 0.08);
`;

const Dot = styled.span`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #5c62ec;
	box-shadow: 0 0 0 4px rgba(92, 98, 236, 0.13);
`;

const InfoTitle = styled.h2`
	margin: 18px 0 12px;
	font-size: 34px;
	line-height: 1.12;
	font-weight: 800;
	letter-spacing: -0.04em;
	color: var(--project-color);

	@media (max-width: 767.98px) {
		font-size: 28px;
	}
`;

const InfoText = styled.p`
	margin: 0;
	font-size: 16px;
	line-height: 1.72;
	opacity: 0.84;
	color: var(--project-color);
`;

const StatusCard = styled.div`
	margin-top: 22px;
	padding: 16px 18px;
	border-radius: 18px;
	border: 1px solid rgba(92, 98, 236, 0.16);
	background: rgba(92, 98, 236, 0.06);
`;

const StatusLabel = styled.div`
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	opacity: 0.68;
	color: var(--project-color);
`;

const StatusValue = styled.div`
	margin-top: 8px;
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 16px;
	font-weight: 700;
	color: var(--project-color);
`;

const StatusSignal = styled.span`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #5c62ec;
	box-shadow: 0 0 0 4px rgba(92, 98, 236, 0.14);
	flex: 0 0 auto;
`;

const MetaList = styled.div`
	margin-top: 22px;
	display: grid;
	gap: 12px;
`;

const MetaItem = styled.div`
	padding: 14px 16px;
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.025);
	border: 1px solid rgba(177, 178, 179, 0.12);
`;

const MetaLabel = styled.div`
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	opacity: 0.64;
	color: var(--project-color);
`;

const MetaValue = styled.div`
	margin-top: 6px;
	font-size: 15px;
	line-height: 1.6;
	color: var(--project-color);
`;

const ContactCards = styled.div`
	margin-top: 24px;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 12px;

	@media (max-width: 767.98px) {
		grid-template-columns: 1fr;
	}
`;

const ContactCard = styled.a`
	display: flex;
	align-items: center;
	gap: 12px;
	min-width: 0;
	padding: 15px;
	border-radius: 18px;
	text-decoration: none;
	color: var(--project-color);
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid rgba(177, 178, 179, 0.13);
	transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		border-color: rgba(92, 98, 236, 0.42);
		background: rgba(92, 98, 236, 0.08);
	}
`;

const ContactIcon = styled.span`
	width: 40px;
	height: 40px;
	flex: 0 0 40px;
	display: grid;
	place-items: center;
	border-radius: 14px;
	background: rgba(92, 98, 236, 0.12);
	color: #5c62ec;
	font-size: 18px;
	font-weight: 900;
`;

const ContactContent = styled.span`
	display: flex;
	min-width: 0;
	flex-direction: column;
`;

const ContactName = styled.span`
	font-size: 15px;
	font-weight: 800;
	line-height: 1.2;
`;

const ContactHint = styled.span`
	margin-top: 4px;
	font-size: 12px;
	line-height: 1.35;
	opacity: 0.62;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const FormCard = styled.div`
	display: flex;
	height: 100%;
	padding: 0;

	& > * {
		width: 100%;
	}

	border-radius: 22px;

	@media (max-width: 767.98px) {
		border-radius: 18px;
	}
`;

const Contacts = () => {
	const { t, i18n } = useTranslation();
	const isEnglish = (i18n.resolvedLanguage || '').toLowerCase().startsWith('en');

	useEffect(() => {
		animScroll();
	}, []);

	const contactCards = [
		{
			name: 'Telegram',
			hint: isEnglish ? 'Fastest way to reach me' : 'Самый быстрый способ связи',
			icon: '✈',
			link: 'https://t.me/sergey_web_ai',
			external: true,
		},
		{
			name: 'GitHub',
			hint: isEnglish ? 'Code and repositories' : 'Код и репозитории',
			icon: '{ }',
			link: 'https://github.com/kenform',
			external: true,
		},
		{
			name: isEnglish ? 'Email form' : 'Форма',
			hint: isEnglish ? 'Send a project message' : 'Сообщение по проекту',
			icon: '@',
			link: '#',
			external: false,
			scrollToForm: true,
		},
	];

	return (
		<Container className='projects__bg'>
			<DecorLayer variant='contacts' />
			<div className='__container'>
				<Header>
					<Title className='projects__title _anim-items _anim-no-hide anim_1'>
						{t('section.contacts.title')}
					</Title>

					<Subtitle className='project__color _anim-items _anim-no-hide anim_1'>
						{isEnglish
							? 'Have a website, landing page or portfolio idea? Send a short message — I will help turn it into a clean, responsive and client-ready interface.'
							: 'Есть идея сайта, лендинга или портфолио? Напишите коротко задачу — помогу превратить её в аккуратный, адаптивный и готовый к показу интерфейс.'}
					</Subtitle>
				</Header>

				<Grid>
					<InfoCard className='_anim-items _anim-no-hide anim_1'>
						<Eyebrow>
							<Dot />
							{isEnglish ? 'Available for projects' : 'Открыт к проектам'}
						</Eyebrow>

						<InfoTitle>
							{isEnglish ? 'Let’s discuss the task and choose the best format.' : 'Обсудим задачу и выберем лучший формат.'}
						</InfoTitle>

						<InfoText>
							{isEnglish
								? 'I can help with a new website, redesign, portfolio page, landing page, project polishing or responsive fixes. A rough idea is enough to start the conversation.'
								: 'Могу помочь с новым сайтом, редизайном, портфолио, лендингом, полировкой проекта или адаптивом. Для старта достаточно даже примерной идеи.'}
						</InfoText>

						<StatusCard>
							<StatusLabel>{isEnglish ? 'Reply time' : 'Скорость ответа'}</StatusLabel>
							<StatusValue>
								<StatusSignal />
								{isEnglish ? 'Usually within the day' : 'Обычно в течение дня'}
							</StatusValue>
						</StatusCard>

						<MetaList>
							<MetaItem>
								<MetaLabel>{isEnglish ? 'Best for' : 'Подходит для'}</MetaLabel>
								<MetaValue>
									{isEnglish
										? 'Landing pages, portfolio websites, business pages, UI polish'
										: 'Лендинги, портфолио, сайты услуг, UI-полировка'}
								</MetaValue>
							</MetaItem>

							<MetaItem>
								<MetaLabel>{isEnglish ? 'What to send' : 'Что написать'}</MetaLabel>
								<MetaValue>
									{isEnglish
										? 'Goal, niche, examples you like and preferred contact method'
										: 'Цель, нишу, примеры которые нравятся и удобный способ связи'}
								</MetaValue>
							</MetaItem>
						</MetaList>

						<ContactCards>
							{contactCards.map((item) => (
								<ContactCard
									key={item.name}
									href={item.link}
									target={item.external ? '_blank' : undefined}
									rel={item.external ? 'noreferrer' : undefined}
									onClick={(event) => {
										if (item.scrollToForm) {
											event.preventDefault();
											document.getElementById('contact-form')?.scrollIntoView({
												behavior: 'smooth',
												block: 'start',
											});
										}
									}}
								>
									<ContactIcon>{item.icon}</ContactIcon>
									<ContactContent>
										<ContactName>{item.name}</ContactName>
										<ContactHint>{item.hint}</ContactHint>
									</ContactContent>
								</ContactCard>
							))}
						</ContactCards>
					</InfoCard>

					<FormCard id='contact-form' className='_anim-items _anim-no-hide anim_1'>
						<Form />
					</FormCard>
				</Grid>
			</div>
		</Container>
	);
};

export default Contacts;
