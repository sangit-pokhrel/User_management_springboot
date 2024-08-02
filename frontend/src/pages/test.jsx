import React from "react";

const EditModal = ({ user, onClose, onSave }) => {
    const [editData, setEditData] = useState({ ...user });
    const [isDirty, setIsDirty] = useState(false);

    useEffect(() => {
        setEditData({ ...user });
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
        setIsDirty(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof onSave === 'function') {
            onSave(editData)
                .then(() => {
                    setIsDirty(false);
                    onClose();
                })
                .catch((error) => {
                    console.error('Error saving data:', error);
                    // Optionally show an error message here
                });
        } else {
            console.error('onSave prop is not a function');
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
                <form onSubmit={handleSubmit}>
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
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
                        <button type="button" onClick={handleClose}
                                className="bg-gray-500 text-white py-2 px-4 rounded ml-2">Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
