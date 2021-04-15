var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    name: 'firebase',
    description: 'CLI Interface for Google Firebase',
<<<<<<< HEAD
    //   args: {},
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    subcommands: [
        {
            name: 'login',
            description: 'login to firebase',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'output usage info',
                },
                {
                    name: ['--reauth'],
                    description: 'force reauthentication even if already logged in',
                },
                {
                    name: ['--no-localhost'],
                    description: 'copy and paste a code instead of starting a local server for authentication',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    name: "firebase",
    description: "CLI Interface for Google Firebase",
    subcommands: [
        {
            name: "login",
            description: "login to firebase",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage info",
                },
                {
                    name: ["--reauth"],
                    description: "force reauthentication even if already logged in",
                },
                {
                    name: ["--no-localhost"],
                    description: "copy and paste a code instead of starting a local server for authentication",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'init',
            description: 'initialize firebase project',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'output usage info',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "init",
            description: "initialize firebase project",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage info",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'serve',
            description: 'test project on local http',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'output usage info',
                },
                {
                    name: ['-p', '--port'],
                    description: 'use the given port',
                    args: {},
                },
                {
                    name: ['-o', '--host'],
                    description: 'use the given host',
                    args: {},
                },
                {
                    name: ['--only'],
                    description: 'only serve specified targets (valid targets are: hosting, functions)',
                    args: {},
                },
                {
                    name: ['--except'],
                    description: 'serve all except specified targets (valid targets are: hosting, functions)',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "serve",
            description: "test project on local http",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage info",
                },
                {
                    name: ["-p", "--port"],
                    description: "use the given port",
                    args: {},
                },
                {
                    name: ["-o", "--host"],
                    description: "use the given host",
                    args: {},
                },
                {
                    name: ["--only"],
                    description: "only serve specified targets (valid targets are: hosting, functions)",
                    args: {},
                },
                {
                    name: ["--except"],
                    description: "serve all except specified targets (valid targets are: hosting, functions)",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    args: {},
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'deploy',
            description: 'deploy project to firebase server',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'output usage info',
                },
                {
                    name: ['-p', '--public'],
                    description: 'override the Hosting public directory specified in firebase.json',
                    args: {},
                },
                {
                    name: ['-m', '--message'],
                    description: 'use the message',
                    args: {},
                },
                {
                    name: ['-f', '--force'],
                    description: 'delete Cloud Functions missing from the current working directory without confirmation',
                    args: {},
                },
                {
                    name: ['--only'],
                    description: 'only serve specified targets (valid targets are: hosting, functions)',
                    args: {},
                },
                {
                    name: ['--except'],
                    description: 'serve all except specified targets (valid targets are: hosting, functions)',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "deploy",
            description: "deploy project to firebase server",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage info",
                },
                {
                    name: ["-p", "--public"],
                    description: "override the Hosting public directory specified in firebase.json",
                    args: {},
                },
                {
                    name: ["-m", "--message"],
                    description: "use the message",
                    args: {},
                },
                {
                    name: ["-f", "--force"],
                    description: "delete Cloud Functions missing from the current working directory without confirmation",
                    args: {},
                },
                {
                    name: ["--only"],
                    description: "only serve specified targets (valid targets are: hosting, functions)",
                    args: {},
                },
                {
                    name: ["--except"],
                    description: "serve all except specified targets (valid targets are: hosting, functions)",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    args: {},
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'appdistribution:distribute',
            description: 'upload a distribution',
        },
        { name: 'apps:sdkconfig', description: 'print the Google Services config' },
        {
            name: 'auth:export',
            description: 'print the Google Services config',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                variadic: true,
                template: 'filepaths',
=======
                isVariadic: true,
                template: "filepaths",
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                variadic: true,
                template: 'filepaths',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'Overview of Firebase CLI',
                },
                {
                    name: ['--format'],
                    description: 'Format of exported data (csv, json).',
                    args: {
                        suggestions: [{ name: 'json' }, { name: 'csv' }],
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "appdistribution:distribute",
            description: "upload a distribution",
        },
        { name: "apps:sdkconfig", description: "print the Google Services config" },
        {
            name: "auth:export",
            description: "print the Google Services config",
            args: {
                variadic: true,
                template: "filepaths",
            },
            options: [
                {
                    name: ["-h", "--help"],
                    description: "Overview of Firebase CLI",
                },
                {
                    name: ["--format"],
                    description: "Format of exported data (csv, json).",
                    args: {
                        suggestions: [{ name: "json" }, { name: "csv" }],
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    },
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'auth:import',
            description: 'print the Google Services config',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                variadic: true,
                template: 'filepaths',
=======
                isVariadic: true,
                template: "filepaths",
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                variadic: true,
                template: 'filepaths',
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'Overview of Firebase CLI',
                },
                {
                    name: ['--format'],
                    description: 'Format of exported data (csv, json).',
                    args: {
                        suggestions: [{ name: 'json' }, { name: 'csv' }],
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "auth:import",
            description: "print the Google Services config",
            args: {
                variadic: true,
                template: "filepaths",
            },
            options: [
                {
                    name: ["-h", "--help"],
                    description: "Overview of Firebase CLI",
                },
                {
                    name: ["--format"],
                    description: "Format of exported data (csv, json).",
                    args: {
                        suggestions: [{ name: "json" }, { name: "csv" }],
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    },
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'apps:create',
            description: 'create a new Firebase app',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'Overview of Firebase CLI',
                },
                {
                    name: ['-a', '--package-name'],
                    description: 'required package name for the Android app',
                },
                {
                    name: ['-b', '--bundle-id'],
                    description: 'required package name for the iOS app',
                },
                {
                    name: ['-s', '--app-store-id'],
                    description: 'optional package name for the iOS app',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "apps:create",
            description: "create a new Firebase app",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "Overview of Firebase CLI",
                },
                {
                    name: ["-a", "--package-name"],
                    description: "required package name for the Android app",
                },
                {
                    name: ["-b", "--bundle-id"],
                    description: "required package name for the iOS app",
                },
                {
                    name: ["-s", "--app-store-id"],
                    description: "optional package name for the iOS app",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
            ],
            args: {
                suggestions: [
                    {
<<<<<<< HEAD
<<<<<<< HEAD
                        name: 'IOS',
                        description: 'iOS',
                    },
                    {
                        name: 'ANDROID',
                        description: 'Android',
                    },
                    {
                        name: 'WEB',
                        description: 'Web',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                        name: "IOS",
                        description: "iOS",
                    },
                    {
                        name: "ANDROID",
                        description: "Android",
                    },
                    {
                        name: "WEB",
                        description: "Web",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    },
                ],
            },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'apps:list',
            description: 'list the registered apps of a Firebase project. Optionally',
        },
        {
            name: 'database:get',
            description: 'fetch and print JSON data at the specified path',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'Overview of Firebase CLI',
                },
                {
                    name: ['--pretty'],
                    description: 'pretty print response',
                },
            ],
            args: {
                template: 'filepaths',
            },
        },
        {
            name: 'database:instances:create',
            description: 'create a realtime database instance',
        },
        {
            name: 'database:instances:list',
            description: 'list realtime database instances',
        },
        {
            name: 'database:profile',
            description: 'profile the Realtime Database and generate a usage report',
        },
        {
            name: 'database:push',
            description: 'add a new JSON object to a list of data in your Firebase',
        },
        {
            name: 'database:remove',
            description: 'remove data from your Firebase at the specified path',
        },
        { name: 'database:set', description: 'store JSON data ' },
        {
            name: 'database:settings:get',
            description: 'read the realtime database setting at path',
        },
        {
            name: 'database:settings:set',
            description: 'set the realtime database setting at path',
        },
        {
            name: 'database:update',
            description: 'update some of the keys for the defined path in your Firebase',
        },
        {
            name: 'emulators:export',
            description: 'export data from running emulators',
        },
        {
            name: 'emulators:start',
            description: 'start the local Firebase emulators',
        },
        {
            name: 'emulators:exec',
            description: 'start the local Firebase emulators',
        },
        {
            name: 'ext',
            description: 'display information on how to use ext commands and extensions',
        },
        {
            name: 'ext:configure',
            description: 'display information on how to use ext commands and extensions',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'output usage info',
                },
                {
                    name: ['--params'],
                    description: 'path of params file with .env format',
                    args: {
                        template: 'filepaths',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "apps:list",
            description: "list the registered apps of a Firebase project. Optionally",
        },
        {
            name: "database:get",
            description: "fetch and print JSON data at the specified path",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "Overview of Firebase CLI",
                },
                {
                    name: ["--pretty"],
                    description: "pretty print response",
                },
            ],
            args: {
                template: "filepaths",
            },
        },
        {
            name: "database:instances:create",
            description: "create a realtime database instance",
        },
        {
            name: "database:instances:list",
            description: "list realtime database instances",
        },
        {
            name: "database:profile",
            description: "profile the Realtime Database and generate a usage report",
        },
        {
            name: "database:push",
            description: "add a new JSON object to a list of data in your Firebase",
        },
        {
            name: "database:remove",
            description: "remove data from your Firebase at the specified path",
        },
        { name: "database:set", description: "store JSON data " },
        {
            name: "database:settings:get",
            description: "read the realtime database setting at path",
        },
        {
            name: "database:settings:set",
            description: "set the realtime database setting at path",
        },
        {
            name: "database:update",
            description: "update some of the keys for the defined path in your Firebase",
        },
        {
            name: "emulators:export",
            description: "export data from running emulators",
        },
        {
            name: "emulators:start",
            description: "start the local Firebase emulators",
        },
        {
            name: "emulators:exec",
            description: "start the local Firebase emulators",
        },
        {
            name: "ext",
            description: "display information on how to use ext commands and extensions",
        },
        {
            name: "ext:configure",
            description: "display information on how to use ext commands and extensions",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage info",
                },
                {
                    name: ["--params"],
                    description: "path of params file with .env format",
                    args: {
                        template: "filepaths",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    },
                },
            ],
            args: {
                generators: {
<<<<<<< HEAD
<<<<<<< HEAD
                    script: 'firebase ext:list',
                    postProcess: function (out) {
                        if (out.trim() == '') {
                            return [];
                        }
                        try {
                            return out.split('\n').map(function (ext) {
                                return {
                                    name: ext,
                                    icon: '🛠',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    script: "firebase ext:list",
                    postProcess: function (out) {
                        if (out.trim() == "") {
                            return [];
                        }
                        try {
                            return out.split("\n").map(function (ext) {
                                return {
                                    name: ext,
                                    icon: "🛠",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                                };
                            });
                        }
                        catch (e) { }
                        return [];
                    },
                },
            },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'ext:info',
            description: 'display information about an extension by name',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'output usage info',
                },
                {
                    name: ['--markdown'],
                    description: 'output info in Markdown suitable for constructing a README file',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "ext:info",
            description: "display information about an extension by name",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage info",
                },
                {
                    name: ["--markdown"],
                    description: "output info in Markdown suitable for constructing a README file",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'ext:install',
            description: 'install extension',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'output usage info',
                },
                {
                    name: ['--params'],
                    description: 'path of params file with .env format',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "ext:install",
            description: "install extension",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage info",
                },
                {
                    name: ["--params"],
                    description: "path of params file with .env format",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'ext:uninstall',
            description: 'uninstall an extension that is installed in your Firebase project',
            options: [
                {
                    name: ['-h', '--help'],
                    description: 'output usage info',
                },
                {
                    name: ['--params'],
                    description: 'path of params file with .env format',
                    args: {
                        template: 'filepaths',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "ext:uninstall",
            description: "uninstall an extension that is installed in your Firebase project",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage info",
                },
                {
                    name: ["--params"],
                    description: "path of params file with .env format",
                    args: {
                        template: "filepaths",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    },
                },
            ],
            args: {
                generators: {
<<<<<<< HEAD
<<<<<<< HEAD
                    script: 'firebase ext:list',
                    postProcess: function (out) {
                        if (out.trim() == '') {
                            return [];
                        }
                        try {
                            return out.split('\n').map(function (ext) {
                                return {
                                    name: ext,
                                    icon: '🛠',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                    script: "firebase ext:list",
                    postProcess: function (out) {
                        if (out.trim() == "") {
                            return [];
                        }
                        try {
                            return out.split("\n").map(function (ext) {
                                return {
                                    name: ext,
                                    icon: "🛠",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                                };
                            });
                        }
                        catch (e) { }
                        return [];
                    },
                },
            },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'projects:addfirebase',
            description: 'add Firebase resources to a Google Cloud Platform project',
            args: {
                generators: {
                    script: 'zsh gcloud projects list',
                    postProcess: function (out) {
                        if (out.trim() === '') {
                            return [];
                        }
                        try {
                            return out.split('\n').map(function (proj) {
                                if (!proj.startsWith('PROJECT_ID')) {
                                    return {
                                        name: proj.substring(0, proj.indexOf(' ')),
                                        icon: '🔹',
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "projects:addfirebase",
            description: "add Firebase resources to a Google Cloud Platform project",
            args: {
                generators: {
                    script: "zsh gcloud projects list",
                    postProcess: function (out) {
                        if (out.trim() === "") {
                            return [];
                        }
                        try {
                            return out.split("\n").map(function (proj) {
                                if (!proj.startsWith("PROJECT_ID")) {
                                    return {
                                        name: proj.substring(0, proj.indexOf(" ")),
                                        icon: "🔹",
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                                    };
                                }
                            });
                        }
                        catch (e) { }
                        return [];
                    },
                },
            },
        },
    ],
    options: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: ['-h', '--help'],
            description: 'Overview of Firebase CLI',
        },
        {
            name: ['-V', '--version'],
            description: 'The current Firebase version',
        },
        {
            name: ['-j', '--json'],
            description: 'output JSON instead of text, also triggers non-interactive mode',
        },
        {
            name: ['--debug'],
            description: 'print verbose debug output and keep a debug log file',
        },
        {
            name: ['--non-interactive'],
            description: 'error out of the command instead of waiting for prompts',
        },
        {
            name: ['--token'],
            description: 'supply an auth token for this command',
        },
        {
            name: ['-P, --project'],
            description: 'the Firebase project to use for this command',
        },
    ],
=======
  name: "firebase",
  description: "CLI Interface for Google Firebase",
  subcommands: [
    {
      name: "login",
      description: "login to firebase",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["--reauth"],
          description: "force reauthentication even if already logged in",
        },
        {
          name: ["--no-localhost"],
          description:
            "copy and paste a code instead of starting a local server for authentication",
        },
      ],
    },
    {
      name: "init",
      description: "initialize firebase project",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
      ],
    },
    {
      name: "serve",
      description: "test project on local http",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["-p", "--port"],
          description: "use the given port",
          args: {},
        },
        {
          name: ["-o", "--host"],
          description: "use the given host",
          args: {},
        },
        {
          name: ["--only"],
          description:
            "only serve specified targets (valid targets are: hosting, functions)",
          args: {},
        },
        {
          name: ["--except"],
          description:
            "serve all except specified targets (valid targets are: hosting, functions)",
          args: {},
        },
      ],
    },
    {
      name: "deploy",
      description: "deploy project to firebase server",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["-p", "--public"],
          description:
            "override the Hosting public directory specified in firebase.json",
          args: {},
        },
        {
          name: ["-m", "--message"],
          description: "use the message",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description:
            "delete Cloud Functions missing from the current working directory without confirmation",
          args: {},
        },
        {
          name: ["--only"],
          description:
            "only serve specified targets (valid targets are: hosting, functions)",
          args: {},
        },
        {
          name: ["--except"],
          description:
            "serve all except specified targets (valid targets are: hosting, functions)",
          args: {},
        },
      ],
    },
    {
      name: "appdistribution:distribute",
      description: "upload a distribution",
    },
    { name: "apps:sdkconfig", description: "print the Google Services config" },
    {
      name: "auth:export",
      description: "print the Google Services config",
      args: {
        variadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Overview of Firebase CLI",
        },
        {
          name: ["--format"],
          description: "Format of exported data (csv, json).",
          args: {
            suggestions: [{ name: "json" }, { name: "csv" }],
          },
        },
      ],
    },
    {
      name: "auth:import",
      description: "print the Google Services config",
      args: {
        variadic: true,
        template: "filepaths",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Overview of Firebase CLI",
        },
        {
          name: ["--format"],
          description: "Format of exported data (csv, json).",
          args: {
            suggestions: [{ name: "json" }, { name: "csv" }],
          },
        },
      ],
    },
    {
      name: "apps:create",
      description: "create a new Firebase app",
      options: [
        {
          name: ["-h", "--help"],
          description: "Overview of Firebase CLI",
        },
        {
          name: ["-a", "--package-name"],
          description: "required package name for the Android app",
        },
        {
          name: ["-b", "--bundle-id"],
          description: "required package name for the iOS app",
        },
        {
          name: ["-s", "--app-store-id"],
          description: "optional package name for the iOS app",
        },
      ],
      args: {
        suggestions: [
          {
            name: "IOS",
            description: "iOS",
          },
          {
            name: "ANDROID",
            description: "Android",
          },
          {
            name: "WEB",
            description: "Web",
          },
        ],
      },
    },
    {
      name: "apps:list",
      description: "list the registered apps of a Firebase project. Optionally",
    },
    {
      name: "database:get",
      description: "fetch and print JSON data at the specified path",
      options: [
        {
          name: ["-h", "--help"],
          description: "Overview of Firebase CLI",
        },
        {
          name: ["--pretty"],
          description: "pretty print response",
        },
      ],
      args: {
        template: "filepaths",
      },
    },
    {
      name: "database:instances:create",
      description: "create a realtime database instance",
    },
    {
      name: "database:instances:list",
      description: "list realtime database instances",
    },
    {
      name: "database:profile",
      description: "profile the Realtime Database and generate a usage report",
    },
    {
      name: "database:push",
      description: "add a new JSON object to a list of data in your Firebase",
    },
    {
      name: "database:remove",
      description: "remove data from your Firebase at the specified path",
    },
    { name: "database:set", description: "store JSON data " },
    {
      name: "database:settings:get",
      description: "read the realtime database setting at path",
    },
    {
      name: "database:settings:set",
      description: "set the realtime database setting at path",
    },
    {
      name: "database:update",
      description:
        "update some of the keys for the defined path in your Firebase",
    },
    {
      name: "emulators:export",
      description: "export data from running emulators",
    },
    {
      name: "emulators:start",
      description: "start the local Firebase emulators",
    },
    {
      name: "emulators:exec",
      description: "start the local Firebase emulators",
    },
    {
      name: "ext",
      description:
        "display information on how to use ext commands and extensions",
    },
    {
      name: "ext:configure",
      description:
        "display information on how to use ext commands and extensions",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["--params"],
          description: "path of params file with .env format",
          args: {
            template: "filepaths",
          },
        },
      ],
      args: {
        generators: {
          script: "firebase ext:list",
          postProcess: function (out) {
            if (out.trim() == "") {
              return [];
            }
            try {
              return out.split("\n").map(function (ext) {
                return {
                  name: ext,
                  icon: "🛠",
                };
              });
            } catch (e) {}
            return [];
          },
        },
      },
    },
    {
      name: "ext:info",
      description: "display information about an extension by name",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["--markdown"],
          description:
            "output info in Markdown suitable for constructing a README file",
        },
      ],
    },
    {
      name: "ext:install",
      description: "install extension",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["--params"],
          description: "path of params file with .env format",
        },
      ],
    },
    {
      name: "ext:uninstall",
      description:
        "uninstall an extension that is installed in your Firebase project",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage info",
        },
        {
          name: ["--params"],
          description: "path of params file with .env format",
          args: {
            template: "filepaths",
          },
        },
      ],
      args: {
        generators: {
          script: "firebase ext:list",
          postProcess: function (out) {
            if (out.trim() == "") {
              return [];
            }
            try {
              return out.split("\n").map(function (ext) {
                return {
                  name: ext,
                  icon: "🛠",
                };
              });
            } catch (e) {}
            return [];
          },
        },
      },
    },
    {
      name: "projects:addfirebase",
      description: "add Firebase resources to a Google Cloud Platform project",
      args: {
        generators: {
          script: "zsh gcloud projects list",
          postProcess: function (out) {
            if (out.trim() === "") {
              return [];
            }
            try {
              return out.split("\n").map(function (proj) {
                if (!proj.startsWith("PROJECT_ID")) {
                  return {
                    name: proj.substring(0, proj.indexOf(" ")),
                    icon: "🔹",
                  };
                }
              });
            } catch (e) {}
            return [];
          },
        },
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Firebase CLI",
    },
    {
      name: ["-V", "--version"],
      description: "The current Firebase version",
    },
    {
      name: ["-j", "--json"],
      description:
        "output JSON instead of text, also triggers non-interactive mode",
    },
    {
      name: ["--debug"],
      description: "print verbose debug output and keep a debug log file",
    },
    {
      name: ["--non-interactive"],
      description: "error out of the command instead of waiting for prompts",
    },
    {
      name: ["--token"],
      description: "supply an auth token for this command",
    },
    {
      name: ["-P, --project"],
      description: "the Firebase project to use for this command",
    },
  ],
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: ["-h", "--help"],
            description: "Overview of Firebase CLI",
        },
        {
            name: ["-V", "--version"],
            description: "The current Firebase version",
        },
        {
            name: ["-j", "--json"],
            description: "output JSON instead of text, also triggers non-interactive mode",
        },
        {
            name: ["--debug"],
            description: "print verbose debug output and keep a debug log file",
        },
        {
            name: ["--non-interactive"],
            description: "error out of the command instead of waiting for prompts",
        },
        {
            name: ["--token"],
            description: "supply an auth token for this command",
        },
        {
            name: ["-P, --project"],
            description: "the Firebase project to use for this command",
        },
    ],
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
};

