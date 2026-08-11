import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

import { loginUser } from "../../api/authApi";
import useAuthStore from "../../store/authStore";

export default function Login() {

    const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            setError("");

            const data = await loginUser({
                email,
                password,
            });

            login(data.user, data.token);

            navigate("/profile");

        } catch (error) {

            console.log("LOGIN ERROR:", error);
            console.log("SERVER RESPONSE:", error.response?.data);

            setError(
                error.response?.data?.message ||
                error.message ||
                "Login gagal"
            );

        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="w-96 p-6 border rounded-lg"
            >

                <h1 className="text-2xl font-bold mb-5">
                    Login
                </h1>

                {error && (
                    <p className="text-red-500 mb-3">
                        {error}
                    </p>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    className="border p-2 w-full mb-3"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    className="border p-2 w-full mb-3"
                />

                <button
                    type="submit"
                    className="bg-black text-white p-2 w-full rounded"
                >
                    Login
                </button>

                <p className="mt-4">

                    Belum punya akun?{" "}

                    <Link
                        to="/register"
                        className="text-blue-500"
                    >
                        Register
                    </Link>

                </p>

            </form>

        </div>
    );
}