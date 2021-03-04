import React, {Component} from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AuthenticationService from "./AuthenticationService";
import { withRouter } from 'react-router';

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        return(
            <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://github.com/gabrielrlj" className="navbar-brand">gabrielrlj</a></div>
                        <ul className="navbar-nav">
                            { isUserLoggedIn && <li><Link to="/welcome/gabs" className="nav-link">Home</Link></li>}
                            { isUserLoggedIn && <li><Link to="/todos" className="nav-link">Afazeres</Link></li>}
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            { isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                            { isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)