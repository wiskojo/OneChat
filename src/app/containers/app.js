import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {sendMessage as sendMessageAction} from "../actions/message-actions"
import '../../resources/stylesheets/style.scss'

import RoomDisplay from "../components/room-display";
import UserList from "../components/user-list";
import MessageList from "../components/message-list";
import Message from "../components/message";
import MessageForm from "../components/message-form";


class App extends Component
{
  render()
  {
    return (
      <div>
        <RoomDisplay room={this.props.room} />
        <UserList users={this.props.users} />
        <MessageList messages={this.props.messages} />
        <MessageForm
          dispatchSendMessageAction={this.props.sendMessageAction}
        />
      </div>
    );
  }
}

function mapStateToProps(state)
{
  return {
    user: state.userProfile.name,
    users: state.users,
    room: state.room,
    messages: state.messages
  };
}

function matchDispatchToProps(dispatch)
{
  return bindActionCreators({sendMessageAction: sendMessageAction}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
