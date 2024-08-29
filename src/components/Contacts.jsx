import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../index.css';

function Contacts() {
    return (
      <div className="flex flex-col items-start justify-center min-h-screen p-8">
        <h1 className="text-left pl-4 ml-8 text-gray-600 font-extrabold text-3xl">
          Hubungi Kami
        </h1>
        <h6 className="text-left pl-4 ml-8 text-gray-600 font-medium">
          Memiliki pertanyaan lebih lanjut seputar PaDi UMKM?
        </h6>
        <h6 className="text-left pl-4 ml-8 text-gray-600 font-medium  mb-8">
          Silahkan menghubungi kami secara langsung
        </h6>
        <div className=" mx-auto py-8">
        <Container>
          <Row className="flex justify-center items-center font-semibold text-gray-700 ">
         
            <Col md={6} className="text-grey-100">
            <Card className="text-start mb-4">
            <Card.Body>
           
            <Card.Text className="font-extrabold text-2xl text-gray-700 flex items-center space-x-3 my-3">
            Layanan Informasi Pengguna
            </Card.Text>
            <Card.Text className="font-extrabold text-3xl text-gray-700 flex items-center text-sm space-x-3 mb-0">
            Email
            </Card.Text>
            <Card.Text className="font-medium text-md flex text-gray-700 items-center text-sm space-x-3">
            cs@padiumkm.id
            </Card.Text>
            <Card.Text className="font-extrabold text-3xl text-gray-700 flex items-center text-sm space-x-3 mb-0">
            Whatsapp
            </Card.Text>
            <Card.Text className="font-medium text-md text-gray-700 flex items-center text-sm space-x-3">
            +6281290007820
            </Card.Text>
            <Card.Text className="font-extrabold text-3xl text-gray-700 flex items-center text-sm space-x-3 mb-0">
            Senin - Jumat | 08:00 - 17:00 WIB
            </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} className="text-grey-100">
            <Card className="text-start mb-4">
            <Card.Body>
            <Card.Text className="font-extrabold text-2xl text-gray-700 flex items-center space-x-3 my-1">
            Kantor Kami
            </Card.Text>
            <Card.Text className="font-medium text-lg text-gray-700 flex items-center space-x-3 my-1">
            PaDi UMKM Headquarters
            </Card.Text>
            <Card.Text className="font-medium text-md text-gray-700 flex items-center space-x-3 my-1">
            Gedung Telkom Direktorat Business and Technology
            </Card.Text>
            <Card.Text className="font-meidum text-xs text-gray-700 flex items-center space-x-3 my-0">
            Jln.Prof.Dr.Soepomo No.139, Jakarta Selatan, DKI Jakarta, 12810 Indonesia
            </Card.Text>
            <Card.Text className="font-medium text-xs flex items-center text-sm space-x-3 my-3 mb-8">
                     
            </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
           
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


export default Contacts;
