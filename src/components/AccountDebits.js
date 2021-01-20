import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
function AccountDebits() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [debits, setDebits] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch("https://moj-api.herokuapp.com/debits")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setDebits(result);
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
    }, [])

    const submit = (event) => {
        event.preventDefault();
        let amount = event.target.amount.value;
        let description = event.target.description.value;
        let date = event.target.date.value;
        let newDebit = {
            description: description,
            amount: amount,
            date: date
        }
        let tempArray = debits;
        tempArray.push(newDebit);
        setDebits([...tempArray]);
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="text-center">Loading...</div>;
    } else {
        return (
            <div className="text-center">
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userProfile">User Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/accountCredits">Account Credit's</Link>
                        </li>
                    </ul>
                </div>
                <h1 className="mt-3 text-primary">ACCOUNT DEBITS</h1>
                <ul>
                    {debits.map(debit => (
                        <div className="text-center ">
                            <div className="card mt-5" style={{width:288}}key={debit.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{debit.description}</h5>
                                    <p className="card-text">${debit.amount}</p>
                                    <p>{debit.date}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </ul>
                <h3>Total Debits: {total}</h3>
                <h3>Add a debit</h3>
                <form onSubmit={(e) => submit(e)}>
                    <input type="text" placeholder="Description" name="description" /> <br />
                    <input type="number" placeholder="Amount" name="amount" /> <br />
                    <input type="date" placeholder="Date" name="date" /> <br />
                    <button>Add Debit</button>
                </form>
            </div>

        );
    }
}

export default AccountDebits;