import Router from "express";

import AppController from "../controllers/AppController.js";

const appRouter = new Router();

appRouter.get("/", AppController.index)
appRouter.get("/ping", AppController.ping)

export default appRouter;