import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			userName: 'mshafivk',
			userData: [],
			userRepos: [],
			pageSize: 5
		};
	}
	getUserData () {
        $.ajax ({
        	url: 'https://api.github.com/users/' + this.state.userName + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
        	dataType: 'json',
        	cache: false,
        	success: function (data) {
        		this.setState({userData: data});
                console.log(data);
        	}.bind(this),
			error: function (xhr, status, error) {
				this.setState({userName: null});
				alert (error);
			}.bind (this)
        });
	}
	getUserRepos () {
		$.ajax ({
        	url: 'https://api.github.com/users/' + this.state.userName + '/repos?per_page='+ this.state.pageSize +'&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
        	dataType: 'json',
        	cache: false,
        	success: function (data) {
        		this.setState({userRepos: data});
        	}.bind(this),
			error: function (xhr, status, error) {
				this.setState({userName: null});
				alert (error);
			}.bind (this)
        });
	}
	
	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}
	render () {
		return (
			<div>
              <Profile {...this.state}/>
			</div>);
	}
}
App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};
App.defaultProps = {
	clientId: 'cfaac4e500ae3d63f89e',
	clientSecret: '2cc684f1af6d2201578d93301e3fd7d154a0fba5'
};
export default App;