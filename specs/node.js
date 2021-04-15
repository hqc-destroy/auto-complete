var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    name: "node",
    description: "Run the node interpretor",
    args: {
        name: "node script",
        isScript: true,
        generators: {
            template: "filepaths",
            filterTemplateSuggestions: function (paths) {
<<<<<<< HEAD
<<<<<<< HEAD
                return paths.filter(file => {
                    return file.name.endsWith('.js') || file.name.endsWith('/')
                })
            }
        }
    },
    options: [
        {
            name: ["-e", "--eval=..."],
            insertValue: "-e '{cursor}'",
            description: "evaluate script",
            args: {},
        },
        {
            name: ["-p", "--print"],
            description: "evaluate script and print result",
        },
        {
            name: ["-c", "--check"],
            description: "syntax check script without executing",
        },
        {
            name: ["-v", "--version"],
            description: "print Node.js version",
        },
        {
            name: ["-i", "--interactive"],
            description: "always enter the REPL even if stdin does not appear to be a terminal",
        }
    ]

}
=======
    name: 'node',
    description: 'Run the node interpretor',
    args: {
        generators: {
            template: 'filepaths',
            filterTemplateSuggestions: function (paths) {
                return paths.filter(function (file) {
                    if (typeof file.name === 'string') {
                        return file.name.endsWith('.js') || file.name.endsWith('/');
=======
                return paths.filter(function (file) {
                    if (typeof file.name === "string") {
                        return file.name.endsWith(".js") || file.name.endsWith("/");
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
                return paths.filter(function (file) {
                    if (typeof file.name === "string") {
                        return file.name.endsWith(".js") || file.name.endsWith("/");
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    }
                    return false;
                });
            },
        },
<<<<<<< HEAD
<<<<<<< HEAD
=======
  name: "node",
  description: "Run the node interpretor",
  args: {
    generators: {
      template: "filepaths",
      filterTemplateSuggestions: function (paths) {
        return paths.filter(function (file) {
          if (typeof file.name === "string") {
            return file.name.endsWith(".js") || file.name.endsWith("/");
          }
          return false;
        });
      },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    },
    options: [
        {
            name: ["-e", "--eval=..."],
            insertValue: "-e '{cursor}'",
            description: "evaluate script",
            args: {},
        },
        {
            name: ["-p", "--print"],
            description: "evaluate script and print result",
        },
        {
            name: ["-c", "--check"],
            description: "syntax check script without executing",
        },
        {
            name: ["-v", "--version"],
            description: "print Node.js version",
        },
        {
            name: ["-i", "--interactive"],
            description: "always enter the REPL even if stdin does not appear to be a terminal",
        },
    ],
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======

>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======

>>>>>>> 3879070... feat: re-add built specs and update gitignore
