import React from 'react';
import { Link } from 'react-router-dom'

const Books = props =>
	<li>
                <Link to={`/book/${props.id}`}>
                        TITLE <span>{props.title}{props.keidy}</span><br />
                        AUTHOR <span>{props.author}</span>
                </Link>
	</li>

export default Books;