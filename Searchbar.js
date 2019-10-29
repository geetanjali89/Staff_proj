import React, { Component } from 'react';
import Leftmenu from './Leftmenu' ;
import './Users.css' ;

class Searchbar extends Component {
    render() {
        return(
            <div>
                <Leftmenu />
                <div className="row entries">
                <div className="col-12 ">
                    <h5 className="text-center">Search</h5>
                    <br />
                    <form>
                        <div className="form-row">
                            <div className="form-group col-lg-6">
                                <label for="validationCustom01">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="First Name" />
                            </div>
                            <div className="form-group col-lg-6">
                                <label for="validationCustom02">Second name</label>
                                <input type="text" className="form-control"id="validationCustom02" placeholder="Second Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label for="inputState">Deparatment</label>
                                <select id="inputState" className="form-control">
                                    <option selected>choose</option>
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label>DoB</label>
                                <input type="text" className="form-control" placeholder="DoB" />
                            </div>
                        </div>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>    
                </div>    
                </div>               
            </div>
        );
    }
}

export default Searchbar;