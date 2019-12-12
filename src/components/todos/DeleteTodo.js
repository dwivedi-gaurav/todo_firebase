import React from 'react';
import Modal from '../Modal';
import {connect} from 'react-redux';
import {deleteTodo} from '../../actions';
import {Link} from 'react-router-dom'; 
import history from '../../history';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class DeleteTodo extends React.Component{
    
    renderActions=()=>{
        return(
            <div>
                <button className="ui negative button" onClick={()=>this.props.deleteTodo(this.props.match.params.id)}>Delete</button>
                <Link to="/" className="ui cancel button">Cancel</Link>
            </div>
        )
    }
    render(){
        console.log("Component rendered..")
        return(
            <div>
                <Modal
                    header="Delete Todo"
                    content={`Are you sure you want to delete todo: ${this.props.todo?this.props.todo.todo:""}`} 
                    action={this.renderActions()}
                    onDismiss={()=>history.push('/')}
                />
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    const todo=state.firestore.ordered.todos.filter((todo)=>{
        return todo.id===ownProps.match.params.id;
    });
    return{todo:todo[0]}
}

export default compose(
    connect(mapStateToProps,{deleteTodo}),
    firestoreConnect([
        {collection:'todos'}
    ])
)(DeleteTodo);

 