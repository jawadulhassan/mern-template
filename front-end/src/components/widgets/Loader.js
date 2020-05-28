import React from 'react';
import ReactLoading from 'react-loading';

function Loader() {
	return (
		<div className="app-loader">
			<ReactLoading type={'spinningBubbles'} height={60} width={60} color="#ffffff" />
		</div>
	);
}

export default Loader;
