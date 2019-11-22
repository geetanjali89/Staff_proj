import React, { Component } from 'react' ;
import Salaryleft from './Salaryleft' ;

class Salary extends Component {
    render() {
        return(
            <div>
                <Salaryleft />
                <div class="row entries">
                    <div className="col-12 ">
                        <h5 className="text-center">Salary</h5>
                        <br />
                    <form className="form">
                        <div className="row">    
                        <div className="col"> 
                            <input type="text" className="form-control" placeholder="Account Number" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Amount" />
                        </div>
                        </div>
                        <br />
                        <form className="form-inline">
                            <div className="col">
                                FROM
                                <input type="date" />
                            </div>
                            <div className="col">  
                               TO
                            <input type="date" />
                            </div>
                        </form>
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