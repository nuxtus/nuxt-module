# Nuxtus Nuxt Module

The Nuxtus Nuxt module provides Nuxt applications with a suite of tools that make dealing with Directus and Nuxt easier. This includes endpoints for automatically adding Directus collections to Nuxt, typing these collections and an automatic authentication plugin.

It can be used independently but was built for the [Nuxtus Boilerplate](https://github.com/nuxtus/nuxtus) which creates a Directus/Nuxt project with one command and is the recommended way to use this Nuxt module. Alternatively you can set up an existing Nuxt project by following the [Getting Started](#getting-started) instructions below.

## Getting started

```bash
npm install nuxt-directus
npm install --save-dev @nuxt/nuxt-module
```

In your nuxt.config.ts file add the modules:

```typescript
{
  modules: [
    'nuxt-directus',
    '@nuxtjs/nuxt-module',
  ],
}
```

We suggest installing the [Nuxtus hook for Directus](https://github.com/nuxtus/hook) to configure the Directus hooks that will automatically call the endpoints created by this module.

## Configuration

You must have a working and configured `nuxt-directus` module first. For details on configuring `nuxt-directus` see [the projects documentation](https://www.npmjs.com/package/nuxt-directus).

The nuxt module can be configured using the `nuxtus` property within `nuxt.config.ts`:

```typescript
{
  modules: [
    'nuxt-directus',
    '@nuxtjs/nuxt-module',
  ],
  nuxtus: {
    // nuxtus options here
  }
}
```

### Config options


| Option                              | Description                       | Default value                   |
|-----------------------------------|-----------------------------------|-----------------------------------|
| `authDirectus`                            | By default Nuxtus will try and authenticate to Directus. If your API is public you can set this to false to skip the login step.       | true


## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
