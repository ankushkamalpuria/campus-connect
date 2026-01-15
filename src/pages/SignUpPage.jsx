import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}>
            <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </div>
    );
};

export default SignUpPage;
