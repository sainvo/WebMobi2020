
export default function validate(title,content, notesNow) {
     //console.log( newNote );
     let errors = {};
     if (!title) {
          errors.title = 'title required'
     } else if (!content ) {
          errors.content = 'content required'
     } else (notesNow.map(note => {
          if (note.title === title) {
               errors.title = 'Note with same title already exists.'
          } else if ((note.content === content)) {
               errors.content = 'Note with same content already exists.'
          }
     }));
     return errors;
};
