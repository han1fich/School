const requiredPackages = ['@firebase/app'];

const missing = [];
for (const pkg of requiredPackages) {
  try {
    await import(pkg);
  } catch {
    missing.push(pkg);
  }
}

if (missing.length > 0) {
  console.error('\n❌ Missing required npm dependencies:');
  for (const pkg of missing) {
    console.error(`  - ${pkg}`);
  }
  console.error('\nFix: run `npm install` (or `npm install firebase`) and restart `npm run dev`.\n');
  process.exit(1);
}
