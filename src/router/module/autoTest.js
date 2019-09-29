import Main from '@/components/main'

export default {
  path: '/utils',
  name: 'auto_test_utils',
  component: Main,
  meta: {
    icon: 'logo-buffer',
    title: '测试工具'
  },
  children: [
    {
      path: 'rules',
      name: 'auto_test_rules',
      meta: {
        icon: 'md-add',
        title: '测试rules'
      },
      component: () => import('@/view/auto-test/rules.vue')
    },
    {
      path: 'case',
      name: 'auto_test_case',
      meta: {
        icon: '_qq',
        title: '测试用例'
      },
      component: () => import('@/view/auto-test/case.vue')
    },
    {
      path: 'report',
      name: 'auto_test_report',
      meta: {
        icon: '_qq',
        title: '测试报告'
      },
      component: () => import('@/view/auto-test/reports.vue')
    }
  ]
}
