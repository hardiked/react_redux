import React from 'react';

const Passworderror = () => (
	<div>
		<ul className="collection">
			<li className="collection-item">Must have atleast one lowercase</li>
			<li className="collection-item">Must have atleast one uppercase</li>
			<li className="collection-item">Must have atleast one special character</li>
			<li className="collection-item">Must have atleast 8 characters and atmax 35 characters</li>
		</ul>
	</div>
);	

export default Passworderror;