import React, { Component, PropTypes } from 'react';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {avatarUri: props.user.img};
  }


  _handleFileChange(){
    const {addToUser}=this.props;
    const fileName = this.refs.avatar.value.split(/(\\|\/)/g).pop();
    const reader = new FileReader();
    const file = this.refs.avatar.files[0];
    reader.onload = (e) => {
      this.setState({
        avatarUri: e.target.result
      });
      addToUser(e.target.result);
    };

    reader.readAsDataURL(file);
  }



  handleAddButtonClick() {
    const { addToUser } = this.props;
    const node = this.refs.nameUser;
    const node2 = this.refs.age;
    const node3 = this.refs.description;
   // const node4 = this.refs.img;
    const nameUser =  node.value.trim();
    const ageUser =  node2.value.trim();
    const descriptionUser =  node3.value.trim();
    nameUser !== ''?addToUser({name: nameUser}):'';
    ageUser !== ''?addToUser({age: ageUser}):'';
    descriptionUser !== ''?addToUser({description: descriptionUser}):'';
    //addToUser({img: imageUser});
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
                <img ref="avatar" size={200} src={this.state.avatarUri}/>
                <h6>Upload a different photo...</h6>
                <input type="file" ref="avatar"  className="text-center"/>
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

