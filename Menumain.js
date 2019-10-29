import React, { Component } from 'react';
import './Menu.css' ;
import Frontpage from './Frontpage' ;
import Attendence from './Attendence';
import Leftmenu from './Leftmenu';
import {Switch, Route, Link} from 'react-router-dom' ;
import Salary from './Salary';

class Menumain extends Component {
    render() {
        return(
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg justify-content-start bg-dark">
                <div className="collapse navbar-collapse">
                    <img src="./images/logo-image.png" width="60px" height="60px" alt=""/>
                    <a className="nav-link active text-white text-bold">
                        <Link to ="/leftmenu">STAFF DETAILS</Link>
                        <Switch>
                            <Route path="/leftmenu" component={Leftmenu} />
                        </Switch>
                    </a>
                    <a className="nav-link text-white text-bold">
                    <Link to ="/attendence">ATTENDENCE</Link>
                        <Switch>
                            <Route path="/attendence" component={Attendence} />
                        </Switch>
                    </a>
                    <a className="nav-link text-white text-bold">
                    <Link to ="/salary">SALARY</Link>
                        <Switch>
                            <Route path="/salary" component={Salary} />
                        </Switch>
                    </a>
                    <button className="btn_log btn-outline-info my-2 my-sm-0" type="submit">
                        <Link to ="/">Logout</Link>
                    </button>
                </div>
                </nav> 
                    <img src="./images/2.jpg" className="img-fluid" alt="Responsive image" />
                <div className="logo">
                    <img src="./images/logo-image.png" alt="" className="img"></img>
                </div>
            </div>
        );
    }
}

export default Menumain;