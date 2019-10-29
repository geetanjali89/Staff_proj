import React, { Component } from 'react';
import './Modbox.css' ;
import Logmod from './Logmod' ;
import cookies from 'react-cookies' ;

import {Switch, Route, Link} from 'react-router-dom' ;

class Modbox extends Component {
    constructor() {
        super();
        this.state= {
            email: '',
            password: ''
        };
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    Modbox = () => {
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        fetch("https://randomuser.me/api/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                // console.log(res);
                if(res.access_token){
                    cookies.save('access_token', res.access_token);
                    this.props.history.push("/main");
                }else{
                    alert(res.content[0]);
                }
            })
            .catch((err) => {
                console.log(`Error while login ${err}`);
            })
    }

    // save data to server

    saveData = () =>{
        alert("nsadhfh")
    }
    render() {
        return(
            <div>
                <Logmod />             
            <div className="modal-dialog bg-secondary" tabindex="-1" role="document">
                <div className="modal-body">
                <div className="container">
                    <div className="member">
                        <i className="fas fa-users"></i>
                        <h4>LOGIN</h4>
                    </div>
                    {/* <form>
                    <div className="form-group row">
                        <div className="col-8">
                            <div className="input-group">
                                <input type="text"
                                name="email" className="form-control" placeholder="Email"
                                onChange={(e) => this.handleInput(e)} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-8">
                            <input type="password" 
                                name="password" className="form-control" placeholder="Password"
                                onChange={(e) => this.handleInput(e)} 
                                />
                        </div>
                    </div>
                        <button type="submit" className="btn btn-primary"
                        onClick={() => this.Modbox()} 
                        >Sign in</button>
                        </form> */}
                        <form onSubmit={this.saveData}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email fwer" />
    
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                        </div>
                    </div>
                </div>    
            </div>           
        );
    }
}

export default Modbox ;