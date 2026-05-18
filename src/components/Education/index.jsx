import { useTranslation } from 'react-i18next';
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import '../../styles/style.scss';
import { Container, Wrapper, Title, Desc, TimelineSection } from './style.js';

const index = () => {
	return (
		<Container id='education'>
			<Wrapper className='__container'>
				<Title className='skills-title'>{t('labels.education')}</Title>
				<Desc className='skills-description'>
					My education has been a journey of self-discovery and growth. My educational details are
					as follows.
				</Desc>
				<TimelineSection>
					<Timeline>
						{education.map((education, index) => (
							<TimelineItem>
								<TimelineContent sx={{ py: '12px', px: 2 }}>
									<EducationCard education={education} />
								</TimelineContent>
								<TimelineSeparator>
									<TimelineDot variant='outlined' color='secondary' />
									{index !== experiences.length && (
										<TimelineConnector style={{ background: '#5c62ec' }} />
									)}
								</TimelineSeparator>
							</TimelineItem>
						))}
					</Timeline>
				</TimelineSection>
			</Wrapper>
		</Container>
	);
};

export default index;
