export async function fetchNewExcuse(): Promise<string> {
  const response = await fetch('/api/no');
  if (!response.ok) {
    throw new Error('Failed to fetch excuse');
  }
  const data = await response.json();
  return data.reason;
}
