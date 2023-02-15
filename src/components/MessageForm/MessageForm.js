import React, { useState } from "react";
import axios from "axios";

const MessageForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [anon, setAnon] = useState(false)

  const submitHandler= async (el) =>{

    el.preventDefault()
    const formData = {
      message,
      isAnonymous:anon
    }

    if(!formData.isAnonymous){
      formData.email=email;
      formData.name=name;
    }name

    const data = await axios.post('http://localhost:3000/api/messages', formData)

  }
  return (
    <div className="block p-6  rounded-lg shadow-lg bg-lightBlack-200 ">
      <form>
        <div className="form-group mb-6 text text-white flex items-center justify-between ">
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" onChange={()=>{if(anon)setAnon(false); else setAnon(true)}}/>
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Stay Anonymous?
            </span>
          </label>
        </div>
        <div className="form-group mb-6">
          <input
            type="text"
            disabled={anon}
            className="form-control block
        w-[40vw]
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-lightBlack-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        
        focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none"
            id="exampleInput7"
            placeholder="Name"
            onChange={el=>{setName(el.target.value)}}
          />
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            onChange={el=>{setEmail(el.target.value)}}
            disabled={anon}
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-lightBlack-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none"
            id="exampleInput8"
            placeholder="Email address"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        bg-lightBlack-100 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-lightBlack-100 focus:border-black focus:outline-none
      "
            id="exampleFormControlTextarea13"
            rows="6"
            onChange={el=>{setMessage(el.target.value)}}
            placeholder="Message"
          ></textarea>
        </div>

        <button onClick={submitHandler} className="inline-flex w-full items-center justify-center h-10 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
