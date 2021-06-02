<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var generators = {
    runningDockerContainers: {
        script: "docker ps --format '{{ json . }}'",
        postProcess: function (out) {
            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
            return allLines.map(function (i) { return ({
                name: i.ID,
                displayName: i.ID + " (" + i.Image + ")",
            }); });
        },
    },
    allDockerContainers: {
        script: "docker ps -a --format '{{ json . }}'",
        postProcess: function (out) {
            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
            return allLines.map(function (i) { return ({
                name: i.ID,
                displayName: i.ID + " (" + i.Image + ")",
=======
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
=======
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
>>>>>>> a09fa69... removed linting from all js specs in specs folder
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var postProcessDockerPs = function (out) {
    var allLines = out.split("\n");
    return allLines.map(function (i) {
        try {
            var parsedJSON = JSON.parse(i);
            return {
                name: parsedJSON.ID,
                displayName: parsedJSON.ID + " (" + parsedJSON.Image + ")",
            };
        }
        catch (error) {
            console.error(error);
        }
    });
};
var dockerGenerators = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a09fa69... removed linting from all js specs in specs folder
    runningDockerContainers: {
        script: "docker ps --format '{{ json . }}'",
        postProcess: postProcessDockerPs,
    },
    allDockerContainers: {
        script: "docker ps -a --format '{{ json . }}'",
        postProcess: postProcessDockerPs,
    },
    pausedDockerContainers: {
        script: "docker ps --filter status=paused --format '{{ json . }}'",
        postProcess: postProcessDockerPs,
    },
    allLocalImages: {
        script: "docker image ls --format '{{ json . }}'",
        postProcess: function (out) {
<<<<<<< HEAD
            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
            return allLines.map(function (i) { return ({
                name: "" + i.Repository,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            }); });
        },
=======
  runningDockerContainers: {
    script: "docker ps --format '{{ json . }}'",
    postProcess: postProcessDockerPs,
  },
  allDockerContainers: {
    script: "docker ps -a --format '{{ json . }}'",
    postProcess: postProcessDockerPs,
  },
  pausedDockerContainers: {
    script: "docker ps --filter status=paused --format '{{ json . }}'",
    postProcess: postProcessDockerPs,
  },
  allLocalImages: {
    script: "docker image ls --format '{{ json . }}'",
    postProcess: function (out) {
      var allLines = out.split("\n").map(function (line) {
        return JSON.parse(line);
      });
      return allLines.map(function (i) {
        return {
          name: "" + i.Repository,
        };
      });
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
            var allLines = out
                .split("\n")
                .map(function (line) { return JSON.parse(line); });
            return allLines.map(function (i) { return ({
                name: "" + i.Repository,
            }); });
        },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
    },
};
<<<<<<< HEAD
=======
// TODO: args and options

>>>>>>> 0b8294c... style: Clean up code styling
=======
=======
var postProcessDockerPs = (out) => {
	let allLines = out.split('\n');
	return allLines.map(i => {
		try {
			i = JSON.parse(i)
			return {
				name: i.ID,
				displayName: `${i.ID} (${i.Image})`,
			}
		} catch (error) {
			console.error(error);	
		}
	});
}

>>>>>>> 2c866c5... fix(docker): Various fixes
var generators = {
    runningDockerContainers: {
        script: `docker ps --format '{{ json . }}'`,
        postProcess: postProcessDockerPs
    },
    allDockerContainers: {
        script: `docker ps -a --format '{{ json . }}'`,
        postProcess: postProcessDockerPs
    },
	pausedDockerContainers: {
		script: `docker ps --filter status=paused --format '{{ json . }}'`,
		postProcess: postProcessDockerPs
	},
	allLocalImages: {
		script: `docker image ls --format '{{ json . }}'`,
		postProcess: function (out) {
            let allLines = out.split('\n').map(JSON.parse);
            return allLines.map(i => ({
                name: `${i.Repository}`,
            }));
        }
	}
};

<<<<<<< HEAD
<<<<<<< HEAD
// TODO: args and options

// option
// {
// 	name: [""],
// 	description: "",
// 	args: {}
// },

<<<<<<< HEAD
>>>>>>> 09dd2f6... feat: Options for all parent commands
=======
// {
// 	name: 'container',
// 	generators: [
// 		generators.runningDockerContainers,
// 	]
// }

<<<<<<< HEAD
>>>>>>> e5d1b4e... feat: docker commit args
=======
// [
// 	{
// 		name: 'container',
// 		generators: [
// 			generators.runningDockerContainers,
// 		]
// 	},
// 	{
// 		name: 'command',
// 		isCommand: true
// 	}
// ],

=======
>>>>>>> 7f831e3... style: Remove unneeded comments
// TODO: Does isVariadic work?
=======
>>>>>>> 2c866c5... fix(docker): Various fixes
var containersArg = {
	name: 'container',
	generators: [
		generators.runningDockerContainers,
	]
};

var imagesArg = {
	name: 'image',
	generators: [
		generators.allLocalImages,
	]
}


const containerAndCommandArgs = [
	containersArg,
	{
		name: 'command',
		isCommand: true
	}
];

>>>>>>> 633fa38... feat(docker): :construction: exec args
=======
var containersArg = {
    name: "container",
    generators: [dockerGenerators.runningDockerContainers],
};
var imagesArg = {
    name: "image",
    generators: [dockerGenerators.allLocalImages],
};
var containerAndCommandArgs = [
<<<<<<< HEAD
  containersArg,
  {
    name: "command",
    isCommand: true,
  },
];
>>>>>>> e321ca1... feat: update all scripts and  move to ts
var completionSpec = {
<<<<<<< HEAD
    name: 'docker',
    description: 'A self-sufficient runtime for containers',
    subcommands: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        { name: "attach", description: "Attach local standard input, output, and error streams to a running container" },
        { name: "build", description: "Build an image from a Dockerfile" },
        { name: "commit", description: "Create a new image from a container's changes" },
        { name: "cp", description: "Copy files/folders between a container and the local filesystem" },
        { name: "create", description: "Create a new container" },
        { name: "diff", description: "Inspect changes to files or directories on a container's filesystem" },
        { name: "events", description: "Get real time events from the server" },
        { name: "exec", description: "Run a command in a running container" },
        { name: "export", description: "Export a container's filesystem as a tar archive" },
        { name: "history", description: "Show the history of an image" },
        { name: "images", description: "List images" },
        { name: "import", description: "Import the contents from a tarball to create a filesystem image" },
        { name: "info", description: "Display system-wide information" },
        { name: "inspect", description: "Return low-level information on Docker objects" },
        { name: "kill", description: "Kill one or more running containers" },
        { name: "load", description: "Load an image from a tar archive or STDIN" },
        { name: "login", description: "Log in to a Docker registry" },
        { name: "logout", description: "Log out from a Docker registry" },
        { name: "logs", description: "Fetch the logs of a container" },
        { name: "pause", description: "Pause all processes within one or more containers" },
        { name: "port", description: "List port mappings or a specific mapping for the container" },
        { name: "ps", description: "List containers" },
        { name: "pull", description: "Pull an image or a repository from a registry" },
        { name: "push", description: "Push an image or a repository to a registry" },
        { name: "rename", description: "Rename a container" },
        { name: "restart", description: "Restart one or more containers" },
        { name: "rm", description: "Remove one or more containers" },
        { name: "rmi", description: "Remove one or more images" },
        {
=======

        {name: "attach", description: "Attach local standard input, output, and error streams to a running container"},
=======
        { name: "attach", description: "Attach local standard input, output, and error streams to a running container" },
>>>>>>> 3c23470... feat: move js specs to ts
=======
>>>>>>> b5d9641... fix: also fix compiled specs
        {
            name: 'attach',
            description: 'Attach local standard input, output, and error streams to a running container',
=======
        {
            name: 'attach',
            description: 'Attach local standard input, output, and error streams to a running container,',
            args: containersArg,
            options: [
                {
                    name: ['--detach-keys'],
                    description: 'Override the key sequence for detaching a container',
                    args: {
                        name: 'string',
                    },
                },
                {
                    name: ['--no-stdin'],
                    description: 'Do not attach STDIN',
                    args: {},
                },
                {
                    name: ['--sig-proxy'],
                    description: 'Proxy all received signals to the process (default true)',
                    args: {},
                },
            ],
            subcommands: [],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        },
        {
            name: 'build',
            description: 'Build an image from a Dockerfile',
            args: {
                name: 'path',
                generators: [
                    {
                        template: 'folders',
                    },
                ],
            },
            options: [
                {
                    name: '--add-host',
                    args: {
                        name: 'list',
                        description: 'Add a custom host-to-IP mapping (host:ip)',
                    },
                },
                {
                    name: '--build-arg',
                    args: {
                        name: 'list',
                        description: 'Set build-time variables',
                    },
                },
                {
                    name: '--cache-from',
                    args: {
                        name: 'strings',
                        description: 'Images to consider as cache sources',
                    },
                },
                {
                    name: '--disable-content-trust',
                    description: 'Skip image verification (default true)',
                },
                {
                    name: ['-f', '--file'],
                    description: "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
                    args: {
                        name: 'string',
                        generators: [
                            {
                                template: 'filepaths',
                            },
                        ],
                    },
                },
                {
                    name: '--iidfile',
                    description: 'Write the image ID to the file',
                    args: {
                        name: 'string',
                    },
                },
                {
                    name: '--isolation',
                    description: 'Container isolation technology',
                    args: {
                        name: 'string',
                    },
                },
                {
                    name: '--label',
                    description: 'Set metadata for an image',
                    args: {
                        name: 'list',
                    },
                },
                {
                    name: '--network',
                    description: 'Set the networking mode for the RUN instructions during build (default "default")',
                    args: {
                        name: 'string',
                    },
                },
                {
                    name: '--no-cache',
                    description: 'Do not use cache when building the image',
                },
                {
                    name: ['-o', '--output'],
                    description: 'Output destination (format: type=local,dest=path)',
                    args: {
                        name: 'stringArray',
                    },
                },
                {
                    name: '--platform',
                    description: 'Set platform if server is multi-platform capable',
                    args: {
                        name: 'string',
                    },
                },
                {
                    name: '--progress',
                    description: 'Set type of progress output (auto, plain, tty). Use plain to show container output',
                    args: {
                        name: 'string',
                        suggestions: ['auto', 'plain', 'tty'].map(function (i) { return ({ name: i }); }),
                    },
                },
                {
                    name: '--pull',
                    description: 'Always attempt to pull a newer version of the image',
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Suppress the build output and print image ID on success',
                },
                {
                    name: '--secret',
                    description: "Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret",
                    args: {
                        name: 'stringArray',
                    },
                },
                {
                    name: '--squash',
                    description: 'Squash newly built layers into a single new layer',
                },
                {
                    name: '--ssh',
                    description: "SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format: default|<id>[=<socket>|<key>[,<key>]])",
                    args: {
                        name: 'stringArray',
                    },
                },
                {
                    name: ['-t', '--tag'],
                    description: "Name and optionally a tag in the 'name:tag' format",
                },
                {
                    name: '--target',
                    description: 'Set the target build stage to build',
                    args: {
                        name: 'target build stage',
                        generators: [
                            {
                                trigger: function () {
                                    return true;
                                },
                                script: function (context) {
<<<<<<< HEAD
                                    var fileFlagIndex;
                                    var dockerfilePath;
=======
                                    var fileFlagIndex, dockerfilePath;
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                    if (context.includes('-f')) {
                                        fileFlagIndex = context.indexOf('-f');
                                        dockerfilePath = context[fileFlagIndex + 1];
                                    }
                                    else if (context.includes('--file')) {
                                        fileFlagIndex = context.indexOf('--file');
                                        dockerfilePath = context[fileFlagIndex + 1];
                                    }
                                    else {
                                        dockerfilePath = '$PWD/Dockerfile';
                                    }
                                    return "grep -iE 'FROM.*AS' \"" + dockerfilePath + "\"";
                                },
                                postProcess: function (out) {
                                    // This just searches the Dockerfile for the alias name after AS,
                                    // and due to the grep above, will only match lines where FROM and AS
                                    // are on the same line. This could certainly be made more robust
                                    // down the line.
                                    var imageNameRegexp = /(?:[aA][sS]\s+)([\w:.-]+)/;
                                    return out
                                        .split('\n')
                                        .map(function (i) {
                                        var result = imageNameRegexp.exec(i);
                                        if (result) {
                                            return {
                                                name: result[1],
                                            };
                                        }
                                    })
                                        .filter(function (i) { return i !== undefined; });
                                },
                            },
                        ],
                    },
                },
            ],
=======
  name: "docker",
  description: "A self-sufficient runtime for containers",
  subcommands: [
    {
      name: "attach",
      description:
        "Attach local standard input, output, and error streams to a running container,",
      args: containersArg,
      options: [
        {
          name: ["--detach-keys"],
          description: "Override the key sequence for detaching a container",
          args: {
            name: "string",
          },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
        },
<<<<<<< HEAD
        { name: 'commit', description: "Create a new image from a container's changes" },
        { name: 'cp', description: 'Copy files/folders between a container and the local filesystem' },
        { name: 'create', description: 'Create a new container' },
        { name: 'diff', description: "Inspect changes to files or directories on a container's filesystem" },
        { name: 'events', description: 'Get real time events from the server' },
        { name: 'exec', description: 'Run a command in a running container' },
        { name: 'export', description: "Export a container's filesystem as a tar archive" },
        { name: 'history', description: 'Show the history of an image' },
        {
            name: 'images',
            description: 'List images',
            args: {
                name: '[REPOSITORY[:TAG]]',
            },
            options: [
                {
                    name: ['-a', '--all'],
                    description: 'Show all images (default hides intermediate images)',
                },
                {
                    name: '--digests',
                    description: 'Show digests',
                },
                {
                    name: ['-f', '--filter'],
                    description: 'Filter output based on conditions provided',
                    args: {
                        name: 'filter',
                    },
                },
                {
                    name: '--format',
                    description: 'Pretty-print images using a Go template',
                    args: {
                        name: 'string',
                    },
                },
                {
                    name: '--no-trunc',
                    description: "Don't truncate output",
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Only show image IDs',
                },
            ],
        },
        { name: 'import', description: 'Import the contents from a tarball to create a filesystem image' },
        { name: 'info', description: 'Display system-wide information' },
        {
            name: 'inspect',
            description: 'Return low-level information on Docker objects',
            args: {
                // TODO: There are more types of docker objects beyond running containers
                // that can be inspected
                name: 'Name or ID',
                generators: [
                    {
                        script: "docker ps -a --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) { return ({
                                name: i.ID,
                                displayName: "[con] " + i.ID + " (" + i.Image + ")",
                            }); });
                        },
                    },
                    {
                        script: "docker images -a --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) {
                                var displayName;
                                if (i.Repository === '\u003cnone\u003e') {
                                    displayName = i.ID;
                                }
                                else {
                                    displayName = i.Repository;
                                    if (i.Tag !== '\u003cnone\u003e') {
                                        displayName += ":" + i.Tag;
                                    }
                                }
                                return {
                                    name: i.ID,
                                    displayName: "[img] " + displayName,
                                };
                            });
                        },
                    },
                    {
                        script: "docker volume ls --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) { return ({
                                name: i.Name,
                                displayName: "[vol] " + i.Name,
                            }); });
                        },
                    },
                ],
            },
            options: [
                {
                    name: ['-f', '--format'],
                    description: 'Format the output using the given Go template',
                    args: {
                        name: 'string',
                    },
                },
                {
                    name: ['-s', '--size'],
                    description: 'Display total file sizes if the type is container',
                },
                {
                    name: '--type',
                    description: 'Return JSON for specified type',
                    args: {
                        name: 'string',
                    },
                },
            ],
        },
        { name: 'kill', description: 'Kill one or more running containers' },
        { name: 'load', description: 'Load an image from a tar archive or STDIN' },
        { name: 'login', description: 'Log in to a Docker registry' },
        { name: 'logout', description: 'Log out from a Docker registry' },
        { name: 'logs', description: 'Fetch the logs of a container' },
        { name: 'pause', description: 'Pause all processes within one or more containers' },
        { name: 'port', description: 'List port mappings or a specific mapping for the container' },
        { name: 'ps', description: 'List containers' },
        { name: 'pull', description: 'Pull an image or a repository from a registry' },
        { name: 'push', description: 'Push an image or a repository to a registry' },
        { name: 'rename', description: 'Rename a container' },
        { name: 'restart', description: 'Restart one or more containers' },
        {
            name: 'rm',
            description: 'Remove one or more containers',
            args: {
                variadic: true,
                name: 'containers',
                suggestions: [
                    {
                        name: '$(docker ps -aq)',
                        insertValue: '$(docker ps -aq)',
                        description: 'All containers, running and exited',
                    },
                    {
                        name: '$(docker ps -q)',
                        insertValue: '$(docker ps -q)',
                        description: 'All running containers',
                    },
                ],
                generators: [generators.allDockerContainers],
            },
            options: [
                {
                    name: ['-f', '--force'],
                    description: 'Force the removal of a running container (uses SIGKILL)',
                },
                {
                    name: ['-l', '--link'],
                    description: 'Remove the specified link',
                },
                {
                    name: ['-v', '--volumes'],
                    description: 'Remove the anonymous volumes associated with the container',
                },
            ],
        },
        {
            name: 'rmi',
            description: 'Remove one or more images',
            args: {
                variadic: true,
                name: 'image',
                suggestions: [
                    {
                        name: '$(docker images -aq)',
                        insertValue: '$(docker images -aq)',
                        description: 'All images (including intermediate images)',
                    },
                    {
                        name: '$(docker images -q)',
                        insertValue: '$(docker images -q)',
                        description: 'All non-intermediate images',
                    },
                ],
                generators: [
                    {
                        script: "docker images -aq --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) {
                                var displayName;
                                if (i.Repository === '\u003cnone\u003e') {
                                    displayName = i.ID;
                                }
                                else {
                                    displayName = i.Repository;
                                    if (i.Tag !== '\u003cnone\u003e') {
                                        displayName += ":" + i.Tag;
                                    }
                                }
                                return {
                                    name: i.ID,
                                    displayName: displayName + " (" + i.Size + ")",
                                };
                            });
                        },
                    },
                ],
            },
            options: [
                {
                    name: ['-f', '--force'],
                    description: 'Force removal of the image',
                },
                {
                    name: '--no-prune',
                    description: 'Do not delete untagged parents',
                },
            ],
        },
