'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'antd';


export default function ActionButton({ link, icon, classes, text, type }) {
    const router = useRouter()
    type
    return (
        <Button className={`bg-${type} `+classes} icon={icon} onClick={() => router.push(link)}> {text} </Button>
    )
}