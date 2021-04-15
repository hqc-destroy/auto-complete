var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    name: "wrk",
    description: "wrk - a HTTP benchmarking tool",
    args: {
        name: "Url"
=======
    name: 'wrk',
    description: 'wrk - a HTTP benchmarking tool',
    args: {
        name: 'Url',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    },
    options: [
        {
            name: ['-c', '--c'],
            description: 'Connections to keep open',
            args: {
<<<<<<< HEAD
                name: "Number"
            }
=======
                name: 'Number',
            },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        },
        {
            name: ['-d', '--duration'],
            description: 'Duration of test',
            args: {
<<<<<<< HEAD
                name: "Time"
            }
=======
                name: 'Time',
            },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        },
        {
            name: ['-t', '--threads'],
            description: 'Number of threads',
            args: {
<<<<<<< HEAD
                name: "Number"
            }
=======
                name: 'Number',
            },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        },
        {
            name: ['-s', '--script'],
            description: 'Load Lua script file',
            args: {
<<<<<<< HEAD
                name: "Script"
            }
=======
                name: 'Script',
            },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        },
        {
            name: ['-H', '--header'],
            description: 'Add header to request',
            args: {
<<<<<<< HEAD
                name: "Header"
            }
        },
        {
            name: '--latency',
            description: 'Print latency statistics'
=======
                name: 'Header',
            },
        },
        {
            name: '--latency',
            description: 'Print latency statistics',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        },
        {
            name: '--timeout',
            description: 'Socket/request timeout',
            args: {
<<<<<<< HEAD
                name: "Time"
            }
        },
        {
            name: ['-v', '--version'],
            description: 'Print version details'
        },
        {
            name: ['-h', '--help'],
            description: 'output usage information'
        }
    ]
}
=======
                name: 'Time',
            },
        },
        {
            name: ['-v', '--version'],
            description: 'Print version details',
        },
        {
            name: ['-h', '--help'],
            description: 'output usage information',
        },
    ],
};

>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
  name: "wrk",
  description: "wrk - a HTTP benchmarking tool",
  args: {
    name: "Url",
  },
  options: [
    {
      name: ["-c", "--c"],
      description: "Connections to keep open",
      args: {
        name: "Number",
      },
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    name: "wrk",
    description: "wrk - a HTTP benchmarking tool",
    args: {
        name: "Url",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    },
    options: [
        {
            name: ["-c", "--c"],
            description: "Connections to keep open",
            args: {
                name: "Number",
            },
        },
        {
            name: ["-d", "--duration"],
            description: "Duration of test",
            args: {
                name: "Time",
            },
        },
        {
            name: ["-t", "--threads"],
            description: "Number of threads",
            args: {
                name: "Number",
            },
        },
        {
            name: ["-s", "--script"],
            description: "Load Lua script file",
            args: {
                name: "Script",
            },
        },
        {
            name: ["-H", "--header"],
            description: "Add header to request",
            args: {
                name: "Header",
            },
        },
        {
            name: "--latency",
            description: "Print latency statistics",
        },
        {
            name: "--timeout",
            description: "Socket/request timeout",
            args: {
                name: "Time",
            },
        },
        {
            name: ["-v", "--version"],
            description: "Print version details",
        },
        {
            name: ["-h", "--help"],
            description: "output usage information",
        },
    ],
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======

>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======

>>>>>>> 3879070... feat: re-add built specs and update gitignore
