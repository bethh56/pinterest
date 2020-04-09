import pinData from '../../helpers/data/pinData';
// import utils from '../../helpers/utils';

const buildPins = () => {
  pinData.getPins()
    .then((pinInfo) => console.error('get pins is working!', pinInfo))
    .catch((err) => console.error('get pins not working!', err));
};

export default { buildPins };
