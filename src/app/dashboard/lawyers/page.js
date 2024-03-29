'use client';
import React from 'react';
import { Typography } from 'antd';

import { Table, Tag, Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { CustomButton } from '@/app/components/CustomComponents/CustomButton';
import { CustomInput } from '@/app/components/CustomComponents/CustomInput';

import { useState, useEffect, useRef } from 'react';

import { Drawer } from 'antd';
import ActionButton from '@/app/components/actionButton';
// add these to divs flex-shrink-0 flex-grow-0 flex-basis-auto

export default function Lawyers() {
  const { Title } = Typography;
  const { TextArea } = Input;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [h, setH] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10
    }
  });

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
      setH(pageRef.current.offsetHeight - searchBarRef.current.offsetHeight - 150);
    }
  };

  return (
    <>
      <div
        ref={pageRef}
        className="flex flex-col gap-4 flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray bg-white rounded-lg py-4 px-4 h-full">
        <div ref={searchBarRef} className="flex justify-between">
          <CustomInput classes="w-80" placeholder="Search Lawyers..." />
          <CustomButton
            // link={'/dashboard/lawyers/add'}
            size={'large'}
            classes={'w-24'}
            icon={<FormOutlined />}
            text={'Create'}
            color={'primary'}
            onClick={() => showDrawer()}
          />
        </div>
        <Table
          columns={columns}
          scroll={{ y: h }}
          loading={loading}
          dataSource={data}
          onChange={onChange}
        />
      </div>
      <Drawer title="Add Lawyer" width={'55%'} onClose={onClose} open={drawerOpen}>
        <div className="flex">
          <div className="flex flex-col">
            <Title level={4}> Personal Information</Title>

            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>Email*</Title>
              <Input className="w-72" placeholder="Email" />
            </div>
            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>Password*</Title>
              <Input className="w-72" placeholder="Password" />
            </div>
            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>Full Name*</Title>
              <Input className="w-72" placeholder="Full Name" />
            </div>
            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>Phone*</Title>
              <Input className="w-72" placeholder="Phone" />
            </div>

            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>Street Address</Title>
              <Input className="w-72" placeholder="Street Address" />
            </div>
          </div>

          <div className="flex flex-col">
            <Title level={4}> Additional Details</Title>

            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>Lawyer Role*</Title>
              <Input className="w-72" placeholder="Lawyer Role" />
            </div>
            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>Hourly Rate*</Title>
              <Input className="w-72" placeholder="Hourly Rate" />
            </div>
            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>MOF Number</Title>
              <Input className="w-72" placeholder="MOF Number" />
            </div>
            <div className="flex flex-col w-[24rem] justify-between mb-4">
              <Title level={5}>Notes</Title>
              <TextArea className="w-72" placeholder="Notes" rows={4} />
            </div>
          </div>
        </div>
        <ActionButton
          link={''}
          classes={'text-white w-24'}
          icon={<FormOutlined />}
          text={'Create'}
          type={'primary'}
        />
      </Drawer>
    </>
  );
}
