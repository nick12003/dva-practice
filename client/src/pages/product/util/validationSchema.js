import moment from 'moment';
import * as Yup from 'yup';
import regexHelpers from './regexHelpers';
import { getProductByFilter } from './api';

export default Yup.object({
  pNo: Yup.string()
    .matches(regexHelpers.isNotChinese(false), '請輸入半型英文/數字')
    .matches(regexHelpers.isNotFull(false), '請輸入半型英文/數字')
    .test({
      name: 'pNo_existed',
      message: '商品編號不允許重複',
      test: async (value, content) => {
        const { data } = await getProductByFilter(`pNo=${value}`);
        //console.log(data?.[0]?.id === content.parent.id);
        if (data.length > 0) {
          if (data[0].id !== content.parent.id) {
            return false;
          }
        }
        return true;
      },
    })
    .required('此欄位必填'),
  pName: Yup.string()
    .matches(regexHelpers.isNotFull(true), '中文/半型英文/數字')
    .required('此欄位必填'),
  pSpec: Yup.string()
    .matches(regexHelpers.isNotFull(true), '中文/半型英文/數字')
    .required('此欄位必填'),
  pQuantity: Yup.string()
    .matches(regexHelpers.isNumber(), '請輸入半形數字')
    .required('此欄位必填'),
  pDesc: Yup.string().matches(
    regexHelpers.isNotFull(true),
    '中文/半型英文/數字',
  ),
  pWay: Yup.string().oneOf(['HOME', 'STORE'], ''),
  pDate: Yup.date()
    .nullable()
    .test({
      name: 'pDate_required',
      message: '此欄位必填',
      test: async (value) => {
        if (!value) return false;
        return true;
      },
    })
    .test({
      name: 'pDate_format',
      message: '請輸入YYYY-MM-DD',
      test: async (value) => {
        if (!value) return false;
        if (!moment(value)) return false;
        return true;
      },
    }),
  pTime: Yup.date()
    .nullable()
    .test({
      name: 'pTime_required',
      message: '此欄位必填',
      test: async (value) => {
        if (!value) return false;
        return true;
      },
    })
    .test({
      name: 'pTime_format',
      message: '請輸入hh:mm:ss',
      test: async (value) => {
        if (!value) return false;
        if (!moment(value)) return false;
        return true;
      },
    }),
});
