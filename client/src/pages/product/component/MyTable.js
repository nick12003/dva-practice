import { useState, useEffect } from 'react';
import { Table, Form, Row, Col, Popconfirm, Input, Button } from 'antd';
import moment from 'moment';

const MyTable = ({ data, onEdit, onDelete }) => {
  const [page, setPage] = useState(1);
  const [fData, setFData] = useState(data);
  const [filters, setFilters] = useState({});

  const columns = [
    {
      key: 'rowIndex',
      width: 50,
      fixed: 'left',
      render: (value, record, index) => (
        <div style={{ textAlign: 'center' }}>{(page - 1) * 10 + index + 1}</div>
      ),
    },
    {
      title: '商品編號',
      width: 150,
      fixed: 'left',
      dataIndex: 'pNo',
      key: 'pNo',
    },
    {
      title: '商品名稱',
      dataIndex: 'pName',
      key: 'pName',
    },
    {
      title: '商品規格',
      dataIndex: 'pSpec',
      key: 'pSpec',
    },
    {
      title: '商品數量',
      dataIndex: 'pQuantity',
      key: 'pQuantity',
    },
    {
      title: '商品描述',
      dataIndex: 'pDesc',
      key: 'pDesc',
    },
    {
      title: '運送方式',
      dataIndex: 'pWay',
      key: 'pWay',
      render: (value) => (value === 'STORE' ? '超商取貨' : '宅配'),
    },
    {
      title: '上架日期',
      dataIndex: 'pDate',
      key: 'pDate',
      render: (value) => moment(value).format('YYYY-MM-DD'),
    },
    {
      title: '上架時間',
      dataIndex: 'pTime',
      key: 'pTime',
      render: (value) => moment(value).format('HH:mm:ss'),
    },
    {
      title: '修改時間',
      dataIndex: 'updateDateTime',
      key: 'updateDateTime',
      render: (value) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '創建時間',
      dataIndex: 'createDateTime',
      key: 'createDateTime',
      render: (value) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      width: 150,
      fixed: 'right',
      key: 'action',
      render: (value, record) => (
        <>
          <Button type="link" size="small" onClick={() => onEdit(record.id)}>
            編輯
          </Button>
          <Popconfirm title="確認刪除?" onConfirm={() => onDelete(record.id)}>
            <Button type="link" size="small">
              刪除
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handlerFilter = (e) => {
    let { value, name } = e.target;
    setFilters((preFilters) => ({ ...preFilters, [name]: value }));
  };

  const onReset = () => {
    setFilters({});
    setFData(data);
  };
  const onFilter = (e) => {
    e.preventDefault();
    setFData(getFilterData());
  };

  const getFilterData = () => {
    return data.filter((item) => {
      let errorCnt = 0;
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          if (item[key].indexOf(filters[key]) < 0) {
            errorCnt = errorCnt + 1;
          }
        }
      });
      return errorCnt === 0;
    });
  };

  useEffect(() => {
    setFData(getFilterData());
  }, [data]);

  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onSubmit={onFilter}
      >
        <Row type="flex">
          <Col>
            <Form.Item label={'商品編號'}>
              <Input name="pNo" value={filters.pNo} onChange={handlerFilter} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label={'商品名稱'}>
              <Input
                name="pName"
                value={filters.pName}
                onChange={handlerFilter}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label={'商品規格'}>
              <Input
                name="pSpec"
                value={filters.pSpec}
                onChange={handlerFilter}
              />
            </Form.Item>
          </Col>
          <Col offset={1} style={{ display: 'flex' }}>
            <Form.Item>
              <Button onClick={onReset}>重置</Button>
            </Form.Item>
            <Form.Item style={{ marginLeft: '0.5rem' }}>
              <Button htmlType="submit">搜尋</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table
        columns={columns}
        dataSource={fData}
        //dataSource={data}
        scroll={{ x: 1300 }}
        rowKey="id"
        pagination={{
          onChange(current) {
            setPage(current);
          },
        }}
      />
    </>
  );
};

export default MyTable;
