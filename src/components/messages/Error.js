import React from 'react';
import PropTypes from 'prop-types';

const Error = ({text,class1}) => (
	<div>
		<span className={class1}>
			{ text }
		</span>
	</div>
);	

Error.propTypes = {
	text: PropTypes.string.isRequired,
	class1: PropTypes.string.isRequired
};

export default Error;