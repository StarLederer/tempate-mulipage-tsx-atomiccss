import 'uno.css';
import '@unocss/reset/tailwind.css'
import { render } from 'preact';

import Header from '/components/Header';
import Button from '/components/Button';

const page = (<>
  <Header />
  <main class="px-6 text-center flex flex-col gap-2 items-center">
    <p class="text-slate-900">You are on a different page now!</p>
    <Button href="../">Go back</Button>
  </main>
</>);

render(page, document.body);
