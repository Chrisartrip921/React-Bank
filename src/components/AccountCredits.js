import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
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
                    for(let i = 0; i < result.length; i++) {
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
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/userProfile">User Profile</Link>
                <br/>
                <Link to="/accountDebits">Account Debit's</Link>
                <br/>
                <ul>
                    {credits.map(credit => (
                        <li key={credit.id}>
                            {credit.description} <br/> ${credit.amount} <br/> {credit.date} 
                        </li>
                    ))}
                </ul>
                {total}
            </div>
        );
    }
}

export default AccountCredits;
