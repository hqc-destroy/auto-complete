var completionSpec = {
    name: "chmod",
    description: "Change file modes or Access Control Lists.",
    args: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'mode',
            suggestions: [
                // Some of the most common chmod's (non-exhaustive)
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ['u+x'],
                    type: 'argument',
=======
                    name: ['u+x'],
                    type: 'arg',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    description: 'give execute permission for the user',
                    icon: '🔐',
                },
                {
                    name: ['a+rx'],
<<<<<<< HEAD
                    type: 'argument',
=======
                    type: 'arg',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    description: 'adds read and execute permissions for all classes',
                    icon: '🔐',
                },
                {
                    name: ['744'],
<<<<<<< HEAD
                    type: 'argument',
=======
                    type: 'arg',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    description: 'sets read, write, and execute permissions for user, and sets read permission for Group and Others',
                    icon: '🔐',
                },
                {
                    name: ['664'],
<<<<<<< HEAD
                    type: 'argument',
=======
                    type: 'arg',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    description: 'sets read and write permissions for user and Group, and provides read to Others.',
                    icon: '🔐',
                },
                {
                    name: ['777'],
<<<<<<< HEAD
                    type: 'argument',
                    description: '⚠️ allows all actions for all users',
                    icon: '🔐',
=======
                    name: ["u+x"],
                    type: "subcommand",
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "mode",
            suggestions: [
                // Some of the most common chmod's (non-exhaustive)
                {
                    name: ["u+x"],
                    type: "arg",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    description: "give execute permission for the user",
                    icon: "🔐",
                },
                {
                    name: ["a+rx"],
<<<<<<< HEAD
<<<<<<< HEAD
                    type: "subcommand",
=======
                    type: "arg",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
                    type: "arg",
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    description: "adds read and execute permissions for all classes",
                    icon: "🔐",
                },
                {
                    name: ["744"],
<<<<<<< HEAD
<<<<<<< HEAD
                    type: "subcommand",
=======
                    type: "arg",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
                    type: "arg",
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    description: "sets read, write, and execute permissions for user, and sets read permission for Group and Others",
                    icon: "🔐",
                },
                {
                    name: ["664"],
<<<<<<< HEAD
<<<<<<< HEAD
                    type: "subcommand",
=======
                    type: "arg",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
                    type: "arg",
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    description: "sets read and write permissions for user and Group, and provides read to Others.",
                    icon: "🔐",
                },
                {
                    name: ["777"],
<<<<<<< HEAD
<<<<<<< HEAD
                    type: "subcommand",
                    description: "⚠️ allows all actions for all users",
                    icon: "🔐",
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                    type: 'arg',
                    description: '⚠️ allows all actions for all users',
                    icon: '🔐',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
            ],
=======
          name: ["u+x"],
          type: "arg",
          description: "give execute permission for the user",
          icon: "🔐",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    type: "arg",
                    description: "⚠️ allows all actions for all users",
                    icon: "🔐",
                },
            ],
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
        },
        {
            // Modifying
            template: "filepaths",
        },
    ],
    subcommands: [],
    options: [
        {
            name: "-f",
            description: "Do not display a diagnostic message if chmod could not modify the mode for file, nor modify the exit status to reflect such failures.",
        },
        {
            name: "-H",
            description: "If the -R option is specified, symbolic links on the command line are followed and hence unaffected by the command.  (Symbolic links encountered during tree traversal are not followed.).",
        },
        {
            name: "-h",
            description: "If the file is a symbolic link, change the mode of the link itself rather than the file that the link points to.",
        },
        {
            name: "-L",
            description: "If the -R option is specified, all symbolic links are followed.",
        },
        {
            name: "-P",
            description: "If the -R option is specified, no symbolic links are followed. This is the default.",
        },
        {
            name: "-R",
            description: "Change the modes of the file hierarchies rooted in the files, instead of just the files themselves. Beware of unintentionally matching the ``..'' hard link to the parent directory when using wildcards like ``.*''.",
        },
        {
            name: "-v",
            description: "Cause chmod to be verbose, showing filenames as the mode is modified. If the -v flag is specified more than once, the old and new modes of the file will also be printed, in both octal and symbolic notation.",
        },
    ],
};

