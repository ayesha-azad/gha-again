import * as core from "@actions/core";

async function run() {
  try {
    const name = core.getInput("name");
    const greeting = `Hello, ${name}! 👋`;

    console.log(greeting);

    // set output
    core.setOutput("greeting", greeting);
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

run();
