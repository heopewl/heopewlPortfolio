import React from 'react';

const skillsData = [
    {
        category: 'Data Science & AI',
        items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
        category: 'Data Visualization',
        items: ['PowerBI', 'Tableau', 'Matplotlib', 'Seaborn']
    },
    {
        category: 'Web Development',
        items: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
    },
    {
        category: 'Tools & Databases',
        items: ['SQL', 'Excel', 'Jupyter Notebooks', 'VS Code']
    }
];

const Skills = () => {
    return (
        <div className="container section">
            <div className="animate-fade-in">
                <h1>Skills & Tech</h1>
                <p>Technologies and tools I work with.</p>

                <div style={styles.grid}>
                    {skillsData.map((skillGroup, index) => (
                        <div
                            key={skillGroup.category}
                            className="glass-card"
                            style={{ ...styles.card, animationDelay: `${index * 0.1}s` }}
                        >
                            <h3 style={styles.categoryTitle}>{skillGroup.category}</h3>
                            <div style={styles.list}>
                                {skillGroup.items.map((item) => (
                                    <span key={item} style={styles.item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginTop: '3rem',
    },
    card: {
        padding: '2.5rem',
        animation: 'fadeIn 0.8s ease-out forwards',
        opacity: 0,
        transition: 'transform 0.3s ease',
    },
    categoryTitle: {
        marginBottom: '1.5rem',
        color: 'var(--accent-color)',
        fontSize: '1.2rem',
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
    },
    item: {
        backgroundColor: 'rgba(255,255,255,0.05)',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.1)',
        fontSize: '0.9rem',
        color: 'var(--text-color)',
        transition: 'background-color 0.2s',
    }
};

export default Skills;
