
import history from '../history';

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_TODO,
    DELETE_TODO,
} from './types';

export const signIn=(userId)=>{
    return {
        type: SIGN_IN,
        payload:userId
    }
}
export const signOut=()=>{
    return {
        type:SIGN_OUT
    }
}

export const createTodo=(todo)=>{
    return async (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('todos').add({...todo,userId:getState().auth.userId,createdAt:new Date()}).then(()=>{
            dispatch({
                type:CREATE_TODO,
            });
        })
    }
}

export const deleteTodo=(id)=>{
    return async (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('todos').doc(id).delete().then(()=>{
            dispatch({
                type:DELETE_TODO,
            });
            history.push('/');
        })
    }
}

