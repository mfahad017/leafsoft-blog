import { useRouter } from 'next/router';
import { sanity } from '../../config';

const Post = ({ post }: any) => {
  const router = useRouter();

  return (
    <article>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await sanity.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const post = await sanity.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}

export default Post;
