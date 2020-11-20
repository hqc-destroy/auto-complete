let servicesGenerator = {
    variadic: true,
    suggestions: [],
    generator: {
        script: "brew services list | sed -e 's/ .*//' | tail -n +2",
        postProcess: function(out) {
            return out.split('\n').filter((line) => {
                return !line.includes('unbound') && {
                    name: line,
                    type: "option"
                }
            })
        }
    }
};

var completionSpec = {
    name: "brew",
    description: "Package manager for macOS",
    subcommands: [
<<<<<<< HEAD
        { name: "list",        description: "List all installed formulae" },
        { name: "leaves",      description: "List installed formulae that are not dependencies of another installed formula" },
        { name: "doctor",      description: "Check your system for potential problems" },
        { name: "info",        description: "Display brief statistics for your Homebrew installation" },
        { name: "update",      description: "Fetch the newest version of Homebrew and all formulae" },
        { name: "upgrade",     description: "Upgrade outdated casks and outdated" },
        { name: "search",      description: "Perform a substring search of cask tokens and formula names" },
=======
        { name: "list", description: "List all installed formulae" },
        { name: "leaves", description: "List installed formulae that are not dependencies of another installed formula" },
        { name: "doctor", description: "Check your system for potential problems" },
        { name: "info", description: "Display brief statistics for your Homebrew installation" },
        { name: "update", description: "Fetch the newest version of Homebrew and all formulae" },
        { name: "upgrade", description: "Upgrade outdated casks and outdated" },
        { name: "search", description: "Perform a substring search of cask tokens and formula names" },
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
        {
            name: "install",
            description: "Install <formula>",
            insertValue: "install ",
<<<<<<< HEAD
            arg: {
=======
            args: {
<<<<<<< HEAD
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
=======
                variadic: true,
>>>>>>> 9304f5c... Add generator for brew formula
                name: "<formula>",
                // insertValue: "",
                // description: "Formula to install"
                generator: {
                    script: "find /usr/local/Homebrew/ -type d -name \"Formula\" -exec ls -1 {} \\;",
                    postProcess: function (out) {
                        let unique = out.split('\n').reduce((acc, line) => {
                            acc[line.split("@")[0].replace('.rb', '')] = true
                            return acc
                        }, {})

                        return Object.keys(unique).map(formula => {
                            return {
                                name: formula,
                                description: "formula",
                                icon: "🍺"
                            }
                        })
                    }
                }
            }
        },

        {
            name: "uninstall",
            description: "Uninstall <formula>",
            args: {
                variadic: true,
<<<<<<< HEAD
                shellSuggestions: {
                    cmd: "brew list -1 --formulae",
                    postProcess: function (out) {
                        return out.split('\n').map(formula => {
                            return { name: formula, icon: "🍺", description: "Installed formula"}
=======
                generator: {
                    script: "brew list -1 --formulae",
                    postProcess: function (out) {
                        return out.split('\n').map(formula => {
                            return { name: formula, icon: "🍺", description: "Installed formula" }
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                        })
                    }
                },
            },
        },
        {
            name: "cask",
            insertValue: "cask ",
            description: "Homebrew  Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
<<<<<<< HEAD
            subcommands:[
                {
                    name: "install <cask>",
=======
            subcommands: [
                {
                    name: "install",
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                    insertValue: "install ",
                    description: "Installs the given cask",
                    args: {
                        name: "<cask>",
                        insertValue: "",
                        description: "Cask to install"
                    }
                },
                {
<<<<<<< HEAD
                    name: "uninstall <cask>",
                    insertValue: "uninstall ",
                    description: "Uninstalls the given cask",
                    args: {
                        shellSuggestions: {
                            cmd: "brew list -1 --cask",
                            splitOn: "\n",
                            postProcess: function (out) {
                                return out.split('\n').map(formula => {
                                    return { name: formula, icon: "🍺", description: "Installed cask" }
                                })
                            }
                        }
                    }
=======
                    name: "uninstall",
                    insertValue: "uninstall ",
                    description: "Uninstalls the given cask",
                    args: {
                        variadic: true,
                        generator: {
                            script: "brew list -1 --formulae",
                            postProcess: function (out) {
                                return out.split('\n').map(formula => {
                                    return { name: formula, icon: "🍺", description: "Installed formula" }
                                })
                            }
                        },
                    },
                    // args: {
                    //     generator: {
                    //         script: "brew list -1 --cask",
                    //         // splitOn: "\n",
                    //         postProcess: function (out) {
                    //             return out.split('\n').map(formula => {
                    //                 return { name: formula, icon: "🍺", description: "Installed cask" }
                    //             })
                    //         }
                    //     }
                    // }
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                }
            ]
        },
        {
            name: "services",
            description: "Manage background services with macOS\' launchctl(1) daemon manager.",
            options: [
                { name: ["-d", "--debug"], description: "Display any debugging information." },
                { name: ["-q", "--quiet"], description: "Suppress any warnings." },
                { name: ["-v", "--verbose"], description: "Make some output more verbose." },
                { name: ["-h", "--help"], description: "Get help with services command" },
            ],
            subcommands: [
                {
                    name: "cleanup",
                    insertValue: "cleanup",
                    description: "Remove all unused services."
                },
                {
                    name: "list",
                    insertValue: "list",
                    description: "List all services."
                },
                {
                    name: "run",
                    insertValue: "run ",
                    description: "Run the service formula without registering to launch at login (or boot).",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: servicesGenerator
                },
                {
                    name: "start",
                    insertValue: "start ",
                    description: "Start the service formula immediately and register it to launch at login",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: servicesGenerator
                },
                {
                    name: "stop",
                    insertValue: "stop ",
                    description: "Stop the service formula immediately and unregister it from launching at",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: servicesGenerator
                },
                {
                    name: "restart",
                    insertValue: "restart ",
                    description: "Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: servicesGenerator
                }
            ]
        }
    ],
    options: [
<<<<<<< HEAD
    {
      name: ["--version"],
      description: "The current Homebrew version",
    }
  ]
=======
        {
            name: ["--version"],
            description: "The current Homebrew version",
        }
    ]
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
}
