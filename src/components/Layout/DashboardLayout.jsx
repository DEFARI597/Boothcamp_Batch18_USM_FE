import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({ children }) {
    return (
        <div style={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-base)' }}>
            <Sidebar />
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
                    {children}
                </div>
            </main>
        </div>
    );
}
