import styled from 'styled-components';

export const Container = styled.section`
	position: relative;
	z-index: 1;
	padding: 10px 0 4px;
`;

export const Wrapper = styled.div`
	width: 100%;
`;

export const Header = styled.div`
	max-width: 720px;
	margin: 0 auto 30px;
	text-align: center;

	@media (max-width: 768px) {
		margin-bottom: 22px;
	}
`;

export const Title = styled.div`
	font-size: 56px;
	text-align: center;
	font-weight: 800;
	margin-bottom: 12px;
	letter-spacing: -0.045em;

	@media (max-width: 768px) {
		font-size: 38px;
	}
`;

export const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	max-width: 680px;
	margin: 0 auto;
	font-weight: 500;
	line-height: 1.62;
	opacity: 0.82;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

export const SkillsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 18px;
	align-items: stretch;

	@media (max-width: 1050px) {
		grid-template-columns: 1fr;
		max-width: 720px;
		margin: 0 auto;
	}
`;

export const SkillCard = styled.article`
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	min-height: 245px;
	padding: 24px;
	border-radius: 22px;
	background:
		linear-gradient(135deg, rgba(92, 98, 236, 0.075), transparent 45%),
		var(--project-bg-card);
	border: 1px solid rgba(92, 98, 236, 0.2);
	box-shadow: 0 16px 42px rgba(0, 0, 0, 0.16);
	transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;

	&::before {
		content: '';
		position: absolute;
		top: 20px;
		right: 22px;
		width: 34px;
		height: 1px;
		background: rgba(92, 98, 236, 0.32);
	}

	&:hover {
		transform: translateY(-3px);
		border-color: rgba(92, 98, 236, 0.38);
		box-shadow: 0 20px 48px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		min-height: auto;
		padding: 20px;
		border-radius: 18px;
	}
`;

export const SkillTop = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 14px;
	margin-bottom: 20px;
	padding-right: 32px;
`;

export const SkillIcon = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	flex: 0 0 44px;
	width: 44px;
	height: 44px;
	border-radius: 14px;
	color: #fff;
	background: rgba(92, 98, 236, 0.22);
	border: 1px solid rgba(92, 98, 236, 0.36);
	font-size: 13px;
	font-weight: 900;
	letter-spacing: -0.04em;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
`;

export const SkillContent = styled.div`
	min-width: 0;
`;

export const SkillTitle = styled.h2`
	font-size: 23px;
	font-weight: 850;
	color: var(--project-color);
	margin-bottom: 6px;
	letter-spacing: -0.028em;
	line-height: 1.15;
`;

export const SkillMeta = styled.div`
	max-width: 260px;
	color: var(--project-color);
	font-size: 13px;
	font-weight: 700;
	line-height: 1.4;
	opacity: 0.58;
`;

export const SkillList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 9px;
	margin-top: auto;
`;

export const SkillItem = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 8px 11px;
	border-radius: 999px;
	color: var(--project-color);
	background: rgba(255, 255, 255, 0.028);
	border: 1px solid rgba(177, 178, 179, 0.18);
	font-size: 13px;
	font-weight: 750;
	line-height: 1.2;
	transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

	&::before {
		content: '';
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--purple);
		opacity: 0.78;
	}

	&:hover {
		transform: translateY(-1px);
		background: rgba(92, 98, 236, 0.1);
		border-color: rgba(92, 98, 236, 0.34);
	}
`;

// Compatibility exports for old imports.
export const SkillsContainer = SkillsGrid;
export const Skill = SkillCard;
export const SkillHead = SkillTop;
export const SkillTitleWrap = SkillContent;

export const SkillFooter = styled.div`
	display: none;
`;

export const SkillCounter = styled.span`
	display: none;
`;

export const SkillImage = styled.img`
	display: none;
`;

export const SkillBadge = styled.span`
	display: none;
`;
