import { ErrorMessage, Field, Form, Formik } from 'formik'
import moment from 'moment'
import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description : '',
            targetDate : moment(new Date()).format("YYYY-MM-DD")
        };

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(){

        if(this.state.id===-1) {
            return
        }

        let username = AuthenticationService.getLoggedUser();

        TodoDataService.retrieveTodo(username, this.state.id).then(response =>
          this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
          })
        );
    }

    onSubmit(values){
        let username = AuthenticationService.getLoggedUser();

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
          };

        if(this.state.id===-1) {
              TodoDataService.createTodo(username, todo).then(() =>
              this.props.history.push("/todos"));  
        }else{
              TodoDataService.updateTodo(username, this.state.id, todo).then(() =>
              this.props.history.push("/todos"));            
        }
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = "Digite uma descrição"
        }else if(values.description.length<2){
            errors.description="Digite pelo menos 2 caracteres"
        }

        // if(moment(values.targetDate).isValid()) {
        //     errors.targetDate = 'Digite uma data válida'
        // }




        return errors
    }

    render(){
        let {description, targetDate} = this.state;
        //let targetDate = this.state.targetDate
        return(
        <div>
            <h1>Afazer</h1>
            <div className="container">
                <Formik initialValues={{description, targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        //aqui
                        enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Descrição</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Data Final</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Salvar</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
        )
    }
}

export default TodoComponent