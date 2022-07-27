import Link from "next/link";
import { Container } from "./styles";

type Props = {
  label: string,
  href: string,
}

const NavBar = ({ links }: any) => {
  return (
    <Container>
      <ul>
        {links?.map(({ label, href }: Props, index: number) => (
          <li key={index}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default NavBar;