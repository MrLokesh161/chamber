import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CertificateComponent = () => {
    const [certificateData, setCertificateData] = useState(null); 

    useEffect(() => {
        const fetchCertificateData = async () => {
            try {
                const accessToken = localStorage.getItem("token");
                const response = await axios.get(`https://chamber.lokeshdev.co/api/generate_certificate/`, {
                    headers: {
                        Authorization: `Token ${accessToken}`,
                      },
                });
                setCertificateData(response.data[0]); // Access the first item in the array
                console.log(response.data[0]);
            } catch (error) {
                console.error('Error fetching certificate data:', error);
            }
        };

        fetchCertificateData();
    }, []);

    return (
        <div className="container bg-white border-4 border-yellow-500 w-3/4 h-96 mx-auto flex flex-col justify-center items-center shadow-lg rounded-lg">
            {certificateData ? (
                <div className="p-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-yellow-500 mb-4">Indian Chamber of Commerce and Industries</h1>
                        <h2 className="text-4xl font-semibold text-yellow-500 mb-8">Certificate of Membership</h2>
                    </div>
                    <div className="text-lg mb-4">
                        This certificate is presented to
                    </div>
                    <div className="text-xl italic border-b-2 border-black mb-8">
                        {certificateData.Name}
                    </div>
                    <div className="text-lg mb-8">
                        For joining as a member in the Indian Chamber of Commerce and Industries on {new Date(certificateData.issue_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-600">Issued on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CertificateComponent;
