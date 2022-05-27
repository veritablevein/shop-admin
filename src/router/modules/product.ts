import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw =
{
  path: 'product',
  name: 'product',
  component: RouterView,
  meta: { // 自定义路由元数据
    title: '商品'
  },
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      component: () => import('@/views/product/list/index.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'product_classify',
      name: 'product_classify',
      component: () => import('@/views/product/classify/index.vue'),
      meta: {
        title: '商品分类'
      }
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      component: () => import('@/views/product/attr/index.vue'),
      meta: {
        title: '商品规格'
      }
    },
    {
      path: 'product_reply',
      name: 'product_reply',
      component: () => import('@/views/product/reply/index.vue'),
      meta: {
        title: '商品评论'
      }
    }
  ]
}

export default routes
