import apps from '@/appList.json'
import router from '../router'
import type App from '../types/app'
import store from '../store'
import 'systemjs/dist/system.js'

function loadApp(app: App) {
  router.addRoute({ path: `/${app.path}`, component: app.component })
  store.dispatch('registerApp', app)
}

if (process.env.NODE_ENV === 'production') {
  apps.forEach((appName: string) => {
    window.System.import(`./child/${appName}/main.js`).then((module: any) => {
      loadApp(module.default.default)
    })
  })
} else {
  apps.forEach((appName: string) => {
    import(`../apps/${appName}/index.ts`).then(module => {
      loadApp(module.default)
    })
  })
}
