// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditModal from './EditModal';
import { useAuth } from '../context/AuthContext';
import DeleteModal from './DeleteModal';

const Dashboard = () => {
    const { authToken } = useAuth();
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phonenumber: '',
        permanentAddress: '',
        temporaryAddress: '',
        picture: null,
        parentsNumber: '',
        password: ''
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editUser, setEditUser] = useState(null);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users', {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUsers(response.data.data);
        } catch (error) {
            alert('Error fetching users.');
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'picture' && files[0]) {
            setFormData({ ...formData, picture: files[0] });
            setImagePreview(URL.createObjectURL(files[0]));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let pictureUrl = '';
        if (formData.picture) {
            const cloudinaryData = new FormData();
            cloudinaryData.append('file', formData.picture);
            cloudinaryData.append('upload_preset', 'user_uploads');

            try {
                const res = await axios.post('https://api.cloudinary.com/v1_1/dgccsdcs5/image/upload', cloudinaryData);
                pictureUrl = res.data.secure_url;
            } catch (error) {
                alert('Error uploading image.');
                setLoading(false);
                return;
            }
        }

        const formDataToSend = new FormData();
        formDataToSend.append('user', JSON.stringify({
            fullname: formData.fullname,
            email: formData.email,
            phonenumber: formData.phonenumber,
            permanentAddress: formData.permanentAddress,
            temporaryAddress: formData.temporaryAddress,
            parentsNumber: formData.parentsNumber,
            password: formData.password,
            pictureUrl: pictureUrl
        }));

        try {
            const response = await axios.post('http://localhost:8080/api/users', formDataToSend, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                alert(response.data.message || 'User added successfully!');
            } else {
                alert(response.data.message || 'Error adding user.');
            }

            setFormData({
                fullname: '',
                email: '',
                phonenumber: '',
                permanentAddress: '',
                temporaryAddress: '',
                picture: null,
                parentsNumber: '',
                password: ''
            });
            setImagePreview(null);
            fetchUsers();
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data.error || 'Error adding user.';
                if (errorMessage.includes('Duplicate entry')) {
                    alert('Email already exists.');
                } else {
                    alert(errorMessage);
                }
            } else {
                alert('Error adding user.');
            }
        } finally {
            setLoading(false);
        }
    };


    const handleEditSubmit = async (updatedUser) => {
        console.log('Updating user with ID:', updatedUser.id); // Debug log
        if (!updatedUser.id) {
            alert('User ID is missing.');
            return;
        }
        try {
            const pictureUrl = await handleImageUpload();
            const formData = new FormData();
            formData.append('user', JSON.stringify({ ...editData, pictureUrl }));
            if (editData.picture) {
                formData.append('picture', editData.picture);
            }
            await axios.put(`http://localhost:8080/api/users/${updatedUser.id}`, updatedUser, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'

                }
            });
            alert('User updated successfully!');
            setEditUser(null);
            fetchUsers();
        } catch (error) {
            alert('Error updating user.');
        }
    };


    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/users/${deleteUserId}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
            });
            alert('User deleted successfully!');
            setDeleteUserId(null);
            fetchUsers();
        } catch (error) {
            alert('Error deleting user.');
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = Array.isArray(users) ? users.filter(user =>
        user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];


    return (
        <>
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Add Student</h1>
                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone Number</label>
                            <input
                                type="number"
                                name="phonenumber"
                                value={formData.phonenumber}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Permanent Address</label>
                            <input
                                type="text"
                                name="permanentAddress"
                                value={formData.permanentAddress}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Temporary Address</label>
                            <input
                                type="text"
                                name="temporaryAddress"
                                value={formData.temporaryAddress}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Parents' Phone Number</label>
                            <input
                                type="number"
                                name="parentsNumber"
                                value={formData.parentsNumber}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
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
                            {imagePreview && (
                                <img src={imagePreview} alt="Preview" className="mt-2 h-24 w-24 object-cover"/>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        disabled={loading}
                    >
                        {loading ? 'Adding...' : 'Add User'}
                    </button>
                </form>
                {loading && <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <p>Loading...</p>
                    </div>
                </div>}
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="mb-4 p-2 border border-gray-300 rounded w-full"
                />
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Full Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Phone Number</th>
                        <th className="border border-gray-300 p-2">Permanent Address</th>
                        <th className="border border-gray-300 p-2">Temporary Address</th>
                        <th className="border border-gray-300 p-2">Parents' Phone Number</th>
                        <th className="border border-gray-300 p-2">Picture</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td className="border border-gray-300 p-2">{user.fullname}</td>
                            <td className="border border-gray-300 p-2">{user.email}</td>
                            <td className="border border-gray-300 p-2">{user.phonenumber}</td>
                            <td className="border border-gray-300 p-2">{user.permanentAddress}</td>
                            <td className="border border-gray-300 p-2">{user.temporaryAddress}</td>
                            <td className="border border-gray-300 p-2">{user.parentsNumber}</td>
                            <td className="border border-gray-300 p-2">
                                {user.pictureUrl &&
                                    <img src={user.pictureUrl} alt="User" className="w-16 h-16 object-cover"/>}
                            </td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => setEditUser(user)}
                                    className="px-4 py-2 bg-yellow-500 text-white rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => setDeleteUserId(user.id)}
                                    className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                // Ensure you pass user correctly to EditModal
                {editUser && (
                    <EditModal
                        onSave={handleEditSubmit}  // Use handleEditSubmit for saving user data
                        user={editUser}
                        onClose={() => setEditUser(null)}
                    />
                )}

                {deleteUserId && (
                    <DeleteModal

                        onConfirm={handleDelete}
                        onCancel={() => setDeleteUserId(null)}
                    />
                )}
            </div>
        </>
    );
};

export default Dashboard;
