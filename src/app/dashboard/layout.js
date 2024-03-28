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
    opened: { width: '16.666667%' },
    closed: { width: '7%' }
  };

  const variants2 = {
    opened: { width: '83.333334%' },
    closed: { width: '93%' }
  };

  const variants3 = {
    opened: { borderRadius: '8px', width: '100%', alignSelf: 'auto' },
    closed: { borderRadius: '9999px', width: '48px', alignSelf: 'center', justifyContent: 'center' }
  };

  const variants4 = {
    opened: { fontSize: '14px', opacity: 1, display: 'block' },
    closed: { fontSize: '0px', opacity: 0, display: 'NONE' }
  };

  const variants5 = {
    opened: { rotate: 0 },
    closed: { rotate: -180 }
  };

  return (
    <div className="flex h-screen">
      <motion.div
        animate={isSideBarCollapsed ? 'closed' : 'opened'}
        variants={variants1}
        transition={{ duration: 1 }} // Adjust duration as needed
        className={`bg-white border-b-gray border-e-2 w-1/6`}>
        <div className="flex flex-col h-full">
          <div className="flex h-1/8 items-center justify-center relative">
            <div>
              <Image
                src={`${isSideBarCollapsed ? '/law-firm-2.png' : '/law-firm.png'}`}
                width={`${isSideBarCollapsed ? 22 : 180}`}
                height={`${isSideBarCollapsed ? 22 : 180}`}
                alt="Logo"
              />
            </div>
            <div
              className="flex items-center justify-center h-[30px] w-[30px] bg-white border-2 border-b-gray rounded-full absolute top-[1/2] right-0 translate-x-[15px] cursor-pointer"
              onClick={handleMenuSizeChange}>
              <motion.div
                animate={isSideBarCollapsed ? 'closed' : 'opened'}
                variants={variants5}
                transition={{ duration: 1 }}>
                <LeftOutlined className="text-t-gray" />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-4 pt-4 text-sm h-7/8 overflow-auto transition duration-2000 ease-in-out delay-1000">
            {navItems.map((e, i) => {
              return (
                <motion.div
                  key={i}
                  animate={isSideBarCollapsed ? 'closed' : 'opened'}
                  variants={variants3}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center gap-4 h-12 flex-shrink-0 flex-grow-0 flex-basis-auto w-full px-4 cursor-pointer font-medium rounded-lg ${
                    pathname == e.pathName
                      ? ' bg-primary text-white'
                      : 'text-t-gray hover:bg-gray-100'
                  }`}
                  onClick={() => router.push(e.pathName)}>
                  <div className="w-5 h-5">{e.menuIcon}</div>
                  {/* {isSideBarCollapsed ? (
                    <></>
                  ) : ( */}
                  <motion.p
                    animate={isSideBarCollapsed ? 'closed' : 'opened'}
                    variants={variants4}
                    className="text-medium">
                    {e.menuName}
                  </motion.p>
                  {/* )} */}
                </motion.div>
              );
              //   if (isSideBarCollapsed) {
              //     return (
              //       <div
              //         className={`flex items-center self-center justify-center h-12 w-12 flex-shrink-0 flex-grow-0 flex-basis-auto ${
              //           pathname == e.pathName
              //             ? ' bg-primary text-white'
              //             : 'text-t-gray hover:bg-gray-100'
              //         }  cursor-pointer font-medium rounded-full`}
              //         onClick={() => router.push(e.pathName)}>
              //         {e.menuIcon}
              //       </div>
              //     );
              //   } else {
              //     return (
              //       <div
              //         className={`flex items-center gap-4 h-12 flex-shrink-0 flex-grow-0 flex-basis-auto w-full px-4 ${
              //           pathname == e.pathName
              //             ? ' bg-primary text-white'
              //             : 'text-t-gray hover:bg-gray-100'
              //         } cursor-pointer font-medium rounded-lg`}
              //         onClick={() => router.push(e.pathName)}>
              //         {' '}
              //         {e.menuIcon}{' '}
              //         {isSideBarCollapsed ? <></> : <p className="text-medium">{e.menuName}</p>}{' '}
              //       </div>
              //     );
              //   }
            })}
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={isSideBarCollapsed ? 'closed' : 'opened'}
        variants={variants2}
        transition={{ duration: 1 }} // Adjust duration as needed
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
