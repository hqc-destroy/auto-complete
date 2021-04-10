var getServices = {
<<<<<<< HEAD
<<<<<<< HEAD
    script: "docker-compose config --services",
    splitOn: "\n",
};
=======
    script: (context) => {
        if (context.includes('-f')) {
            let index = context.indexOf('-f');
            return `docker-compose -f ${context[index + 1]} config --services`
=======
    script: function (context) {
        if (context.includes("-f")) {
            var index = context.indexOf("-f");
            return "docker-compose -f " + context[index + 1] + " config --services";
>>>>>>> 59955ff... feat: add missing transpiled files
        }
        return "docker-compose config --services";
    },
<<<<<<< HEAD
    splitOn: "\n"
}

>>>>>>> c890610... feat(docker-compose): generate -f suggestions
=======
    splitOn: "\n",
};
>>>>>>> 59955ff... feat: add missing transpiled files
var completionSpec = {
    name: "docker-compose",
    description: "",
    subcommands: [
        {
            name: "build",
            description: "Build or rebuild services.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--build-arg"],
                    description: "Set build-time variables for services.\n",
                    args: {},
                },
                {
                    name: ["--compress"],
                    description: "Compress the build context using gzip.\n",
                    args: {},
                },
                {
                    name: ["--force-rm"],
                    description: "Always remove intermediate containers.\n",
                    args: {},
                },
                {
                    name: ["-m", "--memory"],
                    description: "Set memory limit for the build container.\n",
                    args: {},
                },
                {
                    name: ["--no-cache"],
                    description: "Do not use cache when building the image.\n",
                    args: {},
                },
                {
                    name: ["--no-rm"],
                    description: "Do not remove intermediate containers after a successful build.\n",
                    args: {},
                },
                {
                    name: ["--parallel"],
                    description: "Build images in parallel.\n",
                    args: {},
                },
                {
                    name: ["--progress"],
                    description: "Set type of progress output (auto, plain, tty).\n                            EXPERIMENTAL flag for native builder.\n                            To enable, run with COMPOSE_DOCKER_CLI_BUILD=1)\n",
                    args: {},
                },
                {
                    name: ["--pull"],
                    description: "Always attempt to pull a newer version of the image.\n",
                    args: {},
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Don't print anything to STDOUT\n",
                    args: {},
                },
=======
                    name: [
                        "--build-arg"
                    ],
=======
                    name: ["--build-arg"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Set build-time variables for services.",
                    args: {},
                },
                {
                    name: ["--compress"],
                    description: "Compress the build context using gzip.",
                    args: {},
                },
                {
                    name: ["--force-rm"],
                    description: "Always remove intermediate containers.",
                    args: {},
                },
                {
                    name: ["-m", "--memory"],
                    description: "Set memory limit for the build container.",
                    args: {},
                },
                {
                    name: ["--no-cache"],
                    description: "Do not use cache when building the image.",
                    args: {},
                },
                {
                    name: ["--no-rm"],
                    description: "Do not remove intermediate containers after a successful build.",
                    args: {},
                },
                {
                    name: ["--parallel"],
                    description: "Build images in parallel.",
                    args: {},
                },
                {
                    name: ["--progress"],
                    description: "Set type of progress output (auto, plain, tty). EXPERIMENTAL flag for native builder. To enable, run with COMPOSE_DOCKER_CLI_BUILD=1)",
                    args: {},
                },
                {
                    name: ["--pull"],
                    description: "Always attempt to pull a newer version of the image.",
                    args: {},
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Don't print anything to STDOUT",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "config",
            description: "Validate and view the Compose file.",
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--resolve-image-digests"],
                    description: "Pin image tags to digests.\n",
                    args: {},
                },
                {
                    name: ["--no-interpolate"],
                    description: "Don't interpolate environment variables.\n",
                    args: {},
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Only validate the configuration, don't print\n                             anything.\n",
                    args: {},
                },
                {
                    name: ["--services"],
                    description: "Print the service names, one per line.\n",
                    args: {},
                },
                {
                    name: ["--volumes"],
                    description: "Print the volume names, one per line.\n",
                    args: {},
                },
                {
                    name: ["--hash"],
                    description: 'Print the service config hash, one per line.\n                             Set "service1,service2" for a list of specified services\n                             or use the wildcard symbol to display all services.\n',
                    args: {},
                },
=======
                    name: [
                        "--resolve-image-digests"
                    ],
=======
                    name: ["--resolve-image-digests"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Pin image tags to digests.",
                    args: {},
                },
                {
                    name: ["--no-interpolate"],
                    description: "Don't interpolate environment variables.",
                    args: {},
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Only validate the configuration, don't print anything.",
                    args: {},
                },
                {
                    name: ["--services"],
                    description: "Print the service names, one per line.",
                    args: {},
                },
                {
                    name: ["--volumes"],
                    description: "Print the volume names, one per line.",
                    args: {},
                },
                {
<<<<<<< HEAD
                    name: [
                        "--hash"
                    ],
                    description: "Print the service config hash, one per line. Set \"service1,service2\" for a list of specified services or use the wildcard symbol to display all services.",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    name: ["--hash"],
                    description: 'Print the service config hash, one per line. Set "service1,service2" for a list of specified services or use the wildcard symbol to display all services.',
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "create",
            description: "Creates containers for a service.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--force-recreate"],
                    description: "Recreate containers even if their configuration and\n                           image haven't changed. Incompatible with --no-recreate.\n",
                    args: {},
                },
                {
                    name: ["--no-recreate"],
                    description: "If containers already exist, don't recreate them.\n                           Incompatible with --force-recreate.\n",
                    args: {},
                },
                {
                    name: ["--no-build"],
                    description: "Don't build an image, even if it's missing.\n",
                    args: {},
                },
                {
                    name: ["--build"],
                    description: "Build images before creating containers.\n",
                    args: {},
                },
