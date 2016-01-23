import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
export default class Profile extends Component {

  constructor(props) {
    super(props);
  }
Name
  render() {
    const user = this.props.user[0] || {};

    return (
     
        <div className="container-fluid">
          <h1 className="page-header">Edit Profile</h1>
          <div className="row">
            <div className="">
              <div className="text-center">
                <img src="http://lorempixel.com/200/200/people/9/" className="avatar img-circle img-thumbnail" alt="avatar"/>
                <h6>Upload a different photo...</h6>
                <input type="file" className="text-center"/>
              </div>
            </div>
            <div className="personal-info">
              <h3>Personal info</h3>
              <form className="" role="form">
                <div className="form-group">
                  <label className="control-label">First name:</label>
                  <div className="">
                    <input className="form-control" value={`${user.id}`} type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Last name:</label>
                  <div className="">
                    <input className="form-control" value="Bishop" type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Username:</label>
                  <div className="">
                    <input className="form-control" value="janeuser" type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label"></label>
                  <div className="">
                    <input className="btn btn-primary" value="Save Changes" type="button"/>
                    <span></span>
                    <input className="btn btn-default" value="Cancel" type="reset"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

Profile.propTypes = {
  users: PropTypes.array,
};

