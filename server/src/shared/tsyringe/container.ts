import { container } from 'tsyringe';
import { PrismaUsersRepository } from '../../repositories/prisma/PrismaUsersRepository';
import { IUsersRepository } from '../../repositories/UsersRepository';

container.registerSingleton<IUsersRepository>("UsersRepository", PrismaUsersRepository);