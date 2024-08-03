import React from 'react';

const DeleteModal = ({ onClose, onDelete }) => {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg w-full max-w-sm">
                <h2 className="text-xl font-bold mb-4">Delete Teacher</h2>
                <p className="mb-4">Are you sure you want to delete this teacher?</p>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-white rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onDelete}
                        className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
