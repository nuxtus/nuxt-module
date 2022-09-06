import Generator from '@nuxtus/generator'
import { useBody } from 'h3'

export default async (event) => {
  if (process.env.NODE_ENV !== 'production') {
    const body = await useBody(event)
    const nuxtus = new Generator()
    try {
      const collection = body.collection
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
}
