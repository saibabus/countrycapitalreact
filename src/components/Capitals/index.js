import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  changeselectoption = event => this.setState({countryId: event.target.value})

  getcounrtyname = () => {
    const {countryId} = this.state
    const getonecountry = countryAndCapitalsList.find(
      eachone => eachone.id === countryId,
    )
    return getonecountry.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getcounrtyname(countryId)
    console.log(country)
    return (
      <div className="main-bg-conatiner">
        <div className="countrycontainer">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="selectedcountrycont">
            <select
              className="droplist"
              onChange={this.changeselectoption}
              value={countryId}
            >
              {countryAndCapitalsList.map(eachcountry => (
                <option value={eachcountry.id} key={eachcountry.id}>
                  {eachcountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="">is capital of which country ?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
