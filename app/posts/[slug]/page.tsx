import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";

const getPostContent = (slug: string) => {
	const folder = "posts/";
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, "utf8");
	const matterResult = matter(content);
	return matterResult;
};

export const generateStaticParams = async () => {
	const posts = getPostMetadata();
	return posts.map((post) => ({
		slug: post.slug,
	}));
};

const PostPage = (props: any) => {
	const slug = props.params.slug;
	const post = getPostContent(slug);
	return (
		<div>
			{/* <h1>{post.data.title} post page</h1> */}
			<div className='author-description'>
				<h1 className='author-title'>
					{" "}
					30 Days Of React: JavaScript Refresher
				</h1>
				<div className='author-name'>
					Author: Asabeneh Yetayeh
					<br />
					<div className='author-socials'>
						<a href='https://github.com/Asabeneh/' target='_blank'>
							<img
								alt='github'
								src='https://img.shields.io/github/followers/Asabeneh.svg?style=social&label=Follow&maxAge=2592000'
							/>
						</a>
						<a
							className='header-badge'
							target='_blank'
							href='https://www.linkedin.com/in/asabeneh/'
						>
							<img
								alt='linkedin'
								src='https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social'
							/>
						</a>
						<a
							className='header-badge'
							target='_blank'
							href='https://twitter.com/Asabeneh'
						>
							<img
								alt='twitter'
								src='https://img.shields.io/twitter/follow/asabeneh?style=social'
							/>
						</a>
					</div>
					<small> October, 2020</small>
				</div>
			</div>

			<article className='prose prose-base prose-code max-w-[90%] mx-auto'>
				<Markdown>{post.content}</Markdown>
			</article>
		</div>
	);
};

export default PostPage;
