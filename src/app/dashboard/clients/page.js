'use client';
import React from 'react';
import {
  Space,
  Table,
  Input,
  Drawer,
  Typography,
  Upload,
  DatePicker,
  Form,
  AutoComplete
} from 'antd';
import { FormOutlined } from '@ant-design/icons';

import { useWindowDimensions } from '@/app/hooks/useWindowDimensions';

import { useState, useEffect } from 'react';
import { CustomButton } from '@/app/components/CustomComponents/CustomButton';

// add these to divs flex-shrink-0 flex-grow-0 flex-basis-auto

export default function Clients() {
  const { Title, Paragraph, Text } = Typography;
  const { TextArea } = Input;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const { height } = useWindowDimensions();

  const [tableHeight, setTableHeight] = useState(0);

  const [form] = Form.useForm();

  useEffect(() => {
    setTableHeight(height - height / 8 - 240);
  }, []);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
    onReset();
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const customizeRequiredMark = (label, { required }) => (
    <div className="flex items-center mb-0">
      <Text className="font-semibold mb-0">{label}</Text>
      {required ? (
        <Text className="font-semibold mb-0 ml-1">*</Text>
      ) : (
        <></>
        // <Text className="font-semibold mb-0 ml-1">(optional)</Text>
      )}
    </div>
  );

  const validateMessages = {
    required: 'Please enter ${label}.'
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Date Created',
      dataIndex: 'date_created',
      key: 'date_created'
    },
    {
      title: 'Client Type',
      dataIndex: 'client_type',
      key: 'client_type'
    },
    {
      title: 'Active Matters',
      dataIndex: 'active_matters',
      key: 'active_matters'
    },
    {
      title: 'Balance Of Expenses',
      dataIndex: 'balance_expenses',
      key: 'balance_expenses'
    },
    {
      title: 'Balances Of Fees',
      dataIndex: 'balance_fees',
      key: 'balance_fees'
    },
    {
      title: 'Related Clients',
      dataIndex: 'realted_clients',
      key: 'realted_clients'
    }
  ];

  const data = [
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    },
    {
      name: 'Slim Shady',
      date_created: '04/02/2024',
      client_type: 'Local Client',
      active_matters: 1,
      balance_expenses: '-50.00',
      balance_fees: '-110.00',
      realted_clients: ''
    }
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <>
      <div className="flex flex-col gap-4 flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray bg-white rounded-lg py-4 px-4 h-full ">
        <div className="flex justify-between items-center">
          <Input size="small" className="w-80 h-8" placeholder="Search Clients..." />
          <div className="flex gap-4">
            <CustomButton
              size={'large'}
              text={'Reports'}
              type={'secondary'}
              onClick={() => showDrawer()}
            />

            <CustomButton
              size={'large'}
              icon={<FormOutlined />}
              text={'Create'}
              type={'primary'}
              onClick={() => showDrawer()}
            />
          </div>
        </div>
        <Table
          scroll={{ y: tableHeight }}
          sticky={true}
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </div>
      <Drawer title="Add Client" width={'55%'} onClose={onClose} open={drawerOpen}>
        <Form
          requiredMark={customizeRequiredMark}
          validateMessages={validateMessages}
          className="w-full"
          layout={'vertical'}
          form={form}
          name="control-hooks"
          onFinish={onFinish}>
          <div className="flex gap-8">
            <div className="flex flex-col w-1/2">
              <Title level={4}> Personal Information</Title>

              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Name"
                  name="name"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Input className="w-full" placeholder="Name" />
                </Form.Item>
                {/* <p className="text-xs text-red-400">Name cannot be empty.</p> */}
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Country"
                  name="country"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <AutoComplete placeholder="Country" />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Birth Date"
                  name="birthDate"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <DatePicker className="w-full" placeholder="Birth Date" onChange={onChange} />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Client Type"
                  name="clientType"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <AutoComplete className="w-full" placeholder="Client Type" />
                </Form.Item>
              </div>

              <Title level={4}> Additional Information</Title>

              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item label="Related Clients" name="relatedClients" className="mb-0">
                  <AutoComplete className="w-full" placeholder="Related Clients" />
                </Form.Item>
              </div>

              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item label="Notes" name="notes" className="mb-0">
                  <TextArea className="w-full" placeholder="Notes" rows={2} />
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-col w-1/2">
              <Title level={4}> Contact Information</Title>

              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Email"
                  name="email"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Input className="w-full" placeholder="Email" />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Mobile"
                  name="mobile"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Space.Compact>
                    <Input style={{ width: '20%' }} defaultValue="0571" />
                    <Input style={{ width: '80%' }} defaultValue="26888888" />
                  </Space.Compact>
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Fax"
                  name="fax"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Input className="w-full" placeholder="Fax" />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Address"
                  name="address"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <TextArea className="w-full" placeholder="Address" rows={3} />
                </Form.Item>
              </div>
            </div>
          </div>
          <div>
            <CustomButton
              size={'large'}
              text={'Create'}
              type={'primary'}
              onClick={() => showDrawer()}
            />
          </div>
        </Form>
      </Drawer>
    </>
  );
}
