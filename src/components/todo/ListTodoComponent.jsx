import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodoComponent extends Component{
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            todos:[],
            message:null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
        this.meuToString = this.meuToString.bind(this)
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.refreshTodos()
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedUser() 
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response)
                    this.setState({
                        todos: response.data
                    })
                }
            )
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedUser()
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({message : `Afazer ${id} removido com sucesso`})
                    this.refreshTodos()
                }
            )
    }

    updateTodoClicked(id){
        console.log('update ' + id)
        this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedUser()
        // TodoDataService.deleteTodo(username, id)
        //     .then(
        //         response => {
        //             this.setState({message : `Afazer ${id} removido com sucesso`})
        //             this.refreshTodos()
        //         }
        //     )
    }
    
    addTodoClicked(){

        this.props.history.push(`/todos/-1`)
    }

    meuToString(todo){
        if(todo.done.toString() == 'false'){
            return 'Ainda não!'
        }else if(todo.done.toString() == 'true'){ 
            return 'Concluído!'
        }

        return 'Concluído!'
    }


    render(){
        console.log('render')
        return(
            <div>
                <h1>Lista de Afazeres</h1>
                { this.state.message &&     <div className="alert alert-success">
                    {this.state.message}
                </div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Feito?</th>
                                <th>Data Final</th>
                                <th>Atualizar</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{this.meuToString(todo)}</td>
                                            <td>{moment.utc(todo.targetDate).format('DD-MM-YYYY')}</td>
                                            <td><button onClick={() => this.updateTodoClicked(todo.id)} className="btn btn-success">Atualizar</button></td>
                                            <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Remover</button></td>
                                        </tr>
                                )
                            }   
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Adicionar</button>
                    </div>
                </div>     
            </div>
        )
    }
}
export default ListTodoComponent;