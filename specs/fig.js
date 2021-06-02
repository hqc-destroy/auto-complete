var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [


    { name: "source", description: "(re)connect fig to the current shell session" },
    { name: "update", description: "update completion specs" },
    { 
      name: "settings",
      description: "update preferences",
      subcommands: [
        { 
          displayName: "developerMode",
          name: "autocomplete.developerMode",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.developerMode ",
          description: "Turns off caching and loads completions from <code>devCompletionsFolder</code>",
          args: {
            name: "bool",
            suggestions: [ 
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" }
            ]
          }
        },
        { 
          displayName: "devCompletionsFolder",
          name: "autocomplete.devCompletionsFolder",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.devCompletionsFolder ",
          description: "Directory to load completion specs when in <code>developerMode</code>",
          args: {
            name: "folder",
            description: "absolute path to directory containing specs",
            generators: {
              script: 'ls -d -1 "$PWD/"**/',
              postProcess: (out) => {
                let folders = out.split("\n")
                return folders.map(folder => {
                  let paths = folder.split("/")
                  paths.pop()
                  return {
                    name: paths.pop(),
                    insertValue: folder,
                    icon: `fig://${folder}`
                  }
                })
              }
            }
          }
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
                let existing = out.split("\n").filter(item => { return item.length > 0 })

                let append = {
                  name: "Disable...",
                  icon: "fig://icon?type=box",
                  insertValue: JSON.stringify(existing.concat(["{cursor}"]))
                }

                let enabledAll = {
                  name: "Enable all commands",
                  icon: "fig://icon?type=box",
                  insertValue: '[]'

                }

                return [append, enabledAll].concat(existing.map(disabledCommand => {
                  return {
                    name: `Enable ${disabledCommand}`,
                    icon: "fig://icon?type=box",
                    insertValue: JSON.stringify(existing.filter(cmd => { return cmd != disabledCommand }))

                  }
                }))

              }
            },
          }
        },
        { 
          name: "pty.path",
          icon: "fig://icon?type=commandkey",
          description: "Specify the $PATH variable in Fig's pseudoterminal",
          args: {
            name: "path",
            description: "The <code>$PATH</code> variable in Fig's pseudoterminal",
            suggestions: [ 
              { name: "$PATH", icon: "fig://icon?type=string" },
            ]
          }
        },
      ]

    },
    {
      name: "uninstall", description: "uninstall a completion spec",
      args: {
        name: "completionSpec",
        description: "Completion spec to uninstall",
        generators: {
          script: "\ls -1Ap ~/.fig/autocomplete",
          postProcess: (data) => {
            console.log(data)
            out = data.split("\n").reduce((acc, curr) => {
              if ([".gitignore", "README.md", "package.json", "package-lock.json"].includes(curr)) return acc
              else {
                acc.push({
                  name: curr.trim().split(".")[0],
                  icon: "https://withfig.com/img/icon-tmp-small.png"
                })
                return acc
              }
            }, [])
            return out
          }
        }
      }
    },
    { name: "invite", description: "share Fig with a teammate ⭐", icon: "fig://icon?type=invite" },
    { name: "report", description: "report an issue" },
    { name: "tweet", description: "tweet about Fig", icon: "https://abs.twimg.com/responsive-web/client-web-legacy/icon-ios.b1fc7275.png" },
    { name: "docs", description: "view docs in browser" },
    { name: "list", description: "list all available completion specs" },
    { name: "onboarding", description: "re-run Fig's onboarding" },
    {
      name: "team:upload", description: "share an completion spec with your team",
      args: {
        name: "spec",
        template: "filepaths"
      }
    },
    { name: "team:download", description: "download your team's spec" }
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
    name: "fig",
    description: "Autocomplete for your terminal",
=======
    name: 'fig',
    description: 'Autocomplete for your terminal',
