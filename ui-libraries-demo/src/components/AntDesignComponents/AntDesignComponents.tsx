import React from 'react';
import { Form, Input, InputNumber, Select, DatePicker, Button, Card, Row, Col, Statistic, message } from 'antd';
import { Line, Pie, Column } from '@ant-design/charts';
import { mockChartData, mockStats, categoriesOptions } from '../../data/mockData';
import { useAppState } from '../../data/Store';
import moment from 'moment';

const { TextArea } = Input;
const { Option } = Select;

interface ProjectForm {
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  categories: string[];
  deadline: moment.Moment;
  budget: number;
}

const AntDesignComponents: React.FC = () => {
  const [form] = Form.useForm();
  const { projects, addProject, users } = useAppState();

  const onFinish = (values: ProjectForm) => {
    const formattedData = {
      ...values,
      deadline: values.deadline.toDate(),
    };
    
    addProject({
      name: values.name,
      description: values.description,
      priority: values.priority,
      categories: values.categories,
      deadline: values.deadline.format('YYYY-MM-DD'),
      budget: values.budget,
    });
    
    console.log('Данные проекта:', formattedData);
    message.success('Проект успешно создан!');
    form.resetFields();
  };

  const lineConfig = {
    data: mockChartData.filter(item => item.category === 'Котики'),
    xField: 'date',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    interactions: [{ type: 'marker-active' }],
    color: '#ec4899',
  };

  const pieConfig = {
    data: [
      { category: 'Активные', value: users.filter(u => u.status).length },
      { category: 'Неактивные', value: users.filter(u => !u.status).length },
    ],
    angleField: 'value',
    colorField: 'category',
    radius: 0.8,
    interactions: [{ type: 'element-active' }],
    color: ['#ec4899', '#a855f7'],
  };

  const columnConfig = {
    data: [
      { type: 'Пользователи', value: users.length },
      { type: 'Проекты', value: projects.length },
      { type: 'Активные', value: users.filter(u => u.status).length },
    ],
    xField: 'type',
    yField: 'value',
    columnStyle: {
      radius: [4, 4, 0, 0],
    },
    color: '#ec4899',
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-8">
        Ant Design Компоненты
      </h2>

      {/* Статистические карточки */}
      <Row gutter={16} className="mb-8">
        <Col span={6}>
          <Card className="text-center border-2 border-pink-200 rounded-2xl shadow-lg">
            <Statistic
              title="Пользователи"
              value={users.length}
              valueStyle={{ color: '#ec4899' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="text-center border-2 border-purple-200 rounded-2xl shadow-lg">
            <Statistic
              title="Проекты"
              value={projects.length}
              valueStyle={{ color: '#a855f7' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="text-center border-2 border-pink-200 rounded-2xl shadow-lg">
            <Statistic
              title="Активные"
              value={users.filter(u => u.status).length}
              valueStyle={{ color: '#ec4899' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="text-center border-2 border-purple-200 rounded-2xl shadow-lg">
            <Statistic
              title="Бюджет"
              value={projects.reduce((sum, p) => sum + p.budget, 0)}
              prefix="₽"
              valueStyle={{ color: '#a855f7' }}
            />
          </Card>
        </Col>
      </Row>

      <div className="grid grid-cols-2 gap-8">
        {/* Форма создания проекта */}
        <Card 
          title="📋 Создание проекта" 
          className="border-2 border-pink-200 rounded-2xl shadow-xl"
          headStyle={{ 
            background: 'linear-gradient(135deg, #fdf2f8, #faf5ff)',
            borderBottom: '2px solid #fbcfe8',
            borderRadius: '16px 16px 0 0',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ec4899'
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
          >
            <Form.Item
              name="name"
              label="Название проекта"
              rules={[{ required: true, message: 'Введите название проекта!' }]}
            >
              <Input 
                placeholder="Введите название..." 
                className="input-cute"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="description"
              label="Описание"
              rules={[{ required: true, message: 'Введите описание проекта!' }]}
            >
              <TextArea 
                placeholder="Опишите проект..." 
                rows={4}
                className="input-cute"
              />
            </Form.Item>

            <Form.Item
              name="priority"
              label="Приоритет"
              rules={[{ required: true, message: 'Выберите приоритет!' }]}
            >
              <Select placeholder="Выберите приоритет" className="input-cute" size="large">
                <Option value="low">🔵 Низкий</Option>
                <Option value="medium">🟡 Средний</Option>
                <Option value="high">🔴 Высокий</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="categories"
              label="Категории"
              rules={[{ required: true, message: 'Выберите хотя бы одну категорию!' }]}
            >
              <Select 
                mode="multiple" 
                placeholder="Выберите категории"
                className="input-cute"
                size="large"
              >
                {categoriesOptions.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="deadline"
              label="Дедлайн"
              rules={[{ required: true, message: 'Выберите дедлайн!' }]}
            >
              <DatePicker 
                className="w-full input-cute"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="budget"
              label="Бюджет (₽)"
              rules={[{ required: true, message: 'Введите бюджет!' }]}
            >
              <InputNumber
                placeholder="Введите бюджет"
                className="w-full input-cute"
                min={0}
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large"
                className="w-full btn-primary h-12 text-lg font-bold"
              >
                🐱 Создать проект
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* Графики и список проектов */}
        <div className="space-y-6">
          <Card 
            title="📊 Статистика" 
            className="border-2 border-purple-200 rounded-2xl shadow-xl"
            headStyle={{ 
              background: 'linear-gradient(135deg, #faf5ff, #fdf2f8)',
              borderBottom: '2px solid #e9d5ff',
              borderRadius: '16px 16px 0 0',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#a855f7'
            }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Column {...columnConfig} />
              <Pie {...pieConfig} />
            </div>
          </Card>

          <Card 
            title="📋 Созданные проекты" 
            className="border-2 border-pink-200 rounded-2xl shadow-xl"
            headStyle={{ 
              background: 'linear-gradient(135deg, #fdf2f8, #faf5ff)',
              borderBottom: '2px solid #fbcfe8',
              borderRadius: '16px 16px 0 0',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#ec4899'
            }}
          >
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {projects.map(project => (
                <div key={project.id} className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                  <div className="font-semibold text-pink-700">{project.name}</div>
                  <div className="text-sm text-purple-600">Бюджет: {project.budget}₽</div>
                  <div className="text-xs text-gray-500">Приоритет: {project.priority}</div>
                </div>
              ))}
              {projects.length === 0 && (
                <div className="text-center text-gray-500 py-4">
                  Пока нет проектов. Создайте первый!
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AntDesignComponents;