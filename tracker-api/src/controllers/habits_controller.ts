// import { Config } from '../utils/config';
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Habit {
    id: Number | null;
    habit: String;
    streakActive: boolean;
    streak: Number | null;
}

// const BASE_URL: string = Config.BASE_URL;
const BASE_URL: string = 'http://localhost:3000';

const getHabits = async (req: Request, res: Response, next: NextFunction) => {
    const result: AxiosResponse = await axios.get(`${BASE_URL}/habits`);
    const habits: [Habit] = result.data;
    return res.status(200).json({
        message: habits
    });
};

// // getting a single post
// const getPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req
//     let id: string = req.params.id;
//     // get the post
//     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     let post: Post = result.data;
//     return res.status(200).json({
//         message: post,
//     });
// };

// // updating a post
// const updatePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from the req.params
//     let id: string = req.params.id;
//     // get the data from req.body
//     let title: string = req.body.title ?? null;
//     let body: string = req.body.body ?? null;
//     // update the post
//     let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         ...(title && { title }),
//         ...(body && { body }),
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data,
//     });
// };

// // deleting a post
// const deletePost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the post id from req.params
//     let id: string = req.params.id;
//     // delete the post
//     let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     // return response
//     return res.status(200).json({
//         message: 'post deleted successfully',
//     });
// };

// // adding a post
// const addPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the data from req.body
//     let title: string = req.body.title;
//     let body: string = req.body.body;
//     // add the post
//     let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
//         title,
//         body,
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data,
//     });
// };

export default {
    getHabits
};
