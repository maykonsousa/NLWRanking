import { inject, injectable } from "tsyringe";
import { IDataUserModel, IUsersRepository } from "../../../repositories/UsersRepository";

@injectable()
export class GetUserByUserNameUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute(username: string): Promise<IDataUserModel> {
    const user = await this.usersRepository.getByUsername(username);
    if(!user){
      throw new Error("User not found");
    };
    return user;
  }
}