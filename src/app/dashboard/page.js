'use client'
import React from 'react';
import { Space, Table, Tag } from 'antd';
// add these to divs flex-shrink-0 flex-grow-0 flex-basis-auto
import { CustomKanban } from '../components/CustomKanban';

export default function Dashboard() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
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
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <>
            <div className='flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray rounded-lg py-2 px-2 bg-white'>
                <Table columns={columns} dataSource={data} />
            </div>
            {/* <div className='flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray rounded-lg py-2 px-2 bg-white'>
                <Table columns={columns} dataSource={data} />
            </div> */}
            <div className='flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray rounded-lg py-2 px-2 bg-white'>
                <CustomKanban />
            </div>
            {/* <div className='flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray rounded-lg py-2 px-2 bg-white'>
                <div className='flex space-between gap-24 bg-red-200 h-80'>
                    <div className='flex flex-col w-80 h-full bg-blue-200'>
                        <p>test</p>
                        <div className='h-full w-full bg-green-200'>
                            <Draggable>
                                <div className='h-24 w-24 bg-gray-400'></div>
                            </Draggable>
                        </div>

                    </div>

                    <div className='flex flex-col w-80 h-full bg-blue-200'>
                    <p>test</p>
                        <div className='h-full w-full bg-green-200'>
                        </div>
                    </div>

                    <div className='flex flex-col w-80 h-full bg-blue-200'>
                    <p>test</p>
                        <div className='h-full w-full bg-green-200'>

                        </div>
                    </div>


                </div>
            </div> */}
        </>
    )
}