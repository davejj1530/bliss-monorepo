import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

const EXTENSIONS = [".ts", ".tsx"];
const EXTERNAL = Object.keys(pkg.devDependencies);

export default [
  {
    input: "./lib/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],

    plugins: [
      typescript(),
      babel({
        extensions: EXTENSIONS,
        babelHelpers: "inline",
        include: EXTENSIONS.map((ext) => `lib/**/*${ext}`),
      }),
      external(),
      resolve(),
      terser(),
    ],
    external: EXTERNAL,
  },
];
