import { jsdom } from 'jsdom';

const { window } = new jsdom.JSDOM('<!doctype html><html><body></body></html>', {
  url: "http://127.0.0.1:5500/",
});

// Ajout des objets globaux pour la compatibilité avec les tests
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.Node = window.Node;
global.HTMLElement = window.HTMLElement;
global.HTMLInputElement = window.HTMLInputElement;
