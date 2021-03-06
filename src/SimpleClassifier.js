import React, { Component } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

var _ = require('lodash')

const mockdata = [
  { tag_name: 'Customer Support', confidence: 0.918 },
  { tag_name: 'Ease of Use', confidence: 0.6900000000000001 },
  { tag_name: 'Pricing', confidence: 0.7965 }
]

class SimpleClassifier extends Component {
  constructor() {
    super()
    this.state = {
      simpleClassifierData: ''
    }
  }

  handleBarClick(element, id) {
    console.log(`The bin ${element.text} with id ${id} was clicked`)
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_CLASSIFIER_API}`)
      .then(res => {
        this.setState({
          simpleClassifierData: res.data
        })
      })
      .catch(error => {
        console.error(`There is an error in API call. ${error}`)
        this.setState({
          simpleClassifierData: mockdata
        })
      })
  }

  render() {
    const data = {
      labels: _.map(this.state.simpleClassifierData, 'tag_name'),
      datasets: [
        {
          label: 'Simple classification of Text',
          backgroundColor: 'rgb(0,128,0)',
          borderColor: 'rgb(0,128,0)',
          data: _.map(this.state.simpleClassifierData, 'confidence')
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
              max: 1,
              min: 0,
              stepSize: 1
            }
          }
        ]
      },
      title: {
        display: true,
        text: 'Simple Classification of Customer Feedback'
      }
    }

    return (
      <div>{this.state.simpleClassifierData && <Bar data={data} options={options} height={300} width={300} />}</div>
    )
  }
}

export default SimpleClassifier
