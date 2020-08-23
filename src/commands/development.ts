import { Command, flags } from '@oclif/command'
import fs from 'fs'
import { getEnvPairs, updateEnv } from '../utils'

export default class Development extends Command {
  static description = 'Deploy environment variables to Development environment'

  static examples = [`$ vercel-env development ./.env.development`]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args } = this.parse(Development)
    const content = fs.readFileSync(args.file).toString()
    const envPairs = getEnvPairs(content)
    envPairs.forEach(({ key, value }) => updateEnv('development', key, value))
  }
}
