import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeTitle from '../components/home/HomeTitle';
import ChallengesSection from '../components/home/ChallengesSection';
import SolutionSection from '../components/home/SolutionsSection';
import Tools from '../components/services/Tools';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';

export default function Home({ navbar, footer, title, subtitle, ctaText, ctaLink, backgroundImage, challengesTitle, challenges, solutionsTitle, solutions, servicesTitle, services, portfolioTitle, portfolioItems, toolsTitle, category, tools }) {
  return (
    <>
      <Navbar navbar={navbar} />
      <HomeTitle title={title} subtitle={subtitle} ctaText={ctaText} ctaLink={ctaLink} backgroundImage={backgroundImage} />
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut",  delay: 0.2 }}
      >
        <ChallengesSection title={challengesTitle} challenges={challenges} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut",  delay: 0.2 }}
      >
         <SolutionSection title={solutionsTitle} solutions={solutions} />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2}}
      >
        <Services title={servicesTitle} services={services} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut",  delay: 0.2 }}
      >
        <Tools toolsTitle={toolsTitle} category={category} tools={tools} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut",  delay: 0.2 }}
      >
        <Portfolio title={portfolioTitle} portfolioItems={portfolioItems} />
      </motion.div>

      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const homeFilePath = path.join(process.cwd(), 'content', 'home', 'index.md');
  const homeFileContent = fs.readFileSync(homeFilePath, 'utf8');
  const { data: homeData } = matter(homeFileContent);

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
      title: homeData.title || "Default Title",
      subtitle: homeData.subtitle || "Default Subtitle",
      ctaText: homeData.ctaText || "Default CTA Text",
      backgroundImage: homeData.backgroundImage,
      ctaLink: homeData.ctaLink || "/default-link",
      challengesTitle: homeData.challengesTitle || "Challenges", 
      challenges: homeData.challenges || [],
      solutionsTitle: homeData.solutionsTitle || "Solutions",
      solutions: homeData.solutions || [],
      servicesTitle: homeData.servicesTitle || "Services",
      services: homeData.services || [],
      portfolioTitle: homeData.portfolioTitle || "Portfolio",
      portfolioItems: homeData.portfolioItems || [],
      toolsTitle: toolsData.title,
      category: toolsData.category,
      tools: toolsData.tools,
    },
  };
}