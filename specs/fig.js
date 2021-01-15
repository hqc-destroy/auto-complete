var completionSpec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [


    { name: "source", description: "(re)connect fig to the current shell session" },
    { name: "update", description: "Update Fig's autocompletion specs" },
    {
      name: "uninstall", description: "Uninstall a completion spec",
      args: {
<<<<<<< HEAD
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
=======
        generators: {
          script: "\ls -1ap ~/.fig/autocomplete",
          splitOn: "\n"
        }
>>>>>>> cc03fa9... fixed up fig spec, templating in node, and added names and descriptions to git push and pull
      }
    },
    { name: "invite", description: "share Fig with a teammate ⭐" },
    {
      name: "report",
      displayName: "Report an Issue",
      insertValue: "report '{cursor}'",
      description: "Report an issue",
      args: {
        name: "msg",
        description: "What is the bug? How do we reproduce?"
      }
    },
<<<<<<< HEAD
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

=======

    { name: "tweet", description: "Tweet about Fig", icon: "https://abs.twimg.com/responsive-web/client-web-legacy/icon-ios.b1fc7275.png" },
    { name: "docs", description: "Open Fig's docs" },
    { name: "list", description: "List all available completion specs" },
    { name: "onboarding", description: "Re-run Fig's onboarding" }
>>>>>>> cc03fa9... fixed up fig spec, templating in node, and added names and descriptions to git push and pull
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

