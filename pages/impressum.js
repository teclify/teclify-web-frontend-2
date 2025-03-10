import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Impressum from '../components/impressum/Impressum';

export default function impressumPage({ navbar, footer, title, description, image,contactInfo, impressum
 }) {
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
      <Impressum {...impressum} contactInfo={contactInfo} />
      </motion.div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const impressumFilePath = path.join(process.cwd(), 'content', 'impressum', 'impressum.md');
  const impressumFileContent = fs.readFileSync(impressumFilePath, 'utf8');
  const { data: impressumData } = matter(impressumFileContent);

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
      title: impressumData.title,
      description: impressumData.description,
      image: impressumData.image,
      contactInfo: impressumData.contactInfo,
      impressum: impressumData.impressum,
    },
  };
}
