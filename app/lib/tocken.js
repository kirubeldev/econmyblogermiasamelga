'use server'
import { cookies } from "next/headers"


export default async function getToken(){
    const cookieStore = await cookies()
    const verificationToken = await cookieStore.get('accessToken' ) 
    return verificationToken
    // console.log(verificationToken)

  }