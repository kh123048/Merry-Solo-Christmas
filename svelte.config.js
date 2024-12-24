import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        if (path === '/favicon.png') {
          // 오류 무시
          return;
        }
        console.error('Error prerendering', path, message);
      }
    }
  }
};

export default config;
