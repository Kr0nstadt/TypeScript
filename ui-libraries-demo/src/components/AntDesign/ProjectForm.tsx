import React from 'react';
import { Form, Input, Select, DatePicker, InputNumber, Button, message } from 'antd';
import { Moment } from 'moment';

const { Option } = Select;
const { TextArea } = Input;

interface ProjectFormData {
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  categories: string[];
  deadline: Moment;
  budget: number;
}

const categoriesOptions = [
  'Web Development',
  'Mobile Development',
  'Design',
  'Marketing',
  'Research',
  'Other',
];

export const ProjectForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const formData: ProjectFormData = {
      ...values,
      deadline: values.deadline,
    };
    
    console.log('Form data:', {
      ...formData,
      deadline: formData.deadline.toDate(),
    });
    
    message.success('Проект успешно создан!');
  };

  const validateBudget = (_: any, value: number) => {
    if (value < 0) {
      return Promise.reject('Бюджет не может быть отрицательным');
    }
    if (value > 1000000) {
      return Promise.reject('Бюджет слишком большой');
    }
    return Promise.resolve();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        label="Название проекта"
        name="name"
        rules={[
          { required: true, message: 'Введите название проекта' },
          { min: 3, message: 'Название должно содержать минимум 3 символа' },
        ]}
      >
        <Input placeholder="Введите название проекта" />
      </Form.Item>

      <Form.Item
        label="Описание"
        name="description"
        rules={[{ max: 500, message: 'Описание не должно превышать 500 символов' }]}
      >
        <TextArea rows={4} placeholder="Опишите проект" />
      </Form.Item>

      <Form.Item
        label="Приоритет"
        name="priority"
        rules={[{ required: true, message: 'Выберите приоритет' }]}
      >
        <Select placeholder="Выберите приоритет">
          <Option value="low">Низкий</Option>
          <Option value="medium">Средний</Option>
          <Option value="high">Высокий</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Категории"
        name="categories"
        rules={[{ required: true, message: 'Выберите хотя бы одну категорию' }]}
      >
        <Select mode="multiple" placeholder="Выберите категории">
          {categoriesOptions.map(category => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Дедлайн"
        name="deadline"
        rules={[{ required: true, message: 'Выберите дедлайн' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Бюджет"
        name="budget"
        rules={[
          { required: true, message: 'Введите бюджет' },
          { validator: validateBudget },
        ]}
      >
        <InputNumber
          style={{ width: '100%' }}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value?.replace(/\$\s?|(,*)/g, '') as any}
          placeholder="Введите бюджет"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Создать проект
        </Button>
      </Form.Item>
    </Form>
  );
};