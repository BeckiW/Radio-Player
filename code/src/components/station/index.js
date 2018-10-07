import React from "react"
import StationDesign from '../station-design'
import "./style.css"

import loadingImage from '../../images/sverige.jpg'

const URL = "http://api.sr.se/api/v2/channels?format=json&size=100";



class StationList extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      radios: []
    }

    this.filterText = "";
  }

  componentDidMount() {
    fetch(URL).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radios: json.channels
      })
    })
  }

  onFilterTextChange = (evt) => {
    this.filterText = evt.target.value;
    this.forceUpdate();
  }

  render() {
    let stationsToShow = [];

    if ( this.filterText.length > 0 ) {
      stationsToShow = this.state.radios.filter((radio) => {
        if ( radio.name.toUpperCase().includes(this.filterText.toUpperCase()) ) {
          return true
        }else {
          return false}
      }
    );
    } else {
      stationsToShow = this.state.radios;
    }

    const radios = stationsToShow.map((radio) => (
      <StationDesign name={radio.name} image={radio.image} color={radio.color} url={radio.liveaudio.url} />
    ))

    if (this.state.radios.length > 0) {
      return (
        <div className="station-list">
          <div className="filter-bar">
            <span>Filter Results: </span>
            <input type="text" id="station-filter" placeholder="Search..." onChange={this.onFilterTextChange} />
          </div>

          <section id="station-items">
            {radios}
          </section>
        </div>
      )
    } else {
      return (
        <div>
          <img src={loadingImage} />
        </div>
      )
    }
  }
}

export default StationList
