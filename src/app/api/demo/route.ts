import { prisma } from "@/lib/prisma";


export async function GET(){
    try{
        const user = await prisma.user.create({
            data: {
                name: "demo01",
                email:"demo@gamile.com",
                picture:"asdf.png",
                github_id:"",
            },
        });
    }catch(err){
        console.log("err:", err)
    }finally{
        return new Response("",   { status: 200 })
    }
    
    
}