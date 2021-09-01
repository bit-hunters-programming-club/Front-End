import React from 'react'
import './Signup.css'

class Signup extends React.Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#201E38"
    }

    render() {
        return (
            <React.Fragment>
                <div className="container col-4">
                    <div className="signup__container">
                        <div className="signup__header">
                            <div className="row">
                                <div className="col-3">
                                    <img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="" className="image"/>
                                </div>
                                <div className="col-5">
                                    <h2 className="header__title"><b>Info User</b></h2>
                                </div>
                            </div>
                            
                        </div>
                        <form className="form__container">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="last_name" 
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    name="name" 
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    name="name" 
                                    className="form-control"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="btn__container d-flex justify-content-center">
                                <button type="submit" className="submit__button">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Signup