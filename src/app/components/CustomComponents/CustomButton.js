'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export const CustomButton = ({ text, size, icon, type, link, onClick }) => {
  const router = useRouter();

  const primaryClasses = `bg-primary text-white hover:bg-primary-500 active:bg-primary-700`;
  const secondaryClasses = `border-gray-300 text-black hover:text-primary hover:border-primary active:text-primary-700 active:border-primary-700`;
  // const secondaryClasses = `bg-white text-[${black800}] border-[#e4ge4g] hover:text-[${primary}] hover:border-[${primary}] active:text-[${primary700}] active:border-[${primary700}]`;

  return (
    <Button
      htmlType="submit"
      type="ghost"
      size={size}
      icon={icon}
      className={`${type === 'primary' ? primaryClasses : secondaryClasses} `}
      onClick={() => {
        if (link) {
          router.push(link);
          return;
        }
        if (onClick) {
          onClick();
        }
      }}>
      {text}
    </Button>
  );
};
