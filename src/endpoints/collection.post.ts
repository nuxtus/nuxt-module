import Generator from '@nuxtus/generator'
import { readBody } from 'h3'

async function deleteCollection (event) {
  // const body = await useBody(event)
  const nuxtus = new Generator()
  try {
    const collection: string = event.req.url.substring(1)
    await nuxtus.deletePage(collection)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message)
    throw new Error('Unable to delete page: ' + err.message)
  }
  return {
    api: 'ok'
  }
}

export default async (event) => {
  if (process.env.NODE_ENV !== 'production') {
    if (event.req.method === 'DELETE') {
      return deleteCollection(event)
    }

    const body = await readBody(event)
    const nuxtus = new Generator()
    try {
      const collection = body.collection
      await nuxtus.createPage(collection, body.singleton)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message)
      throw new Error('Unable to create page: ' + err.message)
    }
    return {
      api: 'ok'
    }
  }
}
