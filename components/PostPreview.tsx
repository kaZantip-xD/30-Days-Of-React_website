import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
	return (
		<Link href={`/posts/${props.slug}`}>
			<div className='border border-slate-300 p-3 rounded-md  bg-slate-100 transition-all shadow-md hover:shadow-lg hover:scale-[1.01]'>
				<h2 className='font-bold'>{props.title}</h2>
				<p className='text-slate-500'>{props.description}</p>
			</div>
		</Link>
	);
};

export default PostPreview;
