var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 09336dc... fix: Specs exports and script type
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'xcode-select',
    description: 'Active developer directory for Xcode tools',
    options: [
        {
            name: ['-h', '--help'],
            description: 'Help message',
        },
        {
            name: ['-p', '--print-path'],
            description: 'Display path to active developer directory',
        },
        {
            name: ['-s', '--switch'],
            description: 'Set path to active developer directory',
            insertValue: '-s ',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            args: {
                name: 'path',
                template: 'folders',
            },
        },
        {
            name: ['--install'],
            description: 'Install Xcode command line tools',
        },
        {
            name: ['-v', '--version'],
            description: 'Display version',
        },
        {
            name: ['-r', '--reset'],
            description: 'Reset to the default CLT path',
        },
    ],
<<<<<<< HEAD
=======
    name: "xcode-select",
    description: "Active developer directory for Xcode tools",
    options: [{
            name: ["-h", "--help"],
            description: "Help message"
        }, {
            name: ["-p", "--print-path"],
            description: "Display path to active developer directory"
        }, {
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    name: "xcode-select",
    description: "Active developer directory for Xcode tools",
    options: [
        {
            name: ["-h", "--help"],
            description: "Help message",
        },
        {
            name: ["-p", "--print-path"],
            description: "Display path to active developer directory",
        },
        {
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: ["-s", "--switch"],
            description: "Set path to active developer directory",
            insertValue: "-s ",
            args: {
                name: "path",
<<<<<<< HEAD
<<<<<<< HEAD
                template: "folders"
            }
        }, {
            name: ["--install"],
            description: "Install Xcode command line tools"
        }, {
            name: ["-v", "--version"],
            description: "Display version"
        }, {
            name: ["-r", "--reset"],
            description: "Reset to the default CLT path"
        }]
>>>>>>> 4082cac... feat: Add removed specs
=======
            args: {
                name: 'path',
                template: 'folders',
            },
        },
        {
            name: ['--install'],
            description: 'Install Xcode command line tools',
        },
        {
            name: ['-v', '--version'],
            description: 'Display version',
        },
        {
            name: ['-r', '--reset'],
            description: 'Reset to the default CLT path',
        },
    ],
>>>>>>> 09336dc... fix: Specs exports and script type
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
  name: "xcode-select",
  description: "Active developer directory for Xcode tools",
  options: [
    {
      name: ["-h", "--help"],
      description: "Help message",
    },
    {
      name: ["-p", "--print-path"],
      description: "Display path to active developer directory",
    },
    {
      name: ["-s", "--switch"],
      description: "Set path to active developer directory",
      insertValue: "-s ",
      args: {
        name: "path",
        template: "folders",
      },
    },
    {
      name: ["--install"],
      description: "Install Xcode command line tools",
    },
    {
      name: ["-v", "--version"],
      description: "Display version",
    },
    {
      name: ["-r", "--reset"],
      description: "Reset to the default CLT path",
    },
  ],
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                template: "folders",
            },
        },
        {
            name: ["--install"],
            description: "Install Xcode command line tools",
        },
        {
            name: ["-v", "--version"],
            description: "Display version",
        },
        {
            name: ["-r", "--reset"],
            description: "Reset to the default CLT path",
        },
    ],
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
};

