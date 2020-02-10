import React, { Component } from 'react';
import { render } from 'react-dom';

class LifeCycleDemoComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <p>{this.props.num}</p>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      show: false
    }
  }

  render() {
    return (<>
      <button onClick={() => this.setState({ num: this.state.num + 1 })}>Add One</button>
      <button onClick={() => this.setState({show: !this.state.show})}>Toggle</button>
      {this.state.show && <LifeCycleDemoComponent num={this.state.num} />}
    </>);
  }
}

render(<App />, document.getElementById('root'));
