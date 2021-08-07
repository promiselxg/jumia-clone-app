import React from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Notification = ({ productName }) => {
  useEffect(() => {
    toast.success(`${productName} added to Cart`, {
      duration: 5000,
      className: "toast__notification",
    });
  }, [productName]);

  return (
    <>
      <div className="toast__notification">
        <Toaster />
      </div>
    </>
  );
};

export default Notification;
