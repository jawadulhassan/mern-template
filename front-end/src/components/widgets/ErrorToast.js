import React from 'react';

function ErrorToast() {
	return (
		<div className="alert alert-danger error-message" role="alert">
			{`Something went wrong while making request. This is the error message produced by the system`}
		</div>
	);
}

export default ErrorToast;
