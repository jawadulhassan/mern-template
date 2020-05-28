import React from 'react';

function Button(props) {
	const {label, active, onClick, rightActive} = props;
	return (
		<button
			onClick={onClick}
			className={`${
				active
					? `active-button ${rightActive ? 'left-border-none' : 'right-border-none'}`
					: `button ${rightActive ? 'right-border-none' : 'left-border-none'}`
			}`}
		>
			{label}
		</button>
	);
}

export default Button;
