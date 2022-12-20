import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import sortMediaQueries from 'postcss-sort-media-queries';

const config = {
  plugins: [
    postcssPresetEnv(),
    autoprefixer(),
    sortMediaQueries({
      sort: 'desktop-first',
    }),
  ],
};

export default config;
