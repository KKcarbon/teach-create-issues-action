


const octokit = new Octokit({ auth: `personal-access-token123` });


await octokit.rest.issues.create({
    owner: "octocat",
    repo: "hello-world",
    title: "Hello world from " + slug,
  });