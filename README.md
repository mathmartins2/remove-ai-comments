<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Nest Comment Cleaner

A CLI tool built with NestJS that scans files and safely removes comment lines.

## Features

- Remove comment lines from files or directories
- Support for multiple file types (.ts, .js, .jsx, .tsx)
- Optional file backup before modifications
- Dry run mode to preview changes without modifying files
- Detailed logs of processed files and comment counts

## Installation

### Option 1: Install from NPM (when published)

```bash
# Install globally
npm install -g nest-comment-cleaner

# Or use with pnpm
pnpm add -g nest-comment-cleaner

# Or use directly with npx
npx nest-comment-cleaner [options]
```

### Option 2: Build and install from source

```bash
# Clone the repository
git clone https://github.com/yourusername/nest-comment-cleaner.git
cd nest-comment-cleaner

# Install dependencies
npm install
# or with pnpm
pnpm install

# Build the project
npm run build
# or with pnpm
pnpm run build

# Install globally from local folder
npm install -g .
# or with pnpm
pnpm install -g .
```

### Option 3: For development (using symlink)

```bash
# Clone the repository
git clone https://github.com/yourusername/nest-comment-cleaner.git
cd nest-comment-cleaner

# Install dependencies
npm install
# or with pnpm
pnpm install

# Build the project
npm run build
# or with pnpm
pnpm run build

# Create a symlink to the package
npm link
# or with pnpm
pnpm link --global
```

After installation, you can use the command `nest-comment-cleaner` from any directory.

## Usage

```bash
# Process a single file
nest-comment-cleaner src/index.ts

# Process a directory
nest-comment-cleaner src/

# Process files matching a glob pattern
nest-comment-cleaner "src/**/*.ts"

# Create backups before modifying
nest-comment-cleaner src/ --backup

# Preview changes without modifying files
nest-comment-cleaner "src/**/*.ts" --dry-run
```

## Options

- `--backup` (`-b`): Create backup files (.bak) before modifying
- `--dry-run` (`-d`): Show what would be done without modifying files

## Supported File Types

- TypeScript (.ts)
- JavaScript (.js)
- JSX (.jsx)
- TSX (.tsx)

## Development

To make changes to the code:

```bash
# Clone the repository
git clone https://github.com/yourusername/nest-comment-cleaner.git
cd nest-comment-cleaner

# Install dependencies
npm install
# or 
pnpm install

# Make your changes to the code...

# Build the project
npm run build
# or
pnpm run build

# Test locally without installing
node dist/src/main.js clean path/to/file.ts

# Or use npm link for development
npm link
# then use anywhere
nest-comment-cleaner [options]
```

## Uninstalling

```bash
# If installed globally
npm uninstall -g nest-comment-cleaner
# or
pnpm uninstall -g nest-comment-cleaner

# If linked for development
npm unlink nest-comment-cleaner
# or
pnpm unlink --global nest-comment-cleaner
```

## License

[MIT](LICENSE)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
