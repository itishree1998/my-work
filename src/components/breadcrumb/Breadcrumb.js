import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import img1 from '../../assets/banners/truckele.jpeg'

const BreadcrumbComp = ({title}) => {
  return (
    <div style={{backgroundImage: `linear-gradient( rgba(0,0,0,.7), rgba(0,0,0,.7) ),url(${img1})`, backgroundSize:'cover', backgroundPosition:'center', height:400, width:'100%'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
    <div style={{marginTop: '15%',textAlign:'center'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <h1 style={{color:'#fff', fontSize:'50px', fontWeight:700}}>{title}</h1>
        <Breadcrumb style={{display:'flex', justifyContent:'center'}}>
      <Breadcrumb.Item ><Link to='/' style={{color: '#fff', textDecoration:'none'}}>Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
      </Breadcrumb>
      </div>
    </div>
    </div>
    </div>

  )
}

export default BreadcrumbComp;
// rgba(142,45,226,.5), rgba(74,0,224,.5) 