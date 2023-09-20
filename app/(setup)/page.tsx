import { db } from "@/lib/db";
import { initailProfile } from "@/lib/initial-profile";
import {redirect} from "next/navigation"
const SetupPage = async() => {
    const profile = await initailProfile()
    const server = await db.server.findFirst({
        where:{
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })
    if(server){
        return redirect(`/servers/${server.id}`)
    }
    return <div>Create a Server</div>
}
export default SetupPage;