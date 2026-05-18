import { ReactSVG as SVG } from 'react-svg';
import './style.scss';

const Button = ({ modifier = '', link = '#', icon, text }) => {
	const isExternal = /^https?:\/\//.test(link);

	return (
		<a
			href={link}
			className={`btn ${modifier}`}
			target={isExternal ? '_blank' : undefined}
			rel={isExternal ? 'noreferrer' : undefined}
		>
			{icon && <SVG src={`${process.env.PUBLIC_URL || ''}/icons/${icon}.svg`} />}
			<span>{text}</span>
		</a>
	);
};

export default Button;
