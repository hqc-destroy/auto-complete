<<<<<<< HEAD
var servicesGenerator = {
    script: "brew services list | sed -e 's/ .*//' | tail -n +2",
    postProcess: function (output) {
        var lines = output.split('\n');
        return lines.reduce(function (acc, currentLine) {
            if (lines.includes('unbound'))
                return acc;
            return acc.concat({
                name: currentLine,
                type: 'option',
            });
        }, []);
=======
var generators = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a09fa69... removed linting from all js specs in specs folder
    servicesgenerators: {
        script: "brew services list | sed -e 's/ .*//' | tail -n +2",
        postProcess: function (out) {
            return out
<<<<<<< HEAD
                .split('\n')
                .filter(function (line) { return !line.includes('unbound'); })
                .map(function (line) { return ({
                name: line,
                type: 'option',
            }); });
        },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
  servicesgenerators: {
    script: "brew services list | sed -e 's/ .*//' | tail -n +2",
    postProcess: function (out) {
      return out
        .split("\n")
        .filter(function (line) {
          return !line.includes("unbound");
        })
        .map(function (line) {
          return {
            name: line,
            type: "option",
          };
        });
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
                .split("\n")
                .filter(function (line) { return !line.includes("unbound"); })
                .map(function (line) { return ({
                name: line,
                type: "option",
            }); });
        },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
    },
};
var completionSpec = {
    name: "brew",
    description: "Package manager for macOS",
    subcommands: [
        { name: "list", description: "List all installed formulae" },
        {
            name: "leaves",
            description: "List installed formulae that are not dependencies of another installed formula",
        },
<<<<<<< HEAD
        { name: 'doctor', description: 'Check your system for potential problems' },
<<<<<<< HEAD
        {
            name: 'info',
            description: 'Display brief statistics for your Homebrew installation',
        },
        {
            name: 'update',
            description: 'Fetch the newest version of Homebrew and all formulae',
        },
        { name: 'upgrade', description: 'Upgrade outdated casks and outdated' },
        {
            name: 'search',
            description: 'Perform a substring search of cask tokens and formula names',
        },
=======
        { name: 'info', description: 'Display brief statistics for your Homebrew installation' },
        { name: 'update', description: 'Fetch the newest version of Homebrew and all formulae' },
        { name: 'upgrade', description: 'Upgrade outdated casks and outdated' },
        { name: 'search', description: 'Perform a substring search of cask tokens and formula names' },
        { name: 'config', description: 'Show Homebrew and system configuration info' },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        {
            name: 'aaaaaaaa',
            description: 'Install <formula>',
            insertValue: 'install ',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                variadic: true,
                name: 'formula',
                description: 'Formula or cask to install',
=======
                isVariadic: true,
                name: "formula",
                description: "Formula or cask to install",
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                variadic: true,
                name: 'formula',
                description: 'Formula or cask to install',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                generators: {
                    script: 'ls -1 /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask/Casks',
                    postProcess: function (out) {
                        return out.split('\n').map(function (formula) {
                            return {
                                name: formula.replace('.rb', ''),
                                description: 'formula',
                                icon: '🍺',
                                priority: (formula[0] >= '0' && formula[0] <= '9') || formula[0] == '/' ? 0 : 100,
                            };
                        });
                    },
                },
=======
        {
<<<<<<< HEAD
          name: "uninstall",
          insertValue: "uninstall ",
          description: "Uninstalls the given cask",
          args: {
            variadic: true,
            generators: {
              script: "brew list -1 --cask",
              postProcess: function (out) {
                return out.split("\n").map(function (formula) {
                  return {
                    name: formula,
                    icon: "🍺",
                    description: "Installed formula",
                  };
                });
              },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
            },
          },
        },
      ],
    },
    {
      name: "services",
      description:
        "Manage background services with macOS' launchctl(1) daemon manager.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Display any debugging information.",
=======
            name: "doctor",
            description: "Check your system for potential problems",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
        },
        {
            name: "info",
            description: "Display brief statistics for your Homebrew installation",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'uninstall',
            description: 'Uninstall <formula>',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                variadic: true,
                name: 'formula',
=======
                isVariadic: true,
                name: "formula",
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                variadic: true,
                name: 'formula',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                generators: {
                    script: 'brew list -1 --formulae',
                    postProcess: function (out) {
                        return out.split('\n').map(function (formula) {
<<<<<<< HEAD
                            return {
                                name: formula,
                                icon: '🍺',
                                description: 'Installed formula',
                            };
=======
                            return { name: formula, icon: '🍺', description: 'Installed formula' };
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        });
                    },
                },
=======
          name: ["-v", "--verbose"],
          description: "Make some output more verbose.",
=======
            name: "update",
            description: "Fetch the newest version of Homebrew and all formulae",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
        },
        { name: "upgrade", description: "Upgrade outdated casks and outdated" },
        {
            name: "search",
            description: "Perform a substring search of cask tokens and formula names",
        },
        {
            name: "config",
            description: "Show Homebrew and system configuration info",
        },
        {
            name: "install",
            description: "Install <formula>",
            insertValue: "install ",
            args: {
                variadic: true,
                name: "formula",
                description: "Formula or cask to install",
                generators: {
                    script: "HBPATH=$(brew --repository); ls -1 $HBPATH/Library/Taps/homebrew/homebrew-core/Formula $HBPATH/Library/Taps/homebrew/homebrew-cask/Casks",
                    postProcess: function (out) {
                        return out.split("\n").map(function (formula) {
                            return {
                                name: formula.replace(".rb", ""),
                                description: "formula",
                                icon: "🍺",
                                priority: (formula[0] >= "0" && formula[0] <= "9") || formula[0] == "/"
                                    ? 0
                                    : 100,
                            };
                        });
                    },
                },
            },
        },
        {
<<<<<<< HEAD
          name: "run",
          insertValue: "run ",
          description:
            "Run the service formula without registering to launch at login (or boot).",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
            name: "uninstall",
            description: "Uninstall <formula>",
            args: {
                variadic: true,
                name: "formula",
                generators: {
                    script: "brew list -1 --formulae",
                    postProcess: function (out) {
                        return out.split("\n").map(function (formula) {
                            return {
                                name: formula,
                                icon: "🍺",
                                description: "Installed formula",
                            };
                        });
                    },
                },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'cask',
            insertValue: 'cask ',
            description: 'Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.',
            subcommands: [
                {
                    name: 'install',
                    insertValue: 'install ',
                    description: 'Installs the given cask',
                    args: {
                        name: 'cask',
                        description: 'Cask to install',
                    },
                },
                {
                    name: 'uninstall',
                    insertValue: 'uninstall ',
                    description: 'Uninstalls the given cask',
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
=======
                        variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        generators: {
                            script: 'brew list -1 --cask',
                            postProcess: function (out) {
                                return out.split('\n').map(function (formula) {
<<<<<<< HEAD
                                    return {
                                        name: formula,
                                        icon: '🍺',
                                        description: 'Installed formula',
                                    };
=======
                                    return { name: formula, icon: '🍺', description: 'Installed formula' };
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
            name: "cask",
            insertValue: "cask ",
            description: "Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
            subcommands: [
                {
                    name: "install",
                    insertValue: "install ",
                    description: "Installs the given cask",
                    args: {
                        name: "cask",
                        description: "Cask to install",
                    },
                },
                {
                    name: "uninstall",
                    insertValue: "uninstall ",
                    description: "Uninstalls the given cask",
                    args: {
                        variadic: true,
                        generators: {
                            script: "brew list -1 --cask",
                            postProcess: function (out) {
                                return out.split("\n").map(function (formula) {
                                    return {
                                        name: formula,
                                        icon: "🍺",
                                        description: "Installed formula",
                                    };
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                                });
                            },
                        },
                    },
                },
            ],
<<<<<<< HEAD
        },
        {
            name: 'services',
            description: "Manage background services with macOS' launchctl(1) daemon manager.",
            options: [
<<<<<<< HEAD
                {
                    name: ['-d', '--debug'],
                    description: 'Display any debugging information.',
                },
                { name: ['-q', '--quiet'], description: 'Suppress any warnings.' },
                {
                    name: ['-v', '--verbose'],
                    description: 'Make some output more verbose.',
                },
                {
                    name: ['-h', '--help'],
                    description: 'Get help with services command',
                },
=======
                { name: ['-d', '--debug'], description: 'Display any debugging information.' },
                { name: ['-q', '--quiet'], description: 'Suppress any warnings.' },
                { name: ['-v', '--verbose'], description: 'Make some output more verbose.' },
                { name: ['-h', '--help'], description: 'Get help with services command' },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            ],
            subcommands: [
                {
                    name: 'cleanup',
                    insertValue: 'cleanup',
                    description: 'Remove all unused services.',
                },
                {
                    name: 'list',
                    insertValue: 'list',
                    description: 'List all services.',
                },
                {
                    name: 'run',
                    insertValue: 'run ',
                    description: 'Run the service formula without registering to launch at login (or boot).',
                    options: [
                        {
                            name: '--all',
                            insertValue: '--all',
                            description: 'Start all services',
                        },
                    ],
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
                        generators: servicesGenerator,
=======
                        variadic: true,
                        generators: generators.servicesGenerator,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: 'start',
                    insertValue: 'start ',
                    description: 'Start the service formula immediately and register it to launch at login',
                    options: [
                        {
                            name: '--all',
                            insertValue: '--all',
                            description: 'Start all services',
                        },
                    ],
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
                        generators: servicesGenerator,
=======
                        variadic: true,
                        generators: generators.servicesGenerator,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: 'stop',
                    insertValue: 'stop ',
                    description: 'Stop the service formula immediately and unregister it from launching at',
                    options: [
                        {
                            name: '--all',
                            insertValue: '--all',
                            description: 'Start all services',
                        },
                    ],
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
                        generators: servicesGenerator,
=======
                        variadic: true,
                        generators: generators.servicesGenerator,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: 'restart',
                    insertValue: 'restart ',
                    description: 'Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).',
                    options: [
                        {
                            name: '--all',
                            insertValue: '--all',
                            description: 'Start all services',
                        },
                    ],
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
                        generators: servicesGenerator,
=======
                        variadic: true,
                        generators: generators.servicesGenerator,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
            ],
=======
          name: "start",
          insertValue: "start ",
          description:
            "Start the service formula immediately and register it to launch at login",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
            },
          ],
          args: {
            variadic: true,
            generators: generators.servicesGenerator,
          },
        },
        {
          name: "stop",
          insertValue: "stop ",
          description:
            "Stop the service formula immediately and unregister it from launching at",
          options: [
            {
              name: "--all",
              insertValue: "--all",
              description: "Start all services",
            },
          ],
          args: {
            variadic: true,
            generators: generators.servicesGenerator,
          },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
        },
        {
            name: "services",
            description: "Manage background services with macOS' launchctl(1) daemon manager.",
            options: [
                {
                    name: ["-d", "--debug"],
                    description: "Display any debugging information.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Suppress any warnings.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Make some output more verbose.",
                },
                {
                    name: ["-h", "--help"],
                    description: "Get help with services command",
                },
            ],
            subcommands: [
                {
                    name: "cleanup",
                    insertValue: "cleanup",
                    description: "Remove all unused services.",
                },
                {
                    name: "list",
                    insertValue: "list",
                    description: "List all services.",
                },
                {
                    name: "run",
                    insertValue: "run ",
                    description: "Run the service formula without registering to launch at login (or boot).",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services",
                        },
                    ],
                    args: {
                        variadic: true,
                        generators: generators.servicesGenerator,
                    },
                },
                {
                    name: "start",
                    insertValue: "start ",
                    description: "Start the service formula immediately and register it to launch at login",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services",
                        },
                    ],
                    args: {
                        variadic: true,
                        generators: generators.servicesGenerator,
                    },
                },
                {
                    name: "stop",
                    insertValue: "stop ",
                    description: "Stop the service formula immediately and unregister it from launching at",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services",
                        },
                    ],
                    args: {
                        variadic: true,
                        generators: generators.servicesGenerator,
                    },
                },
                {
                    name: "restart",
                    insertValue: "restart ",
                    description: "Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services",
                        },
                    ],
                    args: {
                        variadic: true,
                        generators: generators.servicesGenerator,
                    },
                },
            ],
>>>>>>> a09fa69... removed linting from all js specs in specs folder
        },
    ],
    options: [
        {
            name: ["--version"],
            description: "The current Homebrew version",
        },
    ],
};