=======
                    name: [
                        "--force-recreate"
                    ],
=======
                    name: ["--force-recreate"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Recreate containers even if their configuration and image haven't changed. Incompatible with --no-recreate.",
                    args: {},
                },
                {
                    name: ["--no-recreate"],
                    description: "If containers already exist, don't recreate them. Incompatible with --force-recreate.",
                    args: {},
                },
                {
                    name: ["--no-build"],
                    description: "Don't build an image, even if it's missing.",
                    args: {},
                },
                {
                    name: ["--build"],
                    description: "Build images before creating containers.",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "down",
            description: "Stops containers and removes containers, networks, volumes, and images",
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--rmi"],
                    description: "Remove images. Type must be one of:\n                              'all': Remove all images used by any service.\n                              'local': Remove only images that don't have a\n                              custom tag set by the `image` field.\n",
                    args: {},
                },
                {
                    name: ["-v", "--volumes"],
                    description: "Remove named volumes declared in the `volumes`\n                            section of the Compose file and anonymous volumes\n                            attached to containers.\n",
                    args: {},
                },
                {
                    name: ["--remove-orphans"],
                    description: "Remove containers for services not defined in the\n                            Compose file\n",
                    args: {},
                },
                {
                    name: ["-t", "--timeout"],
                    description: "Specify a shutdown timeout in seconds.\n                            (default: 10)\n",
                    args: {},
                },
=======
                    name: [
                        "--rmi"
                    ],
=======
                    name: ["--rmi"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Remove images. Type must be one of: 'all': Remove all images used by any service. 'local': Remove only images that don't have a custom tag set by the `image` field.",
                    args: {},
                },
                {
                    name: ["-v", "--volumes"],
                    description: "Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers.",
                    args: {},
                },
                {
                    name: ["--remove-orphans"],
                    description: "Remove containers for services not defined in the Compose file",
                    args: {},
                },
                {
                    name: ["-t", "--timeout"],
                    description: "Specify a shutdown timeout in seconds. (default: 10)",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "events",
            description: "Receive real time events from containers.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--json"],
                    description: "Output events as a stream of json objects\n",
                    args: {},
                },
=======
                    name: [
                        "--json"
                    ],
                    description: "Output events as a stream of json objects",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    name: ["--json"],
                    description: "Output events as a stream of json objects",
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "exec",
            description: "Execute a command in a running container",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-d", "--detach"],
                    description: "Detached mode: Run command in the background.\n",
                    args: {},
                },
                {
                    name: ["--privileged"],
                    description: "Give extended privileges to the process.\n",
                    args: {},
                },
                {
                    name: ["-u", "--user"],
                    description: "Run the command as this user.\n",
                    args: {},
                },
                {
                    name: ["-T"],
                    description: "Disable pseudo-tty allocation. By default `docker-compose exec`\n                      allocates a TTY.\n",
                    args: {},
                },
                {
                    name: ["--index"],
                    description: "index of the container if there are multiple\n                      instances of a service [default: 1]\n",
                    args: {},
                },
                {
                    name: ["-e", "--env"],
                    description: "not supported in API < 1.25)\n",
                    args: {},
                },
                {
                    name: ["-w", "--workdir"],
                    description: "DIR Path to workdir directory for this command.\n",
                    args: {},
                },
