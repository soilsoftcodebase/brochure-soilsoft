// server/logger.ts
export function logError(message: string, error?: any) {
  console.error(`[ERROR] ${message}`, error || '');
  
  // You can add additional logging here if needed
  // For example, sending logs to a service in production
}

export function logInfo(message: string) {
  console.log(`[INFO] ${message}`);
}

export function logRequest(req: any, res: any, message: string) {
  console.log(`[REQUEST] ${req.method} ${req.path} - ${res.statusCode} - ${message}`);
}
