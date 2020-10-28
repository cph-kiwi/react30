import Head from 'next/head';
import Link from 'next/link';

const Index = () => (
    <div>
        <Head>
            <title>React30</title>
        </Head>
        <h1>React30</h1>
        <p>Wes Bos' JavaScript30 projects rewritten using React</p>
<ul>
    <li>
    <Link href="/"><a className="nav-link">Home</a></Link>
    </li>
    <li>
    <Link href="/drumkit"><a className="nav-link">Drum kit</a></Link>
    </li>
    <li>
    <Link href="/clock"><a className="nav-link">Clock</a></Link>
    </li>
</ul>
<style jsx>{`
            ul {
            list-style: none;
            }

            ul li {
            margin-right: 20px;
            }

            ul li a {
            text-decoration: none;
            }
        `}</style>
        </div>
    );
  
  export default Index;