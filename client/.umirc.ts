import { defineConfig } from 'umi';

export default defineConfig({
  dva: {
    immer: true,
    hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/product',
    },
    {
      path: '/product',
      component: '@/pages/product',
    },
  ],
  fastRefresh: {},
});
