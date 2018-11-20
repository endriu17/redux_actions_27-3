import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';

{
  type: ADD_COMMENT,
  text: 'My first comment'
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';

{
  type: REMOVE_COMMENT,
  id: 15 
}

const EDIT_COMMENT = 'EDIT_COMMENT';

{
  type: EDIT_COMMENT,
  id: 15,
  text: 'edited text of the comment'
}

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

{
  type: THUMB_UP_COMMENT,
  value: +1,
  id: 10 
}

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'

{
  type: THUMB_DOWN_COMMENT,
  value: -1,
  id: 15
}


function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
}

function thumbUpComment(value) {
  return {
    type: THUMB_UP_COMMENT.
    value: +1,
    id: uuid.v4()
  }
}

function thumbDownComment(value) {
  return {
    type: THUMB_DOWN_COMMENT,
    value: -1,
    id: uuid.v4()
  }
}


dispatch(addComment('new comment!'));
dispatch(addComment('next new comment!'));


const boundAddComment = text => dispatch(addComment(text));

boundAddComment('new comment!');
boundAddComment('next new comment!');

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(10);

const boundEditComment = (id, text) => dispatch(editComment(id, text));
boundEditComment(10, 'this is edited comment');

const boundThumbUpComment = value => disptach(thumbUpComment(value));
boundThumbUpComment(+1);

const boundThumbDownComment = value => disptach(thumbDownComment(value));
boundThumbDownComment(-1);