import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useBaseUrl } from '../context';

const Adminconf = () => {
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
        console.log(error);
      }

      try {
        const response = await axios.get(`${baseUrl}api/formadmin/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        setData(response.data);
        console.log(data[0]['GSTNo']);
      } catch (error) {
        console.log(error);
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
      console.log(response.data);
      setData(response.data['content']);
    } catch (error) {
      console.log(error);
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
        console.log(response.data);
        if (response.data['message'] === 'Application Rejected') {
          setData(response.data['content']);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setPopup(false);
  };

  return (
    <>
      {popup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Popup</h2>
            <p>Please Provide the reason to Reject the application of {rejectingRecord['Nameofapplicant']}</p>
            <textarea
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2 mt-2"
              onChange={(e) => setReason(e.target.value)}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => handleSubmit()}
            >
              Reject
            </button>
          </div>
        </div>
      )}
      {data.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sno</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
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
                {item['form_status'] === 'pending' && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleAccept(item)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                      onClick={() => handleReject(item)}
                    >
                      Reject
                    </button>
                  </td>
                )}
                {
                  item['form_status'] === 'rejected' && (
                    <td colSpan="2" className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <p>{item['ror']}</p>
                    </td>
                  )
                }
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 mt-8">No forms submitted yet.</p>
      )}
    </>
  );
};

export default Adminconf;
