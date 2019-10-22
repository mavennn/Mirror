import Swal from 'sweetalert2';

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';

export const addToBasket = thing => (dispatch, getState) => {
    const basketThings = getState().basketThings.basketThings;
    const indexOfThingInBasket = basketThings.findIndex(x => x.vendorcode === thing.vendorcode && x.size === thing.size);
    if (indexOfThingInBasket === -1) {
        dispatch({
            type: ADD_TO_BASKET,
            payload: {
                title: thing.title,
                barcode: thing.barcode,
                vendorcode: thing.vendorcode,
                color: thing.color,
                size: thing.size,
                count: 1,
                price: thing.price
            }
        });
        Swal.fire({
            title: 'Товар добавлен в корзину!',
            type: 'success',
            timer: '2000',
            customClass: {
                popup: 'alertContainer',
                title: 'alertTitle',
            }
        });
    } else {
        Swal.fire({
            title: 'Товар уже есть в корзине!',
            type: 'info',
            confirmButtonText: 'OK',
            customClass: {
                popup: 'alertContainer',
                title: 'alertTitle',
            }
        });
    }
};

export const removeFromBasket = (vendorcode, size) => (dispatch, getState) => {
    if (vendorcode && size) {
        const basketThings = getState().basketThings.basketThings;
        const indexOfThingInBasket = basketThings.findIndex(x => x.vendorcode === vendorcode && x.size === size);
        dispatch({ type: REMOVE_FROM_BASKET, payload: indexOfThingInBasket });
    }
};

export const clearBasket = () => ({
    type: CLEAR_BASKET,
    payload: []
});