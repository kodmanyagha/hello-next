import Link from "next/link";
import Button from "@material-ui/core/Button";

const linkStyle = {
	marginRight: 15
};

export default function Header() {
	return (
		<div>
			<Link href="/">
				<a style={linkStyle}>Home</a>
			</Link>
			&nbsp;

			<Link href="/">
				<Button variant="contained" color="primary">
					Mainpage
				</Button>
			</Link>
			&nbsp;
			<Link href="/market">
				<Button variant="contained" color="primary">
					Market
				</Button>
			</Link>
			&nbsp;
			<Link href="/about">
				<Button variant="contained" color="primary">
					About Us
				</Button>
			</Link>
		</div>
	);
}
