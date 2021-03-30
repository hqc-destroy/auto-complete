var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
    name: "node",
    description: "Run the node interpretor",
    args: {
        generators: {
            template: "filepaths",
            filterTemplateSuggestions: function (paths) {
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
                    }
                    return false;
                });
            },
        },
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
    },
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
      description:
        "always enter the REPL even if stdin does not appear to be a terminal",
    },
  ],
};
<<<<<<< HEAD

>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
