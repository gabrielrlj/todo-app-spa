import './App.css';
import './bootstrap.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import NewComponent from './components/learning-examples/NewComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import TodoApp from './components/todo/TodoApp';
import Counter from './components/counter/Counter';
//about imports, you should use curly brackets to import different components from same module
//better yet, you should use curly brackets for all exports that are not the default
//the 'default' export comes first on the import


class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoApp></TodoApp>
      </div>
    );
  }
}



class LearningComponent extends Component {
  render(){
    return (
      <div className="LearningComponent">
        My Hello
        <FirstComponent/>
        <SecondComponent/>
        <NewComponent/>
      </div>
    );
  }
}

export default App;
