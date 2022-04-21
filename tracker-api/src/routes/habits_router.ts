import express from 'express';
import controller from '../controllers/habits_controller';
const router = express.Router();

router.get('/', controller.getHabits);
// router.get('/posts/:id', controller.getPost);
// router.put('/posts/:id', controller.updatePost);
// router.delete('/posts/:id', controller.deletePost);
// router.post('/posts', controller.addPost);

export = router;
