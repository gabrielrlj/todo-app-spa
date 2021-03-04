import React, {Component} from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component{
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: '',
            errorMessage: '',
            hasError: false
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render(){
        return(
            <div>
                <h1>Bem-vindo!</h1>
                <div className="container">
                    Bem-vindo! {this.props.match.params.name}. Você pode acessar suas tarefas <Link to="/todos">aqui</Link>
                </div>
                <div className="container">
                    Clique aqui para ver uma mensagem customizada de Bem-vindo.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Mensagem</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                {this.state.hasError && <div className="alert alert-warning">{this.state.errorMessage}</div>}
            </div>
        )
    }

    retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldBeanPathService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response){
        console.log(response)
        this.setState({
            welcomeMessage : response.data.message
        })
    }

    handleError(error){
    
        let errorMessage = '';
        if(error.message){
            errorMessage += error.message
        }

        if(error.response && error.response.data){
            errorMessage +=  error.response.data.message
        }

        this.setState({
            errorMessage : errorMessage,
            hasError: true
        })
    }
}

export default WelcomeComponent