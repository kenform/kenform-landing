import { useTranslation } from 'react-i18next';
import './style.scss';

const Preloader = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div id='preloader' className={`preloader ${className}`}>
			<span className='preloader__span1'></span>
			<span className='preloader__span2'></span>
			<span className='preloader__span3'></span>
			<span className='preloader__span4'></span>
			<img src='icons/preloader.svg' alt={t('a11y.preloader')} />
		</div>
	);
};

export default Preloader;
