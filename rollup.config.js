import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import pkg from './package.json';

const config = {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    del({ targets: ['dist/*'] }),
    generatePackageJson({
      baseContents: (pkg) => ({
        name: pkg.name,
        main: pkg.main.replace('src', 'dist'),
        version: pkg.version,
        description: pkg.description,
        dependencies: pkg.peerDependencies,
        private: true
      })
    }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};

export default config;