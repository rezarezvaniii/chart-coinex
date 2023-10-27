import React from 'react';

const ProgressFirst = ({done , percent}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);

	const [posetive, setPosetive] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${percent}%`
		}
		
		setPosetive(newStyle);
	}, 200);
	
	return (
		<div className="progressFirst">
			<div className="progress-done-First text-xs font-normal" style={style}>
				{done}%
			</div>
			<div className='progress-done-last text-xs font-normal' style={posetive}>
			{percent}%
			</div>
		</div>
	)
}

export default ProgressFirst;