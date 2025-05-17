// client/src/lib/diagnostics.ts
export async function checkApiConnection() {
  try {
    const response = await fetch('/api/company');
    if (response.ok) {
      console.log('API connection successful:', await response.json());
      return { success: true, data: await response.json() };
    } else {
      console.error('API connection failed:', response.status, response.statusText);
      return { success: false, status: response.status, statusText: response.statusText };
    }
  } catch (error) {
    console.error('API connection error:', error);
    return { success: false, error: String(error) };
  }
}

export function getEnvironmentInfo() {
  return {
    isProd: import.meta.env.PROD,
    isDev: import.meta.env.DEV,
    mode: import.meta.env.MODE,
    baseUrl: window.location.origin
  };
}
