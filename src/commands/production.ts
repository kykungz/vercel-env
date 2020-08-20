import { Command, flags } from '@oclif/command'
import fs from 'fs'
import { getEnvPairs, updateEnv } from '../utils'

export default class Production extends Command {
  static description = 'Deploy environment variables to Production environment'

  static examples = [`$ vercel-env production ./.env.production`]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args } = this.parse(Production)
    const content = fs.readFileSync(args.file).toString()
    const envPairs = getEnvPairs(content)
    envPairs.forEach(({ key, value }) => updateEnv('production', key, value))
  }
}
