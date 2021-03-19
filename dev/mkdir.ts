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
    name: 'mkdir',
    description: 'make directories',
    args: {
        name: 'directory name',
>>>>>>> 6bc5008... feat: lint & prettier all files
    },
    options: [
        {
            name: ['-m', '--mode'],
            description: 'set file mode (as in chmod), not a=rwx - umask',
            args: { name: 'MODE' },
        },
        {
            name: ['-p', '--parents'],
            description: 'no error if existing, make parent directories as needed',
        },
        {
            name: ['-v', '--verbose'],
            description: 'print a message for each created directory',
        },
        {
            name: ['-Z', '--context'],
            description: 'set the SELinux security context of each created directory to CTX',
            args: { name: 'CTX' },
        },
        { name: ['--help'], description: 'display this help and exit' },
        {
            name: ['--version'],
            description: 'output version information and exit',
        },
    ],
};
