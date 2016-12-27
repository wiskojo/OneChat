import {Component} from "react";
import Message from "./message";


export default class MessageList extends Component
{
  render()
  {
    return (
      <div className="messages">
        {
          this.props.messages.map((message, i) => {
            return (
              <Message
                key={i}
                user={message.user}
                text={message.text}
              />
            );
          })
        }
      </div>
    );
  }
}
