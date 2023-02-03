import { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../services/prismic';
import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [posts, setPosts] = useState<Post[]>(
    postsPagination.results.map(result => ({
      ...result,
      first_publication_date: format(
        new Date(result.first_publication_date),
        'dd MMM yyyy',
        {
          locale: ptBR,
        }
      ),
    }))
  );

  return (
    <>
      <Head>
        <title> Início | SpaceTraveling. </title>
      </Head>

      <main className={styles.mainContainer}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link key={post.uid} href={`/post/${post.uid}`}>
              <strong>{post.data.title}</strong>
              <p>{post.data.subtitle}</p>
              <div>
                <time>
                  <FiCalendar size={13} /> {post.first_publication_date}
                </time>
                <span>
                  <FiUser size={15} /> {post.data.author}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <a href="/">Carregar mais posts</a>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('posts', { pageSize: 5 });

  return {
    props: {
      postsPagination: postsResponse,
    },
    revalidate: 60 * 30,
  };
};
