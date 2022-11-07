import { prisma } from "../../prisma";
import { IDataUserModel, IUserCreateData, IUsersRepository } from "../UsersRepository";



export class PrismaUsersRepository implements IUsersRepository {
    
  async create({  username}: IUserCreateData): Promise<IDataUserModel> {
    const user = await prisma.users.create({
      data:{
        username,
      }
    }).then((user) => user );

    return user;
  }

  async getAll(): Promise<IDataUserModel[]> {
    const Users = await prisma.users.findMany().then((Users: IDataUserModel[]) => Users as IDataUserModel[]);
    return Users;
  }



  async getByUsername(username: string): Promise<IDataUserModel> {
    const user = await prisma.users.findFirst({where: { username }}) as IDataUserModel;
    return user;
  }
 
}