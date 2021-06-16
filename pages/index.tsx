import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Chatting w/Gun.js</title>
				<meta
					name='description'
					content='A chatting app created using nextjs and Gunjs'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</div>
	);
}
