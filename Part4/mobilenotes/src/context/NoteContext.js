import createDataContext from './createDataContext';
import { Alert } from 'react-native';
//import validate from '../components/FormValidation';

const noteReducer = (state, action) => {
     switch (action.type) {
          case 'get_notes':
               return [...state];
          case 'add_note':
               return [...state,
                    {
                         id: String(Math.floor(Math.random() * 99999)),
                         title: action.payload.title,
                         content: action.payload.content
                    }
               ];
          case 'delete_note':
               return state.filter((note) => note.id !== action.payload);
          case 'edit_note':
               return state.map((note) => {
                    return note.id === action.payload.id
                         ? action.payload
                         : note;
               });
          case 'create_note':
               const note = { title: action.payload.title, content: action.payload.content }
               return note;
          /*
          case 'validate_note':
               const newNote = {
                    title: action.payload.title,
                    content: action.payload.content
               }
               console.log(newNote);
               return state;
               */
          default:
               return state;
     }
};

//action functions
const getNotes = (dispatch) => {
     return (state) => {
          dispatch({type: 'get_notes', payload: state})
     }
}
const createNote = (dispatch) => {
     return (title, content) => {
          dispatch({type: 'create_note', payload:{title,content}})
     }
}
const addNote = (dispatch) => {
     return (title, content, callback) => {
          dispatch({ type: 'add_note', payload: { title, content } });
          if (callback) { callback(); }
     };
};
/* async saving version
const addNote = (dispatch) => {
     return async (title, content, callback) => {
          try {
               await axios.post('sd', title, content)
               dispatch({ type: 'add_blogpost', payload: { title, content } });
               callback();
          }catch(e){}
     };
};
*/
const deleteNote = (dispatch) => {
     return (id) => {
          dispatch({ type: 'delete_note', payload: id })
     }
}
const editNote = (dispatch) => {
     return (id, title, content, callback) => {
          dispatch({
               type: 'edit_note',
               payload: { id, title, content }
          });
          if (callback) { callback(); }
     };
};
/*
const validateNote = (dispatch) => {
     return (title, content) => {
          dispatch({
               type: 'validate_note',
               payload: { title, content }
          });
     };
};
*/
export const { Context, Provider } = createDataContext(
     noteReducer,
     { addNote, deleteNote, editNote, createNote, getNotes },
     [{ title: 'test note 1', content: "testing...", id: '1' },
          { title: 'test note 2', content: "testing...", id: '2' },
          { title: 'test note 3', content: "testing...", id: '3' },
          { title: 'test note 4', content: "testing...", id: '4' }
     ]
);