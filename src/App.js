import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./index.css"
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import AccountDebits from './components/AccountDebits';
import AccountCredits from './components/AccountCredits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: "",
      accountCredits: 1000,
      accountDebits: 100000,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      }
      
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser});
  }
  
  render() {
    const HomeComponent = () => (<Home 
      accountBalance={this.state.accountDebits - this.state.accountCredits} 
      />);

    const userProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );

    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);

    const accountDebitsPage = () => (<AccountDebits accountDebits={this.state.accountDebits}/>);

    const accountCreditsPage = () => (<AccountCredits accountCredits={this.state.accountCredits}/>);
    return (
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={userProfileComponent} />
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/accountDebits" render={accountDebitsPage}/>
            <Route exact path="/accountCredits" render={accountCreditsPage}/>
          </Switch>
         
        </Router>
    );
  }
}

export default App;