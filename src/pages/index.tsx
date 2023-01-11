import { GetStaticProps } from 'next';
import Head from 'next/head';

import { FiCalendar, FiUser } from 'react-icons/fi';
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

export default function Home() {
  return (
    <>
      <Head>
        <title> Início | SpaceTraveling. </title>
      </Head>

      <main className={styles.mainContainer}>
        <div className={styles.posts}>
          <a href="/">
            <strong>Como utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <div>
              <time>
                <FiCalendar size={13} /> 4 Jan 2023
              </time>
              <span>
                <FiUser size={15} /> Jonathan Castro
              </span>
            </div>
          </a>

          <a href="/">
            <strong>Criando um app CRA do zero</strong>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App
            </p>
            <div>
              <time>
                <FiCalendar />1 Jan 2023
              </time>
              <span>
                <FiUser />
                Diego Fernandes
              </span>
            </div>
          </a>

          <a href="/">
            <strong>Como utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <div>
              <time>
                <FiCalendar />4 Jan 2023
              </time>
              <span>
                <FiUser />
                Jonathan Castro
              </span>
            </div>
          </a>

          <a href="/">
            <strong>Criando um app CRA do zero</strong>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App
            </p>
            <div>
              <time>
                <FiCalendar />1 Jan 2023
              </time>
              <span>
                <FiUser />
                Diego Fernandes
              </span>
            </div>
          </a>
        </div>

        <a href="/">Carregar mais posts</a>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('post', { pageSize: 2 });

  console.log(postsResponse);

  return {
    props: {
      postsPagination: postsResponse,
    },
  };
};
