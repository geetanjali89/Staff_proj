import React, { Component } from 'react';
import './Admlog.css';
// import Frontpage from './Frontpage';

class Admlog extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         email: '',
    //         password: ''
    //     };
    // }
    render() {
        return(
            <div>
                {/* <Frontpage /> */}
                <div className="container-fluid p-0">
                <img src="./images/bg.jpg" className="img-fluid" />
                    <div className="admin">
                        <div className="logo">
                            
                            <h1>ADMIN</h1>
                        </div>
                        <form>
                            <div className="form-group">
                            <input type="email" placeholder="Enter ID" />
                            </div> 
                            <div className="form-group">
                            <input type="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-light">LOG IN</button>
                        </form>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Admlog;