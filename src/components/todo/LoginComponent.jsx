import React, {Component} from 'react'
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: 'gabs',
            password: '',
            hasLoginFailed: false,
            showSuccessMsg: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    render(){
        return(
            <div className="LoginComponent">
                <h1>Login</h1>
                    <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowSuccessMsg showSuccessMsg={this.state.showSuccessMsg}/> */}

                    {this.state.hasLoginFailed && <div className="alert alert-warning">Credenciais inválidas</div>}
                    {/* {this.state.showSuccessMsg && <div>Logado com Sucesso</div>}  */}

                    Login: <input type="text" name="username" value={this.state.username} 
                    onChange={this.handleChange}/>
                    Senha: <input type="password" name="password" value={this.state.password}
                    onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

    loginClicked(){
        
        // if(this.state.username ==='gabs' && this.state.password === 'dummy'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     this.setState({
        //         showSuccessMsg: true,
        //         hasLoginFailed: false
        //     })
        // }
        // else{
        //     this.setState({
        //         hasLoginFailed: true,
        //         showSuccessMsg: false
        //     })
        // }

        // AuthenticationService
        // .executeBasicAuthenticationService(this.state.username, this.state.password)
        // .then(() => {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     this.setState({
        //         showSuccessMsg: true,
        //         hasLoginFailed: false
        //         })
        //     })
        // .catch(() => {
        //     this.setState({
        //         hasLoginFailed: true,
        //         showSuccessMsg: false
        //     })
        // })

        AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginJwt(this.state.username, response.data.token)
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({
                showSuccessMsg: true,
                hasLoginFailed: false
                })
            })
        .catch(() => {
            this.setState({
                hasLoginFailed: true,
                showSuccessMsg: false
            })
        })
    }

    //smart way to use only one event handler instead of two;
    //to use variables at the left side of an object, you must use square brackets
    handleChange(event){
        //console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
}

export default LoginComponent