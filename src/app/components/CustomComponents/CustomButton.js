import { Button } from 'antd';
import Link from 'next/link';
import { ConfigProvider } from 'antd';

export const CustomButton = ({ text, color, size, icon, classes, link, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <Button
          className={`bg-${color} hover:bg-white hover:border-${color} hover:border-1 hover:text-[#2C318B] text-white ${classes}`}
          type="ghost"
          size={size}
          icon={icon}
          onClick={()=>onClick()}>
          {text}
        </Button>
      </Link>
    );
  } else {
    return (
      <Button
        className={`bg-${color} hover:bg-white hover:border-${color} hover:border-1 hover:text-${color} text-white ${classes}`}
        type="ghost"
        size={size}
        icon={icon}
        onClick={()=>onClick()}>
        {text}
      </Button>
    );
  }
};
