import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ErrorPage from '../components/ErrorPage';

export default function Error({ navbar, footer, errorItems}) {
  return (
    <>
      <Navbar navbar={navbar} />
      <ErrorPage errorItems={errorItems} />
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const errorPageFilePath = path.join(process.cwd(), 'content', 'error', 'error.md');
  const errorPageFileContent = fs.readFileSync(errorPageFilePath, 'utf8');
  const { data: errorPageData } = matter(errorPageFileContent);

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
      errorItems: errorPageData.errorItems,
    },
  };
}
