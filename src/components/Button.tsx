import type { FunctionComponent } from 'preact';

const Button: FunctionComponent<{ href: string }> = ({ href, children }) => (
  <a class="bg-blue-100 text-blue-600 font-bold rounded-full p-1 px-6 hover:bg-indigo-100 hover:text-indigo-600 transition" href={href}>{children}</a>
);

export default Button;
