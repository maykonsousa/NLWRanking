import { inject, injectable } from "tsyringe";
import { IDataUserModel, IUsersRepository } from "../../../repositories/UsersRepository";

@injectable()
export class GetAllUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<IDataUserModel[]> {
    const users = await this.usersRepository.getAll();
    return users;
  }
}