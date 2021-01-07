var completionSpec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [
    { name: "update", description: "Update Fig's autocompletion specs" },

    {
      name: "invite",
      description: "share Fig with a teammate ⭐",
      args: {
        name: "Email",
<<<<<<< HEAD
        description: "Email address of the user you want to invite",
<<<<<<< HEAD
        variadic: true,
        staticSuggestions: [
=======
        variadic: true, // default is false
        suggestions: [
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
          {
            name: "<email>",
            insertValue: " ",
            description: "Email to invite"
          }
        ]
=======
        description: "Email address of the user you want to invite"
>>>>>>> f281bf4... Update fig.js
      }
    },

    {
      name: "feedback", description: "Send feedback Fig's founders",

      options: [
        {
          name: ["-m", "--message"],
          insertValue: "-m '{cursor}'",
          description: "Your message to send to Fig",
          args: {},
        },
      ]
    },
    { name: "docs", description: "Build your own completion spec" },
    { name: "source", description: "(re)connect fig to the current shell session" },


    // { name: "dir", description: "browse your file system" },
    // { name: "curl", description: "build http requests" },
    // {
    //   name: "git", description: "a lightweight UI for git",
    //   subcommands: [{ name: "diff", description: "GUI for git diff" }]
    // },
    // { name: "sftp", description: "browse files on remote servers" },
    // { name: "psql", description: "view and query Postgres databases" },
    // { name: "monitor", description: "visualize CPU usage by process" },
    // { name: "readme", description: "preview markdown documents", args: { templateSuggestions: ["files"] } },

  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Fig CLI"
    },
    {
      name: ["--version"],
      description: "The current Fig version",
    }
  ]
}

