const path = require('path')
const minimist = require('minimist')
const { execSync } = require('child_process')
const { dirHasContent } = require('./utils')

const args = minimist(process.argv.slice(2))
const child = args.child || null

function buildDLL() {
  console.log('检查 DLL 文件...')
  const dllDir = path.resolve(__dirname, '../dist/dll')
  if (!dirHasContent(dllDir)) {
    console.log('DLL 文件不存在，开始构建 DLL...')
    try {
      const cmd = 'npx webpack --config build/webpack.dll.config.js'
      console.log(`执行命令: ${cmd}`)
      execSync(cmd, { stdio: 'inherit' })
      console.log('DLL 构建完成')
    } catch (err) {
      console.error('构建 DLL 失败：', err)
      process.exit(1)
    }
  } else {
    console.log('DLL 已存在，跳过构建')
  }
}

function buildMain() {
  console.log('开始构建项目基座...')
  try {
    const cmd = 'npx webpack --config build/webpack.prod.config.js'
    console.log(`执行命令: ${cmd}`)
    execSync(cmd, { stdio: 'inherit' })
  } catch (err) {
    console.error('构建项目基座失败：', err)
    process.exit(1)
  }
}

function buildChild(child) {
  console.log(`开始构建子应用 ${child} ...`)
  try {
    const cmd = `npx webpack --config build/webpack.child.config.js --env.child=${child}`
    console.log(`执行命令: ${cmd}`)
    execSync(cmd, { stdio: 'inherit' })
    console.log(`子系统 ${child} 构建完成`)
  } catch (err) {
    console.error(`构建子系统 ${child} 失败：`, err)
    process.exit(1)
  }
}

async function main() {
  buildDLL()

  if (child) {
    buildChild(child)
  } else {
    const apps = require(path.resolve(__dirname, '../src/appList.json'))
    for (const app of apps) {
      buildChild(app)
    }
    buildMain()
  }
}

main()
