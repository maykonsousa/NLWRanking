import axios from "axios";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../repositories/UsersRepository";

interface IRanking {
  id?: string;
  username?: string;
  count?: number | string;
  createdAt?: Date;
  updatedAt?: Date;

}

@injectable()
export class GetAllRankingUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

   

  async execute(): Promise<IRanking[]> {
    const allUsers = await this.usersRepository.getAll();
    
    const ranking =  Promise.all(allUsers.map( async (user) => {
   
      const url = `https://skylab-api.rocketseat.com.br/public/event/nlw-copa/referral/${user.username}`
      
       const  count = await axios.get(url).then(response => response.data.totalCount).catch(()=>"Falha ao recuperar. Verifique o ticket")
     

     return {
        id: user.id,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        count: count
     }
  
    }))
   

    return (await ranking).sort((a, b) => b.count - a.count);
  }
}
