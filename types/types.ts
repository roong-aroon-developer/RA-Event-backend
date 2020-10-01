export interface IResponse {
    status: "success" | "failed",
    data: object | string
}