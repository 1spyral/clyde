function LoginView() {
    return (
        <section className="auth-panel">
            <p className="eyebrow">Signin required</p>
            <h1>Welcome back</h1>
            <p className="page-subtitle">
                Connect your identity provider to unlock the dashboard and workspace.
            </p>
            <div className="auth-actions">
                <button type="button" className="btn primary">
                    Continue with Google
                </button>
                <button type="button" className="btn ghost">
                    Continue with email
                </button>
            </div>
            <p className="muted">
                This is a placeholder login surface; integrate your real auth flow next.
            </p>
        </section>
    )
}

export default LoginView
