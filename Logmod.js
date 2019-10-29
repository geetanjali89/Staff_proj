import React, { Component } from 'react';
import './Frontp.css' ;
// import Frontpage from './Frontpage' ;
import Menumain from './Menumain' ;

import {Switch, Route, Link} from 'react-router-dom' ;

class Logmod extends Component {
    render() {
        return(
            <div>
                {/* <Frontpage /> */}
            <div className="container-fluid p-0 bg-danger">
                <nav className="navbar navbar-light bg-dark">
                    <img src="./images/logo-image.png" width="60px" height="60px" alt=""/>                   
                    <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">
                        LOG IN
                    </button>
                </nav>
                {/* <img src="./images/2.jpg" className="img-fluid" alt="Responsive image" />
                <div className="logo">
                    <img src="./images/logo-image.png" alt="" className="img"></img>
                </div> */}
            </div>
        </div>
        );
    }
}

export default Logmod ;