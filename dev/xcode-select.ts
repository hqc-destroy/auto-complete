<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
export const completionSpec: Fig.Spec = {
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
};
<<<<<<< HEAD
=======
export const xcodeSelectCompletionSpec = {
<<<<<<< HEAD
    name: "xcode-select",
    description: "Active developer directory for Xcode tools",
    options: [{
        name: ["-h", "--help"],
        description: "Help message"
    }, {
        name: ["-p", "--print-path"],
        description: "Display path to active developer directory"
    }, {
        name: ["-s", "--switch"],
        description: "Set path to active developer directory",
        insertValue: "-s ",
        args: {
            name: "path",
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
}
>>>>>>> 4082cac... feat: Add removed specs
=======
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
};
>>>>>>> 09336dc... fix: Specs exports and script type
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
