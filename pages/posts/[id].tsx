import { getPostData } from "../../lib/posts";


export default function Post({ postData }: any) {
  return (
    <div>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);
  
  return {
    props: {
      postData    
    },
  };
}

export const getStaticPaths = async () => {

  return {
      paths: ["/posts/kimserver"], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}