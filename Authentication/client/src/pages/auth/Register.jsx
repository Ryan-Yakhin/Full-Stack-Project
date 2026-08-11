import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

import { registerUser } from "../../api/authApi";

export default function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            setError("");
            setLoading(true);

            await registerUser(form);

            navigate("/login");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Register gagal"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="w-96 p-6 border rounded-lg"
            >

                <h1 className="text-2xl font-bold mb-5">
                    Register
                </h1>

                {error && (
                    <p className="text-red-500 mb-3">
                        {error}
                    </p>
                )}

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="border p-2 w-full mb-3"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white p-2 w-full rounded"
                >
                    {loading ? "Registering..." : "Register"}
                </button>

            </form>

            <p className="mt-4">

                Sudah punya akun?{" "}

                <Link
                    to="/login"
                    className="text-blue-500"
                >
                    Login
                </Link>

            </p>

        </div>
    );
}