import React from 'react';
import './CurrentCondition.css';

class CurrentCondition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Condition">
        <p>{this.props.condition}: {this.props.value}</p>
      </div>
    );
  }
}

export default CurrentCondition;
