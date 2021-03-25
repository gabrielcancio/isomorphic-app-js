import { database } from "../shared/data.mjs";

;(async () => {
  const path = globalThis.window ? 'browser' : 'console';
  const { default: ViewFactory } = await import(`../platforms/${path}/index.mjs`);

  console.log(path);

  const app = new ViewFactory();
  app.render(database);
})();