import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserByUserNameUseCase } from "./GetUserByUserNameUseCase";


export class GetUserByUsernameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;
    const getUserByUsernameUseCase = container.resolve(GetUserByUserNameUseCase);
    try {
      const user = await getUserByUsernameUseCase.execute(username);
      return response.status(200).json(user);
    } catch (error) {
      if(error instanceof Error) {
        return response.status(400).json({ error: error.message });
    }
    return response.status(500).json({ error: "Unknown error" });
}
  }
}