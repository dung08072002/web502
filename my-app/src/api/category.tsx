import { TypeCategory } from "../types/category";
import instance from "./instance";

export const listCate = () => {
    const url = "/categories";
    return instance.get(url)
}

export const oneCate = (slug: string | undefined) => {
    const url = `/category/${slug}`;
    return instance.get(url)
}

export const removeCate = (slug : string ) => {
    const url = `/category/${slug}`;  
    return instance.delete(url);
}

export const editCate = (categories : TypeCategory) => {
    const url = `/categories/${categories.slug}/edit`;
    return instance.patch(url, categories)
}

export const addCate = (categories : TypeCategory) => {
    const url = "/category";
    return instance.post(url, categories)
}