"use client"

import { CreateServerlModal } from "@/components/modals/create-server-modal"

import { useEffect, useState } from "react"
import { InviteModal } from "@/components/modals/invite-modal";

export const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true)
    },[])
    return  (
        <>
            <CreateServerlModal />
            <InviteModal />
        </>
    )
}