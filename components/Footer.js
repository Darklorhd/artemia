import Link from "next/link"
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
    const year = new Date().getFullYear()
    return(
        <footer className=" bg-gray-900 grid grid-cols-1 px-auto md:px-8 md:grid-cols-2 lg:py-4 lg:grid-cols-3 py-4 px-2 lg:gap-0">
            <div>
                <p className="text-2xl text-blue-500 font-bold">Artemia</p>
                <p className="text-xs text-white">&copy; {year} Business Management Application</p>
            </div>
            <div>
                <p className="text-md text-white">Head Office</p>
                <p className="text-md text-white">Along Nyanya-Karshi road, Efko Mall</p>
            </div>
            <div>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#"><FaLinkedin className="text-blue-500 text-2xl" /></Link></li>
                    <li><Link href="#"><FaFacebookSquare  className="text-blue-500 text-2xl"/></Link></li>
                    <li><Link href="#"><FaSquareXTwitter  className="text-blue-500 text-2xl"/></Link></li>
                    <li><Link href="#"><FaInstagram className="text-blue-500 text-2xl"/></Link></li>
                </ul>
                <ul className="flex lg:justify-end items-center gap-4">
                  <li><Link href="#" className="text-sm text-white">Terms of use</Link></li>
                  <li><Link href="#" className="text-sm text-white">Glossary</Link></li>
                  <li><Link href="#" className="text-sm text-white">FAQS</Link></li>
                </ul>
            </div>
        </footer>
    )
}