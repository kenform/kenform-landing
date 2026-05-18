import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/style.scss';
import {
	Container,
	Wrapper,
	Header,
	Title,
	Desc,
	SkillsGrid,
	SkillCard,
	SkillTop,
	SkillIcon,
	SkillContent,
	SkillTitle,
	SkillMeta,
	SkillList,
	SkillItem,
} from './SkillStyles.js';
import animScroll from '../../utils/animScroll';

const skillGroups = {
	en: [
		{
			title: 'Frontend',
			meta: 'Layout, logic and responsive interfaces',
			icon: '</>',
			items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Redux Toolkit', 'Responsive UI'],
		},
		{
			title: 'Frameworks & UI',
			meta: 'Modern landing pages and visual polish',
			icon: 'UI',
			items: ['Next.js', 'Vite', 'Tailwind CSS', 'Figma', 'Animations', 'Adaptive layout', 'Design systems'],
		},
		{
			title: 'Workflow',
			meta: 'Clean delivery and AI-assisted development',
			icon: '{}',
			items: ['Git', 'GitHub', 'Gulp', 'REST API', 'Deploy', 'Code cleanup', 'AI-assisted workflow', 'QA checklist'],
		},
	],
	ru: [
		{
			title: 'Frontend',
			meta: 'Вёрстка, логика и адаптивные интерфейсы',
			icon: '</>',
			items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Redux Toolkit', 'Адаптив'],
		},
		{
			title: 'Frameworks & UI',
			meta: 'Современные лендинги и визуальная полировка',
			icon: 'UI',
			items: ['Next.js', 'Vite', 'Tailwind CSS', 'Figma', 'Анимации', 'Mobile-first', 'Design system'],
		},
		{
			title: 'Workflow',
			meta: 'Чистая сборка и AI-assisted разработка',
			icon: '{}',
			items: ['Git', 'GitHub', 'Gulp', 'REST API', 'Deploy', 'Чистка кода', 'AI workflow', 'QA-чеклист'],
		},
	],
};

const Skills = () => {
	const { t, i18n } = useTranslation();
	const isRu = (i18n.resolvedLanguage || '').toLowerCase().startsWith('ru');
	const groups = isRu ? skillGroups.ru : skillGroups.en;

	useEffect(() => {
		animScroll();
	}, []);

	return (
		<Container className='skills' id='skills'>
			<Wrapper className='__container'>
				<Header>
					<Title className='projects__title _anim-items _anim-no-hide anim_1'>
						{t('section.skills.title')}
					</Title>

					<Desc className='project__color _anim-items _anim-no-hide anim_1'>
						{isRu
							? 'Небольшой, практичный стек для лендингов, адаптивных интерфейсов и аккуратной доводки проектов.'
							: 'A compact, practical stack for landing pages, responsive interfaces and clean project polish.'}
					</Desc>
				</Header>

				<SkillsGrid>
					{groups.map((group) => (
						<SkillCard key={group.title} className='_anim-items _anim-no-hide anim_2'>
							<SkillTop>
								<SkillIcon>{group.icon}</SkillIcon>

								<SkillContent>
									<SkillTitle>{group.title}</SkillTitle>
									<SkillMeta>{group.meta}</SkillMeta>
								</SkillContent>
							</SkillTop>

							<SkillList>
								{group.items.map((item) => (
									<SkillItem key={item}>
										<span>{item}</span>
									</SkillItem>
								))}
							</SkillList>
						</SkillCard>
					))}
				</SkillsGrid>
			</Wrapper>
		</Container>
	);
};

export default Skills;
