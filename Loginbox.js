import React, { Component } from 'react' ;
import './Modbox.css';
import Frontpage from './Frontpage' ;
import Menumain from './Menumain' ;
import cookies from 'react-cookies' ;
import { Switch, Route } from 'react-router-dom' ;

class Loginbox extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    login = () => {
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        fetch("http://staging.nugen.co.in/api/v1/login", { 
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
            console.log(res);
            if(res.access_token){
                alert("Loggedin successfull");
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
    render(){
        return(
            <div>
                <Frontpage />
                <div className="member">
                        <i className="fas fa-users"></i>
                        <h4>LOGIN</h4>
                    </div>
                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"
                     name="email"
                     onChange={(e) => this.handleInput(e)} />                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                     name="password"
                     onChange={(e) => this.handleInput(e)} />
                </div>
                    <button type="submit" class="btn btn-primary"  onClick={() => this.login()}
                    >Submit
                        <Switch>
                            <Route path="/main" component={Menumain} />
                        </Switch>
                    </button>
                </form>
            </div>
          
        );
    }
}

export default Loginbox;