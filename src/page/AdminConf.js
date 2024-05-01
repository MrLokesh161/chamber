import React from 'react';
import { useMemo } from 'react';
import { useNavigate } from "react-router-dom";

const Adminconf = () => {
  const navigate = useNavigate(); // Corrected hook name

  // Sample data
  const data = [
    {
      sno: 1,
      firstName: 'Zachary',
      status: 'Waiting for Approval',
    },
    {
      sno: 2,
      firstName: 'Robert',
      status: 'Waiting for Approval',
    },
    {
      sno: 3,
      firstName: 'Kevin',
      status: 'Waiting for Approval',
    },
    {
      sno: 4,
      firstName: 'John',
      status: 'Waiting for Approval',
    },
  ];

  const handleFirstNameClick = (item) => {
    console.log("Clicked on first name:", item.firstName); // Debugging statement
    // Navigate to admin details page
    navigate(`/admindetails`); // Corrected function call
  };
  

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sno</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-900"
                onClick={(e) => {
                  e.preventDefault();
                  handleFirstNameClick(item);
                }}
              >
                {item.firstName}
              </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Adminconf;
