import { Router } from "express";

export function routes(controller) {
    const route = Router();

    route.get('/', (req, res) => controller.getAll(req, res));

    route.get('/delete/:id', (req, res) => controller.delete(req, res));

    route.get('/edit/:id', (req, res) => controller.edit(req, res));
    route.post('/update/:id', (req, res) => controller.update(req, res));

    route.get('/createOne', (req, res) => controller.createOne(req, res));
    route.post('/create', (req, res) => controller.create(req, res));

    route.get('/:id', (req, res) => controller.getOne(req, res));
    return route;
}