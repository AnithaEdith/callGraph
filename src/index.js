import React , { Component }from 'react';
import BarChart from 'react-bar-chart';
import { render } from 'react-dom';

const data = [ { text: 'Customer Support', value: 0.918 },
{ text: 'Ease of Use', value: 0.6900000000000001 },
{ text: 'Pricing', value: 0.7965 } ];
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      width: 500
    };

  }
 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }
 
  render() {
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    return (
        <div ref='root'>
            <div style={{width: '50%'}}> 
                <BarChart ylabel='confidence'
                  width={500}
                  height={500}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick}/>
            </div>
        </div>
    );
  }
};

render(<App />, document.getElementById('root'));
