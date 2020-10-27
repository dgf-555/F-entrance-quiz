import React from 'react';
import './Person.css';


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="person">
        <p>{this.props.person.id}.{this.props.person.name}</p>
      </div>
    );
  }
}
export default Person;