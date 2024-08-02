import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditModal = ({ user, onClose, onSave }) => {
  const [editData, setEditData] = useState({ ...user });
  const [imagePreview, setImagePreview] = useState(user.pictureUrl || '');
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setEditData({ ...user });
    setImagePreview(user.pictureUrl || '');
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      if (files[0]) {
        setEditData({ ...editData, picture: files[0] });
        setImagePreview(URL.createObjectURL(files[0]));
      }
    } else {
      setEditData({ ...editData, [name]: value });
      setIsDirty(true);
    }
  };

  const handleImageUpload = async () => {
    if (editData.picture) {
      const cloudinaryData = new FormData();
      cloudinaryData.append('file', editData.picture);
      cloudinaryData.append('upload_preset', 'user_uploads');

      try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dgccsdcs5/image/upload', cloudinaryData);
        return response.data.secure_url;
      } catch (error) {
        console.error('Error uploading image:', error);
        return null;
      }
    }
    return editData.pictureUrl;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (isDirty) {
      try {
        const pictureUrl = await handleImageUpload();
        const formData = new FormData();
        formData.append('user', JSON.stringify({ ...editData, pictureUrl }));
        if (editData.picture) {
          formData.append('picture', editData.picture);
        }

        const token = localStorage.getItem('token'); // Replace 'token' with the actual key used for storing the token

        const response = await axios.put(`http://localhost:8080/api/users/${user.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
        });

        console.log('Data saved:', response.data);
        setIsDirty(false);
        onClose();
      } catch (error) {
        console.error('Error saving data:', error);
      }
    } else {
      onClose();
    }
  };


  const handleClose = () => {
    if (isDirty) {
      if (window.confirm('You have unsaved changes. Are you sure you want to discard them?')) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg w-full max-w-2xl md:max-w-3xl lg:max-w-4xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Edit User</h2>
          <form onSubmit={handleSave}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullname" className="block text-gray-700">Full Name</label>
                <input
                    id="fullname"
                    type="text"
                    name="fullname"
                    value={editData.fullname}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
              </div>
              <div>
                <label htmlFor="phonenumber" className="block text-gray-700">Phone Number</label>
                <input
                    id="phonenumber"
                    type="text"
                    name="phonenumber"
                    value={editData.phonenumber}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
              </div>
              <div>
                <label htmlFor="permanentAddress" className="block text-gray-700">Permanent Address</label>
                <input
                    id="permanentAddress"
                    type="text"
                    name="permanentAddress"
                    value={editData.permanentAddress}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
              </div>
              <div>
                <label htmlFor="temporaryAddress" className="block text-gray-700">Temporary Address</label>
                <input
                    id="temporaryAddress"
                    type="text"
                    name="temporaryAddress"
                    value={editData.temporaryAddress}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
              </div>
              <div>
                <label htmlFor="parentsNumber" className="block text-gray-700">Parents' Phone Number</label>
                <input
                    id="parentsNumber"
                    type="text"
                    name="parentsNumber"
                    value={editData.parentsNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                />
              </div>
              <div>
                <label htmlFor="picture" className="block text-gray-700">Picture</label>
                <input
                    id="picture"
                    type="file"
                    name="picture"
                    onChange={handleChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="mt-2 h-24 w-24 object-cover" />
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
              <button type="button" onClick={handleClose} className="bg-gray-500 text-white py-2 px-4 rounded ml-2">Cancel</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default EditModal;
