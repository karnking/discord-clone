import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerRPage = async() => {
    const profile = await currentProfile();
    if(!profile){
        return redirectToSignIn();
    }
    const server = await db.server.findFirst({
        include : {
            channel: {
                where: {
                    name: "general"
                },
                orderBy: {
                    createdAt: 'asc'
                }
            }
        }
    })

    const initialChannel = server?.channel[0];
    if(initialChannel?.name!='general') {
        return null;
    }

    return redirect(`/servers/${server?.id}/channels/${initialChannel.id}`)
}
 
export default ServerRPage;