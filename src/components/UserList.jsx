import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class UserList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { users } = this.props;

    return (
     
      <div>
        <div>
        <h3>users Selected</h3>
        </div>
        <ul className="col-lg-12 hero">
          {users.length===0? <li>none</li> :
            users.map( (user, index) =>  <Link key={index} className="list-group-item action-element" to='/'><p>name: {user.name || ''}</p><p>age: {user.age  || ''}</p><p>description: {user.description  || ''}</p></Link>)
          }
         </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array,
};

