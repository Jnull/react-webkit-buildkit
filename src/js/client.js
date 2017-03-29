import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
const MainNavLayout = ({match}) => (
    <div>
      <h2>Accounts</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/person/netflix">Bob Hope</Link></li>
            <li><Link to="/person/zillow-group">Charlie</Link></li>
            <li><Link to="/company/yahoo">Yahoo</Link></li>
            <li><Link to="/company/modus-create">Modus Create</Link></li>
        </ul>
    </div>
)
const Person = ({match}) => (
  <div>
    <h3>Person: {match.params.id}</h3>
  </div>
)
const Company = ({match}) => (
  <div>
    <h3>Company: {match.params.id}</h3>
  </div>
)
const NoMatch = ({match}) => (
  <div>
    <h3>NoMatch</h3>
  </div>
)
class App extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
    }
    componentWillMount() {
    }
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={MainNavLayout}/>
                    <Switch>
                        <Route path="/person/:id" component={Person}/>
                        <Route path="/company/:id" component={Company}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
ReactDOM.render(
    <App/>, app); //"app" automagically is like saying document.getElementByID("app"); which lives in ./src/index.html
