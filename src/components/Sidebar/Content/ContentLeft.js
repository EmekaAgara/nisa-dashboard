import React from 'react'
import { BiCreditCard, BiSearch } from 'react-icons/bi'

function ContentLeft() {
  return (
    <section className='px-14 flex-1 pt-14'>
      <div className='border border-gray-300 rounded-lg w-full flex items-center py-3 px-3'>
        <BiSearch className='mr-2'/>
        <input type={"text"} className="flex-1" placeholder='Search'/>
      </div>

      <h3 className='text-xl text-green-700 my-8'>Good day, Marcellous</h3>

      <div className='flex flex-row space-x-4'>
        <Card
          bgColor={"bg-green-600"}
          txtColor={"text-green-600"}
          icon={<BiCreditCard size={25} />}
          label={
            <span>
              Borrow
            </span>
          }
        />

        <Card
          bgColor={"bg-sky-600"}
          txtColor={"text-sky-600"}
          icon={<BiCreditCard size={25} />}
          label={
            <span>
              Deposit
            </span>
          }
        />

        <Card
          bgColor={"bg-red-600"}
          txtColor={"text-red-600"}
          icon={<BiCreditCard size={25} />}
          label={
            <span>
              Send
            </span>
          }
        />

        <Card
          bgColor={"bg-indigo-600"}
          txtColor={"text-indigo-600"}
          icon={<BiCreditCard size={25} />}
          label={
            <span>
              Swap
            </span>
          }
        />
      </div>
    </section>
    
  );
}

function Card(props) {
  return (
      <div className={`rounded-md ${props.bgColor} bg-opacity-10 p-5 w-24 ${props.txtColor} cursor-pointer`}>
        {props.icon}
        {props.label}
      </div>
  );
}

export default ContentLeft