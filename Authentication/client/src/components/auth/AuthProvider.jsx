import { useEffect } from "react";
import useAuthStore from "../../store/authStore";

export default function AuthProvider({ children }) {

    const restoreUser = useAuthStore(
        (state) => state.restoreUser
    );

    const loading = useAuthStore(
        (state) => state.loading
    );

    useEffect(() => {

        restoreUser();

    }, [restoreUser]);

    if (loading) {

        return (
            <div className="min-h-screen flex items-center justify-center">

                <h1>
                    Loading...
                </h1>

            </div>
        );

    }

    return children;
}