=======
                    name: [
                        "-d",
                        "--detach"
                    ],
=======
                    name: ["-d", "--detach"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Detached mode: Run command in the background.",
                    args: {},
                },
                {
                    name: ["--privileged"],
                    description: "Give extended privileges to the process.",
                    args: {},
                },
                {
                    name: ["-u", "--user"],
                    description: "Run the command as this user.",
                    args: {},
                },
                {
                    name: ["-T"],
                    description: "Disable pseudo-tty allocation. By default `docker-compose exec` allocates a TTY.",
                    args: {},
                },
                {
                    name: ["--index"],
                    description: "index of the container if there are multiple instances of a service [default: 1]",
                    args: {},
                },
                {
                    name: ["-e", "--env"],
                    description: "not supported in API < 1.25)",
                    args: {},
                },
                {
                    name: ["-w", "--workdir"],
                    description: "DIR Path to workdir directory for this command.",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "help",
            description: "Get help on a command.",
            options: [],
            subcommands: [],
        },
        {
            name: "images",
            description: "List images used by the created containers.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-q", "--quiet"],
                    description: "Only display IDs\n",
                    args: {},
                },
=======
                    name: [
                        "-q",
                        "--quiet"
                    ],
                    description: "Only display IDs",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    name: ["-q", "--quiet"],
                    description: "Only display IDs",
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "kill",
            description: "Force stop service containers.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-s"],
                    description: "SIGNAL to send to the container.\n                      Default signal is SIGKILL.\n",
                    args: {},
                },
=======
                    name: [
                        "-s"
                    ],
                    description: "SIGNAL to send to the container. Default signal is SIGKILL.",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    name: ["-s"],
                    description: "SIGNAL to send to the container. Default signal is SIGKILL.",
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "logs",
            description: "View output from containers.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--no-color"],
                    description: "Produce monochrome output.\n",
                    args: {},
                },
                {
                    name: ["-f", "--follow"],
                    description: "Follow log output.\n",
                    args: {},
                },
                {
                    name: ["-t", "--timestamps"],
                    description: "Show timestamps.\n",
                    args: {},
                },
                {
                    name: ["--tail"],
                    description: "Number of lines to show from the end of the logs\n                        for each container.\n",
                    args: {},
                },
=======
                    name: [
                        "--no-color"
                    ],
=======
                    name: ["--no-color"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Produce monochrome output.",
                    args: {},
                },
                {
                    name: ["-f", "--follow"],
                    description: "Follow log output.",
                    args: {},
                },
                {
                    name: ["-t", "--timestamps"],
                    description: "Show timestamps.",
                    args: {},
                },
                {
                    name: ["--tail"],
                    description: "Number of lines to show from the end of the logs for each container.",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "pause",
            description: "Pause services.",
            args: [getServices],
            options: [],
            subcommands: [],
        },
        {
            name: "port",
            description: "Print the public port for a port binding.",
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--protocol"],
                    description: "tcp or udp [default: tcp]\n",
                    args: {},
                },
                {
                    name: ["--index"],
                    description: "index of the container if there are multiple\n                      instances of a service [default: 1]\n",
                    args: {},
                },
=======
                    name: [
                        "--protocol"
                    ],
=======
                    name: ["--protocol"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "tcp or udp [default: tcp]",
                    args: {},
                },
                {
                    name: ["--index"],
                    description: "index of the container if there are multiple instances of a service [default: 1]",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "ps",
            description: "List containers.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-q", "--quiet"],
                    description: "Only display IDs\n",
                    args: {},
                },
                {
                    name: ["--services"],
                    description: "Display services\n",
                    args: {},
                },
                {
                    name: ["--filter"],
                    description: "Filter services by a property\n",
                    args: {},
                },
                {
                    name: ["-a", "--all"],
                    description: "Show all stopped containers (including those created by the run command)\n",
                    args: {},
                },
=======
                    name: [
                        "-q",
                        "--quiet"
                    ],
