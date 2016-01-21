import React, { Component, PropTypes } from 'react';

export default class CommentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  handleAddButtonClick() {
    const { idBand, addComments } = this.props;
    const node = this.refs.comment;
    const comment =  node.value.trim();
    addComments(idBand, comment);
    node.value = '';
  }
  
  handleRemoveComment(idComment){
    this.props.removeComment(idComment);
  } 

  handleEditClick(idComment) {

    this.setState({
      editing: true
    });
    this.props.editComment(idComment);
   
  }

  handleOkClick() {
    const node = this.refs.com;
    const { editComment } = this.props;
    editComment(this.state.idediting, node.value.trim());

    this.setState({
      editing: false
    });

    
  }


  render() {

    const { comments } = this.props;

    return (
      <div>
          <h3>Comments</h3>
          <ul>
            {
              comments.map( (comment, index) => <li key={index}>{comment.title}
                <button className="btn btn-danger pull-right" type="button" onClick={ () => this.handleRemoveComment(comment.id)}><span className="glyphicon glyphicon-trash" /></button>
                <button className="btn btn-info pull-right" type="button" onClick={ () => this.handleEditClick(comment.id) }><span className="glyphicon glyphicon-edit"/></button>
                <br/><br/></li> )
            }
            <div className={`input-group ${this.state.editing ? '' : 'hidden'}`}>
                  <input className="form-control" ref="com"/>
                  <span className="input-group-btn">
                    <button className="btn btn-success" type="button" onClick={e => this.handleOkClick(e)}><span className="glyphicon glyphicon-ok" /></button>
                  </span>
                </div>
          </ul>
          <div className={`input-group ${this.state.editing ? 'hidden' : ''}`}>
            <input  type="text"  className="form-control" placeholder="Add Comments" ref="comment" />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-plus" /></button>
            </span>
          </div>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  band: PropTypes.object.isRequired
};

CommentList.defaultProps = { 
  comments: []
};