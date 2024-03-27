'use client'
import React from 'react';
import { Space, Table, Tag, Input } from 'antd';
import { Button, Flex } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import Link from 'next/link';
import ActionButton from '@/app/components/actionButton';

// add these to divs flex-shrink-0 flex-grow-0 flex-basis-auto

export default function Lawyers() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.name - b.name,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email - b.email,
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
            ),
        },
        {
            title: 'Work Load',
            dataIndex: 'workLoad',
            key: 'workLoad',
            sorter: (a, b) => a.workLoad - b.workLoad,
        },
        {
            title: 'Past Week Hrs',
            dataIndex: 'past_week_hours',
            key: 'past_week_hours',
            sorter: (a, b) => a.past_week_hours - b.past_week_hours,

        },
        {
            title: 'Past Month Hrs',
            dataIndex: 'past_month_hours',
            key: 'past_month_hours',
            sorter: (a, b) => a.past_month_hours - b.past_month_hours,
        },

    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            email: 'john.brown@mail.com',
            tags: ['nice', 'developer'],
            workLoad: '00.00',
            past_week_hours: '00.00',
            past_month_hours: '00.00',
        },
        {
            key: '2',
            name: 'Jim Green',
            email: 'jim.green@mail.com',
            tags: ['loser'],
            workLoad: '00.00',
            past_week_hours: '00.00',
            past_month_hours: '00.00',
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
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <>
            <div className='flex flex-col gap-4 flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray bg-white rounded-lg py-2 px-2 h-full'>
                <div className='flex justify-between'>
                    <Input className="w-80" placeholder="Search..." />
                    <ActionButton link={"/dashboard/lawyers/add"} classes={'text-white w-24'} icon={<FormOutlined />} text={"Create"} type={"primary"} />
                </div>
                <Table columns={columns} scroll={{ y: 350 }} dataSource={data} onChange={onChange}/>
            </div>
        </>
    )
}