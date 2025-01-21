import { create } from "zustand";
import { Api } from "../services/api-client";
import { getCartDetails } from "../lib";
import { CartStateItem } from "../lib/get-cart-details";

//настройка Zustand 



export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];
    // Получение товаров из карзины
    fetchCartItems: ()=> Promise<void>;
 
    //звпрос на обновление кол-во товаров
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;
    
    // запрос на добавление товара в карзину
    addCartItem: (values: any ) => Promise<void>; 
   
   // запрос на удаление товара в карзину
    removeCartItem: (id: number) => Promise<void>;
}


export const userCartStore = create<CartState> ((set, get) =>({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,


    fetchCartItems: async () =>{
        try {
            set({loading: true, error: false});
            const data = await Api.cart.getCart();
            set(getCartDetails(data));
        } catch (error) {
            console.error(error);
            set({error: true});
        }
        finally {
            set({loading: false});
        }
    },
    
    updateItemQuantity: async (id: number, quantity: number) =>{
        try {
            set({loading: true, error: false});
            const data = await Api.cart.updateItemQuantity(id, quantity);
            set(getCartDetails(data));
        } catch (error) {
            console.error(error);
            set({error: true});
        }
        finally {
            set({loading: false});
        }
    },

    removeCartItem: async (id: number) =>{},
    addCartItem: async (values: any) =>{},
    
}));