<<<<<<< HEAD
export const mkdirCompletionSpec: Fig.Spec = {
<<<<<<< HEAD
  name: 'mkdir',
  description: 'make directories',
  args: {
<<<<<<< HEAD:specs/mkdir.ts
    name: 'directory name'
=======
    name: "folder name"
>>>>>>> 43da703... Update mkdir.js:specs/mkdir.js
  },
  options: [
    {
      name: [ '-m', '--mode' ],
      description: 'set file mode (as in chmod), not a=rwx - umask',
      args: { name: 'MODE' }
=======
=======
export const completionSpec: Fig.Spec = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'mkdir',
    description: 'make directories',
    args: {
        name: 'directory name',
<<<<<<< HEAD
>>>>>>> 6bc5008... feat: lint & prettier all files
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
  name: 'mkdir',
  description: 'make directories',
=======
  name: "mkdir",
  description: "make directories",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
  args: {
    name: "directory name",
  },
  options: [
    {
<<<<<<< HEAD
      name: ['-m', '--mode'],
      description: 'set file mode (as in chmod), not a=rwx - umask',
      args: { name: 'MODE' },
>>>>>>> 65036d2... fixed linting and prettier
=======
      name: ["-m", "--mode"],
      description: "set file mode (as in chmod), not a=rwx - umask",
      args: { name: "MODE" },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
    },
    {
      name: ["-p", "--parents"],
      description: "no error if existing, make parent directories as needed",
    },
    {
      name: ["-v", "--verbose"],
      description: "print a message for each created directory",
    },
    {
      name: ["-Z", "--context"],
      description:
        "set the SELinux security context of each created directory to CTX",
      args: { name: "CTX" },
    },
    { name: ["--help"], description: "display this help and exit" },
    {
      name: ["--version"],
      description: "output version information and exit",
    },
  ],
};
