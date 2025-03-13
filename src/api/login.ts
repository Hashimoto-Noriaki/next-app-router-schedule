import { LoginInfoType, LoginReturnType } from "../types/login";

export const login = async (info: LoginInfoType): Promise<LoginReturnType> => {
    const { email, password } = info;
    if (email === "pochi@example.com" && password === "pochi") {
        return { id: 1, name: "ポチ" };
    } else {
    throw new Error("Invalid email or password");
}
};
