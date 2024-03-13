import React from 'react';
import rectImage from '../assets/rect.png';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const UserProfile = () => {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Details
  const userName = 'John Doe';
  const businessActivity = 'Web Developer';

  const applicantDetails = {
    name: 'Lokesh',
    Email: 'lokesh07084@gmail.com',
    Phone: '+919944033161',
    constitution: 'Constitution',
    businessActivity: 'Business Activity',
    registeredOfficeAddress: 'Registered Office Address',
    addressForCommunicationOffice: 'Address for Communication (Office)',
    addressForCommunicationWork: 'Address for Communication (Work)',
    landline: 'Landline',
    website: 'Website',
  };

  return (
    <div>
        <Navbar />
        <div className="flex flex-col">
            <div className="flex justify-center items-center px-16 py-11 w-full font-bold text-black border border-black border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full max-w-[1351px] max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto text-4xl">Membership Application</div>
                <div className="flex gap-5 justify-between my-auto text-sm whitespace-nowrap">
                <a href="/" className="my-auto grow italic" style={{ textDecoration: 'none', color: 'your-color' }}>
                    home
                </a>
                <div className="my-auto py-0 text-xl">&gt;&gt;</div>
                <div className="grow italic my-auto">Profile</div>
                </div>
            </div>
            </div>
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
                            style={{ width: '50%' ,height: '30vh' }}
                            className='mx-auto d-block'
                        />
                        <Card.Body className='bg-gradient-to-r from-slate-100 to-slate-100 text-center '>
                            <Card.Title className="text-center mb-3 text-black pt-[10%]">{userName}</Card.Title>
                            <Card.Text className="text-center text-black pb-[10%]">{businessActivity}</Card.Text>
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
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>Name: </h5> {applicantDetails.name}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>Email: </h5> {applicantDetails.Email}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>Phone: </h5> {applicantDetails.Phone}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>Constitution: </h5> {applicantDetails.constitution}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>BusinessActivity: </h5> {applicantDetails.businessActivity}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>RegisteredOfficeAddress: </h5> {applicantDetails.registeredOfficeAddress}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>AddressForCommunicationOffice: </h5> {applicantDetails.addressForCommunicationOffice}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>AddressForCommunicationWork: </h5> {applicantDetails.addressForCommunicationWork}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>Landline: </h5> {applicantDetails.landline}</Card.Text>
                    <Card.Text className='flex font-semibold'><h5 className='font-bold pr-6'>Website: </h5> {applicantDetails.website}</Card.Text>
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
