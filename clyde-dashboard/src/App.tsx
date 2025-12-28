import { Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import AuthenticatedLayout from "./views/AuthenticatedLayout"
import DashboardView from "./views/DashboardView"
import LoginView from "./views/LoginView"
import WorkspaceView from "./views/WorkspaceView"
import ProtectedRoute from "./components/ProtectedRoute"

const isAuthenticated = false

function App() {
    const defaultPath = isAuthenticated ? "/dashboard" : "/login"

    return (
        <main className="app-shell">
            <Routes>
                <Route index element={<Navigate to={defaultPath} replace />} />
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/dashboard" replace />
                        ) : (
                            <LoginView />
                        )
                    }
                />
                <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                    <Route element={<AuthenticatedLayout />}>
                        <Route path="/dashboard" element={<DashboardView />} />
                        <Route path="/workspace" element={<WorkspaceView />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to={defaultPath} replace />} />
            </Routes>
        </main>
    )
}

export default App
