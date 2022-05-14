export class ProductController {

    repository = undefined


    constructor(repository) {
        this.repository = repository;
    }

    getAll(req, res) {

        this.repository
            .get()
            .then((products) => {
                res.render('index', { products })
            })
            .catch((error) => {
                console.log("Getall_ERR :", error)
            })

    }

    getOne(req, res) {
        this.repository
            .getOne(req.params.id)
            .then((product) => {
                res.render('product', { product })
            })
            .catch((error) => {
                console.log("Getone_ERR :", error)
            })
    }

    createOne(req, res) {
        res.render('form', { product: {} })
    }

    create(req, res) {
        this.repository.create(req.body)
            .then(() => {
                res.redirect('/')
            })
            .catch((error) => {
                console.log("Create_ERR :", error)
            })
    }

    edit(req, res) {
        this.repository
            .getOne(req.params.id)
            .then((product) => {
                res.render('edit', { product })
            })
            .catch((error) => {
                console.log("Getone_ERR :", error)
            })
    }

    update(req, res) {
        this.repository.update(req.params.id, req.body)
            .then(() => {
                res.redirect('/')
            })
            .catch((error) => {
                console.log("Create_ERR :", error)
            })
    }

    delete(req, res) {
        console.log("ON EST LA")
        this.repository
            .delete(req.params.id)
            .then(() => {
                res.redirect('/')
            })
            .catch((error) => {
                console.log("Getone_ERR :", error)
            })
    }
}