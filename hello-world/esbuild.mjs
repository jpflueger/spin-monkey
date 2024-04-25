import * as esbuild from 'esbuild';

await esbuild.build({
  bundle: true,
  treeShaking: true,
  splitting: false,
  entryPoints: ['src/spin.ts'],
  external: [
    "wasi:http/types@*",
    "fermyon:spin/*",
  ],
  outfile: "dist/esbuild/index.js",
  platform: "neutral",
  target: "es2021",
  format: "esm",
  mainFields: ["module","main"],
});