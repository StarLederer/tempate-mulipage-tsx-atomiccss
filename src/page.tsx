import 'uno.css';
import '@unocss/reset/tailwind.css'
import type { FunctionComponent, ComponentChild } from 'preact';
import { render } from 'preact';

import Header from '/components/Header';
import Button from '/components/Button';
import Link from '/components/Link';

const Feature: FunctionComponent<{
  title: string,
  description: ComponentChild,
  details: ComponentChild
}> = ({ title, description, details }) => {
  return (
    <div class="w-full text-slate-900 border rounded-2xl p-6 flex flex-col gap-1">
      <h2 class="font-semibold">{title}</h2>
      <p>{description}</p>
      <p class="text-slate-500">{details}</p>
    </div>
  )
};

const page = (<>
  <Header />
  <main class="mx-auto flex flex-col gap-6 items-center" style="max-width: 1000px;">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 px-6">
      <Feature
        title="Multipage"
        description={<>Using <Link href="https://vitejs.dev">Vite</Link></>}
        details="Vite is configured to serve out of the src directory and builds all files that are named index.html"
      />
      <Feature
        title="TSX"
        description={<>Using <Link href="https://preactjs.com">Preact</Link></>}
        details="Preact is used without any Vite plugins to better demonstrate it is a runtime, not a compiler"
      />
      <Feature
        title="Atomic CSS"
        description={<>Using <Link href="https://uno.antfu.me">UnoCSS</Link></>}
        details={<>
          UnoCSS is configured with the&nbsp;
          <Link href="https://github.com/unocss/unocss/tree/main/packages/preset-wind">@unocss/wind</Link>&nbsp;
          preset, which mimics&nbsp;
          <Link href="https://tailwindcss.com">Tailwind</Link>
        </>}
      />
    </div>

    <Button href="/demo-page/">Open the other page</Button>
  </main>
</>);

render(page, document.body);
