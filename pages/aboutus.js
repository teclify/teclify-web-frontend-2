import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import AboutUsDetails from '../components/aboutus/AboutUsDetails';
import FactsAndFigures from '../components/aboutus/FactsAndFigures';
import ValuesSection from '../components/aboutus/ValuesSection';
import ManagementSection from '../components/aboutus/ManagementSection';

export default function AboutUsPage({ navbar, footer, title, description, image, highlightDescription, highlights, facts, values, management }) {
  return (
    <>
      <Navbar navbar={navbar} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <Title title={title} description={description} image={image} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
      <AboutUsDetails highlightDescription={highlightDescription} highlights={highlights} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
      <FactsAndFigures facts={facts} /> 
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
      <ManagementSection title="Geschäftsführung" management={management} />
      </motion.div>

      <ValuesSection values={values} />
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  // AboutUs-Daten laden
  const aboutUsFilePath = path.join(process.cwd(), 'content', 'aboutus', 'aboutus.md');
  const aboutUsFileContent = fs.readFileSync(aboutUsFilePath, 'utf8');
  const { data: aboutUsData } = matter(aboutUsFileContent);

  // Navbar-Daten laden
  const navbarFilePath = path.join(process.cwd(), 'content', 'navbar.md');
  const navbarFileContent = fs.readFileSync(navbarFilePath, 'utf8');
  const { data: navbarData } = matter(navbarFileContent);

  // Footer-Daten laden
  const footerFilePath = path.join(process.cwd(), 'content', 'footer.md');
  const footerFileContent = fs.readFileSync(footerFilePath, 'utf8');
  const { data: footerData } = matter(footerFileContent);



  return {
    props: {
      navbar: navbarData,
      footer: footerData,
      title: aboutUsData.title,
      description: aboutUsData.description,
      image: aboutUsData.image,
      highlightDescription: aboutUsData['highlight-description'],
      highlights: aboutUsData.highlights,
      facts: aboutUsData.facts,
      values: aboutUsData.values,
      management: aboutUsData.management,
    },
  };
}
