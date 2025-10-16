import React from "react";
import { IoIosContacts } from "react-icons/io";
import { GoAlert } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuClockAlert } from "react-icons/lu";
import { useAuth } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { data } = useAuth()
  const cards = [
    {
      text: "Total Customers",
      value: data.length,
      icon: (
        <IoIosContacts className="text-3xl p-1 bg-gray-200 text-sky-400 rounded-full" />
      ),
    },
    {
      text: "Expired Insurance",
      value: 0,
      icon: < GoAlert className="text-3xl p-1 bg-gray-200 text-red-400 rounded-full" />
    },
    {
      text: "Expired PUC",
      value: 0,
      icon: < LuClockAlert className="text-3xl p-1 bg-gray-200 text-red-400 rounded-full" />
    },
    {
      text: "Reminder Send Today",
      value: 0,
      icon: < IoIosNotificationsOutline className="text-3xl p-1 bg-gray-200 text-green-400 rounded-full" />
    },
  ];
  return (
    <div className="p-2 px-5">
      <h1 className="text-xl font-bold p-3">Dashboard Overview</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="p-2 justify-between bg-white rounded-2xl border-gray-100 hover:shadow-md  duration-500">
            <div className="flex flex-col gap-3 p-3">
              <div className="flex justify-between">
                <h2>{card.text}</h2>
                <p>{card.icon}</p>
              </div>
              <p>{card.value}</p>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
