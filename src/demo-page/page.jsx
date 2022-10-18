import 'uno.css';
import '@unocss/reset/tailwind.css'

import header from '/components/header';
import button from '/components/button';

const page = (
  <main class="px-6 text-center flex flex-col gap-2 items-center">
    <p class="text-slate-900">You are on a different page now!</p>
    {button({href: "../", children: "Go back"})}
  </main>
);

document.body.appendChild(header);
document.body.appendChild(page);
