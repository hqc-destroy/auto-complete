export const figCompletionSpec: Fig.Spec = {
<<<<<<< HEAD
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [


    { name: "source", description: "(re)connect fig to the current shell session" },
    { name: "update", description: "update completion specs" },
    {
      name: "uninstall", description: "uninstall a completion spec",
      args: {
<<<<<<< HEAD
<<<<<<< HEAD
        name: "Email",
<<<<<<< HEAD
        description: "Email address of the user you want to invite",
<<<<<<< HEAD
        variadic: true,
<<<<<<< HEAD
        staticSuggestions: [
=======
        variadic: true, // default is false
        suggestions: [
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
=======
        suggestions: [
>>>>>>> c3b1241... Fix completion specs for linter
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
=======
        name: "spec",
        description: "The CLI completion spec to remove",
>>>>>>> f12c91c... fig: update completion spec with new commands and tweak icons"
        generators: {
          script: "\ls -1Ap ~/.fig/autocomplete",
          postProcess: (data) => {
            const out = data.split("\n").reduce((acc, curr) => {
              if ([".gitignore", "README.md", "package.json", "package-lock.json"].includes(curr)) return acc
              else {
                acc.push({
                  name: curr.trim().split(".")[0],
                  icon: "fig://icon?type=box"
                })
                return acc
              }
            }, [])
            return out
          }
        }
>>>>>>> cc03fa9... fixed up fig spec, templating in node, and added names and descriptions to git push and pull
      }
    },
    { name: "invite", description: "share Fig with a teammate ⭐" },
<<<<<<< HEAD
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
=======
    { name: "report", description: "report an issue" },
    { name: "tweet", description: "tweet about Fig", icon: "fig://icon?type=twitter" },
    { name: "docs", description: "view docs in browser" },
    { name: "list", description: "list all available completion specs" },
<<<<<<< HEAD
    { name: "onboarding", description: "re-run Fig's onboarding" }
>>>>>>> 01799b1... fig: update report subcommand
=======
    { name: "onboarding", description: "re-run Fig's onboarding" },
    { name: "diagnostic", description: "display diagnostic information" },
    {
      name: "team:upload", description: "share an completion spec with your team",
      args: {
        name: "spec",
        template: "filepaths"
      }
    },
<<<<<<< HEAD
    { name: "team:download", description: "download your team's spec" }
>>>>>>> 3f87347... changes to fig and git -am
=======
    { name: "team:download", description: "download your team's spec" },
    { name: "integrations:iterm", description: "Install the iTerm tab integration" }

>>>>>>> f12c91c... fig: update completion spec with new commands and tweak icons"
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
=======
    name: 'fig',
    description: 'Autocomplete for your terminal',
    subcommands: [
        { name: 'source', description: '(re)connect fig to the current shell session' },
        { name: 'update', description: 'update completion specs' },
        {
            name: 'uninstall',
            description: 'uninstall a completion spec',
            args: {
                name: 'spec',
                description: 'The CLI completion spec to remove',
                generators: {
                    script: 'ls -1Ap ~/.fig/autocomplete',
                    postProcess: (data) => {
                        const out = data.split('\n').reduce((acc, curr) => {
                            if (['.gitignore', 'README.md', 'package.json', 'package-lock.json'].includes(curr))
                                return acc;
                            else {
                                acc.push({
                                    name: curr.trim().split('.')[0],
                                    icon: 'fig://icon?type=box',
                                });
                                return acc;
                            }
                        }, []);
                        return out;
                    },
                },
            },
        },
        { name: 'invite', description: 'share Fig with a teammate ⭐' },
        { name: 'report', description: 'report an issue' },
        { name: 'tweet', description: 'tweet about Fig', icon: 'fig://icon?type=twitter' },
        { name: 'docs', description: 'view docs in browser' },
        { name: 'list', description: 'list all available completion specs' },
        { name: 'onboarding', description: "re-run Fig's onboarding" },
        { name: 'diagnostic', description: 'display diagnostic information' },
        {
            name: 'team:upload',
            description: 'share an completion spec with your team',
            args: {
                name: 'spec',
                template: 'filepaths',
            },
        },
        { name: 'team:download', description: "download your team's spec" },
        { name: 'integrations:iterm', description: 'Install the iTerm tab integration' },
    ],
>>>>>>> 6bc5008... feat: lint & prettier all files

    options: [
        {
            name: ['-h', '--help'],
            description: 'Overview of Fig CLI',
        },
        {
            name: ['--version'],
            description: 'The current Fig version',
        },
    ],
};
