import React from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'
type Props = { children: React.ReactNode }

function layout(props: Props) {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="w-full">
                <InfoBar />
                {props.children}
            </div>
        </div >
    )
}

export default layout