import {Component} from "react";


export default class MessageForm extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {text: ""};
  }

  changeHandler(e)
  {
    this.setState({text: e.target.value});
  }

  sendMessage()
  {
    this.props.dispatchSendMessageAction(this.state.text);
    this.setState({text: ""});
  }

  render()
  {
    return (
      <div className='message_form'>
        <input
          onChange={this.changeHandler.bind(this)}
          value={this.state.text}
          onKeyDown={(event) =>
          {
            if(event.key == "Enter")
            {
              this.sendMessage();
            }
          }}
        />
        <button onClick={this.sendMessage.bind(this)}>Send</button>
      </div>
    );
  }
}
