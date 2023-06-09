import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/hb/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: "es2015",

  outfile: 'handlebars.min.js',
  external: ['fs'],
})

