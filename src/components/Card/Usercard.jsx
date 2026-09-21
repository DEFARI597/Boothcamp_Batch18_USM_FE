import { useState, useEffect } from "react";
import { getUsers } from "../../services/userService";
import { useNavigate } from "react-router-dom";

export default function Usercard() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                <div style={{ 
                    width: '40px', height: '40px', 
                    border: '3px solid var(--border-color)', 
                    borderTopColor: 'var(--accent-primary)', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite' 
                }} />
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }}>All Users ({users.length})</h3>
                <button style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary-hover)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                onClick={() => navigate('/user-add')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Add User
                </button>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '24px' 
            }}>
                {users.map((item, index) => {
                    const isActive = item.status === 'active';
                    
                    return (
                        <div key={item.id || index} style={{ 
                            backgroundColor: 'var(--bg-surface)',
                            border: 'var(--glass-border)',
                            borderRadius: '12px',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            boxShadow: 'var(--shadow-md)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => { 
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            e.currentTarget.style.borderColor = isActive ? 'var(--status-active-border)' : 'var(--status-inactive-border)';
                        }}
                        onMouseOut={(e) => { 
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ 
                                        width: '48px', height: '48px', 
                                        borderRadius: '50%', 
                                        backgroundColor: 'var(--bg-base)', 
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '18px', fontWeight: '600', color: 'var(--accent-primary)',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {item.name ? item.name.substring(0, 2).toUpperCase() : 'U'}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: 0, textTransform: 'capitalize' }}>{item.name}</h4>
                                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, marginTop: '2px' }}>{item.role || 'User'}</p>
                                    </div>
                                </div>
                                
                                <div style={{
                                    padding: '4px 8px',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    fontWeight: '500',
                                    backgroundColor: isActive ? 'var(--status-active-bg)' : 'var(--status-inactive-bg)',
                                    color: isActive ? 'var(--status-active-text)' : 'var(--status-inactive-text)',
                                    border: `1px solid ${isActive ? 'var(--status-active-border)' : 'var(--status-inactive-border)'}`
                                }}>
                                    {isActive ? 'Active' : 'Inactive'}
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    {item.email}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    {item.phone}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}