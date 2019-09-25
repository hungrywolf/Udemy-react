import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: 0, name: 'Max' , age:28},
      {id: 1, name: 'Max2' , age:29},
      {id: 2, name: 'Max3' , age:29}
    ],
    otherstate: 'some other state',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('clicked')
    // Dont do this this.state.persons[0].name = 'saleh'
    this.setState({persons:[
        {name: newName , age:27},
        {name: 'MAX' , age:29}
      ]
    })
  }


  nameChangedHandler = (event,personId) => {

    this.state.persons.find(p => {
      return p.id===personId
    })

    const person = {...this.state.persons[personId]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personId] = person;
    this.setState({persons:persons});

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

togglePersonsHandler = () => {
  const dshow = this.state.showPersons;
  this.setState({
      showPersons: !dshow
  })
}

  render() {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover':{
          backgroundColor : 'lightgreen',
          color : 'black'
        }
    }

    let persons = null ;

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map( (person,index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)}/>
        })}
      </div>
    );

    style.backgroundColor = 'red';
    style[':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
    <StyleRoot>
      <div className="App">
      <h1>Hi</h1>
    <p className={classes.join(' ')} >This is realy working!</p>
      <button style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    </StyleRoot>
    );
  }
}

export default Radium(App);
