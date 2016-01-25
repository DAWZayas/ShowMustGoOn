import React, { Component, PropTypes } from 'react';

export default class CommentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      addDisabled:true
    };
  }

  handleAddButtonClick() {
    const { idBand, addComments, auth } = this.props;
    const node = this.refs.comment;
    const comment =  node.value.trim();
    addComments(idBand, comment);
    node.value = '';
    if (!auth.authenticated) {alert('You need to log in to comment');}

    this.setState({
      addDisabled:true
    });
  }
  
  handleRemoveComment(idComment){
    this.props.removeComment(idComment);
  } 

  handleEditClick(title, idComment) {

    const node = this.refs.com;

    this.setState({
      editing: true,
      idComment: idComment
    });

    const { comments } = this.props;
    
    node.value = title; // Necesito el titulo de este comentario.

    setTimeout(() => node.focus(), 0);
    setTimeout(() => node.setSelectionRange(0, node.value.length), 0);
   
  }

  handleOkClick() {
    const { editComment } = this.props;
    const node = this.refs.com;
    const title= node.value.trim();
    this.setState({
      editing: false
    });
     editComment(title, this.state.idComment);
  }

  handleCancelEdit(){
    this.setState({
      editing: false
    });
  }

  handleOnTitleKeyDownEdit(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this.handleOkClick();
    }
  }

  handleOnTitleKeyDownAdd(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this.handleAddButtonClick();
    }
  }

  handleDisabledOkEdit(){
    const node = this.refs.com;
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
    });
  }

  handleDisabledOk() {
    const node = this.refs.comment;
    const title =  node.value.trim();

    this.setState({
      addDisabled: title.length === 0
    });
  }

  render() {
    const { comments, auth } = this.props;

    return (
      <div>
          <h3>Comments</h3>
          {
            comments.map( (comment, index) => <p key={index}>{comment.title}
            <button className={this.state.editing ? 'hidden' : comment.user===auth.id?'btn btn-danger pull-right':'hidden'} type="button" onClick={ () => this.handleRemoveComment(comment.id)}><span className="glyphicon glyphicon-trash" /></button>
            <button className={this.state.editing ? 'hidden' : comment.user===auth.id?'btn btn-info pull-right':'hidden'} type="button" onClick={ () => this.handleEditClick(comment.title, comment.id) }><span className="glyphicon glyphicon-edit"/></button>
            <br/><br/></p> )
          }
          <div className={`input-group ${this.state.editing ? '' : 'hidden'}`}>
            <input className="form-control" type="text" ref="com" placeholder="Edit Comment" onKeyDown={(e) => this.handleOnTitleKeyDownEdit(e)} onChange={(e) => this.handleDisabledOkEdit(e)}/>
            <span className="input-group-btn">
              <button disabled={this.state.addDisabled} className="btn btn-success" type="button" onClick={(e) => this.handleOkClick(e)} ><span className="glyphicon glyphicon-ok" /></button>
              <button className="btn btn-danger glyphicon glyphicon-remove" type="button"onClick={() => this.handleCancelEdit()}></button>
            </span>
          </div>
          <div className={this.state.editing? 'hidden' : 'input-group'}>
            <input  type="text"  className="form-control" placeholder="Add Comments" ref="comment" onKeyDown={(e) => this.handleOnTitleKeyDownAdd(e)} onChange={(e) => this.handleDisabledOk(e)}/>
            <span className="input-group-btn">
              <button disabled={this.state.addDisabled} className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
            </span>
          </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  idBand: PropTypes.string,
  addComments: PropTypes.func.isRequired,
  auth: PropTypes.array,
  comments: PropTypes.array,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  band: PropTypes.object.isRequired
};

CommentList.defaultProps = { 
  comments: []
};