var completionSpec = {
<<<<<<< HEAD
    name: 'ls',
    description: 'list directory contents',
    args: {
<<<<<<< HEAD
<<<<<<< HEAD
        variadic: true,
        template: 'folders',
=======
        isVariadic: true,
        template: "folders"
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
        variadic: true,
        template: 'folders',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
  name: "ls",
  description: "list directory contents",
  args: {
    variadic: true,
    template: "folders",
  },
  options: [
    {
      name: "-l",
      description: "list in long format",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
    },
    {
      name: ["-1"],
      description: "one entry per line",
    },
    {
      name: ["-A"],
      description: "list all entries except for . and ..",
    },
    {
      name: ["-a"],
      description: "include directory that begin with a dot",
    },
    {
      name: ["-F"],
      description: "Add special character for different types of files",
    },
    {
      name: ["-p"],
      description:
        "Write a slash after each filename if that file is a directory.",
    },
    {
      name: ["-R"],
      description: "Recursively list subdirectories encountered.",
    },
  ],
};
