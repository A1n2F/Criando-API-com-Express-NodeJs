import { Request, Response } from "express"
import { AppError } from "../utils/app-error"

export class ProductsController {
    index(request: Request, response: Response) {
        const {page, limit} = request.query

        response.send(`Page ${page} de ${limit}`)
    }

    create(request: Request, response: Response) {
        const {name, price} = request.body

        if(!name) {
            throw new AppError("Nome do produto é obrigatório!")
        }

        if(!price) {
            throw new AppError("Preço do produto é obrigatório!")
        }
        
        if(price < 0) {
            throw new AppError("Preço do produto não pode ser menor que zero!")
        }
        // throw new AppError("Erro ao criar um produto!")

        response.status(201).json({ name, price, user_id: request.user_id })
    }
}