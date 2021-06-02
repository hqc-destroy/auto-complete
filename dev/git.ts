<<<<<<< HEAD
const generators: Record<string, Fig.Generator> = {
=======
const gitGenerators: Record<string, Fig.Generator> = {
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    // Commit history
    commits: {
        script: 'git log --oneline',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
            }
<<<<<<< HEAD
            return out.split('\n').map(function (line) {
=======

            return out.split('\n').map((line) => {
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                return {
                    name: line.substring(0, 7),
                    icon: 'fig://icon?type=node',
                    description: line.substring(7),
                };
            });
        },
    },
<<<<<<< HEAD
=======
=======
  // Commit history
  commits: {
    script: "git log --oneline",
    postProcess: function (out) {
      if (out.startsWith("fatal:")) {
        return [];
      }

      return out.split("\n").map((line) => {
        return {
          name: line.substring(0, 7),
          icon: "fig://icon?type=node",
          description: line.substring(7),
        };
      });
    },
  },
>>>>>>> 65036d2... fixed linting and prettier

  // Saved stashes
  // TODO: maybe only print names of stashes
  stashes: {
    script: "git stash list",
    postProcess: function (out) {
      if (out.startsWith("fatal:")) {
        return [];
      }

      return out.split("\n").map((file) => {
        return {
          name: file.split(":")[2],
          insertValue: file.split(":")[0],
          icon: `fig://icon?type=node`,
        };
      });
    },
  },

<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    // Tree-ish
    // This needs to be fleshed out properly....
    // e.g. what is difference to commit-ish?
    // Refer to this:https://stackoverflow.com/questions/23303549/what-are-commit-ish-and-tree-ish-in-git/40910185
    // https://mirrors.edge.kernel.org/pub/software/scm/git/docs/#_identifier_terminology
<<<<<<< HEAD
=======

>>>>>>> e321ca1... feat: update all scripts and  move to ts
    treeish: {
        script: 'git diff --cached --name-only',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
            }
<<<<<<< HEAD
            return out.split('\n').map(function (file) {
                return {
                    name: file,
                    insertValue: '-- ' + file,
                    icon: 'fig://icon?type=file',
=======

            return out.split('\n').map((file) => {
                return {
                    name: file,
                    insertValue: '-- ' + file,
                    icon: `fig://icon?type=file`,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    description: 'staged file',
                };
            });
        },
    },
<<<<<<< HEAD
=======

>>>>>>> e321ca1... feat: update all scripts and  move to ts
    // All branches
    branches: {
        script: 'git branch --no-color',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
            }
<<<<<<< HEAD
            return out.split('\n').map(function (elm) {
=======
            return out.split('\n').map((elm) => {
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                return { name: elm.replace('*', '').trim(), description: 'branch', icon: 'fig://icon?type=git' };
            });
        },
    },
<<<<<<< HEAD
    remotes: {
        script: 'git remote',
        postProcess: function (out) {
            return out.split('\n').map(function (remote) {
=======

    remotes: {
        script: 'git remote',
        postProcess: function (out) {
            return out.split('\n').map((remote) => {
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                return { name: remote, description: 'remote' };
            });
        },
    },
<<<<<<< HEAD
=======

>>>>>>> e321ca1... feat: update all scripts and  move to ts
    tags: {
        script: 'git tag --list',
        splitOn: '\n',
    },
<<<<<<< HEAD
=======

>>>>>>> e321ca1... feat: update all scripts and  move to ts
    // Files for staging
    files_for_staging: {
        script: 'git status --short',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
            }
<<<<<<< HEAD
            // out = out + " "
            const items = out.split('\n').map(function (file) {
                file = file.trim();
                const arr = file.split(' ');
                return { working: arr[0], file: arr.slice(1).join(' ') };
            });
            return items.map(function (item) {
                const file = item.file;
                let ext = '';
                try {
                    ext = file.split('.').slice(-1)[0];
                } catch (e) {}
                if (file.endsWith('/')) {
                    ext = 'folder';
                }
                return {
                    name: file,
                    insertValue: file.includes(' ') ? "'" + file + "'" : file,
                    icon: 'fig://icon?type=' + ext + '&color=ff0000&badge=' + item.working,
=======
=======
  // Tree-ish
  // This needs to be fleshed out properly....
  // e.g. what is difference to commit-ish?
  // Refer to this:https://stackoverflow.com/questions/23303549/what-are-commit-ish-and-tree-ish-in-git/40910185
  // https://mirrors.edge.kernel.org/pub/software/scm/git/docs/#_identifier_terminology

  treeish: {
    script: "git diff --cached --name-only",
    postProcess: function (out) {
      if (out.startsWith("fatal:")) {
        return [];
      }

      return out.split("\n").map((file) => {
        return {
          name: file,
          insertValue: "-- " + file,
          icon: `fig://icon?type=file`,
          description: "staged file",
        };
      });
    },
  },

  // All branches
  branches: {
    script: "git branch --no-color",
    postProcess: function (out) {
      if (out.startsWith("fatal:")) {
        return [];
      }
      return out.split("\n").map((elm) => {
        return {
          name: elm.replace("*", "").trim(),
          description: "branch",
          icon: "fig://icon?type=git",
        };
      });
    },
  },

  remotes: {
    script: "git remote",
    postProcess: function (out) {
      return out.split("\n").map((remote) => {
        return { name: remote, description: "remote" };
      });
    },
  },

  tags: {
    script: "git tag --list",
    splitOn: "\n",
  },

  // Files for staging
  files_for_staging: {
    script: "git status --short",
    postProcess: function (out) {
      if (out.startsWith("fatal:")) {
        return [];
      }
>>>>>>> 65036d2... fixed linting and prettier

      // out = out + " "
      const items = out.split("\n").map((file) => {
        file = file.trim();
        const arr = file.split(" ");

        return { working: arr[0], file: arr.slice(1).join(" ") };
      });

      return items.map((item) => {
        const file = item.file;
        let ext = "";

        try {
          ext = file.split(".").slice(-1)[0];
        } catch (e) {}

        if (file.endsWith("/")) {
          ext = "folder";
        }

<<<<<<< HEAD
                return {
                    name: file,
                    insertValue: file.includes(' ') ? `'${file}'` : file,
                    icon: `fig://icon?type=${ext}&color=ff0000&badge=${item.working}`,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    description: 'Changed file',
                    priority: 100,
                };
            });
        },
=======
        return {
          name: file,
          insertValue: file.includes(" ") ? `'${file}'` : file,
          icon: `fig://icon?type=${ext}&color=ff0000&badge=${item.working}`,
          description: "Changed file",
          priority: 100,
        };
      });
>>>>>>> 65036d2... fixed linting and prettier
    },
  },
};

const head = {
  name: "HEAD",
  icon: "🔻",
  description: "Reset multiple commits",
};

<<<<<<< HEAD
export const completion: Fig.Spec = {
=======
export const completionSpec: Fig.Spec = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'git',
    description: 'the stupid content tracker',
    options: [
=======
  name: 'git',
  description: 'the stupid content tracker',
=======
  name: "git",
  description: "the stupid content tracker",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
  options: [
    {
      name: "--version",
      description: "Output version",
    },
    {
      name: "--help",
      description: "Output help",
    },
    {
      name: "-C",
      insertValue: "-C ",
      args: {
        name: "path",
        template: "folders",
      },
      description: "Run as if git was started in &lt;path&gt;",
    },
    {
      name: "-c name=value",
      insertValue: "-c ",
      description: "Pass a config parameter to the command",
    },
    {
      name: "--exec-path[=<path>]",
      insertValue: "--exec-path",
      args: {
        name: "path",
        isOptional: true,
        template: "folders",
      },
      description: "Get or set GIT_EXEC_PATH for core Git programs",
    },
    {
      name: "--html-path",
      description: "Print Git’s HTML documentation path",
    },
    {
      name: "--man-path",
      description: "Print the manpath for this version of Git",
    },
    {
      name: "--info-path",
      description: "Print the info path documenting this version of Git",
    },
    {
      name: ["-p", "--paginate"],
      description: "Pipe output into `less` or custom $PAGER",
    },
    {
      name: "--no-pager",
      description: "Do not pipe Git output into a pager",
    },
    {
      name: "--no-replace-objects",
      description: "Do not use replacement refs",
    },
    {
      name: "--bare",
      description: "Treat the repository as a bare repository",
    },
    {
      name: "--git-dir=<path>",
      insertValue: "--git-dir=",
      args: {
        name: "path",
        template: "folders",
      },
      description: "Set the path to the repository dir (`.git`)",
    },
    {
      name: "--work-tree=<path>",
      insertValue: "--work-tree=",
      args: {
        name: "path",
        template: "folders",
      },
      description: "Set working tree path",
    },
    {
      name: "--namespace=<name>",
      insertValue: "--namespace=",
      args: {
        name: "name",
      },
      description: "Set the Git namespace",
    },
  ],
  subcommands: [
    {
      name: "commit",
      description: "Record changes to the repository",
      insertValue: "commit",
      args: {
        name: "pathspec",
      },
      options: [
        {
          name: ["-m", "--message"],
          insertValue: "-m '{cursor}'",
          description: "use the given message as the commit message",
          args: {
            name: "message",
          },
        },
>>>>>>> 65036d2... fixed linting and prettier
        {
          name: ["-a", "--all"],
          description: "stage all modified and deleted paths",
        },
        {
          name: "-am",
          insertValue: "-am '{cursor}'",
          description: "stage all and use given text as commit message",
          args: {
            name: "message",
          },
        },
        {
          name: ["-v", "--verbose"],
          description: "show unified diff of all file changes",
        },
        {
          name: ["-p", "--patch"],
          description:
            "Use the interactive patch selection interface to chose which changes to commi...",
        },
        {
          name: ["-C", "--reuse-message"],
          description:
            "Take an existing commit object, and reuse the log message and the authorship ...",
          args: [
            {
              name: "commit",
              generators: gitGenerators.commits,
            },
          ],
        },
        {
          name: ["-c", "--reedit-message"],
          description:
            "Like -C, but with -c the editor is invoked, so that the user can further edit...",
          args: [
            {
              name: "commit",
              generators: gitGenerators.commits,
            },
          ],
        },
        {
          name: ["--fixup"],
          description:
            "Construct a commit message for use with rebase --autosquash. The commit messa...",
          args: [
            {
              name: "commit",
              generators: gitGenerators.commits,
            },
          ],
        },
        {
          name: ["--squash"],
          description:
            "Construct a commit message for use with rebase --autosquash. The commit messa...",
          args: [
            {
              name: "commit",
              generators: gitGenerators.commits,
            },
          ],
        },
        {
          name: ["--reset-author"],
          description:
            "When used with -C/-c/--amend options, or when committing after a conflicting ...",
        },
        {
          name: ["--short"],
          description:
            "When doing a dry-run, give the output in the short-format. See git-status[1] ...",
        },
        {
          name: ["--branch"],
          description:
            "Show the branch and tracking info even in short-format.",
        },
        {
          name: ["--porcelain"],
          description:
            "When doing a dry-run, give the output in a porcelain-ready format. See git-st...",
        },
        {
          name: ["--long"],
          description:
            "When doing a dry-run, give the output in the long-format. Implies --dry-run.",
        },
        {
          name: ["-z", "--null"],
          description:
            "When showing short or porcelain status output, print the filename verbatim an...",
        },
        {
          name: ["-F", "--file"],
          description:
            "Take the commit message from the given file. Use - to read the message from t...",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["--author"],
          description:
            "Override the commit author. Specify an explicit author using the standard A U...",
          args: {
            name: "author",
          },
        },
        {
          name: ["--date"],
          description: "Override the author date used in the commit.",
          args: {
            name: "date",
          },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'commit',
            description: 'Record changes to the repository',
            insertValue: 'commit',
<<<<<<< HEAD
=======
            args: {
                name: 'pathspec',
            },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            options: [
                {
                    name: ['-m', '--message'],
                    insertValue: "-m '{cursor}'",
                    description: 'use the given message as the commit message',
                    args: {
                        name: 'message',
                    },
                },
                {
                    name: ['-a', '--all'],
                    description: 'stage all modified and deleted paths',
                },
                {
                    name: '-am',
                    insertValue: "-am '{cursor}'",
                    description: 'stage all and use given text as commit message',
                    args: {
                        name: 'message',
                    },
                },
                {
                    name: ['-v', '--verbose'],
                    description: 'show unified diff of all file changes',
                },
<<<<<<< HEAD
=======
                {
                    name: ['-p', '--patch'],
                    description: 'Use the interactive patch selection interface to chose which changes to commi...',
                },
                {
                    name: ['-C', '--reuse-message'],
                    description: 'Take an existing commit object, and reuse the log message and the authorship ...',
                    args: [
                        {
                            name: 'commit',
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ['-c', '--reedit-message'],
                    description: 'Like -C, but with -c the editor is invoked, so that the user can further edit...',
                    args: [
                        {
                            name: 'commit',
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ['--fixup'],
                    description: 'Construct a commit message for use with rebase --autosquash. The commit messa...',
                    args: [
                        {
                            name: 'commit',
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ['--squash'],
                    description: 'Construct a commit message for use with rebase --autosquash. The commit messa...',
                    args: [
                        {
                            name: 'commit',
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ['--reset-author'],
                    description: 'When used with -C/-c/--amend options, or when committing after a conflicting ...',
                },
                {
                    name: ['--short'],
                    description: 'When doing a dry-run, give the output in the short-format. See git-status[1] ...',
                },
                {
                    name: ['--branch'],
                    description: 'Show the branch and tracking info even in short-format.',
                },
                {
                    name: ['--porcelain'],
                    description: 'When doing a dry-run, give the output in a porcelain-ready format. See git-st...',
                },
                {
                    name: ['--long'],
                    description: 'When doing a dry-run, give the output in the long-format. Implies --dry-run.',
                },
                {
                    name: ['-z', '--null'],
                    description: 'When showing short or porcelain status output, print the filename verbatim an...',
                },
                {
                    name: ['-F', '--file'],
                    description: 'Take the commit message from the given file. Use - to read the message from t...',
                    args: {
                        name: 'file',
                        template: 'filepaths',
                    },
                },
                {
                    name: ['--author'],
                    description: 'Override the commit author. Specify an explicit author using the standard A U...',
                    args: {
                        name: 'author',
                    },
                },
                {
                    name: ['--date'],
                    description: 'Override the author date used in the commit.',
                    args: {
                        name: 'date',
                    },
                },
                {
                    name: ['-t', '--template'],
                    description: 'When editing the commit message, start the editor with the contents in the gi...',
                    args: {
                        name: 'file',
                        template: 'filepaths',
                    },
                },
                {
                    name: ['-s', '--signoff'],
                    description: 'Add a Signed-off-by trailer by the committer at the end of the commit log mes...',
                },
                {
                    name: ['--no-signoff'],
                    description: "Don't add a Signed-off-by trailer by the committer at the end of the commit l...",
                },
                {
                    name: ['-n', '--no-verify'],
                    description: 'This option bypasses the pre-commit and commit-msg hooks. See also githooks[5].',
                },
                {
                    name: ['--allow-empty'],
                    description: 'Usually recording a commit that has the exact same tree as its sole parent co...',
                },
                {
                    name: ['--allow-empty-message'],
                    description: 'Like --allow-empty this command is primarily for use by foreign SCM interface...',
                },
                {
                    name: ['--cleanup'],
                    description: 'This option determines how the supplied commit message should be cleaned up b...',
                    args: {
                        name: 'mode',
                        suggestions: ['strip', 'whitespace', 'verbatim', 'scissors', 'default'],
                    },
                },
                {
                    name: ['-e', '--edit'],
                    description: 'The message taken from file with -F, command line with -m, and from commit ob...',
                },
                {
                    name: ['--no-edit'],
                    description: 'Use the selected commit message without launching an editor. For example, git...',
                },
                {
                    name: ['--amend'],
                    description: 'Replace the tip of the current branch by creating a new commit. The recorded ...',
                },
                {
                    name: ['--no-post-rewrite'],
                    description: 'Bypass the post-rewrite hook.',
                },
                {
                    name: ['-i', '--include'],
                    description: 'Before making a commit out of staged contents so far, stage the contents of p...',
                },
                {
                    name: ['-o', '--only'],
                    description: 'Make a commit by taking the updated working tree contents of the paths specif...',
                },
                {
                    name: ['--pathspec-from-file'],
                    description: 'Pathspec is passed in instead of commandline args. If is exactly - then stand...',
                    args: {
                        name: 'file',
                        template: 'filepaths',
                    },
                },
                {
                    name: ['--pathspec-file-nul'],
                    description: 'Only meaningful with --pathspec-from-file. Pathspec elements are separated wi...',
                },
                {
                    name: ['-u', '--untracked-files'],
                    description: 'Show untracked files. The mode parameter is optional (defaults to all), and i...',
                    args: {
                        name: 'mode',
                        suggestions: ['no', 'normal', 'all'],
                    },
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Suppress commit summary message.',
                },
                {
                    name: ['--dry-run'],
                    description: 'Do not create a commit, but show a list of paths that are to be committed, pa...',
                },
                {
                    name: ['--status'],
                    description: 'Include the output of git-status[1] in the commit message template when using...',
                },
                {
                    name: ['--no-status'],
                    description: 'Do not include the output of git-status[1] in the commit message template whe...',
                },
                {
                    name: ['-S', '--gpg-sign'],
                    description: 'GPG-sign commits. The keyid argument is optional and defaults to the committe...',
                    args: {
                        name: 'keyid',
                        isOptional: true,
                    },
                },
                {
                    name: ['--no-gpg-sign'],
                    description: 'Dont GPG-sign commits.',
                },
                {
                    name: ['--'],
                    description: 'Do not interpret any more arguments as options.',
                },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
          name: ['-t', '--template'],
=======
          name: ["-t", "--template"],
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
          description:
            "When editing the commit message, start the editor with the contents in the gi...",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["-s", "--signoff"],
          description:
            "Add a Signed-off-by trailer by the committer at the end of the commit log mes...",
        },
        {
          name: ["--no-signoff"],
          description:
            "Don't add a Signed-off-by trailer by the committer at the end of the commit l...",
        },
        {
          name: ["-n", "--no-verify"],
          description:
            "This option bypasses the pre-commit and commit-msg hooks. See also githooks[5].",
        },
        {
          name: ["--allow-empty"],
          description:
            "Usually recording a commit that has the exact same tree as its sole parent co...",
        },
        {
          name: ["--allow-empty-message"],
          description:
            "Like --allow-empty this command is primarily for use by foreign SCM interface...",
        },
        {
          name: ["--cleanup"],
          description:
            "This option determines how the supplied commit message should be cleaned up b...",
          args: {
            name: "mode",
            suggestions: [
<<<<<<< HEAD
              'strip',
              'whitespace',
              'verbatim',
              'scissors',
              'default',
>>>>>>> 65036d2... fixed linting and prettier
=======
              "strip",
              "whitespace",
              "verbatim",
              "scissors",
              "default",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
            ],
          },
        },
        {
          name: ["-e", "--edit"],
          description:
            "The message taken from file with -F, command line with -m, and from commit ob...",
        },
        {
          name: ["--no-edit"],
          description:
            "Use the selected commit message without launching an editor. For example, git...",
        },
        {
          name: ["--amend"],
          description:
            "Replace the tip of the current branch by creating a new commit. The recorded ...",
        },
        {
          name: ["--no-post-rewrite"],
          description: "Bypass the post-rewrite hook.",
        },
        {
          name: ["-i", "--include"],
          description:
            "Before making a commit out of staged contents so far, stage the contents of p...",
        },
        {
          name: ["-o", "--only"],
          description:
            "Make a commit by taking the updated working tree contents of the paths specif...",
        },
        {
          name: ["--pathspec-from-file"],
          description:
            "Pathspec is passed in instead of commandline args. If is exactly - then stand...",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'config',
            description: 'set author',
            options: [
                {
                    name: '--local',
                    description: 'Default: write to the repository .git/config file',
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
=======
                        variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        suggestions: [
                            {
                                name: 'user.name',
                                description: 'set config for username',
                                insertValue: "user.name '{cursor}'",
                            },
                            {
                                name: 'user.email',
                                description: 'set config for email',
                                insertValue: "user.email '{cursor}'",
                            },
                        ],
                    },
                },
                {
                    name: '--global',
                    insertValue: '--global {cursor}',
                    description:
                        'For writing options: write to global ~/.gitconfig file rather than the repository .git/config',
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
=======
                        variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        suggestions: [
                            {
                                name: 'user.name',
                                description: 'set config for username',
                                insertValue: "user.name '{cursor}'",
                            },
                            {
                                name: 'user.email',
                                description: 'set config for email',
                                insertValue: "user.email '{cursor}'",
                            },
                        ],
                    },
                },
<<<<<<< HEAD
=======
                {
                    name: ['--replace-all'],
                    description: 'Default behavior is to replace at most one line. This replaces all lines matc...',
                },
                {
                    name: ['--add'],
                    description: 'Adds a new line to the option without altering any existing values. This is t...',
                },
                {
                    name: ['--get'],
                    description: 'Get the value for a given key (optionally filtered by a regex matching the va...',
                },
                {
                    name: ['--get-all'],
                    description: 'Like get, but returns all values for a multi-valued key.',
                },
                {
                    name: ['--get-regexp'],
                    description: 'Like --get-all, but interprets the name as a regular expression and writes ou...',
                },
                {
                    name: ['--get-urlmatch'],
                    description: 'When given a two-part name section.key, the value for section..key whose part...',
                    args: [
                        {
                            name: 'name',
                        },
                        {
                            name: 'url',
                        },
                    ],
                },
                {
                    name: ['--system'],
                    description: 'For writing options: write to system-wide $(prefix)/etc/gitconfig rather than...',
                },
                {
                    name: ['--worktree'],
                    description: 'Similar to --local except that.git/config.worktree is read from or written to...',
                },
                {
                    name: ['-f', '--file'],
                    description: 'Use the given config file instead of the one specified by GIT_CONFIG.',
                    args: {
                        name: 'config-file',
                        template: 'filepaths',
                    },
                },
                {
                    name: ['--blob'],
                    description: 'Similar to --file but use the given blob instead of a file. E.g. you can use ...',
                    args: {
                        name: 'blob',
                    },
                },
                {
                    name: ['--remove-section'],
                    description: 'Remove the given section from the configuration file.',
                },
                {
                    name: ['--rename-section'],
                    description: 'Rename the given section to a new name.',
                },
                {
                    name: ['--unset'],
                    description: 'Remove the line matching the key from config file.',
                },
                {
                    name: ['--unset-all'],
                    description: 'Remove all lines matching the key from config file.',
                },
                {
                    name: ['-l', '--list'],
                    description: 'List all variables set in config file, along with their values.',
                },
                {
                    name: ['--fixed-value'],
                    description: 'When used with the value-pattern argument, treat value-pattern as an exact st...',
                },
                {
                    name: ['--type'],
                    description: 'git config will ensure that any input or output is valid under the given type...',
                    args: {
                        name: 'type',
                        suggestions: ['bool', 'int', 'bool-or-int', 'path', 'expiry-date', 'color'],
                    },
                },
                {
                    name: ['--no-type'],
                    description: 'Un-sets the previously set type specifier (if one was previously set). This o...',
                },
                {
                    name: ['-z', '--null'],
                    description: 'For all options that output values and/or keys, always end values with the nu...',
                },
                {
                    name: ['--name-only'],
                    description: 'Output only the names of config variables for --list or --get-regexp.',
                },
                {
                    name: ['--show-origin'],
                    description: 'Augment the output of all queried config options with the origin type (file, ...',
                },
                {
                    name: ['--show-scope'],
                    description: 'Similar to --show-origin in that it augments the output of all queried config...',
                },
                {
                    name: ['--get-colorbool'],
                    description: 'Find the color setting for name (e.g. color.diff) and output "true" or "false...',
                    args: {
                        name: 'name',
                    },
                },
                {
                    name: ['--get-color'],
                    description: 'Find the color configured for name (e.g. color.diff.new) and output it as the...',
                    args: [
                        {
                            name: 'name',
                        },
                        {
                            name: 'default',
                            isOptional: true,
                        },
                    ],
                },
                {
                    name: ['-e', '--edit'],
                    description: 'Opens an editor to modify the specified config file; either --system, --globa...',
                },
                {
                    name: ['--includes'],
                    description: 'Respect include.* directives in config files when looking up values. Defaults...',
                },
                {
                    name: ['--no-includes'],
                    description: 'Respect include.* directives in config files when looking up values. Defaults...',
                },
                {
                    name: ['--default'],
                    description: 'When using --get, and the requested variable is not found, behave as if were ...',
                    args: {
                        name: 'value',
                        isOptional: true,
                    },
                },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
          name: ['--pathspec-file-nul'],
=======
          name: ["--pathspec-file-nul"],
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
          description:
            "Only meaningful with --pathspec-from-file. Pathspec elements are separated wi...",
        },
        {
          name: ["-u", "--untracked-files"],
          description:
            "Show untracked files. The mode parameter is optional (defaults to all), and i...",
          args: {
            name: "mode",
            suggestions: ["no", "normal", "all"],
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress commit summary message.",
        },
        {
          name: ["--dry-run"],
          description:
            "Do not create a commit, but show a list of paths that are to be committed, pa...",
        },
        {
          name: ["--status"],
          description:
            "Include the output of git-status[1] in the commit message template when using...",
        },
        {
          name: ["--no-status"],
          description:
            "Do not include the output of git-status[1] in the commit message template whe...",
        },
        {
          name: ["-S", "--gpg-sign"],
          description:
            "GPG-sign commits. The keyid argument is optional and defaults to the committe...",
          args: {
            name: "keyid",
            isOptional: true,
          },
        },
        {
          name: ["--no-gpg-sign"],
          description: "Dont GPG-sign commits.",
        },
        {
          name: ["--"],
          description: "Do not interpret any more arguments as options.",
        },
      ],
    },
    {
      name: "config",
      description: "set author",
      options: [
        {
          name: "--local",
          description: "Default: write to the repository .git/config file",
          args: {
            variadic: true,
            suggestions: [
              {
                name: "user.name",
                description: "set config for username",
                insertValue: "user.name '{cursor}'",
              },
              {
                name: "user.email",
                description: "set config for email",
                insertValue: "user.email '{cursor}'",
              },
>>>>>>> 65036d2... fixed linting and prettier
            ],
          },
        },
        {
          name: "--global",
          insertValue: "--global {cursor}",
          description:
            "For writing options: write to global ~/.gitconfig file rather than the repository .git/config",
          args: {
            variadic: true,
            suggestions: [
              {
                name: "user.name",
                description: "set config for username",
                insertValue: "user.name '{cursor}'",
              },
              {
                name: "user.email",
                description: "set config for email",
                insertValue: "user.email '{cursor}'",
              },
            ],
<<<<<<< HEAD
            args: {
                suggestions: [],
<<<<<<< HEAD
                generators: generators.commits,
=======
                generators: gitGenerators.commits,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
          },
        },
        {
          name: ["--replace-all"],
          description:
            "Default behavior is to replace at most one line. This replaces all lines matc...",
        },
        {
          name: ["--add"],
          description:
            "Adds a new line to the option without altering any existing values. This is t...",
        },
        {
          name: ["--get"],
          description:
            "Get the value for a given key (optionally filtered by a regex matching the va...",
        },
        {
          name: ["--get-all"],
          description:
            "Like get, but returns all values for a multi-valued key.",
        },
        {
          name: ["--get-regexp"],
          description:
            "Like --get-all, but interprets the name as a regular expression and writes ou...",
        },
        {
          name: ["--get-urlmatch"],
          description:
            "When given a two-part name section.key, the value for section..key whose part...",
          args: [
            {
              name: "name",
            },
            {
<<<<<<< HEAD
              name: 'url',
>>>>>>> 65036d2... fixed linting and prettier
=======
              name: "url",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
            },
          ],
        },
        {
          name: ["--system"],
          description:
            "For writing options: write to system-wide $(prefix)/etc/gitconfig rather than...",
        },
        {
          name: ["--worktree"],
          description:
            "Similar to --local except that.git/config.worktree is read from or written to...",
        },
        {
          name: ["-f", "--file"],
          description:
            "Use the given config file instead of the one specified by GIT_CONFIG.",
          args: {
            name: "config-file",
            template: "filepaths",
          },
        },
        {
          name: ["--blob"],
          description:
            "Similar to --file but use the given blob instead of a file. E.g. you can use ...",
          args: {
            name: "blob",
          },
        },
        {
          name: ["--remove-section"],
          description: "Remove the given section from the configuration file.",
        },
        {
          name: ["--rename-section"],
          description: "Rename the given section to a new name.",
        },
        {
          name: ["--unset"],
          description: "Remove the line matching the key from config file.",
        },
        {
          name: ["--unset-all"],
          description: "Remove all lines matching the key from config file.",
        },
        {
          name: ["-l", "--list"],
          description:
            "List all variables set in config file, along with their values.",
        },
        {
          name: ["--fixed-value"],
          description:
            "When used with the value-pattern argument, treat value-pattern as an exact st...",
        },
        {
          name: ["--type"],
          description:
            "git config will ensure that any input or output is valid under the given type...",
          args: {
            name: "type",
            suggestions: [
              "bool",
              "int",
              "bool-or-int",
              "path",
              "expiry-date",
              "color",
            ],
<<<<<<< HEAD
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                variadic: true,
<<<<<<< HEAD
<<<<<<< HEAD
                suggestions: [
                    {   
                        name:".",
                        description: "current directory",
                        insertValue: ".",
                        icon: "fig://icon?type=folder"
                    }
<<<<<<< HEAD
                ], // these can also be objects with type, name, and value
<<<<<<< HEAD
<<<<<<< HEAD
                // templateSuggestions: ["files", "folders"],
                shellSuggestions: {
                    cmd: "git status --short",
=======
                templateSuggestions: ["files", "folders"],
=======
                ],
<<<<<<< HEAD
>>>>>>> 481d0c8... Merge changes to git
                generator: {
                    script: "git status --short",
>>>>>>> 96624c4... added some common options/args and single line commit suggestions for commands that can use hashes for input
                    postProcess: function (out) {
                        if (out.startsWith("fatal:")) {
                            return []
                        }

<<<<<<< HEAD
                        var items = out.split('\n').map((file) => { return { working: file.substring(1,2), file: file.substring(3) } }).slice(0,-1)
=======
                        var items = out.split('\n').map((file) => {
                            return { working: file.substring(1, 2), file: file.substring(3) }
<<<<<<< HEAD
                        }).slice(0, -1)
>>>>>>> 96624c4... added some common options/args and single line commit suggestions for commands that can use hashes for input
=======
                        })
>>>>>>> 12faa70... Formatting

                        return items.map(item => {
                            let file = item.file
                            var ext = ""

                            try {
                                ext = file.split('.').slice(-1)[0]
<<<<<<< HEAD
                            } catch(e){}
=======
                            } catch (e) {
                            }
>>>>>>> 96624c4... added some common options/args and single line commit suggestions for commands that can use hashes for input

                            if (file.endsWith('/')) {
                                ext = "folder"
                            }

<<<<<<< HEAD
                            return { name: file, icon: `fig://icon?type=${ext}&color=ff0000&badge=${item.working}`, description: "Updated file"}
=======
                            return {
                                name: file,
                                icon: `fig://icon?type=${ext}&color=ff0000&badge=${item.working}`,
                                description: "Changed file"
                            }
>>>>>>> 96624c4... added some common options/args and single line commit suggestions for commands that can use hashes for input
                        })
                    }
                },
                // hideSuggestions: ["."]
=======
                template: "filepaths"
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
=======
=======

=======
>>>>>>> be410d8... move new specs to ts
=======
                isVariadic: true,
>>>>>>> 7980ce4... refactor: Fix broken specs
                // We have a special setting for dot in the vuejs app
=======
                variadic: true,
=======
          },
        },
        {
          name: ["--no-type"],
          description:
            "Un-sets the previously set type specifier (if one was previously set). This o...",
        },
        {
          name: ["-z", "--null"],
          description:
            "For all options that output values and/or keys, always end values with the nu...",
        },
        {
          name: ["--name-only"],
          description:
            "Output only the names of config variables for --list or --get-regexp.",
        },
        {
          name: ["--show-origin"],
          description:
            "Augment the output of all queried config options with the origin type (file, ...",
        },
        {
          name: ["--show-scope"],
          description:
            "Similar to --show-origin in that it augments the output of all queried config...",
        },
        {
          name: ["--get-colorbool"],
          description:
            'Find the color setting for name (e.g. color.diff) and output "true" or "false...',
          args: {
            name: "name",
          },
        },
        {
          name: ["--get-color"],
          description:
            "Find the color configured for name (e.g. color.diff.new) and output it as the...",
          args: [
            {
              name: "name",
            },
            {
              name: "default",
              isOptional: true,
            },
          ],
        },
        {
          name: ["-e", "--edit"],
          description:
            "Opens an editor to modify the specified config file; either --system, --globa...",
        },
        {
          name: ["--includes"],
          description:
            "Respect include.* directives in config files when looking up values. Defaults...",
        },
        {
          name: ["--no-includes"],
          description:
            "Respect include.* directives in config files when looking up values. Defaults...",
        },
        {
          name: ["--default"],
          description:
            "When using --get, and the requested variable is not found, behave as if were ...",
          args: {
            name: "value",
            isOptional: true,
          },
        },
      ],
    },
    {
      name: "rebase",
      description: "Reapply commits on top of another base tip",
      insertValue: "rebase",
      options: [
        {
          name: ["--continue"],
          description: "continue the rebasing after conflict resolution",
        },
        { name: ["--abort"], description: "stop rebase" },
        { name: ["--skip"], description: "skips a commit" },
        {
          name: ["-i"],
          description: "interactive",
        },
      ],
      args: {
        suggestions: [],
        generators: gitGenerators.commits,
      },
    },
    {
      name: "add",
      description: "Add file contents to the index",
      options: [
        {
          name: ["-A", "--all", "--no-ignore-removal"],
          description:
            "Add, modify, and remove index entries to match the working tree",
        },
        {
          name: ["-f", "--force"],
          description: "Allow adding otherwise ignored files",
        },
        {
          name: ["-i", "--interactive"],
          description:
            "Add modified contents in the working tree interactively to the index",
        },
        {
          name: ["-n", "--dry-run"],
          description:
            "Don't actually add the files(s), just show if they exist and/or will be ignored",
        },
        {
          name: ["-p", "--patch"],
          description:
            "Interactively choose hunks of patch between the index and the work tree and add them to the index",
        },
      ],
      args: {
        variadic: true,
>>>>>>> 65036d2... fixed linting and prettier

        // We have a special setting for dot in the vuejs app

<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                // suggestions: [
                //     {
                //         name: ".",
                //         description: "current directory",
                //         insertValue: ".",
                //         icon: "fig://icon?type=folder"
                //     }
                // ],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 90584ba... cleaning up git script
                generators: generators.files_for_staging
>>>>>>> 602e847... replaced arg with args and generator with generators
=======
                generators: generators.files_for_staging,
>>>>>>> 6bc5008... feat: lint & prettier all files
=======
                generators: gitGenerators.files_for_staging,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            },
=======
        // suggestions: [
        //     {
        //         name: ".",
        //         description: "current directory",
        //         insertValue: ".",
        //         icon: "fig://icon?type=folder"
        //     }
        // ],
        generators: gitGenerators.files_for_staging,
      },
    },
    {
      name: "status",
      description: "Show the working tree status",
      options: [
        {
<<<<<<< HEAD
          name: ['-v', '--verbose'],
          description: 'be verbose',
>>>>>>> 65036d2... fixed linting and prettier
=======
          name: ["-v", "--verbose"],
          description: "be verbose",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
        },
        {
          name: ["-b", "--branch"],
          description: "show branch information",
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'push',
            description: 'Update remote refs',
            options: [
                {
                    name: '-all',
                    description: 'Push all branches to remote',
                },
                // { name: "--repo", description: "repository" },
                // { name: "--all", description: "push all refs" },
                // { name: "--mirror", description: "mirror all refs" },
                { name: ['-d', '--delete'], description: 'delete refs' },
                { name: '--tags', description: "push tags (can't be used with --all or --mirror)" },
                // { name: ["-n", "--dry-run"], description: "dry run" },
            ],
            args: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    shellSuggestions: {
                        cmd: "git remote",
                        postProcess: function(out) {
                            return out.split('\n').map(remote => {
<<<<<<< HEAD
<<<<<<< HEAD
                                return { name: remote, description: "remote"}
=======
                                return {name: remote, description: "remote"}
>>>>>>> 96624c4... added some common options/args and single line commit suggestions for commands that can use hashes for input
=======
                                return { name: remote, description: "remote" }
<<<<<<< HEAD
>>>>>>> 481d0c8... Merge changes to git
                            }).slice(0, -1)
=======
                            })
>>>>>>> 12faa70... Formatting
                        }
=======
                    generator: {
                        script: "git remote",
                        splitOn: "\n"
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                    }
=======
=======
=======
                    name: "remote",
>>>>>>> cc03fa9... fixed up fig spec, templating in node, and added names and descriptions to git push and pull
                    isOptional: true,
>>>>>>> b79f2bf... fixed git push and git pull
                    generators: generators.remotes
>>>>>>> 602e847... replaced arg with args and generator with generators
=======
                    name: 'remote',
                    isOptional: true,
                    generators: generators.remotes,
>>>>>>> 6bc5008... feat: lint & prettier all files
=======
                    name: 'remote',
                    isOptional: true,
                    generators: gitGenerators.remotes,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'branch',
                    isOptional: true,
<<<<<<< HEAD
                    generators: generators.branches,
=======
                    generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
=======
          name: '--show-stash',
          description: 'show stash information',
=======
          name: "--show-stash",
          description: "show stash information",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
        },
        {
          name: "--ahead-behind",
          description: "compute full ahead/behind values",
        },
        {
          name: "--long",
          description: "show status in long format (default)",
        },
        {
          name: ["-z", "--null"],
          description: "terminate entries with NUL",
        },
        {
          name: ["-u", "--untracked-files"],
          description: "show untracked files",
          args: {
            suggestions: [
              {
                name: "all",
                description: "(Default)",
              },
              {
                name: "normal",
              },
              {
                name: "no",
              },
>>>>>>> 65036d2... fixed linting and prettier
            ],
          },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'pull',
            description: 'Integrate with another repository',
            args: [
                {
                    name: 'remote',
                    isOptional: true,
<<<<<<< HEAD
                    generators: generators.remotes,
=======
                    generators: gitGenerators.remotes,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'branch',
                    isOptional: true,
<<<<<<< HEAD
                    generators: generators.branches,
=======
                    generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
=======
          name: '--ignored',
          description: 'show ignored files',
=======
          name: "--ignored",
          description: "show ignored files",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
          args: {
            suggestions: [
              {
                name: "traditional",
                description: "(Default)",
              },
              {
                name: "matching",
              },
              {
                name: "no",
              },
>>>>>>> 65036d2... fixed linting and prettier
            ],
          },
        },
        {
          name: "--no-renames",
          description: "do not detect renames",
        },
      ],
    },
    {
      name: "push",
      description: "Update remote refs",
      options: [
        {
          name: "-all",
          description: "Push all branches to remote",
        },
        // { name: "--repo", description: "repository" },
        // { name: "--all", description: "push all refs" },
        // { name: "--mirror", description: "mirror all refs" },
        { name: ["-d", "--delete"], description: "delete refs" },
        {
          name: "--tags",
          description: "push tags (can't be used with --all or --mirror)",
        },
        // { name: ["-n", "--dry-run"], description: "dry run" },
      ],
      args: [
        {
          name: "remote",
          isOptional: true,
          generators: gitGenerators.remotes,
        },
        {
          name: "branch",
          isOptional: true,
          generators: gitGenerators.branches,
        },
      ],
    },
    {
      name: "pull",
      description: "Integrate with another repository",
      args: [
        {
          name: "remote",
          isOptional: true,
          generators: gitGenerators.remotes,
        },
        {
          name: "branch",
          isOptional: true,
          generators: gitGenerators.branches,
        },
      ],
    },
    {
      name: "diff",
      description: "Show changes between commits, commit and working tree, etc",
      options: [
        {
          name: "--staged",
          insertValue: "--staged",
          description:
            "Show difference between the files in the staging area and the latest version",
        },
      ],
    },
    {
      name: "reset",
      description: "Reset current HEAD to the specified state",
      options: [
        {
          name: "--keep",
          insertValue: "--keep {cursor}",
          description:
            "Safe: files which are different between the current HEAD and the given commit. Will abort if there are uncommitted changes",
          args: {
            variadic: true,
            suggestions: [head],
            generators: gitGenerators.commits,
          },
        },
        {
          name: "--soft",
          insertValue: "--soft {cursor}",
          description:
            "remove the last commit from the current branch, but the file changes will stay in your working tree",
          args: {
            suggestions: [head],
            generators: gitGenerators.commits,
          },
        },
        {
          name: "--hard",
          insertValue: "--hard {cursor}",
          description:
            "⚠️WARNING: you will lose all uncommitted changes in addition to the changes introduced in the last commit",
          args: {
            variadic: true,
            suggestions: [
              {
                name: "HEAD~<N>",
                description: "Reset back to any number of commits",
                insertValue: "HEAD~",
              },
            ],
            generators: gitGenerators.commits,
          },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'reset',
            description: 'Reset current HEAD to the specified state',
            options: [
                {
                    name: '--keep',
                    insertValue: '--keep {cursor}',
                    description:
                        'Safe: files which are different between the current HEAD and the given commit. Will abort if there are uncommitted changes',
                    args: {
<<<<<<< HEAD
<<<<<<< HEAD
                        variadic: true,
                        suggestions: [head],
                        generators: generators.commits,
                    },
=======
                        isVariadic: true,
                        suggestions: [
                            head
                        ],
                        generators: generators.commits
                    }
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                        variadic: true,
                        suggestions: [head],
                        generators: gitGenerators.commits,
                    },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: '--soft',
                    insertValue: '--soft {cursor}',
                    description:
                        'remove the last commit from the current branch, but the file changes will stay in your working tree',
                    args: {
                        suggestions: [head],
<<<<<<< HEAD
                        generators: generators.commits,
=======
                        generators: gitGenerators.commits,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: '--hard',
                    insertValue: '--hard {cursor}',
                    description:
                        '⚠️WARNING: you will lose all uncommitted changes in addition to the changes introduced in the last commit',
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
=======
                        variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        suggestions: [
                            {
                                name: 'HEAD~<N>',
                                description: 'Reset back to any number of commits',
                                insertValue: 'HEAD~',
                            },
                        ],
<<<<<<< HEAD
                        generators: generators.commits,
=======
                        generators: gitGenerators.commits,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: '--mixed',
                    insertValue: '--mixed {cursor}',
                    description: 'keep the changes in your working tree but not on the index',
                    args: {
<<<<<<< HEAD
                        isVariadic: true,
=======
                        variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        suggestions: [
                            {
                                name: 'HEAD~[insert # of commits]',
                                description: 'Reset back any number of commits',
                                insertValue: 'HEAD~',
                            },
                        ],
<<<<<<< HEAD
                        generators: generators.commits,
=======
                        generators: gitGenerators.commits,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: '--merge',
                    insertValue: '--merge {cursor}',
                    description:
                        'Resets the index and updates the files in the working tree that are different' +
                        " between 'commit' and HEAD",
                    args: {
<<<<<<< HEAD
<<<<<<< HEAD
                        variadic: true,
                        suggestions: [head],
=======
                        isVariadic: true,
                        suggestions: [
                            head
                        ],
>>>>>>> 7980ce4... refactor: Fix broken specs
                        generators: generators.commits,
=======
                        variadic: true,
                        suggestions: [head],
                        generators: gitGenerators.commits,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
            ],
            args: {
                isOptional: true,
<<<<<<< HEAD
                isVariadic: true,
                suggestions: [],
                generators: generators.treeish,
            },
<<<<<<< HEAD

<<<<<<< HEAD
       {name: "clone",      description: "Clone a repository into a new directory"},
       {name: "init",       description: "Create an empty Git repository or reinitialize an existing one"},
       // {name: "add",        description: "Add file contents to the index"},
       {name: "mv",         description: "Move or rename a file, a directory, or a symlink"},
       {name: "reset",      description: "Reset current HEAD to the specified state"},
       {name: "rm",         description: "Remove files from the working tree and from the index"},
       {name: "bisect",     description: "Use binary search to find the commit that introduced a bug"},
       {name: "grep",       description: "Print lines matching a pattern"},
       {name: "log",        description: "Show commit logs"},
       {name: "show",       description: "Show various types of objects"},
       // {name: "status",     description: "Show the working tree status"},
       {name: "branch",     description: "List, create, or delete branches"},
       {name: "checkout",   description: "Switch branches or restore working tree files"},
       // {name: "commit",     description: "Record changes to the repository"},
       {name: "diff",       description: "Show changes between commits, commit and working tree, etc"},
       {name: "merge",      description: "Join two or more development histories together"},
       {name: "rebase",     description: "Reapply commits on top of another base tip"},
       {name: "tag",        description: "Create, list, delete or verify a tag object signed with GPG"},
       {name: "fetch",      description: "Download objects and refs from another repository"},
       // {name: "pull",       description: "Fetch from and integrate with another repository or a local branch"},
       // {name: "push",       description: "Update remote refs along with associated objects"},
=======
=======
>>>>>>> be410d8... move new specs to ts
=======
                variadic: true,
                suggestions: [],
                generators: gitGenerators.treeish,
            },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
          name: '--mixed',
          insertValue: '--mixed {cursor}',
=======
          name: "--mixed",
          insertValue: "--mixed {cursor}",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
          description:
            "keep the changes in your working tree but not on the index",
          args: {
            variadic: true,
            suggestions: [
              {
                name: "HEAD~[insert # of commits]",
                description: "Reset back any number of commits",
                insertValue: "HEAD~",
              },
            ],
            generators: gitGenerators.commits,
          },
        },
        {
          name: "--merge",
          insertValue: "--merge {cursor}",
          description:
            "Resets the index and updates the files in the working tree that are different" +
            " between 'commit' and HEAD",
          args: {
            variadic: true,
            suggestions: [head],
            generators: gitGenerators.commits,
          },
        },
      ],
      args: {
        isOptional: true,
        variadic: true,
        suggestions: [],
        generators: gitGenerators.treeish,
      },
    },
    {
      name: "log",
      description: "Show commit logs",
      insertValue: "log",
      options: [
        {
          name: "--follow",
          description: "Show history of given file",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["-q", "--quiet"],
          description: "suppress diff output",
        },
        {
          name: "--source",
          description: "show source",
        },
        {
          name: "--oneline",
          description: "show each commit as a single line ",
        },
      ],
    },
    {
      name: "remote",
      description: "Manage remote repository",
      insertValue: "remote {cursor}",
      subcommands: [
        {
          name: "add",
          insertValue: "add {cursor}",
          description: "add repo ",
        },
        {
          name: "set-head",
          insertValue: "set-head",
          description: "Sets or deletes the default branch",
        },
        {
          name: "rm",
          insertValue: "rm",
          description: "Removes given remote [name]",
        },
        {
          name: "get-url",
          insertValue: "get-url",
          description: "Retrieves the URLs for a remote",
        },
        {
          name: "set-url",
          insertValue: "set-url {cursor}",
          description: "Changes the URLs for the remote",
        },
        {
          name: "show",
          description: "Gives some information about the remote [name]",
        },
        {
          name: "prune",
          description:
            "Equivalent to git fetch --prune [name], except that no new references will be fetched",
        },
      ],
      options: [
        {
          name: "-f",
          insertValue: "-f",
          description: "Fetch after remote info is added",
        },
        {
          name: "--tags",
          insertValue: "--tags",
          description: "Import tags from remote",
        },
      ],
    },
    {
      name: "fetch",
      description: "Download objects and refs from another repository",
      args: [
        {
          name: "remote",
          isOptional: true,
          generators: gitGenerators.remotes,
        },
        {
          name: "branch",
          isOptional: true,
          generators: gitGenerators.branches,
        },
        {
          name: "refspec",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--all",
          insertValue: "--all",
          description: "Fetch all remotes",
        },
        {
          name: ["-a", "--append"],
          description:
            "Append ref names and object names of fetched refs to the existing contents of .git/FETCH_HEAD",
        },
        {
          name: ["--atomic"],
          description:
            "Use an atomic transaction to update local refs. Either all refs are updated, or on error, no refs are updated.",
        },
        {
          name: ["--depth"],
          insertValue: "--depth {cursor}",
          args: {
            name: "depth",
          },
          description:
            "Limit fetching to the specified number of commits from the tip of each remote branch history",
        },
        {
          name: ["--deepen"],
          insertValue: "--deepen {cursor}",
          args: {
            name: "depth",
          },
          description:
            "Similar to --depth, except it specifies the number of commits from the current shallow boundary instead of from the tip of each remote branch history",
        },
        {
          name: ["--shallow-since"],
          insertValue: "--shallow-since {cursor}",
          args: {
            name: "date",
          },
          description:
            "Deepen or shorten the history of a shallow repository to include all reachable commits after <date>",
        },
        {
          name: ["--shallow-exclude"],
          insertValue: "--shallow-exclude {cursor}",
          args: {
            name: "revision",
          },
          description:
            "Deepen or shorten the history of a shallow repository to exclude commits reachable from a specified remote branch or tag. This option can be specified multiple times",
        },
        {
          name: ["--unshallow"],
          description:
            "If the source repository is shallow, fetch as much as possible so that the current repository has the same history as the source repository",
        },
        {
          name: ["--update-shallow"],
          description:
            "By default when fetching from a shallow repository, git fetch refuses refs that require updating .git/shallow",
        },
        {
          name: ["--negotiation-tip"],
          insertValue: "--negotiation-tip ",
          args: {
            name: "commit|glob",
            generators: gitGenerators.commits,
          },
          description:
            "By default, Git will report, to the server, commits reachable from all local refs to find common commits in an attempt to reduce the size of the to-be-received packfile",
        },
        {
          name: ["--dry-run"],
          description: "Show what would be done, without making any changes.",
        },
        {
          name: ["--write-fetch-head"],
          description:
            "Write the list of remote refs fetched in the FETCH_HEAD file directly under $GIT_DIR. This is the default",
        },
        {
          name: ["--no-write-fetch-head"],
          description: "tells Git not to write the file",
        },
        {
          name: ["-f", "--force"],
          description: "This option overrides that check",
        },
        {
          name: ["-k", "--keep"],
          description: "Keep downloaded pack.",
        },
        {
          name: ["--multiple"],
          description:
            "Allow several <repository> and <group> arguments to be specified. No <refspec>s may be specified.",
        },
        {
          name: ["--auto-maintenance", "--auto-gc"],
          description:
            "Run git maintenance run --auto at the end to perform automatic repository maintenance if",
        },
        {
          name: ["--no-auto-maintenance", "--no-auto-gc"],
          description:
            "Don't run git maintenance run --auto at the end to perform automatic repository maintenance",
        },
        {
          name: ["--write-commit-graph"],
          description:
            "Write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
        },
        {
          name: ["--no-write-commit-graph"],
          description:
            "Don't write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
        },
        {
          name: ["-p", "--prune"],
          description:
            "Before fetching, remove any remote-tracking references that no longer exist on the remote",
        },
        {
          name: ["-P", "--prune-tags"],
          description:
            "Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled",
        },
        {
          name: ["-n", "--no-tags"],
          description:
            "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
        },
        {
          name: ["--refmap"],
          insertValue: "--refmap {cursor}",
          args: {
            name: "refspec",
          },
          description:
            "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
        },
        {
          name: ["-t", "--tags"],
          description:
            "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
        },
        // TODO: fig needs to accept '=' as delimiter for args/options
        // {
        //     name: ["--recurse-submodules"],
        //     insertValue: "--recurse-submodules={cursor}",
        //     args: {
        //         name: 'mode',
        //         suggestions: [
        //             'yes', 'on-demand', 'no',
        //         ],
        //     },
        //     description: "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
        // },
        {
          name: ["-j", "--jobs"],
          args: {
            name: "n",
          },
          description:
            "Number of parallel children to be used for all forms of fetching.",
        },
        {
          name: ["--no-recurse-submodules"],
          description:
            "Disable recursive fetching of submodules (this has the same effect as using the --recurse-submodules=no option).",
        },
        {
          name: ["--set-upstream"],
          description:
            "If the remote is fetched successfully, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands.",
        },
        {
          name: ["--submodule-prefix"],
          insertValue: "--submodule-prefix {cursor}",
          args: {
            name: "path",
          },
          description:
            'Prepend <path> to paths printed in informative messages such as ”Fetching submodule foo". This option is used internally when recursing over submodules.',
        },
        // TODO: fig needs to accept '=' as delimiter for args/options
        // {
        //     name: ["--recurse-submodules-default"],
        //     insertValue: "--recurse-submodules-default={cursor}",
        //     args: {
        //         name: 'mode',
        //         suggestions: [
        //             'yes', 'on-demand',
        //         ],
        //     },
        //     description: "This option is used internally to temporarily provide a non-negative default value for the --recurse-submodules option",
        // },
        {
          name: ["-u", "--update-head-ok"],
          description:
            "By default git fetch refuses to update the head which corresponds to the current branch. This flag disables the check. This is purely for the internal use for git pull to communicate with git fetch, and unless you are implementing your own Porcelain you are not supposed to use it.",
        },
        {
          name: ["--upload-pack"],
          insertValue: "--upload-pack {cursor}",
          args: {
            name: "upload-pack",
          },
          description:
            "When given, and the repository to fetch from is handled by git fetch-pack, --exec=<upload-pack> is passed to the command to specify non-default path for the command run on the other end.",
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Pass --quiet to git-fetch-pack and silence any other internally used git commands. Progress is not reported to the standard error stream.",
        },
        {
          name: ["-v", "--verbose"],
          description: "Be verbose.",
        },
        {
          name: ["--progress"],
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified.",
        },
        {
          name: ["-o", "--server-option"],
          args: {
            name: "option",
          },
          description:
            "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. ",
        },
        {
          name: ["--show-forced-updates"],
          description:
            "By default, git checks if a branch is force-updated during fetch. This can be disabled through fetch.showForcedUpdates, but the --show-forced-updates option guarantees this check occurs",
        },
        {
          name: ["--no-show-forced-updates"],
          description:
            "By default, git checks if a branch is force-updated during fetch. Pass --no-show-forced-updates or set fetch.showForcedUpdates to false to skip this check for performance reasons.",
        },
        {
          name: ["-4", "--ipv4"],
          description: "Use IPv4 addresses only, ignoring IPv6 addresses.",
        },
        {
          name: ["-6", "--ipv6"],
          description: "Use IPv6 addresses only, ignoring IPv4 addresses.",
        },
        {
          name: "--stdin",
          description:
            'Read refspecs, one per line, from stdin in addition to those provided as arguments. The "tag <name>" format is not supported',
        },
      ],
    },
    {
      name: "stash",
      description: "temporarily stores all the modified tracked files",
      subcommands: [
        {
          name: "push", // TODO: support for no subcommand is missing
          description:
            "Save your local modifications to a new stash entry and roll them back to HEAD.",
          insertValue: "push {cursor}",
          options: [
            {
              name: ["-p", "--patch"],
              description:
                "Interactively select hunks from the diff between HEAD and the working tree to be stashed.",
            },
            {
              name: ["-k", "--keep-index"],
              description:
                "All changed already added to the index are left intact.",
            },
            {
              name: ["-u", "--include-untracked"],
              description:
                "All untracked files are also stashed and then cleaned up.",
            },
            {
              name: ["-a", "--all"],
              description: "All ignored and untracked files are also stashed.",
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages.",
            },
            {
              name: ["-m", "--message"],
              insertValue: "-m {cursor}",
              description: "Use the given <msg> as the stash message.",
              args: {
                name: "message",
              },
            },
            { name: "--pathspec-from-file", description: "" }, // TODO: pathspec file nul and add description
            {
              name: "--",
              description:
                "Separates pathsec from options for disambiguation purposes.",
            },
            // TODO: pathspec
          ],
>>>>>>> 65036d2... fixed linting and prettier
        },
        {
          name: "show",
          description:
            "Show the changes recorded in the stash entry as a diff.",
          insertValue: "show {cursor}",
          options: [
            // TODO: All log options can be options from list. Needs to be added.
          ],
          args: [
            {
              name: "stash",
              isOptional: true,
              generators: gitGenerators.stashes,
            },
          ],
        },
        {
          name: "save",
          description: "Temporarily stores all the modified tracked files",
          insertValue: "save {cursor}",
          options: [
            {
              name: ["-p", "--patch"],
              description:
                "Interactively select hunks from the diff between HEAD and the working tree to be stashed.",
            },
            {
              name: ["-k", "--keep-index"],
              description:
                "All changed already added to the index are left intact.",
            },
            {
              name: ["-u", "--include-untracked"],
              description:
                "All untracked files are also stashed and then cleaned up.",
            },
            {
              name: ["-a", "--all"],
              description: "All ignored and untracked files are also stashed.",
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages.",
            },
          ],
          args: {
            name: "message",
            isOptional: true,
          },
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'fetch',
            description: 'Download objects and refs from another repository',
            args: [
                {
                    name: 'remote',
                    isOptional: true,
<<<<<<< HEAD
                    generators: generators.remotes,
=======
                    generators: gitGenerators.remotes,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'branch',
                    isOptional: true,
<<<<<<< HEAD
                    generators: generators.branches,
=======
                    generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'refspec',
                    isOptional: true,
                },
            ],
            options: [
                {
                    name: '--all',
                    insertValue: '--all',
                    description: 'Fetch all remotes',
                },
                {
                    name: ['-a', '--append'],
                    description:
                        'Append ref names and object names of fetched refs to the existing contents of .git/FETCH_HEAD',
                },
                {
                    name: ['--atomic'],
                    description:
                        'Use an atomic transaction to update local refs. Either all refs are updated, or on error, no refs are updated.',
                },
                {
                    name: ['--depth'],
                    insertValue: '--depth {cursor}',
                    args: {
                        name: 'depth',
                    },
                    description:
                        'Limit fetching to the specified number of commits from the tip of each remote branch history',
                },
                {
                    name: ['--deepen'],
                    insertValue: '--deepen {cursor}',
                    args: {
                        name: 'depth',
                    },
                    description:
                        'Similar to --depth, except it specifies the number of commits from the current shallow boundary instead of from the tip of each remote branch history',
                },
                {
                    name: ['--shallow-since'],
                    insertValue: '--shallow-since {cursor}',
                    args: {
                        name: 'date',
                    },
                    description:
                        'Deepen or shorten the history of a shallow repository to include all reachable commits after <date>',
                },
                {
                    name: ['--shallow-exclude'],
                    insertValue: '--shallow-exclude {cursor}',
                    args: {
                        name: 'revision',
                    },
                    description:
                        'Deepen or shorten the history of a shallow repository to exclude commits reachable from a specified remote branch or tag. This option can be specified multiple times',
                },
                {
                    name: ['--unshallow'],
                    description:
                        'If the source repository is shallow, fetch as much as possible so that the current repository has the same history as the source repository',
                },
                {
                    name: ['--update-shallow'],
                    description:
                        'By default when fetching from a shallow repository, git fetch refuses refs that require updating .git/shallow',
                },
                {
                    name: ['--negotiation-tip'],
                    insertValue: '--negotiation-tip ',
                    args: {
                        name: 'commit|glob',
<<<<<<< HEAD
                        generators: generators.commits,
=======
                        generators: gitGenerators.commits,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                    description:
                        'By default, Git will report, to the server, commits reachable from all local refs to find common commits in an attempt to reduce the size of the to-be-received packfile',
                },
                {
                    name: ['--dry-run'],
                    description: 'Show what would be done, without making any changes.',
                },
                {
                    name: ['--write-fetch-head'],
                    description:
                        'Write the list of remote refs fetched in the FETCH_HEAD file directly under $GIT_DIR. This is the default',
                },
                {
                    name: ['--no-write-fetch-head'],
                    description: 'tells Git not to write the file',
                },
                {
                    name: ['-f', '--force'],
                    description: 'This option overrides that check',
                },
                {
                    name: ['-k', '--keep'],
                    description: 'Keep downloaded pack.',
                },
                {
                    name: ['--multiple'],
                    description:
                        'Allow several <repository> and <group> arguments to be specified. No <refspec>s may be specified.',
                },
                {
                    name: ['--auto-maintenance', '--auto-gc'],
                    description:
                        'Run git maintenance run --auto at the end to perform automatic repository maintenance if',
                },
                {
                    name: ['--no-auto-maintenance', '--no-auto-gc'],
                    description:
                        "Don't run git maintenance run --auto at the end to perform automatic repository maintenance",
                },
                {
                    name: ['--write-commit-graph'],
                    description:
                        'Write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph',
                },
                {
                    name: ['--no-write-commit-graph'],
                    description:
                        "Don't write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
                },
                {
                    name: ['-p', '--prune'],
                    description:
                        'Before fetching, remove any remote-tracking references that no longer exist on the remote',
                },
                {
                    name: ['-P', '--prune-tags'],
                    description:
                        'Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled',
                },
                {
                    name: ['-n', '--no-tags'],
                    description:
                        'By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following',
                },
                {
                    name: ['--refmap'],
                    insertValue: '--refmap {cursor}',
                    args: {
                        name: 'refspec',
                    },
                    description:
                        'When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository',
                },
                {
                    name: ['-t', '--tags'],
                    description:
                        'By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following',
                },
                // TODO: fig needs to accept '=' as delimiter for args/options
                // {
                //     name: ["--recurse-submodules"],
                //     insertValue: "--recurse-submodules={cursor}",
                //     args: {
                //         name: 'mode',
                //         suggestions: [
                //             'yes', 'on-demand', 'no',
                //         ],
                //     },
                //     description: "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
                // },
                {
                    name: ['-j', '--jobs'],
                    args: {
                        name: 'n',
                    },
                    description: 'Number of parallel children to be used for all forms of fetching.',
                },
                {
                    name: ['--no-recurse-submodules'],
                    description:
                        'Disable recursive fetching of submodules (this has the same effect as using the --recurse-submodules=no option).',
                },
                {
                    name: ['--set-upstream'],
                    description:
                        'If the remote is fetched successfully, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands.',
                },
                {
                    name: ['--submodule-prefix'],
                    insertValue: '--submodule-prefix {cursor}',
                    args: {
                        name: 'path',
                    },
                    description:
                        'Prepend <path> to paths printed in informative messages such as ”Fetching submodule foo". This option is used internally when recursing over submodules.',
                },
                // TODO: fig needs to accept '=' as delimiter for args/options
                // {
                //     name: ["--recurse-submodules-default"],
                //     insertValue: "--recurse-submodules-default={cursor}",
                //     args: {
                //         name: 'mode',
                //         suggestions: [
                //             'yes', 'on-demand',
                //         ],
                //     },
                //     description: "This option is used internally to temporarily provide a non-negative default value for the --recurse-submodules option",
                // },
                {
                    name: ['-u', '--update-head-ok'],
                    description:
                        'By default git fetch refuses to update the head which corresponds to the current branch. This flag disables the check. This is purely for the internal use for git pull to communicate with git fetch, and unless you are implementing your own Porcelain you are not supposed to use it.',
                },
                {
                    name: ['--upload-pack'],
                    insertValue: '--upload-pack {cursor}',
                    args: {
                        name: 'upload-pack',
                    },
                    description:
                        'When given, and the repository to fetch from is handled by git fetch-pack, --exec=<upload-pack> is passed to the command to specify non-default path for the command run on the other end.',
                },
                {
                    name: ['-q', '--quiet'],
                    description:
                        'Pass --quiet to git-fetch-pack and silence any other internally used git commands. Progress is not reported to the standard error stream.',
                },
                {
                    name: ['-v', '--verbose'],
                    description: 'Be verbose.',
                },
                {
                    name: ['--progress'],
                    description:
                        'Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified.',
                },
                {
                    name: ['-o', '--server-option'],
                    args: {
                        name: 'option',
                    },
                    description:
                        'Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. ',
                },
                {
                    name: ['--show-forced-updates'],
                    description:
                        'By default, git checks if a branch is force-updated during fetch. This can be disabled through fetch.showForcedUpdates, but the --show-forced-updates option guarantees this check occurs',
                },
                {
                    name: ['--no-show-forced-updates'],
                    description:
                        'By default, git checks if a branch is force-updated during fetch. Pass --no-show-forced-updates or set fetch.showForcedUpdates to false to skip this check for performance reasons.',
                },
                {
                    name: ['-4', '--ipv4'],
                    description: 'Use IPv4 addresses only, ignoring IPv6 addresses.',
                },
                {
                    name: ['-6', '--ipv6'],
                    description: 'Use IPv6 addresses only, ignoring IPv4 addresses.',
                },
                {
                    name: '--stdin',
                    description:
                        'Read refspecs, one per line, from stdin in addition to those provided as arguments. The "tag <name>" format is not supported',
                },
            ],
        },
        {
            name: 'stash',
            description: 'temporarily stores all the modified tracked files',
            subcommands: [
                {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    name: 'push', // TODO: support for no subcommand is missing
                    description: 'Save your local modifications to a new stash entry and roll them back to HEAD.',
                    insertValue: 'push {cursor}',
                    options: [
                        {
                            name: ['-p', '--patch'],
                            description:
                                'Interactively select hunks from the diff between HEAD and the working tree to be stashed.',
                        },
                        {
                            name: ['-k', '--keep-index'],
                            description: 'All changed already added to the index are left intact.',
                        },
                        {
                            name: ['-u', '--include-untracked'],
                            description: 'All untracked files are also stashed and then cleaned up.',
                        },
                        { name: ['-a', '--all'], description: 'All ignored and untracked files are also stashed.' },
                        { name: ['-q', '--quiet'], description: 'Quiet, suppress feedback messages.' },
                        {
                            name: ['-m', '--message'],
                            insertValue: '-m {cursor}',
                            description: 'Use the given <msg> as the stash message.',
                            args: {
                                name: 'message',
                            },
                        },
<<<<<<< HEAD
                        { name: '--pathspec-from-file', description: '' }, // TODO: pathspec file nul and add description
=======
                        { name: '--pathspec-from-file=', description: '' }, // TODO: pathspec file nul and add description
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        { name: '--', description: 'Separates pathsec from options for disambiguation purposes.' },
                        // TODO: pathspec
                    ],
                },
                {
                    name: 'show',
                    description: 'Show the changes recorded in the stash entry as a diff.',
                    insertValue: 'show {cursor}',
                    options: [
                        // TODO: All log options can be options from list. Needs to be added.
                    ],
                    args: [
                        {
                            name: 'stash',
                            isOptional: true,
<<<<<<< HEAD
                            generators: generators.stashes,
=======
                            generators: gitGenerators.stashes,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        },
                    ],
                },
                {
<<<<<<< HEAD
>>>>>>> 0e1d417... fix: fig git script
                    name: 'save',
                    description: 'Temporarily stores all the modified tracked files',
=======
                    name: 'save',
                    description: 'Temporarily stores all the modified tracked files',
                    insertValue: 'save {cursor}',
                    options: [
                        {
                            name: ['-p', '--patch'],
                            description:
                                'Interactively select hunks from the diff between HEAD and the working tree to be stashed.',
                        },
                        {
                            name: ['-k', '--keep-index'],
                            description: 'All changed already added to the index are left intact.',
                        },
                        {
                            name: ['-u', '--include-untracked'],
                            description: 'All untracked files are also stashed and then cleaned up.',
                        },
                        { name: ['-a', '--all'], description: 'All ignored and untracked files are also stashed.' },
                        { name: ['-q', '--quiet'], description: 'Quiet, suppress feedback messages.' },
                    ],
                    args: {
                        name: 'message',
                        isOptional: true,
                    },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'pop',
                    description: 'Restores the most recently stashed files',
<<<<<<< HEAD
=======
                    insertValue: 'pop {cursor}',
                    options: [
                        {
                            name: '--index',
                            description:
                                "Tries to reinstate not only the working tree's changes, but also the index's ones.",
                        },
                        { name: ['-q', '--quiet'], description: 'Quiet, suppress feedback messages.' },
                    ],
                    args: [
                        {
                            name: 'stash',
                            isOptional: true,
                            generators: gitGenerators.stashes,
                        },
                    ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'list',
                    description: 'Lists all stashed changesets',
<<<<<<< HEAD
=======
                    insertValue: 'list {cursor}',
                    options: [
                        // TODO: All log options can be options from list. Needs to be added.
                    ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'drop',
                    description: 'Discards the most recently stashed changeset',
<<<<<<< HEAD
=======
                    insertValue: 'drop {cursor}',
                    options: [{ name: ['-q', '--quiet'], description: 'Quiet, suppress feedback messages.' }],
                    args: [
                        {
                            name: 'stash',
                            isOptional: true,
                            generators: gitGenerators.stashes,
                        },
                    ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'clear',
                    description: ' Remove all the stash entries.',
<<<<<<< HEAD
=======
                    insertValue: 'clear',
                },
                {
                    name: 'apply',
                    description: 'Like pop, but do not remove the state from the stash list.',
                    insertValue: 'apply {cursor}',
                    options: [
                        {
                            name: '--index',
                            description:
                                "Tries to reinstate not only the working tree's changes, but also the index's ones.",
                        },
                        { name: ['-q', '--quiet'], description: 'Quiet, suppress feedback messages.' },
                    ],
                    args: [
                        {
                            name: 'stash',
                            isOptional: true,
                            generators: gitGenerators.stashes,
                        },
                    ],
                },
                {
                    name: 'branch',
                    description: 'Creates and checks out a new branch named ',
                    insertValue: 'branch {cursor}',
                    args: [
                        {
                            name: 'branch',
                            generators: gitGenerators.branches,
                        },
                        {
                            name: 'stash',
                            isOptional: true,
                            generators: gitGenerators.stashes,
                        },
                    ],
                },
                {
                    name: 'create',
                    description: 'Creates a stash with the message <msg>',
                    insertValue: 'create {cursor}',
                    args: {
                        name: 'message',
                    },
                },
                {
                    name: 'store',
                    description: 'Store a given stash in the stash ref., updating the staft reflog.',
                    insertValue: 'store',
                    options: [
                        {
                            name: ['-m', '--message'],
                            insertValue: '-m {cursor}',
                            description: 'Use the given <msg> as the stash message.',
                            args: {
                                name: 'message',
                            },
                        },
                        {
                            name: ['-q', '--quiet'],
                            description: 'Quiet, suppress feedback messages.',
                        },
                    ],
                    args: [
                        {
                            name: 'message',
                        },
                        {
                            name: 'commit',
                            generators: gitGenerators.commits,
                        },
                    ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
            ],
        },
        { name: 'reflog', description: 'Show history of events with hashes' },
        {
            name: 'clone',
            description: 'Clone a repository into a new directory',
            args: [{ name: 'repository' }, { name: 'directory', template: 'filepaths' }],
        },
        { name: 'init', description: 'Create an empty Git repository or reinitialize an existing one' },
        { name: 'mv', description: 'Move or rename a file, a directory, or a symlink' },
        {
            name: 'rm',
            description: 'Remove files from the working tree and from the index',
            args: {
<<<<<<< HEAD
                isVariadic: true,
=======
                variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                suggestions: [
                    {
                        name: '.',
                        description: 'current directory',
                        insertValue: '.',
                        icon: 'fig://icon?type=folder',
                    },
                ],
<<<<<<< HEAD
                generators: generators.files_for_staging,
=======
                generators: gitGenerators.files_for_staging,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
          name: 'pop',
          description: 'Restores the most recently stashed files',
          insertValue: 'pop {cursor}',
=======
          name: "pop",
          description: "Restores the most recently stashed files",
          insertValue: "pop {cursor}",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
          options: [
            {
              name: "--index",
              description:
                "Tries to reinstate not only the working tree's changes, but also the index's ones.",
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages.",
            },
          ],
          args: [
            {
              name: "stash",
              isOptional: true,
              generators: gitGenerators.stashes,
            },
          ],
        },
        {
          name: "list",
          description: "Lists all stashed changesets",
          insertValue: "list {cursor}",
          options: [
            // TODO: All log options can be options from list. Needs to be added.
          ],
        },
        {
          name: "drop",
          description: "Discards the most recently stashed changeset",
          insertValue: "drop {cursor}",
          options: [
            {
<<<<<<< HEAD
              name: ['-q', '--quiet'],
              description: 'Quiet, suppress feedback messages.',
>>>>>>> 65036d2... fixed linting and prettier
=======
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
            },
          ],
          args: [
            {
              name: "stash",
              isOptional: true,
              generators: gitGenerators.stashes,
            },
          ],
        },
<<<<<<< HEAD
        { name: 'bisect', description: 'Use binary search to find the commit that introduced a bug' },
        { name: 'grep', description: 'Print lines matching a pattern' },
        { name: 'show', description: 'Show various types of objects' },
        {
            name: 'branch',
            description: 'List, create, or delete branches',
            options: [
                { name: ['-a', '--all'], description: 'list both remote-tracking and local branches' },
                {
                    name: ['-d', '--delete'],
                    description: 'delete fully merged branch',
                    args: {
<<<<<<< HEAD
                        generators: generators.branches,
=======
                        generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: '-D',
                    description: 'delete branch (even if not merged)',
                    args: {
<<<<<<< HEAD
                        generators: generators.branches,
=======
                        generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: ['-m', '--move'],
                    description: 'move/rename a branch and its reflog',
                    args: [
                        {
<<<<<<< HEAD
                            generators: generators.branches,
                        },
                        {
                            generators: generators.branches,
=======
                            generators: gitGenerators.branches,
                        },
                        {
                            generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        },
                    ],
                },
                {
                    name: '-M',
                    description: 'move/rename a branch, even if target exists',
                    args: [
                        {
<<<<<<< HEAD
                            generators: generators.branches,
                        },
                        {
                            generators: generators.branches,
=======
                            generators: gitGenerators.branches,
                        },
                        {
                            generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        },
                    ],
                },
                { name: ['-c', '--copy'], description: 'copy a branch and its reflog' },
                { name: '-C', description: 'copy a branch, even if target exists' },
                { name: ['-l', '--list'], description: 'list branch names' },
                { name: ['--create-reflog'], description: "create the branch's reflog" },
                {
                    name: ['--edit-description'],
                    description: 'edit the description for the branch',
                    args: {
<<<<<<< HEAD
                        generators: generators.branches,
=======
                        generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                { name: ['-f', '--force'], description: 'force creation, move/rename, deletion' },
                { name: '--merged', description: 'print only branches that are merged', args: { name: 'commit' } },
                {
                    name: '--no-merged',
                    description: 'print only branches that are not merged',
                    args: { name: 'commit' },
                },
                { name: '--column', description: 'list branches in columns [=<style>]' },
                { name: '--sort', description: 'field name to sort on', args: { name: 'key' } },
                { name: '--points-at', description: 'print only branches of the object', args: { name: 'object' } },
                { name: ['-i', '--ignore-case'], description: 'sorting and filtering are case insensitive' },
                { name: '--format', description: 'format to use for the output', args: { name: 'format' } },
            ],
        },
        {
            name: 'checkout',
            description: 'Switch branches or restore working tree files',
            options: [
                { name: '-b', description: 'create and checkout a new branch', args: { name: 'branch' } },
                { name: '-B', description: 'create/reset and checkout a branch', args: { name: 'branch' } },
                { name: '-l', description: 'create reflog for new branch' },
                { name: '--detach', description: 'detach HEAD at named commit' },
                { name: ['-t', '--track'], description: 'set upstream info for new branch' },
                { name: '--orphan', description: 'new unparented branch', args: { name: 'new-branch' } },
                { name: ['-2', '--ours'], description: 'checkout our version for unmerged files' },
                { name: ['-3', '--theirs'], description: 'checkout their version for unmerged files' },
                { name: ['-f', '--force'], description: 'force checkout (throw away local modifications)' },
                { name: ['-m', '--merge'], description: 'perform a 3-way merge with the new branch' },
                { name: '--overwrite-ignore', description: 'update ignored files (default)' },
                {
                    name: '--conflict',
                    description: 'conflict style (merge or diff3)',
                    args: { name: 'style', suggestions: [{ name: 'merge' }, { name: 'diff3' }] },
                },
                { name: ['-p', '--patch'], description: 'select hunks interactively' },
            ],
            args: {
                name: 'branch',
                description: 'branch to switch to',
                isOptional: true,
<<<<<<< HEAD
                generators: generators.branches,
=======
                generators: gitGenerators.branches,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
        {
          name: "clear",
          description: " Remove all the stash entries.",
          insertValue: "clear",
        },
        {
          name: "apply",
          description:
            "Like pop, but do not remove the state from the stash list.",
          insertValue: "apply {cursor}",
          options: [
            {
              name: "--index",
              description:
                "Tries to reinstate not only the working tree's changes, but also the index's ones.",
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages.",
            },
          ],
          args: [
            {
              name: "stash",
              isOptional: true,
              generators: gitGenerators.stashes,
>>>>>>> 65036d2... fixed linting and prettier
            },
          ],
        },
<<<<<<< HEAD
        { name: 'merge', description: 'Join two or more development histories together' },
        {
            name: 'tag',
            description: 'Create, list, delete or verify a tag object signed with GPG',
            options: [
                { name: ['-l', ' --list'], description: 'list tag names' },
                {
                    name: '-n',
                    description: 'print <n> lines of each tag message',
                    args: { name: 'n', suggestions: [{ name: '1' }, { name: '2' }, { name: '3' }] },
                },
                { name: ['-d', '--delete'], description: 'delete tags' },
                { name: ['-v', '--verify'], description: 'verify tags' },
                { name: ['-a', '--annotate'], description: 'annotated tag, needs a message' },
                {
                    name: ['-m', '--message'],
                    insertValue: "-m '{cursor}'",
                    description: 'tag message',
                    args: { name: 'message' },
                },
            ],
            args: {
                name: 'tagname',
                description: 'Select a tag',
<<<<<<< HEAD
                generators: generators.tags,
                isOptional: true,
            },
        },
<<<<<<< HEAD
<<<<<<< HEAD
        {name: "init", description: "Create a repository"},
        {name: "clone", description: "Clone a repository into a new directory"},
        {name: "init", description: "Create an empty Git repository or reinitialize an existing one"},
        {name: "mv", description: "Move or rename a file, a directory, or a symlink"},
        {name: "bisect", description: "Use binary search to find the commit that introduced a bug"},
        {name: "grep", description: "Print lines matching a pattern"},
        {name: "show", description: "Show various types of objects"},
        {name: "branch", description: "List, create, or delete branches"},
        {name: "checkout", description: "Switch branches or restore working tree files"},
        {name: "merge", description: "Joins the difference of two or more development histories together"},
        {name: "tag", description: "Create, list, delete or verify a tag object signed with GPG"},
>>>>>>> 96624c4... added some common options/args and single line commit suggestions for commands that can use hashes for input
=======
>>>>>>> 481d0c8... Merge changes to git
    ]
=======
    ],
>>>>>>> 6bc5008... feat: lint & prettier all files
=======
                generators: gitGenerators.tags,
                isOptional: true,
=======
        {
          name: "branch",
          description: "Creates and checks out a new branch named ",
          insertValue: "branch {cursor}",
          args: [
            {
              name: "branch",
              generators: gitGenerators.branches,
            },
            {
              name: "stash",
              isOptional: true,
              generators: gitGenerators.stashes,
            },
          ],
        },
        {
          name: "create",
          description: "Creates a stash with the message <msg>",
          insertValue: "create {cursor}",
          args: {
            name: "message",
          },
        },
        {
          name: "store",
          description:
            "Store a given stash in the stash ref., updating the staft reflog.",
          insertValue: "store",
          options: [
            {
              name: ["-m", "--message"],
              insertValue: "-m {cursor}",
              description: "Use the given <msg> as the stash message.",
              args: {
                name: "message",
              },
            },
            {
              name: ["-q", "--quiet"],
              description: "Quiet, suppress feedback messages.",
            },
          ],
          args: [
            {
              name: "message",
            },
            {
              name: "commit",
              generators: gitGenerators.commits,
            },
          ],
        },
      ],
    },
    { name: "reflog", description: "Show history of events with hashes" },
    {
      name: "clone",
      description: "Clone a repository into a new directory",
      args: [
        { name: "repository" },
        { name: "directory", template: "filepaths" },
      ],
    },
    {
      name: "init",
      description:
        "Create an empty Git repository or reinitialize an existing one",
    },
    {
      name: "mv",
      description: "Move or rename a file, a directory, or a symlink",
    },
    {
      name: "rm",
      description: "Remove files from the working tree and from the index",
      args: {
        variadic: true,
        suggestions: [
          {
            name: ".",
            description: "current directory",
            insertValue: ".",
            icon: "fig://icon?type=folder",
          },
        ],
        generators: gitGenerators.files_for_staging,
      },
      options: [
        {
          name: "--",
          description:
            "used to separate command-line options from the list of files",
        },
        { name: "--cached", description: "only remove from the index" },
        {
          name: ["-f", "--force"],
          description: "override the up-to-date check",
        },
        { name: "-r", description: "allow recursive removal" },
      ],
    },
    {
      name: "bisect",
      description: "Use binary search to find the commit that introduced a bug",
    },
    { name: "grep", description: "Print lines matching a pattern" },
    { name: "show", description: "Show various types of objects" },
    {
      name: "branch",
      description: "List, create, or delete branches",
      options: [
        {
          name: ["-a", "--all"],
          description: "list both remote-tracking and local branches",
        },
        {
          name: ["-d", "--delete"],
          description: "delete fully merged branch",
          args: {
            generators: gitGenerators.branches,
          },
        },
        {
          name: "-D",
          description: "delete branch (even if not merged)",
          args: {
            generators: gitGenerators.branches,
          },
        },
        {
          name: ["-m", "--move"],
          description: "move/rename a branch and its reflog",
          args: [
            {
              generators: gitGenerators.branches,
            },
            {
              generators: gitGenerators.branches,
            },
          ],
        },
        {
          name: "-M",
          description: "move/rename a branch, even if target exists",
          args: [
            {
              generators: gitGenerators.branches,
>>>>>>> 65036d2... fixed linting and prettier
            },
            {
              generators: gitGenerators.branches,
            },
          ],
        },
        { name: ["-c", "--copy"], description: "copy a branch and its reflog" },
        { name: "-C", description: "copy a branch, even if target exists" },
        { name: ["-l", "--list"], description: "list branch names" },
        {
          name: ["--create-reflog"],
          description: "create the branch's reflog",
        },
        {
          name: ["--edit-description"],
          description: "edit the description for the branch",
          args: {
            generators: gitGenerators.branches,
          },
        },
<<<<<<< HEAD
    ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
        {
          name: ["-f", "--force"],
          description: "force creation, move/rename, deletion",
        },
        {
          name: "--merged",
          description: "print only branches that are merged",
          args: { name: "commit" },
        },
        {
          name: "--no-merged",
          description: "print only branches that are not merged",
          args: { name: "commit" },
        },
        {
          name: "--column",
          description: "list branches in columns [=<style>]",
        },
        {
          name: "--sort",
          description: "field name to sort on",
          args: { name: "key" },
        },
        {
          name: "--points-at",
          description: "print only branches of the object",
          args: { name: "object" },
        },
        {
          name: ["-i", "--ignore-case"],
          description: "sorting and filtering are case insensitive",
        },
        {
          name: "--format",
          description: "format to use for the output",
          args: { name: "format" },
        },
      ],
    },
    {
      name: "checkout",
      description: "Switch branches or restore working tree files",
      options: [
        {
          name: "-b",
          description: "create and checkout a new branch",
          args: { name: "branch" },
        },
        {
          name: "-B",
          description: "create/reset and checkout a branch",
          args: { name: "branch" },
        },
        { name: "-l", description: "create reflog for new branch" },
        { name: "--detach", description: "detach HEAD at named commit" },
        {
          name: ["-t", "--track"],
          description: "set upstream info for new branch",
        },
        {
          name: "--orphan",
          description: "new unparented branch",
          args: { name: "new-branch" },
        },
        {
          name: ["-2", "--ours"],
          description: "checkout our version for unmerged files",
        },
        {
          name: ["-3", "--theirs"],
          description: "checkout their version for unmerged files",
        },
        {
          name: ["-f", "--force"],
          description: "force checkout (throw away local modifications)",
        },
        {
          name: ["-m", "--merge"],
          description: "perform a 3-way merge with the new branch",
        },
        {
          name: "--overwrite-ignore",
          description: "update ignored files (default)",
        },
        {
          name: "--conflict",
          description: "conflict style (merge or diff3)",
          args: {
            name: "style",
            suggestions: [{ name: "merge" }, { name: "diff3" }],
          },
        },
        { name: ["-p", "--patch"], description: "select hunks interactively" },
      ],
      subcommands: [
        { name: "-", description: "switch to the last used branch" },
      ],
      args: {
        name: "branch",
        description: "branch to switch to",
        isOptional: true,
        generators: gitGenerators.branches,
      },
    },
    {
      name: "merge",
      description: "Join two or more development histories together",
    },
    {
      name: "tag",
      description:
        "Create, list, delete or verify a tag object signed with GPG",
      options: [
        { name: ["-l", " --list"], description: "list tag names" },
        {
          name: "-n",
          description: "print <n> lines of each tag message",
          args: {
            name: "n",
            suggestions: [{ name: "1" }, { name: "2" }, { name: "3" }],
          },
        },
        { name: ["-d", "--delete"], description: "delete tags" },
        { name: ["-v", "--verify"], description: "verify tags" },
        {
          name: ["-a", "--annotate"],
          description: "annotated tag, needs a message",
        },
        {
          name: ["-m", "--message"],
          insertValue: "-m '{cursor}'",
          description: "tag message",
          args: { name: "message" },
        },
      ],
      args: {
        name: "tagname",
        description: "Select a tag",
        generators: gitGenerators.tags,
        isOptional: true,
      },
    },
  ],
>>>>>>> 65036d2... fixed linting and prettier
};