=======
                    name: ["-q", "--quiet"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Only display IDs",
                    args: {},
                },
                {
                    name: ["--services"],
                    description: "Display services",
                    args: {},
                },
                {
                    name: ["--filter"],
                    description: "Filter services by a property",
                    args: {},
                },
                {
                    name: ["-a", "--all"],
                    description: "Show all stopped containers (including those created by the run command)",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "pull",
            description: "Pulls images for services defined in a Compose file, but does not start the containers.",
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--ignore-pull-failures"],
                    description: "Pull what it can and ignores images with pull failures.\n",
                    args: {},
                },
                {
                    name: ["--parallel"],
                    description: "Deprecated, pull multiple images in parallel (enabled by default).\n",
                    args: {},
                },
                {
                    name: ["--no-parallel"],
                    description: "Disable parallel pulling.\n",
                    args: {},
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Pull without printing progress information\n",
                    args: {},
                },
                {
                    name: ["--include-deps"],
                    description: "Also pull services declared as dependencies\n",
                    args: {},
                },
=======
                    name: [
                        "--ignore-pull-failures"
                    ],
=======
                    name: ["--ignore-pull-failures"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Pull what it can and ignores images with pull failures.",
                    args: {},
                },
                {
                    name: ["--parallel"],
                    description: "Deprecated, pull multiple images in parallel (enabled by default).",
                    args: {},
                },
                {
                    name: ["--no-parallel"],
                    description: "Disable parallel pulling.",
                    args: {},
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Pull without printing progress information",
                    args: {},
                },
                {
                    name: ["--include-deps"],
                    description: "Also pull services declared as dependencies",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "push",
            description: "Pushes images for services.",
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--ignore-push-failures"],
                    description: "Push what it can and ignores images with push failures.\n",
                    args: {},
                },
=======
                    name: [
                        "--ignore-push-failures"
                    ],
                    description: "Push what it can and ignores images with push failures.",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    name: ["--ignore-push-failures"],
                    description: "Push what it can and ignores images with push failures.",
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "restart",
            description: "Restart running containers.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-t", "--timeout"],
                    description: "Specify a shutdown timeout in seconds.\n                             (default: 10)\n",
                    args: {},
                },
=======
                    name: [
                        "-t",
                        "--timeout"
                    ],
                    description: "Specify a shutdown timeout in seconds. (default: 10)",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    name: ["-t", "--timeout"],
                    description: "Specify a shutdown timeout in seconds. (default: 10)",
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "rm",
            description: "Removes stopped service containers.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-f", "--force"],
                    description: "Don't ask to confirm removal\n",
                    args: {},
                },
                {
                    name: ["-s", "--stop"],
                    description: "Stop the containers, if required, before removing\n",
                    args: {},
                },
                {
                    name: ["-v"],
                    description: "Remove any anonymous volumes attached to containers\n",
                    args: {},
                },
                {
                    name: ["-a", "--all"],
                    description: "Deprecated - no effect.\n",
                    args: {},
                },
=======
                    name: [
                        "-f",
                        "--force"
                    ],
=======
                    name: ["-f", "--force"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Don't ask to confirm removal",
                    args: {},
                },
                {
                    name: ["-s", "--stop"],
                    description: "Stop the containers, if required, before removing",
                    args: {},
                },
                {
                    name: ["-v"],
                    description: "Remove any anonymous volumes attached to containers",
                    args: {},
                },
