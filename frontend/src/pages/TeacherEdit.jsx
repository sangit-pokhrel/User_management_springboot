import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditModal = ({ teacher, onClose, onSave }) => {
    const [editData, setEditData] = useState({
        name: teacher.name,
        subject: teacher.subject,
        email: teacher.email,
        phoneNumber: teacher.phoneNumber,
        address: teacher.address,
        picture: null,
        pictureUrl: teacher.pictureUrl
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'picture' && files[0]) {
            setEditData({ ...editData, picture: files[0], pictureUrl: URL.createObjectURL(files[0]) });
        } else {
            setEditData({ ...editData, [name]: value });
        }
    };

    const handleImageUpload = async (file) => {
        const cloudinaryData = new FormData();
        cloudinaryData.append('file', file);
        cloudinaryData.append('upload_preset', 'user_uploads');

        try {
            const res = await axios.post('https://api.cloudinary.com/v1_1/dgccsdcs5/image/upload', cloudinaryData);
            return res.data.secure_url;
        } catch (error) {
            toast.error('Error uploading image.');
            throw error;
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let pictureUrl = editData.pictureUrl; // Default to existing URL
            if (editData.picture) {
                pictureUrl = await handleImageUpload(editData.picture);
            }

            onSave({ ...editData, id: teacher.id, pictureUrl });
        } catch (error) {
            toast.error('Error saving teacher data.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Edit Teacher</h2>
                <form onSubmit={handleSave}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={editData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={editData.subject}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={editData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={editData.phoneNumber}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={editData.address}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Picture</label>
                            <input
                                type="file"
                                name="picture"
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                            {editData.pictureUrl && (
                                <img src={editData.pictureUrl} alt="Preview" className="mt-2 h-24 w-24 object-cover"/>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-white rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
