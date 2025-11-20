import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
    return (
        <div className="container section">
            <div className="animate-fade-in">
                <h1>My Projects</h1>
                <p>Here are some of the projects I've worked on.</p>

                <div style={styles.grid}>
                    {projectsData.map((project, index) => (
                        <Link
                            to={`/projects/${project.id}`}
                            key={project.id}
                            style={{ textDecoration: 'none' }}
                        >
                            <div
                                className="glass-card"
                                style={{ ...styles.card, animationDelay: `${index * 0.1}s` }}
                            >
                                <div style={{ ...styles.placeholderImage, background: project.gradient }}>
                                    <span style={styles.placeholderText}>{project.title}</span>
                                </div>
                                <div style={styles.content}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div style={styles.tags}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        marginTop: '3rem',
    },
    card: {
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        animation: 'fadeIn 0.8s ease-out forwards',
        opacity: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    placeholderImage: {
        height: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    placeholderText: {
        color: 'white',
        fontWeight: '700',
        fontSize: '1.5rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        zIndex: 1,
        textAlign: 'center',
        padding: '1rem',
    },
    content: {
        padding: '2rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    tags: {
        display: 'flex',
        gap: '0.6rem',
        marginTop: 'auto',
        paddingTop: '1.5rem',
        flexWrap: 'wrap',
    },
    tag: {
        fontSize: '0.75rem',
        padding: '0.3rem 0.8rem',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'var(--text-color)',
        fontWeight: '500',
    }
};

export default Projects;
