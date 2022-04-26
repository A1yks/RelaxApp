export function isServiceError(res: Services.Error | unknown): res is Services.Error {
    return (res as Services.Error).error !== undefined;
}
