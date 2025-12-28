import { NavLink, Outlet } from "react-router-dom"

const navItems = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Workspace", to: "/workspace" },
]

function AuthenticatedLayout() {
    return (
        <section className="app-panel">
            <aside className="sidebar">
                <p className="eyebrow">Clyde</p>
                <h2>Your workspace</h2>
                <p className="muted">Switch between streams, dashboards, and insights.</p>
                <nav>
                    {navItems.map(item => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>
            <section className="content-shell">
                <header className="content-header">
                    <h1>App home</h1>
                    <p className="muted">Authenticated view with shared chrome.</p>
                </header>
                <div className="content-body">
                    <Outlet />
                </div>
            </section>
        </section>
    )
}

export default AuthenticatedLayout
