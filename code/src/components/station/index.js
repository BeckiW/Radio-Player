import React from "react"
import StationDesign from '../station-design'

const URL = "http://api.sr.se/api/v2/channels?format=json&size=100";

class Stations extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      radios: []
    }
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

  render() {
    const title = "Radio App"

    const radios = this.state.radios.map((radio) => (
      <div>
        <StationDesign name={radio.name} image={radio.image} color={radio.color} url={radio.liveaudio.url} />
      </div>
    ))

 if (this.state.radios.length > 0) {
    return (
      <section id="station-design">
        <h2>{title}</h2>
        {radios}
      </section>
    )
  } else {

    return (
        <div>
            <stations
              backgroundColor="white"
              image="./images/sverige.jpg"
              name=""
              liveaudioURL="" />
          ))
        </div>
)
  }
  }
}

export default Stations
