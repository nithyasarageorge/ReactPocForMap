import React from 'react';
import { render } from 'react-dom';
import data from "./data";
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
class App extends React.Component {
  constructor() {
    super();
    this.sample = this.sample.bind(this);
  }
  sample() {
    var q = data.map((t) => {
      var m = t.age * 2;
      return <div>{m}</div>;
    });
    return <div>{q}</div>;
  }
  render() {
      return (
        <div style={styles}>
          <h2>Start editing to see some magic happen {'\u2728'}</h2>
          {this.sample()}
        </div>
      );
    }
  }
render(<App />, document.getElementById('root'));
