var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var help = {
    name: ["-h", "--help"],
    description: "Display this help message",
};
var quiet = {
    name: ["-q", "--quiet"],
    description: "Do not output any message",
};
var verbose = {
    name: ["-v", "--verbose"],
    description: "Increase the verbosity of messages",
};
var vverbose = {
    name: ["-vv"],
    description: "More verbose output",
};
var vvverbose = {
    name: ["-vvv"],
    description: "Most verbose output for debug",
};
var version = {
    name: ["-V", "--version"],
    description: "Display this application version",
};
var ansi = {
    name: ["--ansi"],
    description: "Force ANSI output",
};
var noAnsi = {
    name: ["--no-ansi"],
    description: "Disable ANSI output",
};
var noInteraction = {
    name: ["-n", "--no-interaction"],
    description: "Do not ask any interactive question",
};
var globalOptions = [
    help,
    verbose,
    vverbose,
    vvverbose,
    version,
    ansi,
    noAnsi,
    noInteraction,
];
var completionSpec = {
    name: "poetry",
    description: "Python package manager",
    subcommands: [
        {
            name: "about",
            description: "Show information about Poetry",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "add",
            description: "Adds a new dependency to pyproject.toml",
            args: {
                name: "dependency",
                description: "Package to add",
            },
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["-D", "--dev"],
                    description: "Add as a development dependency",
                },
                {
                    name: ["-E", "--extras"],
                    description: "Extras to activate for the dependency",
                    args: {
                        name: "extras",
                        description: "Extras",
                    },
                },
                {
                    name: ["--optional"],
                    description: "Add as an optional dependency",
                },
                {
                    name: ["--dry-run"],
                    description: "Output the operations but do not execute anything (implicitly enables --verbose)",
                },
                {
                    name: ["--lock"],
                    description: "Do not perform operations (only update the lockfile)",
                },
            ]),
        },
        {
            name: "build",
            description: "Builds a package, as a tarball and a wheel by default",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["-f", "--format"],
                    description: "Limit the format to either sdist or wheel",
                    args: [
                        {
                            name: "format",
                            suggestions: [
                                {
                                    name: "sdist",
                                    description: "Use sdist format",
                                },
                                {
                                    name: "wheel",
                                    description: "Use wheel format",
                                },
                            ],
                        },
                    ],
                },
            ]),
        },
        {
            name: "check",
            description: "Checks the validity of the pyproject.toml file",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "config",
            description: "Manages configuration settings",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["--list"],
                    description: "List configuration settings",
                },
                {
                    name: ["--unset"],
                    description: "Unset configuration setting",
                    args: {
                        name: "key",
                        description: "Setting key to remove",
                    },
                },
                {
                    name: ["--local"],
                    description: "Set/Get from the project's local configuration",
                },
            ]),
            args: [
                {
                    name: "key",
                    description: "Setting key",
                    suggestions: [
                        {
                            name: "cache-dir",
                            description: "The path to the cache directory used by Poetry",
                        },
                        {
                            name: "virtualenvs.create",
                            description: "Create a new virtualenv if one doesn't already exist",
                        },
                        {
                            name: "virtualenvs.in-project",
                            description: "Create the virtualenv inside the project's root directory",
                        },
                        {
                            name: "virtualenvs.path",
                            description: "Directory where virtual environments will be created",
                        },
                        {
                            name: "repositories.{name}",
                            description: "Set a new alternative repository",
                            insertValue: "repositories.",
                        },
                    ],
                },
                {
                    name: "value",
                    description: "Setting value",
                },
            ],
        },
        {
            name: "debug",
            description: "Debug various elements of Peotry",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "env",
            description: "Interact with Poetry's project environments",
            subcommands: [
                {
                    name: "info",
                    description: "Displays information about the current environment",
                    options: [
                        {
                            name: ["-p", "--path"],
                            description: "Only desplay the environment's path",
                        },
                    ],
                },
                {
                    name: "list",
                    description: "Lists all virtualenvs associated with the current project",
                    options: [
                        {
                            name: ["--full-path"],
                            description: "Output the full paths of the virtualenvs",
                        },
                    ],
                },
                {
                    name: "remove",
                    description: "Removes a specific virtualenv associated with the project",
                    args: [
                        {
                            name: "python",
                            description: "The python executable to remove the virtualenv for",
                        },
                    ],
                },
                {
                    name: "use",
                    description: "Activates or creates a new virtualenv for the current project",
                    args: [
                        {
                            name: "python",
                            description: "The python executable to use",
                        },
                    ],
                },
            ],
            options: __spreadArray([], globalOptions),
        },
    ],
    options: __spreadArray([], globalOptions),
    // Only uncomment if poetry takes an argument
    // args: {}
};

