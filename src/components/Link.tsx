import type { FunctionComponent } from 'preact';

const Link: FunctionComponent<{ href: string }> = ({ href, children }) => (
  <a class="text-blue-600 hover:text-indigo-600 transition" href={href}>{children}</a>
);

export default Link;
