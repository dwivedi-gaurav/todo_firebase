import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TodoForm from './TodoForm';
import {createTodo} from '../../actions/index';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class ListTodos extends React.Component{
    renderList=()=>{
        return this.props.todos.map((todo)=>{
            return(
                <div className="item" key={todo.id}>
                    <div className="content">
                        {this.renderActionButtons(todo)}
                        {todo.todo}
                    </div>
                </div>
            )
        });
    }
    onSubmit=(formValues)=>{
        this.props.createTodo(formValues);
    }
    renderActionButtons=(todo)=>{
        return(
            <div>
                <Link to={`/todo/edit/${todo.id}`} className="ui right floated primary mini button">Edit</Link>
                <Link to={`/todo/delete/${todo.id}`} className="ui right floated red mini button">Delete</Link>
            </div>
        )
    }
    render(){
        if(!this.props.auth.isSignedIn){
            return <h2>Please LogIn to access your todos!</h2>
        }
        return(
            <div className="ui grid" style={{marginTop:'30px'}}>
                <div className="eight wide column">
                    <TodoForm onSubmit={this.onSubmit} initialValues={{todo:""}}/>
                </div>
                <div className="eight wide column" style={{borderLeft:"1px solid #d4d4d5"}}>
                    <div className="ui segment">
                        <div className="ui relaxed ordered divided list">
                            {this.renderList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state);
    return{
        todos:state.firestore.ordered.todos,
        auth:state.auth
    }
}

export default compose(
    connect(mapStateToProps,{createTodo}),
    firestoreConnect([
        {collection:'todos'}
    ])
)(ListTodos);