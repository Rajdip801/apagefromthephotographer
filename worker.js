import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
    try {
        // Serve static assets from the Vite build output
        return await getAssetFromKV(event);
    } catch (err) {
        // Return a 404 response if the asset is not found
        return new Response('Not Found', { status: 404 });
    }
}