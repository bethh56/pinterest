import pinData from '../../helpers/data/pinData';
// import boards from '../boards/boards';
import utils from '../../helpers/utils';

const removePin = (e) => {
  const pinId = e.target.closest('.card').id;
  pinData.deletePins(pinId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildPins())
    .catch((err) => console.error('delete pins not working', err));
};

const buildPins = () => {
  pinData.getPins()
    .then((pinInfo) => {
      let domString = '';
      pinInfo.forEach((pin) => {
        console.error('pin data', pin.boardID);
        domString += `<div id=${pin.id} class="card col-3">`;
        domString += `<img id="pinImage"class="card-img-top mx-auto p-3" src="${pin.imageUrl}" alt="Card image cap">`;
        domString += '<div class="d-flex justify-content-around pb-3">';
        domString += '<button id="viewBoard" class=" col-5 btn btn-success">Return to Board <i class="fas fa-undo"></i></button>';
        domString += '<button class="deletePin col-5 btn btn-danger ml-auto">Delete Pin <i class="fas fa-trash"></i></button>';
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('pinDisplay', domString);
      $('.deletePin').click(removePin);
    })
    .catch((err) => console.error('get pins not working!', err));
};

export default { buildPins };
