import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./components/auth/AuthProvider";


export default function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}