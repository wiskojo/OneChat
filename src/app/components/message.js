import {Component} from "react";


export default class Message extends Component
{
  render()
  {
    return (
      <div className="message">
        <span>{this.props.user}: {this.props.text}</span>
      </div>
    );
  }
}
