import React from 'react';

const Books = props =>
	<li>
        TITLE <span>{props.title}</span><br />
        AUTHOR <span>{props.author}</span>
	</li>;

export default Books;