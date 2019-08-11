import { useRouter } from "next/router";
import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";

const Post = props => {
	const router = useRouter();
	//console.log(router);

	return (
		<Layout>
			<h1>{router.query.id}</h1>
			<p>This is the blog post content.</p>
		</Layout>
	);
};

Post.getInitialProps = async function(context) {
	const { id } = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	console.log(`Fetched show: ${show.name}`);

	return { show };
};

export default Post;
