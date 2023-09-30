"use client"

import { ServerWithMembersWithProfile } from "@/types"
import { MemberRole } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, PlusCircle, Settings, Trash, UserIcon, UserPlus } from "lucide-react";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

interface ServerHeaderProps {
    server: ServerWithMembersWithProfile;
    role?: MemberRole;
};

export const ServerHeader = ({
    server,
    role
}: ServerHeaderProps) => {

    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="focus:outline-none"
                asChild
            >
                <button 
                    className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
                >
                    {server.name}
                    <ChevronDown className="h-5 w-5 ml-auto"/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
                className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
                    {isModerator && (
                        <DropdownMenuItem
                            className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"
                        >
                            Invite People
                            <UserPlus className="h-4 w-4 ml-auto"/>
                        </DropdownMenuItem>
                    )}
                    {isAdmin && (
                        <DropdownMenuItem
                            className="px-3 py-2 text-sm cursor-pointer"
                        >
                            Server Settings
                            <Settings className="h-4 w-4 ml-auto"/>
                        </DropdownMenuItem>
                    )}
                    {isAdmin && (
                        <DropdownMenuItem
                            className="px-3 py-2 text-sm cursor-pointer"
                        >
                            Manage Members
                            <UserIcon className="h-4 w-4 ml-auto"/>
                        </DropdownMenuItem>
                    )}
                    {isModerator && (
                        <DropdownMenuItem
                            className="px-3 py-2 text-sm cursor-pointer"
                        >
                            Create Channel
                            <PlusCircle className="h-4 w-4 ml-auto"/>
                        </DropdownMenuItem>
                    )}
                    {isModerator && (
                        <DropdownMenuSeparator/>
                    )}
                    {isAdmin && (
                        <DropdownMenuItem
                            className="px-3 py-2 text-rose-500 text-sm cursor-pointer"
                        >
                            Delete Server
                            <Trash className="h-4 w-4 ml-auto"/>
                        </DropdownMenuItem>
                    )}
                    {!isAdmin && (
                        <DropdownMenuItem
                            className="px-3 py-2 text-rose-500 text-sm cursor-pointer"
                        >
                            Delete Server
                            <Trash className="h-4 w-4 ml-auto"/>
                        </DropdownMenuItem>
                    )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}