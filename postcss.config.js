import pxtorpx from 'postcss-pxtorpx-pro';
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const config = {
  plugins: [tailwindcss(), pxtorpx({ transform: (x) => x }), autoprefixer()],
};

export default config;
