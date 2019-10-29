import React, { Component } from 'react' ;
import Attendleft from './Attendleft';
import Navbar from './Navbar';
import './Users.css' ;

class Attendence extends Component {
    render() {
       
        return(
            <div>
                <Navbar />
                <Attendleft />
                <div class="row entries">
                    <button className="btn btn-block btn-lg btn-outline-info my-2 my-sm-0" type="submit">Add Attendence</button>
                </div>
            </div>
        );
    }
}

export default Attendence;