import moment from 'moment';
export default {
  Fields: {
    pNo: {
      defaultValue: '',
      title: '商品編號',
      form: {
        type: 'Input',
        require: true,
      },
      list: {
        fixed: 'left',
      },
    },
    pName: {
      defaultValue: '',
      title: '商品名稱',
      form: {
        type: 'Input',
      },
      list: {},
    },
    pSpec: {
      defaultValue: '',
      title: '商品規格',
      form: {
        type: 'Input',
      },
      list: {},
    },
    pQuantity: {
      defaultValue: 0,
      title: '商品數量',
      form: {
        type: 'Input',
      },
      list: {},
    },
    pDesc: {
      defaultValue: '',
      title: '商品描述',
      form: {
        type: 'TextArea',
      },
      list: {},
    },
    pWay: {
      defaultValue: 'STORE',
      title: '運送方式',
      form: {
        type: 'Radio',
      },
      list: {
        render: (value) => (value === 'STORE' ? '超商取貨' : '宅配'),
      },
    },
    pDate: {
      defaultValue: undefined,
      title: '上架日期',
      form: {
        type: '1',
      },
      list: { render: (value) => moment(value).format('YYYY-MM-DD') },
    },
    pTime: {
      defaultValue: undefined,
      title: '上架時間',
      form: {
        type: '',
      },
      list: { render: (value) => moment(value).format('HH:mm:ss') },
    },
    updateDateTime: {
      defaultValue: undefined,
      title: '修改時間',
      form: {
        type: '',
      },
      list: { render: (value) => moment(value).format('YYYY-MM-DD HH:mm:ss') },
    },
    createDateTime: {
      defaultValue: undefined,
      title: '創建時間',
      form: {
        type: '',
      },
      list: { render: (value) => moment(value).format('YYYY-MM-DD HH:mm:ss') },
    },
  },
  Form: [
    'pNo',
    'pName',
    'pSpec',
    'pQuantity',
    'pDesc',
    'pWay',
    'pDate',
    'pTime',
  ],
  List: [
    'pNo',
    'pName',
    'pSpec',
    'pQuantity',
    'pDesc',
    'pWay',
    'pDate',
    'pTime',
    'updateDateTime',
    'createDateTime',
  ],
};
