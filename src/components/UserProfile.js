import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    return (
        <div className="text-center">
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
        </div>
    );
  }
}

export default UserProfile;