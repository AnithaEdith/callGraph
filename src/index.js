import React , { Component }from 'react';
import { render } from 'react-dom';
import SimpleClassifier from './SimpleClassifier';

class App extends Component {
  
  render() {
    return (
        <div ref='root'>
            <SimpleClassifier/>
        </div>
    );
  }
};

render(<App />, document.getElementById('root'));
