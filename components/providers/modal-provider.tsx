"use client"

import { useEffect, useState } from "react"

import { CreateServerlModal } from "@/components/modals/create-server-modal"
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerlModal } from "@/components/modals/edit-server-modal"
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannellModal } from "@/components/modals/create-channel-modal";

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
            <MembersModal />
            <CreateChannellModal />
        </>
    )
}