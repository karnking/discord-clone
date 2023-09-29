"use client"

import { CreateServerlModal } from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true)
    },[])
    return  (
        <>
            <CreateServerlModal />
        </>
    )
}