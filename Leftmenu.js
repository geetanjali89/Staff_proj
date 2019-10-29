import React, { Component } from 'react' ;
import './Leftbar.css';
import Navbar from "./Navbar" ;
import Menumain from './Menumain';
import { Switch, Route, Link} from 'react-router-dom' ;

class Leftmenu extends Component {
    render() {
        return(
            <div>
                <Navbar /> 
                <div className="container-fluid p-0"> 
                    <div className="leftlist shadow p-0 mb-0 rounded">
                        <div>
                            <Link to ="/main">
                                <i class="fas fa-home"></i>
                            </Link>
                            <Switch>
                                <Route path="/main" component={Menumain} />
                            </Switch> 
                        </div>
                        <ul className="list-group list-group-item-dark p-0 m-0">
                            <li className="list-group-item content-justify-center">
                                <Link to ="/user">Add User</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to ="/search">Search</Link>
                            </li>
                            <li className="list-group-item">
                                <Link to ="/search">Details</Link>
                            </li>
                            
                        </ul>  
                        <button className="addbtn btn-block btn-lg btn-outline-info my-2 my-sm-0" type="submit">Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Leftmenu ;