import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
class App extends PureComponent {

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  constructor(props){
    super(props);
    console.log('[App.js] = ',props); 
  }

  componentWillMount(){
    console.log('Inside Component Will Mount');
  }

  componentDidMount(){
    console.log('Inside ComonentDidMount');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update App.js] = Inside Should Component Update');
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  }*/

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {

    console.log('inside render');

    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons persons = {this.state.persons} clicked = {this.deletePersonHandler} changed = {this.nameChangedHandler} />;
    }

  
    return (
      
      <div className={styles.app}>
        <button onClick = {() => this.setState({showPersons : true})}>Show Persons</button>
        <Cockpit showPersons = {this.state.showPersons} persons = {this.state.persons} clicked = {this.togglePersonsHandler}/>
        {persons}
      </div>
    
    );
   }
}

export default App;
