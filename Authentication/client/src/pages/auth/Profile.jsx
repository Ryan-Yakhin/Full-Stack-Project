import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/authApi";
import useAuthStore from "../../store/authStore";

export default function Profile() {
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await getProfile();
                setProfile(data.user);
            } catch (err) {
                logout();
                navigate("/login");
            }
        };

        loadProfile();
    }, [logout, navigate]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-3xl p-8 bg-white border rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-black text-white px-4 py-2 rounded"
                    >
                        Logout
                    </button>
                </div>
                <div className="space-y-3 text-gray-700">
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>ID:</strong> {profile._id || profile.id}</p>
                </div>
            </div>
        </div>
    );
}
