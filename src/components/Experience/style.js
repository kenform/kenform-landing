import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
	padding: 40px 0px 80px 0px;
	@media (max-width: 960px) {
		padding: 0px;
	}
`;

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 12px;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const Title = styled.div`
	font-size: 60px;
	text-align: center;
	font-weight: 600;
	color: #5c62ec;
	margin-bottom: 15px;

	@media (max-width: 768px) {
		margin-bottom: 12px;
		font-size: 32px;
	}
`;

export const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	max-width: 600px;
	line-height: 1.5;

	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 16px;
	}
`;

export const TimelineSection = styled.div`
	width: 100%;
	max-width: 1000px;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;
