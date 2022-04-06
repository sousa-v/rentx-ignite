import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const refreshtokenUseCase = container.resolve(RefreshTokenUseCase);

    const token = await refreshtokenUseCase.execute();
    return response.send();
  }
}

export { RefreshTokenController };
