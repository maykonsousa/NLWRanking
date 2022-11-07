import axios from "axios";
import { inject, injectable } from "tsyringe";
import { IDataUserModel, IUserCreateData, IUsersRepository } from "../../../repositories/UsersRepository";


@injectable()
export class CreateUserUseCase {
  constructor( 
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ){}

  async execute({username}: IUserCreateData): Promise<IDataUserModel> {
    
    if(!username) throw new Error("Usuário não informado");
    
    const userAlreadyExists = 
    await this.usersRepository.getByUsername(username) 

    const url = `https://skylab-api.rocketseat.com.br/public/event/nlw-copa/referral/${username}`
      
    const  userIsValid = await axios.get(url).then(response => response.data).catch(() => null);
    
    if(userAlreadyExists) throw new Error("Usuário já existe");
    if(!userIsValid) throw new Error("Usuário inválido");


    const user = await this.usersRepository.create({
      username, 
      });
    return user;
}
}