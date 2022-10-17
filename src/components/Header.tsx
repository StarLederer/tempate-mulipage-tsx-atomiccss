import type { FunctionComponent } from 'preact';


const SecondaryText: FunctionComponent = ({ children }) => (
  <span class="text-slate-300">{children}</span>
);

const Header: FunctionComponent = () => (
  <header>
      <h1 class="text-2xl text-slate-900 p-6 font-extrabold flex items-center justify-center" style="min-height: 50vh;">
      Multipage &nbsp;
      <SecondaryText>+</SecondaryText> &nbsp;
      TSX &nbsp;
      <SecondaryText>+</SecondaryText> &nbsp;
      Atomic CSS &nbsp;
      <SecondaryText>= this</SecondaryText> &nbsp;
      template
    </h1>
  </header>
);

export default Header;
