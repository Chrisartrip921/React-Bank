import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
      <div className="text-center">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/accountCredits">Account Credit's</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/accountDebits">Account Debit's</Link>
          </li>
        </ul>
        <h1 className="text-primary my-3">User Profile</h1>

        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>
      </div>
    );
  }
}

export default UserProfile;