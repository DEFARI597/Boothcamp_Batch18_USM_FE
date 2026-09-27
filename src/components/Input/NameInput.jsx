import React, { useRef, useEffect } from 'react';

export default function NameInput({ value, onChange, style, ...props }) {
    const inputRef = useRef(null);

    // Memberikan autofocus secara otomatis saat komponen pertama kali di-render
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

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
        </div>
    );
}
