import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { v4 as uuidv4 } from 'uuid';

const Manager = () => {

    const ref = useRef();

    const passwordRef = useRef();

    const [form, setform] = useState({ site: "", username: "", password: "" });

    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        // passwordRef.current.type=  'text';

        if (ref.current.src.includes("icons/63568.png")) {
            ref.current.src = "icons/eye-close-1.png";

            passwordRef.current.type = 'text';
        }
        else {
            ref.current.src = "icons/63568.png"

            passwordRef.current.type = 'password';
        }
    }

    const savePassword = () => {
       
        if (form.username && form.site && form.password) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);

            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));

            console.log([...passwordArray, form]);
            setform({ site: "", username: "", password: "" });
            
            toast.success("Password Saved")
        }

    }

    const deletePassword = (id) => {
            // toast('Password deleted');
            setPasswordArray(passwordArray.filter((item) => item.id !== id)); localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id !== id)))
            toast.error("Password Deleted")
    }
    const editPassword = (id) => {
        // toast('Edit it!');
        setform(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter((item) => item.id !== id)); localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id !== id)))
        deletePassword(id)
        toast("Edit password and save")
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const copyText = (text) => {
        toast("Copied to clipboard");
        navigator.clipboard.writeText(text)
    }
    return (
        <>
            <Toaster/>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            
            <div className="p-2 md:p-0 md:mycontainer min-h-[80vh]">

                <h1 className='text-green text-4xl font-bold text-center'> <span className='text-green-700 text-4xl'>&lt;</span>
                    Pass
                    <span className='text-green-700 text-4xl'>Man/&gt;</span></h1>
                <p className='text-green-700 text-lg text-center f'>Least secured password manager you will not need</p>

                <div className="flex flex-col p-4 text-black gap-7">

                    <input type="text" className='rounded-full border w-full border-green-500 px-4 py=1' name="site" id="site" placeholder='Enter URL' value={form.site} onChange={handleChange} />

                    <div className='flex flex-col md:flex-row w-full justify-between gap-10'>
                        <input type="text" className='rounded-full border w-full border-green-500 px-4 py=1' name="username" id="username" placeholder='Enter Username' value={form.username} onChange={handleChange} />

                        <div className='relative'>
                            <input type="password" className='rounded-full border w-full border-green-500 px-4 py=1' name="password" id="password" placeholder='Enter Password' value={form.password} onChange={handleChange} ref={passwordRef} />

                            <span className='flex absolute right-[2px] bottom-[1px] top-[1px] cursor-pointer' onClick={showPassword} >

                                <img className='px-1 py-0.5' width={30} src="icons/63568.png" ref={ref}>
                                </img>

                            </span>
                        </div>

                    </div>
                    <div className='flex justify-center'>
                        <button className='flex justify-center items-center bg-green-500 rounded-full px-2 py-2 w-fit gap-1 hover:bg-green-700 border-2 border-slate-700' onClick={savePassword}>
                            <script src="https://cdn.lordicon.com/lordicon.js"></script>
                            <lord-icon
                                src="https://cdn.lordicon.com/xtnsvhie.json"
                                trigger="hover">
                            </lord-icon>Save</button>
                    </div>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-xl py-2'>Saved Passwords</h2>
                    {passwordArray.length === 0 && <div>Nothing to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th>Website</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody className='bg-purple-100 '>
                                {passwordArray.map((item, index) =>
                                    <tr key={index}>

                                        <td className='py-2 border border-white text-center w-64'>
                                            <div className='flex justify-center ' >
                                                <nav><a href={item.site} target='_blank'>{item.site}</a></nav>
                                                <div className='size-7 cursor-pointer' onClick={() => copyText(item.site)}>
                                                    <script src="https://cdn.lordicon.com/lordicon.js"></script>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xljvqlng.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td >
                                        <td className='py-2 border border-white text-center w-32'>
                                            <div className='flex justify-center ' >
                                                <nav>{item.username}</nav>
                                                <div className='size-7 cursor-pointer' onClick={() => copyText(item.username)}>
                                                    <script src="https://cdn.lordicon.com/lordicon.js"></script>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xljvqlng.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td >
                                        <td className='py-2 border border-white text-center w-32'>
                                            <div className='flex justify-center '>
                                                <nav className='font-bold'>.....</nav>
                                                <div className='size-7 cursor-pointer' onClick={() => copyText(item.password)}>
                                                    <script src="https://cdn.lordicon.com/lordicon.js"></script>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xljvqlng.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td >
                                        <td className='py-2 border border-white text-center w-32'>
                                            <div className='flex justify-center'>
                                                <div onClick={() => editPassword(item.id)}>
                                                    <script src="https://cdn.lordicon.com/lordicon.js"></script>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/jnikqyih.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                                <dir></dir>
                                                <div onClick={() => deletePassword(item.id)}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td >
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    }

                </div>

            </div>
        </>
    )
}

export default Manager