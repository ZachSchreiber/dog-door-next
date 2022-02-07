import Head from "next/head";


const HtmlHead = ({ pageTitle, content }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={content} />
    </Head>
  );
};

export default HtmlHead;
