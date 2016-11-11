#!/usr/bin/env node
const path = require('path')
const chalk = require('chalk')
const cac = require('cac')
const pathExists = require('path-exists')
const copy = require('graceful-copy')
const logSymbols = require('log-symbols')

const cli = cac()

cli.usage(`${chalk.yellow('ream-init')} <project-name> [options]`)

cli.command('*', (input, flags) => {
  const projectName = input[0]
  if (!projectName) {
    return cli.showHelp()
  }
  const dest = path.resolve(process.cwd(), projectName)
  console.log()
  return pathExists(dest)
    .then(exists => {
      if (exists && !flags.force) {
        console.error(`${logSymbols.error} ${projectName} exists, use --force to override it.`)
        process.exit(1)
      }
      return copy(path.join(__dirname, 'template'), dest, {
        data: {
          name: projectName
        }
      })
    })
    .then(() => {
      console.log(`${logSymbols.success} ${projectName} is successfully created!`)
      console.log(chalk.bold('\n  To get started:\n'))
      console.log(`  cd ${projectName}`)
      console.log('  npm install')
      console.log('  npm run dev')
      console.log()
    })
})

cli.onError(err => {
  console.log(err.stack)
  process.exit(1)
})

cli.parse()
