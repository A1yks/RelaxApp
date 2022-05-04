export function isServiceError(res: Service.Error | unknown): res is Service.Error {
    return (res as Service.Error).error !== undefined;
}