<<<<<<< HEAD
    	{
>>>>>>> 07aca48... Build out docker CLI commands more, autosuggesting image, container, multi-stage build names, and more
=======
        {
<<<<<<< HEAD
>>>>>>> 0d33bd1... Autoformat
=======
		{ 
			name: "attach",      
			description: "Attach local standard input, output, and error streams to a running container,",
			args: containersArg,
			options: [
				{
					name: ["--detach-keys"],
					description: "Override the key sequence for detaching a container",
					args: {
						name: 'string'
					}
				},
				{
					name: ["--no-stdin"],
					description: "Do not attach STDIN",
					args: {}
				},
				{
					name: ["--sig-proxy"],
					description: "Proxy all received signals to the process (default true)",
					args: {}
				},
			],
			subcommands: []
		},
        {
            name: "build",
            description: "Build an image from a Dockerfile",
            args: {
                name: "path",
                generators: [
                    {
                        template: 'folders'
                    }
                ]
            },
            options: [
                {
                    name: '--add-host',
                    args: {
                        name: "list",
                        description: "Add a custom host-to-IP mapping (host:ip)"
                    }
                },
                {
                    name: '--build-arg',
                    args: {
                        name: "list",
                        description: "Set build-time variables"
                    }
                },
                {
                    name: '--cache-from',
                    args: {
                        name: 'strings',
                        description: 'Images to consider as cache sources'
                    }
                },
                {
                    name: '--disable-content-trust',
                    description: 'Skip image verification (default true)'
                },
                {
                    name: ['-f', '--file'],
                    description: 'Name of the Dockerfile (Default is \'PATH/Dockerfile\')',
                    args: {
                        name: 'string',
                        generators: [{
                            template: 'filepaths'
                        }]
                    }
                },
                {
                    name: '--iidfile',
                    description: 'Write the image ID to the file',
                    args: {
                        name: 'string'
                    }
                },
                {
                    name: '--isolation',
                    description: 'Container isolation technology',
                    args: {
                        name: 'string',
                    }
                },
                {
                    name: '--label',
                    description: 'Set metadata for an image',
                    args: {
                        name: 'list'
                    }
                },
                {
                    name: '--network',
                    description: 'Set the networking mode for the RUN instructions during build (default "default")',
                    args: {
                        name: 'string'
                    }
                },
                {
                    name: '--no-cache',
                    description: 'Do not use cache when building the image'
                },
                {
                    name: ['-o', '--output'],
                    description: 'Output destination (format: type=local,dest=path)',
                    args: {
                        name: 'stringArray'
                    }
                },
                {
                    name: '--platform',
                    description: 'Set platform if server is multi-platform capable',
                    args: {
                        name: 'string'
                    }
                },
                {
                    name: '--progress',
                    description: 'Set type of progress output (auto, plain, tty). Use plain to show container output',
                    args: {
                        name: 'string',
                        suggestions: ['auto', 'plain', 'tty'].map(i => ({name: i}))
                    }
                },
                {
                    name: '--pull',
                    description: 'Always attempt to pull a newer version of the image'
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Suppress the build output and print image ID on success'
                },
                {
                    name: '--secret',
                    description: `Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret`,
                    args: {
                        name: 'stringArray'
                    }
                },
                {
                    name: '--squash',
                    description: 'Squash newly built layers into a single new layer'
                },
                {
                    name: '--ssh',
                    description: `SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format: default|<id>[=<socket>|<key>[,<key>]])`,
                    args: {
                        name: 'stringArray'
                    }
                },
                {
                    name: ['-t', '--tag'],
                    description: 'Name and optionally a tag in the \'name:tag\' format',
                },
                {
                    name: '--target',
                    description: 'Set the target build stage to build',
                    args: {
                        name: 'target build stage',
                        generators: [{
                            trigger: function () {
                                return true;
                            },
                            script: function (context) {
                                let fileFlagIndex, dockerfilePath;
                                if (context.includes('-f')) {
                                    fileFlagIndex = context.indexOf('-f');
                                    dockerfilePath = context[fileFlagIndex + 1];
                                } else if (context.includes('--file')) {
                                    fileFlagIndex = context.indexOf('--file');
                                    dockerfilePath = context[fileFlagIndex + 1];
                                } else {
                                    dockerfilePath = '$PWD/Dockerfile';
                                }

                                return `grep -iE 'FROM.*AS' "${dockerfilePath}"`;
                            },
                            postProcess: function (out) {
                                // This just searches the Dockerfile for the alias name after AS,
                                // and due to the grep above, will only match lines where FROM and AS
                                // are on the same line. This could certainly be made more robust
                                // down the line.
                                let imageNameRegexp = /(?:[aA][sS]\s+)([\w:.-]+)/;
                                return out.split('\n').map(i => {
                                    let result = imageNameRegexp.exec(i);
                                    if (result) {
                                        return {
                                            name: result[1]
                                        };
                                    }
                                }).filter(i => i !== undefined);
                            }
                        }]
                    }
                }
            ]
        },
		{ 
			name: "commit",      
			description: "Create a new image from a container's changes", 
			args: [
				containersArg,
				{
					name: '[REPOSITORY[:TAG]]'
				}
			],
			options: [
				{
					"args": {
						"name": "string"
					},
					"description": "Author (e.g., \"John Hannibal Smith <hannibal@a-team.com>\")",
					"name": [
						"-a",
						"--author"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Apply Dockerfile instruction to the created image",
					"name": [
						"-c",
						"--change"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Commit message",
					"name": [
						"-m",
						"--message"
					]
				},
				{
					"description": "Pause container during commit (default true)",
					"name": [
						"-p",
						"--pause"
					]
				}
			],
			subcommands: []
		},
		{ 
			name: "cp",          
			description: "Copy files/folders between a container and the local filesystem", 
			args: {
				name: 'CONTAINER:SRC_PATH DEST_PATH|- OR SRC_PATH|- CONTAINER:DEST_PATH'
			},
			options: [
				{
					"description": "Archive mode (copy all uid/gid information)",
					"name": [
						"-a",
						"--archive"
					]
				},
				{
					"description": "Always follow symbol link in SRC_PATH",
					"name": [
						"-L",
						"--follow-link"
					]
				}
			],
			subcommands: []
		},
		{ 
			name: "create",      
			description: "Create a new container", 
			args: [
				{
					name: 'container',
					generators: [
						generators.allLocalImages,
					]
				},
				{
					name: 'command',
					isCommand: true
				}
			],
			options: [
				{
					"args": {
						"name": "list"
					},
					"description": "Add a custom host-to-IP mapping (host:ip)",
					"name": [
						"--add-host"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Attach to STDIN, STDOUT or STDERR",
					"name": [
						"-a",
						"--attach"
					]
				},
				{
					"args": {
						"name": "uint16"
					},
					"description": "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
					"name": [
						"--blkio-weight"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Block IO weight (relative device weight) (default [])",
					"name": [
						"--blkio-weight-device"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Add Linux capabilities",
					"name": [
						"--cap-add"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Drop Linux capabilities",
					"name": [
						"--cap-drop"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Optional parent cgroup for the container",
					"name": [
						"--cgroup-parent"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Cgroup namespace to use (host|private)",
					"name": [
						"--cgroupns"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Write the container ID to the file",
					"name": [
						"--cidfile"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Limit CPU CFS (Completely Fair Scheduler) period",
					"name": [
						"--cpu-period"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Limit CPU CFS (Completely Fair Scheduler) quota",
					"name": [
						"--cpu-quota"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Limit CPU real-time period in microseconds",
					"name": [
						"--cpu-rt-period"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Limit CPU real-time runtime in microseconds",
					"name": [
						"--cpu-rt-runtime"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "CPU shares (relative weight)",
					"name": [
						"-c",
						"--cpu-shares"
					]
				},
				{
					"args": {
						"name": "decimal"
					},
					"description": "Number of CPUs",
					"name": [
						"--cpus"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "CPUs in which to allow execution (0-3, 0,1)",
					"name": [
						"--cpuset-cpus"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "MEMs in which to allow execution (0-3, 0,1)",
					"name": [
						"--cpuset-mems"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Add a host device to the container",
					"name": [
						"--device"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Add a rule to the cgroup allowed devices list",
					"name": [
						"--device-cgroup-rule"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Limit read rate (bytes per second) from a device (default [])",
					"name": [
						"--device-read-bps"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Limit read rate (IO per second) from a device (default [])",
					"name": [
						"--device-read-iops"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Limit write rate (bytes per second) to a device (default [])",
					"name": [
						"--device-write-bps"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Limit write rate (IO per second) to a device (default [])",
					"name": [
						"--device-write-iops"
					]
				},
				{
					"description": "Skip image verification (default true)",
					"name": [
						"--disable-content-trust"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Set custom DNS servers",
					"name": [
						"--dns"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Set DNS options",
					"name": [
						"--dns-option"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Set custom DNS search domains",
					"name": [
						"--dns-search"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Container NIS domain name",
					"name": [
						"--domainname"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Overwrite the default ENTRYPOINT of the image",
					"name": [
						"--entrypoint"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Set environment variables",
					"name": [
						"-e",
						"--env"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Read in a file of environment variables",
					"name": [
						"--env-file"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Expose a port or a range of ports",
					"name": [
						"--expose"
					]
				},
				{
					"args": {
						"name": "gpu-request"
					},
					"description": "GPU devices to add to the container ('all' to pass all GPUs)",
					"name": [
						"--gpus"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Add additional groups to join",
					"name": [
						"--group-add"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Command to run to check health",
					"name": [
						"--health-cmd"
					]
				},
				{
					"args": {
						"name": "duration"
					},
					"description": "Time between running the check (ms|s|m|h) (default 0s)",
					"name": [
						"--health-interval"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Consecutive failures needed to report unhealthy",
					"name": [
						"--health-retries"
					]
				},
				{
					"args": {
						"name": "duration"
					},
					"description": "Start period for the container to initialize before starting health-retries countdown (ms|s|m|h) (default 0s)",
					"name": [
						"--health-start-period"
					]
				},
				{
					"args": {
						"name": "duration"
					},
					"description": "Maximum time to allow one check to run (ms|s|m|h) (default 0s)",
					"name": [
						"--health-timeout"
					]
				},
				{
					"description": "Print usage",
					"name": [
						"--help"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Container host name",
					"name": [
						"-h",
						"--hostname"
					]
				},
				{
					"description": "Run an init inside the container that forwards signals and reaps processes",
					"name": [
						"--init"
					]
				},
				{
					"description": "Keep STDIN open even if not attached",
					"name": [
						"-i",
						"--interactive"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "IPv4 address (e.g., 172.30.100.104)",
					"name": [
						"--ip"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "IPv6 address (e.g., 2001:db8::33)",
					"name": [
						"--ip6"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "IPC mode to use",
					"name": [
						"--ipc"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Container isolation technology",
					"name": [
						"--isolation"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Kernel memory limit",
					"name": [
						"--kernel-memory"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Set meta data on a container",
					"name": [
						"-l",
						"--label"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Read in a line delimited file of labels",
					"name": [
						"--label-file"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Add link to another container",
					"name": [
						"--link"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Container IPv4/IPv6 link-local addresses",
					"name": [
						"--link-local-ip"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Logging driver for the container",
					"name": [
						"--log-driver"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Log driver options",
					"name": [
						"--log-opt"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Container MAC address (e.g., 92:d0:c6:0a:29:33)",
					"name": [
						"--mac-address"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Memory limit",
					"name": [
						"-m",
						"--memory"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Memory soft limit",
					"name": [
						"--memory-reservation"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
					"name": [
						"--memory-swap"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Tune container memory swappiness (0 to 100) (default -1)",
					"name": [
						"--memory-swappiness"
					]
				},
				{
					"args": {
						"name": "mount"
					},
					"description": "Attach a filesystem mount to the container",
					"name": [
						"--mount"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Assign a name to the container",
					"name": [
						"--name"
					]
				},
				{
					"args": {
						"name": "network"
					},
					"description": "Connect a container to a network",
					"name": [
						"--network"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Add network-scoped alias for the container",
					"name": [
						"--network-alias"
					]
				},
				{
					"description": "Disable any container-specified HEALTHCHECK",
					"name": [
						"--no-healthcheck"
					]
				},
				{
					"description": "Disable OOM Killer",
					"name": [
						"--oom-kill-disable"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Tune host's OOM preferences (-1000 to 1000)",
					"name": [
						"--oom-score-adj"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "PID namespace to use",
					"name": [
						"--pid"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Tune container pids limit (set -1 for unlimited)",
					"name": [
						"--pids-limit"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Set platform if server is multi-platform capable",
					"name": [
						"--platform"
					]
				},
				{
					"description": "Give extended privileges to this container",
					"name": [
						"--privileged"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Publish a container's port(s) to the host",
					"name": [
						"-p",
						"--publish"
					]
				},
				{
					"description": "Publish all exposed ports to random ports",
					"name": [
						"-P",
						"--publish-all"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Pull image before creating (\"always\"|\"missing\"|\"never\") (default \"missing\")",
					"name": [
						"--pull"
					]
				},
				{
					"description": "Mount the container's root filesystem as read only",
					"name": [
						"--read-only"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Restart policy to apply when a container exits (default \"no\")",
					"name": [
						"--restart"
					]
				},
				{
					"description": "Automatically remove the container when it exits",
					"name": [
						"--rm"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Runtime to use for this container",
					"name": [
						"--runtime"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Security Options",
					"name": [
						"--security-opt"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Size of /dev/shm",
					"name": [
						"--shm-size"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Signal to stop a container (default \"SIGTERM\")",
					"name": [
						"--stop-signal"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Timeout (in seconds) to stop a container",
					"name": [
						"--stop-timeout"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Storage driver options for the container",
					"name": [
						"--storage-opt"
					]
				},
				{
					"args": {
						"name": "map"
					},
					"description": "Sysctl options (default map[])",
					"name": [
						"--sysctl"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Mount a tmpfs directory",
					"name": [
						"--tmpfs"
					]
				},
				{
					"description": "Allocate a pseudo-TTY",
					"name": [
						"-t",
						"--tty"
					]
				},
				{
					"args": {
						"name": "ulimit"
					},
					"description": "Ulimit options (default [])",
					"name": [
						"--ulimit"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Username or UID (format: <name|uid>[:<group|gid>])",
					"name": [
						"-u",
						"--user"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "User namespace to use",
					"name": [
						"--userns"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "UTS namespace to use",
					"name": [
						"--uts"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Bind mount a volume",
					"name": [
						"-v",
						"--volume"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Optional volume driver for the container",
					"name": [
						"--volume-driver"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Mount volumes from the specified container(s)",
					"name": [
						"--volumes-from"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Working directory inside the container",
					"name": [
						"-w",
						"--workdir"
					]
				}
			],
			subcommands: []
		},
		{
			name: "diff",        
			description: "Inspect changes to files or directories on a container's filesystem", 
			args: containersArg,
			options: [],
			subcommands: []
		},
		{ 
			name: "events",      
			description: "Get real time events from the server", 
			args: {},
			options: [
				{
					"args": {
						"name": "filter"
					},
					"description": "Filter output based on conditions provided",
					"name": [
						"-f",
						"--filter"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Format the output using the given Go template",
					"name": [
						"--format"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Show all events created since timestamp",
					"name": [
						"--since"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Stream events until this timestamp",
					"name": [
						"--until"
					]
				}
			],
			subcommands: []
		},
		{ 
			name: "exec",        
			description: "Run a command in a running container",
			options: [
				{
                    name: ["-it"],
                    insertValue: "-it ",
                    description: "Launch an interactive session",
                    icon: "fig://icon?type=commandkey"
                },
				{
					"description": "Detached mode: run command in the background",
					"name": [
						"-d",
						"--detach"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Override the key sequence for detaching a container",
					"name": [
						"--detach-keys"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Set environment variables",
					"name": [
						"-e",
						"--env"
					]
				},
				{
					"args": {
						"name": "list"
					},
					"description": "Read in a file of environment variables",
					"name": [
						"--env-file"
					]
				},
				{
					"description": "Keep STDIN open even if not attached",
					"name": [
						"-i",
						"--interactive"
					],
				},
				{
					"description": "Give extended privileges to the command",
					"name": [
						"--privileged"
					],
				},
				{
					"description": "Allocate a pseudo-TTY",
					"name": [
						"-t",
						"--tty"
					],
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Username or UID (format: <name|uid>[:<group|gid>])",
					"name": [
						"-u",
						"--user"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Working directory inside the container",
					"name": [
						"-w",
						"--workdir"
					]
				}
			],
			args: containerAndCommandArgs,
			subcommands: []
		},
		{ 
			name: "export",      
			description: "Export a container's filesystem as a tar archive", 
			args: containersArg,
			options: [
				{
					"description": "Write to a file, instead of STDOUT",
					"name": [
						"-o",
						"--output"
					],
					args: {
						name: 'string'
					}
				}
			],
			subcommands: []
		},
		{ 
			name: "history",     
			description: "Show the history of an image", 
			args: imagesArg,
			options: [
				{
					"description": "Pretty-print images using a Go template",
					"name": [
						"--format"
					],
					args: {
						name: 'string'
					}
				},
				{
					"description": "Print sizes and dates in human readable format (default true)",
					"name": [
						"-H",
						"--human"
					]
				},
				{
					"description": "Don't truncate output",
					"name": [
						"--no-trunc"
					]
				},
				{
					"description": "Only show image IDs",
					"name": [
						"-q",
						"--quiet"
					]
				}
			],
			subcommands: []
		},
        {
            name: "images",
            description: "List images",
            args: {
                name: '[REPOSITORY[:TAG]]'
=======
        {
          name: ["--no-stdin"],
          description: "Do not attach STDIN",
          args: {},
        },
        {
          name: ["--sig-proxy"],
          description:
            "Proxy all received signals to the process (default true)",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "build",
      description: "Build an image from a Dockerfile",
      args: {
        name: "path",
        generators: [
          {
            template: "folders",
          },
        ],
      },
      options: [
        {
          name: "--add-host",
          args: {
            name: "list",
            description: "Add a custom host-to-IP mapping (host:ip)",
          },
        },
        {
          name: "--build-arg",
          args: {
            name: "list",
            description: "Set build-time variables",
          },
        },
        {
<<<<<<< HEAD
            name: 'images',
            description: 'List images',
            args: {
                name: '[REPOSITORY[:TAG]]',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
            options: [
                {
                    name: ['-a', '--all'],
<<<<<<< HEAD
                    description: 'Show all images (default hides intermediate images)'
                },
                {
                    name: '--digests',
                    description: 'Show digests'
=======
                    description: 'Show all images (default hides intermediate images)',
                },
                {
                    name: '--digests',
                    description: 'Show digests',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: ['-f', '--filter'],
                    description: 'Filter output based on conditions provided',
                    args: {
<<<<<<< HEAD
                        name: 'filter'
                    }
=======
                        name: 'filter',
                    },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: '--format',
                    description: 'Pretty-print images using a Go template',
                    args: {
<<<<<<< HEAD
                        name: 'string'
                    }
                },
                {
                    name: '--no-trunc',
                    description: "Don't truncate output"
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Only show image IDs'
                }
            ]
        },
		{ 
			name: "import",      
			description: "Import the contents from a tarball to create a filesystem image", 
			args: {
				name: "file|URL|- [REPOSITORY[:TAG]]"
			},
			options: [
				{
					"args": {
						"name": "list"
					},
					"description": "Apply Dockerfile instruction to the created image",
					"name": [
						"-c",
						"--change"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Set commit message for imported image",
					"name": [
						"-m",
						"--message"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Set platform if server is multi-platform capable",
					"name": [
						"--platform"
					]
				}
			],
			subcommands: []
		},
		{ 
			name: "info",        
			description: "Display system-wide information", 
			args: {},
			options: [
				{
					"args": {
						"name": "string"
					},
					"description": "Format the output using the given Go template",
					"name": [
						"-f",
						"--format"
					]
				}
			],
			subcommands: []
		},
        {
            name: "inspect",
            description: "Return low-level information on Docker objects",
            args: {
                // TODO: There are more types of docker objects beyond running containers
                // that can be inspected
                name: "Name or ID",
                generators: [
                    {
                        script: `docker ps -a --format '{{ json . }}'`,
                        postProcess: function (out) {
                            let allLines = out.split('\n').map(JSON.parse);
                            return allLines.map(i => ({
                                name: i.ID,
                                displayName: `[con] ${i.ID} (${i.Image})`,
                            }));
                        }
                    },
                    {
                        script: `docker images -a --format '{{ json . }}'`,
                        postProcess: function (out) {
                            let allLines = out.split('\n').map(JSON.parse);
                            return allLines.map(i => {
                                let displayName;
                                if (i.Repository === "\u003cnone\u003e") {
                                    displayName = i.ID;
                                } else {
                                    displayName = i.Repository;
                                    if (i.Tag !== "\u003cnone\u003e") {
                                        displayName += `:${i.Tag}`;
                                    }
                                }

                                return {
                                    name: i.ID,
                                    displayName: `[img] ${displayName}`
                                };
                            });
                        }
                    },
                    {
                        script: `docker volume ls --format '{{ json . }}'`,
                        postProcess: function (out) {
                            let allLines = out.split('\n').map(JSON.parse);
                            return allLines.map(i => ({
                                name: i.Name,
                                displayName: `[vol] ${i.Name}`,
                            }));
                        }
                    }
                ]
=======
                        name: 'string',
                    },
                },
                {
                    name: '--no-trunc',
                    description: "Don't truncate output",
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Only show image IDs',
                },
            ],
        },
        {
            name: 'import',
            description: 'Import the contents from a tarball to create a filesystem image',
            args: {
                name: 'file|URL|- [REPOSITORY[:TAG]]',
            },
            options: [
                {
                    args: {
                        name: 'list',
                    },
                    description: 'Apply Dockerfile instruction to the created image',
                    name: ['-c', '--change'],
                },
                {
                    args: {
                        name: 'string',
                    },
                    description: 'Set commit message for imported image',
                    name: ['-m', '--message'],
                },
                {
                    args: {
                        name: 'string',
                    },
                    description: 'Set platform if server is multi-platform capable',
                    name: ['--platform'],
                },
            ],
            subcommands: [],
        },
        {
            name: 'info',
            description: 'Display system-wide information',
            args: {},
            options: [
                {
                    args: {
                        name: 'string',
                    },
                    description: 'Format the output using the given Go template',
                    name: ['-f', '--format'],
                },
            ],
            subcommands: [],
        },
        {
            name: 'inspect',
            description: 'Return low-level information on Docker objects',
            args: {
                // TODO: There are more types of docker objects beyond running containers
                // that can be inspected
                name: 'Name or ID',
                generators: [
                    {
                        script: "docker ps -a --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) { return ({
                                name: i.ID,
                                displayName: "[con] " + i.ID + " (" + i.Image + ")",
                            }); });
                        },
                    },
                    {
                        script: "docker images -a --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) {
                                var displayName;
                                if (i.Repository === '\u003cnone\u003e') {
                                    displayName = i.ID;
                                }
                                else {
                                    displayName = i.Repository;
                                    if (i.Tag !== '\u003cnone\u003e') {
                                        displayName += ":" + i.Tag;
                                    }
                                }
                                return {
                                    name: i.ID,
                                    displayName: "[img] " + displayName,
                                };
                            });
                        },
                    },
                    {
                        script: "docker volume ls --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) { return ({
                                name: i.Name,
                                displayName: "[vol] " + i.Name,
                            }); });
                        },
                    },
                ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
            options: [
                {
                    name: ['-f', '--format'],
                    description: 'Format the output using the given Go template',
                    args: {
<<<<<<< HEAD
                        name: 'string'
                    }
=======
                        name: 'string',
                    },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: ['-s', '--size'],
                    description: 'Display total file sizes if the type is container',
                },
                {
                    name: '--type',
                    description: 'Return JSON for specified type',
                    args: {
                        name: 'string',
<<<<<<< HEAD
                    }
                }
            ]
        },
		{ 
			name: "kill",        
			description: "Kill one or more running containers", 
			args: {...containersArg, variadic: true},
			options: [],
			subcommands: []
		},
		{ 
			name: "load",        
			description: "Load an image from a tar archive or STDIN", 
			args: {},
			options: [
				{
					"description": "Signal to send to the container (default \"KILL\")",
					"name": [
						"-s",
						"--signal"
					],
					args: {
						name: 'string'
					}
				}
			],
			subcommands: []
		},
		{ 
			name: "login",       
			description: "Log in to a Docker registry",
			args: {
				name: 'server'
			},
			options: [
				{
					"description": "password",
					"name": [
						"-p",
						"--password"
					],
					args: {
						name: 'string'
					}
				},
				{
					"description": "Take the password from stdin",
					"name": [
						"--password-stdin"
					]
				},
				{
					"description": "username",
					"name": [
						"-u",
						"--username"
					],
					args: {
						name: 'string'
					}
				}
			],
			subcommands: []
		},
		{ 
			name: "logout",      
			description: "Log out from a Docker registry", 
			args: {
				name: 'server'
			},
			options: [],
			subcommands: []
		},
		{ 
			name: "logs",        
			description: "Fetch the logs of a container",
			args: containersArg,
			options: [
				{
					"description": "Show extra details provided to logs",
					"name": [
						"--details"
					]
				},
				{
					"description": "Follow log output",
					"name": [
						"-f",
						"--follow"
					]
				},
				{
					"description": "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
					"name": [
						"--since"
					],
					args: {
						name: 'string'
					}
				},
				{
					"description": "Number of lines to show from the end of the logs (default \"all\")",
					"name": [
						"-n",
						"--tail"
					],
					args: {
						name: 'string'
					}
				},
				{
					"description": "Show timestamps",
					"name": [
						"-t",
						"--timestamps"
					]
				},
				{
					"description": "Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
					"name": [
						"--until"
					],
					args: {
						name: 'string'
					}
				}
			],
			subcommands: []
		},
		{ 
			name: "pause",       
			description: "Pause all processes within one or more containers", 
			args: containersArg,
			options: [],
			subcommands: []
		},
		{ 
			name: "port",        
			description: "List port mappings or a specific mapping for the container", 
			args: [
				containersArg,
				{
					name: '[PRIVATE_PORT[/PROTO]]'
				}
			],
			options: [],
			subcommands: []
		},
		{ 
			name: "ps",          
			description: "List containers", 
			args: {},
			options: [
				{
					"description": "Show all containers (default shows just running)",
					"name": [
						"-a",
						"--all"
					]
				},
				{
					"args": {
						"name": "filter"
					},
					"description": "Filter output based on conditions provided",
					"name": [
						"-f",
						"--filter"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Pretty-print containers using a Go template",
					"name": [
						"--format"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Show n last created containers (includes all states) (default -1)",
					"name": [
						"-n",
						"--last"
					]
				},
				{
					"description": "Show the latest created container (includes all states)",
					"name": [
						"-l",
						"--latest"
					]
				},
				{
					"description": "Don't truncate output",
					"name": [
						"--no-trunc"
					]
				},
				{
					"description": "Only display container IDs",
					"name": [
						"-q",
						"--quiet"
					]
				},
				{
					"description": "Display total file sizes",
					"name": [
						"-s",
						"--size"
					]
				}
			],
			subcommands: []
		},
		{ 
			name: "pull",        
			description: "Pull an image or a repository from a registry", 
			args: {
				name: 'NAME[:TAG|@DIGEST]'
			},
			options: [
				{
					"description": "Download all tagged images in the repository",
					"name": [
						"-a",
						"--all-tags"
					]
				},
				{
					"description": "Skip image verification (default true)",
					"name": [
						"--disable-content-trust"
					]
				},
				{
					"description": "Set platform if server is multi-platform capable",
					"name": [
						"--platform"
					],
					args: {
						name: 'string'
					}
				},
				{
					"description": "Suppress verbose output",
					"name": [
						"-q",
						"--quiet"
					]
				}
			],
			subcommands: []
		},
		{ 
			name: "push",        
			description: "Push an image or a repository to a registry",
			// TODO: Autocomplete images 
			args: {
				name: "NAME[:TAG]"
			},
			options: [
				{
					"description": "Push all tagged images in the repository",
					"name": [
						"-a",
						"--all-tags"
					]
				},
				{
					"description": "Skip image signing (default true)",
					"name": [
						"--disable-content-trust"
					]
				},
				{
					"description": "Suppress verbose output",
					"name": [
						"-q",
						"--quiet"
					]
				}
			],
			subcommands: []
		},
		{ 
			name: "rename",      
			description: "Rename a container",
			args: [
				containersArg,
				{
					name: 'NEW_NAME'
				}
			],
			options: [],
			subcommands: []
		},
		{ 
			name: "restart",     
			description: "Restart one or more containers", 
			args: containersArg,
			options: [
				{
					"description": "Seconds to wait for stop before killing the container (default 10)",
					"name": [
						"-t",
						"--time"
					],
					"args": {
						"name": 'int'
					}
				}
			],
			subcommands: []
		},
		{
<<<<<<< HEAD
>>>>>>> 0b8294c... style: Clean up code styling
=======
            name: "rm",
            description: "Remove one or more containers",
            args: {
                isVariadic: true,
=======
                    },
                },
=======
          name: "--cache-from",
          args: {
            name: "strings",
            description: "Images to consider as cache sources",
          },
        },
        {
          name: "--disable-content-trust",
          description: "Skip image verification (default true)",
        },
        {
          name: ["-f", "--file"],
          description: "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
          args: {
            name: "string",
            generators: [
              {
                template: "filepaths",
              },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
            ],
          },
        },
        {
          name: "--iidfile",
          description: "Write the image ID to the file",
          args: {
            name: "string",
          },
        },
        {
          name: "--isolation",
          description: "Container isolation technology",
          args: {
            name: "string",
          },
        },
        {
          name: "--label",
          description: "Set metadata for an image",
          args: {
            name: "list",
          },
        },
        {
          name: "--network",
          description:
            'Set the networking mode for the RUN instructions during build (default "default")',
          args: {
            name: "string",
          },
        },
        {
          name: "--no-cache",
          description: "Do not use cache when building the image",
        },
        {
          name: ["-o", "--output"],
          description: "Output destination (format: type=local,dest=path)",
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--platform",
          description: "Set platform if server is multi-platform capable",
          args: {
            name: "string",
          },
        },
        {
          name: "--progress",
          description:
            "Set type of progress output (auto, plain, tty). Use plain to show container output",
          args: {
            name: "string",
            suggestions: ["auto", "plain", "tty"].map(function (i) {
              return { name: i };
            }),
          },
        },
        {
          name: "--pull",
          description: "Always attempt to pull a newer version of the image",
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Suppress the build output and print image ID on success",
        },
        {
<<<<<<< HEAD
            name: 'rename',
            description: 'Rename a container',
            args: [
                containersArg,
                {
                    name: 'NEW_NAME',
                },
            ],
            options: [],
            subcommands: [],
        },
        {
            name: 'restart',
            description: 'Restart one or more containers',
            args: containersArg,
            options: [
                {
                    description: 'Seconds to wait for stop before killing the container (default 10)',
                    name: ['-t', '--time'],
                    args: {
                        name: 'int',
                    },
                },
            ],
            subcommands: [],
        },
        {
            name: 'rm',
            description: 'Remove one or more containers',
            args: {
                variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                name: 'containers',
                suggestions: [
                    {
                        name: '$(docker ps -aq)',
                        insertValue: '$(docker ps -aq)',
                        description: 'All containers, running and exited',
                    },
                    {
<<<<<<< HEAD
                        name: "$(docker ps -q)",
                        insertValue: "$(docker ps -q)",
                        description: 'All running containers'
                    }
                ],
                generators: [
                    generators.allDockerContainers,
                ],
=======
                        name: '$(docker ps -q)',
                        insertValue: '$(docker ps -q)',
                        description: 'All running containers',
                    },
                ],
                generators: [dockerGenerators.allDockerContainers],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
            options: [
                {
                    name: ['-f', '--force'],
<<<<<<< HEAD
                    description: 'Force the removal of a running container (uses SIGKILL)'
                },
                {
                    name: ['-l', '--link'],
                    description: 'Remove the specified link'
                },
                {
                    name: ['-v', '--volumes'],
                    description: 'Remove the anonymous volumes associated with the container'
                }
            ]
        },
        {
            name: "rmi",
            description: "Remove one or more images",
            args: {
                isVariadic: true,
=======
                    description: 'Force the removal of a running container (uses SIGKILL)',
                },
                {
                    name: ['-l', '--link'],
                    description: 'Remove the specified link',
                },
                {
                    name: ['-v', '--volumes'],
                    description: 'Remove the anonymous volumes associated with the container',
                },
            ],
        },
        {
            name: 'rmi',
            description: 'Remove one or more images',
            args: {
                variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                name: 'image',
                suggestions: [
                    {
                        name: '$(docker images -aq)',
                        insertValue: '$(docker images -aq)',
<<<<<<< HEAD
                        description: 'All images (including intermediate images)'
=======
                        description: 'All images (including intermediate images)',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                    {
                        name: '$(docker images -q)',
                        insertValue: '$(docker images -q)',
<<<<<<< HEAD
                        description: 'All non-intermediate images'
                    }
                ],
                generators: [
                    {
                        script: `docker images -aq --format '{{ json . }}'`,
                        postProcess: function (out) {
                            let allLines = out.split('\n').map(JSON.parse);
                            return allLines.map(i => {
                                let displayName;
                                if (i.Repository === "\u003cnone\u003e") {
                                    displayName = i.ID;
                                } else {
                                    displayName = i.Repository;
                                    if (i.Tag !== "\u003cnone\u003e") {
                                        displayName += `:${i.Tag}`;
                                    }
                                }

                                return {
                                    name: i.ID,
                                    displayName: `${displayName} (${i.Size})`
                                };
                            });
                        }
                    }
                ]
=======
                        description: 'All non-intermediate images',
                    },
                ],
                generators: [
                    {
                        script: "docker images -aq --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split('\n').map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) {
                                var displayName;
                                if (i.Repository === '\u003cnone\u003e') {
                                    displayName = i.ID;
                                }
                                else {
                                    displayName = i.Repository;
                                    if (i.Tag !== '\u003cnone\u003e') {
                                        displayName += ":" + i.Tag;
                                    }
                                }
                                return {
                                    name: i.ID,
                                    displayName: displayName + " (" + i.Size + ")",
                                };
                            });
                        },
                    },
                ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
            options: [
                {
                    name: ['-f', '--force'],
                    description: 'Force removal of the image',
                },
                {
                    name: '--no-prune',
<<<<<<< HEAD
                    description: 'Do not delete untagged parents'
                }
            ]
        },
        {
>>>>>>> 09dd2f6... feat: Options for all parent commands
            name: "run",
            description: "Run a command in a new container",
=======
            name: 'run',
            description: 'Run a command in a new container',
>>>>>>> b5d9641... fix: also fix compiled specs
            options: [
<<<<<<< HEAD
=======
                    description: 'Do not delete untagged parents',
                },
            ],
        },
        {
            name: 'run',
            description: 'Run a command in a new container',
            options: [
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                { name: ['-i', '--interactive'], description: 'Keep STDIN open even if not attached' },
                { name: ['-t', '--tty'], description: 'Allocate a pseudo-TTY' },
                {
                    name: ['-it'],
                    insertValue: '-it ',
                    description: 'Launch an interactive session',
                    icon: 'fig://icon?type=commandkey',
<<<<<<< HEAD
=======
                {name: ["-i", "--interactive"], description: "Keep STDIN open even if not attached"},
                {name: ["-t", "--tty"], description: "Allocate a pseudo-TTY"},
                {
                    name: ["-it"],
                    insertValue: "-it ",
                    description: "Launch an interactive session",
                    icon: "fig://icon?type=commandkey"
>>>>>>> 09dd2f6... feat: Options for all parent commands
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
            ],
            args: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: 'image',
                    description: 'the Docker image to use',
=======
                    name: "image",
<<<<<<< HEAD
                    
					description: "the Docker image to use",
>>>>>>> 0b8294c... style: Clean up code styling
                    generators: {
                        script: "docker images --format '{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}'",
                        postProcess: function (out) {
<<<<<<< HEAD
<<<<<<< HEAD
                            return out.split('\n').map(function (image) {
                                var _a = image.split(' '), repo = _a[0], size = _a[1], tag = _a[2], id = _a[3];
=======
=======
                    description: "the Docker image to use",
                    generators: {
                        script: "docker images --format '{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}'",
                        postProcess: function (out) {
>>>>>>> 09dd2f6... feat: Options for all parent commands
                            return out.split('\n').map(image => {
                                let [repo, size, tag, id] = image.split(' ')
>>>>>>> 0d33bd1... Autoformat
=======
                            return out.split('\n').map(function (image) {
                                var _a = image.split(' '), repo = _a[0], size = _a[1], tag = _a[2], id = _a[3];
>>>>>>> 3c23470... feat: move js specs to ts
                                return {
                                    name: repo,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                                    description: id + "@" + tag + " - " + size,
=======
                                    
									description: `${id}@${tag} - ${size}`,
>>>>>>> 0b8294c... style: Clean up code styling
                                    icon: "fig://icon?type=docker"
<<<<<<< HEAD
<<<<<<< HEAD
                                };
                            });
=======
=======
                                    description: `${id}@${tag} - ${size}`,
                                    icon: "fig://icon?type=docker"
>>>>>>> 09dd2f6... feat: Options for all parent commands
                                }
                            })
>>>>>>> 07aca48... Build out docker CLI commands more, autosuggesting image, container, multi-stage build names, and more
=======
                                };
                            });
>>>>>>> 3c23470... feat: move js specs to ts
                        }
                    }
<<<<<<< HEAD
=======
                                    description: id + '@' + tag + ' - ' + size,
=======
                    name: 'image',
                    description: 'the Docker image to use',
                    generators: {
                        script: "docker images --format '{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}'",
                        postProcess: function (out) {
                            return out.split('\n').map(function (image) {
                                var _a = image.split(' '), repo = _a[0], size = _a[1], tag = _a[2], id = _a[3];
                                return {
                                    name: repo,
                                    description: id + "@" + tag + " - " + size,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                    icon: 'fig://icon?type=docker',
                                };
                            });
                        },
                    },
<<<<<<< HEAD
>>>>>>> b5d9641... fix: also fix compiled specs
=======
>>>>>>> 09dd2f6... feat: Options for all parent commands
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'command',
                    // description: "The command to run in the container"
<<<<<<< HEAD
<<<<<<< HEAD
                }
            ]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        },
        { name: "save", description: "Save one or more images to a tar archive (streamed to STDOUT by default)" },
        { name: "search", description: "Search the Docker Hub for images" },
        { name: "start", description: "Start one or more stopped containers" },
        { name: "stats", description: "Display a live stream of container(s) resource usage statistics" },
<<<<<<< HEAD
        { name: "stop", description: "Stop one or more running containers" },
=======
        {
            name: "stop",
            description: "Stop one or more running containers",
            args: {
                isVariadic: true,
                name: 'container',
                generators: [
                    generators.runningDockerContainers,
                ]
            },
            options: [
                {
                    name: ['-t', '--t'],
                    description: 'Seconds to wait for stop before killing it (default 10)',
                    args: {
                        name: 'int'
                    }
                }
            ]
        },
>>>>>>> 7980ce4... refactor: Fix broken specs
        { name: "tag", description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE" },
        { name: "top", description: "Display the running processes of a container" },
        { name: "unpause", description: "Unpause all processes within one or more containers" },
        { name: "update", description: "Update configuration of one or more containers" },
        { name: "version", description: "Show the Docker version information" },
        { name: "wait", description: "Block until one or more containers stop, then print their exit codes" },
        { name: "builder", description: "Manage builds" },
        { name: "config", description: "Manage Docker configs" },
        { name: "container", description: "Manage containers" },
        { name: "context", description: "Manage contexts" },
        { name: "image", description: "Manage images" },
        { name: "network", description: "Manage networks" },
        { name: "node", description: "Manage Swarm nodes" },
        { name: "plugin", description: "Manage plugins" },
        { name: "secret", description: "Manage Docker secrets" },
        { name: "service", description: "Manage services" },
        { name: "stack", description: "Manage Docker stacks" },
        { name: "swarm", description: "Manage Swarm" },
        { name: "system", description: "Manage Docker" },
        { name: "trust", description: "Manage trust on Docker images" },
        { name: "volume", description: "Manage volumes" }
=======
         },
    	{ name: "save",        description: "Save one or more images to a tar archive (streamed to STDOUT by default)" },
    	{ name: "search",      description: "Search the Docker Hub for images" },
    	{ name: "start",       description: "Start one or more stopped containers" },
    	{ name: "stats",       description: "Display a live stream of container(s) resource usage statistics" },
    	{
    	    name: "stop",
=======
=======
                },
            ],
>>>>>>> b5d9641... fix: also fix compiled specs
        },
        { name: 'save', description: 'Save one or more images to a tar archive (streamed to STDOUT by default)' },
        { name: 'search', description: 'Search the Docker Hub for images' },
        { name: 'start', description: 'Start one or more stopped containers' },
        { name: 'stats', description: 'Display a live stream of container(s) resource usage statistics' },
        {
<<<<<<< HEAD
            name: "stop",
>>>>>>> 0d33bd1... Autoformat
            description: "Stop one or more running containers",
=======
            name: 'stop',
            description: 'Stop one or more running containers',
>>>>>>> b5d9641... fix: also fix compiled specs
            args: {
                variadic: true,
                name: 'container',
                generators: [generators.runningDockerContainers],
            },
            options: [
                {
                    name: ['-t', '--t'],
                    description: 'Seconds to wait for stop before killing it (default 10)',
                    args: {
                        name: 'int',
                    },
                },
            ],
        },
        { name: 'tag', description: 'Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE' },
        { name: 'top', description: 'Display the running processes of a container' },
        { name: 'unpause', description: 'Unpause all processes within one or more containers' },
        { name: 'update', description: 'Update configuration of one or more containers' },
        { name: 'version', description: 'Show the Docker version information' },
        { name: 'wait', description: 'Block until one or more containers stop, then print their exit codes' },
        { name: 'builder', description: 'Manage builds' },
        { name: 'config', description: 'Manage Docker configs' },
        { name: 'container', description: 'Manage containers' },
        { name: 'context', description: 'Manage contexts' },
        { name: 'image', description: 'Manage images' },
        { name: 'network', description: 'Manage networks' },
        { name: 'node', description: 'Manage Swarm nodes' },
        { name: 'plugin', description: 'Manage plugins' },
        { name: 'secret', description: 'Manage Docker secrets' },
        { name: 'service', description: 'Manage services' },
        { name: 'stack', description: 'Manage Docker stacks' },
        { name: 'swarm', description: 'Manage Swarm' },
=======
                },
            ],
=======
          name: "--secret",
          description:
            "Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret",
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--squash",
          description: "Squash newly built layers into a single new layer",
        },
        {
          name: "--ssh",
          description:
            "SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format: default|<id>[=<socket>|<key>[,<key>]])",
          args: {
            name: "stringArray",
          },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
        },
        {
          name: ["-t", "--tag"],
          description: "Name and optionally a tag in the 'name:tag' format",
        },
        {
          name: "--target",
          description: "Set the target build stage to build",
          args: {
            name: "target build stage",
            generators: [
              {
                trigger: function () {
                  return true;
                },
                script: function (context) {
                  var fileFlagIndex, dockerfilePath;
                  if (context.includes("-f")) {
                    fileFlagIndex = context.indexOf("-f");
                    dockerfilePath = context[fileFlagIndex + 1];
                  } else if (context.includes("--file")) {
                    fileFlagIndex = context.indexOf("--file");
                    dockerfilePath = context[fileFlagIndex + 1];
                  } else {
                    dockerfilePath = "$PWD/Dockerfile";
                  }
                  return "grep -iE 'FROM.*AS' \"" + dockerfilePath + '"';
                },
                postProcess: function (out) {
                  // This just searches the Dockerfile for the alias name after AS,
                  // and due to the grep above, will only match lines where FROM and AS
                  // are on the same line. This could certainly be made more robust
                  // down the line.
                  var imageNameRegexp = /(?:[aA][sS]\s+)([\w:.-]+)/;
                  return out
                    .split("\n")
                    .map(function (i) {
                      var result = imageNameRegexp.exec(i);
                      if (result) {
                        return {
                          name: result[1],
                        };
                      }
                    })
                    .filter(function (i) {
                      return i !== undefined;
                    });
                },
              },
=======
    containersArg,
    {
        name: "command",
        isCommand: true,
    },
];
var completionSpec = {
    name: "docker",
    description: "A self-sufficient runtime for containers",
    subcommands: [
        {
            name: "attach",
            description: "Attach local standard input, output, and error streams to a running container,",
            args: containersArg,
            options: [
                {
                    name: ["--detach-keys"],
                    description: "Override the key sequence for detaching a container",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: ["--no-stdin"],
                    description: "Do not attach STDIN",
                    args: {},
                },
                {
                    name: ["--sig-proxy"],
                    description: "Proxy all received signals to the process (default true)",
                    args: {},
                },
            ],
            subcommands: [],
        },
        {
            name: "build",
            description: "Build an image from a Dockerfile",
            args: {
                name: "path",
                generators: [
                    {
                        template: "folders",
                    },
                ],
            },
            options: [
                {
                    name: "--add-host",
                    args: {
                        name: "list",
                        description: "Add a custom host-to-IP mapping (host:ip)",
                    },
                },
                {
                    name: "--build-arg",
                    args: {
                        name: "list",
                        description: "Set build-time variables",
                    },
                },
                {
                    name: "--cache-from",
                    args: {
                        name: "strings",
                        description: "Images to consider as cache sources",
                    },
                },
                {
                    name: "--disable-content-trust",
                    description: "Skip image verification (default true)",
                },
                {
                    name: ["-f", "--file"],
                    description: "Name of the Dockerfile (Default is 'PATH/Dockerfile')",
                    args: {
                        name: "string",
                        generators: [
                            {
                                template: "filepaths",
                            },
                        ],
                    },
                },
                {
                    name: "--iidfile",
                    description: "Write the image ID to the file",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--isolation",
                    description: "Container isolation technology",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--label",
                    description: "Set metadata for an image",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--network",
                    description: 'Set the networking mode for the RUN instructions during build (default "default")',
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--no-cache",
                    description: "Do not use cache when building the image",
                },
                {
                    name: ["-o", "--output"],
                    description: "Output destination (format: type=local,dest=path)",
                    args: {
                        name: "stringArray",
                    },
                },
                {
                    name: "--platform",
                    description: "Set platform if server is multi-platform capable",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--progress",
                    description: "Set type of progress output (auto, plain, tty). Use plain to show container output",
                    args: {
                        name: "string",
                        suggestions: ["auto", "plain", "tty"].map(function (i) { return ({ name: i }); }),
                    },
                },
                {
                    name: "--pull",
                    description: "Always attempt to pull a newer version of the image",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Suppress the build output and print image ID on success",
                },
                {
                    name: "--secret",
                    description: "Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret",
                    args: {
                        name: "stringArray",
                    },
                },
                {
                    name: "--squash",
                    description: "Squash newly built layers into a single new layer",
                },
                {
                    name: "--ssh",
                    description: "SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format: default|<id>[=<socket>|<key>[,<key>]])",
                    args: {
                        name: "stringArray",
                    },
                },
                {
                    name: ["-t", "--tag"],
                    description: "Name and optionally a tag in the 'name:tag' format",
                },
                {
                    name: "--target",
                    description: "Set the target build stage to build",
                    args: {
                        name: "target build stage",
                        generators: [
                            {
                                trigger: function () {
                                    return true;
                                },
                                script: function (context) {
                                    var fileFlagIndex, dockerfilePath;
                                    if (context.includes("-f")) {
                                        fileFlagIndex = context.indexOf("-f");
                                        dockerfilePath = context[fileFlagIndex + 1];
                                    }
                                    else if (context.includes("--file")) {
                                        fileFlagIndex = context.indexOf("--file");
                                        dockerfilePath = context[fileFlagIndex + 1];
                                    }
                                    else {
                                        dockerfilePath = "$PWD/Dockerfile";
                                    }
                                    return "grep -iE 'FROM.*AS' \"" + dockerfilePath + "\"";
                                },
                                postProcess: function (out) {
                                    // This just searches the Dockerfile for the alias name after AS,
                                    // and due to the grep above, will only match lines where FROM and AS
                                    // are on the same line. This could certainly be made more robust
                                    // down the line.
                                    var imageNameRegexp = /(?:[aA][sS]\s+)([\w:.-]+)/;
                                    return out
                                        .split("\n")
                                        .map(function (i) {
                                        var result = imageNameRegexp.exec(i);
                                        if (result) {
                                            return {
                                                name: result[1],
                                            };
                                        }
                                    })
                                        .filter(function (i) { return i !== undefined; });
                                },
                            },
                        ],
                    },
                },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            ],
        },
        {
            name: "commit",
            description: "Create a new image from a container's changes",
            args: [
                containersArg,
                {
                    name: "[REPOSITORY[:TAG]]",
                },
            ],
            options: [
                {
                    args: {
                        name: "string",
                    },
                    description: 'Author (e.g., "John Hannibal Smith <hannibal@a-team.com>")',
                    name: ["-a", "--author"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Apply Dockerfile instruction to the created image",
                    name: ["-c", "--change"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Commit message",
                    name: ["-m", "--message"],
                },
                {
                    description: "Pause container during commit (default true)",
                    name: ["-p", "--pause"],
                },
            ],
            subcommands: [],
        },
        {
            name: "cp",
            description: "Copy files/folders between a container and the local filesystem",
            args: {
                name: "CONTAINER:SRC_PATH DEST_PATH|- OR SRC_PATH|- CONTAINER:DEST_PATH",
            },
            options: [
                {
                    description: "Archive mode (copy all uid/gid information)",
                    name: ["-a", "--archive"],
                },
                {
                    description: "Always follow symbol link in SRC_PATH",
                    name: ["-L", "--follow-link"],
                },
            ],
            subcommands: [],
        },
        {
            name: "create",
            description: "Create a new container",
            args: [
                {
                    name: "container",
                    generators: [dockerGenerators.allLocalImages],
                },
                {
                    name: "command",
                    isCommand: true,
                },
            ],
            options: [
                {
                    args: {
                        name: "list",
                    },
                    description: "Add a custom host-to-IP mapping (host:ip)",
                    name: ["--add-host"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Attach to STDIN, STDOUT or STDERR",
                    name: ["-a", "--attach"],
                },
                {
                    args: {
                        name: "uint16",
                    },
                    description: "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
                    name: ["--blkio-weight"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Block IO weight (relative device weight) (default [])",
                    name: ["--blkio-weight-device"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Add Linux capabilities",
                    name: ["--cap-add"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Drop Linux capabilities",
                    name: ["--cap-drop"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Optional parent cgroup for the container",
                    name: ["--cgroup-parent"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Cgroup namespace to use (host|private)",
                    name: ["--cgroupns"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Write the container ID to the file",
                    name: ["--cidfile"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Limit CPU CFS (Completely Fair Scheduler) period",
                    name: ["--cpu-period"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Limit CPU CFS (Completely Fair Scheduler) quota",
                    name: ["--cpu-quota"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Limit CPU real-time period in microseconds",
                    name: ["--cpu-rt-period"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Limit CPU real-time runtime in microseconds",
                    name: ["--cpu-rt-runtime"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "CPU shares (relative weight)",
                    name: ["-c", "--cpu-shares"],
                },
                {
                    args: {
                        name: "decimal",
                    },
                    description: "Number of CPUs",
                    name: ["--cpus"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "CPUs in which to allow execution (0-3, 0,1)",
                    name: ["--cpuset-cpus"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "MEMs in which to allow execution (0-3, 0,1)",
                    name: ["--cpuset-mems"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Add a host device to the container",
                    name: ["--device"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Add a rule to the cgroup allowed devices list",
                    name: ["--device-cgroup-rule"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Limit read rate (bytes per second) from a device (default [])",
                    name: ["--device-read-bps"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Limit read rate (IO per second) from a device (default [])",
                    name: ["--device-read-iops"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Limit write rate (bytes per second) to a device (default [])",
                    name: ["--device-write-bps"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Limit write rate (IO per second) to a device (default [])",
                    name: ["--device-write-iops"],
                },
                {
                    description: "Skip image verification (default true)",
                    name: ["--disable-content-trust"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Set custom DNS servers",
                    name: ["--dns"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Set DNS options",
                    name: ["--dns-option"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Set custom DNS search domains",
                    name: ["--dns-search"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Container NIS domain name",
                    name: ["--domainname"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Overwrite the default ENTRYPOINT of the image",
                    name: ["--entrypoint"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Set environment variables",
                    name: ["-e", "--env"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Read in a file of environment variables",
                    name: ["--env-file"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Expose a port or a range of ports",
                    name: ["--expose"],
                },
                {
                    args: {
                        name: "gpu-request",
                    },
                    description: "GPU devices to add to the container ('all' to pass all GPUs)",
                    name: ["--gpus"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Add additional groups to join",
                    name: ["--group-add"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Command to run to check health",
                    name: ["--health-cmd"],
                },
                {
                    args: {
                        name: "duration",
                    },
                    description: "Time between running the check (ms|s|m|h) (default 0s)",
                    name: ["--health-interval"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Consecutive failures needed to report unhealthy",
                    name: ["--health-retries"],
                },
                {
                    args: {
                        name: "duration",
                    },
                    description: "Start period for the container to initialize before starting health-retries countdown (ms|s|m|h) (default 0s)",
                    name: ["--health-start-period"],
                },
                {
                    args: {
                        name: "duration",
                    },
                    description: "Maximum time to allow one check to run (ms|s|m|h) (default 0s)",
                    name: ["--health-timeout"],
                },
                {
                    description: "Print usage",
                    name: ["--help"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Container host name",
                    name: ["-h", "--hostname"],
                },
                {
                    description: "Run an init inside the container that forwards signals and reaps processes",
                    name: ["--init"],
                },
                {
                    description: "Keep STDIN open even if not attached",
                    name: ["-i", "--interactive"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "IPv4 address (e.g., 172.30.100.104)",
                    name: ["--ip"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "IPv6 address (e.g., 2001:db8::33)",
                    name: ["--ip6"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "IPC mode to use",
                    name: ["--ipc"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Container isolation technology",
                    name: ["--isolation"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Kernel memory limit",
                    name: ["--kernel-memory"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Set meta data on a container",
                    name: ["-l", "--label"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Read in a line delimited file of labels",
                    name: ["--label-file"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Add link to another container",
                    name: ["--link"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Container IPv4/IPv6 link-local addresses",
                    name: ["--link-local-ip"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Logging driver for the container",
                    name: ["--log-driver"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Log driver options",
                    name: ["--log-opt"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Container MAC address (e.g., 92:d0:c6:0a:29:33)",
                    name: ["--mac-address"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Memory limit",
                    name: ["-m", "--memory"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Memory soft limit",
                    name: ["--memory-reservation"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
                    name: ["--memory-swap"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Tune container memory swappiness (0 to 100) (default -1)",
                    name: ["--memory-swappiness"],
                },
                {
                    args: {
                        name: "mount",
                    },
                    description: "Attach a filesystem mount to the container",
                    name: ["--mount"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Assign a name to the container",
                    name: ["--name"],
                },
                {
                    args: {
                        name: "network",
                    },
                    description: "Connect a container to a network",
                    name: ["--network"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Add network-scoped alias for the container",
                    name: ["--network-alias"],
                },
                {
                    description: "Disable any container-specified HEALTHCHECK",
                    name: ["--no-healthcheck"],
                },
                {
                    description: "Disable OOM Killer",
                    name: ["--oom-kill-disable"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Tune host's OOM preferences (-1000 to 1000)",
                    name: ["--oom-score-adj"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "PID namespace to use",
                    name: ["--pid"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Tune container pids limit (set -1 for unlimited)",
                    name: ["--pids-limit"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Set platform if server is multi-platform capable",
                    name: ["--platform"],
                },
                {
                    description: "Give extended privileges to this container",
                    name: ["--privileged"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Publish a container's port(s) to the host",
                    name: ["-p", "--publish"],
                },
                {
                    description: "Publish all exposed ports to random ports",
                    name: ["-P", "--publish-all"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: 'Pull image before creating ("always"|"missing"|"never") (default "missing")',
                    name: ["--pull"],
                },
                {
                    description: "Mount the container's root filesystem as read only",
                    name: ["--read-only"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: 'Restart policy to apply when a container exits (default "no")',
                    name: ["--restart"],
                },
                {
                    description: "Automatically remove the container when it exits",
                    name: ["--rm"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Runtime to use for this container",
                    name: ["--runtime"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Security Options",
                    name: ["--security-opt"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Size of /dev/shm",
                    name: ["--shm-size"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: 'Signal to stop a container (default "SIGTERM")',
                    name: ["--stop-signal"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Timeout (in seconds) to stop a container",
                    name: ["--stop-timeout"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Storage driver options for the container",
                    name: ["--storage-opt"],
                },
                {
                    args: {
                        name: "map",
                    },
                    description: "Sysctl options (default map[])",
                    name: ["--sysctl"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Mount a tmpfs directory",
                    name: ["--tmpfs"],
                },
                {
                    description: "Allocate a pseudo-TTY",
                    name: ["-t", "--tty"],
                },
                {
                    args: {
                        name: "ulimit",
                    },
                    description: "Ulimit options (default [])",
                    name: ["--ulimit"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Username or UID (format: <name|uid>[:<group|gid>])",
                    name: ["-u", "--user"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "User namespace to use",
                    name: ["--userns"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "UTS namespace to use",
                    name: ["--uts"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Bind mount a volume",
                    name: ["-v", "--volume"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Optional volume driver for the container",
                    name: ["--volume-driver"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Mount volumes from the specified container(s)",
                    name: ["--volumes-from"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Working directory inside the container",
                    name: ["-w", "--workdir"],
                },
            ],
            subcommands: [],
        },
        {
            name: "diff",
            description: "Inspect changes to files or directories on a container's filesystem",
            args: containersArg,
            options: [],
            subcommands: [],
        },
        {
            name: "events",
            description: "Get real time events from the server",
            args: {},
            options: [
                {
                    args: {
                        name: "filter",
                    },
                    description: "Filter output based on conditions provided",
                    name: ["-f", "--filter"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Format the output using the given Go template",
                    name: ["--format"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Show all events created since timestamp",
                    name: ["--since"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Stream events until this timestamp",
                    name: ["--until"],
                },
            ],
            subcommands: [],
        },
        {
            name: "exec",
            description: "Run a command in a running container",
            options: [
                {
                    name: ["-it"],
                    insertValue: "-it ",
                    description: "Launch an interactive session",
                    icon: "fig://icon?type=commandkey",
                },
                {
                    description: "Detached mode: run command in the background",
                    name: ["-d", "--detach"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Override the key sequence for detaching a container",
                    name: ["--detach-keys"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Set environment variables",
                    name: ["-e", "--env"],
                },
                {
                    args: {
                        name: "list",
                    },
                    description: "Read in a file of environment variables",
                    name: ["--env-file"],
                },
                {
                    description: "Keep STDIN open even if not attached",
                    name: ["-i", "--interactive"],
                },
                {
                    description: "Give extended privileges to the command",
                    name: ["--privileged"],
                },
                {
                    description: "Allocate a pseudo-TTY",
                    name: ["-t", "--tty"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Username or UID (format: <name|uid>[:<group|gid>])",
                    name: ["-u", "--user"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Working directory inside the container",
                    name: ["-w", "--workdir"],
                },
            ],
            args: containerAndCommandArgs,
            subcommands: [],
        },
        {
            name: "export",
            description: "Export a container's filesystem as a tar archive",
            args: containersArg,
            options: [
                {
                    description: "Write to a file, instead of STDOUT",
                    name: ["-o", "--output"],
                    args: {
                        name: "string",
                    },
                },
            ],
            subcommands: [],
        },
        {
            name: "history",
            description: "Show the history of an image",
            args: imagesArg,
            options: [
                {
                    description: "Pretty-print images using a Go template",
                    name: ["--format"],
                    args: {
                        name: "string",
                    },
                },
                {
                    description: "Print sizes and dates in human readable format (default true)",
                    name: ["-H", "--human"],
                },
                {
                    description: "Don't truncate output",
                    name: ["--no-trunc"],
                },
                {
                    description: "Only show image IDs",
                    name: ["-q", "--quiet"],
                },
            ],
            subcommands: [],
        },
        {
            name: "images",
            description: "List images",
            args: {
                name: "[REPOSITORY[:TAG]]",
            },
            options: [
                {
                    name: ["-a", "--all"],
                    description: "Show all images (default hides intermediate images)",
                },
                {
                    name: "--digests",
                    description: "Show digests",
                },
                {
                    name: ["-f", "--filter"],
                    description: "Filter output based on conditions provided",
                    args: {
                        name: "filter",
                    },
                },
                {
                    name: "--format",
                    description: "Pretty-print images using a Go template",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--no-trunc",
                    description: "Don't truncate output",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Only show image IDs",
                },
            ],
        },
        {
            name: "import",
            description: "Import the contents from a tarball to create a filesystem image",
            args: {
                name: "file|URL|- [REPOSITORY[:TAG]]",
            },
<<<<<<< HEAD
          },
        },
        {
          name: "command",
          // description: "The command to run in the container"
        },
      ],
    },
    {
      name: "save",
      description:
        "Save one or more images to a tar archive (streamed to STDOUT by default)",
      args: imagesArg,
      options: [
        {
<<<<<<< HEAD
            name: 'builder',
            description: 'Manage builds',
            // TODO Subcommands
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'config',
            description: 'Manage Docker configs',
            // TODO Subcommands
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'container',
            description: 'Manage containers',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'context',
            description: 'Manage contexts',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'image',
            description: 'Manage images',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'network',
            description: 'Manage networks',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'node',
            description: 'Manage Swarm nodes',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'plugin',
            description: 'Manage plugins',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'secret',
            description: 'Manage Docker secrets',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'service',
            description: 'Manage services',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'stack',
            description: 'Manage Docker stacks',
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: 'swarm',
            description: 'Manage Swarm',
            args: {},
            options: [],
            subcommands: [],
        },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        {
            name: 'system',
            description: 'Manage Docker',
            subcommands: [
                {
                    name: 'prune',
                    description: 'Remove unused data',
                    options: [
                        {
                            name: ['-a', '--all'],
                            description: 'Remove all unused images not just dangling ones',
                        },
                        {
                            name: '--filter',
                            description: "Provide filter values (e.g. 'label=<key>=<value')",
                            args: {
                                name: 'filter',
                            },
                        },
                        {
                            name: ['-f', '--force'],
                            description: 'Do not prompt for confirmation',
                        },
                        {
                            name: '--volumes',
                            description: 'Prune volumes',
                        },
                    ],
                },
            ],
=======
          description: "Write to a file, instead of STDOUT",
          name: ["-o", "--output"],
          args: {
            name: "string",
          },
        },
      ],
      subcommands: [],
    },
    {
      name: "search",
      description: "Search the Docker Hub for images",
      args: [
        {
          name: "TERM",
          description: "Search term",
        },
      ],
      options: [
        {
          args: {
            name: "filter",
          },
          description: "Filter output based on conditions provided",
          name: ["-f", "--filter"],
=======
            options: [
                {
                    args: {
                        name: "list",
                    },
                    description: "Apply Dockerfile instruction to the created image",
                    name: ["-c", "--change"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Set commit message for imported image",
                    name: ["-m", "--message"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Set platform if server is multi-platform capable",
                    name: ["--platform"],
                },
            ],
            subcommands: [],
        },
        {
            name: "info",
            description: "Display system-wide information",
            args: {},
            options: [
                {
                    args: {
                        name: "string",
                    },
                    description: "Format the output using the given Go template",
                    name: ["-f", "--format"],
                },
            ],
            subcommands: [],
        },
        {
            name: "inspect",
            description: "Return low-level information on Docker objects",
            args: {
                // TODO: There are more types of docker objects beyond running containers
                // that can be inspected
                name: "Name or ID",
                generators: [
                    {
                        script: "docker ps -a --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split("\n").map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) { return ({
                                name: i.ID,
                                displayName: "[con] " + i.ID + " (" + i.Image + ")",
                            }); });
                        },
                    },
                    {
                        script: "docker images -a --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split("\n").map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) {
                                var displayName;
                                if (i.Repository === "\u003cnone\u003e") {
                                    displayName = i.ID;
                                }
                                else {
                                    displayName = i.Repository;
                                    if (i.Tag !== "\u003cnone\u003e") {
                                        displayName += ":" + i.Tag;
                                    }
                                }
                                return {
                                    name: i.ID,
                                    displayName: "[img] " + displayName,
                                };
                            });
                        },
                    },
                    {
                        script: "docker volume ls --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split("\n").map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) { return ({
                                name: i.Name,
                                displayName: "[vol] " + i.Name,
                            }); });
                        },
                    },
                ],
            },
            options: [
                {
                    name: ["-f", "--format"],
                    description: "Format the output using the given Go template",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: ["-s", "--size"],
                    description: "Display total file sizes if the type is container",
                },
                {
                    name: "--type",
                    description: "Return JSON for specified type",
                    args: {
                        name: "string",
                    },
                },
            ],
>>>>>>> a09fa69... removed linting from all js specs in specs folder
        },
        {
            name: "kill",
            description: "Kill one or more running containers",
            args: __assign(__assign({}, containersArg), { variadic: true }),
            options: [],
            subcommands: [],
        },
        {
            name: "load",
            description: "Load an image from a tar archive or STDIN",
            args: {},
            options: [
                {
                    description: 'Signal to send to the container (default "KILL")',
                    name: ["-s", "--signal"],
                    args: {
                        name: "string",
                    },
                },
            ],
            subcommands: [],
        },
        {
            name: "login",
            description: "Log in to a Docker registry",
            args: {
                name: "server",
            },
            options: [
                {
                    description: "password",
                    name: ["-p", "--password"],
                    args: {
                        name: "string",
                    },
                },
                {
                    description: "Take the password from stdin",
                    name: ["--password-stdin"],
                },
                {
                    description: "username",
                    name: ["-u", "--username"],
                    args: {
                        name: "string",
                    },
                },
            ],
            subcommands: [],
        },
        {
            name: "logout",
            description: "Log out from a Docker registry",
            args: {
                name: "server",
            },
            options: [],
            subcommands: [],
        },
        {
            name: "logs",
            description: "Fetch the logs of a container",
            args: containersArg,
            options: [
                {
                    description: "Show extra details provided to logs",
                    name: ["--details"],
                },
                {
                    description: "Follow log output",
                    name: ["-f", "--follow"],
                },
                {
                    description: "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
                    name: ["--since"],
                    args: {
                        name: "string",
                    },
                },
                {
                    description: 'Number of lines to show from the end of the logs (default "all")',
                    name: ["-n", "--tail"],
                    args: {
                        name: "string",
                    },
                },
                {
                    description: "Show timestamps",
                    name: ["-t", "--timestamps"],
                },
                {
                    description: "Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
                    name: ["--until"],
                    args: {
                        name: "string",
                    },
                },
            ],
            subcommands: [],
        },
        {
            name: "pause",
            description: "Pause all processes within one or more containers",
            args: containersArg,
            options: [],
            subcommands: [],
        },
        {
            name: "port",
            description: "List port mappings or a specific mapping for the container",
            args: [
                containersArg,
                {
                    name: "[PRIVATE_PORT[/PROTO]]",
                },
            ],
            options: [],
            subcommands: [],
        },
        {
            name: "ps",
            description: "List containers",
            args: {},
            options: [
                {
                    description: "Show all containers (default shows just running)",
                    name: ["-a", "--all"],
                },
                {
                    args: {
                        name: "filter",
                    },
                    description: "Filter output based on conditions provided",
                    name: ["-f", "--filter"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Pretty-print containers using a Go template",
                    name: ["--format"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Show n last created containers (includes all states) (default -1)",
                    name: ["-n", "--last"],
                },
                {
                    description: "Show the latest created container (includes all states)",
                    name: ["-l", "--latest"],
                },
                {
                    description: "Don't truncate output",
                    name: ["--no-trunc"],
                },
                {
                    description: "Only display container IDs",
                    name: ["-q", "--quiet"],
                },
                {
                    description: "Display total file sizes",
                    name: ["-s", "--size"],
                },
            ],
            subcommands: [],
        },
        {
            name: "pull",
            description: "Pull an image or a repository from a registry",
            args: {
                name: "NAME[:TAG|@DIGEST]",
            },
            options: [
                {
                    description: "Download all tagged images in the repository",
                    name: ["-a", "--all-tags"],
                },
                {
                    description: "Skip image verification (default true)",
                    name: ["--disable-content-trust"],
                },
                {
                    description: "Set platform if server is multi-platform capable",
                    name: ["--platform"],
                    args: {
                        name: "string",
                    },
                },
                {
                    description: "Suppress verbose output",
                    name: ["-q", "--quiet"],
                },
            ],
            subcommands: [],
        },
        {
            name: "push",
            description: "Push an image or a repository to a registry",
            // TODO: Autocomplete images
            args: {
                name: "NAME[:TAG]",
            },
            options: [
                {
                    description: "Push all tagged images in the repository",
                    name: ["-a", "--all-tags"],
                },
                {
                    description: "Skip image signing (default true)",
                    name: ["--disable-content-trust"],
                },
                {
                    description: "Suppress verbose output",
                    name: ["-q", "--quiet"],
                },
            ],
            subcommands: [],
        },
        {
            name: "rename",
            description: "Rename a container",
            args: [
                containersArg,
                {
                    name: "NEW_NAME",
                },
            ],
            options: [],
            subcommands: [],
        },
        {
            name: "restart",
            description: "Restart one or more containers",
            args: containersArg,
            options: [
                {
                    description: "Seconds to wait for stop before killing the container (default 10)",
                    name: ["-t", "--time"],
                    args: {
                        name: "int",
                    },
                },
            ],
            subcommands: [],
        },
        {
            name: "rm",
            description: "Remove one or more containers",
            args: {
                variadic: true,
                name: "containers",
                suggestions: [
                    {
                        name: "$(docker ps -aq)",
                        insertValue: "$(docker ps -aq)",
                        description: "All containers, running and exited",
                    },
                    {
                        name: "$(docker ps -q)",
                        insertValue: "$(docker ps -q)",
                        description: "All running containers",
                    },
                ],
                generators: [dockerGenerators.allDockerContainers],
            },
            options: [
                {
                    name: ["-f", "--force"],
                    description: "Force the removal of a running container (uses SIGKILL)",
                },
                {
                    name: ["-l", "--link"],
                    description: "Remove the specified link",
                },
                {
                    name: ["-v", "--volumes"],
                    description: "Remove the anonymous volumes associated with the container",
                },
            ],
        },
        {
            name: "rmi",
            description: "Remove one or more images",
            args: {
                variadic: true,
                name: "image",
                suggestions: [
                    {
                        name: "$(docker images -aq)",
                        insertValue: "$(docker images -aq)",
                        description: "All images (including intermediate images)",
                    },
                    {
                        name: "$(docker images -q)",
                        insertValue: "$(docker images -q)",
                        description: "All non-intermediate images",
                    },
                ],
                generators: [
                    {
                        script: "docker images -aq --format '{{ json . }}'",
                        postProcess: function (out) {
                            var allLines = out.split("\n").map(function (line) { return JSON.parse(line); });
                            return allLines.map(function (i) {
                                var displayName;
                                if (i.Repository === "\u003cnone\u003e") {
                                    displayName = i.ID;
                                }
                                else {
                                    displayName = i.Repository;
                                    if (i.Tag !== "\u003cnone\u003e") {
                                        displayName += ":" + i.Tag;
                                    }
                                }
                                return {
                                    name: i.ID,
                                    displayName: displayName + " (" + i.Size + ")",
                                };
                            });
                        },
                    },
                ],
            },
            options: [
                {
                    name: ["-f", "--force"],
                    description: "Force removal of the image",
                },
                {
                    name: "--no-prune",
                    description: "Do not delete untagged parents",
                },
            ],
        },
        {
            name: "run",
            description: "Run a command in a new container",
            options: [
                {
                    name: ["-i", "--interactive"],
                    description: "Keep STDIN open even if not attached",
                },
                { name: ["-t", "--tty"], description: "Allocate a pseudo-TTY" },
                {
                    name: ["-it"],
                    insertValue: "-it ",
                    description: "Launch an interactive session",
                    icon: "fig://icon?type=commandkey",
                },
            ],
            args: [
                {
                    name: "image",
                    description: "the Docker image to use",
                    generators: {
                        script: "docker images --format '{{.Repository}} {{.Size}} {{.Tag}} {{.ID}}'",
                        postProcess: function (out) {
                            return out.split("\n").map(function (image) {
                                var _a = image.split(" "), repo = _a[0], size = _a[1], tag = _a[2], id = _a[3];
                                return {
                                    name: repo,
                                    description: id + "@" + tag + " - " + size,
                                    icon: "fig://icon?type=docker",
                                };
                            });
                        },
                    },
                },
                {
                    name: "command",
                    // description: "The command to run in the container"
                },
            ],
        },
        {
            name: "save",
            description: "Save one or more images to a tar archive (streamed to STDOUT by default)",
            args: imagesArg,
            options: [
                {
                    description: "Write to a file, instead of STDOUT",
                    name: ["-o", "--output"],
                    args: {
                        name: "string",
                    },
                },
            ],
            subcommands: [],
        },
        {
            name: "search",
            description: "Search the Docker Hub for images",
            args: [
                {
                    name: "TERM",
                    description: "Search term",
                },
            ],
            options: [
                {
                    args: {
                        name: "filter",
                    },
                    description: "Filter output based on conditions provided",
                    name: ["-f", "--filter"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Pretty-print search using a Go template",
                    name: ["--format"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Max number of search results (default 25)",
                    name: ["--limit"],
                },
                {
                    description: "Don't truncate output",
                    name: ["--no-trunc"],
                },
            ],
            subcommands: [],
        },
        {
            name: "start",
            description: "Start one or more stopped containers",
            args: {
                name: "container",
                generators: [dockerGenerators.allDockerContainers],
            },
            options: [
                {
                    description: "Attach STDOUT/STDERR and forward signals",
                    name: ["-a", "--attach"],
                },
                {
                    description: "Override the key sequence for detaching a container",
                    name: ["--detach-keys"],
                    args: {
                        name: "string",
                    },
                },
                {
                    description: "Attach container's STDIN",
                    name: ["-i", "--interactive"],
                },
            ],
            subcommands: [],
        },
        {
            name: "stats",
            description: "Display a live stream of container(s) resource usage statistics",
            args: containersArg,
            options: [
                {
                    description: "Show all containers (default shows just running)",
                    name: ["-a", "--all"],
                },
                {
                    description: "Pretty-print images using a Go template",
                    name: ["--format"],
                    args: {
                        name: "string",
                    },
                },
                {
                    description: "Disable streaming stats and only pull the first result",
                    name: ["--no-stream"],
                },
                {
                    description: "Do not truncate output",
                    name: ["--no-trunc"],
                },
            ],
            subcommands: [],
        },
        {
            name: "stop",
            description: "Stop one or more running containers",
            args: containersArg,
            options: [
                {
                    name: ["-t", "--t"],
                    description: "Seconds to wait for stop before killing it (default 10)",
                    args: {
                        name: "int",
                    },
                },
            ],
        },
        {
            name: "tag",
            description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE",
            args: {
                name: "SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]",
            },
            options: [],
            subcommands: [],
        },
        {
            name: "top",
            description: "Display the running processes of a container",
            // TODO: You can pass in psOptions?
            args: containersArg,
            options: [],
            subcommands: [],
        },
        {
            name: "unpause",
            description: "Unpause all processes within one or more containers",
            args: {
                name: "container",
                generators: [dockerGenerators.pausedDockerContainers],
            },
            options: [],
            subcommands: [],
        },
        {
            name: "update",
            description: "Update configuration of one or more containers",
            // INFO: You can do this on any container, even if it's not running - Is that useful though?
            // INFO: For now, only displaying running containers
            args: containersArg,
            options: [
                {
                    args: {
                        name: "uint16",
                    },
                    description: "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
                    name: ["--blkio-weight"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Limit CPU CFS (Completely Fair Scheduler) period",
                    name: ["--cpu-period"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Limit CPU CFS (Completely Fair Scheduler) quota",
                    name: ["--cpu-quota"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Limit the CPU real-time period in microseconds",
                    name: ["--cpu-rt-period"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Limit the CPU real-time runtime in microseconds",
                    name: ["--cpu-rt-runtime"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "CPU shares (relative weight)",
                    name: ["-c", "--cpu-shares"],
                },
                {
                    args: {
                        name: "decimal",
                    },
                    description: "Number of CPUs",
                    name: ["--cpus"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "CPUs in which to allow execution (0-3, 0,1)",
                    name: ["--cpuset-cpus"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "MEMs in which to allow execution (0-3, 0,1)",
                    name: ["--cpuset-mems"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Kernel memory limit",
                    name: ["--kernel-memory"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Memory limit",
                    name: ["-m", "--memory"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Memory soft limit",
                    name: ["--memory-reservation"],
                },
                {
                    args: {
                        name: "bytes",
                    },
                    description: "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
                    name: ["--memory-swap"],
                },
                {
                    args: {
                        name: "int",
                    },
                    description: "Tune container pids limit (set -1 for unlimited)",
                    name: ["--pids-limit"],
                },
                {
                    args: {
                        name: "string",
                    },
                    description: "Restart policy to apply when a container exits",
                    name: ["--restart"],
                },
            ],
            subcommands: [],
        },
        {
            name: "version",
            description: "Show the Docker version information",
            args: {},
            options: [
                {
                    description: "Format the output. Values: [pretty | json]. (Default: pretty)",
                    name: ["-f", "--format"],
                    args: {
                        name: "string",
                    },
                },
                {
                    description: "Kubernetes config file",
                    name: ["--kubeconfig"],
                    args: {
                        name: "string",
                    },
                },
            ],
            subcommands: [],
        },
        {
            name: "wait",
            description: "Block until one or more containers stop, then print their exit codes",
            args: containersArg,
            options: [],
            subcommands: [],
        },
        {
            name: "builder",
            description: "Manage builds",
            // TODO Subcommands
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "config",
            description: "Manage Docker configs",
            // TODO Subcommands
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "container",
            description: "Manage containers",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "context",
            description: "Manage contexts",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "image",
            description: "Manage images",
            args: {},
            options: [],
            subcommands: [],
        },
        {
<<<<<<< HEAD
          description:
            "Format the output. Values: [pretty | json]. (Default: pretty)",
          name: ["-f", "--format"],
          args: {
            name: "string",
          },
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
        },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    	{ name: "trust",       description: "Manage trust on Docker images" },
    	{ name: "volume",      description: "Manage volumes" },
        { name: "version",     description: "Show the Docker version information" },
>>>>>>> 07aca48... Build out docker CLI commands more, autosuggesting image, container, multi-stage build names, and more
=======
        {name: "trust", description: "Manage trust on Docker images"},
        {name: "volume", description: "Manage volumes"},
        {name: "version", description: "Show the Docker version information"},
>>>>>>> 0d33bd1... Autoformat
=======
        { name: "trust", description: "Manage trust on Docker images" },
        { name: "volume", description: "Manage volumes" },
        { name: "version", description: "Show the Docker version information" },
>>>>>>> 3c23470... feat: move js specs to ts
=======
		},
=======
        },
>>>>>>> 09dd2f6... feat: Options for all parent commands
		{ 
			name: "save",        
			description: "Save one or more images to a tar archive (streamed to STDOUT by default)",
			args: imagesArg,
			options: [
				{
					"description": "Write to a file, instead of STDOUT",
					"name": [
						"-o",
						"--output"
					],
					args: {
						name: 'string'
					}
				}
			],
			subcommands: [] 
		},
		{ 
			name: "search",      
			description: "Search the Docker Hub for images",
			args: {
				name: 'TERM',
				displayName: 'Search term'
			},
			options: [
				{
					"args": {
						"name": "filter"
					},
					"description": "Filter output based on conditions provided",
					"name": [
						"-f",
						"--filter"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Pretty-print search using a Go template",
					"name": [
						"--format"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Max number of search results (default 25)",
					"name": [
						"--limit"
					]
				},
				{
					"description": "Don't truncate output",
					"name": [
						"--no-trunc"
					]
				}
			],
			subcommands: [] 
		},
		{ 
			name: "start",       
			description: "Start one or more stopped containers",
			args: {
				name: 'container',
				generators: [
					generators.allDockerContainers
				]
			},
			options: [
				{
					"description": "Attach STDOUT/STDERR and forward signals",
					"name": [
						"-a",
						"--attach"
					]
				},
				{
					"description": "Override the key sequence for detaching a container",
					"name": [
						"--detach-keys"
					],
					args: {
						name: 'string'
					}
				},
				{
					"description": "Attach container's STDIN",
					"name": [
						"-i",
						"--interactive"
					]
				}
			],
			subcommands: [] 
		},
		{ 
			name: "stats",       
			description: "Display a live stream of container(s) resource usage statistics",
			args: containersArg,
			options: [
				{
					"description": "Show all containers (default shows just running)",
					"name": [
						"-a",
						"--all"
					]
				},
				{
					"description": "Pretty-print images using a Go template",
					"name": [
						"--format"
					],
					args: {
						name: 'string'
					}
				},
				{
					"description": "Disable streaming stats and only pull the first result",
					"name": [
						"--no-stream"
					]
				},
				{
					"description": "Do not truncate output",
					"name": [
						"--no-trunc"
					]
				}
			],
			subcommands: [] 
		},
        {
            name: "stop",
            description: "Stop one or more running containers",
            args: containersArg,
            options: [
                {
                    name: ['-t', '--t'],
                    description: 'Seconds to wait for stop before killing it (default 10)',
                    args: {
                        name: 'int'
                    }
                }
            ]
        },
		{ 
			name: "tag",         
			description: "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE",
			args: {
				name: "SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]"
			},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "top",         
			description: "Display the running processes of a container",
			// TODO: You can pass in psOptions?
			args: containersArg,
			options: [],
			subcommands: [] 
		},
		{ 
			name: "unpause",     
			description: "Unpause all processes within one or more containers",
			args: {
				name: 'container',
				generators: [
					generators.pausedDockerContainers
				]
			},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "update",      
			description: "Update configuration of one or more containers",
			// INFO: You can do this on any container, even if it's not running - Is that useful though?
			// INFO: For now, only displaying running containers
			args: containersArg,
			options: [
				{
					"args": {
						"name": "uint16"
					},
					"description": "Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)",
					"name": [
						"--blkio-weight"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Limit CPU CFS (Completely Fair Scheduler) period",
					"name": [
						"--cpu-period"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Limit CPU CFS (Completely Fair Scheduler) quota",
					"name": [
						"--cpu-quota"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Limit the CPU real-time period in microseconds",
					"name": [
						"--cpu-rt-period"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Limit the CPU real-time runtime in microseconds",
					"name": [
						"--cpu-rt-runtime"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "CPU shares (relative weight)",
					"name": [
						"-c",
						"--cpu-shares"
					]
				},
				{
					"args": {
						"name": "decimal"
					},
					"description": "Number of CPUs",
					"name": [
						"--cpus"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "CPUs in which to allow execution (0-3, 0,1)",
					"name": [
						"--cpuset-cpus"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "MEMs in which to allow execution (0-3, 0,1)",
					"name": [
						"--cpuset-mems"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Kernel memory limit",
					"name": [
						"--kernel-memory"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Memory limit",
					"name": [
						"-m",
						"--memory"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Memory soft limit",
					"name": [
						"--memory-reservation"
					]
				},
				{
					"args": {
						"name": "bytes"
					},
					"description": "Swap limit equal to memory plus swap: '-1' to enable unlimited swap",
					"name": [
						"--memory-swap"
					]
				},
				{
					"args": {
						"name": "int"
					},
					"description": "Tune container pids limit (set -1 for unlimited)",
					"name": [
						"--pids-limit"
					]
				},
				{
					"args": {
						"name": "string"
					},
					"description": "Restart policy to apply when a container exits",
					"name": [
						"--restart"
					]
				}
			],
			subcommands: [] 
		},
		{ 
			name: "version",     
			description: "Show the Docker version information",
			args: {},
			options: [
				{
					"description": "Format the output. Values: [pretty | json]. (Default: pretty)",
					"name": [
						"-f",
						"--format"
					],
					args: {
						name: 'string'
					}
				},
				{
					"description": "Kubernetes config file",
					"name": [
						"--kubeconfig"
					],
					args: {
						name: 'string'
					}
				}
			],
			subcommands: [] 
		},
		{ 
			name: "wait",        
			description: "Block until one or more containers stop, then print their exit codes",
			args: containersArg,
			options: [],
			subcommands: [] 
		},
		{ 
			name: "builder",     
			description: "Manage builds",
			// TODO Subcommands
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "config",      
			description: "Manage Docker configs",
			// TODO Subcommands
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "container",   
			description: "Manage containers",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "context",     
			description: "Manage contexts",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "image",       
			description: "Manage images",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "network",     
			description: "Manage networks",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "node",        
			description: "Manage Swarm nodes",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "plugin",      
			description: "Manage plugins",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "secret",      
			description: "Manage Docker secrets",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "service",     
			description: "Manage services",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "stack",       
			description: "Manage Docker stacks",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "swarm",       
			description: "Manage Swarm",
			args: {},
			options: [],
			subcommands: [] 
		},
=======
            name: "network",
            description: "Manage networks",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "node",
            description: "Manage Swarm nodes",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "plugin",
            description: "Manage plugins",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "secret",
            description: "Manage Docker secrets",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "service",
            description: "Manage services",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "stack",
            description: "Manage Docker stacks",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "swarm",
            description: "Manage Swarm",
            args: {},
            options: [],
            subcommands: [],
        },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
        {
            name: "system",
            description: "Manage Docker",
            subcommands: [
                {
<<<<<<< HEAD
                    name: 'prune',
                    description: 'Remove unused data',
                    options: [
                        {
                            name: ['-a', '--all'],
                            description: 'Remove all unused images not just dangling ones'
                        },
                        {
                            name: '--filter',
                            description: `Provide filter values (e.g. 'label=<key>=<value')`,
                            args: {
                                name: 'filter'
                            }
                        },
                        {
                            name: ['-f', '--force'],
                            description: 'Do not prompt for confirmation',
                        },
                        {
                            name: '--volumes',
                            description: 'Prune volumes'
                        }
                    ]
                }
            ]
        },
		{ 
			name: "trust",       
			description: "Manage trust on Docker images",
			args: {},
			options: [],
			subcommands: [] 
		},
		{ 
			name: "volume",      
			description: "Manage volumes",
			args: {},
			options: [],
			subcommands: []
		}
>>>>>>> 0b8294c... style: Clean up code styling
    ]
=======
        { name: 'trust', description: 'Manage trust on Docker images' },
        { name: 'volume', description: 'Manage volumes' },
        { name: 'version', description: 'Show the Docker version information' },
    ],
>>>>>>> b5d9641... fix: also fix compiled specs
=======
=======
                    name: "prune",
                    description: "Remove unused data",
                    options: [
                        {
                            name: ["-a", "--all"],
                            description: "Remove all unused images not just dangling ones",
                        },
                        {
                            name: "--filter",
                            description: "Provide filter values (e.g. 'label=<key>=<value')",
                            args: {
                                name: "filter",
                            },
                        },
                        {
                            name: ["-f", "--force"],
                            description: "Do not prompt for confirmation",
                        },
                        {
                            name: "--volumes",
                            description: "Prune volumes",
                        },
                    ],
                },
            ],
        },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
        {
            name: "trust",
            description: "Manage trust on Docker images",
            args: {},
            options: [],
            subcommands: [],
        },
        {
            name: "volume",
            description: "Manage volumes",
            args: {},
            options: [],
            subcommands: [],
        },
<<<<<<< HEAD
<<<<<<< HEAD
    ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
      ],
    },
    {
      name: "trust",
      description: "Manage trust on Docker images",
      args: {},
      options: [],
      subcommands: [],
    },
    {
      name: "volume",
      description: "Manage volumes",
      args: {},
      options: [],
      subcommands: [],
    },
  ],
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
    ],
>>>>>>> a09fa69... removed linting from all js specs in specs folder
};

