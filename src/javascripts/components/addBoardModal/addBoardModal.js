import utils from '../../helpers/utils';

const newFoodModal = () => {
  console.error('button click is working for new food modal');
  $('#boardModal').modal('show');
  let domString = '';
  domString += '<h1>TESTING</h1>';
  utils.printToDom('modalBoardForm', domString);
};

export default { newFoodModal };
