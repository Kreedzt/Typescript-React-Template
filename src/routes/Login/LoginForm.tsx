import React from 'react';
import { 
  Form, 
  Icon, 
  Input, 
  Button 
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { LoginReqData } from '../../service/login';

const { create } = Form;

interface LoginFormProps extends FormComponentProps {
  submit: (value) => void;
  loading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { submit, loading, form } = props;
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values: LoginReqData) => {
      if (err) return;
      submit(values);
    });
  };

  const formItemLayout = {
    labelCol: {
      span: 6
    },
    wrapperCol: { span: 18 }
  };
  return (
    <Form onSubmit={submitForm} className="login-form" {...formItemLayout}>
      <Form.Item label="用户名">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: '请输入用户名' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="用户名"
          />
        )}
      </Form.Item>
      <Form.Item label="密码">
        {form.getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入密码' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="密码"
          />
        )}
      </Form.Item>
      <Button
        loading={loading}
        type="primary"
        htmlType="submit"
        className="login-form-button"
      >
        登录
      </Button>
    </Form>
  );
};

export default create<LoginFormProps>()(LoginForm);
