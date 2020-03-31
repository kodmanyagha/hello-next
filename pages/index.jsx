import Layout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = props => {
	if (typeof props.id != "undefined") {
		return (
			<li>
				<Link href="/p/[id]" as={`/p/${props.id}`}>
					<a>{props.id}</a>
				</Link>
			</li>
		);
	} else {
		return (
			<li>
				<Link href={`/post?title=${props.title}`}>
					<a>{props.title}</a>
				</Link>
			</li>
		);
	}
};

const Index = props => {
	return (
		<Layout>
			<h1>My Blog</h1>
			<ul>
				<PostLink title="Hello next.js" />
				<PostLink title="Learn Next.js is awesome" />
				<PostLink title="Deploy apps with Zeit" />

				<PostLink id="hello-nextjs" />
				<PostLink id="learn-nextjs-is-awesome" />
				<PostLink id="deploy-apps-with-zeit" />
			</ul>

			<h1>Batman TV Show</h1>
			<ul>
				{props.shows.map(show => (
					<li key={show.id}>
						<Link href="/p/[id]" as={`/p/${show.id}`}>
							<a>{show.name}</a>
						</Link>
					</li>
				))}
			</ul>

			<style jsx>{`
				h1,
				a {
					font-family: "Arial";
				}

				ul {
					padding: 0;
				}

				li {
					list-style: none;
					margin: 5px 0;
				}

				a {
					text-decoration: none;
					color: #3c4ffa;
					opacity: 1;
				}

				a :global() {
					color: blue;
				}

				a:hover {
					opacity: 1;
					color: #ff0000;
				}
			`}</style>
		</Layout>
	);
};

Index.getInitialProps = async function() {
	const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
	const data = await res.json();

	console.log(`Show data fetched. Count: ${data.length}`);

	return {
		shows: data.map(entry => entry.show)
	};
};

export default Index;
