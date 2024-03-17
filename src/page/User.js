import React, { useState, useEffect } from 'react';
import userImage from '../assets/user.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import axios from 'axios';
import BASE_URL from './Appconfig';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/user/`, {
          headers: {
            'Authorization': `Token ${accessToken}`,
          },
        });

        if (!response.data) {
          throw new Error('Failed to fetch user data');
        }

        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    // Data is still loading
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="profile-header bg-gradient-to-r from-purple-500 to-indigo-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome, {userData[0].username}</h1>
        <p className="text-lg">Explore your profile details below.</p>
      </div>
      <Container fluid className="mt-5">
        <Row>
          <Col md={4}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="m-3 p-3"
            >
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={userImage}
                  className="mx-auto d-block rounded-circle mt-3"
                  style={{ width: '150px', height: '150px' }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="mb-3">{userData[0].username}</Card.Title>
                  <Card.Text>{userData[0].email}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col md={8}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="m-3 p-3 h-100"
            >
              <Card className="text-dark h-100">
                <Card.Body>
                  <Card.Title className="mb-4">User Details</Card.Title>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Name of Applicant: {userData[0].form1_data.Nameofapplicant}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Business Activity: {userData[0].form1_data.Businessactivity}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      CD LAN: {userData[0].form1_data.cdlan}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      CD Phone: {userData[0].form1_data.cdphone}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      CD Email: {userData[0].form1_data.cdemail}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      CD Web: {userData[0].form1_data.cdweb}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Constitution: {userData[0].form1_data.constitution}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Registered Office Address: {userData[0].form1_data.regoffadd}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Account Office: {userData[0].form1_data.acoffice}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Account Work: {userData[0].form1_data.acwork}
                    </li>
                    {/* Display data from payment_transaction_data */}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Membership Type: {userData[0].payment_transaction_data.membership_type}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Sales Turnover: {userData[0].payment_transaction_data.sales_turnover}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Registration Date: {userData[0].payment_transaction_data.registration_date}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Membership Expiry Date: {userData[0].payment_transaction_data.membership_expiry_date}
                    </li>
                    {/* Add more fields here */}
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
