import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import ServicesListing from '../components/portfolio/ServicesListing';
import Tools from '../components/services/Tools';
import References from '../components/portfolio/References';

export default function PortfolioPage({ navbar, footer, title, description, image, portfolioSection, services,toolsTitle, category, tools, references }) {

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
        <PortfolioSection portfolioSection={portfolioSection} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <ServicesListing services={services} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <Tools toolsTitle={toolsTitle} category={category} tools={tools} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <References references={references} />
      </motion.div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const portfolioFilePath = path.join(process.cwd(), 'content', 'portfolio', 'portfolio.md');
  const portfolioFileContent = fs.readFileSync(portfolioFilePath, 'utf8');
  const { data: portfolioData } = matter(portfolioFileContent);

  const servicesFilePath = path.join(process.cwd(), 'content', 'services', 'services.md');
  const servicesFileContent = fs.readFileSync(servicesFilePath, 'utf8');
  const { data: serviceData } = matter(servicesFileContent);

  const toolsFilePath = path.join(process.cwd(), 'content', 'components', 'tools.md');
  const toolsFileContent = fs.readFileSync(toolsFilePath, 'utf8');
  const { data: toolsData } = matter(toolsFileContent);


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
      title: portfolioData.title,
      description: portfolioData.description,
      image: portfolioData.image,
      portfolioSection: portfolioData.portfolioSection,
      services: serviceData.services,
      toolsTitle: toolsData.title,
      category: toolsData.category,
      tools: toolsData.tools,
      references: portfolioData.references,
    },
  };
}
