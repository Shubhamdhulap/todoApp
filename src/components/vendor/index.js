import {Component} from 'react'
import './index.css'

class Vendor extends Component {
  render() {
    return (
      <form className="vendor">
        <label htmlFor="area">Area of Service</label>
        <input id="area" />
        <label htmlFor="name">Car Name</label>
        <input id="name" />
      </form>
    )
  }
}

export default Vendor
