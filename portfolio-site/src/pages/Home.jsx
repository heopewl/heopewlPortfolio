import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [text, setText] = useState('');
    const fullText = "I am Jun Xian";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div style={styles.blob}></div>

            <section className="section hero" style={styles.hero}>
                <div className="animate-fade-in">
                    <p style={styles.greeting}>Hello, World!</p>
                    <h1 className="typing-cursor" style={styles.title}>{text}</h1>
                    <p style={styles.subtitle}>Aspiring Applied AI and Analytics Student</p>

                    <div style={styles.cta}>
                        <Link to="/projects" className="btn">View My Work</Link>
                    </div>
                </div>
            </section>

            <section className="section about animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="glass-card" style={styles.aboutCard}>
                    <h2>About Me</h2>
                    <p>
                        I am a passionate student exploring the world of <span style={styles.highlight}>Artificial Intelligence</span> and <span style={styles.highlight}>Data Analytics</span>.
                        My goal is to leverage data to solve real-world problems and create meaningful impact.
                        I am constantly learning and building new projects to hone my skills.
                    </p>
                </div>
            </section>
        </div>
    );
};

const styles = {
    hero: {
        textAlign: 'center',
        padding: '12rem 0 6rem',
        position: 'relative',
        zIndex: 1,
    },
    blob: {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none',
    },
    greeting: {
        color: 'var(--accent-color)',
        fontWeight: '600',
        marginBottom: '1rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
    },
    title: {
        marginBottom: '1.5rem',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginTop: '1rem',
        marginBottom: '3rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cta: {
        marginTop: '2rem',
    },
    aboutCard: {
        padding: '4rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
    },
    highlight: {
        color: 'var(--accent-color)',
        fontWeight: '600',
    }
};

export default Home;
