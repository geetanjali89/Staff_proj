import React, { Component } from 'react' ;
import Attendleft from './Attendleft';
import Navbar from './Navbar';
import './Users.css' ;

class Salary extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Attendleft />
                <div class="row entries">
                    <div className="col-12 ">
                        <h5 className="text-center">Salary</h5>
                        <br />
                    <form>
                        <div className="row">    
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Account Number" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Amount" />
                        </div>
                        </div>
                        <div className="row">
                            
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </form>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Salary;