>>>>>>> b5d9641... fix: also fix compiled specs
=======
    name: 'fig',
    description: 'Autocomplete for your terminal',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
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
                            postProcess: function (out) {
                                var folders = out.split('\n');
                                return folders.map(function (folder) {
                                    var paths = folder.split('/');
                                    paths.pop();
                                    return {
                                        name: paths.pop(),
                                        insertValue: folder,
                                        icon: "fig://" + folder,
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
                            postProcess: function (out) {
                                var existing = out.split('\n').filter(function (item) {
                                    return item.length > 0;
                                });
                                var append = {
                                    name: 'Disable...',
                                    icon: 'fig://icon?type=box',
                                    insertValue: JSON.stringify(existing.concat(['{cursor}'])),
                                };
                                var enabledAll = {
                                    name: 'Enable all commands',
                                    icon: 'fig://icon?type=box',
                                    insertValue: '[]',
                                };
                                return [append, enabledAll].concat(existing.map(function (disabledCommand) {
                                    return {
                                        name: "Enable " + disabledCommand,
                                        icon: 'fig://icon?type=box',
                                        insertValue: JSON.stringify(existing.filter(function (cmd) {
                                            return cmd != disabledCommand;
                                        })),
                                    };
                                }));
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
  name: "fig",
  description: "Autocomplete for your terminal",
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
          displayName: "developerMode",
          name: "autocomplete.developerMode",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.developerMode ",
          description:
            "Turns off caching and loads completions from <code>devCompletionsFolder</code>",
          args: {
            name: "bool",
            suggestions: [
              { name: "true", icon: "fig://icon?type=string" },
              { name: "false", icon: "fig://icon?type=string" },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    name: "fig",
    description: "Autocomplete for your terminal",
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
                    description: "Turns off caching and loads completions from <code>devCompletionsFolder</code>",
                    args: {
                        name: "bool",
                        suggestions: [
                            { name: "true", icon: "fig://icon?type=string" },
                            { name: "false", icon: "fig://icon?type=string" },
                        ],
                    },
                },
                {
                    name: "autocomplete.devCompletionsFolder",
                    icon: "fig://icon?type=commandkey",
                    insertValue: "autocomplete.devCompletionsFolder ",
                    description: "Directory to load completion specs when in <code>developerMode</code>",
                    args: {
                        name: "folder",
                        description: "absolute path to directory containing specs",
                        generators: {
                            script: 'ls -d -1 "$PWD/"**/',
                            postProcess: function (out) {
                                var folders = out.split("\n");
                                return folders.map(function (folder) {
                                    var paths = folder.split("/");
                                    paths.pop();
                                    return {
                                        name: paths.pop(),
                                        insertValue: folder,
                                        icon: "fig://" + folder,
                                    };
                                });
                            },
                        },
                    },
                },
                {
                    name: "autocomplete.scrollWrapAround",
                    icon: "fig://icon?type=commandkey",
                    insertValue: "autocomplete.scrollWrapAround ",
                    description: "A flag that determines whether the selection will wrap around when pressing arrow key at bottom or top of list.",
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
                    description: "A flag that determines whether Fig will automatically insert a space.",
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
                    description: "A flag that determines whether Fig will present suggestions to immediately run commands that might be dangerous, like rm.",
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
                    description: "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
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
                    description: "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
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
                                description: "pressing enter will run whatever command is currently in the terminal.",
                                icon: "fig://icon?type=string",
                            },
                        ],
                    },
                },
                {
                    name: "autocomplete.tab",
                    icon: "fig://icon?type=commandkey",
                    insertValue: "autocomplete.tab ",
                    description: "A flag that determines whether Fig will present suggestions to immediately run git aliases.",
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
                                description: "pressing tab will insert selected suggestion or common prefix of all suggestions, if it exists",
                                icon: "fig://icon?type=string",
                            },
                            {
                                name: "shake",
                                description: "pressing tab will insert common prefix, if it exists. Otherwise, it will indicate that there is no shared prefix by shaking.",
                                icon: "fig://icon?type=string",
                            },
                            {
                                name: "navigate",
                                description: "pressing tab will insert common prefix, if it exists. Otherwise, it will select the next suggestion in the list.",
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
                            postProcess: function (out) {
                                var existing = out.split("\n").filter(function (item) {
                                    return item.length > 0;
                                });
                                var append = {
                                    name: "Disable...",
                                    icon: "fig://icon?type=box",
                                    insertValue: JSON.stringify(existing.concat(["{cursor}"])),
                                };
                                var enabledAll = {
                                    name: "Enable all commands",
                                    icon: "fig://icon?type=box",
                                    insertValue: "[]",
                                };
                                return [append, enabledAll].concat(existing.map(function (disabledCommand) {
                                    return {
                                        name: "Enable " + disabledCommand,
                                        icon: "fig://icon?type=box",
                                        insertValue: JSON.stringify(existing.filter(function (cmd) {
                                            return cmd != disabledCommand;
                                        })),
                                    };
                                }));
                            },
                        },
                    },
                },
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
                    description: "Search of suggestions using fuzzy search rather than prefix search. NOTE: this currenty does not support the tab autocomplete underlining that prefix search has",
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
                        description: "The <code>$PATH</code> variable in Fig's pseudoterminal",
                        suggestions: [{ name: "$PATH", icon: "fig://icon?type=string" }],
                    },
                },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                {
                    name: "pty.rc",
                    icon: "fig://icon?type=commandkey",
                    description: "A file that will be sourced when Fig creates a pseudoterminal",
                    args: {
                        name: "filepath",
                        template: "filepaths",
                    },
                },
                {
                    name: "app.launchOnStartup",
                    icon: "fig://icon?type=commandkey",
                    description: "A flag that determines whether the Fig app is added to Login Items. If true, Fig will launch automatically whenever you restart your computer.",
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
                    priority: 0
                },
                {
<<<<<<< HEAD
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
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
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
<<<<<<< HEAD
>>>>>>> 1c4709c... add generator to git merge
            ],
        },
        {
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
                    postProcess: function (data) {
<<<<<<< HEAD
=======
                        console.log(data);
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        var out = data.split('\n').reduce(function (acc, curr) {
                            if (['.gitignore', 'README.md', 'package.json', 'package-lock.json'].includes(curr))
                                return acc;
                            else {
                                acc.push({
                                    name: curr.trim().split('.')[0],
                                    icon: 'fig://icon?type=box',
=======
=======
            ],
        },
        {
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "uninstall",
            description: "uninstall a completion spec",
            args: {
                name: "spec",
                description: "The CLI completion spec to remove",
                generators: {
                    script: "ls -1Ap ~/.fig/autocomplete",
                    postProcess: function (data) {
                        console.log(data);
                        var out = data.split("\n").reduce(function (acc, curr) {
                            if ([
                                ".gitignore",
                                "README.md",
                                "package.json",
                                "package-lock.json",
                            ].includes(curr))
                                return acc;
                            else {
                                acc.push({
                                    name: curr.trim().split(".")[0],
                                    icon: "fig://icon?type=box",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                                });
                                return acc;
                            }
                        }, []);
                        return out;
                    },
                },
<<<<<<< HEAD
<<<<<<< HEAD
=======
          displayName: "devCompletionsFolder",
          name: "autocomplete.devCompletionsFolder",
          icon: "fig://icon?type=commandkey",
          insertValue: "autocomplete.devCompletionsFolder ",
          description:
            "Directory to load completion specs when in <code>developerMode</code>",
          args: {
            name: "folder",
            description: "absolute path to directory containing specs",
            generators: {
              script: 'ls -d -1 "$PWD/"**/',
              postProcess: function (out) {
                var folders = out.split("\n");
                return folders.map(function (folder) {
                  var paths = folder.split("/");
                  paths.pop();
                  return {
                    name: paths.pop(),
                    insertValue: folder,
                    icon: "fig://" + folder,
                  };
                });
              },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
>>>>>>> a09fa69... removed linting from all js specs in specs folder
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
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
            },
        },
>>>>>>> 3879070... feat: re-add built specs and update gitignore
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export {};
>>>>>>> 8ff182e... feat: update folder structure and compiler
=======

>>>>>>> baf305a... feat: update naming conventions
=======

>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======

>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======

>>>>>>> 3879070... feat: re-add built specs and update gitignore
