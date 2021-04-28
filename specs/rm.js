var completionSpec = {
    name: "rm",
    description: "remove directory entries",
    args: [
        {
<<<<<<< HEAD
            variadic: true,
<<<<<<< HEAD
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            template: "filepaths",
=======
            template: ["folders", "filepaths"],
>>>>>>> ca3647a... fix: update subl and rm to accept both files and folders as arguments
        },
    ],
    subcommands: [],
    options: [
        {
            name: ["-r", "-R"],
            description: "Recursive. Attempt to remove the file hierarchy rooted in each file argument.",
        },
        {
            name: "-P",
            description: "Overwrite regular files before deleting them.",
        },
        {
            name: "-d",
            description: "Attempt to remove directories as well as other types of files.",
        },
        {
            name: "-f",
            description: "⚠️ Attempt to remove the files without prompting for confirmation",
        },
        {
            name: "-i",
            description: "Request confirmation before attempting to remove each file",
        },
        {
            name: "-v",
            description: "Be verbose when deleting files",
        },
    ],
};

