import { Badge } from "antd"

import { CustomInput } from "./CustomComponents/CustomInput";

import { PiChatDots } from "react-icons/pi";
import { PiUserCircle } from "react-icons/pi";
import { PiBell } from "react-icons/pi";

import { primary } from "../variables/colors";

export const UserToolbar = () => {
    return (
        <>
            <CustomInput classes="w-80" placeholder="Search App..." />
            <div className="flex gap-2">
                <div className="flex items-center justify-center rounded-full hover:bg-gray-200 h-8 w-8">
                    <Badge color={primary} count={5}>
                        <PiChatDots className={"text-black"} size={20} />
                    </Badge>
                </div>
                <div className="flex items-center justify-center rounded-full hover:bg-gray-200 h-8 w-8">
                    <Badge color={primary} count={3}>
                        <PiBell className={"text-black"} size={18} />
                    </Badge>
                </div>
                <div className="flex items-center justify-center rounded-full hover:bg-gray-200 h-8 w-8">
                    <PiUserCircle className={"text-black"} size={20} />
                </div>
            </div>
        </>
    )
}