<<<<<<< HEAD
                {
                    name: [
                        "-a",
                        "--all"
                    ],
                    description: "Deprecated - no effect.",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
>>>>>>> 26969c2... feat(docker-compose): --env-file filepaths generator
            ],
            subcommands: [],
        },
        {
            name: "run",
            description: "Run a one-off command on a service.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-d", "--detach"],
                    description: "Detached mode: Run container in the background, print\n                          new container name.\n",
                    args: {},
                },
                {
                    name: ["--name"],
                    description: "Assign a name to the container\n",
                    args: {},
                },
                {
                    name: ["--entrypoint"],
                    description: "Override the entrypoint of the image.\n",
                    args: {},
                },
                {
                    name: ["-e"],
                    description: "Set an environment variable (can be used multiple times)\n",
                    args: {},
                },
                {
                    name: ["-l", "--label"],
                    description: "Add or override a label (can be used multiple times)\n",
                    args: {},
                },
                {
                    name: ["-u", "--user"],
                    description: "Run as specified username or uid\n",
                    args: {},
                },
                {
                    name: ["--no-deps"],
                    description: "Don't start linked services.\n",
                    args: {},
                },
                {
                    name: ["--rm"],
                    description: "Remove container after run. Ignored in detached mode.\n",
                    args: {},
                },
                {
                    name: ["-p", "--publish"],
                    description: "Publish a container's port(s) to the host\n",
                    args: {},
                },
                {
                    name: ["--service-ports"],
                    description: "Run command with the service's ports enabled and mapped\n                          to the host.\n",
                    args: {},
                },
                {
                    name: ["--use-aliases"],
                    description: "Use the service's network aliases in the network(s) the\n                          container connects to.\n",
                    args: {},
                },
                {
                    name: ["-v", "--volume"],
                    description: "Bind mount a volume (default [])\n",
                    args: {},
                },
                {
                    name: ["-T"],
                    description: "Disable pseudo-tty allocation. By default `docker-compose run`\n                          allocates a TTY.\n",
                    args: {},
                },
                {
                    name: ["-w", "--workdir"],
                    description: "Working directory inside the container\n",
                    args: {},
                },
=======
                    name: [
                        "-d",
                        "--detach"
                    ],
=======
                    name: ["-d", "--detach"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Detached mode: Run container in the background, print new container name.",
                    args: {},
                },
                {
                    name: ["--name"],
                    description: "Assign a name to the container",
                    args: {},
                },
                {
                    name: ["--entrypoint"],
                    description: "Override the entrypoint of the image.",
                    args: {},
                },
                {
                    name: ["-e"],
                    description: "Set an environment variable (can be used multiple times)",
                    args: {},
                },
                {
                    name: ["-l", "--label"],
                    description: "Add or override a label (can be used multiple times)",
                    args: {},
                },
                {
                    name: ["-u", "--user"],
                    description: "Run as specified username or uid",
                    args: {},
                },
                {
                    name: ["--no-deps"],
                    description: "Don't start linked services.",
                    args: {},
                },
                {
                    name: ["--rm"],
                    description: "Remove container after run. Ignored in detached mode.",
                    args: {},
                },
                {
                    name: ["-p", "--publish"],
                    description: "Publish a container's port(s) to the host",
                    args: {},
                },
                {
                    name: ["--service-ports"],
                    description: "Run command with the service's ports enabled and mapped to the host.",
                    args: {},
                },
                {
                    name: ["--use-aliases"],
                    description: "Use the service's network aliases in the network(s) the container connects to.",
                    args: {},
                },
                {
                    name: ["-v", "--volume"],
                    description: "Bind mount a volume (default [])",
                    args: {},
                },
                {
                    name: ["-T"],
                    description: "Disable pseudo-tty allocation. By default `docker-compose run` allocates a TTY.",
                    args: {},
                },
                {
                    name: ["-w", "--workdir"],
                    description: "Working directory inside the container",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "scale",
            description: "Set number of containers to run for a service.",
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-t", "--timeout"],
                    description: "Specify a shutdown timeout in seconds.\n                             (default: 10)\n",
                    args: {},
                },
=======
                    name: [
                        "-t",
                        "--timeout"
                    ],
                    description: "Specify a shutdown timeout in seconds. (default: 10)",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    name: ["-t", "--timeout"],
                    description: "Specify a shutdown timeout in seconds. (default: 10)",
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "start",
            description: "Start existing containers.",
            args: [getServices],
            options: [],
            subcommands: [],
        },
        {
            name: "stop",
            description: "Stop running containers without removing them.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-t", "--timeout"],
                    description: "Specify a shutdown timeout in seconds.\n                             (default: 10)\n",
                    args: {},
                },
