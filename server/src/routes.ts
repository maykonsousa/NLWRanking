import express from 'express';
import { GetAllRankingController } from './use-cases/Ranking/GetAllRankingUseCase/GetAllRankingController';
import { CreateUserController } from './use-cases/Users/CreateUserUseCase/CreateUserController';
import { GetAllUsersController } from './use-cases/Users/GetAllUsersUseCase/GetAllUsersController';
import { GetUserByUsernameController } from './use-cases/Users/getUserByUsername/GetUserByUsernameController';



export const routes = express.Router();

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const getUserByUsernameController = new GetUserByUsernameController();
const getAllRankingController = new GetAllRankingController();



routes.post('/users', createUserController.handle);
routes.get('/users', getAllUsersController.handle);
routes.get('/users/:username', getUserByUsernameController.handle);
routes.get('/ranking', getAllRankingController.handle);




