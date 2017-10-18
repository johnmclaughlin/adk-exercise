import React from 'react';

const Book = props =>
	<div className="book" key={props.id}>
        <ul>
            <li>TITLE <span>{props.title}</span></li>
            <li>AUTHOR <span>{props.author}</span></li>
            <li>PUBLISHED <span>{props.published}</span></li>
            <li>ISBN <span>{props.isbn}</span></li>
            <li>PUBLISHER <span>{props.publisher}</span></li>
            <li>OCLC <span>{props.oclc}</span></li>
            <li>GOODREADS ID <span>{props.goodreads}</span></li>
        </ul>
        <img src={props.preview} />
	</div>;

export default Book;