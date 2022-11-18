Changelog

# [2.0.0](https://github.com/nuxtus/nuxt-module/compare/v1.3.1...v2.0.0) (2022-11-18)


### Build System

* Bumping version number ([9dc9e82](https://github.com/nuxtus/nuxt-module/commit/9dc9e82047e02dd4a7b2a95228cf57d3b94fe906))


### BREAKING CHANGES

* Directus credentials are now stored in different variable names in nuxt.config.ts and .env

## [1.3.1](https://github.com/nuxtus/nuxt-module/compare/v1.3.0...v1.3.1) (2022-11-18)


### Bug Fixes

* :bug: Update runtime config to be compatible with Nuxt 3.0.0 ([9526312](https://github.com/nuxtus/nuxt-module/commit/9526312de802c04ba8601b647cb8fb839a2b651e))


### BREAKING CHANGES

* Name of Directus credentials changed in nuxt.config.ts and .env

# [1.3.0](https://github.com/nuxtus/nuxt-module/compare/v1.2.1...v1.3.0) (2022-11-17)


### Bug Fixes

* :bug: Remove h3 related warnings ([f50421c](https://github.com/nuxtus/nuxt-module/commit/f50421c42892d1589a3790b006f434d31ef44cbd))
* :bug: Replace deprecated useBody with readBody ([1ce5e2f](https://github.com/nuxtus/nuxt-module/commit/1ce5e2fe6c6b6bc50af1e290c8ba16bd615f316a))


### Features

* :sparkles: Nuxt 3.0.0 compatibility added ([5746813](https://github.com/nuxtus/nuxt-module/commit/5746813db8b5bce6430dbf213276af842e74f043))

## [1.2.1](https://github.com/nuxtus/nuxt-module/compare/v1.2.0...v1.2.1) (2022-11-10)


### Bug Fixes

* :bug: Update to Nuxtus 3.0.0-rc.13 ([7f95735](https://github.com/nuxtus/nuxt-module/commit/7f957358f17154107dae8c2072f083037cf63f45))

# [1.2.0](https://github.com/nuxtus/nuxt-module/compare/v1.1.0...v1.2.0) (2022-09-08)


### Features

* :sparkles: Nuxt pages are deleted when DIrectus Collections are deleted. ([b736344](https://github.com/nuxtus/nuxt-module/commit/b736344d3cf885cd9063bd11a0409f7aec141ad2))

# [1.1.0](https://github.com/nuxtus/nuxt-module/compare/v1.0.5...v1.1.0) (2022-09-06)


### Features

* :sparkles: add delete endpoint ([f8104bd](https://github.com/nuxtus/nuxt-module/commit/f8104bd602dc13efe31ef63df836ca1c6c9ba99c))

## [1.0.5](https://github.com/nuxtus/nuxt-module/compare/v1.0.4...v1.0.5) (2022-09-06)


### Bug Fixes

* :bug: await the create page response to property report error ([db84f74](https://github.com/nuxtus/nuxt-module/commit/db84f744837af67c4688e5b37ade3a38ad37cbbc))

## [1.0.4](https://github.com/nuxtus/nuxt-module/compare/v1.0.3...v1.0.4) (2022-08-29)


### Bug Fixes

* :bug: do not attempt login if using static token ([0ac9513](https://github.com/nuxtus/nuxt-module/commit/0ac95134ba549d71ed20a4d1c58708aab5e258b5))

## [1.0.3](https://github.com/nuxtus/nuxt-module/compare/v1.0.2...v1.0.3) (2022-07-28)


### Bug Fixes

* :bug: use #imports to access useDirectusAuth ([e55220e](https://github.com/nuxtus/nuxt-module/commit/e55220e1dcac457837d44746876f619d255cf692))

## [1.0.2](https://github.com/nuxtus/nuxt-module/compare/v1.0.1...v1.0.2) (2022-07-27)


### Bug Fixes

* :arrow_up: upgrade @nuxtus/generator ([bbe0c76](https://github.com/nuxtus/nuxt-module/commit/bbe0c76933c6bf19df400c036e7ab57ba5d3de0b))
* :memo: incorrect reference to [@nuxt](https://github.com/nuxt) in readme ([6ae10c0](https://github.com/nuxtus/nuxt-module/commit/6ae10c039512c42b07cd9354af0f0bfef5271c1c))

## [1.0.1](https://github.com/nuxtus/nuxt-module/compare/v1.0.0...v1.0.1) (2022-07-26)


### Bug Fixes

* :green_heart: update readme to trigger CICD build ([30de635](https://github.com/nuxtus/nuxt-module/commit/30de635795baad0d35101fa47c17578060c1c750))

# 1.0.0 (2022-07-25)


### Features

* :sparkles: nuxt plugin to authenticate with Directus ([fb0b40d](https://github.com/nuxtus/nuxt-module/commit/fb0b40d3ad81846d9c0bc87b87dbdf0a1c148c8f))