=======
                    name: [
                        "-t",
                        "--timeout"
                    ],
                    description: "Specify a shutdown timeout in seconds. (default: 10)",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    name: ["-t", "--timeout"],
                    description: "Specify a shutdown timeout in seconds. (default: 10)",
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "top",
            description: "Display the running processes",
            options: [],
            subcommands: [],
        },
        {
            name: "unpause",
            description: "Unpause services.",
            options: [],
            subcommands: [],
        },
        {
            name: "up",
            description: "Builds, (re)creates, starts, and attaches to containers for a service.",
            args: [getServices],
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["-d", "--detach"],
                    description: "Detached mode: Run containers in the background,\n                               print new container names. Incompatible with\n",
                    args: {},
                },
                {
                    name: ["--no-color"],
                    description: "Produce monochrome output.\n",
                    args: {},
                },
                {
                    name: ["--quiet-pull"],
                    description: "Pull without printing progress information\n",
                    args: {},
                },
                {
                    name: ["--no-deps"],
                    description: "Don't start linked services.\n",
                    args: {},
                },
                {
                    name: ["--force-recreate"],
                    description: "Recreate containers even if their configuration\n                               and image haven't changed.\n",
                    args: {},
                },
                {
                    name: ["--always-recreate-deps"],
                    description: "Recreate dependent containers.\n                               Incompatible with --no-recreate.\n",
                    args: {},
                },
                {
                    name: ["--no-recreate"],
                    description: "If containers already exist, don't recreate\n                               them. Incompatible with --force-recreate and -V.\n",
                    args: {},
                },
                {
                    name: ["--no-build"],
                    description: "Don't build an image, even if it's missing.\n",
                    args: {},
                },
                {
                    name: ["--no-start"],
                    description: "Don't start the services after creating them.\n",
                    args: {},
                },
                {
                    name: ["--build"],
                    description: "Build images before starting containers.\n",
                    args: {},
                },
                {
                    name: ["--abort-on-container-exit"],
                    description: "Stops all containers if any container was\n                               stopped. Incompatible with -d.\n",
                    args: {},
                },
                {
                    name: ["--attach-dependencies"],
                    description: "Attach to dependent containers.\n",
                    args: {},
                },
                {
                    name: ["-t", "--timeout"],
                    description: "Use this timeout in seconds for container\n                               shutdown when attached or when containers are\n                               already running. (default: 10)\n",
                    args: {},
                },
                {
                    name: ["-V", "--renew-anon-volumes"],
                    description: "Recreate anonymous volumes instead of retrieving\n                               data from the previous containers.\n",
                    args: {},
                },
                {
                    name: ["--remove-orphans"],
                    description: "Remove containers for services not defined\n                               in the Compose file.\n",
                    args: {},
                },
                {
                    name: ["--exit-code-from"],
                    description: "Return the exit code of the selected service\n                               container. Implies --abort-on-container-exit.\n",
                    args: {},
                },
                {
                    name: ["--scale"],
                    description: "Scale SERVICE to NUM instances. Overrides the\n                               `scale` setting in the Compose file if present.\n",
                    args: {},
                },
=======
                    name: [
                        "-d",
                        "--detach"
                    ],
=======
                    name: ["-d", "--detach"],
>>>>>>> 59955ff... feat: add missing transpiled files
                    description: "Detached mode: Run containers in the background, print new container names. Incompatible with",
                    args: {},
                },
                {
                    name: ["--no-color"],
                    description: "Produce monochrome output.",
                    args: {},
                },
                {
                    name: ["--quiet-pull"],
                    description: "Pull without printing progress information",
                    args: {},
                },
                {
                    name: ["--no-deps"],
                    description: "Don't start linked services.",
                    args: {},
                },
                {
                    name: ["--force-recreate"],
                    description: "Recreate containers even if their configuration and image haven't changed.",
                    args: {},
                },
                {
                    name: ["--always-recreate-deps"],
                    description: "Recreate dependent containers. Incompatible with --no-recreate.",
                    args: {},
                },
                {
                    name: ["--no-recreate"],
                    description: "If containers already exist, don't recreate them. Incompatible with --force-recreate and -V.",
                    args: {},
                },
                {
                    name: ["--no-build"],
                    description: "Don't build an image, even if it's missing.",
                    args: {},
                },
                {
                    name: ["--no-start"],
                    description: "Don't start the services after creating them.",
                    args: {},
                },
                {
                    name: ["--build"],
                    description: "Build images before starting containers.",
                    args: {},
                },
                {
                    name: ["--abort-on-container-exit"],
                    description: "Stops all containers if any container was stopped. Incompatible with -d.",
                    args: {},
                },
                {
                    name: ["--attach-dependencies"],
                    description: "Attach to dependent containers.",
                    args: {},
                },
                {
                    name: ["-t", "--timeout"],
                    description: "Use this timeout in seconds for container shutdown when attached or when containers are already running. (default: 10)",
                    args: {},
                },
                {
                    name: ["-V", "--renew-anon-volumes"],
                    description: "Recreate anonymous volumes instead of retrieving data from the previous containers.",
                    args: {},
                },
                {
                    name: ["--remove-orphans"],
                    description: "Remove containers for services not defined in the Compose file.",
                    args: {},
                },
                {
                    name: ["--exit-code-from"],
                    description: "Return the exit code of the selected service container. Implies --abort-on-container-exit.",
                    args: {},
                },
                {
                    name: ["--scale"],
                    description: "Scale SERVICE to NUM instances. Overrides the `scale` setting in the Compose file if present.",
<<<<<<< HEAD
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
=======
                    args: {},
                },
