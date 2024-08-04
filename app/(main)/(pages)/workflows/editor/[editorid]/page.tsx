import { ConnectionsProvider } from '@/providers/connection-provider'
import EditorProvider from '@/providers/editor-provider'
import React from 'react'
import EditorCanvas from './_components/editor-canvas'

const Page = () => {
    return (
        <div className="h-full">
            <EditorProvider>
                <ConnectionsProvider>
                    <div></div>
                    <EditorCanvas />
                </ConnectionsProvider>
            </EditorProvider>
        </div>
    )
}

export default Page