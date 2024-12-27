import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Modal from './Modal';
import { post } from '../services/ApiEndPoint';
import toast from 'react-hot-toast';

export default function SideBar() {
  return (
    <>
      <div 
        className="mt-4 mx-4 position-fixed" 
        style={{ backgroundColor: "olive", minHeight: "100vh", padding: "20px", borderRadius: "10px" }}
      >
        <h1 className="fs-2 fw-bold text-white">InstaNote</h1>
        
        <div 
          className="rounded-circle mt-5 mx-2 d-flex justify-content-center align-items-center"
          data-bs-toggle="modal" data-bs-target="#exampleModal"
          style={{
            backgroundColor: "black", 
            width: "50px", 
            height: "50px", 
            cursor: "pointer"
          }}
        >
          <FaPlus size={30} className="rounded-circle fs-5 text-white" />
        </div>
      </div>
    </>
  )
}
