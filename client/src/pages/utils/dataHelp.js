import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const dateTimeFormat = (data, mode, fields = []) => {
  const newData = { ...data };
  fields.forEach((key) => {
    switch (mode) {
      case 'Api2Form':
        newData[key] = moment(data[key]);
        break;
      case 'Form2Api':
        newData[key] = data[key].format('YYYY-MM-DD HH:mm:ss');
        break;
      default:
        break;
    }
  });
  return newData;
};

export const createData = (data) => {
  let id = uuidv4();
  return {
    ...data,
    id,
    createDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    updateDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  };
};

export const updateData = (data) => ({
  ...data,
  updateDateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
});
