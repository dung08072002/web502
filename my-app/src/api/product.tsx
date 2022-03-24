import { IProduct } from "../types/product";
import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}

export const remove = (id: string) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const add = (product: IProduct) => {
    const url = "/products";
    return instance.post(url, product);
}

export const edit = (product: IProduct) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}