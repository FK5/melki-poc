'use client'
import { Typography } from 'antd';
import { Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { IoMdArrowRoundBack } from "react-icons/io";
import ActionButton from '@/app/components/actionButton';

export default function AddLawyer() {
    const { Title } = Typography;
    const { TextArea } = Input;
    return (
        <>
            <div className="flex flex-col gap-6 border-b-gray border-2 rounded-lg py-6 px-8 bg-white">
                <div className='flex items-center gap-4'>
                <IoMdArrowRoundBack className='text-black' size={20} />

                <Title className='mb-0' level={3}> Add a new Lawyer</Title>
                </div>

                <div className='flex'>
                    <div className='flex flex-col'>
                        <Title level={4}> Personal Information</Title>

                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Email*</Title>
                            <Input className="w-96" placeholder='Email' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Password*</Title>
                            <Input className="w-96" placeholder='Password' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Full Name*</Title>
                            <Input className="w-96" placeholder='Full Name' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Phone*</Title>
                            <Input className="w-96" placeholder='Phone' />
                        </div>

                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Street Address</Title>
                            <Input className="w-96" placeholder='Street Address' />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <Title level={4}> Additional Details</Title>

                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Lawyer Role*</Title>
                            <Input className="w-96" placeholder='Lawyer Role' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Hourly Rate*</Title>
                            <Input className="w-96" placeholder='Hourly Rate' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>MOF Number</Title>
                            <Input className="w-96" placeholder='MOF Number' />
                        </div>
                        <div className='flex flex-col w-[34rem] justify-between mb-4'>
                            <Title level={5}>Notes</Title>
                            <TextArea className="w-96" placeholder='Notes' rows={4} />
                        </div>
                    </div>
                </div>

                <ActionButton link={""} classes={'text-white w-24'} icon={<FormOutlined />} text={"Create"} type={"primary"} />

            </div>
        </>
    )
}