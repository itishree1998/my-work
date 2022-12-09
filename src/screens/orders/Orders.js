import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import img1 from "../../assets/intransit/Ellipse.png";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import Form from "react-bootstrap/Form";
import { FiSend } from "react-icons/fi";
import { Delivered } from "./Delivered";
import { FreightLetter } from "./FreightLetter";
import { LorryAdvice } from "./LorryAdvice";
import { ReturnFreight } from "./ReturnFreight";
import { BiSearch } from "react-icons/bi";
import { getDefaultNormalizer } from "@testing-library/react";
import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
const Orders = () => {
  const [allData, setAllData] = useState(Data);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const getData = async (data) => {
    setAllData(data);
  };
  const getDataById = async (data) => {
    console.log("getDataByClick", data);
    setShow(true);
  };
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    backgroundColor: "black",
  };

  return (
    <div>
      <Breadcrumb title="Orders" />
      {/* <Button onClick={handleShow}></Button> */}
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Row>
            <Col>
              <FormControl sx={{ m: 1, width: 100 }}>
                {/* <TextField
                  required
                  id="outlined-required"
                  label="S.LNo"
                  defaultValue="701"
                /> */}
                <CssTextField
                  label="S.LNo"
                  id="custom-css-outlined-input"
                  defaultValue="701"
                  InputLabelProps={{
                    style: {
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: "100%",
                      color: "white",
                    },
                  }}
                />
              </FormControl>
            </Col>
            <Col>
              <FormControl sx={{ m: 1 }}>
                {/* <TextField
                  required
                  id="outlined-required"
                  label="Date"
                  defaultValue="18-jan-2022"
                /> */}
                <CssTextField
                  label="Date"
                  id="custom-css-outlined-input"
                  defaultValue="18-jan-2022"
                  InputLabelProps={{
                    style: {
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      width: "100%",
                      color: "white",
                    },
                  }}
                />
              </FormControl>
            </Col>
          </Row>
          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <TextField
              required
              id="outlined-required"
              label="Enter O.A Number"
              defaultValue="12345678345"
            /> */}
            <CssTextField
              label="Enter O.A Number"
              id="custom-css-outlined-input"
              defaultValue="12345678345"
              InputLabelProps={{
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  color: "white",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <TextField
              required
              id="outlined-required"
              label="Enter Loading Quantity"
              defaultValue="250KG"
            /> */}
            <CssTextField
              label="Enter Loading Quantity"
              id="custom-css-outlined-input"
              defaultValue="250KG"
              InputLabelProps={{
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  color: "white",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <TextField
              required
              id="outlined-required"
              label="Enter Party Name"
              defaultValue="D Mallesh"
            /> */}
            <CssTextField
              label="Enter Party Name"
              id="custom-css-outlined-input"
              defaultValue="D Mallesh"
              InputLabelProps={{
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  color: "white",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <TextField
              required
              id="outlined-required"
              label="Enter Grade"
              defaultValue="Grade 53(IS:12269)"
            /> */}
            <CssTextField
              label="Enter Grade"
              id="custom-css-outlined-input"
              defaultValue="Grade 53(IS:12269)"
              InputLabelProps={{
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  color: "white",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <TextField
              required
              id="outlined-required"
              label="Enter D.C Station"
              defaultValue="Nandhyala"
            /> */}
            <CssTextField
              label="Enter D.C Station"
              id="custom-css-outlined-input"
              defaultValue="Nandhyala"
              InputLabelProps={{
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  color: "white",
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <TextField
              required
              id="outlined-required"
              label="Enter District"
              defaultValue="Karnool"
            /> */}
            <CssTextField
              label="Enter District"
              id="custom-css-outlined-input"
              defaultValue="karnool"
              InputLabelProps={{
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "100%",
                  color: "white",
                },
              }}
            />
          </FormControl>

          <Row>
            <Col>
              <Button>
                print &ensp;<i className="pi pi-print"></i>
              </Button>{" "}
            </Col>
            &ensp;&ensp;{" "}
            <Col>
              <Button>
                {" "}
                Download&ensp;<i className="pi pi-download"></i>
              </Button>
            </Col>
            <Col>
              <Button> Generate Lorry Advice</Button>
            </Col>
          </Row>
          <Button onClick={handleClose}>close</Button>
        </Box>
      </Modal>
      <Container fluid style={{ background: "black", padding: "90px" }}>
        <Row>
          <Col style={{}}>
            <h2 style={{ color: "white" }}>
              Booking for Frieght
              <br /> Transformation
            </h2>
            <Row>
              <Col>
                <Form.Label style={{ color: "white" }}>
                  Serial Number
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Serial Number "
                  size="lg"
                  style={{ width: 150, fontSize: 18 }}
                />
              </Col>
              <Col>
                <Form.Label style={{ color: "white", marginLeft: 170 }}>
                  Date
                </Form.Label>
                <Form.Control
                  type="date"
                  id="date and time"
                  name="date and time"
                  min="2021-12-01"
                  max="2023-12-20"
                  size="lg"
                  style={{ width: 160, marginLeft: 170 }}
                />
              </Col>
            </Row>
            <Form.Label style={{ color: "white" }}>O.A Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter O.A number"
              size="lg"
            />
            <Form.Label style={{ color: "white" }}>Loading Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Loading Quantity"
              size="lg"
            />
            <Form.Label style={{ color: "white" }}>Party Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Party Name"
              size="lg"
            />
            <Form.Label style={{ color: "white" }}>Grade</Form.Label>
            <Form.Control type="text" placeholder="Enter Grade" size="lg" />
            <Form.Label style={{ color: "white" }}>D.C Station</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter D.C Station"
              size="lg"
            />
            <Form.Label style={{ color: "white" }}>District</Form.Label>
            <Form.Control type="text" placeholder="Enter District" size="lg" />
            <Button
              variant="warning"
              size="lg"
              active
              style={{ borderRadius: "32px", marginTop: 20, marginLeft: 180 }}
            >
              {" "}
              <FiSend /> Send Request{" "}
            </Button>
          </Col>

          <Col>
            <img
              src="./labour.jpg"
              style={{ height: "530px ", width: "450px", marginTop: "102px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* <Container style={{ textAlign: "center" }}>
        <h1 style={{ color: "orange", marginRight: "880px" }}>Lorry Advice</h1>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            style={{ marginRight: 550 }}
            controlId="formGridState"
          >
            <Form.Select
              defaultValue="Bhavya Cements Pvt Ltd"
              style={{ width: 220 }}
            >
              <option>Bhavya Cements Pvt Ltd</option>
              <option>option2</option>
              <option>option2</option>
              <option>option2</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} style={{}} controlId="formGridCity">
            <Form.Control placeholder="serial Number" style={{}} />
          </Form.Group>

          <Form.Group
            as={Col}
            style={{ marginLeft: 10 }}
            controlId="formGridZip"
          >
            <Form.Control
              style={{ width: 150 }}
              type="date"
              id="date and time"
              name="date and time"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="number"
                placeholder="Enter O.A. Number"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter Loading And Quantity"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter Truck Number"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter Driver Name"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter Driver Licence Number"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter Driver Phone Number"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter Party Name"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter D.c. Station"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter Grade"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
          <Form.Group className="col-lg-6 mb-4">
            <Col className="col-12">
              <Form.Control
                className="p-lg-2 p-sm-1"
                type="text"
                placeholder="Enter  District"
                style={{ fontSize: "20px" }}
              />
            </Col>
          </Form.Group>
        </Row>
        <Button variant="warning" style={{ borderRadius: "32px" }}>
          <FiSend />
          &nbsp; submit
        </Button>
      </Container> */}

      <Container fluid style={{ background: "black" }}>
        <button onClick={() => getData(Data)}>orders</button>&ensp;&ensp;&ensp;
        <button onClick={() => getData(LorryAdvice)}>LorryAdvice</button>
        &ensp;&ensp;&ensp;
        <button onClick={() => getData(FreightLetter)}>FreightLetter</button>
        &ensp;&ensp;&ensp;
        <button onClick={() => getData(Delivered)}>Delivered</button>
        &ensp;&ensp;&ensp;
        <button onClick={() => getData(ReturnFreight)}>ReturnFreight</button>
        <hr style={{ borderTop: "3px  solid  #ffffff" }} />
        <Row>
          <Col>
            <Button
              style={{
                background: "white",
                color: "black",

                width: 200,
              }}
            >
              <BiSearch />
              Search O.A Number
            </Button>
          </Col>
          <Col>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ color: "white " }}>From:</label>
              <Form.Control
                type="date"
                placeholder="date and time"
                id="date and time"
                name="date and time"
              />
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex" }}>
              <label style={{ color: "white " }}>To:</label>
              <Form.Control
                style={{ width: 140 }}
                type="date"
                placeholder="date and time"
                id="date and time"
                name="date and time"
              />
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex" }}>
              <label style={{ color: "white " }}>Short By:</label>
              <Form.Select style={{ width: 170 }}>
                <option>NewestFirst</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </Col>
        </Row>
        {allData.map((item) => (
          <Card
            onClick={() => getDataById(item.Serial)}
            style={{
              marginBottom: 20,
              padding: 20,
              marginLeft: 90,
              marginRight: 90,
              backgroundColor: "#272925",
              color: "white",
            }}
            key={item.Serial}
          >
            <Row>
              <Col>
                <h6>Serial Number:{item.Serial}</h6>
              </Col>
              <Col>
                <h6 style={{ marginLeft: 350 }}>Date:{item.Date} </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>O.A Number</h6>
                <h6 style={{ color: "orange" }}>{item.Number}</h6>
              </Col>
              <Col>
                <h6>Part Name</h6>
                <h6 style={{ color: "orange" }}>{item.Name}</h6>
              </Col>
              <Col>
                <h6>Loading Quantity</h6>
                <h6 style={{ color: "orange" }}>{item.Loading}</h6>
              </Col>
              <Col>
                <h6>Grade</h6>
                <h6 style={{ color: "orange" }}>{item.Grade}</h6>
              </Col>
              <Col>
                <h6>D.C Station</h6>
                <h6 style={{ color: "orange" }}>{item.Station}</h6>
              </Col>
              <Col>
                <h6>District</h6>
                <h6 style={{ color: "orange" }}>{item.District}</h6>
              </Col>
            </Row>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <Button>
                  print &ensp;<i className="pi pi-print"></i>
                </Button>{" "}
                &ensp;&ensp;{" "}
                <Button>
                  {" "}
                  Download&ensp;<i className="pi pi-download"></i>
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Orders;

// import React, { useState } from "react";
// import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import img1 from "../../assets/intransit/Ellipse.png";
// import { Link } from "react-router-dom";
// import { Data } from "./Data";
// import Form from "react-bootstrap/Form";
// import { FiSend } from "react-icons/fi";
// import { Delivered } from "./Delivered";
// import { FreightLetter } from "./FreightLetter";
// import { LorryAdvice } from "./LorryAdvice";
// import { ReturnFreight } from "./ReturnFreight";
// import { BiSearch } from "react-icons/bi";
// import { getDefaultNormalizer } from "@testing-library/react";
// import Modal from "@mui/material/Modal";

// import Box from "@mui/material/Box";
// import FormControl from "@mui/material/FormControl";

// import TextField from "@mui/material/TextField";
// import { alpha, styled } from "@mui/material/styles";
// const Orders = () => {
//   const [allData, setAllData] = useState(Data);
//   const [selectionData, setSelectionData] = useState("");
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);

//   const getData = (data) => {
//     setAllData(data);
//   };
//   const getDataById = (serialNo) => {
//     console.log("serialNo", typeof serialNo);
//     allData.map((item) => {
//       console.log("itemSelection", item.Serial);
//       if (item.Serial == serialNo) {
//         console.log("item", item);
//         setSelectionData(item);
//         setShow(true);
//       }
//     });
//   };
//   const CheckSelection = () => {
//     setSelectionData.map((item) => {
//       console.log("item", item);
//     });
//   };

//   const CssTextField = styled(TextField)({
//     "& label.Mui-focused": {
//       color: "white",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "white",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "white",
//       },
//       "&:hover fieldset": {
//         borderColor: "white",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "white",
//       },
//     },
//   });

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 700,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//     backgroundColor: "black",
//   };

//   return (
//     <div>
//       <button onClick={{ CheckSelection }}>cickMe</button>
//       <Breadcrumb title="Orders" />
//       {/* <Button onClick={handleShow}></Button> */}
//       <Modal
//         open={show}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {selectionData.map((item) => (
//             <div>
//               <Row>
//                 <Col>
//                   <FormControl sx={{ m: 1, width: 100 }}>
//                     {/* <TextField
//                   required
//                   id="outlined-required"
//                   label="S.LNo"
//                   defaultValue="701"
//                 /> */}
//                     <CssTextField
//                       label="S.LNo"
//                       id="custom-css-outlined-input"
//                       defaultValue="701"
//                       InputLabelProps={{
//                         style: {
//                           textOverflow: "ellipsis",
//                           whiteSpace: "nowrap",
//                           overflow: "hidden",
//                           width: "100%",
//                           color: "white",
//                         },
//                       }}
//                     />
//                   </FormControl>
//                 </Col>
//                 <Col>
//                   <FormControl sx={{ m: 1 }}>
//                     {/* <TextField
//                   required
//                   id="outlined-required"
//                   label="Date"
//                   defaultValue="18-jan-2022"
//                 /> */}
//                     <CssTextField
//                       label="Date"
//                       id="custom-css-outlined-input"
//                       defaultValue="18-jan-2022"
//                       InputLabelProps={{
//                         style: {
//                           textOverflow: "ellipsis",
//                           whiteSpace: "nowrap",
//                           overflow: "hidden",
//                           width: "100%",
//                           color: "white",
//                         },
//                       }}
//                     />
//                   </FormControl>
//                 </Col>
//               </Row>
//               <FormControl fullWidth sx={{ m: 1 }}>
//                 {/* <TextField
//               required
//               id="outlined-required"
//               label="Enter O.A Number"
//               defaultValue="12345678345"
//             /> */}
//                 <CssTextField
//                   label="Enter O.A Number"
//                   id="custom-css-outlined-input"
//                   defaultValue="12345678345"
//                   InputLabelProps={{
//                     style: {
//                       textOverflow: "ellipsis",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       width: "100%",
//                       color: "white",
//                     },
//                   }}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ m: 1 }}>
//                 {/* <TextField
//               required
//               id="outlined-required"
//               label="Enter Loading Quantity"
//               defaultValue="250KG"
//             /> */}
//                 <CssTextField
//                   label="Enter Loading Quantity"
//                   id="custom-css-outlined-input"
//                   defaultValue="250KG"
//                   InputLabelProps={{
//                     style: {
//                       textOverflow: "ellipsis",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       width: "100%",
//                       color: "white",
//                     },
//                   }}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ m: 1 }}>
//                 {/* <TextField
//               required
//               id="outlined-required"
//               label="Enter Party Name"
//               defaultValue="D Mallesh"
//             /> */}
//                 <CssTextField
//                   label="Enter Party Name"
//                   id="custom-css-outlined-input"
//                   defaultValue="D Mallesh"
//                   InputLabelProps={{
//                     style: {
//                       textOverflow: "ellipsis",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       width: "100%",
//                       color: "white",
//                     },
//                   }}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ m: 1 }}>
//                 {/* <TextField
//               required
//               id="outlined-required"
//               label="Enter Grade"
//               defaultValue="Grade 53(IS:12269)"
//             /> */}
//                 <CssTextField
//                   label="Enter Grade"
//                   id="custom-css-outlined-input"
//                   defaultValue="Grade 53(IS:12269)"
//                   InputLabelProps={{
//                     style: {
//                       textOverflow: "ellipsis",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       width: "100%",
//                       color: "white",
//                     },
//                   }}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ m: 1 }}>
//                 {/* <TextField
//               required
//               id="outlined-required"
//               label="Enter D.C Station"
//               defaultValue="Nandhyala"
//             /> */}
//                 <CssTextField
//                   label="Enter D.C Station"
//                   id="custom-css-outlined-input"
//                   defaultValue="Nandhyala"
//                   InputLabelProps={{
//                     style: {
//                       textOverflow: "ellipsis",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       width: "100%",
//                       color: "white",
//                     },
//                   }}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ m: 1 }}>
//                 {/* <TextField
//               required
//               id="outlined-required"
//               label="Enter District"
//               defaultValue="Karnool"
//             /> */}
//                 <CssTextField
//                   label="Enter District"
//                   id="custom-css-outlined-input"
//                   defaultValue="karnool"
//                   InputLabelProps={{
//                     style: {
//                       textOverflow: "ellipsis",
//                       whiteSpace: "nowrap",
//                       overflow: "hidden",
//                       width: "100%",
//                       color: "white",
//                     },
//                   }}
//                 />
//               </FormControl>

//               <Row>
//                 <Col>
//                   <Button>
//                     print &ensp;<i className="pi pi-print"></i>
//                   </Button>{" "}
//                 </Col>
//                 &ensp;&ensp;{" "}
//                 <Col>
//                   <Button>
//                     {" "}
//                     Download&ensp;<i className="pi pi-download"></i>
//                   </Button>
//                 </Col>
//                 <Col>
//                   <Button> Generate Lorry Advice</Button>
//                 </Col>
//               </Row>
//               <Button onClick={handleClose}>close</Button>
//             </div>
//           ))}
//         </Box>
//         ;
//       </Modal>
//       <Container fluid style={{ background: "black", padding: "90px" }}>
//         <Row>
//           <Col style={{}}>
//             <h2 style={{ color: "white" }}>
//               Booking for Frieght
//               <br /> Transformation
//             </h2>
//             <Row>
//               <Col>
//                 <Form.Label style={{ color: "white" }}>
//                   Serial Number
//                 </Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Serial Number "
//                   size="lg"
//                   style={{ width: 150, fontSize: 18 }}
//                 />
//               </Col>
//               <Col>
//                 <Form.Label style={{ color: "white", marginLeft: 170 }}>
//                   Date
//                 </Form.Label>
//                 <Form.Control
//                   type="date"
//                   id="date and time"
//                   name="date and time"
//                   min="2021-12-01"
//                   max="2023-12-20"
//                   size="lg"
//                   style={{ width: 160, marginLeft: 170 }}
//                 />
//               </Col>
//             </Row>
//             <Form.Label style={{ color: "white" }}>O.A Number</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter O.A number"
//               size="lg"
//             />
//             <Form.Label style={{ color: "white" }}>Loading Quantity</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter Loading Quantity"
//               size="lg"
//             />
//             <Form.Label style={{ color: "white" }}>Party Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter Party Name"
//               size="lg"
//             />
//             <Form.Label style={{ color: "white" }}>Grade</Form.Label>
//             <Form.Control type="text" placeholder="Enter Grade" size="lg" />
//             <Form.Label style={{ color: "white" }}>D.C Station</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter D.C Station"
//               size="lg"
//             />
//             <Form.Label style={{ color: "white" }}>District</Form.Label>
//             <Form.Control type="text" placeholder="Enter District" size="lg" />
//             <Button
//               variant="warning"
//               size="lg"
//               active
//               style={{ borderRadius: "32px", marginTop: 20, marginLeft: 180 }}
//             >
//               {" "}
//               <FiSend /> Send Request{" "}
//             </Button>
//           </Col>

//           <Col>
//             <img
//               src="./labour.jpg"
//               style={{ height: "530px ", width: "450px", marginTop: "102px" }}
//             />
//           </Col>
//         </Row>
//       </Container>

//       {/* <Container style={{ textAlign: "center" }}>
//         <h1 style={{ color: "orange", marginRight: "880px" }}>Lorry Advice</h1>
//         <Row className="mb-3">
//           <Form.Group
//             as={Col}
//             style={{ marginRight: 550 }}
//             controlId="formGridState"
//           >
//             <Form.Select
//               defaultValue="Bhavya Cements Pvt Ltd"
//               style={{ width: 220 }}
//             >
//               <option>Bhavya Cements Pvt Ltd</option>
//               <option>option2</option>
//               <option>option2</option>
//               <option>option2</option>
//             </Form.Select>
//           </Form.Group>
//           <Form.Group as={Col} style={{}} controlId="formGridCity">
//             <Form.Control placeholder="serial Number" style={{}} />
//           </Form.Group>

//           <Form.Group
//             as={Col}
//             style={{ marginLeft: 10 }}
//             controlId="formGridZip"
//           >
//             <Form.Control
//               style={{ width: 150 }}
//               type="date"
//               id="date and time"
//               name="date and time"
//             />
//           </Form.Group>
//         </Row>
//         <Row>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="number"
//                 placeholder="Enter O.A. Number"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter Loading And Quantity"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter Truck Number"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter Driver Name"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter Driver Licence Number"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter Driver Phone Number"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter Party Name"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter D.c. Station"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter Grade"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//           <Form.Group className="col-lg-6 mb-4">
//             <Col className="col-12">
//               <Form.Control
//                 className="p-lg-2 p-sm-1"
//                 type="text"
//                 placeholder="Enter  District"
//                 style={{ fontSize: "20px" }}
//               />
//             </Col>
//           </Form.Group>
//         </Row>
//         <Button variant="warning" style={{ borderRadius: "32px" }}>
//           <FiSend />
//           &nbsp; submit
//         </Button>
//       </Container> */}

//       <Container fluid style={{ background: "black" }}>
//         <button onClick={() => getData(Data)}>orders</button>&ensp;&ensp;&ensp;
//         <button onClick={() => getData(LorryAdvice)}>LorryAdvice</button>
//         &ensp;&ensp;&ensp;
//         <button onClick={() => getData(FreightLetter)}>FreightLetter</button>
//         &ensp;&ensp;&ensp;
//         <button onClick={() => getData(Delivered)}>Delivered</button>
//         &ensp;&ensp;&ensp;
//         <button onClick={() => getData(ReturnFreight)}>ReturnFreight</button>
//         <hr style={{ borderTop: "3px  solid  #ffffff" }} />
//         <Row>
//           <Col>
//             <Button
//               style={{
//                 background: "white",
//                 color: "black",

//                 width: 200,
//               }}
//             >
//               <BiSearch />
//               Search O.A Number
//             </Button>
//           </Col>
//           <Col>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <label style={{ color: "white " }}>From:</label>
//               <Form.Control
//                 type="date"
//                 placeholder="date and time"
//                 id="date and time"
//                 name="date and time"
//               />
//             </div>
//           </Col>
//           <Col>
//             <div style={{ display: "flex" }}>
//               <label style={{ color: "white " }}>To:</label>
//               <Form.Control
//                 style={{ width: 140 }}
//                 type="date"
//                 placeholder="date and time"
//                 id="date and time"
//                 name="date and time"
//               />
//             </div>
//           </Col>
//           <Col>
//             <div style={{ display: "flex" }}>
//               <label style={{ color: "white " }}>Short By:</label>
//               <Form.Select style={{ width: 170 }}>
//                 <option>NewestFirst</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//             </div>
//           </Col>
//         </Row>
//         {allData.map((item) => (
//           <Card
//             onClick={() => getDataById(item.Serial)}
//             style={{
//               marginBottom: 20,
//               padding: 20,
//               marginLeft: 90,
//               marginRight: 90,
//               backgroundColor: "#272925",
//               color: "white",
//             }}
//             key={item.Serial}
//           >
//             <Row>
//               <Col>
//                 <h6>Serial Number:{item.Serial}</h6>
//               </Col>
//               <Col>
//                 <h6 style={{ marginLeft: 350 }}>Date:{item.Date} </h6>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <h6>O.A Number</h6>
//                 <h6 style={{ color: "orange" }}>{item.Number}</h6>
//               </Col>
//               <Col>
//                 <h6>Part Name</h6>
//                 <h6 style={{ color: "orange" }}>{item.Name}</h6>
//               </Col>
//               <Col>
//                 <h6>Loading Quantity</h6>
//                 <h6 style={{ color: "orange" }}>{item.Loading}</h6>
//               </Col>
//               <Col>
//                 <h6>Grade</h6>
//                 <h6 style={{ color: "orange" }}>{item.Grade}</h6>
//               </Col>
//               <Col>
//                 <h6>D.C Station</h6>
//                 <h6 style={{ color: "orange" }}>{item.Station}</h6>
//               </Col>
//               <Col>
//                 <h6>District</h6>
//                 <h6 style={{ color: "orange" }}>{item.District}</h6>
//               </Col>
//             </Row>
//             <Row>
//               <Col style={{ textAlign: "center" }}>
//                 <Button>
//                   print &ensp;<i className="pi pi-print"></i>
//                 </Button>{" "}
//                 &ensp;&ensp;{" "}
//                 <Button>
//                   {" "}
//                   Download&ensp;<i className="pi pi-download"></i>
//                 </Button>
//               </Col>
//             </Row>
//           </Card>
//         ))}
//       </Container>
//     </div>
//   );
// };

// export default Orders;
