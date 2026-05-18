import styled from 'styled-components';
import './style.scss';
export const Container = styled.div`
	position: relative;
	width: 270px;
	height: 110px;
	overflow: hidden;
	border: 1px solid;
	font-weight: bold;
	font-size: 20px;
	transition: 0.5s;
	letter-spacing: 2px;
	border-radius: 8px;
`;
export const Span = styled.span`
	position: absolute;
	color: #000;
	text-align: center;
	width: 101%;
	font-weight: bold;
	position: absolute;
	inset: 40% 0 0 0;
	overflow: hidden;
	font-weight: bold;
`;
export const Button = styled.button`
	width: 101%;
	height: 100%;
	letter-spacing: 2px;
	font-weight: bold;
	cursor: pointer;
	-webkit-animation: ani2 0.7s steps(22) forwards;
	animation: ani2 0.7s steps(22) forwards;
	&:hover {
		-webkit-animation: ani 0.7s steps(22) forwards;
		animation: ani 0.7s steps(22) forwards;
	}
`;

// type = 1 or 2 or 3
const TestButton = ({ text, type }) => {
	return (
		<Container className={`container_${type}`}>
			<Span>{text}</Span>
			<Button>{text}</Button>
		</Container>
	);
};

export default TestButton;
