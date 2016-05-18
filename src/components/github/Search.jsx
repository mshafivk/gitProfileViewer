import React, {Component} from 'react';

class Search extends Component {
	onFormSubmit (e) {
		e.preventDefault();
		let userName = this.refs.userName.value.trim();
		if(!userName) {
			alert('Enter a username');
			return;
		}
		this.props.onFormSubmit(userName);
		this.refs.userName.value = '';//clear user name after finding
	}
	render () {
		return (
			 <div>
			 <form onSubmit={this.onFormSubmit.bind(this)}>
			 <label>Search Github Users</label>
			 <input type="text" ref="userName" className="form-control"/>
			 </form>
            </div>);
	}
}
export default Search;