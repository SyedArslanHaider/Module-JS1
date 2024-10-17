// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
const dir = filePath.slice(0, lastSlashIndex);
const lastDotIndex = filePath.lastIndexOf(".");
const ext = filePath.slice(lastDotIndex + 1);

console.log(`The base part of ${filePath} is ${base}`);
console.log(`The directory part of ${filePath} is ${dir}`);
console.log(`The extension part of ${filePath} is ${ext}`);
