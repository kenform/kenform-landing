import './decor.scss';

const DecorLayer = ({ variant = 'default' }) => {
	return (
		<div className={`decor-layer decor-layer--${variant}`} aria-hidden='true'>
			<span className='decor-layer__item decor-layer__item--ring decor-layer__item--a' />
			<span className='decor-layer__item decor-layer__item--ring decor-layer__item--b' />
			<span className='decor-layer__item decor-layer__item--square decor-layer__item--c' />
			<span className='decor-layer__item decor-layer__item--square decor-layer__item--d' />
			<span className='decor-layer__item decor-layer__item--line decor-layer__item--e' />
			<span className='decor-layer__item decor-layer__item--line decor-layer__item--f' />
			<span className='decor-layer__item decor-layer__item--dot decor-layer__item--g' />
			<span className='decor-layer__item decor-layer__item--dot decor-layer__item--h' />
			<span className='decor-layer__item decor-layer__item--dot decor-layer__item--i' />
		</div>
	);
};

export default DecorLayer;
