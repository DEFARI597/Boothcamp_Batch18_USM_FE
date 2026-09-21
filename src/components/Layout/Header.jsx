export default function Header() {
    return (
        <header style={{
            height: '76px',
            backgroundColor: 'var(--bg-panel)',
            backdropFilter: 'blur(12px)',
            borderBottom: 'var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 32px',
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <div>
                <h2 style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px' }}>Users</h2>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '2px' }}>Manage your team members and their account permissions here.</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ position: 'relative' }}>
                    <svg style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" placeholder="Search users..." style={{
                        backgroundColor: 'var(--bg-base)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        padding: '10px 12px 10px 36px',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none',
                        width: '240px',
                        transition: 'border-color 0.2s'
                    }} 
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    />
                </div>
                
                <button style={{
                    width: '40px', height: '40px', borderRadius: '50%', 
                    backgroundColor: 'var(--bg-base)', border: '1px solid var(--border-color)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)',
                    transition: 'all 0.2s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--text-secondary)' }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)' }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </button>
            </div>
        </header>
    );
}
