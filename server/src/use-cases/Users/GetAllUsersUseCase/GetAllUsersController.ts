import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";

export class GetAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
    try {
      const users = await getAllUsersUseCase.execute();
      return response.status(200).json(users);
    } catch (error) {
      if(error instanceof Error) {
        return response.status(400).json({ error: error.message });
    }
    return response.status(500).json({ error: "Unknown error" });
}
  }
}