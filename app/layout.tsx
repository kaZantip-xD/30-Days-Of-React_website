import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
	title: "30 Days React tutorial",
	description: "Website powered by kaZantip_xD",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// header layout
	const Header = (
		<header className='text-center bg-slate-800 py-7 mb-5'>
			<div>
				<h1 className='text-3xl text-gray-50 font-bold mb-2'>
					<Link href='/'>30 Days React tutorial</Link>
				</h1>

				<p className='text-xl text-slate-300'>React tutorial for newbies</p>
			</div>
		</header>
	);

	// footer layout
	const Footer = (
		<footer className='footer text-right pr-10 bg-slate-800 py-7 mt-5'>
			<div className='text-xl text-slate-100 inline-flex'>
				website developed by
				<span className='ml-2'>
					<a
						className='my-auto'
						href='https://github.com/kazantip-xd/'
						target='_blank'
					>
						<img
							className=''
							alt='github'
							src='https://img.shields.io/badge/kaZantip-xD?style=social&logo=github&logoColor=black&labelColor=eee'
						/>
					</a>
				</span>
			</div>
		</footer>
	);

	return (
		<html lang='en'>
			<head />
			<body className='transition-all bg-slate-50'>
				{Header}
				<div className='mx-auto lg:max-w-4xl max-w-[90%] '>{children}</div>
				{Footer}
				<Script src='./posts/[slug]/index.js' />
			</body>
		</html>
	);
}
