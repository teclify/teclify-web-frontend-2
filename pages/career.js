import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import CareerInfo from '../components/career/CareerInfo';
import Values from '../components/career/Values';
import Job from '../components/career/Job';

export default function CareerPage({ navbar, footer, title, description, image, careerInfo, values, job }) {
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
        <CareerInfo careerInfo={careerInfo} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <Values values={values} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <Job job={job} />
      </motion.div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const careerFilePath = path.join(process.cwd(), 'content', 'career', 'career.md');
  const careerFileContent = fs.readFileSync(careerFilePath, 'utf8');
  const { data: careerData } = matter(careerFileContent);

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
      title: careerData.title,
      description: careerData.description,
      image: careerData.image,
      careerInfo: careerData.careerInfo,
      values: careerData.values,
      job: careerData.job,
    },
  };
}
