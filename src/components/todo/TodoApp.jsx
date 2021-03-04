import React, {Component} from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodoComponent from './ListTodoComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent'
import TodoComponent from './TodoComponent.jsx'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos" component={ListTodoComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                        <Route component={ErrorComponent} ></Route>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}


export default TodoApp