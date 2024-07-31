'use client'
import CustomModal from '@/components/shared/custom-modal'
// import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
// import { useBilling } from '@/providers/billing-provider'
// import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'
import WorkflowForm from '../../../../../components/forms/worflow-form'

type Props = {}

const WorkflowButton = (props: Props) => {
    const { setOpen, setClose } = useModal()
    // const { credits } = useBilling()
    let credits = "1"
    const handleClick = () => {
        setOpen(
            <CustomModal
                title="Create a Workflow Automation"
                subheading="Workflows are a powerfull that help you automate tasks."
            >
                <WorkflowForm />
            </CustomModal>
        )
    }

    return (
        <Button
            size={'icon'}
            {...(credits !== '0'
                ? {
                    onClick: handleClick,
                }
                : {
                    disabled: true,
                })}
        >
            <Plus />
        </Button>
    )
}

export default WorkflowButton
