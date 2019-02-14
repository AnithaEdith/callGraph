import React, { Component } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

var _ = require('lodash')

const mockdata = [
  { tag_name: 'User Friendly', count: 5 },
  { tag_name: 'Coverage', count: 1 },
  { tag_name: 'Complexity', count: 3 },
  { tag_name: 'Cost', count: 4 },
  { tag_name: 'Recharge', count: 2 }
]

class TelstraExtractor extends Component {
  constructor() {
    super()
    this.state = {
      textExtractor: ''
    }
  }

  handleBarClick(element, id) {
    console.log(`The bin ${element.text} with id ${id} was clicked`)
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_TEXT_EXTRACTOR_API}`)
      .then(res => {
        this.setState({
          textExtractor: res.data
        })
      })
      .catch(error => {
        console.error(`There is an error in API call. ${error}`)
        this.setState({
          textExtractor: mockdata
        })
      })
  }

  render() {
    const data = {
      labels: _.map(this.state.textExtractor, 'tag_name'),
      datasets: [
        {
          label: 'Telstra Text Extractor',
          backgroundColor: 'rgb(128, 0, 0) ',
          borderColor: 'rgb(128, 0, 0) ',
          data: _.map(this.state.textExtractor, 'count')
        }
      ]
    }

    const options = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: true
            },
            barThickness: 30
          }
        ],
        yAxes: [
          {
            ticks: {
              max: 8,
              min: 0,
              stepSize: 1
            }
          }
        ]
      },
      title: {
        display: true,
        text: 'Content Extractor of Customer Feedback'
      }
    }

    return <div>{this.state.textExtractor && <Bar data={data} options={options} height={200} width={250} />}</div>
  }
}

export default TelstraExtractor
