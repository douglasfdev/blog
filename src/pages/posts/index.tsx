import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import thumbImg from '../../../public/images/thumb.png';

export default function Posts(){
  return(
    <>
      <Head>
        <title>Douglas Jr - Blog</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href='/'>
            <p>
              <Image
                src={thumbImg}
                alt="Post titulo 1"
                width={720}
                height={410}
                quality={100}
              />
            <strong>Criando meu primeiro aplicativo</strong>
            <time>{new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}</time>
            <p>Hoje vamos criar o controle de mostrar a senha do input, uma opção para nossos fomrulários de cadastro e login.</p>
            </p>
          </Link>
          
          <Link href='/'>
            <p>
              <Image
                src={thumbImg}
                alt="Post titulo 1"
                width={720}
                height={410}
                quality={100}
              />
            <strong>Criando meu primeiro aplicativo</strong>
            <time>{new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}</time>
            <p>Hoje vamos criar o controle de mostrar a senha do input, uma opção para nossos fomrulários de cadastro e login.</p>
            </p>
          </Link>
          
        </div>
      </main>
    </>
  )
}
