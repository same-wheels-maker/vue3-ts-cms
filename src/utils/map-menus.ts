import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb'

let firstMenu: any = undefined

export const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 先去加载默认的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    if (key !== './index.ts') {
      const route = require('../router' + key.split('.')[1])
      allRoutes.push(route.default)
    }
  })

  // 根据菜单获取添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    menus.forEach((menu) => {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    })
  }

  _recurseGetRoute(userMenus)

  return routes
}

export const pathMapBreadcrumbs = (userMenus: any[], currentPath: string) => {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export const pathMapToMenu = (
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any => {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export const mapMenusToPermissions = (userMenus: any[]) => {
  const permissions: string[] = []
  const _recurseGetPermission = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}

export { firstMenu }
