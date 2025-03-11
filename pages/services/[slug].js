import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Service from '../../components/services/Service';
import Tools from '../../components/services/Tools';
import HelpBox from '../../components/services/HelpBox';

export default function ServiceDetailPage({
  navbar,
  footer,
  title,
  description,
  image,
  service,
  toolsTitle,
  category,
  tools,
  help
}) {
  const router = useRouter();
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
        <Service service={service} />
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

        <HelpBox help={help} />
      </motion.div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticPaths() {
  const serviceFilePath = path.join(
    process.cwd(),
    'content',
    'service',
    'service.md'
  );

  try {
    const serviceFileContent = fs.readFileSync(serviceFilePath, 'utf8');
    const { data: serviceData } = matter(serviceFileContent);


    const paths = serviceData.services.map((service) => ({
      params: { slug: service.link.replace('/services/', '') },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Fehler beim Lesen der Service-Datei:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const contentPath = path.join(process.cwd(), 'content');

  try {
    // Service-Daten
    const serviceFilePath = path.join(contentPath, 'service', 'service.md');
    const serviceFileContent = fs.readFileSync(serviceFilePath, 'utf8');
    const { data: serviceData } = matter(serviceFileContent);

    const toolsFilePath = path.join(process.cwd(), 'content', 'components', 'tools.md');
    const toolsFileContent = fs.readFileSync(toolsFilePath, 'utf8');
    const { data: toolsData } = matter(toolsFileContent);  

    // Navbar-Daten
    const navbarFilePath = path.join(contentPath, 'navbar.md');
    const navbarFileContent = fs.readFileSync(navbarFilePath, 'utf8');
    const { data: navbarData } = matter(navbarFileContent);

    // Footer-Daten
    const footerFilePath = path.join(contentPath, 'footer.md');
    const footerFileContent = fs.readFileSync(footerFilePath, 'utf8');
    const { data: footerData } = matter(footerFileContent);

    // Finde den spezifischen Service basierend auf dem Slug
    const service = serviceData.services.find(
      (s) => s.link === `/services/${params.slug}`
    );

    // Wenn der Service nicht gefunden wird, gib 404 zurück
    if (!service) {
      return { notFound: true };
    }

    return {
      props: {
        navbar: navbarData || [],
        footer: footerData || [],
        title: serviceData.title || '',
        description: serviceData.description || '',
        image: serviceData.image || '',
        service,
        toolsTitle:toolsData.title,
        category: toolsData.category,
        tools: toolsData.tools,
        help: serviceData.help,
      },
    };
  } catch (error) {
    console.error('Fehler beim Laden der Daten:', error);
    return {
      notFound: true,
    };
  }
}
