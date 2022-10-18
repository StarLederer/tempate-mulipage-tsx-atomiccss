const secondaryText = (label) => (
  <span class="text-slate-300">{label}</span>
);

const header = (
  <header>
      <h1 class="text-2xl text-slate-900 p-6 font-extrabold flex items-center justify-center" style="min-height: 50vh;">
      Multipage &nbsp;
      {secondaryText("+")} &nbsp;
      JSX &nbsp;
      {secondaryText("+")} &nbsp;
      Atomic CSS &nbsp;
      {secondaryText("= this")} &nbsp;
      template
    </h1>
  </header>
);

export default header;
