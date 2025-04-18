const { Router } = require('express');
const snackRouter = Router();
const snackController = require('../controllers/snacks');

snackRouter.get("/", snackController.index);
snackRouter.post("/", snackController.create);
snackRouter.get("/top", snackController.getTop);
snackRouter.get("/:id", snackController.show);
snackRouter.patch("/:id", snackController.update);
snackRouter.delete("/:id", snackController.destroy);

module.exports = snackRouter;
