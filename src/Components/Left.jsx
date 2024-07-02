import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLocation, IoLogoFirebase } from "react-icons/io5";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";

const Left = () => {
    return (
        <div className="w-full">
            <div className="bg-black p-5">
                <h1 className="text-3xl font-bold text-white uppercase">Contact</h1>
                <p className="text-white mt-8 space-y-4">
                    <span className="flex items-center gap-1"><MdAddIcCall/>+8801966-095405</span>
                    <span className="flex items-center gap-1"><IoLocation />
                    Habiganj , Sylhet Bangladesh</span>
                    <span className="flex items-center gap-1"><MdEmail />
                    iftikherlutfur@gmail.com</span>
                </p>
            </div>
            <hr />
            <div className="bg-black p-5">
                <h1 className="text-3xl font-bold text-white uppercase">Explored</h1>
                <p className="text-white mt-8 space-y-2">
                    <span className="flex items-center gap-1"><FaHtml5/>
                    HTML</span>
                    <span className="flex items-center gap-1"><FaCss3Alt />

                    CSS</span>
                    <span className="flex items-center gap-1"><RiTailwindCssFill/>
                    Tailwind</span>
                    <span className="flex items-center gap-1"><TbBrandJavascript/>
                    JavaScript</span>
                    <span className="flex items-center gap-1"><FaReact/>
                    React JS</span>
                    <span className="flex items-center gap-1"><IoLogoFirebase/>
                    Firebase</span>
                    <span className="flex items-center gap-1"><DiMongodb/>
                    MongoDB</span>
                   
                </p>
            </div>
            <hr />
            
        </div>
    );
};

export default Left;