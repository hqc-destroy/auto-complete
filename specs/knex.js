var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  name: 'knex',
  description: 'SQL query builder for JavaScript',
  subcommands: [
    {
      name: 'init',
      description: 'Create a fresh knexfile.',
=======
  name: "knex",
  description: "SQL query builder for JavaScript",
  subcommands: [
    {
      name: "init",
      description: "Create a fresh knexfile.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'migrate:make',
      description: 'Create a named migration file.',
      args: { name: 'migration name' },
      options: [],
    },
    {
      name: 'migrate:latest',
      description: 'Run all migrations that have not yet been run.',
=======
      name: "migrate:make",
      description: "Create a named migration file.",
      args: { name: "migration name" },
      options: [],
    },
    {
      name: "migrate:latest",
      description: "Run all migrations that have not yet been run.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'migrate:up',
      description:
        'Run the next or the specified migration that has not yet been run.',
=======
      name: "migrate:up",
      description:
        "Run the next or the specified migration that has not yet been run.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'migrate:rollback',
      description: 'Rollback the last batch of migrations performed.',
=======
      name: "migrate:rollback",
      description: "Rollback the last batch of migrations performed.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'migrate:down',
      description:
        'Undo the last or the specified migration that was already run.',
=======
      name: "migrate:down",
      description:
        "Undo the last or the specified migration that was already run.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'migrate:currentVersion',
      description: 'View the current version for the  migration.',
=======
      name: "migrate:currentVersion",
      description: "View the current version for the  migration.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'migrate:list|migrate:status',
      description: 'List all migrations files with status.',
=======
      name: "migrate:list|migrate:status",
      description: "List all migrations files with status.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'migrate:unlock',
      description: 'Forcibly unlocks the migrations lock table.',
=======
      name: "migrate:unlock",
      description: "Forcibly unlocks the migrations lock table.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'seed:make',
      description: 'Create a named seed file.',
      args: {
        name: 'seed name',
=======
      name: "seed:make",
      description: "Create a named seed file.",
      args: {
        name: "seed name",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      },
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'seed:run',
      description: 'Run seed files.',
=======
      name: "seed:run",
      description: "Run seed files.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
    {
<<<<<<< HEAD
      name: 'help',
      description: 'display help for command',
=======
      name: "help",
      description: "display help for command",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
      args: {},
      options: [],
    },
  ],
  options: [
    {
<<<<<<< HEAD
      name: ['--version'],
      description: 'output the version number',
      args: {},
    },
    {
      name: ['--debug'],
      description: 'Run with debugging.',
      args: {},
    },
    {
      name: ['--knexfile'],
      description: 'Specify the knexfile path.',
      args: {},
    },
    {
      name: ['--knexpath'],
      description: 'Specify the path to knex instance.',
      args: {},
    },
    {
      name: ['--cwd'],
      description: 'Specify the working directory.',
      args: {},
    },
    {
      name: ['--client'],
      description: 'Set DB client without a knexfile.',
      args: {},
    },
    {
      name: ['--connection'],
      description: 'Set DB connection without a knexfile.',
      args: {},
    },
    {
      name: ['--migrations-directory'],
      description: 'Set migrations directory without a knexfile.',
      args: {},
    },
    {
      name: ['--migrations-table-name'],
      description: 'Set migrations table name without a knexfile.',
      args: {},
    },
    {
      name: ['--env'],
      description: 'environment, default: process.env.NODE_ENV || development',
      args: {
        name: 'environment',
      },
    },
    {
      name: ['--esm'],
      description: 'Enable ESM interop.',
      args: {},
    },
    {
      name: ['--specific'],
      description: 'Specify one seed file to execute.',
      args: {},
    },
    {
      name: ['--timestamp-filename-prefix'],
      description: 'Enable a timestamp prefix on name of generated seed files.',
      args: {},
    },
    {
      name: ['--help'],
      description: 'display help for command',
      args: {},
    },
  ],
};
=======
    name: 'knex',
    description: 'SQL query builder for JavaScript',
    subcommands: [
        {
            name: 'init',
            description: 'Create a fresh knexfile.',
=======
    name: "knex",
    description: "SQL query builder for JavaScript",
    subcommands: [
        {
            name: "init",
            description: "Create a fresh knexfile.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'migrate:make',
            description: 'Create a named migration file.',
            args: { name: 'migration name' },
            options: [],
        },
        {
            name: 'migrate:latest',
            description: 'Run all migrations that have not yet been run.',
=======
            name: "migrate:make",
            description: "Create a named migration file.",
            args: { name: "migration name" },
            options: [],
        },
        {
            name: "migrate:latest",
            description: "Run all migrations that have not yet been run.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'migrate:up',
            description: 'Run the next or the specified migration that has not yet been run.',
=======
            name: "migrate:up",
            description: "Run the next or the specified migration that has not yet been run.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'migrate:rollback',
            description: 'Rollback the last batch of migrations performed.',
=======
            name: "migrate:rollback",
            description: "Rollback the last batch of migrations performed.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'migrate:down',
            description: 'Undo the last or the specified migration that was already run.',
=======
            name: "migrate:down",
            description: "Undo the last or the specified migration that was already run.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'migrate:currentVersion',
            description: 'View the current version for the  migration.',
=======
            name: "migrate:currentVersion",
            description: "View the current version for the  migration.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'migrate:list|migrate:status',
            description: 'List all migrations files with status.',
=======
            name: "migrate:list|migrate:status",
            description: "List all migrations files with status.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'migrate:unlock',
            description: 'Forcibly unlocks the migrations lock table.',
=======
            name: "migrate:unlock",
            description: "Forcibly unlocks the migrations lock table.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'seed:make',
            description: 'Create a named seed file.',
            args: {
                name: 'seed name',
=======
            name: "seed:make",
            description: "Create a named seed file.",
            args: {
                name: "seed name",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            },
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'seed:run',
            description: 'Run seed files.',
=======
            name: "seed:run",
            description: "Run seed files.",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
        {
<<<<<<< HEAD
            name: 'help',
            description: 'display help for command',
=======
            name: "help",
            description: "display help for command",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            args: {},
            options: [],
        },
    ],
    options: [
        {
<<<<<<< HEAD
            name: ['--version'],
            description: 'output the version number',
            args: {},
        },
        {
            name: ['--debug'],
            description: 'Run with debugging.',
            args: {},
        },
        {
            name: ['--knexfile'],
            description: 'Specify the knexfile path.',
            args: {},
        },
        {
            name: ['--knexpath'],
            description: 'Specify the path to knex instance.',
            args: {},
        },
        {
            name: ['--cwd'],
            description: 'Specify the working directory.',
            args: {},
        },
        {
            name: ['--client'],
            description: 'Set DB client without a knexfile.',
            args: {},
        },
        {
            name: ['--connection'],
            description: 'Set DB connection without a knexfile.',
            args: {},
        },
        {
            name: ['--migrations-directory'],
            description: 'Set migrations directory without a knexfile.',
            args: {},
        },
        {
            name: ['--migrations-table-name'],
            description: 'Set migrations table name without a knexfile.',
            args: {},
        },
        {
            name: ['--env'],
            description: 'environment, default: process.env.NODE_ENV || development',
            args: {
                name: 'environment',
            },
        },
        {
            name: ['--esm'],
            description: 'Enable ESM interop.',
            args: {},
        },
        {
            name: ['--specific'],
            description: 'Specify one seed file to execute.',
            args: {},
        },
        {
            name: ['--timestamp-filename-prefix'],
            description: 'Enable a timestamp prefix on name of generated seed files.',
            args: {},
        },
        {
            name: ['--help'],
            description: 'display help for command',
            args: {},
        },
    ],
};

>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
      name: ["--version"],
      description: "output the version number",
      args: {},
    },
    {
      name: ["--debug"],
      description: "Run with debugging.",
      args: {},
    },
    {
      name: ["--knexfile"],
      description: "Specify the knexfile path.",
      args: {},
    },
    {
      name: ["--knexpath"],
      description: "Specify the path to knex instance.",
      args: {},
    },
    {
      name: ["--cwd"],
      description: "Specify the working directory.",
      args: {},
    },
    {
      name: ["--client"],
      description: "Set DB client without a knexfile.",
      args: {},
    },
    {
      name: ["--connection"],
      description: "Set DB connection without a knexfile.",
      args: {},
    },
    {
      name: ["--migrations-directory"],
      description: "Set migrations directory without a knexfile.",
      args: {},
    },
    {
      name: ["--migrations-table-name"],
      description: "Set migrations table name without a knexfile.",
      args: {},
    },
    {
      name: ["--env"],
      description: "environment, default: process.env.NODE_ENV || development",
      args: {
        name: "environment",
      },
    },
    {
      name: ["--esm"],
      description: "Enable ESM interop.",
      args: {},
    },
    {
      name: ["--specific"],
      description: "Specify one seed file to execute.",
      args: {},
    },
    {
      name: ["--timestamp-filename-prefix"],
      description: "Enable a timestamp prefix on name of generated seed files.",
      args: {},
    },
    {
      name: ["--help"],
      description: "display help for command",
      args: {},
    },
  ],
};
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
            name: ["--version"],
            description: "output the version number",
            args: {},
        },
        {
            name: ["--debug"],
            description: "Run with debugging.",
            args: {},
        },
        {
            name: ["--knexfile"],
            description: "Specify the knexfile path.",
            args: {},
        },
        {
            name: ["--knexpath"],
            description: "Specify the path to knex instance.",
            args: {},
        },
        {
            name: ["--cwd"],
            description: "Specify the working directory.",
            args: {},
        },
        {
            name: ["--client"],
            description: "Set DB client without a knexfile.",
            args: {},
        },
        {
            name: ["--connection"],
            description: "Set DB connection without a knexfile.",
            args: {},
        },
        {
            name: ["--migrations-directory"],
            description: "Set migrations directory without a knexfile.",
            args: {},
        },
        {
            name: ["--migrations-table-name"],
            description: "Set migrations table name without a knexfile.",
            args: {},
        },
        {
            name: ["--env"],
            description: "environment, default: process.env.NODE_ENV || development",
            args: {
                name: "environment",
            },
        },
        {
            name: ["--esm"],
            description: "Enable ESM interop.",
            args: {},
        },
        {
            name: ["--specific"],
            description: "Specify one seed file to execute.",
            args: {},
        },
        {
            name: ["--timestamp-filename-prefix"],
            description: "Enable a timestamp prefix on name of generated seed files.",
            args: {},
        },
        {
            name: ["--help"],
            description: "display help for command",
            args: {},
        },
    ],
};

>>>>>>> a09fa69... removed linting from all js specs in specs folder
