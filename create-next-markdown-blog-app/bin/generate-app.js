#! /usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("npx create-next-markdown-blog-app my-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const GIT_REPO = "https://github.com/scd7896/nextjs-markdown-base.git";

if (projectName !== ".") {
  try {
    fs.mkdirSync(projectPath)
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(projectName);
      console.log(`The file ${projectName} already exist in the current directory, please give it another name.`);
    } else {
      console.log(err)
    }
    process.exit(1);
  }
}

async function main() {
  try {
    console.log("Downloading files....");
    execSync(`git clone --depth 1 ${GIT_REPO} ${projectPath}`);
    if (projectName !== ".") {
      process.chdir(projectPath);
    }
    execSync("rm -rf create-next-markdown-blog-app");
    console.log("Removing useless file");
    
    execSync("npx rimraf ./.git");
    console.log("The installation is done, this is ready to use !");
  } catch(err) {
    console.log(err)
  }
}

main();