import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div className="text-center">
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;