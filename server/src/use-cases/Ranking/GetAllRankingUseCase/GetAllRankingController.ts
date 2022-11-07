import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllRankingUseCase } from "./GetAllRankingUseCase";

export class GetAllRankingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllRankingUseCase = container.resolve(GetAllRankingUseCase);

    try {
      const ranking = await getAllRankingUseCase.execute();
      return response.json(ranking);
    } catch  {
      return response.status(400).json({ error: "Deu erro na rocket" });
    }
    
  }
}