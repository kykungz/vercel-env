import { Command, flags } from '@oclif/command'
import fs from 'fs'
import { getEnvPairs, updateEnv } from '../utils'

export default class Preview extends Command {
  static description = 'Deploy environment variables to Preview environment'

  static examples = [`$ vercel-env preview ./.env.preview`]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args } = this.parse(Preview)
    const content = fs.readFileSync(args.file).toString()
    const envPairs = getEnvPairs(content)
    envPairs.forEach(({ key, value }) => updateEnv(key, value))
  }
}
