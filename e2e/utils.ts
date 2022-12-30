

/**
 * Waits for a specified time.
 * Use it cautiously & only for webview UI elements
 */
export async function sleep(milliseconds: number) {
    return new Promise((resolve: any) => setTimeout(resolve, milliseconds));
}