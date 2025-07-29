import React from "react";
import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Sidebar from "../components/sidebar";
import Resumen from "../components/resumen";
import ModalProducto from "../components/ModalProducto";
import { useQuiosco } from "../hooks/useQuiosco";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Layout() {
  const { modal, handleClickModal } = useQuiosco();
  console.log(modal);
  return (
    <>
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-auto bg-gray-50 p-10">
        <Outlet />
      </main>
      <Resumen />
    </div>
    {modal && (
      <Modal
      isOpen={modal}
      style={customStyles}
      >
        <ModalProducto />
      </Modal>
    )}
    <ToastContainer />
    </>
  );
}
