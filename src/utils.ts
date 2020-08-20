import { spawnSync } from 'child_process'
import chalk from 'chalk'

export const getEnvPairs = (content: string) => {
  return content
    .trim()
    .split('\n')
    .map((line) => (line.startsWith('#') ? null : line))
    .filter((line) => line)
    .map((line) => {
      const separator = line!.indexOf('=')
      const key = line!.substring(0, separator)
      const value = line!.substring(separator + 1)
      return { key, value }
    })
}

export const updateEnv = (
  target: 'production' | 'preview' = 'preview',
  key: string,
  value: string | number,
) => {
  spawnSync(
    [
      `echo "Removing ${chalk.cyan(key)}"`,
      `echo 'Y' | vercel env rm ${key} ${target}`,
      `echo ""`,
      `echo "Adding ${chalk.cyan(key)}"`,
      `echo ${value} | vercel env add ${key} ${target}`,
      `echo ""`,
    ].join(';'),
    { shell: true, stdio: 'inherit' },
  )
}
