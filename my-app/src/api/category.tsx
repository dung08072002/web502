import instance from "./instance";

export const listCate = () => {
    const url = "/categories";
    return instance.get(url)
}

export const oneCate = () => {
    const url = "/category/:id";
    return instance.get(url)
}