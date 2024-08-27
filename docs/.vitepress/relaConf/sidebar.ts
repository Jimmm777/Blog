import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = 
    [
        {
          text: '侧边栏',
          items: [
            { text: '1', link: '/markdown-examples' },
            { text: '2', link: '/api-examples' }
          ]
        }
    ]