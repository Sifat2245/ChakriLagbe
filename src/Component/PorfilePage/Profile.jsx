import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { motion, AnimatePresence } from 'framer-motion';
import SecondNav from '../Navbar/SecondNav';


const Profile = () => {
    const { user, setUser, updateUser } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(user?.photoURL || '');

    const handleUpdate = async () => {
        if (!user) return;

        const updateData = {};

        if (name.trim() && name !== user.displayName) {
            updateData.displayName = name;
        }

        if (photo.trim() && photo !== user.photoURL) {
            updateData.photoURL = photo;
        }

        if (Object.keys(updateData).length === 0) {
            alert("No changes to update.");
            return;
        }

        try {
            await updateUser(updateData);

            setUser({ ...user, ...updateData });

            alert('Profile updated successfully!');
            setIsModalOpen(false);
        } catch (error) {
            console.error('Profile update error:', error);
            alert('Failed to update profile: ' + error.message);
        }
    };


    return (
        <div>
            <header>
               <SecondNav></SecondNav>
            </header>

            <main className="my-16 px-4 sm:px-6 lg:px-0 w-full max-w-6xl mx-auto min-h-96">
                <h1 className="text-2xl sm:text-3xl font-bold mb-10 text-center">My Profile</h1>

                {user ? (
                    <>
                        <div className="bg-white shadow-xl rounded-3xl py-10 sm:py-16 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto flex flex-col items-center text-center gap-6 border border-gray-200 hover:shadow-2xl transition-shadow px-4 sm:px-8">
                            <img
                                src={user.photoURL || 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-4 border-[#1d225f] mb-3"
                            />
                            <div className="space-y-2">
                                <p className="text-base sm:text-xl font-semibold text-gray-800">
                                    <span className="text-gray-500 font-medium">Name:</span> {user.displayName || 'N/A'}
                                </p>
                                <p className="text-base sm:text-xl font-semibold text-gray-800">
                                    <span className="text-gray-500 font-medium">Email:</span> {user.email}
                                </p>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-4 bg-[#1d225f] text-white px-6 py-2 rounded-full hover:bg-[#151942]"
                            >
                                Update Profile
                            </button>
                        </div>

                        {/* Modal */}
                        <AnimatePresence>
                            {isModalOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="fixed inset-0 bg-[#00000034] bg-opacity-50 flex items-center justify-center z-50 px-4"
                                >
                                    <motion.div
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -100, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="bg-white rounded-xl w-full max-w-md p-6 sm:p-8 shadow-lg space-y-4"
                                    >
                                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Update Profile</h2>

                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full input input-bordered py-3"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Photo URL"
                                                value={photo}
                                                onChange={(e) => setPhoto(e.target.value)}
                                                className="w-full input input-bordered py-3"
                                            />
                                        </div>

                                        <div className="flex justify-end gap-4 mt-6">
                                            <button
                                                onClick={() => setIsModalOpen(false)}
                                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleUpdate}
                                                className="px-4 py-2 rounded bg-[#1d225f] text-white hover:bg-[#151942]"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </>
                ) : (
                    <p className="text-center">Loading user info...</p>
                )}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>

    );
};

export default Profile;
