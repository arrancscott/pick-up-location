const request = require('supertest')
const app = require('../app')
const axios = require('axios')
jest.mock('axios')

test('it returns all the locations that match', async (done) => {
  axios.get.mockImplementation(jest.fn(() => {
    return Promise.resolve({
      data: {
        results: {
          docs: [{ name: 'Manchester Airport' }]
        }
      }
    })
  }))
  const response = await request(app)
    .get('/api/v1/locations/manchester?count=1')
  expect(response.body.length).toBe(1)
  done()
})

test("it returns 'No results found' if nothing is found", async (done) => {
  axios.get.mockImplementation(jest.fn(() => {
    return Promise.resolve({
      data: {
        results: {
          docs: [{ name: 'No results found' }]
        }
      }
    })
  }))
  const response = await request(app)
    .get('/api/v1/locations/abcdefghijklmnopqrstuvwxyz')
  expect(response.body[0].name).toBe('No results found')
  done()
})
