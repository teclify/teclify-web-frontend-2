import { useState } from 'react';
import styles from '../../styles/services/Tools.module.css';

const Tools = ({ category, tools }) => {
    const [activeCategory, setActiveCategory] = useState("all");


    const filteredTools = activeCategory === "all" 
        ? tools 
        : tools.filter(tool => tool.class.includes(activeCategory));

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Technologien</h2>

            
            <div className={styles.categoryButtons}>
                {category.map((cat, index) => (
                    <button
                        key={index}
                        className={`${styles.button} ${activeCategory === cat.class ? styles.active : ""}`}
                        onClick={() => setActiveCategory(cat.class)}
                    >
                        {cat.name}
                    </button>
                ))}
                
              
            </div>

        
            <div className={styles.content}>
                {filteredTools.map((tool, index) => (
                    <div key={index} className={styles.tool}>
                        <img src={tool.image} alt={tool.name} className={styles.image} />
                        <p className={styles.text}>{tool.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tools;
