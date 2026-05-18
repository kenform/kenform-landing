import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: 12px;
`;

export const ContactForm = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 28px;
	border-radius: 22px;
	background: var(--project-bg-card);
	border: 1px solid rgba(255, 255, 255, 0.08);
	box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
	transition: border-color 0.2s ease, box-shadow 0.2s ease;
	gap: 16px;

	@media (max-width: 767.98px) {
		padding: 20px;
		border-radius: 18px;
		gap: 14px;
	}
`;

export const ContactTitle = styled.div`
	font-size: 24px;
	margin-bottom: 2px;
	font-weight: 700;
	line-height: 1.25;
	letter-spacing: -0.02em;

	@media (max-width: 600px) {
		font-size: 21px;
	}
`;

const fieldStyles = `
	width: 100%;
	background: transparent;
	border: 1px solid rgba(177, 178, 179, 0.24);
	outline: none;
	font-size: 16px;
	line-height: 1.5;
	border-radius: 14px;
	padding: 14px 16px;
	color: var(--project-color);
	transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

	&::placeholder {
		color: var(--project-color);
		opacity: 0.5;
	}

	&:focus {
		border-color: rgba(92, 98, 236, 0.68);
		background: rgba(92, 98, 236, 0.03);
		box-shadow: 0 0 0 3px rgba(92, 98, 236, 0.12);
	}
`;

export const ContactInput = styled.input`
	${fieldStyles}
`;

export const ContactInputMessage = styled.textarea`
	${fieldStyles}
	resize: vertical;
	min-height: 210px;
	flex: 1;

	@media (max-width: 991.98px) {
		min-height: 170px;
	}
`;

export const ContactButton = styled.button`
	cursor: pointer;
	width: 100%;
	text-align: center;
	padding: 16px 18px;
	margin-top: 4px;
	border-radius: 14px;
	border: 1px solid rgba(92, 98, 236, 0.58);
	background: #5c62ec !important;
	color: #ffffff !important;
	font-size: 17px;
	font-weight: 800;
	line-height: 1.2;
	box-shadow: 0 14px 28px rgba(92, 98, 236, 0.16);
	transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

	@media (max-width: 600px) {
		padding: 15px 16px;
		font-size: 16px;
	}

	&:hover {
		transform: translateY(-1px);
		background: #6f75ff !important;
		color: #ffffff !important;
		border-color: rgba(118, 124, 255, 0.85);
		box-shadow: 0 16px 34px rgba(92, 98, 236, 0.22);
	}

	&:active {
		transform: translateY(0);
	}

	&:focus-visible {
		outline: none;
		box-shadow: 0 0 0 3px rgba(92, 98, 236, 0.22), 0 16px 34px rgba(92, 98, 236, 0.18);
	}
`;

export const PopupModal = styled.div`
	width: min(440px, calc(100vw - 32px));
	padding: 28px;
	border-radius: 20px;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 18px;
	align-items: center;
	justify-content: center;
	font-size: 28px;
	text-align: center;
	color: var(--project-color);
	background: var(--project-bg-card);
	border: 1px solid rgba(177, 178, 179, 0.22);
	box-shadow: 0 24px 70px rgba(0, 0, 0, 0.34);

	@media (max-width: 767.9px) {
		width: calc(100vw - 28px);
		padding: 24px 18px;
		font-size: 24px;
		border-radius: 16px;
	}
`;

export const PopupContent = styled.div`
	margin: 0;
	font-family: 'Nunito';
	font-weight: 800;
	line-height: 1.25;
	letter-spacing: -0.035em;

	&::after {
		content: 'Message delivered';
		display: block;
		margin-top: 8px;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0;
		opacity: 0.58;
	}
`;

export const PopupActions = styled.div`
	width: min(220px, 100%);

	.btn,
	button,
	a {
		width: 100%;
		min-height: 46px;
		border-radius: 12px;
	}
`;
