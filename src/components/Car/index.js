import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Component} from 'react'

import Client from '../client'
import Admin from '../Admin'
import Vendor from '../vendor'

import './index.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg">
          <Link className="button" type="button" to="/">
            Client
          </Link>
          <Link className="button" type="button" to="/vendor">
            Vendor
          </Link>
          <Link className="button" type="button" to="/admin">
            Admin
          </Link>
        </div>

        <Switch>
          <Route exact path="/" component={Client} />
          <Route path="/admin" component={Admin} />
          <Route path="/vendor" component={Vendor} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
