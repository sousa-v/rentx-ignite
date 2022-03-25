import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUSerController";

const autheticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

autheticateRoutes.post("/sessions", authenticateUserController.handle);

export { autheticateRoutes };
