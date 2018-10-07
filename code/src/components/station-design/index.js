import React from "react"
import "./style.css"

class StationDesign extends React.Component {

  render() {
    return (
      <div className="radio-box" style={{ backgroundColor: `#${this.props.color}`}}>
        <div className="radio-image">
          <img src={this.props.image} alt="bild" />
        </div>
        <div className="container">
          <div className="radio-name"><span>{this.props.name}</span></div>
          <div className="audio-control">
            <audio controls>
              <source src={this.props.url} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    )
  }
}
export default StationDesign
