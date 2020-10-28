import Head from 'next/head';
import Link from 'next/link';

const Clock = () => (
    <div>
                <Head>
            <title>Clock</title>
        </Head>
        <ul>
    <li>
    <Link href="/"><a className="nav-link">Home</a></Link>
    </li>
    </ul>
<h1>Clock</h1>
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

export default Clock;