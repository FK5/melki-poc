'use client';

import { LeftOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { navItems } from '../variables/NavBarItems';
import { UserToolbar } from '../components/UserToolbar';

export default function DashboardLayout({ children }) {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleMenuSizeChange = () => {
    setIsSideBarCollapsed((prev) => !prev);
  };

  const variants1 = {
    open: { width: '16.666667%' },
    closed: { width: '7%' }
  };

  const variants2 = {
    open: { width: '83.333334%' },
    closed: { width: '93%' }
  };

  return (
    <div className="flex h-screen">
      <motion.div
        animate={isSideBarCollapsed ? 'closed' : 'opened'}
        variants={variants1}
        transition={{ duration: 3 }} // Adjust duration as needed
        className={`bg-white border-b-gray border-e-2 w-1/6`}>
        <div className="flex flex-col h-full">
          <div className="flex h-1/8 items-center justify-center relative">
            <p className="font-bold text-black">
              <Image
                src={`${isSideBarCollapsed ? '/law-firm-2.png' : '/law-firm.png'}`}
                width={`${isSideBarCollapsed ? 22 : 180}`}
                height={`${isSideBarCollapsed ? 22 : 180}`}
                alt="Logo"
              />
            </p>
            <div
              className="flex items-center justify-center h-[30px] w-[30px] bg-white border-2 border-b-gray rounded-full absolute top-[1/2] right-0 translate-x-[15px] cursor-pointer"
              onClick={handleMenuSizeChange}>
              {' '}
              {isSideBarCollapsed ? (
                <RightOutlined className="text-t-gray" />
              ) : (
                <LeftOutlined className="text-t-gray" />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 px-4 pt-4 text-sm h-7/8 overflow-auto transition duration-2000 ease-in-out delay-1000">
            {navItems.map((e) => {
              if (isSideBarCollapsed) {
                return (
                  <div
                    className={`flex items-center self-center justify-center h-12 w-12 flex-shrink-0 flex-grow-0 flex-basis-auto ${
                      pathname == e.pathName
                        ? ' bg-primary text-white'
                        : 'text-t-gray hover:bg-gray-100'
                    }  cursor-pointer font-medium rounded-full`}
                    onClick={() => router.push(e.pathName)}>
                    {' '}
                    {e.menuIcon}{' '}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`flex items-center gap-4 h-12 flex-shrink-0 flex-grow-0 flex-basis-auto w-full px-4 ${
                      pathname == e.pathName
                        ? ' bg-primary text-white'
                        : 'text-t-gray hover:bg-gray-100'
                    } cursor-pointer font-medium rounded-lg`}
                    onClick={() => router.push(e.pathName)}>
                    {' '}
                    {e.menuIcon}{' '}
                    {isSideBarCollapsed ? <></> : <p className="text-medium">{e.menuName}</p>}{' '}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={isSideBarCollapsed ? 'closed' : 'opened'}
        variants={variants2}
        transition={{ duration: 3 }} // Adjust duration as needed
        className={`bg-white w-5/6`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-1/8 border-b-gray border-b-2 px-12">
            <UserToolbar />
          </div>
          <div className="flex flex-col bg-b-white overflow-auto h-7/8 px-6 py-6 gap-4">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}