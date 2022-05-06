
const { Octokit } = require("octokit");

const octokit = new Octokit({ auth: `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` });


await octokit.rest.issues.create({
  owner: "kkj",
  repo: "teach-create-issues-action",
  title: "today",
  body: "今天xxxxxxx了"
});