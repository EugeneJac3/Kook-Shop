import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [values, setValues] = useState({
        email:"",
        password:"",
    });

    const handleSubmit = async (e) => {
         e.preventDefault()
         console.log(values)
        try {
            const { data } = await axios.post("http://localhost:8080/api/tutorials/register", {
                ...values, 
            }, );
            console.log(data);
            if(data){
                if(data.errors){
                } else {

                }
            }
            } catch (err) {
                console.log(err)
            }
    };

    return (
    <div>
        <h2>Register Account</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" onChange={(e)=> 
                    setValues({...values, [e.target.name]:e.target.value})
                }
                    />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" onChange={(e)=> 
                    setValues({...values, [e.target.name]:e.target.value})
                }
                    />
            </div>
            <button type="submit">Submit</button>
            <span>
                Already have an account? <Link to="/login">Login</Link>
            </span>
        </form>

    </div>
    );
}