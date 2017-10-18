import React, { Component } from 'react';
import axios from 'axios';

import ResultList from './ResultList';
import SearchForm from './SearchForm';


export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			loadingState: true
		};
	}

	componentDidMount() {
		//this.performSearch();
	}

	performSearch = (query = '') => {
		axios
			.get(
				`http://openlibrary.org/search.json?q=${query}`
			)
			.then(data => {
                console.log(data);
				this.setState({ books: data.data.docs, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-content">
					{this.state.loadingState
						? <SearchForm onSearch={this.performSearch} />
						: <ResultList data={this.state.books} />}
				</div>
			</div>
		);
	}
}
