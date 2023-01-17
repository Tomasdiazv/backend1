class ProductManager {

    constructor() {
        this.products = []
    }

    addProduct(title, description, code) {
        if (title && description && code) {
            const isExistCode = this.products.map(p => p.code).includes(code);
            if (isExistCode) {
                console.log('codigo existente')
            }else {
                this.products.push({
                    id: this.products.length,
                    title,
                    description,
                    code
                })
            }
        }else {
            console.log('Falto ingresar alguno de los valores')
        }
    }
}

module.exports = ProductManager
