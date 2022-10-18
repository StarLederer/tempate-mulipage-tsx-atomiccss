import { resolve } from 'path'
import { readdir } from 'fs/promises'
import Unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import { defineConfig } from 'vite'

const root = resolve("./src");

export default defineConfig({
  root,

  plugins: [
    Unocss({
      presets: [
        presetWind(),
      ]
    }),
  ],

  esbuild: {
    jsxInject: `import h from 'jsx-dom-factory'`,
    jsxFactory: 'h',
  },

  build: {
    emptyOutDir: true,
    outDir: resolve("./dist"),
    rollupOptions: {
      input: await (async () => {
        // Find files
        const foundFiles = [];
        const findHTMLFiles = async (path) => {
          const promises = [];

          (await readdir(path, { withFileTypes: true })).forEach(async (dirEnt) => {
            const dirEntPath = resolve(path, dirEnt.name);

            if (dirEnt.isFile()) {
              if (dirEnt.name === "index.html") {
                foundFiles.push(dirEntPath);
              }
            } else if (dirEnt.isDirectory()) {
              promises.push(findHTMLFiles(dirEntPath));
            }
          });

          await Promise.all(promises);
        };
        await findHTMLFiles(root);

        // Convert file array to input object
        const inputs = {};
        foundFiles.forEach((htmlFile, i) => {
          inputs[`page-${i}`] = htmlFile;
        })

        return inputs;
      })(),
    },
  },
})
