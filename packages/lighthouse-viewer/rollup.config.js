import path from 'path';
import rollupBase from '../../rollup/rollup.base.config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json');
const cwd = path.resolve(__dirname);

const config = rollupBase({
  cwd,
  entry: 'src/index.ts',
  libraryName: 'lighthouseViewer',
  minify: true,
  external: [],
  pkg,
  type: 'lib',
});

export default config;
