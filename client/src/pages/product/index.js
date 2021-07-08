import { useState, useEffect } from 'react';
import { connect } from 'umi';
import moment from 'moment';
import { Modal, Input, Button, Row, Col, Typography } from 'antd';
import { Formik } from 'formik';

import './index.less';
import MyTable from './component/MyTable';
import MyForm from './component/MyForm';
import validationSchema from './util/validationSchema';

import unit from './util/Unit';

const Product = ({
  products: { current, productList, listloadng, formloading },
  getList,
  getForm,
  create,
  update,
  remove,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState('new');
  useEffect(() => {
    getList();
  }, []);
  const onEdit = (id) => {
    getForm(id);
    setMode('edit');
    openModal();
  };

  const onInsert = () => {
    getForm('new');
    setMode('new');
    openModal();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const submitForm = (values) => {
    values.id ? update(values) : create(values);
    closeModal();
  };

  const randomData = () =>
    create({
      pNo: 'Pro' + new Date().getTime(),
      pName: 'this is a name',
      pSpec: 'this is a spec',
      pQuantity: 0,
      pDesc: 'this is a desc',
      pWay: 'STORE',
      pDate: moment().format('YYYY-MM-DD HH:mm:ss'),
      pTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    });

  return (
    <div style={{ paddingTop: '32px', margin: '0 5rem' }}>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography.Title>Products</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <MyTable
            setting={unit}
            data={productList}
            onDelete={remove}
            onEdit={onEdit}
            loading={listloadng}
          />
        </Col>
      </Row>
      <Row
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Col style={{ margin: '0.5rem' }}>
          <Button type="primary" icon="question" onClick={randomData}>
            隨機
          </Button>
        </Col>
        <Col style={{ margin: '0.5rem' }}>
          <Button type="primary" icon="form" onClick={onInsert}>
            新增
          </Button>
        </Col>
      </Row>
      <Modal
        destroyOnClose
        title={mode}
        visible={modalOpen}
        onCancel={closeModal}
        footer={null}
        style={{ top: 20 }}
        width="80%"
      >
        <Formik
          enableReinitialize
          initialValues={current}
          validateOnBlur
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          <MyForm loding={formloading} />
        </Formik>
      </Modal>
    </div>
  );
};

const mapStateToProps = (props) => {
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      dispatch({
        type: 'products/getProductList',
      });
    },
    getForm(key) {
      dispatch({
        type: 'products/getProductForm',
        key,
      });
    },
    create(data) {
      dispatch({
        type: 'products/createProduct',
        data,
      });
    },
    update(data) {
      dispatch({
        type: 'products/updateProduct',
        data,
      });
    },
    remove(key) {
      dispatch({
        type: 'products/deleteProduct',
        key,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
