import DashboardLayout from '../components/Layout/DashboardLayout';
import Userform from '../components/Form/Userform';

export default function AddUserPage() {
    return (
        <DashboardLayout>
            <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>Add New User</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Fill in the details below to create a new user account.
                </p>
            </div>
            
            <Userform />
        </DashboardLayout>
    );
}
