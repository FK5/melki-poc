'use client';
import React from 'react';
import { Space, Table, Input, Drawer, Typography, Upload, DatePicker } from 'antd';
import { Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';

import { UploadOutlined } from '@ant-design/icons';

import { useWindowDimensions } from '@/app/hooks/useWindowDimensions';

import { useState, useEffect } from 'react';
import { CustomButton } from '@/app/components/CustomComponents/CustomButton';

// add these to divs flex-shrink-0 flex-grow-0 flex-basis-auto

export default function Clients() {
  const { Title } = Typography;
  const { TextArea } = Input;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const { height } = useWindowDimensions();

  const [tableHeight, setTableHeight] = useState(0);

  useEffect(() => {
    setTableHeight(height - height / 8 - 240);
  }, []);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
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
        <div className="flex gap-8">
          <div className="flex flex-col w-1/2">
            <Title level={4}> Personal Information</Title>

            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Name*</Title>
              <Input className="w-full" placeholder="Name" />
            </div>
            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Country*</Title>
              <Input className="w-full" placeholder="Country" />
            </div>
            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Birth Date*</Title>
              <DatePicker placeholder="Birth Date" onChange={onChange} />
            </div>
            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Client Type*</Title>
              <Input className="w-full" placeholder="Client Type" />
            </div>

            <Title level={4}> Additional Information</Title>

            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Related Clients</Title>
              <Input className="w-full" placeholder="Related Clients" />
            </div>

            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Notes</Title>
              <TextArea className="w-full" placeholder="Notes" rows={2} />
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <Title level={4}> Contact Information</Title>

            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Email*</Title>
              <Input className="w-full" placeholder="Email" />
            </div>
            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Mobile*</Title>
              <Space.Compact>
                <Input style={{ width: '20%' }} defaultValue="0571" />
                <Input style={{ width: '80%' }} defaultValue="26888888" />
              </Space.Compact>
            </div>
            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Fax</Title>
              <Input className="w-full" placeholder="Fax" />
            </div>
            <div className="flex flex-col w-full justify-between mb-4">
              <Title level={5}>Address</Title>
              <TextArea className="w-full" placeholder="Address" rows={3} />
            </div>

            <Title level={4}> Attachments </Title>
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
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
      </Drawer>
    </>
  );
}
