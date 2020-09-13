import express from 'express';
const app = express.Router();

const question = {
  _id: 1,
  title: 'Pregunta numero 1',
  description: 'asdasdasdasd',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    firstName: 'oscar',
    lastName: 'saavedra',
    email: 'correo@correo.com',
    password: '12312312'
  }
}

const questions = new Array(10).fill(question);

app.get('/', (req, res) => {
  res.status(200).json(questions)

});

app.get('/:id', (req, res) => {
  res.status(200).json(question)
});


export default app;
