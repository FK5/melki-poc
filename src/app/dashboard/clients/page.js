'use client'
import React from 'react';
import { Space, Table, Tag, Input } from 'antd';
import { Button, Flex } from 'antd';
import { FormOutlined, FileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import ActionButton from '@/app/components/actionButton';

// add these to divs flex-shrink-0 flex-grow-0 flex-basis-auto

export default function Clients() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Date Created',
            dataIndex: 'date_created',
            key: 'date_created',
        },
        {
            title: 'Client Type',
            dataIndex: 'client_type',
            key: 'client_type',
        },
        {
            title: 'Active Matters',
            dataIndex: 'active_matters',
            key: 'active_matters',
        },
        {
            title: 'Balance Of Expenses',
            dataIndex: 'balance_expenses',
            key: 'balance_expenses',
        },
        {
            title: 'Balances Of Fees',
            dataIndex: 'balance_fees',
            key: 'balance_fees',
        },
        {
            title: 'Related Clients',
            dataIndex: 'realted_clients',
            key: 'realted_clients',
        },

    ];

    const data = [
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        {
            name: 'Slim Shady',
            date_created: '04/02/2024',
            client_type: 'Local Client',
            active_matters: 1,
            balance_expenses: '-50.00',
            balance_fees: '-110.00',
            realted_clients: '',
        },
        
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <>
            <div className='flex flex-col gap-4 flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray bg-white rounded-lg py-2 px-2 h-full '>
                <div className='flex justify-between'>
                    <Input className="w-80" placeholder="Search..." />
                    <div className='flex gap-4'>
                        <Link href="/dashboard/clients/add"><Button className='w-24' icon={<FileOutlined />}>Reports</Button></Link>
                        <ActionButton link={"/dashboard/clients/add"} classes={'text-white w-24'} icon={<FormOutlined />} text={"Create"} type={"primary"} />
                    </div>
                </div>
                <Table className='h-fit overflow-y-auto' scroll={{ y: 350 }} sticky={true} columns={columns} dataSource={data} onChange={onChange} />
            </div>
        </>
    )
}