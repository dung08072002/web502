import { TypeUser } from "../types/user";
import instance from "./instance";

export const signup = (user : TypeUser | undefined) => {
    const url = "/signup";
    return instance.post(url,user);
}

export const signin = (user: TypeUser | undefined) => {
    const url = "/signin";
    return instance.post(url,user);
}