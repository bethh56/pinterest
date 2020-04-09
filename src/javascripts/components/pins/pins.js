import pinData from '../../helpers/data/pinData';
// import utils from '../../helpers/utils';

const buildPins = () => {
  pinData.getPins()
    .then((resolve) => console.error('get pins is working!', resolve))
    .catch((err) => console.error('get pins not working!', err));
};

export default { buildPins };
