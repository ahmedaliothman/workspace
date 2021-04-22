import React from "react"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const submitAlert =()=> {
    confirmAlert({
        customUI: () => {
          return (
            <div style={{textAlign: 'center', width: 500,borderRadius:10, padding: 40, background: '#005da3', boxShadow: '0 20px 75px rgb(0 0 0 / 23%)', color: '#fff'}} >
              <h4>هل أنت متأكد من تغيير الحالة?</h4>
              <button style={{margin:20 ,width:50,borderRadius:10,fontSize:20 ,background:'white'}} onClick={() =>  setValue(true) }>نعم </button>
              <button style={{margin:20 ,width:50,borderRadius:10 ,fontSize:20,background:'white'}} onClick={()=> setValue(false)}>لا</button> 
            </div>
          );
        }
      });
     

  }

  export default submitAlert


