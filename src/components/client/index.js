import {Component} from 'react'
import './index.css'

class Client extends Component {
  render() {
    return (
      <div className="client">
        <h1>Initial Location</h1>
        <select>
          <option>Bandra</option>
          <option>Dadar</option>
          <option>Santacruz</option>
          <option>Andheri</option>
          <option>Mahim</option>
        </select>
        <h1>Nearby Cars</h1>
      </div>
    )
  }
}

export default Client
