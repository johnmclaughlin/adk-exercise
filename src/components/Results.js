import React from 'react';
import Books from './Books';
import NoBooks from './NoBooks';

const ResultList = props => {
    const results = props.data;
    console.log(results);
	let books;
	if (results.length > 0) {
		books = results.map(book =>
			<Books
				title={book.title_suggest}
				author={book.author_name}
                published={book.publish_year}
                isbn={book.isbn}
                publisher={book.publisher}
                oclc={book.oclc}
                goodreads={book.goodreads}
                key={book.key}
			/>
		);
	} else {
		books = <NoBooks />;
	}
	return (
        <div className="results">
        <h1>Search Results</h1>
		<ul className="book-list">
			{books}
		</ul>
        </div>
	);
};

export default ResultList;