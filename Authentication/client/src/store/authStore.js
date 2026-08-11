import { create } from "zustand";
import { getProfile } from "../api/authApi";

const useAuthStore = create((set) => ({
    user: null,
    token: localStorage.getItem("token"),
    isAuthenticated: !!localStorage.getItem("token"),
    loading: true,

    login: (user, token) => {
        localStorage.setItem("token", token);

        set({
            user,
            token,
            isAuthenticated: true,
            loading: false,
        });
    },

    restoreUser: async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            set({
                loading: false,
                isAuthenticated: false,
            });

            return;
        }

        try {

            const data = await getProfile();
            const user = data.user;

            set({
                user,
                token,
                isAuthenticated: true,
                loading: false,
            });

        } catch (error) {

            localStorage.removeItem("token");

            set({
                user: null,
                token: null,
                isAuthenticated: false,
                loading: false,
            });
        }
    },

    logout: () => {

        localStorage.removeItem("token");

        set({
            user: null,
            token: null,
            isAuthenticated: false,
            loading: false,
        });

    },
}));

export default useAuthStore;