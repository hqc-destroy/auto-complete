const help = {
  name: ["-h", "--help"],
  description: "Display this help message",
};

const quiet = {
  name: ["-q", "--quiet"],
  description: "Do not output any message",
};

const verbose = {
  name: ["-v", "--verbose"],
  description: "Increase the verbosity of messages",
};

const vverbose = {
  name: ["-vv"],
  description: "More verbose output",
};

const vvverbose = {
  name: ["-vvv"],
  description: "Most verbose output for debug",
};

const version = {
  name: ["-V", "--version"],
  description: "Display this application version",
};

const ansi = {
  name: ["--ansi"],
  description: "Force ANSI output",
};

const noAnsi = {
  name: ["--no-ansi"],
  description: "Disable ANSI output",
};

const noInteraction = {
  name: ["-n", "--no-interaction"],
  description: "Do not ask any interactive question",
};

const globalOptions = [
  help,
  verbose,
  vverbose,
  vvverbose,
  version,
  ansi,
  noAnsi,
  noInteraction,
];

export const completion: Fig.Spec = {
  name: "poetry",
  description: "Python package manager",
  subcommands: [
    {
      name: "about",
      description: "Show information about Poetry",
      options: [...globalOptions],
    },
    {
      name: "add",
      description: "Adds a new dependency to pyproject.toml",
      args: {
        name: "dependency",
        description: "Package to add",
      },
      options: [
        ...globalOptions,
        {
          name: ["-D", "--dev"],
          description: "Add as a development dependency",
        },
        {
          name: ["-E", "--extras"],
          description: "Extras to activate for the dependency",
          args: {
            name: "extras",
            description: "Extras",
          },
        },
        {
          name: ["--optional"],
          description: "Add as an optional dependency",
        },
        {
          name: ["--dry-run"],
          description:
            "Output the operations but do not execute anything (implicitly enables --verbose)",
        },
        {
          name: ["--lock"],
          description: "Do not perform operations (only update the lockfile)",
        },
      ],
    },
    {
      name: "build",
      description: "Builds a package, as a tarball and a wheel by default",
      options: [
        ...globalOptions,
        {
          name: ["-f", "--format"],
          description: "Limit the format to either sdist or wheel",
          args: [
            {
              name: "format",
              suggestions: [
                {
                  name: "sdist",
                  description: "Use sdist format",
                },
                {
                  name: "wheel",
                  description: "Use wheel format",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "check",
      description: "Checks the validity of the pyproject.toml file",
      options: [...globalOptions],
    },
    {
      name: "config",
      description: "Manages configuration settings",
      options: [
        ...globalOptions,
        {
          name: ["--list"],
          description: "List configuration settings",
        },
        {
          name: ["--unset"],
          description: "Unset configuration setting",
          args: {
            name: "key",
            description: "Setting key to remove",
          },
        },
        {
          name: ["--local"],
          description: "Set/Get from the project's local configuration",
        },
      ],
      args: [
        {
          name: "key",
          description: "Setting key",
          suggestions: [
            {
              name: "cache-dir",
              description: "The path to the cache directory used by Poetry",
            },
            {
              name: "virtualenvs.create",
              description:
                "Create a new virtualenv if one doesn't already exist",
            },
            {
              name: "virtualenvs.in-project",
              description:
                "Create the virtualenv inside the project's root directory",
            },
            {
              name: "virtualenvs.path",
              description:
                "Directory where virtual environments will be created",
            },
            {
              name: "repositories.{name}",
              description: "Set a new alternative repository",
              insertValue: "repositories.",
            },
          ],
        },
        {
          name: "value",
          description: "Setting value",
        },
      ],
    },
    {
      name: "debug",
      description: "Debug various elements of Peotry",
      options: [...globalOptions],
    },
    {
      name: "env",
      description: "Interact with Poetry's project environments",
      subcommands: [
        {
          name: "info",
          description: "Displays information about the current environment",
          options: [
            {
              name: ["-p", "--path"],
              description: "Only desplay the environment's path",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all virtualenvs associated with the current project",
          options: [
            {
              name: ["--full-path"],
              description: "Output the full paths of the virtualenvs",
            },
          ],
        },
        {
          name: "remove",
          description:
            "Removes a specific virtualenv associated with the project",
          args: {
            name: "python",
            description: "The python executable to remove the virtualenv for",
          },
        },
        {
          name: "use",
          description:
            "Activates or creates a new virtualenv for the current project",
          args: {
            name: "python",
            description: "The python executable to use",
          },
        },
      ],
      options: [...globalOptions],
    },
    {
      name: "export",
      description: "Exports the lock file to alternative formats",
      options: [
        ...globalOptions,
        {
          name: ["-f", "--format"],
          description: "Format to export to",
          args: {
            name: "format",
            description: "Export format",
            suggestions: ["requirements.txt"],
          },
        },
        {
          name: ["-o", "--output"],
          description: "The name of the output file",
          args: {
            name: "filename",
            description: "Output file name",
            suggestions: ["requirements.txt"],
          },
        },
        {
          name: ["--without-hashes"],
          description: "Exclude hashes from the exported file",
        },
        {
          name: ["--dev"],
          description: "Include development dependencies",
        },
        {
          name: ["-E", "--extras"],
          description: "Extra sets of dependencies to include",
          args: {
            name: "extras",
            description: "Extras",
          },
        },
        {
          name: ["--with-credentials"],
          description: "Include credentials for extra indices",
        },
      ],
    },
    {
      name: "help",
      description: "Display the manual of a command",
    },
    {
      name: "init",
      description:
        "Creates a basic pyproject.toml file in the current directory",
      options: [
        ...globalOptions,
        {
          name: ["--name"],
          description: "Name of the package",
          args: {
            name: "name",
          },
        },
        {
          name: ["--description"],
          description: "Description of the package",
          args: {
            name: "description",
          },
        },
        {
          name: ["--author"],
          description: "Author name of the package",
          args: {
            name: "author",
          },
        },
        {
          name: ["--python"],
          description: "Compatible Python versions",
          args: {
            name: "python version",
          },
        },
        {
          name: ["--dependency"],
          description:
            "Package to require, with an optional version constraint",
          args: {
            name: "dependency",
          },
        },
        {
          name: ["--dev-dependency"],
          description:
            "Package to require for development, with an optional version constraint",
          args: {
            name: "dev dependency",
          },
        },
        {
          name: ["-l", "--license"],
          description: "License of the package",
          args: {
            name: "license",
          },
        },
      ],
    },
    {
      name: "install",
      description: "Installs the project dependencies",
      options: [
        ...globalOptions,
        {
          name: ["--no-dev"],
          description: "Do not install the development dependencies",
        },
        {
          name: ["--no-root"],
          description: "Do not install the root package",
        },
        {
          name: ["--dry-run"],
          description: "Output the operations but do not execute anything",
        },
        {
          name: ["--remove-untracked"],
          description: "Removes packages not present in the lock file",
        },
        {
          name: ["-E", "--extras"],
          description: "Extra sets of dependencies to install",
          args: {
            name: "extras",
            description: "Extras",
          },
        },
      ],
    },
  ],
  options: [...globalOptions],
  // Only uncomment if poetry takes an argument
  // args: {}
};