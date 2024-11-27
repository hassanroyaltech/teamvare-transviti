import { ReactNode } from 'react';
import Header from './header'; // Assuming you have a Header component
import { Container } from '@mui/material';
interface LayoutProps {
    children?: ReactNode;
}
function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            <Header />
            <main className="layout-content">
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    );
}

export default Layout;