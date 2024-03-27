import { Input } from "antd";

export const CustomInput = ({classes, placeholder}) => {
    return (
        <Input className={`hover:border-primary focus:border-primary ${classes}`} placeholder={placeholder} />
    )
} 