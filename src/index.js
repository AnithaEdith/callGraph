import React, { Component } from 'react'
import { render } from 'react-dom'
import SimpleClassifier from './SimpleClassifier'
import SentimentAnalysis from './SentimentAnalysis'
import { Container, Row, Col } from 'react-bootstrap'
import TelstraExtractor from './TelstraExtractor'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div ref="root">
        <Container>
          <Row>
            <h1>
              {' '}
              <center> TELSTRA CUSTOMER FEEDBACK SENTIMENT ANALYSIS </center>
            </h1>
          </Row>
          <br />
          <Row>
            <Col>
              <SimpleClassifier />
            </Col>
            <Col>
              <SentimentAnalysis />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <TelstraExtractor />
            </Col>
            <Col>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer Review Sample</th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>I don't do recommendations but your process tries to trick people into an upgrade</td>
                    <td>Aaron</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Quick, easy to rechartge, great service coverage</td>
                    <td>Michel</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>convenient</td>
                    <td>Steffy</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Battled to put information to pay with my iphone</td>
                    <td>George</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Successfully recharge</td>
                    <td>Stephen</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Not user friendly. Not clear. Had to do trial and error</td>
                    <td>Mary</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>The cost is way too high!!! U only did it as a backup!</td>
                    <td>Annie</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Very difficult but Telstra store at albany WA is even worse</td>
                    <td>Baron</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>It’s pretty straight forward and it saves me having to go into store to do so</td>
                    <td>Phil</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>
                      I always got trouble to recharge, you raise your price dramatically with no possibility to pay
                      less than 30 dollars, the only possibility to use the credit bank is to pay for 1 new month, even
                      when you still have plenty of data
                    </td>
                    <td>Clara</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>
                      I had $70.00 in my prepaid account being sick I forgot to pre paid my $30.00 I day over and lost
                      my money not fair Telstra I am a pensioner
                    </td>
                    <td>Clair</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
