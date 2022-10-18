import 'uno.css';
import '@unocss/reset/tailwind.css'

import header from '/components/header';
import button from '/components/button';
import link from '/components/link';

const feature = ({ title, description, details }) => {
  return (
    <div class="w-full text-slate-900 border rounded-2xl p-6 flex flex-col gap-1">
      <h2 class="font-semibold">{title}</h2>
      <p>{description}</p>
      <p class="text-slate-500">{details}</p>
    </div>
  )
};

const page = (
  <main class="mx-auto flex flex-col gap-6 items-center" style="max-width: 1000px;">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 px-6">
      {feature({
        title: "Multipage",
        description: ["Using ", link({ href: "https://vitejs.dev", children: "Vite" })],
        details: "Vite is configured to serve out of the src directory and builds all files that are named index.html.",
      })}
      {feature({
        title: "JSX",
        description: ["Using ", link({ href: "https://github.com/sdunster/jsx-dom-factory", children: "jsx-dom-factory" })],
        details: "Absolute minimum to use JSX. Renders JSX without VDOM, components or reactivity.",
      })}
      {feature({
        title: "Atomic CSS",
        description: ["Using ", link({ href: "https://uno.antfu.me", children: "UnoCSS" })],
        details: [
          "UnoCSS is configured with the ",
          link({ href: "https://github.com/unocss/unocss/tree/main/packages/preset-wind", children: "@unocss/wind" }),
          " preset, which mimics ",
          link({ href: "https://tailwindcss.com", children: "Tailwind" }),
          "."
        ],
      })}
    </div>

    {button({ href: "/demo-page/", children: "Open the other page" })}
  </main>
);

document.body.appendChild(header);
document.body.appendChild(page);
