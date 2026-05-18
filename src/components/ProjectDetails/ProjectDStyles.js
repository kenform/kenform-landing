import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.72);
	backdrop-filter: blur(8px);
	display: flex;
	align-items: flex-start;
	justify-content: center;
	overflow-y: auto;
	padding: 34px 14px;
	z-index: 1300;
`;

export const Wrapper = styled.div`
	max-width: 880px;
	width: 100%;
	margin: 0 auto;
	height: min-content;
	color: ${({ theme }) => theme.text_primary};
	padding: 26px;
	display: flex;
	flex-direction: column;
	position: relative;
	line-height: 1.65;
	border-radius: 24px;
	border: 1px solid rgba(92, 98, 236, 0.22);
	box-shadow: 0 28px 90px rgba(0, 0, 0, 0.45);
	overflow: hidden;

	@media only screen and (max-width: 600px) {
		padding: 18px;
		border-radius: 20px;
	}
`;

export const Title = styled.div`
	font-size: clamp(26px, 4vw, 40px);
	line-height: 1.12;
	font-weight: 800;
	margin: 22px 4px 4px;
	letter-spacing: -0.03em;
`;

export const Date = styled.div`
	width: fit-content;
	font-size: 14px;
	margin: 2px 4px 16px;
	font-weight: 700;
	color: #5c62ec;
	padding: 7px 12px;
	border-radius: 999px;
	background: rgba(92, 98, 236, 0.12);
	border: 1px solid rgba(92, 98, 236, 0.2);
`;

export const Desc = styled.div`
	font-size: 16px;
	font-weight: 400;
	margin: 14px 4px 4px;
	opacity: 0.9;
	max-width: 760px;

	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: min(420px, 48vh);
	object-fit: cover;
	border-radius: 18px;
	margin-top: 18px;
	box-shadow: 0 18px 48px rgba(0, 0, 0, 0.32);
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.04);

	@media only screen and (max-width: 600px) {
		height: 230px;
		border-radius: 16px;
		margin-top: 26px;
	}
`;

export const Label = styled.div`
	font-size: 18px;
	font-weight: 800;
	color: #5c62ec;
	margin: 16px 4px 8px;

	@media only screen and (max-width: 600px) {
		font-size: 16px;
	}
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin: 8px 0 10px;
`;

export const Tag = styled.div`
	font-size: 13px;
	font-weight: 700;
	color: #5c62ec;
	padding: 7px 10px;
	border-radius: 999px;
	background-color: rgba(92, 98, 236, 0.12);
	border: 1px solid rgba(92, 98, 236, 0.16);

	@media only screen and (max-width: 600px) {
		font-size: 12px;
	}
`;

export const Members = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	flex-wrap: wrap;
	margin: 12px 4px;
`;

export const Member = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const MemberImage = styled.img`
	width: 46px;
	height: 46px;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: 4px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);

	@media only screen and (max-width: 600px) {
		width: 34px;
		height: 34px;
	}
`;

export const MemberName = styled.div`
	font-size: 15px;
	font-weight: 700;
	width: 200px;
	color: ${({ theme }) => theme.text_primary};

	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

export const ButtonGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	margin: 22px 0 2px;
	gap: 12px;

	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

export const Button = styled.a`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	text-align: center;
	font-size: 16px;
	font-weight: 800;
	color: #fff;
	padding: 15px 16px;
	border-radius: 14px;
	background: linear-gradient(135deg, #5c62ec, #7c5cff);
	cursor: pointer;
	text-decoration: none;
	transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
	box-shadow: 0 14px 28px rgba(92, 98, 236, 0.22);

	&:hover {
		transform: translateY(-2px);
		filter: brightness(1.06);
		box-shadow: 0 18px 34px rgba(92, 98, 236, 0.3);
	}

	p {
		margin: 0;
	}
`;
