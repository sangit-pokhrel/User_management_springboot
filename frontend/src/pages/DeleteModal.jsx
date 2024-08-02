import React from 'react';

const DeleteModal = ({ onClose, onConfirm, hasUnsavedChanges }) => {
  const handleClose = () => {
    if (hasUnsavedChanges) {
      if (window.confirm('You have unsaved changes. Are you sure you want to discard them?')) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-8 rounded">
          <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
          <p>Are you sure you want to delete this user?</p>
          <div className="mt-4">
            <button onClick={onConfirm} className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
            <button onClick={handleClose} className="bg-gray-500 text-white py-2 px-4 rounded ml-2">Cancel</button>
          </div>
        </div>
      </div>
  );
};

export default DeleteModal;
