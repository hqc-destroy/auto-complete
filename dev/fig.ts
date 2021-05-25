<<<<<<< HEAD
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
=======
export const completionSpec: Fig.Spec = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'fig',
    description: 'Autocomplete for your terminal',
    subcommands: [
        { name: 'source', description: '(re)connect fig to the current shell session' },
        { name: 'update', description: 'update completion specs' },
        {
<<<<<<< HEAD
=======
            name: 'settings',
            description: 'update preferences',
            subcommands: [
                {
                    displayName: 'developerMode',
                    name: 'autocomplete.developerMode',
                    icon: 'fig://icon?type=commandkey',
                    insertValue: 'autocomplete.developerMode ',
                    description: 'Turns off caching and loads completions from <code>devCompletionsFolder</code>',
                    args: {
                        name: 'bool',
                        suggestions: [
                            { name: 'true', icon: 'fig://icon?type=string' },
                            { name: 'false', icon: 'fig://icon?type=string' },
                        ],
                    },
                },
                {
                    displayName: 'devCompletionsFolder',
                    name: 'autocomplete.devCompletionsFolder',
                    icon: 'fig://icon?type=commandkey',
                    insertValue: 'autocomplete.devCompletionsFolder ',
                    description: 'Directory to load completion specs when in <code>developerMode</code>',
                    args: {
                        name: 'folder',
                        description: 'absolute path to directory containing specs',
                        generators: {
                            script: 'ls -d -1 "$PWD/"**/',
                            postProcess: (out) => {
                                const folders = out.split('\n');
                                return folders.map((folder) => {
                                    const paths = folder.split('/');
                                    paths.pop();
                                    return {
                                        name: paths.pop(),
                                        insertValue: folder,
                                        icon: `fig://${folder}`,
                                    };
                                });
                            },
                        },
                    },
                },
                {
                    name: 'autocomplete.disableForCommands',
                    icon: 'fig://icon?type=commandkey',
                    insertValue: "autocomplete.disableForCommands '{cursor}'",
                    description: 'JSON array of commands Fig should not autocomplete on.',
                    args: {
                        name: 'array',
                        generators: {
                            script: 'fig settings autocomplete.disableForCommands',
                            postProcess: (out) => {
                                const existing = out.split('\n').filter((item) => {
                                    return item.length > 0;
                                });

                                const append = {
                                    name: 'Disable...',
                                    icon: 'fig://icon?type=box',
                                    insertValue: JSON.stringify(existing.concat(['{cursor}'])),
                                };

                                const enabledAll = {
                                    name: 'Enable all commands',
                                    icon: 'fig://icon?type=box',
                                    insertValue: '[]',
                                };

                                return [append, enabledAll].concat(
                                    existing.map((disabledCommand) => {
                                        return {
                                            name: `Enable ${disabledCommand}`,
                                            icon: 'fig://icon?type=box',
                                            insertValue: JSON.stringify(
                                                existing.filter((cmd) => {
                                                    return cmd != disabledCommand;
                                                }),
                                            ),
                                        };
                                    }),
                                );
                            },
                        },
                    },
                },
                {
                    name: 'pty.path',
                    icon: 'fig://icon?type=commandkey',
                    description: "Specify the $PATH variable in Fig's pseudoterminal",
                    args: {
                        name: 'path',
                        description: "The <code>$PATH</code> variable in Fig's pseudoterminal",
                        suggestions: [{ name: '$PATH', icon: 'fig://icon?type=string' }],
                    },
                },
=======
  name: 'fig',
  description: 'Autocomplete for your terminal',
=======
  name: "fig",
  description: "Autocomplete for your terminal",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
  subcommands: [
    {
      name: "source",
      description: "(re)connect fig to the current shell session",
    },
    { name: "update", description: "update completion specs" },
    {
      name: "settings",
      description: "update preferences",
      subcommands: [
        {
          name: "autocomplete.developerMode",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.developerMode ",
          description:
            "Turns off caching and loads completions from <code>devCompletionsFolder</code>",
          args: {
            name: "bool",
            suggestions: [
<<<<<<< HEAD
              { name: 'true', icon: 'fig://icon?type=string' },
              { name: 'false', icon: 'fig://icon?type=string' },
>>>>>>> 65036d2... fixed linting and prettier
=======
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
            ],
          },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: 'uninstall',
            description: 'uninstall a completion spec',
            args: {
                name: 'spec',
                description: 'The CLI completion spec to remove',
                generators: {
                    script: 'ls -1Ap ~/.fig/autocomplete',
                    postProcess: (data) => {
<<<<<<< HEAD
=======
                        console.log(data);
>>>>>>> e321ca1... feat: update all scripts and  move to ts
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
=======
          displayName: 'devCompletionsFolder',
          name: 'autocomplete.devCompletionsFolder',
          icon: 'fig://icon?type=commandkey',
          insertValue: 'autocomplete.devCompletionsFolder ',
=======
          displayName: "devCompletionsFolder",
=======
>>>>>>> cee8840... update fig and git
          name: "autocomplete.devCompletionsFolder",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.devCompletionsFolder ",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
          description:
            "Directory to load completion specs when in <code>developerMode</code>",
          args: {
            name: "folder",
            description: "absolute path to directory containing specs",
            generators: {
              script: 'ls -d -1 "$PWD/"**/',
              postProcess: (out) => {
                const folders = out.split("\n");
                return folders.map((folder) => {
                  const paths = folder.split("/");
                  paths.pop();
                  return {
                    name: paths.pop(),
                    insertValue: folder,
                    icon: `fig://${folder}`,
                  };
                });
              },
>>>>>>> 65036d2... fixed linting and prettier
            },
          },
        },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'invite', description: 'share Fig with a teammate ⭐' },
=======
        { name: 'invite', description: 'share Fig with a teammate ⭐', icon: 'fig://icon?type=invite' },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        { name: 'report', description: 'report an issue' },
        { name: 'tweet', description: 'tweet about Fig', icon: 'fig://icon?type=twitter' },
        { name: 'docs', description: 'view docs in browser' },
        { name: 'list', description: 'list all available completion specs' },
        { name: 'onboarding', description: "re-run Fig's onboarding" },
        { name: 'diagnostic', description: 'display diagnostic information' },
=======
>>>>>>> 65036d2... fixed linting and prettier
        {
          name: "autocomplete.scrollWrapAround",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.scrollWrapAround ",
          description:
            "A flag that determines whether the selection will wrap around when pressing arrow key at bottom or top of list.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "autocomplete.insertSpaceAutomatically",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.insertSpaceAutomatically ",
          description:
            "A flag that determines whether Fig will automatically insert a space.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "autocomplete.immediatelyRunDangerousCommands",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.immediatelyRunDangerousCommands ",
          description:
            "A flag that determines whether Fig will present suggestions to immediately run commands that might be dangerous, like rm.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "autocomplete.immediatelyRunGitAliases",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.immediatelyRunGitAliases ",
          description:
            "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "autocomplete.immediatelyExecuteAfterSpace",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.immediatelyExecuteAfterSpace",
          description: "Show immediate execute button after space",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "autocomplete.enter",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.enter ",
          description:
            "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
          args: {
            name: "behavior",
            suggestions: [
              {
                name: "insert",
                description: "pressing enter will insert selected suggestion",
                icon: "fig://icon?type=string",
              },
              {
                name: "ignore",
                description:
                  "pressing enter will run whatever command is currently in the terminal.",
                icon: "fig://icon?type=string",
              },
            ],
          },
        },
        {
          name: "autocomplete.tab",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.tab ",
          description:
            "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
          args: {
            name: "behavior",
            suggestions: [
              {
                name: "insert",
                description: "pressing tab will insert selected suggestion",
                icon: "fig://icon?type=string",
              },
              {
                name: "insertOrPrefix",
                description:
                  "pressing tab will insert selected suggestion or common prefix of all suggestions, if it exists",
                icon: "fig://icon?type=string",
              },
              {
                name: "shake",
                description:
                  "pressing tab will insert common prefix, if it exists. Otherwise, it will indicate that there is no shared prefix by shaking.",
                icon: "fig://icon?type=string",
              },
              {
                name: "navigate",
                description:
                  "pressing tab will insert common prefix, if it exists. Otherwise, it will select the next suggestion in the list.",
                icon: "fig://icon?type=string",
              },
            ],
          },
        },
        {
          name: "autocomplete.disableForCommands",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.disableForCommands '{cursor}'",
          description: "JSON array of commands Fig should not autocomplete on.",
          args: {
            name: "array",
            generators: {
              script: "fig settings autocomplete.disableForCommands",
              postProcess: (out) => {
                const existing = out.split("\n").filter((item) => {
                  return item.length > 0;
                });

                const append = {
                  name: "Disable...",
                  icon: "fig://icon?type=box",
                  insertValue: JSON.stringify(existing.concat(["{cursor}"])),
                };

                const enabledAll = {
                  name: "Enable all commands",
                  icon: "fig://icon?type=box",
                  insertValue: "[]",
                };

                return [append, enabledAll].concat(
                  existing.map((disabledCommand) => {
                    return {
                      name: `Enable ${disabledCommand}`,
                      icon: "fig://icon?type=box",
                      insertValue: JSON.stringify(
                        existing.filter((cmd) => {
                          return cmd != disabledCommand;
                        })
                      ),
                    };
                  })
                );
              },
            },
          },
        },
<<<<<<< HEAD
        { name: 'team:download', description: "download your team's spec" },
        { name: 'integrations:iterm', description: 'Install the iTerm tab integration' },
    ],
<<<<<<< HEAD
>>>>>>> 6bc5008... feat: lint & prettier all files
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts

    options: [
=======
>>>>>>> 65036d2... fixed linting and prettier
        {
          name: "autocomplete.sortMethod",
          description: "Specify how Fig should sort suggestions",
          args: {
            suggestions: [
              {
                name: "recency",
                description: "Sort by recency",
              },
              {
                name: "alphabetical",
                description: "Sort by alphabetical order",
              },
            ],
          },
        },
        {
          name: "autocomplete.fuzzySearch",
          description:
            "Search of suggestions using fuzzy search rather than prefix search. NOTE: this currenty does not support the tab autocomplete underlining that prefix search has",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.fuzzySearch ",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "pty.path",
          icon: "fig://icon?type=commandkey",
          description: "Specify the $PATH variable in Fig's pseudoterminal",
          args: {
            name: "path",
            description:
              "The <code>$PATH</code> variable in Fig's pseudoterminal",
            suggestions: [{ name: "$PATH", icon: "fig://icon?type=string" }],
          },
        },
        {
          name: "pty.rc",
          icon: "fig://icon?type=commandkey",
          description:
            "A file that will be sourced when Fig creates a pseudoterminal",
          args: {
            name: "filepath",
            template: "filepaths",
          },
        },
        {
          name: "app.launchOnStartup",
          icon: "fig://icon?type=commandkey",
          description:
            "A flag that determines whether the Fig app is added to Login Items. If true, Fig will launch automatically whenever you restart your computer.",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "app.disableTelemetry",
          icon: "fig://icon?type=commandkey",
          description: "Opt-out of all non-essential telemetry collection",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
          priority: 1,
        },
        {
          name: "app.hideMenubarIcon",
          icon: "fig://icon?type=commandkey",
          description: "Hide Fig's icon ◧ in the mac status bar",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "autocomplete.theme",
          icon: "fig://icon?type=commandkey",
          description: "Change Fig's theme",
          args: {
            name: "mode",
            suggestions: [
              { name: "light", icon: "fig://icon?type=string" },
              { name: "dark", icon: "fig://icon?type=string" },
            ],
          },
        },
        {
          name: "autocomplete.width",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.width ",
          description: "Set the maximum width of the autocomplete window.",
          args: {
            name: "number",
          },
        },
        {
          name: "autocomplete.height",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.height ",
          description: "Set the maximum height of the autocomplete window.",
          args: {
            name: "number",
          },
        },
      ],
    },
    {
      name: "uninstall",
      description: "uninstall a completion spec",
      args: {
        name: "spec",
        description: "The CLI completion spec to remove",
        generators: {
          script: "ls -1Ap ~/.fig/autocomplete",
          postProcess: (data) => {
            console.log(data);
            const out = data.split("\n").reduce((acc, curr) => {
              if (
                [
                  ".gitignore",
                  "README.md",
                  "package.json",
                  "package-lock.json",
                ].includes(curr)
              )
                return acc;
              else {
                acc.push({
                  name: curr.trim().split(".")[0],
                  icon: "fig://icon?type=box",
                });
                return acc;
              }
            }, []);
            return out;
          },
        },
      },
    },
    {
      name: "invite",
      description: "share Fig with a teammate ⭐",
      icon: "fig://icon?type=invite",
    },
    { name: "report", description: "report an issue" },
    {
      name: "tweet",
      description: "tweet about Fig",
      icon: "fig://icon?type=twitter",
    },
    { name: "docs", description: "view docs in browser" },
    { name: "list", description: "list all available completion specs" },
    { name: "onboarding", description: "re-run Fig's onboarding" },
    { name: "diagnostic", description: "display diagnostic information" },
    {
      name: "issue",
      description: "create a new Github issue in withfig/fig",
      icon: "fig://icon?type=github",
    },

    { name: "quit", description: "quit the Fig application" },

    {
      name: "team:upload",
      description: "share an completion spec with your team",
      args: {
        name: "spec",
        template: "filepaths",
      },
    },
    { name: "team:download", description: "download your team's spec" },
    {
      name: "integrations:iterm",
      description: "Install the iTerm tab integration",
    },
  ],

  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Fig CLI",
    },
    {
      name: ["--version"],
      description: "The current Fig version",
    },
  ],
};
