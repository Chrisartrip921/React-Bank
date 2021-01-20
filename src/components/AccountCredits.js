import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
function AccountCredits() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [credits, setCredits] = useState([]);
    const [total, setTotal] = useState(0);

    // Note to self: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://moj-api.herokuapp.com/credits")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCredits(result);
                    let currentTotal = 0;
                    for (let i = 0; i < result.length; i++) {
                        currentTotal += result[i].amount;
                    }
                    setTotal(currentTotal);
                    console.log(currentTotal);
                    console.log(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        console.log(credits);
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="text-center">Loading...</div>;
    } else {
        return (
            <div>
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userProfile">User Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/accountDebits">Account Debit's</Link>
                        </li>
                    </ul>
                </div>
                <h1 className="text-center mt-3 text-primary">ACCOUNT CREDITS</h1>
                <ul>
                    {credits.map(credit => (
                        <div className="text-center ">
                            <div className="card mt-5" style={{ width: 288 }} key={credit.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{credit.description}</h5>
                                    <p className="card-text">${credit.amount}</p>
                                    <p>{credit.date}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </ul>
                <h3 className="p-5 text-center">Total Credits: {total}</h3>
            </div>
        );
    }
}

export default AccountCredits;
