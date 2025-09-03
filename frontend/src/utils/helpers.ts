export function httpSuccess(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 300;
}
