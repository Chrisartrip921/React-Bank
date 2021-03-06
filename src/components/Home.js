import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="text-center">
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="nav-link" to="/userProfile">User Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/accountCredits">Account Credit's</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/accountDebits">Account Debit's</Link>
                        </li>
                    </ul>
                </div>
                <img className="mt-5" src="data:image/png;base64,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" alt="bank" />
                <h1 className="text-primary my-3">Bank of React</h1>

                <AccountBalance accountBalance={this.props.accountBalance} />

            </div>
        );
    }
}

export default Home;