import utils from '../../helpers/utils';

const newBoardModal = () => {
  console.error('button click is working for new food modal');
  $('#boardModal').modal('show');
  let domString = '';
  domString += '<form  id="boardForm">';
  domString += '<div class="form-group">';
  domString += '<label for="exampleInputEmail1">Add a Board</label>';
  domString += '<input type="email" class="form-control" id="boardName" aria-describedby="emailHelp" placeholder="Enter New Board Name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="exampleInputEmail1">Board Decription</label>';
  domString += '<input type="email" class="form-control" id="boardDecription" aria-describedby="emailHelp" placeholder="Enter Board Decription">';
  domString += '</div>';
  domString += '</form>';

  $('#editBoardSubmit').addClass('hide');
  utils.printToDom('modalBoardForm', domString);
};

export default { newBoardModal };
