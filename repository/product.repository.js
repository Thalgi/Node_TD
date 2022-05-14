import { ProductModel } from "../model/product.model.js";

export class ProductRepository {

    get() {
        return new Promise((resolve, reject) => {
            ProductModel.find({}, (err, products) => {
                //console.log("getREPO", products);
                if (err) {
                    reject(err);
                } else {
                    resolve(products.map(p => p.toObject()))
                }
            });
        });
    }

    getOne(id) {
        return new Promise((resolve, reject) => {

            ProductModel.findById(id, (err, product) => {
                // console.log("getREPO", product);
                if (err) {
                    reject(err);
                } else {
                    resolve(product.toObject())
                }
            })
        });
    }

    create(product) {
        return new Promise((resolve, reject) => {
            ProductModel.create(product, (err, newProduct) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(newProduct.toObject());
                }
            });
        });
    }

    update(id, product) {
        return new Promise((resolve, reject) => {
            ProductModel.findByIdAndUpdate(id, product, (err, UpProduct) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(UpProduct.toObject());
                }
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            ProductModel.findByIdAndDelete(id, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }



    // update(id, product) {
    //         return new Promise((resolve, _reject) => {
    //                 const produit_a_changer = {...product,
    //                     id
    //                 };
    //                 resolve(this.products.map((p) =>
    //                 });
    //             }
}