'use client';
import React from 'react';
import { Typography } from 'antd';

import { Table, Tag, Input, AutoComplete, Form } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { CustomButton } from '@/app/components/CustomComponents/CustomButton';

import { useState, useEffect, useRef } from 'react';
import { useWindowDimensions } from '@/app/hooks/useWindowDimensions';

import { Drawer } from 'antd';
// add these to divs flex-shrink-0 flex-grow-0 flex-basis-auto

export default function Lawyers() {
  const { Title, Text } = Typography;
  const { TextArea } = Input;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableHeight, setTableHeight] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [form] = Form.useForm();

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10
    }
  });

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

  let results = [
    {
      key: '1',
      name: 'John Brown',
      email: 'john.brown@mail.com',
      tags: ['nice', 'developer'],
      workLoad: '10.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'jim.green@mail.com',
      tags: ['loser'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'joe.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '4',
      name: 'Adam Black',
      email: 'adam.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '5',
      name: 'Joe Black',
      email: 'joe.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '6',
      name: 'Adam Black',
      email: 'adam.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '7',
      name: 'Joe Black',
      email: 'joe.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '8',
      name: 'Adam Black',
      email: 'adam.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '9',
      name: 'Joe Black',
      email: 'joe.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '10',
      name: 'Adam Black',
      email: 'adam.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '11',
      name: 'Joe Black',
      email: 'joe.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    },
    {
      key: '13',
      name: 'Adam Black',
      email: 'adam.black@mail.com',
      tags: ['cool', 'teacher'],
      workLoad: '00.00',
      past_week_hours: '00.00',
      past_month_hours: '00.00'
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => ('' + a.name).localeCompare(b.name)
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => ('' + a.email).localeCompare(b.email)
    },
    {
      title: 'Roles',
      key: 'roles',
      dataIndex: 'roles',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
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
      dataIndex: 'past_week_hours',
      key: 'past_week_hours',
      sorter: (a, b) => Number(a.past_week_hours) - Number(b.past_week_hours)
    },
    {
      title: 'Past Month Hrs',
      dataIndex: 'past_month_hours',
      key: 'past_month_hours',
      sorter: (a, b) => Number(a.past_month_hours) - Number(b.past_month_hours)
    }
  ];

  const fetchData = () => {
    setLoading(true);

    setTimeout(() => {
      setData(results);
      setLoading(false);
      setTableParams(
        {
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: results.length
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          }
        },
        1000
      );
    });
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

  useEffect(() => {
    fetchData();
    getDivHeight();
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const getDivHeight = () => {
    if (pageRef.current && searchBarRef.current) {
      console.log('Div Height:', searchBarRef.current.offsetHeight);
      console.log('Div Height:', pageRef.current.offsetHeight);
      console.log(pageRef.current.offsetHeight - searchBarRef.current.offsetHeight - 150);
      setTableHeight(height - height / 8 - 237);
    }
  };

  return (
    <>
      <div
        ref={pageRef}
        className="flex flex-col gap-4 flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray bg-white rounded-lg py-4 px-4 h-full">
        <div ref={searchBarRef} className="flex justify-between items-center">
          <Input className="w-80 h-8" placeholder="Search Lawyers..." />
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
          loading={loading}
          dataSource={data}
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
            onClick={() => showDrawer()}
          />
        </Form>
      </Drawer>
    </>
  );
}
