'use client';
import React from 'react';
import { Typography } from 'antd';

import { Table, Tag, Input, AutoComplete, Form, message } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { CustomButton } from '@/app/components/CustomComponents/CustomButton';

import { useState, useEffect, useRef } from 'react';
import { useWindowDimensions } from '@/app/hooks/useWindowDimensions';

import { Drawer } from 'antd';
import useSWR, { mutate } from 'swr';

// add these to divs flex-shrink-0 flex-grow-0 flex-basis-auto

export default function Lawyers() {
  const { Title, Text } = Typography;
  const { TextArea } = Input;

  const [searchVal, setSearchVal] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [tableHeight, setTableHeight] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message'
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const validateMessages = {
    required: 'Please enter ${label}.'
  };

  const { height } = useWindowDimensions();

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  const pageRef = useRef(null);
  const searchBarRef = useRef(null);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => ('' + a.fullName).localeCompare(b.fullName)
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => ('' + a.email).localeCompare(b.email)
    },
    {
      title: 'Roles',
      key: 'lawyerRole',
      dataIndex: 'lawyerRole',
      render: (_, { tags }) => (
        <>
          {tags?.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      title: 'Work Load',
      dataIndex: 'workLoad',
      key: 'workLoad',
      sorter: (a, b) => Number(a.workLoad) - Number(b.workLoad)
    },
    {
      title: 'Past Week Hrs',
      dataIndex: 'pastWeekHours',
      key: 'pastWeekHours',
      sorter: (a, b) => Number(a.pastWeekHours) - Number(b.pastWeekHours)
    },
    {
      title: 'Past Month Hrs',
      dataIndex: 'pastMonthHours',
      key: 'pastMonthHours',
      sorter: (a, b) => Number(a.pastMonthHours) - Number(b.pastMonthHours)
    }
  ];

  const customizeRequiredMark = (label, { required }) => (
    <div className="flex items-center mb-0">
      <Text className="font-semibold mb-0">{label}</Text>
      {required ? (
        <Text className="font-semibold mb-0 ml-1 text-red-500">*</Text>
      ) : (
        <></>
        // <Text className="font-semibold mb-0 ml-1">(optional)</Text>
      )}
    </div>
  );

  useEffect(() => {
    getDivHeight();
  }, []);

  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    `https://662ba10dde35f91de158f31b.mockapi.io/api/lawyers`,
    fetcher
  );

  const refresh = () => {
    mutate(`https://662ba10dde35f91de158f31b.mockapi.io/api/lawyers`);
  };

  const filterData = (data, filterCriteria) => {
    return filterCriteria
      ? data.filter((item) => {
          return item.fullName.toLowerCase().includes(filterCriteria.toLowerCase());
        })
      : data;
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const getDivHeight = () => {
    if (pageRef.current && searchBarRef.current) {
      // console.log('Div Height:', searchBarRef.current.offsetHeight);
      // console.log('Div Height:', pageRef.current.offsetHeight);
      // console.log(pageRef.current.offsetHeight - searchBarRef.current.offsetHeight - 150);
      setTableHeight(height - height / 8 - 237);
    }
  };

  return (
    <>
      {contextHolder}
      <div
        ref={pageRef}
        className="flex flex-col gap-4 flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray bg-white rounded-lg py-4 px-4 h-full">
        <div ref={searchBarRef} className="flex justify-between items-center">
          <Input
            className="w-80 h-8"
            value={searchVal}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchVal(e.target.value), setFilteredData(filterData(data, e.target.value));
            }}
            placeholder="Search Lawyers..."
          />
          <CustomButton
            size={'large'}
            icon={<FormOutlined />}
            text={'Create'}
            type={'primary'}
            onClick={() => showDrawer()}
          />
        </div>
        <Table
          columns={columns}
          scroll={{ y: tableHeight }}
          loading={isLoading}
          dataSource={searchVal == '' ? data : filteredData}
          onChange={onChange}
        />
      </div>
      <Drawer title="Add Lawyer" width={'55%'} onClose={onClose} open={drawerOpen}>
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
                  label="Password"
                  name="password"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Input className="w-full" placeholder="Password" />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Input className="w-full" placeholder="Full Name" />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Phone"
                  name="phone"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Input className="w-full" placeholder="Phone" />
                </Form.Item>
              </div>

              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item label="Street Address" name="streetAddress" className="mb-0">
                  <Input className="w-full" placeholder="Street Address" />
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-col w-1/2">
              <Title level={4}> Additional Details</Title>

              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Lawyer Role"
                  name="lawyerRole"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Input className="w-full" placeholder="Lawyer Role" />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item
                  label="Horly Rate"
                  name="hourlyRate"
                  className="mb-0"
                  rules={[
                    {
                      required: true
                    }
                  ]}>
                  <Input className="w-full" placeholder="Hourly Rate" />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item label="MOF Number" name="mofNumber" className="mb-0">
                  <Input className="w-full" placeholder="MOF Number" />
                </Form.Item>
              </div>
              <div className="flex flex-col w-full justify-between mb-4">
                <Form.Item label="Notes" name="notes" className="mb-0">
                  <TextArea className="w-full" placeholder="Notes" rows={4} />
                </Form.Item>
              </div>
            </div>
          </div>
          <CustomButton
            size={'large'}
            text={'Create'}
            type={'primary'}
            onClick={async () => {
              const data = form.getFieldsValue();
              form
                .validateFields()
                .then(async () => {
                  const response = await fetch(
                    'https://662ba10dde35f91de158f31b.mockapi.io/api/lawyers',
                    {
                      method: 'POST', // Important to set method to POST
                      headers: { 'Content-Type': 'application/json' }, // Set headers for JSON data
                      body: JSON.stringify(data) // Convert data to JSON string
                    }
                  ).then((response) => {
                    messageApi.open({
                      type: 'success',
                      content: 'Lawyer addded successfully.'
                    });
                    onClose();
                    refresh();
                    console.log(response);
                  });
                  console.log('Form submitted successfully!');
                })
                .catch((errorInfo) => {
                  console.error('Form validation failed:', errorInfo);
                });
            }}
          />
        </Form>
      </Drawer>
    </>
  );
}
