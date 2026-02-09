import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["apps/**/src/**/*.test.ts"],
        exclude: ["**/node_modules/**", "**/dist/**"],
        environment: "node",
        globals: true,
        coverage: {
            provider: "v8",
            reporter: ["text", "html", "lcov"],
            reportsDirectory: "coverage",
            include: ["apps/**/src/**/*.ts"],
            exclude: [
                "**/*.d.ts",
                "**/dist/**",
                "**/node_modules/**",
                "**/src/**/*.test.ts",
            ],
        },
    },
});
