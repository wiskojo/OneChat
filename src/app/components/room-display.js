import {Component} from "react";


export default class RoomDisplay extends Component
{
  render()
  {
    return (
      <div className="room">
        <span>{this.props.room}</span>
      </div>
    );
  }
}
