import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Frontpage from './Staffproject/Frontpage' ;
// import Logmod from './Staffproject/Logmod' ;
// import Modbox from './Staffproject/Modbox' ;
// import Loginbox from './Staffproject/Loginbox';
import Menumain from './Staffproject/Menumain';
import Navbar from './Staffproject/Navbar' ;
import Leftmenu from './Staffproject/Leftmenu';
import User from './Staffproject/User';
import Searchbar from './Staffproject/Searchbar' ;
import Attendleft from './Staffproject/Attendleft';
import Attendence from './Staffproject/Attendence';
import Salary from './Staffproject/Salary';
import NoRouteFound from './Staffproject/NoRouteFound' ;

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
    <Router>
        <Switch>
            {/* <Route exact path="/" component={Frontpage} /> */}
            {/* <Route path="/log" component={Logmod} /> */}
            {/* <Route path="/popup" component={Modbox} /> */}
            {/* <Route path="/login" component={Loginbox} /> */}
            <Route path="/main" component={Menumain} />
            <Route path="/nav" component={Navbar} />
            <Route path="/leftmenu" component={Leftmenu} />
            <Route path="/user" component={User} />
            <Route path="/search" component={Searchbar} />
            <Route path="/attendleft" component={Attendleft} />
            <Route path="/attendence" component={Attendence} />
            <Route path="/salary" component={Salary} />
            <Route component={NoRouteFound} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();
