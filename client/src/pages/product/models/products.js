import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../util/api';

import initValues from '../util/initValues';
import { createData, updateData } from '../../utils/dataHelp';

export default {
  namespace: 'products',
  state: {
    productList: [],
    current: initValues,
    listloadng: false,
    formloading: false,
  },
  effects: {
    *getProductList(_, { call, put }) {
      yield put({
        type: 'setLoding',
        listloadng: true,
      });
      const data = yield call(getProducts);
      if (data !== undefined && !data.error) {
        yield put({
          type: 'setProductList',
          data: data.data,
        });
      }
    },
    *getProductForm({ key }, { call, put }) {
      if (key === 'new') {
        yield put({
          type: 'setProductForm',
          data: initValues,
        });
      } else {
        yield put({
          type: 'setLoding',
          formloading: true,
        });
        const data = yield call(getProduct, key);
        if (data !== undefined && !data.error) {
          yield put({
            type: 'setProductForm',
            data: data.data,
          });
        } else {
          yield put({
            type: 'setProductForm',
            data: initValues,
          });
        }
      }
    },
    *createProduct({ data = {} }, { call, put }) {
      const response = yield call(createProduct, createData(data));
      if (response !== undefined && !response.error) {
        yield put({
          type: 'getProductList',
        });
      }
    },
    *updateProduct({ data = {} }, { call, put }) {
      const response = yield call(updateProduct, updateData(data));
      if (response !== undefined && !response.error) {
        yield put({
          type: 'getProductList',
        });
      }
    },
    *deleteProduct({ key }, { call, put }) {
      const response = yield call(deleteProduct, key);
      if (response !== undefined && !response.error) {
        yield put({
          type: 'getProductList',
        });
      }
    },
  },
  reducers: {
    setLoding(state, action) {
      return {
        ...state,
        ...action,
      };
    },
    setProductList(state, action) {
      return {
        ...state,
        productList: action.data,
        listloadng: false,
      };
    },
    setProductForm(state, action) {
      return {
        ...state,
        current: action.data,
        formloading: false,
      };
    },
  },
};
