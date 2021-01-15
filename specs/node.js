var completionSpec = {
    name: "node",
    description: "Run the node interpretor",
    args: {
<<<<<<< HEAD
<<<<<<< HEAD
        templateSuggestions: ["files", "folders"] 
=======
        generator: {
            script: "ls -1 | grep '.js'",
            splitOn: "\n"
        }
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
=======
        template: "filepaths",
        postProcess: function (paths) {
            return paths.filter(file => {
                return file.name.endsWith('.js') || file.name.endsWith('/')
            })
        }

>>>>>>> cc03fa9... fixed up fig spec, templating in node, and added names and descriptions to git push and pull
    },
    options: [
        {
            name: ["-e", "--eval=..."],
            insertValue: "-e '{cursor}'",
            description: "evaluate script",
            args: { },
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
