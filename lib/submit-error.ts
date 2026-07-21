export async function getSubmitErrorMessage(res: Response): Promise<string> {
  const fallback =
    "Something went wrong. Please try again or call us on 020 7123 4567.";

  try {
    const data = (await res.json()) as { error?: string };
    if (data?.error) {
      return `${data.error} Or call us on 020 7123 4567.`;
    }
  } catch {
    // ignore JSON parse errors
  }

  return fallback;
}
