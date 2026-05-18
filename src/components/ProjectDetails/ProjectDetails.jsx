import React, { useEffect } from 'react';
import { CloseRounded, GitHub, LinkedIn, Visibility } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { locales } from '../base/LanguageSwitcher/index';
import { Modal } from '@mui/material';
import '../../styles/style.scss';

import {
	Container,
	Wrapper,
	Title,
	Desc,
	Image,
	Date,
	Tags,
	Tag,
	Label,
	Members,
	Member,
	MemberImage,
	MemberName,
	ButtonGroup,
	Button,
} from './ProjectDStyles';

const ProjectDetails = ({ openModal, setOpenModal }) => {
	const project = openModal?.project;
	const { t, i18n } = useTranslation();
	const engLanguage = locales['en'].title;

	const unlockPageScroll = () => {
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
		document.body.classList.remove('MuiModal-open');
	};

	const closeModal = () => {
		unlockPageScroll();
		setOpenModal({ state: false, project: null });
	};

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') closeModal();
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			unlockPageScroll();
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	if (!project) return null;

	const description = i18n.resolvedLanguage === engLanguage ? project?.descriptionEng : project?.descriptionRu;
	const date = i18n.resolvedLanguage === engLanguage ? project?.dateEng : project?.dateRu;
	const imageSrc = project?.image ? `${process.env.PUBLIC_URL}/${project.image}` : '';

	return (
		<Modal open={true} onClose={closeModal}>
			<Container
				onClick={(event) => {
					if (event.target === event.currentTarget) closeModal();
				}}
			>
				<Wrapper className='projects__bg' onClick={(event) => event.stopPropagation()}>
					<CloseRounded
						className='project__color'
						role='button'
						aria-label={t('labels.close', 'Close')}
						tabIndex={0}
						style={{
							position: 'absolute',
							top: '12px',
							right: '14px',
							cursor: 'pointer',
							width: '42px',
							height: '42px',
							zIndex: 2,
						}}
						onClick={closeModal}
						onKeyDown={(event) => {
							if (event.key === 'Enter') closeModal();
						}}
					/>

					{imageSrc && <Image src={imageSrc} alt={project?.title} />}

					<Title className='project__color'>{project?.title}</Title>
					<Date>{date}</Date>

					<Tags>
						{project?.tags?.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</Tags>

					<Desc className='project__color'>{description}</Desc>

					{project.member && (
						<>
							<Label>{t('labels.members')}</Label>
							<Members>
								{project?.member.map((member) => (
									<Member key={member.name}>
										<MemberImage src={member.img} alt={member.name} />
										<MemberName>{member.name}</MemberName>

										<a href={member.github} target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
											<GitHub />
										</a>

										<a href={member.linkedin} target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
											<LinkedIn />
										</a>
									</Member>
								))}
							</Members>
						</>
					)}

					<ButtonGroup>
						{project?.github && (
							<Button href={project?.github} target='_blank' rel='noreferrer'>
								<GitHub />
								<p>
									<span className='hide'> {t('projects.details.buttons.view-code1')}</span>
									{t('projects.details.buttons.view-code2')}
								</p>
							</Button>
						)}

						{project?.webapp && (
							<Button href={project?.webapp} target='_blank' rel='noreferrer'>
								<Visibility />
								<p>
									{t('projects.details.buttons.live-app1')}
									<span className='hide'> {t('projects.details.buttons.live-app2')}</span>
								</p>
							</Button>
						)}
					</ButtonGroup>
				</Wrapper>
			</Container>
		</Modal>
	);
};

export default ProjectDetails;
