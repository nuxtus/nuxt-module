# Nuxt Module

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
