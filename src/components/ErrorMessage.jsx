import React, { useEffect } from "react";
import PropTypes from "prop-types";

function ErrorMessage({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 border border-dashed border-red-600 bg-black px-4 py-2 text-white  shadow">
      {message}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorMessage;
