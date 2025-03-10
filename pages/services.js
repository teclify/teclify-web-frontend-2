import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/services/ServiceSection';
import Title from '../components/Title';

export default function ServicesPage({ navbar, footer, title, description, image, services }) {
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
        <ServicesSection services={services} />
      </motion.div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const servicesFilePath = path.join(process.cwd(), 'content', 'services', 'services.md');
  const servicesFileContent = fs.readFileSync(servicesFilePath, 'utf8');
  const { data: servicesData } = matter(servicesFileContent);

  const navbarFilePath = path.join(process.cwd(), 'content', 'navbar.md');
  const navbarFileContent = fs.readFileSync(navbarFilePath, 'utf8');
  const { data: navbarData } = matter(navbarFileContent);

  const footerFilePath = path.join(process.cwd(), 'content', 'footer.md');
  const footerFileContent = fs.readFileSync(footerFilePath, 'utf8');
  const { data: footerData } = matter(footerFileContent);

  return {
    props: {
      navbar: navbarData,
      footer: footerData,
      title: servicesData.title,
      description: servicesData.description,
      image: servicesData.image,
      services: servicesData.services,
    },
  };
}
