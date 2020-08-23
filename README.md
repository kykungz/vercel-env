@kykungz/vercel-env
===================

Set Vercel environment variables with env file

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@kykungz/vercel-env.svg)](https://npmjs.org/package/@kykungz/vercel-env)
[![Downloads/week](https://img.shields.io/npm/dw/@kykungz/vercel-env.svg)](https://npmjs.org/package/@kykungz/vercel-env)
[![License](https://img.shields.io/npm/l/@kykungz/vercel-env.svg)](https://github.com/kykungz/vercel-env/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @kykungz/vercel-env
$ vercel-env COMMAND
running command...
$ vercel-env (-v|--version|version)
@kykungz/vercel-env/1.0.5 darwin-x64 node-v10.20.1
$ vercel-env --help [COMMAND]
USAGE
  $ vercel-env COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vercel-env development [FILE]`](#vercel-env-development-file)
* [`vercel-env help [COMMAND]`](#vercel-env-help-command)
* [`vercel-env preview [FILE]`](#vercel-env-preview-file)
* [`vercel-env production [FILE]`](#vercel-env-production-file)

## `vercel-env development [FILE]`

Deploy environment variables to Development environment

```
USAGE
  $ vercel-env development [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ vercel-env development ./.env.development
```

_See code: [src/commands/development.ts](https://github.com/kykungz/vercel-env/blob/v1.0.5/src/commands/development.ts)_

## `vercel-env help [COMMAND]`

display help for vercel-env

```
USAGE
  $ vercel-env help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `vercel-env preview [FILE]`

Deploy environment variables to Preview environment

```
USAGE
  $ vercel-env preview [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ vercel-env preview ./.env.preview
```

_See code: [src/commands/preview.ts](https://github.com/kykungz/vercel-env/blob/v1.0.5/src/commands/preview.ts)_

## `vercel-env production [FILE]`

Deploy environment variables to Production environment

```
USAGE
  $ vercel-env production [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ vercel-env production ./.env.production
```

_See code: [src/commands/production.ts](https://github.com/kykungz/vercel-env/blob/v1.0.5/src/commands/production.ts)_
<!-- commandsstop -->
