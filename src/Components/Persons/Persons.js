import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{

  constructor(props){
    super(props);
    console.log('[Person.js] = ',props); 
  }

  componentWillMount(){
    console.log('Inside Component Will Mount of Person');
  }

  componentDidMount(){
    console.log('Inside ComonentDidMount of Person');
  }

  componentWillReceiveProps(nextProps){
    console.log('[Person.js] = Will recieve props',nextProps);
  }

  /*shouldComponentUpdate(nextProps , nextState){
    console.log('[Person.js] = ShouldComponentUpdate');
    return nextProps.persons !== this.props.persons;
  }*/

  componentWillUpdate(nextProps, nextState){
    console.log('[Person.js] = Component Will Update');
  }

  componentDidUpdate(){
    console.log('[Person.js] = Inside Component Did Update');
  }
  render () {
    return this.props.persons.map((person, index) => {
        return( 
        <Person
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
        )
    });
  }
  }

export default Persons;