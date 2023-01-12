import Link from "next/link";
import { ActiveLinkProps } from "../../interfaces/ActiveLinkProps";
import { useRouter } from "next/router";
import { cloneElement } from "react";

export default function ActiveLink({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps): JSX.Element {
  const { asPath } = useRouter();

  const className = asPath === props.href ? activeClassName : '';
  const clonedElement = cloneElement(children, {
    className,
  });

  return (
    <Link {...props}>
      {clonedElement}
    </Link>
  );
}
