import React from 'react'
import { Link } from "react-router-dom"
import "./Register.css"

class Regitser extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Container">
                    <div className="Form__Header">
                        <img className="User_Icon" src="https://image.flaticon.com/icons/png/512/1946/1946429.png"/>
                        <h1 className="Header__Text">User info</h1>
                    </div>
                    <div className="Form">
                        <input type="text" className="Form__Input" name="first_name" placeholder="name"/>
                        <input type="text" className="Form__Input" name="last_name" placeholder="last name"/>
                        <input type="email" className="Form__Input" name="email" placeholder="email"/>
                        <input type="password" className="Form__Input" name="password" placeholder="password"/>
                        <input type="password" className="Form__Input" name="password_confirm" placeholder="confirm password"/>
                	</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Regitser;