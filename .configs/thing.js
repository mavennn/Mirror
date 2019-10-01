class Thing {
    constructor ({ brand, color, price, title , size, barcode, vendorcode, img_base64, availableSizes, availableColors}) {
        this.title = title;
        this.price = price;
        this.vendorcode = vendorcode;
        this.brand = brand;
        this.size = size;
        this.barcode = barcode;
        this.color = color;
        this.img_base64 = img_base64;
        this.availableColors = availableColors;
        this.availableSizes = availableSizes;
    }
    
    get _title () {
        return this.title;
    }

    get _price () {
        return this.price;
    }

    get _vendorcode() {
        return this.vendorcode;
    }

    get _brand () {
        return this.brand;
    }

    get _size () {
        return this.size;
    }

    get _color () {
        return this.color;
    }

    get _img_base64 () {
        return this.img_base64;
    }

    get _barcode () {
        return this.barcode;
    }

    get _availableSizes () {
        return this.availableSizes;
    }

    get _availableColors () {
        return this._availableColors;
    }
};

export default Thing;