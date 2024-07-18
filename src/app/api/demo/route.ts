import { prisma } from "@/lib/prisma";


export async function GET(){
    const user = await prisma.user.create({
        data: {
            name: "demo01",
            email:"demo@gamile.com",
            picture:"asdf.png",
            github_id:"",
        },
    });
    return new Response("",   { status: 200 })
}