import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <p style={styles.copyright}>&copy; {new Date().getFullYear()} Jun Xian. All rights reserved.</p>
                <div style={styles.links}>
                    <a
                        href="mailto:your.email@example.com"
                        style={styles.iconLink}
                        aria-label="Email"
                    >
                        <FaEnvelope size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.iconLink}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '3rem 0',
        marginTop: 'auto',
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(10px)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    copyright: {
        margin: 0,
        fontSize: '0.9rem',
        color: 'var(--secondary-text)',
    },
    links: {
        display: 'flex',
        gap: '1.5rem',
    },
    iconLink: {
        color: 'var(--text-color)',
        transition: 'color 0.2s, transform 0.2s',
        display: 'flex',
        alignItems: 'center',
    }
};

export default Footer;
