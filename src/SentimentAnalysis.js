import React, { Component } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

var _ = require('lodash')

const mockdata = [
  { tag_name: 'Negative', confidence: '0.89' },
  { tag_name: 'Positive', confidence: '0.93' },
  { tag_name: 'Neutral', confidence: '0.75' }
]

class SentimentAnalysis extends Component {
  constructor() {
    super()
    this.state = {
      sentimentAnalysisData: ''
    }
  }

  handleBarClick(element, id) {
    console.log(`The bin ${element.text} with id ${id} was clicked`)
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_SENTIMENT_API}`)
      .then(res => {
        this.setState({
          sentimentAnalysisData: res.data
        })
      })
      .catch(error => {
        console.error(`There is an error in API call. ${error}`)
        this.setState({
          sentimentAnalysisData: mockdata
        })
      })
  }

  render() {
    const data = {
      labels: _.map(this.state.sentimentAnalysisData, 'tag_name'),
      datasets: [
        {
          label: 'Sentimental Analysis of Text',
          backgroundColor: 'rgb(0,0,128)            ',
          borderColor: 'rgb(0,0,128)',
          data: _.map(this.state.sentimentAnalysisData, 'confidence')
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
        text: 'Sentiment Analysis of Customer Feedback'
      }
    }

    return (
      <div>{this.state.sentimentAnalysisData && <Bar data={data} options={options} height={300} width={300} />}</div>
    )
  }
}

export default SentimentAnalysis
