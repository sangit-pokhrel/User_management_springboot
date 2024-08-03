import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import EditModal from './EditModal'; // Ensure you have an EditModal component
import DeleteModal from './DeleteModal';
import TeacherEdit from "./TeacherEdit.jsx";
import TeacherDelete from "./TeacherDelete.jsx"; // Ensure you have a DeleteModal component
import { useAuth } from '../context/AuthContext';

// Adjust the import path as needed

const TeacherList = () => {
    const { authToken } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        phoneNumber: '',
        address: '',
        picture: null,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [teachers, setTeachers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editTeacher, setEditTeacher] = useState(null);
    const [deleteTeacherId, setDeleteTeacherId] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/teachers'
                ,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`

                    }
                }

            );
            console.log(response.data.data)
            setTeachers(response.data.data);
        } catch (error) {
            alert('Error fetching teachers.');
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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //
    //     let pictureUrl = '';
    //     if (formData.picture) {
    //         const cloudinaryData = new FormData();
    //         cloudinaryData.append('file', formData.picture);
    //         cloudinaryData.append('upload_preset', 'user_uploads');
    //
    //         try {
    //             const res = await axios.post('https://api.cloudinary.com/v1_1/dgccsdcs5/image/upload', cloudinaryData);
    //             pictureUrl = res.data.secure_url;
    //         } catch (error) {
    //             alert('Error uploading image.');
    //             setLoading(false);
    //             return;
    //         }
    //     }
    //
    //     const formDataToSend = {
    //         name: formData.name,
    //         subject: formData.subject,
    //         email: formData.email,
    //         phoneNumber: formData.phoneNumber,
    //         address: formData.address,
    //         pictureUrl: pictureUrl
    //     };
    //
    //
    //     try {
    //         const response = await axios.post('http://localhost:8080/api/teachers', formDataToSend, {
    //             headers: {
    //                 Authorization: `Bearer ${authToken}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //
    //         if (response.data.success) {
    //             alert(response.data.message || 'Teacher added successfully!');
    //             setTeachers([...teachers, response.data.data]);
    //         } else {
    //             alert(response.data.message || 'Error adding teacher.');
    //         }
    //
    //         setFormData({
    //             name: '',
    //             subject: '',
    //             email: '',
    //             phoneNumber: '',
    //             address: '',
    //             picture: null,
    //         });
    //         setImagePreview(null);
    //     } catch (error) {
    //         alert('Error adding teacher.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };



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

        const formDataToSend = {
            name: formData.name,
            subject: formData.subject,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            pictureUrl: pictureUrl // Ensure this URL is properly set
        };

        try {
            const response = await axios.post('http://localhost:8080/api/teachers', formDataToSend, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json' // Use application/json
                }
            });

            if (response.data.success) {
                alert(response.data.message || 'Teacher added successfully!');
                setTeachers([...teachers, response.data.data]);
            } else {
                alert(response.data.message || 'Error adding teacher.');
            }

            setFormData({
                name: '',
                subject: '',
                email: '',
                phoneNumber: '',
                address: '',
                picture: null,
            });
            setImagePreview(null);
        } catch (error) {
            alert('Error adding teacher.');
        } finally {
            setLoading(false);
        }
    };




    // const handleEditSubmit = async (updatedTeacher) => {
    //     try {
    //         const pictureUrl = updatedTeacher.picture ? await handleImageUpload(updatedTeacher.picture) : updatedTeacher.pictureUrl;
    //         const response = await axios.put(`http://localhost:8080/api/teachers/${updatedTeacher.id}`, { ...updatedTeacher, pictureUrl },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${authToken}`,
    //                     "Content-Type" : "application/json"
    //                 }
    //             }
    //             );
    //
    //         if (response.data.success) {
    //             alert('Teacher updated successfully!');
    //             setEditTeacher(null);
    //             fetchTeachers();
    //         } else {
    //             alert(response.data.message || 'Error updating teacher.');
    //         }
    //     } catch (error) {
    //         alert('Error updating teacher.');
    //     }
    // };

    const handleEditSubmit = async (updatedTeacher) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/teachers/${updatedTeacher.id}`, updatedTeacher, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json"
                }
            });

            if (response.data.success) {
                alert('Teacher updated successfully!');
                setEditTeacher(null);
                fetchTeachers();
            } else {
                alert(response.data.message || 'Error updating teacher.');
            }
        } catch (error) {
            alert('Error updating teacher.');
        }
    };


    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/teachers/${deleteTeacherId}`,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,

                    }
                }
                );
            alert('Teacher deleted successfully!');
            setDeleteTeacherId(null);
            fetchTeachers();
        } catch (error) {
            alert('Error deleting teacher.');
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTeachers = Array.isArray(teachers) ? teachers.filter(teacher =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <>
           
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Teacher List</h1>
                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
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
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
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
                        {loading ? 'Adding...' : 'Add Teacher'}
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
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Subject</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Phone Number</th>
                        <th className="border border-gray-300 p-2">Address</th>
                        <th className="border border-gray-300 p-2">Picture</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredTeachers.map((teacher) => (
                        <tr key={teacher.id}>
                            <td className="border border-gray-300 p-2">{teacher.name}</td>
                            <td className="border border-gray-300 p-2">{teacher.subject}</td>
                            <td className="border border-gray-300 p-2">{teacher.email}</td>
                            <td className="border border-gray-300 p-2">{teacher.phoneNumber}</td>
                            <td className="border border-gray-300 p-2">{teacher.address}</td>
                            <td className="border border-gray-300 p-2">
                                {teacher.pictureUrl && (
                                    <img src={teacher.pictureUrl} alt={teacher.name} className="h-24 w-24 object-cover"/>
                                )}
                            </td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => setEditTeacher(teacher)}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => setDeleteTeacherId(teacher.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {editTeacher && (
                    <TeacherEdit
                        teacher={editTeacher}
                        onClose={() => setEditTeacher(null)}
                        onSave={handleEditSubmit}
                    />
                )}
                {deleteTeacherId && (
                    <TeacherDelete
                        onClose={() => setDeleteTeacherId(null)}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </>
    );
};

export default TeacherList;
