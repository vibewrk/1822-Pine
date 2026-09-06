import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const cli = resolve(repoRoot, "node_modules/next/dist/bin/next");

if (!existsSync(cli)) {
  console.error(`Next CLI not found at ${cli}. Run 'npm ci' first.`);
  process.exit(2);
}

const result = spawnSync(process.execPath, [cli, "build", "--webpack"], {
  stdio: "inherit",
  cwd: repoRoot,
  env: {
    ...process.env,
    CI: "1",
    NEXT_TELEMETRY_DISABLED: "1",
  },
});

if (result.error) {
  console.error("Failed to execute Next CLI:", result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
