import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
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
      <Title title={title} description={description} image={image} />
      <AboutUsDetails highlightDescription={highlightDescription} highlights={highlights} />
      <FactsAndFigures facts={facts} /> 
      <ValuesSection values={values} />
      <ManagementSection title="Geschäftsführung" management={management} />
      <div className="divider"></div>
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
