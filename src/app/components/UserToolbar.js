import { Badge } from "antd"

import { CustomInput } from "./CustomComponents/CustomInput";

import { CgProfile } from "react-icons/cg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

import { FaRegBell } from "react-icons/fa6";

import { primary } from "../variables/colors";

export const UserToolbar = () => {
    return (
        <>
            <CustomInput classes="w-80" placeholder="Search..." />
            <div className="flex gap-2">
                <div className="flex items-center justify-center rounded-full hover:bg-gray-200 h-8 w-8">
                    <Badge color={primary} count={5}>
                        <IoChatbubbleEllipsesOutline className={"text-black"} size={20} />
                    </Badge>
                </div>
                <div className="flex items-center justify-center rounded-full hover:bg-gray-200 h-8 w-8">
                    <Badge color={primary} count={3}>
                        <FaRegBell className={"text-black"} size={18} />
                    </Badge>
                </div>
                <div className="flex items-center justify-center rounded-full hover:bg-gray-200 h-8 w-8">
                    <CgProfile className={"text-black"} size={20} />
                </div>
            </div>
        </>
    )
}