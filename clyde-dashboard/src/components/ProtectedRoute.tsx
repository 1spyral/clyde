import { Navigate, Outlet } from "react-router-dom"

type ProtectedRouteProps = {
    isAuthenticated: boolean
}

function ProtectedRoute({ isAuthenticated }: ProtectedRouteProps) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return <Outlet />
}

export default ProtectedRoute
