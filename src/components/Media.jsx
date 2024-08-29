import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { items } from '../constants/constmedia';
import Media1 from '../images/media1.jpg';
import Media2 from '../images/media2.jpg';
import Media3 from '../images/media3.jpg';
import '../index.css';

function Help() {
    return (
      <div className="flex flex-col items-start justify-center min-h-screen p-8">
        <h1 className="text-left pl-4 ml-8 text-gray-600 font-extrabold text-3xl">
          Media
        </h1>
        <h6 className="text-left pl-4 ml-8 text-gray-600 font-medium  mb-8">
          Informasi Seputar PaDi UMKM
        </h6>
        <div className=" mx-auto py-8">
        <Container>
          <Row className="flex justify-center items-center font-semibold text-gray-700 ">
          {items.map((item, index) => (
            <Col md={4} className="text-grey-100">
            <Card className="text-start mb-4">
            <Card.Body>
            <img src={index === 0 ? Media1 : index === 1 ? Media2 : Media3} alt="PaDi UMKM" />
            <Card.Title className="font-extrabold text-grey-900 text-4xl  flex items-center space-x-3 my-3">
                  {item.title}
            </Card.Title>
            <Card.Text className="font-medium text-xs flex items-center text-sm space-x-3 my-3">
                      {item.subTitle1}
            </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
           <div className="Footer">
            <footer className="mt-17 mb-4 text-center text-gray-400">
              &copy;2022-2025 Pasar Digital UMKM Indonesia
            </footer>
          </div>
        </Container>
      </div>
    </div>
      
    );
  }


export default Help;
