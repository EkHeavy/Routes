import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";


export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "angular-app/public/react-widget",
        emptyOutDir: true,
        lib: {
            entry: fileURLToPath(new URL("./src/widget.jsx", import.meta.url)),
            name: "TouristRoutesReactApp",
            formats: ["es"],
            fileName: () => "tourist-routes.js",
            cssFileName: "tourist-routes"
        }
    }
});
