import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useBaseUrl } from '../context';

const AdminconfCEO = () => {
  const navigate = useNavigate();
  const { baseUrl } = useBaseUrl();
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [rejectingRecord, setRejectingRecord] = useState({});
  const [reason, setReason] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/checktoken/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        if (response.data['message'] === 'Token is valid') {
          console.log('Access Granted');
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.log('Error checking access:', error);
        navigate('/login'); // Redirect to login page if error occurs
      }

      try {
        const response = await axios.get(`${baseUrl}api/formadmin/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        console.log('Data from API:', response.data); // Log data from API
        setData(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
        // Handle error fetching data, e.g., show error message to user
      }
    };

    fetchData();
  }, [baseUrl, navigate]);

  const handleFirstNameClick = (item) => {
    const itemID = item.id;
    navigate(`/admindetails/${itemID}`);
  };

  const handleAccept = async (item) => {
    try {
      const response = await axios.post(`${baseUrl}api/formadmin/`, {
        status: 'approve',
        id: item['id'],
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      });
      setData(response.data['content']);
    } catch (error) {
      console.log('Error accepting item:', error);
      // Handle error accepting item, e.g., show error message to user
    }
  };

  const handleReject = (item) => {
    setPopup(true);
    setRejectingRecord(item);
  };

  const handleSubmit = () => {
    axios.post(`${baseUrl}api/formadmin/`, {
      status: 'rejected',
      id: rejectingRecord['id'],
      ror: reason,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (response.data['message'] === 'Application Rejected') {
          setData(response.data['content']);
        }
      })
      .catch((error) => {
        console.log('Error rejecting item:', error);
        // Handle error rejecting item, e.g., show error message to user
      });

    setPopup(false);
  };

  return (
    <>
      {popup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Popup</h2>
            <p>Please Provide the reason to Reject the application of {rejectingRecord['Nameofapplicant']}</p>
            <textarea type="text" className="border border-gray-300 rounded-lg w-full p-2 mt-2" onChange={(e) => setReason(e.target.value)} />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all"
              onClick={() => handleSubmit()}
            >
              Reject
            </button>
          </div>
        </div>
      )}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sno</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
  {Array.isArray(data) && data.map((item, index) => (
    <tr key={index}>
      <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-900"
          onClick={(e) => {
            e.preventDefault();
            handleFirstNameClick(item);
          }}
        >
          {item['Nameofapplicant']}
        </a>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{item['form_status']}</td>
      {item['form_status'] === 'Approved by Membership Committee' && (
        <>
          <td className="px-6 py-4 whitespace-nowrap">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAccept(item)}
            >
              Accept
            </button>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleReject(item)}
            >
              Reject
            </button>
          </td>
        </>
      )}
      {item['form_status'] === 'rejected' && (
        <td className="px-6 py-4 whitespace-nowrap" colSpan="2">
          <p className='text-left text-xs font-medium text-gray-500 uppercase tracking-wider mt-3'>{item['ror']}</p>
        </td>
      )}
    </tr>
  ))}
</tbody>

      </table>
    </>
  );
};

export default AdminconfCEO;
