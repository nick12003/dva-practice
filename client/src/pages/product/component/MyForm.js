import {
  Spin,
  Form,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Radio,
  Button,
} from 'antd';
import { useFormikContext } from 'formik';
import moment from 'moment';
import MyFormItem from './MyFormItem';

const MyForm = ({ loding }) => {
  const { values, setFieldValue, setFieldTouched, submitForm } =
    useFormikContext();
  return (
    <>
      <Spin spinning={loding}>
        <Form>
          <Row>
            <Col span={6} offset={1}>
              <MyFormItem label="商品編號" className="required" name="pNo">
                {({ field }) => <Input {...field} />}
              </MyFormItem>
            </Col>
            <Col span={6} offset={2}>
              <MyFormItem label="商品名稱" className="required" name="pName">
                {({ field }) => <Input {...field} />}
              </MyFormItem>
            </Col>
            <Col span={6} offset={2}>
              <MyFormItem label="商品規格" className="required" name="pSpec">
                {({ field }) => <Input {...field} />}
              </MyFormItem>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={1}>
              <MyFormItem label="商品數量" name="pQuantity">
                {({ field }) => <Input {...field} />}
              </MyFormItem>
            </Col>
            <Col span={6} offset={2}>
              <MyFormItem label="運送方式" name="pWay">
                {({ field }) => (
                  <Radio.Group {...field}>
                    <Radio value="STORE">超商取貨</Radio>
                    <Radio value="HOME">宅配</Radio>
                  </Radio.Group>
                )}
              </MyFormItem>
            </Col>
          </Row>
          <Row>
            <Col span={22} offset={1}>
              <MyFormItem label="商品描述" name="pDesc">
                {({ field }) => <Input.TextArea {...field} />}
              </MyFormItem>
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={1}>
              <MyFormItem
                label="上架時間(日期)"
                className="required"
                name="pDate"
              >
                {({ field }) => (
                  <DatePicker
                    {...field}
                    onBlur={() => {
                      field.onBlur('pDate');
                    }}
                    value={values.pDate ? moment(values.pDate) : undefined}
                    onChange={(v) => {
                      setFieldTouched('pDate', true, false);
                      setFieldValue(
                        'pDate',
                        v ? v.format('YYYY-MM-DD HH:mm:ss') : undefined,
                        true,
                      );
                    }}
                  />
                )}
              </MyFormItem>
            </Col>
            <Col span={6} offset={2}>
              <MyFormItem
                label="上架時間(時間)"
                className="required"
                name="pTime"
              >
                {({ field }) => (
                  <TimePicker
                    {...field}
                    value={values.pTime ? moment(values.pTime) : undefined}
                    onChange={(v) => {
                      setFieldTouched('pTime', true, false);
                      setFieldValue(
                        'pTime',
                        v ? v.format('YYYY-MM-DD HH:mm:ss') : undefined,
                        true,
                      );
                    }}
                  />
                )}
              </MyFormItem>
            </Col>
          </Row>
          <Row>
            <Col span={2} offset={20}>
              <Button type="primary" size="large" onClick={submitForm}>
                確定
              </Button>
            </Col>
          </Row>
        </Form>
      </Spin>
    </>
  );
};

export default MyForm;
