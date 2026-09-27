import React, { useRef } from 'react';

export default function NameInput({ value, onChange, style, ...props }) {
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={onChange}
                style={{ ...style, flex: 1, marginBottom: 0 }}
                {...props}
            />
            <button
                type="button"
                onClick={handleFocus}
                style={{
                    backgroundColor: 'var(--accent-primary, #007bff)',
                    color: 'white',
                    padding: '12px 16px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                }}
            >
                Focus Name Input
            </button>
        </div>
    );
}
