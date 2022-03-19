import instance from "./instance";

export const list = () => {
    const url = "/categories";
    return instance.get(url)
}
