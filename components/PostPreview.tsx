import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
	return (
		<Link href={`/posts/${props.slug}`}>
			<div
				className='post-title border border-slate-300 p-3 rounded-md  bg-slate-100 transition-all shadow-md hover:shadow-lg hover:scale-[1.01] h-full'
				post-day={props.day}
			>
				<h2 className='font-bold max-w-[65%]'>{props.title}</h2>
				<p className='text-slate-500 max-w-[65%]'>{props.description}</p>
			</div>
		</Link>
	);
};

export default PostPreview;
