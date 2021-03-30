<<<<<<< HEAD
export const lsCompletionSpec: Fig.Spec = {
<<<<<<< HEAD
=======
export const completionSpec: Fig.Spec = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'ls',
    description: 'list directory contents',
    args: {
        variadic: true,
        template: 'folders',
<<<<<<< HEAD
=======

  name: "ls",
  description: "list directory contents",
  args: {
    isVariadic: true,
    template: "folders"
  },
  options: [
    {
      name: "-l",
      description: "list in long format"
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
  name: 'ls',
  description: 'list directory contents',
=======
  name: "ls",
  description: "list directory contents",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
  args: {
    variadic: true,
    template: "folders",
  },
  options: [
    {
<<<<<<< HEAD
      name: '-l',
      description: 'list in long format',
>>>>>>> 65036d2... fixed linting and prettier
=======
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
