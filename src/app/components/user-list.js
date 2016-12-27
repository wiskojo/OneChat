import {Component} from "react";


export default class UserList extends Component
{
  render()
  {
    return (
      <div className="users">
        {
          this.props.users.map((user, i) => {
            return (
              <span key={i}>{user}</span>
            );
          })
        }
      </div>
    );
  }
}
