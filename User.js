import React, { Component } from 'react';
import Leftmenu from './Leftmenu' ;
import './Users.css' ;

class User extends Component {
    // constructor(){
    //     super();
    //     this.state={
           
    //     };
        // handleInput = (e) => {
        //     this.setstate({
        //         [e.target.name]: e.target.value
        //     });
        // }
    
    render() {
        return(
            <div>
                <Leftmenu />
            <div className="row entries">
                <div className="col-12 ">
                    <h5 className="text-center">Personal Details</h5>
                    <br />
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="validationCustom01">First name</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="validationCustom02">Second name</label>
                                <input type="text" className="form-control"id="validationCustom02" placeholder="Second Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label>Age</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-4">
                                <label>DoB</label>
                                <input type="text" className="form-control" placeholder="DoB" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputState">Deparatment</label>
                                <select id="inputState" className="form-control">
                                    <option selected>choose</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="inputAddress">Enter Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Address1" />
                            </div>
                            <div className="col">
                                <label for="inputAddress">Enter Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Address2" />
                            </div>
                        </div>
                        <br />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>choose</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label >Contact No.</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-5">
                                <label for="inputEmail4">Enter Email</label>
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                            <label className="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                            <label className="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        {/* <div className="form-group">
                            <label for="exampleFormControlFile1">Picture</label>
                            <input type="file" className="form-gorup-file" id="exampleFormControlFile1" />
                        </div> */}
                        </div>
            
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Add</button>
                    </form> 
                </div>
            </div>           
        </div>    
        );
    }
}

export default User;