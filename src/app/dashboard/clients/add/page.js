'use client'
import { Typography } from 'antd';
import { Input, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { IoMdArrowRoundBack } from "react-icons/io";

import { UploadOutlined } from '@ant-design/icons';
import {  message, Upload } from 'antd';

import { FloatButton } from 'antd';

import ActionButton from '@/app/components/actionButton';

export default function AddClient() {
    const { Title } = Typography;
    const { TextArea } = Input;
    return (
        <div className='border-b-gray border-2 rounded-lg py-6 px-8 bg-white'>
            <div className="flex flex-col gap-6">
                <div className='flex items-center gap-4'>
                    <IoMdArrowRoundBack className='text-black' size={20} />

                    <Title className='mb-0' level={3}> Add a new Client</Title>
                </div>

                <div className='flex'>
                    <div className='flex flex-col'>
                        <Title level={4}> Personal Information</Title>

                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Name*</Title>
                            <Input className="w-96" placeholder='Name' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Country*</Title>
                            <Input className="w-96" placeholder='Country' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Birth Date*</Title>
                            <Input className="w-96" placeholder='Birth Date' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Client Type*</Title>
                            <Input className="w-96" placeholder='Client Type' />
                        </div>


                        <Title level={4}>  Attachments </Title>

                        <Upload >
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>

                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Notes</Title>
                            <TextArea className="w-96" placeholder='Address' rows={4} />
                        </div>

                    </div>

                    <div className='flex flex-col'>
                        <Title level={4}> Contact Information</Title>

                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Email*</Title>
                            <Input className="w-96" placeholder='Email' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Mobile*</Title>
                            <Input className="w-96" placeholder='Mobile' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Fax</Title>
                            <Input className="w-96" placeholder='Fax' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Address</Title>
                            <TextArea className="w-96" placeholder='Address' rows={4} />
                        </div>


                        <Title level={4}> Additional Information</Title>

                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Related Clients</Title>
                            <Input className="w-96" placeholder='Related Clients' />
                        </div>


                    </div>
                </div>

                {/* <Button className='bg-blue-600 text-white w-24' icon={<FormOutlined />}>Create</Button> */}
                <ActionButton link={""} classes={'text-white w-24'} icon={<FormOutlined />} text={"Create"} type={"primary"} />

                {/* <FloatButton  className='bg-blue-600 text-white text-white w-24' description={<><FormOutlined /><p>Create</p></>} shape="square" style={{ right: 94 }} /> */}


            </div>
        </div>
    )
}