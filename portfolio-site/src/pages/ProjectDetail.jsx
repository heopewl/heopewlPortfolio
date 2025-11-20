import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container section" style={{ textAlign: 'center' }}>
                <h1>Project Not Found</h1>
                <Link to="/projects" className="btn">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="container section">
            <Link to="/projects" style={styles.backLink}>
                <FaArrowLeft /> Back to Projects
            </Link>

            <div className="animate-fade-in">
                <div style={{ ...styles.header, background: project.gradient }}>
                    <h1 style={styles.title}>{project.title}</h1>
                </div>

                <div className="glass-card" style={styles.content}>
                    <div style={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} style={styles.tag}>{tag}</span>
                        ))}
                    </div>

                    <div style={styles.description}>
                        <p style={styles.intro}>{project.description}</p>
                        <div style={styles.fullText}>
                            {project.fullDescription.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>

                    {/* Image Gallery Section */}
                    <div style={styles.gallerySection}>
                        <h3 style={styles.galleryTitle}>Project Gallery</h3>
                        <div style={styles.galleryGrid}>
                            {project.images && project.images.map((img, index) => (
                                <div key={index} style={styles.imageWrapper}>
                                    <img src={img} alt={`${project.title} screenshot ${index + 1}`} style={styles.image} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    backLink: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '2rem',
        color: 'var(--accent-color)',
        fontWeight: '600',
    },
    header: {
        padding: '4rem 2rem',
        borderRadius: 'var(--radius)',
        marginBottom: '2rem',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    },
    title: {
        color: 'white',
        fontSize: '3rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        margin: 0,
        background: 'none',
        WebkitTextFillColor: 'white',
    },
    content: {
        padding: '3rem',
    },
    tags: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
    },
    tag: {
        padding: '0.5rem 1rem',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: '50px',
        border: '1px solid rgba(255,255,255,0.2)',
        fontSize: '0.9rem',
    },
    intro: {
        fontSize: '1.2rem',
        color: 'var(--text-color)',
        marginBottom: '2rem',
    },
    fullText: {
        color: 'var(--secondary-text)',
        whiteSpace: 'pre-line',
        marginBottom: '3rem',
    },
    gallerySection: {
        marginTop: '3rem',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '2rem',
    },
    galleryTitle: {
        marginBottom: '1.5rem',
        color: 'var(--accent-color)',
    },
    galleryGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
    },
    imageWrapper: {
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
        transition: 'transform 0.3s',
    }
};

export default ProjectDetail;
