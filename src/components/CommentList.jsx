import React, { Component, PropTypes } from 'react';

export default class CommentList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      idediting: ''
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
    this.props.onRemoveComment(idComment);
  } 

  handleEditClick(index) {

    this.setState({
      editing: true,
      idediting: index
    });
   
  }

  handleOkClick() {
    const node = this.refs.com;
    const { onEditComment } = this.props;
    onEditComment(this.state.idediting, node.value.trim());

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
                <button className="btn btn-danger pull-right" type="button" onClick={ () => this.handleRemoveComment(comment.idComment)}><span className="glyphicon glyphicon-trash" /></button>
                <button className="btn btn-info pull-right" type="button" onClick={ () => this.handleEditClick(comment.idComment) }><span className="glyphicon glyphicon-edit"/></button>
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
  onAddComment: PropTypes.func.isRequired,
  onRemoveComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired,
  band: PropTypes.object.isRequired
};

CommentList.defaultProps = { 
  comments: []
};