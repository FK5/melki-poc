'use client';

import { LeftOutlined } from '@ant-design/icons';
// import { RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AutoComplete, Popover  } from "antd";

import Image from 'next/image';

import { motion } from 'framer-motion';

import { Breadcrumb } from 'antd';

import { navItems } from '../variables/NavBarItems';
import { UserToolbar } from '../components/UserToolbar';

export default function DashboardLayout({ children }) {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleMenuSizeChange = () => {
    setIsSideBarCollapsed((prev) => !prev);
  };

  const sideBarVariants = {
    opened: { width: '16.666667%' },
    closed: { width: '7%' }
  };

  const pageVariants = {
    opened: { width: '83.333334%' },
    closed: { width: '93%' }
  };

  const sideBarToggleVariants = {
    opened: { rotate: 0 },
    closed: { rotate: -180 }
  };

  const sideBarItemsVariants = {
    opened: { alignSelf: 'auto' },
    closed: { alignSelf: 'center', width: '48px' }
  };

  const textSizeVariants = {
    opened: { fontSize: '14px', opacity: 1 },
    closed: { fontSize: '0px', opacity: 0 }
  };

  const logoBigVariants = {
    visible: { width: 180, left: '0', opacity: 1 },
    invisible: {
      width: 22,
      left: '-500px',
      opacity: 0,
      transition: { display: { delay: 0.2 } }
    }
  };

  const logoSmallVariants = {
    visible: {
      width: 22,
      right: '10px',
      display: 'flex',
      opacity: 1,
      alignSelf: 'center'
    },
    invisible: {
      width: 180,
      right: '-50px',
      display: 'NONE',
      opacity: 0,
      transition: { display: { delay: 0.5 } }
    }
  };

  const textVisibilityVariants = {
    opened: { display: 'block' },
    closed: { display: 'NONE', transition: { display: { delay: 0.5 } } }
  };

  return (
    <div className="flex h-screen">
      <motion.div
        animate={isSideBarCollapsed ? 'closed' : 'opened'}
        variants={sideBarVariants}
        transition={{ duration: 0.6 }}
        className={`bg-white border-b-gray border-e-2 w-1/6`}>
        <div className="flex flex-col h-full">
          <div className="flex h-1/8 items-center justify-center relative">
            <motion.div
              className="relative"
              animate={isSideBarCollapsed ? 'invisible' : 'visible'}
              variants={logoBigVariants}
              transition={{ duration: 0.6 }}>
              <Image src={'/law-firm.png'} width={180} height={180} alt="Logo" />
            </motion.div>
            <motion.div
              className="hidden relative"
              animate={isSideBarCollapsed ? 'visible' : 'invisible'}
              variants={logoSmallVariants}
              transition={{ duration: 0.6 }}>
              <Image src={'/law-firm-2.png'} width={22} height={22} alt="Logo" />
            </motion.div>
            <div
              className="flex items-center justify-center h-[30px] w-[30px] bg-white border-2 border-b-gray rounded-full absolute top-[1/2] right-0 translate-x-[15px] cursor-pointer"
              onClick={handleMenuSizeChange}>
              <motion.div
                animate={isSideBarCollapsed ? 'closed' : 'opened'}
                variants={sideBarToggleVariants}
                transition={{ duration: 0.6 }}>
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
                  variants={sideBarItemsVariants}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-4 h-12 flex-shrink-0 flex-grow-0 flex-basis-auto w-full px-4 cursor-pointer font-medium rounded-lg ${
                    pathname == e.pathName
                      ? ' bg-primary text-white'
                      : 'text-t-gray hover:bg-gray-100'
                  }`}
                  onClick={() => router.push(e.pathName)}>
                  <div className="w-5 h-5">{e.menuIcon}</div>

                  <motion.div
                    animate={isSideBarCollapsed ? 'closed' : 'opened'}
                    variants={textVisibilityVariants}>
                    <motion.p
                      animate={isSideBarCollapsed ? 'closed' : 'opened'}
                      variants={textSizeVariants}
                      className="text-medium">
                      {e.menuName}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={isSideBarCollapsed ? 'closed' : 'opened'}
        variants={pageVariants}
        transition={{ duration: 0.6 }} // Adjust duration as needed
        className={`bg-white w-5/6`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-1/8 border-b-gray border-b-2 px-12">
            <UserToolbar />
          </div>
          <div className="flex flex-col bg-b-white overflow-auto h-7/8 px-6 py-6 gap-4">
            {/* TODO: ASK YARA */}
            {/* <Breadcrumb
              items={[
                {
                  title: 'Dashboard'
                },
                {
                  title: 'An Application'
                }
              ]}
            />  */}
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
