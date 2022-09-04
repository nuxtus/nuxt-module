import Generator from '@nuxtus/generator'
import { useBody } from 'h3'

export default async (event) => {
  if (process.env.NODE_ENV !== 'production') {
    const body = await useBody(event)
    const nuxtus = new Generator()
    try {
      const collection = body.collection
      await nuxtus.createPage(collection, body.singleton)
    } catch (err) {
      console.error(err.message)
      throw new Error('Unable to create page: ' + err.message)
    }
    return {
      api: 'ok'
    }
  }
}
