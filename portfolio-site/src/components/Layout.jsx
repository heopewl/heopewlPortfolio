import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div style={styles.layout}>
            <Navbar />
            <main style={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        flex: 1,
    }
};

export default Layout;
