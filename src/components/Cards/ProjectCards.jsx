import React from 'react';
import styled from 'styled-components';
import '../../styles/style.scss';
import { useTranslation } from 'react-i18next';
import { locales } from '../../components/base/LanguageSwitcher/index';

const accents = ['#5c62ec', '#22d3ee', '#a855f7', '#f59e0b', '#10b981', '#fb7185', '#38bdf8', '#f97316'];

const getAccent = (project) => {
	const source = `${project?.title || ''}${project?.category || ''}`;
	const sum = source.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return accents[sum % accents.length];
};

const Card = styled.article`
	position: relative;
	width: 100%;
	max-width: 350px;
	min-height: 520px;
	cursor: pointer;
	border-radius: 24px;
	overflow: hidden;
	padding: 18px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	background:
		radial-gradient(circle at top right, var(--accent-soft), transparent 34%),
		linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.025));
	border: 1px solid rgba(255, 255, 255, 0.12);
	box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
	transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		border-radius: inherit;
		padding: 1px;
		background: linear-gradient(135deg, var(--accent), transparent 34%, rgba(255, 255, 255, 0.12));
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		opacity: 0.75;
	}

	&::after {
		content: '';
		position: absolute;
		left: 18px;
		top: 18px;
		width: 52px;
		height: 4px;
		border-radius: 999px;
		background: var(--accent);
		box-shadow: 0 0 22px var(--accent);
		opacity: 0.9;
	}

	&:hover {
		transform: translateY(-10px);
		border-color: var(--accent);
		box-shadow: 0 28px 90px rgba(0, 0, 0, 0.32), 0 0 32px var(--accent-soft);
	}

	@media (max-width: 767.98px) {
		max-width: 100%;
		min-height: auto;
		border-radius: 20px;
		padding: 16px;
	}
`;

const Visual = styled.div`
	position: relative;
	width: 100%;
	height: 190px;
	border-radius: 18px;
	overflow: hidden;
	background: linear-gradient(135deg, var(--accent-soft), rgba(92, 98, 236, 0.08));
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 18px 40px rgba(0, 0, 0, 0.22);

	&::before {
		display: none;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	transform: scale(1.01);
	transition: transform 0.45s ease;

	${Card}:hover & {
		transform: scale(1.055);
	}
`;

const Tags = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 8px;
`;

const Tag = styled.span`
	font-size: 11px;
	font-weight: 800;
	color: var(--accent);
	background-color: var(--accent-soft);
	border: 1px solid var(--accent-soft);
	padding: 5px 9px;
	border-radius: 999px;
`;

const Details = styled.div`
	line-height: 1.55;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 6px;
	padding: 0 2px;
`;

const Title = styled.div`
	font-size: 21px;
	font-weight: 800;
	letter-spacing: -0.02em;
	overflow: hidden;
	display: -webkit-box;
	max-width: 100%;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
`;

const Date = styled.div`
	font-size: 12px;
	font-weight: 700;
	opacity: 0.7;
`;

const Description = styled.div`
	font-weight: 400;
	overflow: hidden;
	margin-top: 4px;
	display: -webkit-box;
	font-size: 15px;
	max-width: 100%;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	opacity: 0.86;
`;

const CardFooter = styled.div`
	margin-top: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	padding-top: 6px;
`;

const Category = styled.span`
	font-size: 12px;
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: var(--accent);
`;

const OpenHint = styled.span`
	font-size: 13px;
	font-weight: 800;
	opacity: 0.82;
`;

const ProjectCards = ({ project, setOpenModal }) => {
	const { t, i18n } = useTranslation();
	const engLanguage = locales['en'].title;
	const accent = getAccent(project);
	const isEnglish = i18n.resolvedLanguage === engLanguage;
	const categoryLabels = {
		en: { store: 'Store', landing: 'Landing', other: 'Mini project' },
		ru: { store: 'Магазин', landing: 'Лендинг', other: 'Мини-проект' },
	};
	const categoryLabel = categoryLabels[isEnglish ? 'en' : 'ru'][project.category] || project.category;

	const openProject = () => {
		setOpenModal({ state: true, project });
	};

	return (
		<Card
			className='projects__bg_card'
			style={{ '--accent': accent, '--accent-soft': `${accent}28` }}
			onClick={openProject}
			onKeyDown={(event) => {
				if (event.key === 'Enter') openProject();
			}}
			role='button'
			tabIndex={0}
		>
			<Visual>
				<Image src={process.env.PUBLIC_URL + '/' + project.image} alt={t('a11y.projectPreview', { title: project.title })} />
			</Visual>

			<Tags>
				{project.tags?.slice(0, 6).map((tag, index) => (
					<Tag key={index}>{tag}</Tag>
				))}
			</Tags>

			<Details className='project__color'>
				<Title>{project.title}</Title>
				<Date>{isEnglish ? project?.dateEng : project?.dateRu}</Date>
				<Description>
					{isEnglish ? project?.descriptionEng : project?.descriptionRu}
				</Description>
			</Details>

			<CardFooter className='project__color'>
				<Category>{categoryLabel}</Category>
				<OpenHint>{t('labels.openCase')}</OpenHint>
			</CardFooter>
		</Card>
	);
};

export default ProjectCards;
