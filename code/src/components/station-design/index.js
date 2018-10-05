import React from "react"
import "./style.css"

class StationDesign extends React.Component {

  render() {
    return (
      <div className="radio-boxes" style={{ backgroundColor: `#${this.props.color}`}}>
        <div className="radio-box">
          <div className="radio-image">
            <img src={this.props.image} alt="bild" />
          </div>
          <div className="container">
            <div className="radio-name"><p>{this.props.name}</p></div>
            <div className="audio">
              <audio controls className="audio-control">
                <source src={this.props.url} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StationDesign
