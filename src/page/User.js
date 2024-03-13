import React, { useState, useEffect } from 'react';
import rectImage from '../assets/rect.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const accessToken = localStorage.getItem('token');
  console.log(accessToken)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve access token from local storage
        const accessToken = localStorage.getItem('access_token');


        const response = await axios.get('http://192.168.68.83:8000/api/user/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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
  }, []); // Run once on component mount

  if (!userData) {
    // Data is still loading
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        {/* Your existing code for the header */}
      </div>
      <Container fluid className="p-5">
        <Row>
          <Col sm={3}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              className="m-3 p-3"
            >
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={rectImage}
                  style={{ width: '50%', height: '30vh' }}
                  className='mx-auto d-block'
                />
                <Card.Body className='bg-gradient-to-r from-slate-100 to-slate-100 text-center '>
                  <Card.Title className="text-center mb-3 text-black pt-[10%]">{userData.name}</Card.Title>
                  <Card.Text className="text-center text-black pb-[10%]">{userData.businessActivity}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col sm={9}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="m-3 p-3 h-100"
            >
              <Card className="text-black h-100">
                <Card.Body className='bg-gradient-to-r from-slate-300 to-slate-200'>
                  <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>Name: </h5> {userData.name}</Card.Text>
                  <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>Email: </h5> {userData.email}</Card.Text>
                  {/* Add other fields based on your API response */}
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
