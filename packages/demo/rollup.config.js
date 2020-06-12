import path from 'path';
import rollupBase from '../../rollup/rollup.base.config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json');
const cwd = path.resolve(__dirname);

const config = rollupBase({
  cwd,
  entry: 'src/index.tsx',
  libraryName: 'demo',
  minify: false,
  external: [],
  pkg,
  type: 'app',
});

export default config;
