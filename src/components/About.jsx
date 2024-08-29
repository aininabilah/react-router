import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Foto from '../images/kantor2.jpg';
import '../index.css';

function About() {
  return (
    <div className="w-full dashboard flex justify-center items-center mt-8">
      <div className=" mx-auto py-8">
        <Container>
          <Row className="flex justify-center items-center justify-center min-h-screen font-semibold text-gray-700   ">
            <Col md={6} className="text-grey-100">
              <div>
                <h3 className="font-extrabold text-3xl ">Visi</h3>
                <p className="mt-4 font-medium text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi, non accusantium a ab necessitatibus blanditiis consequatur voluptatibus sit quas eius. Ipsam perspiciatis fugiat porro suscipit molestiae a vitae vel.
                </p>
              </div>

              <div className="mt-8 ">
                <h3 className="font-extrabold text-3xl">Misi</h3>
                <p className="mt-4 font-medium text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi, non accusantium a ab necessitatibus 
                </p>
                <ul style={{ listStyleType: 'disc', color: 'black'}}>
                <li className="text-gray-700 font-medium text-sm" >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi,
                </li>
                <li className="text-gray-700 font-medium text-sm" >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi,
                </li>
                <li className="text-gray-700 font-medium text-sm" >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi,
                </li>
              </ul>
              </div>
            </Col>

            <Col md={6} className=" justify-center items-center mt-8">
              <div className=" justify-center ">
                {/* Ganti src dengan path gambar yang sesuai di proyek Anda */}
                <img src={Foto} alt="PaDi UMKM" className="rounded-lg shadow-lg " />
              </div>
            </Col>
          </Row>
          <div className="Footer">
         <footer className="mt-20 mb-4 text-center text-gray-400">
        &copy;2022-2025 Pasar Digital UMKM Indonesia
      </footer>
      </div>
        </Container>
      </div>

      
    </div>
    
  );
}


export default About;
