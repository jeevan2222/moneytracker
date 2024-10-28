import React, { useEffect, useState } from "react";
import { getMoney } from "../services/api";

const TablegridView = () => {
  const Tabs = [
    { name: 'Paid To' },
    { email: 'Amount' },
    { role: 'Date Time' },
    { message: 'Message' },
  ];

  const email = localStorage.getItem("email");
  const [resData, setResData] = useState([]);
  console.log("Email: " + email);

  const payload = { email };

  const doSomething = async () => {
    const response = await getMoney(payload);
    setResData(response.data);
  };

  useEffect(() => {
    doSomething();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 py-5 font-bold text-gray-800 border-b border-gray-300">
        <div>{Tabs[0].name}</div>
        <div>{Tabs[1].email}</div>
        <div>{Tabs[2].role}</div>
        <div>{Tabs[3].message}</div>
      </div>

      {/* Table Content */}
      <ul role="list" className="divide-y divide-gray-100">
        {resData.length==0? <div className="col-span-1 text-sm font-semibold leading-6">No Payment Data Captured in Recent Times</div>:resData.map((person, index) => (
          <li
            key={index}
            className="grid grid-cols-4 gap-4 py-5 items-center text-gray-900"
          >
            <div className="col-span-1 text-sm font-semibold leading-6">{person.paid_to}</div>
            <div className="col-span-1 text-sm font-semibold leading-6">{person.amount}</div>
            <div className="col-span-1 text-sm font-semibold leading-6">{person.date.split("G")[0]}</div>
            <div className="col-span-1 text-sm leading-6">{person.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TablegridView;
