"use client"
import Image from "next/image"
import { collection, doc, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "@/config/firbase.config"
import { useSession } from "next-auth/react"
import Link from "next/link"
import React, { useState } from "react"
import { timeStampToDate } from "@/utils/timestamp-to-date"





export default function Products(userId){
    const [product, setProducts]= React.useState([]);
    const {data: session} = useSession();
    console.log(session);
    const userIdentifier = userId || (session?.user?.id);
    React.useEffect(()=>{
        const handleFetchProducts = async () => {
            const q =query(collection(db, "products"));
            const onSnap = await getDocs(q, 
                where("user", "===", userIdentifier),
                orderBy("timecreated", "desc")
            )
            const compileProduct = [];
            onSnap.docs.forEach(doc =>{
                compileProduct.push({
                    id:doc.id,
                    data:doc.data(),
                })
            })
            setProducts(compileProduct)
            console.log(compileProduct)
        }   
        session ? handleFetchProducts() : null
    }, [session, userIdentifier]); 

    return(
        <main className="min-h-dvh p-2 bg-gray-50">
            <h1 className="text-center text-blue-500 text-4xl font-black">ARTEMIA E-STORE</h1>
            <p className="text-center text-gray-500 text-sm">Your one stop E-commerce for all your household gadgets and supplies, from electronics down to clothing needs can be shopped and purchased here</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8">
        { product.map(product =>   <Link href="#" key={product.id}>
          <div className=" mt-5 w-[300px] h-[400px] bg-blue-100 rounded-md shadow-md shadow-gray-200">
                <Image 
                width={400}
                height={400}
                src="/fan.jpg"
                alt="product"
                className=" w-[300px] h-[400px] rounded-md"/>
                <div>
                <span className="block text-2xl font-bold">{product.data.productname}</span>
                <span className="block text-xs text-gray-400">{timeStampToDate(product.data.timecreated)}</span>
                <p className="text">Description : {product.data.description}</p>
                <p className="text-blue-500">${product.data.price}</p>
                 </div>
            </div>
            </Link>
            )}
            
           </div>
        </main>
    )
}