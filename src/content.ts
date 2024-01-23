import type { ComponentType } from 'svelte';
(async function () {
    type Module = { default: ComponentType };
    const module: Module = await import(chrome.runtime.getURL('component.js'));
    new module.default({
        target: document.body,
        props: {
            configuration: {
                collections: ["fall236100_parker"],
                askEndpoint: "http://127.0.0.1:5000/ask",
                addEndpoint: "http://127.0.0.1:5000/addtodb",
                model: "gpt-3.5-turbo-16k"
            }
        }
    })
})()