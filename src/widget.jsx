import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import "./App.css";


class TouristRoutesApp extends HTMLElement {
    connectedCallback() {
        if (this.reactRoot) {
            return;
        }

        const mountPoint = document.createElement("div");
        mountPoint.className = "react-app-root";
        this.append(mountPoint);

        this.reactRoot = createRoot(mountPoint);
        this.reactRoot.render(
            <StrictMode>
                <MemoryRouter>
                    <App
                        onCatalogChange={(detail) => {
                            this.dispatchEvent(
                                new CustomEvent("catalog-change", {
                                    detail,
                                    bubbles: true,
                                    composed: true
                                })
                            );
                        }}
                    />
                </MemoryRouter>
            </StrictMode>
        );
    }

    disconnectedCallback() {
        this.reactRoot?.unmount();
        this.reactRoot = null;
        this.replaceChildren();
    }
}


if (!customElements.get("tourist-routes-app")) {
    customElements.define("tourist-routes-app", TouristRoutesApp);
}
