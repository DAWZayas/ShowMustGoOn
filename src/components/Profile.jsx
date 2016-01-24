import React, { Component, PropTypes } from 'react';
export default class Profile extends Component {

  constructor(props) {
    super(props);
  }
  handlePicture() {
   
     var file    = this.refs.img; //sames as here

    
         this.props.addToUser({picture: file}); //reads the data as a URL
     
  }



  handleAddButtonClick() {
    const { addToUser } = this.props;
    const node = this.refs.nameUser;
    const node2 = this.refs.age;
    const node3 = this.refs.description;
    const nameUser =  node.value.trim();
    const ageUser =  node2.value.trim();
    const descriptionUser =  node3.value.trim(); 
    nameUser !== ''?addToUser({name: nameUser}):'';
    ageUser !== ''?addToUser({age: ageUser}):'';
    descriptionUser !== ''?addToUser({description: descriptionUser}):'';
    node.value = '';
    node2.value = '';
    node3.value = '';
  }



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
                <input type="file" ref="img" onChange={e => this.handlePicture(e)} className="text-center"/>
              </div>
            </div>
            <div className="personal-info">
              <h3>Personal info</h3>
              <form className="" role="form">
                <div className="form-group">
                  <label className="control-label">Name:</label>
                  <div className="">
                    <input className="form-control" ref="nameUser" placeholder={`${user.name}`} type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Edad:</label>
                  <div className="">
                    <input className="form-control" ref="age" placeholder={`${user.age}`} type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Description:</label>
                  <div className="">
                    <input className="form-control" ref="description" placeholder={`${user.description}`} type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label"></label>
                  <div className="">
                    <input className="btn btn-primary" value="Save Changes" onClick={() => this.handleAddButtonClick()} type="button"/>
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

