import { Request, Response, Router } from "express";
import userService from "./services/userService";
const router = Router();

class UserRouter implements IRouter {
  // eslint-disable-line
  get routes() {
    router.get("/", async (req: Request, res: Response) => {
      // eslint-disable-next-line no-useless-catch
      try {
        const quote = await userService.getRandomTest();
        return res.send(quote);
      } catch (err) {
        throw err;
      }
    });
    return router;
  }
}

export default new UserRouter();
