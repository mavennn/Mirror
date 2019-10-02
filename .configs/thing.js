class Thing {
    constructor ({ brand, color, price, title , size, barcode, vendorcode, img_base64, availableSizes, availableColors}) {
        this._title = title;
        this._price = price;
        this._vendorcode = vendorcode;
        this._brand = brand;
        this._size = size;
        this._barcode = barcode;
        this._color = color;
        this._img_base64 = img_base64;
        this._availableColors = availableColors;
        this._availableSizes = availableSizes;
    }
    
    get title () {
        return this._title;
    }

    get price () {
        return this._price;
    }

    get vendorcode() {
        return this._vendorcode;
    }

    get brand () {
        return this._brand;
    }

    get size () {
        return this._size;
    }

    get color () {
        return this._color;
    }

    get img_base64 () {
        return this._img_base64;
    }

    get barcode () {
        return this._barcode;
    }

    get availableSizes () {
        return this._availableSizes;
    }

    get availableColors () {
        return this._availableColors;
    }
};

export default Thing;