"use client"

import { useEffect, useState } from "react"

import { CreateServerlModal } from "@/components/modals/create-server-modal"
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerlModal } from "@/components/modals/edit-server-modal"

export const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true)
    },[])
    return  (
        <>
            <CreateServerlModal />
            <InviteModal />
            <EditServerlModal />
        </>
    )
}