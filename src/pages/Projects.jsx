import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import '../styles/style.scss';
import ProjectCard from '../components/Cards/ProjectCards';
import DecorLayer from '../components/decor/DecorLayer';
import { projects } from '../data/constants';

import animScroll from '../utils/animScroll';

const Container = styled.div`
	padding: 150px 0px 100px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 12px;

	@media (max-width: 991.98px) {
		flex-direction: column;
	}
`;

const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 600;

	@media (max-width: 767.98px) {
		font-size: 32px;
	}
`;

const Desc = styled.div`
	font-size: 18px;
	line-height: 1.6;
	text-align: center;
	max-width: 600px;
	transition: all 0.8s ease 0.1s;

	@media (max-width: 767.98px) {
		margin-top: 12px;
		font-size: 16px;
	}
`;

const ToggleButtonGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	border: 1.5px solid #5c62ec;
	color: #5c62ec;
	align-items: center;
	font-size: 16px;
	border-radius: 12px;
	font-weight: 500;
	margin: 22px 0px;
	transition: all 0.8s ease 0.2s;
	overflow: hidden;

	@media (max-width: 767.98px) {
		font-size: 14px;
		max-width: 92vw;
	}
`;

const ToggleButton = styled.button`
	cursor: pointer;
	border: 0;
	background: transparent;
	color: inherit;
	font: inherit;
	line-height: 1.2;

	@media (min-width: 767.98px) {
		padding: 15px 24px;
	}

	@media (max-width: 767.98px) {
		padding: 14px 13px;
		flex: 1 1 auto;
	}

	&:not(:last-child) {
		border-right: 1px solid #5c62ec;
	}

	transition: background-color 0.2s ease, color 0.2s ease;

	&:hover {
		background: rgba(92, 98, 236, 0.08);
	}

	&:focus-visible {
		outline: 2px solid rgba(92, 98, 236, 0.45);
		outline-offset: -2px;
	}

	${({ $active }) =>
		$active &&
		`
			background: rgba(92, 98, 236, 0.16);
			color: var(--projects-title);
		`}
`;

const CardContainer = styled.div`
	transition: all 0.8s ease 0.3s;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 32px;
	grid-auto-rows: minmax(100px, auto);

	@media (max-width: 991.98px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 767.98px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const FILTERS = [
	{ value: 'all', label: 'projects.toggle-button.all' },
	{ value: 'store', label: 'projects.toggle-button.store' },
	{ value: 'landing', label: 'projects.toggle-button.landing' },
	{ value: 'mini', label: 'projects.toggle-button.mini' },
	{ value: 'new', label: 'projects.toggle-button.new' },
];

const NEW_PROJECT_TITLES = new Set([
	'Birthday Greeting Site',
	'Spring Greeting Site',
	'Eragon Exchange',
	'BARBER Landing',
	'Library Landing',
	'Fagot',
]);

const getFilteredProjects = (items, filter) => {
	if (filter === 'all') return items.filter((item) => item.category !== 'other');
	if (filter === 'mini') return items.filter((item) => item.category === 'other');
	if (filter === 'new') return items.filter((item) => NEW_PROJECT_TITLES.has(item.title));

	return items.filter((item) => item.category === filter);
};

const Projects = ({ openModal, setOpenModal }) => {
	const { t } = useTranslation();
	const [toggle, setToggle] = useState('all');

	useEffect(() => {
		animScroll();
	}, []);

	const visibleProjects = getFilteredProjects(projects, toggle);

	return (
		<Container className='projects__bg' id='projects'>
			<DecorLayer variant='projects' />
			<Wrapper className='__container'>
				<Title className='projects__title _anim-items _anim-no-hide anim_1'>
					{t('section.projects.title')}
				</Title>

				<Desc className='project__color _anim-items _anim-no-hide anim_1'>
					{t('section.projects.suptitle')}
				</Desc>

				<ToggleButtonGroup className='_anim-items _anim-no-hide anim_1'>
					{FILTERS.map((filter) => (
						<ToggleButton
							key={filter.value}
							type='button'
							$active={toggle === filter.value}
							aria-pressed={toggle === filter.value}
							onClick={() => setToggle(filter.value)}
						>
							{t(filter.label)}
						</ToggleButton>
					))}
				</ToggleButtonGroup>

				<CardContainer className='_anim-items _anim-no-hide anim_1'>
					{visibleProjects.map((project, id) => (
						<ProjectCard
							key={`${project.title}-${id}`}
							project={project}
							openModal={openModal}
							setOpenModal={setOpenModal}
						/>
					))}
				</CardContainer>
			</Wrapper>
		</Container>
	);
};

export default Projects;
