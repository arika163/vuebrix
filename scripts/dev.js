const path = require('path')
const { execSync } = require('child_process')
const { dirHasContent } = require('./utils')

const dllDir = path.resolve(__dirname, '../dist/dll')

const args = process.argv.slice(2)
const rebuild = args.includes('--rebuild')

async function main() {
  console.log('检查 DLL 文件...')

  if (!dirHasContent(dllDir) || rebuild) {
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

  console.log('启动 webpack-dev-server...')
  try {
    const cmd = 'npx webpack-dev-server --config build/webpack.dev.config.js'
    console.log(`执行命令: ${cmd}`)
    execSync(cmd, { stdio: 'inherit' })
  } catch (err) {
    console.error('启动 dev server 失败：', err)
    process.exit(1)
  }
}

main()
