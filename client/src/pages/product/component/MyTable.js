import { useState, useEffect } from 'react';
import { Table, Form, Row, Col, Popconfirm, Input, Button } from 'antd';
import moment from 'moment';

const useFilter = (data, filterOptions) => {
  const [fData, setFData] = useState(data);

  const filterData = (data, filterOptions) => {
    const filter = {
      equal: (value, compareValue) => value === compareValue,
      like: (value, compareValue) => value.indexOf(compareValue) >= 0,
      time: (value, compareValue, option) => {
        switch (option) {
          case 'before':
            return moment(value).isBefore(moment(compareValue));
          case 'sameBefore':
            return moment(value).isSameOrBefore(moment(compareValue));
          case 'after':
            return moment(value).isAfter(moment(compareValue));
          case 'sameAfter':
            return moment(value).isSameOrAfter(moment(compareValue));
          default:
            return value === compareValue;
        }
      },
    };

    return data.filter((item) => {
      let errorCnt = 0;
      filterOptions.forEach(({ key, type, value, option }) => {
        !filter[type](item[key], value, option) && errorCnt++;
      });
      return errorCnt === 0;
    });
  };
  return filterData(data, filterOptions);
};

const MyFilter = ({ fields }) => {
  const rowCount = 3;

  const group = (array, rowCount) => {
    let index = 0;
    let newArray = [];
    while (index < array.length) {
      newArray.push(array.slice(index, (index += rowCount)));
    }
    return newArray;
  };

  return (
    <Form>
      {group(fields, rowCount).map((row, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {row.map(({ name, title }, colIndex) => {
              return (
                <Col key={`${rowIndex}-${colIndex}`} span={24 / rowCount}>
                  <Form.Item label={title} name={name}>
                    <Input />
                  </Form.Item>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Form>
  );
};

const MyTable = ({ setting, data, onEdit, onDelete, loading }) => {
  const [page, setPage] = useState(1);
  const [fData, setFData] = useState(data);
  const [filters, setFilters] = useState({});

  const initCol = (setting) => {
    const {
      List: { Fields: List },
    } = setting;
    return [
      {
        key: 'rowIndex',
        width: 50,
        fixed: 'left',
        render: (value, record, index) => (
          <div style={{ textAlign: 'center' }}>
            {(page - 1) * 10 + index + 1}
          </div>
        ),
      },
      ...List.map((key) => {
        const { type, title, list, ...other } = setting.Fields[key];
        const col = {
          key,
          dataIndex: key,
          title,
        };

        switch (type) {
          case 'option':
            const { option } = other;
            return {
              ...col,
              render: (dataValue) =>
                option.filter(({ value }) => {
                  return value === dataValue;
                })[0].text,
            };
          case 'datetime':
            const { format } = other;
            return {
              ...col,
              render: (dataValue) => moment(dataValue).format(format),
            };
        }
        return col;
      }),
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
  };

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
        columns={initCol(setting)}
        dataSource={fData}
        scroll={{ x: 1300 }}
        rowKey="id"
        loading={loading}
        pagination={{
          position: 'top',
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '30', '40', '50'],
          defaultPageSize: 20,
          locale: { items_per_page: '筆/頁' },
          onChange(current) {
            setPage(current);
          },
        }}
      />
    </>
  );
};

export default MyTable;
