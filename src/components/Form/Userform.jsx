import { useState } from "react";

export default function Userform() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "User",
        status: "active"
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add user logic here
    }

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        backgroundColor: 'var(--bg-base)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        color: 'var(--text-primary)',
        fontSize: '14px',
        outline: 'none',
        boxSizing: 'border-box',
        transition: 'border-color 0.2s',
        marginBottom: '16px'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '500',
        color: 'var(--text-secondary)'
    };

    return (
        <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: 'var(--glass-border)',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: 'var(--shadow-md)',
            maxWidth: '600px',
            margin: '0'
        }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyle} htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="e.g. John Doe"
                        style={inputStyle}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <label style={labelStyle} htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="e.g. john@example.com"
                        style={inputStyle}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <label style={labelStyle} htmlFor="phone">Phone Number</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="e.g. +62 812 3456 7890"
                        style={inputStyle}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={labelStyle} htmlFor="role">Role</label>
                        <select
                            id="role"
                            name="role"
                            style={{ ...inputStyle, marginBottom: 0 }}
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    
                    <div style={{ flex: 1 }}>
                        <label style={labelStyle} htmlFor="status">Status</label>
                        <select
                            id="status"
                            name="status"
                            style={{ ...inputStyle, marginBottom: 0 }}
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                    <button 
                        type="button"
                        style={{
                            backgroundColor: 'transparent',
                            color: 'var(--text-primary)',
                            padding: '10px 16px',
                            border: '1px solid var(--border-color)',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-base)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        style={{
                            backgroundColor: 'var(--accent-primary)',
                            color: 'white',
                            padding: '10px 24px',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary-hover)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                    >
                        Save User
                    </button>
                </div>
            </form>
        </div>
    );
}