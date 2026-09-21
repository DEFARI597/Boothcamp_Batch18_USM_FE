export default function Sidebar() {
    return (
        <aside style={{
            width: '260px',
            backgroundColor: 'var(--bg-surface)',
            borderRight: 'var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            position: 'sticky',
            top: 0
        }}>
            <div style={{ padding: '24px', borderBottom: 'var(--glass-border)' }}>
                <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>UMS</span> Pro
                </h1>
            </div>
            
            <nav style={{ padding: '24px 16px', flex: 1 }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>
                        <a href="#" style={{
                            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                            borderRadius: '8px', color: 'var(--text-secondary)', fontWeight: '500',
                            transition: 'all 0.2s',
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" style={{
                            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                            borderRadius: '8px', backgroundColor: 'var(--accent-primary)', color: 'white', fontWeight: '500',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            User Management
                        </a>
                    </li>
                    <li>
                        <a href="#" style={{
                            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                            borderRadius: '8px', color: 'var(--text-secondary)', fontWeight: '500',
                            transition: 'all 0.2s',
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'; e.currentTarget.style.color = 'var(--text-primary)' }}
                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            Settings
                        </a>
                    </li>
                </ul>
            </nav>
            
            <div style={{ padding: '24px 16px', borderTop: 'var(--glass-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '600' }}>
                        AD
                    </div>
                    <div>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Admin User</p>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>admin@umspro.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
