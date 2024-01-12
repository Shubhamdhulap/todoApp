const express = require('express')
const path = require('path')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const app = express()

const dbPath = path.join(__dirname, 'car.db')

let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000)
  } catch (e) {
    process.exit(1)
  }
}

initializeDBAndServer()

app.get('/cars/area', async (request, response) => {
  const {area} = request.params
  const getCarsQuery = `SELECT * From car where location = ${area}`
  const car = await db.all(getCarsQuery)
  response.send(car)
})

app.post('/cars', async (request, response) => {
  const {clientName, location, carName} = carDetails
  const addCarQuery = ` INSERT INTO 
    car (clientName, location, carName, )
    VALUES ('${clientName}', '${location}', '${carName}' );`
  const dbResponse = await db.run(addCarQuery)
  const carId = dbResponse.lastID
  response.send({carId})
})
