import { Button } from "antd";
import Link from "next/link";

export const CustomButton = ({ text, color, size, icon, classes, link }) => {

    if (link) {
        return (
            <Link href={link}>
                <Button className={`bg-${color} hover:bg-white hover:border-${color} hover:border-1 hover:text-${color} text-white ${classes}`} type="ghost"  size={size} icon={icon}> {text} </Button>
            </Link>
        )
    } else {
        return (
            <Button className={`bg-${color} hover:border-primary focus:border-primary text-white ${classes}`} size={size} icon={icon}> {text} </Button>
        )
    }
} 