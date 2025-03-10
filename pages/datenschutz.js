import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import DataPrivacy from '../components/dataprivacy/DataPrivacy';

export default function dataprivacyPage({ navbar, footer, title, description, image, dataprivacy }) {
  console.error(dataprivacy); // Korrekt

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
        <DataPrivacy data={dataprivacy} />
      </motion.div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const dataprivacyFilePath = path.join(process.cwd(), 'content', 'dataprivacy', 'dataprivacy.md');
  const dataprivacyFileContent = fs.readFileSync(dataprivacyFilePath, 'utf8');
  const { data: dataprivacyData } = matter(dataprivacyFileContent);

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
      title: dataprivacyData.title,
      description: dataprivacyData.description,
      image: dataprivacyData.image,
      dataprivacy: dataprivacyData.dataprivacy,
    },
  };
}
