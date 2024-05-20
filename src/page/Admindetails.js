import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useBaseUrl } from '../context';

const AdminDetailsPage = () => {
  const navigate = useNavigate();
  const { baseUrl } = useBaseUrl();
  const { id } = useParams();
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/application/${id}/`, {
          headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
          }
        });
        console.log("Sample 1", response.data);
        setResponseData(response.data);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };
  
    fetchData();
  
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2 ml-[30%]">
        <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Admin Details</h2>
        {responseData && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-500">ID:</span>
              <span>{responseData.content.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Name of Applicant:</span>
              <span>{responseData.content.Nameofapplicant}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Constitution:</span>
              <span>{responseData.content.constitution}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Individual Name:</span>
              <span>{responseData.content.individual_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Is Individual:</span>
              <span>{responseData.content.is_individual ? 'Yes' : 'No'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Business Activity:</span>
              <span>{responseData.content.Businessactivity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Registered Office Address:</span>
              <span>{responseData.content.regoffadd}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Additional Contact Office:</span>
              <span>{responseData.content.acoffice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Additional Contact Work:</span>
              <span>{responseData.content.acwork}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Contact Designation Landline:</span>
              <span>{responseData.content.cdlan}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Contact Phone:</span>
              <span>{responseData.content.cdphone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Contact Email:</span>
              <span>{responseData.content.cdemail}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Contact Website:</span>
              <span>{responseData.content.cdweb}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Aadhar:</span>
              <span>{responseData.content.aadhar}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">PAN Card No:</span>
              <span>{responseData.content.pancardno}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">GST No:</span>
              <span>{responseData.content.GSTNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Company/Firm Reg No:</span>
              <span>{responseData.content.CompanyFirmRegNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Society/Association Reg No:</span>
              <span>{responseData.content.SocietyAssociationRegNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">PAN Name:</span>
              <span>{responseData.content.paname}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">PAN PAN:</span>
              <span>{responseData.content.papan}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">PA Phone:</span>
              <span>{responseData.content.paphone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">PA Designation:</span>
              <span>{responseData.content.padesignation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">PA Aadhaar:</span>
              <span>{responseData.content.paaadhaar}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">PA Mail ID:</span>
              <span>{responseData.content.pamail_id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Main Category:</span>
              <span>{responseData.content.indmain_category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Sub Category:</span>
              <span>{responseData.content.indsub_category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Domestic Market:</span>
              <span>{responseData.content.cmdomestic}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Global Market:</span>
              <span>{responseData.content.cmglobal_market}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Percentage of Imports:</span>
              <span>{responseData.content.cmpercentage_of_imports}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Percentage of Exports:</span>
              <span>{responseData.content.cmpercentage_of_exports}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Country for Foreign Collaboration:</span>
              <span>{responseData.content.country_name_foreign_collaboration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Collaborator for Foreign Collaboration:</span>
              <span>{responseData.content.collaborator_name_foreign_collaboration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Annual Turnover Year 1:</span>
              <span>{responseData.content.annual_turnover_year1}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Annual Turnover Year 2:</span>
              <span>{responseData.content.annual_turnover_year2}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Annual Turnover Year 3:</span>
              <span>{responseData.content.annual_turnover_year3}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Industry Classification:</span>
              <span>{responseData.content.classindustry}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Direct Office Employees:</span>
              <span>{responseData.content.direct_office_employees}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Indirect Contractual Employees:</span>
              <span>{responseData.content.indirect_contractual_employees}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Works Employees:</span>
              <span>{responseData.content.works_employees}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Outsourced Employees:</span>
              <span>{responseData.content.outsourced_employees}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">ESIC:</span>
              <span>{responseData.content.esic}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">EPF:</span>
              <span>{responseData.content.epf}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Branches Outside India:</span>
              <span>{responseData.content.branches_outside_india}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Is Member of Association:</span>
              <span>{responseData.content.is_member_of_association}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Association Name:</span>
              <span>{responseData.content.association_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Is Office Bearer:</span>
              <span>{responseData.content.is_office_bearer}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Association Position:</span>
              <span>{responseData.content.association_position}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Reason for Joining Chamber:</span>
              <span>{responseData.content.reason_for_joining_chamber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">E-Sign:</span>
              <img src={`${baseUrl}${responseData.content.e_sign}`} alt="E-Sign" className="w-24 h-24 object-cover rounded-md shadow-md" />
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Seal Image:</span>
              <img src={`${baseUrl}${responseData.content.seal_image}`} alt="Seal Image" className="w-24 h-24 object-cover rounded-md shadow-md" />
            </div>
            {/* Add more fields if necessary */}
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default AdminDetailsPage;