>>>>>>> 59955ff... feat: add missing transpiled files
            ],
            subcommands: [],
        },
        {
            name: "version",
            description: "Show version information and quit.",
            options: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ["--short"],
                    description: "Shows only Compose's version number.\n",
                    args: {},
                },
=======
                    name: [
                        "--short"
                    ],
                    description: "Shows only Compose's version number.",
                    args: {}
                }
>>>>>>> 188445b... style(docker-compose): Clean up whitespace
            ],
<<<<<<< HEAD
            subcommands: [],
        },
    ],
};

=======
            subcommands: []
        }
=======
                    name: ["--short"],
                    description: "Shows only Compose's version number.",
                    args: {},
                },
            ],
            subcommands: [],
        },
>>>>>>> 59955ff... feat: add missing transpiled files
    ],
    options: [
        {
            args: {
                name: "Docker Compose File",
                generators: {
                    template: "filepaths",
                    filterTemplateSuggestions: function (paths) {
                        var _this = this;
                        var suffix = ".yml";
                        return paths.filter(function (file) {
                            return (file.name.indexOf(suffix, _this.length - suffix.length) >= 0);
                        });
                    },
                },
            },
            description: "Specify an alternate compose file",
            name: ["-f", "--file"],
        },
        {
            args: {
                name: "string",
            },
            description: "Specify an alternate project name",
            name: ["-p", "--project-name"],
        },
        {
            args: {
                name: "string",
            },
            description: "Specify a profile to enable",
            name: ["--profile"],
        },
        {
            args: {
                name: "string",
            },
            description: "Specify a context name",
            name: ["-c", "--context"],
        },
        {
            description: "Show more output",
            name: ["--verbose"],
        },
        {
            args: {
                name: "LEVEL",
            },
            description: "Set log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)",
            name: ["--log-level"],
        },
        {
            args: {
                name: "(never|always|auto)",
            },
            description: "Control when to print ANSI control characters",
            name: ["--ansi"],
        },
        {
            description: "Do not print ANSI control characters (DEPRECATED)",
            name: ["--no-ansi"],
        },
        {
            description: "Print version and exit",
            name: ["-v", "--version"],
        },
        {
            args: {
                name: "HOST",
            },
            description: "Daemon socket to connect to",
            name: ["-H", "--host"],
        },
        {
            description: "Use TLS; implied by --tlsverify",
            name: ["--tls"],
        },
        {
            args: {
                name: "CA_PATH",
            },
            description: "Trust certs signed only by this CA",
            name: ["--tlscacert"],
        },
        {
            args: {
                name: "CLIENT_CERT_PATH",
            },
            description: "Path to TLS certificate file",
            name: ["--tlscert"],
        },
        {
            args: {
                name: "TLS_KEY_PATH",
            },
            description: "Path to TLS key file",
            name: ["--tlskey"],
        },
        {
            description: "Use TLS and verify the remote",
            name: ["--tlsverify"],
        },
        {
            description: "Don't check the daemon's hostname against the",
            name: ["--skip-hostname-check"],
        },
        {
            args: {
                name: "PATH",
            },
            description: "Specify an alternate working directory",
            name: ["--project-directory"],
        },
        {
            description: "If set, Compose will attempt to convert keys",
            name: ["--compatibility"],
        },
        {
            args: {
                name: "PATH",
                template: "filepaths",
            },
<<<<<<< HEAD
            "description": "Specify an alternate environment file",
            "name": [
                "--env-file"
            ]
        }
    ]
}
>>>>>>> 9a66d66... feat(docker-compose): global options
=======
            description: "Specify an alternate environment file",
            name: ["--env-file"],
        },
    ],
};

>>>>>>> 59955ff... feat: add missing transpiled files
