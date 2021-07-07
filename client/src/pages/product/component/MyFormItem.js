import { Form } from 'antd';
import { Field, useField } from 'formik';

const MyFormItem = ({ label, name, children, className }) => {
  const [field, meta, helpers] = useField({ name });
  return (
    <Form.Item
      label={label}
      className={className}
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={(meta.touched && meta.error) ?? ''}
    >
      <Field name={name}>{children}</Field>
    </Form.Item>
  );
};

export default MyFormItem;
