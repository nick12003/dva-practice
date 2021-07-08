import moment from 'moment';
export default {
  Fields: {
    pNo: {
      defaultValue: '',
      title: '商品編號',
      type: 'text',
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
      type: 'text',
      form: {
        type: 'Input',
        require: true,
      },
      list: {},
    },
    pSpec: {
      defaultValue: '',
      title: '商品規格',
      type: 'text',
      form: {
        type: 'Input',
        require: true,
      },
      list: {},
    },
    pQuantity: {
      defaultValue: 0,
      title: '商品數量',
      type: 'number',
      form: {
        type: 'Input',
        require: true,
      },
      list: {},
    },
    pDesc: {
      defaultValue: '',
      title: '商品描述',
      type: 'text',
      form: {
        type: 'TextArea',
      },
      list: {},
    },
    pWay: {
      defaultValue: 'STORE',
      title: '運送方式',
      type: 'option',
      option: [
        {
          value: 'STORE',
          text: '超商取貨',
        },
        {
          value: 'HOME',
          text: '宅配',
        },
      ],
      form: {
        type: 'Radio',
      },
      list: {},
    },
    pDate: {
      defaultValue: undefined,
      title: '上架日期',
      type: 'datetime',
      format: 'YYYY-MM-DD',
      form: {
        type: 'DatePicker',
        require: true,
      },
      list: {},
    },
    pTime: {
      defaultValue: undefined,
      title: '上架時間',
      type: 'datetime',
      format: 'HH:mm:ss',
      form: {
        type: 'TimePicker',
        require: true,
      },
      list: {},
    },
    updateDateTime: {
      defaultValue: undefined,
      title: '修改時間',
      type: 'datetime',
      format: 'YYYY-MM-DD HH:mm:ss',
      form: {
        type: 'DatePicker',
      },
      list: {},
    },
    createDateTime: {
      defaultValue: undefined,
      title: '創建時間',
      type: 'datetime',
      format: 'YYYY-MM-DD HH:mm:ss',
      form: {
        type: 'DatePicker',
      },
      list: {},
    },
  },
  Form: {
    Fields: [
      'pNo',
      'pName',
      'pSpec',
      'pQuantity',
      'pDesc',
      'pWay',
      'pDate',
      'pTime',
    ],
  },
  List: {
    Filter: ['pNo', 'pName', 'pWay'],
    Fields: [
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
  },
};
