import { spawnSync } from 'child_process'
import { compact } from 'lodash'
import chalk from 'chalk'

export const getEnvPairs = (content: string) => {
  return compact(
    content
      .trim()
      .split('\n')
      .map((line) => (line.startsWith('#') ? null : line)),
  ).map((line) => {
    const separator = line.indexOf('=')
    const key = line.substring(0, separator)
    const value = line.substring(separator + 1)
    return { key, value }
  })
}

export const updateEnv = (key: string, value: string | number) => {
  spawnSync(
    [
      `echo "Removing ${chalk.cyan(key)}"`,
      `echo 'Y' | vercel env rm ${key} production`,
      `echo ""`,
      `echo "Adding ${chalk.cyan(key)}"`,
      `echo ${value} | vercel env add ${key} production`,
      `echo ""`,
    ].join(';'),
    { shell: true, stdio: 'inherit' },
  )
}
