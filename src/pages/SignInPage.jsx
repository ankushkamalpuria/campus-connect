import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 80px)', paddingTop: '80px' }}>
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
    );
};

export default SignInPage;
