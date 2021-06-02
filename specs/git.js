<<<<<<< HEAD
<<<<<<< HEAD
var generators = {
    // Commit history
    commits: {
<<<<<<< HEAD
=======
var gitGenerators = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // Commit history
    commits: {
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        script: 'git log --oneline',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
<<<<<<< HEAD
=======
        script: "git log --oneline",
        postProcess: function(out) {
            if (out.startsWith("fatal:")) {
                return []
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            }
            return out.split('\n').map(function (line) {
                return {
                    name: line.substring(0, 7),
                    icon: 'fig://icon?type=node',
                    description: line.substring(7),
                };
            });
        },
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======

    // Saved stashes
    // TODO: maybe only print names of stashes
    stashes: {
        script: "git stash list",
        postProcess: function(out) {
            if (out.startsWith("fatal:")) {
                return []
            }

            return out.split('\n').map((file) => {
                return {
                    name: file.split(":")[2],
                    insertValue: file.split(":")[0],
                    icon: `fig://icon?type=node`,
                }
            })
        }
    },


>>>>>>> 9136b0f... implement stash generator
=======
    // Saved stashes
    // TODO: maybe only print names of stashes
    stashes: {
        script: 'git stash list',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
            }
            return out.split('\n').map(function (file) {
                return {
                    name: file.split(':')[2],
                    insertValue: file.split(':')[0],
                    icon: "fig://icon?type=node",
                };
            });
        },
    },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    // Tree-ish
    // This needs to be fleshed out properly....
    // e.g. what is difference to commit-ish?
    // Refer to this:https://stackoverflow.com/questions/23303549/what-are-commit-ish-and-tree-ish-in-git/40910185
    // https://mirrors.edge.kernel.org/pub/software/scm/git/docs/#_identifier_terminology
    treeish: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        script: 'git diff --cached --name-only',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
<<<<<<< HEAD
=======
        script: "git diff --cached --name-only",
        postProcess: function(out) {
            if (out.startsWith("fatal:")) {
                return []
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            }
            return out.split('\n').map(function (file) {
                return {
                    name: file,
                    insertValue: '-- ' + file,
<<<<<<< HEAD
                    icon: 'fig://icon?type=file',
=======
                    icon: "fig://icon?type=file",
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    description: 'staged file',
                };
            });
        },
    },
    // All branches
    branches: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        script: 'git branch --no-color',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
<<<<<<< HEAD
=======
        script: "git branch --no-color",
        postProcess: function(out) {
            if (out.startsWith("fatal:")) {
                return []
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            }
            return out.split('\n').map(function (elm) {
                return { name: elm.replace('*', '').trim(), description: 'branch', icon: 'fig://icon?type=git' };
            });
        },
    },
    remotes: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        script: 'git remote',
        postProcess: function (out) {
            return out.split('\n').map(function (remote) {
                return { name: remote, description: 'remote' };
            });
        },
<<<<<<< HEAD
=======
        script: "git remote",
        postProcess: function(out) {
            return out.split('\n').map(remote => {
                return { name: remote, description: "remote" }
            })
        }
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    },
    tags: {
        script: 'git tag --list',
        splitOn: '\n',
    },
    // Files for staging
    files_for_staging: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
        script: 'git status --short',
        postProcess: function (out) {
            if (out.startsWith('fatal:')) {
                return [];
<<<<<<< HEAD
=======
        script: "git status --short",
        postProcess: function(out) {
            if (out.startsWith("fatal:")) {
                return []
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            }
            // out = out + " "
            var items = out.split('\n').map(function (file) {
                file = file.trim();
                var arr = file.split(' ');
                return { working: arr[0], file: arr.slice(1).join(' ') };
            });
            return items.map(function (item) {
                var file = item.file;
                var ext = '';
                try {
<<<<<<< HEAD
<<<<<<< HEAD
                    ext = file.split('.').slice(-1)[0];
                }
                catch (e) { }
=======
                    ext = file.split('.').slice(-1)[0]
                } catch (e) {}

>>>>>>> 9136b0f... implement stash generator
=======
                    ext = file.split('.').slice(-1)[0];
                }
                catch (e) { }
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                if (file.endsWith('/')) {
                    ext = 'folder';
                }
                return {
                    name: file,
                    insertValue: file.includes(' ') ? "'" + file + "'" : file,
<<<<<<< HEAD
                    icon: 'fig://icon?type=' + ext + '&color=ff0000&badge=' + item.working,
=======
                    icon: "fig://icon?type=" + ext + "&color=ff0000&badge=" + item.working,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    description: 'Changed file',
                    priority: 100,
                };
            });
        },
=======
  // Commit history
  commits: {
    script: "git log --oneline",
    postProcess: function (out) {
      if (out.startsWith("fatal:")) {
        return [];
      }
      return out.split("\n").map(function (line) {
        return {
          name: line.substring(0, 7),
          icon: "fig://icon?type=node",
          description: line.substring(7),
        };
      });
=======
=======
var gitGenerators = {
<<<<<<< HEAD
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
    // Commit history
    commits: {
        script: "git log --oneline",
        postProcess: function (out) {
            if (out.startsWith("fatal:")) {
                return [];
            }
            return out.split("\n").map(function (line) {
                return {
                    name: line.substring(0, 7),
                    icon: "fig://icon?type=node",
                    description: line.substring(7),
                };
            });
        },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
    },
    // Saved stashes
    // TODO: maybe only print names of stashes
    stashes: {
        script: "git stash list",
        postProcess: function (out) {
            if (out.startsWith("fatal:")) {
                return [];
            }
            return out.split("\n").map(function (file) {
                return {
                    name: file.split(":")[2],
                    insertValue: file.split(":")[0],
                    icon: "fig://icon?type=node",
                };
            });
        },
<<<<<<< HEAD
=======
  // Commit history
  commits: {
    script: "git log --oneline",
    postProcess: function (out) {
      if (out.startsWith("fatal:")) {
        return [];
      }
      return out.split("\n").map(function (line) {
        return {
          name: line.substring(0, 7),
          icon: "fig://icon?type=node",
          description: line.substring(7),
        };
      });
>>>>>>> 880aa33... feat: update prettierignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
    },
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
            return out.split("\n").map(function (file) {
                return {
                    name: file,
                    insertValue: "-- " + file,
                    icon: "fig://icon?type=file",
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
            return out.split("\n").map(function (elm) {
                // current branch
                if (elm.includes("*")) {
                    return {
                        name: elm.replace("*", "").trim(),
                        description: "current branch",
                        icon: "⭐️",
                        // priority: 100,
                    };
                }
                return {
                    name: elm.trim(),
                    description: "branch",
                    icon: "fig://icon?type=git",
                };
            });
        },
    },
<<<<<<< HEAD
<<<<<<< HEAD
    remotes: {
<<<<<<< HEAD
=======
    remotes: {
>>>>>>> c80c604... Revert "feat: update prettierignore"
        script: "git remote -v",
        postProcess: function (out) {
            var remoteURLs = out.split("\n").reduce(function (dict, line) {
                var pair = line.split("\t");
                var remote = pair[0];
                console.log(remote, pair);
                var url = pair[1].split(" ")[0];
                dict[remote] = url;
                return dict;
            }, {});
            return Object.keys(remoteURLs).map(function (remote) {
                var url = remoteURLs[remote];
                var icon = "box";
                if (url.includes("github.com")) {
                    icon = "github";
                }
                if (url.includes("gitlab.com")) {
                    icon = "gitlab";
                }
                if (url.includes("heroku.com")) {
                    icon = "heroku";
                }
                return {
                    name: remote,
                    icon: "fig://icon?type=" + icon,
                    description: "remote",
                };
<<<<<<< HEAD
<<<<<<< HEAD
=======
        script: "git remote",
        postProcess: function (out) {
            return out.split("\n").map(function (remote) {
                return { name: remote, description: "remote" };
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> f4ad795... remove firebase-new
            });
        },
=======
  },
  // All branches
  branches: {
    script: "git branch --no-color",
    postProcess: function (out) {
      if (out.startsWith("fatal:")) {
        return [];
      }
      return out.split("\n").map(function (elm) {
        // current branch
        if (elm.includes("*")) {
          return {
            name: elm.replace("*", "").trim(),
            description: "current branch",
            icon: "⭐️",
            // priority: 100,
          };
        }
        return {
          name: elm.trim(),
          description: "branch",
          icon: "fig://icon?type=git",
        };
      });
>>>>>>> 880aa33... feat: update prettierignore
=======
            });
        },
>>>>>>> c80c604... Revert "feat: update prettierignore"
    },
    tags: {
        script: "git tag --list",
        splitOn: "\n",
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 880aa33... feat: update prettierignore
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
      // out = out + " "
      var items = out.split("\n").map(function (file) {
        file = file.trim();
        var arr = file.split(" ");
        return { working: arr[0], file: arr.slice(1).join(" ") };
      });
      return items.map(function (item) {
        var file = item.file;
        var ext = "";
        try {
          ext = file.split(".").slice(-1)[0];
        } catch (e) {}
        if (file.endsWith("/")) {
          ext = "folder";
        }
        return {
          name: file,
          insertValue: file.includes(" ") ? "'" + file + "'" : file,
          icon:
            "fig://icon?type=" + ext + "&color=ff0000&badge=" + item.working,
          description: "Changed file",
          priority: 100,
        };
      });
<<<<<<< HEAD
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
    // Files for staging
    files_for_staging: {
        script: "git status --short",
        postProcess: function (out) {
            if (out.startsWith("fatal:")) {
                return [];
            }
            // out = out + " "
            var items = out.split("\n").map(function (file) {
                file = file.trim();
                var arr = file.split(" ");
                return { working: arr[0], file: arr.slice(1).join(" ") };
            });
            return items.map(function (item) {
                var file = item.file;
                var ext = "";
                try {
                    ext = file.split(".").slice(-1)[0];
                }
                catch (e) { }
                if (file.endsWith("/")) {
                    ext = "folder";
                }
                return {
                    name: file,
                    insertValue: file.includes(" ") ? "'" + file + "'" : file,
                    icon: "fig://icon?type=" + ext + "&color=ff0000&badge=" + item.working,
                    description: "Changed file",
                    priority: 100,
                };
            });
        },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> 880aa33... feat: update prettierignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
    },
};
var head = {
    name: "HEAD",
    icon: "🔻",
    description: "Reset multiple commits",
};
var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'git',
    description: 'the stupid content tracker',
    options: [
        {
            name: '--version',
            description: 'Output version',
<<<<<<< HEAD
=======

    name: "git",
    description: "the stupid content tracker",
    options: [{
            name: "--version",
            description: "Output version"
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
=======
>>>>>>> 880aa33... feat: update prettierignore
  name: "git",
  description: "the stupid content tracker",
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
<<<<<<< HEAD
      name: "--exec-path[=<path>]",
      insertValue: "--exec-path",
=======
      name: "--exec-path",
>>>>>>> 880aa33... feat: update prettierignore
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
<<<<<<< HEAD
      name: "--git-dir=<path>",
      insertValue: "--git-dir=",
=======
      name: "--git-dir",
>>>>>>> 880aa33... feat: update prettierignore
      args: {
        name: "path",
        template: "folders",
      },
      description: "Set the path to the repository dir (`.git`)",
    },
    {
<<<<<<< HEAD
      name: "--work-tree=<path>",
      insertValue: "--work-tree=",
=======
      name: "--work-tree",
>>>>>>> 880aa33... feat: update prettierignore
      args: {
        name: "path",
        template: "folders",
      },
      description: "Set working tree path",
    },
    {
<<<<<<< HEAD
      name: "--namespace=<name>",
      insertValue: "--namespace=",
=======
      name: "--namespace",
>>>>>>> 880aa33... feat: update prettierignore
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
<<<<<<< HEAD
        {
          name: ["-a", "--all"],
          description: "stage all modified and deleted paths",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
        },
=======
    name: "git",
    description: "the stupid content tracker",
    options: [
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
    name: "git",
    description: "the stupid content tracker",
    options: [
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> 880aa33... feat: update prettierignore
=======
    name: "git",
    description: "the stupid content tracker",
    options: [
>>>>>>> c80c604... Revert "feat: update prettierignore"
        {
            name: "--version",
            description: "Output version",
        },
        {
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
    ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    subcommands: [
        {
            name: 'commit',
            description: 'Record changes to the repository',
            insertValue: 'commit',
<<<<<<< HEAD
            options: [
                {
                    name: ['-m', '--message'],
=======
    subcommands: [{
=======
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
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "commit",
            description: "Record changes to the repository",
            args: {
                name: "pathspec",
                isOptional: true,
                variadic: true,
                template: "filepaths",
            },
<<<<<<< HEAD
            options: [{
                    name: ["-m", "--message"],
>>>>>>> 9136b0f... implement stash generator
=======
            args: {
                name: 'pathspec',
            },
            options: [
                {
                    name: ['-m', '--message'],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
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
<<<<<<< HEAD
            ],
=======
=======
            options: [
                {
                    name: ["-m", "--message"],
                    insertValue: "-m '{cursor}'",
                    description: "use the given message as the commit message",
                    args: {
                        name: "message",
                    },
                },
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
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                {
                    name: ["-p", "--patch"],
                    description: "Use the interactive patch selection interface to chose which changes to commi...",
                },
                {
                    name: ["-C", "--reuse-message"],
                    description: "Take an existing commit object, and reuse the log message and the authorship ...",
<<<<<<< HEAD
                    args: {
                        name: "commit",
                        generator: generators.commits,
                    },
=======
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
                {
                    name: ["-c", "--reedit-message"],
                    description: "Like -C, but with -c the editor is invoked, so that the user can further edit...",
<<<<<<< HEAD
                    args: {
                        name: "commit",
                        generator: generators.commits,
                    },
=======
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
                {
                    name: ["--fixup"],
                    description: "Construct a commit message for use with rebase --autosquash. The commit messa...",
<<<<<<< HEAD
                    args: {
                        name: "commit",
                        generator: generators.commits,
                    },
=======
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
                {
                    name: ["--squash"],
                    description: "Construct a commit message for use with rebase --autosquash. The commit messa...",
<<<<<<< HEAD
                    args: {
                        name: "commit",
                        generator: generators.commits,
                    },
=======
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                },
                {
                    name: ["--reset-author"],
                    description: "When used with -C/-c/--amend options, or when committing after a conflicting ...",
                },
                {
                    name: ["--short"],
                    description: "When doing a dry-run, give the output in the short-format. See git-status[1] ...",
                },
                {
                    name: ["--branch"],
                    description: "Show the branch and tracking info even in short-format.",
                },
                {
                    name: ["--porcelain"],
                    description: "When doing a dry-run, give the output in a porcelain-ready format. See git-st...",
                },
                {
                    name: ["--long"],
                    description: "When doing a dry-run, give the output in the long-format. Implies --dry-run.",
                },
                {
                    name: ["-z", "--null"],
                    description: "When showing short or porcelain status output, print the filename verbatim an...",
                },
                {
                    name: ["-F", "--file"],
                    description: "Take the commit message from the given file. Use - to read the message from t...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--author"],
                    description: "Override the commit author. Specify an explicit author using the standard A U...",
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
                    name: ["-t", "--template"],
                    description: "When editing the commit message, start the editor with the contents in the gi...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["-s", "--signoff"],
                    description: "Add a Signed-off-by trailer by the committer at the end of the commit log mes...",
                },
                {
                    name: ["--no-signoff"],
                    description: "Don't add a Signed-off-by trailer by the committer at the end of the commit l...",
                },
                {
                    name: ["-n", "--no-verify"],
                    description: "This option bypasses the pre-commit and commit-msg hooks. See also githooks[5].",
                },
                {
                    name: ["--allow-empty"],
                    description: "Usually recording a commit that has the exact same tree as its sole parent co...",
                },
                {
                    name: ["--allow-empty-message"],
                    description: "Like --allow-empty this command is primarily for use by foreign SCM interface...",
                },
                {
                    name: ["--cleanup"],
                    description: "This option determines how the supplied commit message should be cleaned up b...",
                    args: {
                        name: "mode",
                        suggestions: [
<<<<<<< HEAD
                            'strip', 'whitespace', 'verbatim', 'scissors', 'default',
=======
                            "strip",
                            "whitespace",
                            "verbatim",
                            "scissors",
                            "default",
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                        ],
                    },
                },
                {
                    name: ["-e", "--edit"],
                    description: "The message taken from file with -F, command line with -m, and from commit ob...",
                },
                {
                    name: ["--no-edit"],
                    description: "Use the selected commit message without launching an editor. For example, git...",
                },
                {
                    name: ["--amend"],
                    description: "Replace the tip of the current branch by creating a new commit. The recorded ...",
                },
                {
                    name: ["--no-post-rewrite"],
                    description: "Bypass the post-rewrite hook.",
                },
                {
                    name: ["-i", "--include"],
                    description: "Before making a commit out of staged contents so far, stage the contents of p...",
                },
                {
                    name: ["-o", "--only"],
                    description: "Make a commit by taking the updated working tree contents of the paths specif...",
                },
                {
                    name: ["--pathspec-from-file"],
                    description: "Pathspec is passed in instead of commandline args. If is exactly - then stand...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--pathspec-file-nul"],
                    description: "Only meaningful with --pathspec-from-file. Pathspec elements are separated wi...",
                },
                {
                    name: ["-u", "--untracked-files"],
                    description: "Show untracked files. The mode parameter is optional (defaults to all), and i...",
                    args: {
                        name: "mode",
<<<<<<< HEAD
                        suggestions: [
                            'no', 'normal', 'all',
                        ],
=======
                        suggestions: ["no", "normal", "all"],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
                        isOptional: true
>>>>>>> 5e6e0c5... git push, commit, add, checkout first attempt
=======
                        isOptional: true,
>>>>>>> a39c26e... lint: conda, fastly, fig, git
                    },
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Suppress commit summary message.",
                },
                {
                    name: ["--dry-run"],
                    description: "Do not create a commit, but show a list of paths that are to be committed, pa...",
                },
                {
                    name: ["--status"],
                    description: "Include the output of git-status[1] in the commit message template when using...",
                },
                {
                    name: ["--no-status"],
                    description: "Do not include the output of git-status[1] in the commit message template whe...",
                },
                {
                    name: ["-S", "--gpg-sign"],
                    description: "GPG-sign commits. The keyid argument is optional and defaults to the committe...",
                    args: {
                        name: "keyid",
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
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        isOptional: true,
                    },
                },
                {
<<<<<<< HEAD
                    name: ["--no-gpg-sign"],
                    description: "Dont GPG-sign commits.",
                },
                {
                    name: ["--"],
                    description: "Do not interpret any more arguments as options.",
                },
            ]
>>>>>>> 90df756... Update 'git commit' specs
        },
        {
<<<<<<< HEAD
=======
                    name: ['--no-gpg-sign'],
                    description: 'Dont GPG-sign commits.',
                },
                {
                    name: ['--'],
                    description: 'Do not interpret any more arguments as options.',
                },
<<<<<<< HEAD
=======
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
=======
            name: "--help",
            description: "Output help",
        },
        {
            name: "-C",
            insertValue: "-C ",
>>>>>>> c80c604... Revert "feat: update prettierignore"
            args: {
                name: "path",
                template: "folders",
            },
<<<<<<< HEAD
            description: "Set the path to the repository dir (`.git`)",
=======
=======
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
                        ],
                    },
                },
                {
                    name: "--global",
                    insertValue: "--global {cursor}",
                    description: "For writing options: write to global ~/.gitconfig file rather than the repository .git/config",
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
                    },
                },
                {
                    name: ["--replace-all"],
                    description: "Default behavior is to replace at most one line. This replaces all lines matc...",
                },
                {
                    name: ["--add"],
                    description: "Adds a new line to the option without altering any existing values. This is t...",
                },
                {
                    name: ["--get"],
                    description: "Get the value for a given key (optionally filtered by a regex matching the va...",
                },
                {
                    name: ["--get-all"],
                    description: "Like get, but returns all values for a multi-valued key.",
                },
                {
                    name: ["--get-regexp"],
                    description: "Like --get-all, but interprets the name as a regular expression and writes ou...",
                },
                {
                    name: ["--get-urlmatch"],
                    description: "When given a two-part name section.key, the value for section..key whose part...",
                    args: [
                        {
                            name: "name",
                        },
                        {
                            name: "url",
                        },
                    ],
                },
                {
                    name: ["--system"],
                    description: "For writing options: write to system-wide $(prefix)/etc/gitconfig rather than...",
                },
                {
                    name: ["--worktree"],
                    description: "Similar to --local except that.git/config.worktree is read from or written to...",
                },
                {
                    name: ["-f", "--file"],
                    description: "Use the given config file instead of the one specified by GIT_CONFIG.",
                    args: {
                        name: "config-file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--blob"],
                    description: "Similar to --file but use the given blob instead of a file. E.g. you can use ...",
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
                    description: "List all variables set in config file, along with their values.",
                },
                {
                    name: ["--fixed-value"],
                    description: "When used with the value-pattern argument, treat value-pattern as an exact st...",
                },
                {
                    name: ["--type"],
                    description: "git config will ensure that any input or output is valid under the given type...",
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
                    },
                },
                {
                    name: ["--no-type"],
                    description: "Un-sets the previously set type specifier (if one was previously set). This o...",
                },
                {
                    name: ["-z", "--null"],
                    description: "For all options that output values and/or keys, always end values with the nu...",
                },
                {
                    name: ["--name-only"],
                    description: "Output only the names of config variables for --list or --get-regexp.",
                },
                {
                    name: ["--show-origin"],
                    description: "Augment the output of all queried config options with the origin type (file, ...",
                },
                {
                    name: ["--show-scope"],
                    description: "Similar to --show-origin in that it augments the output of all queried config...",
                },
                {
                    name: ["--get-colorbool"],
                    description: 'Find the color setting for name (e.g. color.diff) and output "true" or "false...',
                    args: {
                        name: "name",
                    },
                },
                {
                    name: ["--get-color"],
                    description: "Find the color configured for name (e.g. color.diff.new) and output it as the...",
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
                    description: "Opens an editor to modify the specified config file; either --system, --globa...",
                },
                {
                    name: ["--includes"],
                    description: "Respect include.* directives in config files when looking up values. Defaults...",
                },
                {
                    name: ["--no-includes"],
                    description: "Respect include.* directives in config files when looking up values. Defaults...",
                },
                {
                    name: ["--default"],
                    description: "When using --get, and the requested variable is not found, behave as if were ...",
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
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            ],
            args: [
                {
                    name: "base",
                    generators: gitGenerators.branches,
                },
                {
                    name: "new base",
                    generators: gitGenerators.branches,
                },
            ],
<<<<<<< HEAD
>>>>>>> cee8840... update fig and git
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
<<<<<<< HEAD
          name: ["--cleanup"],
          description:
            "This option determines how the supplied commit message should be cleaned up b...",
          args: {
            name: "mode",
            suggestions: [
              "strip",
              "whitespace",
              "verbatim",
              "scissors",
              "default",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
            name: "commit",
            description: "Record changes to the repository",
            insertValue: "commit",
            args: {
                name: "pathspec",
            },
            options: [
                {
<<<<<<< HEAD
                    name: ["-m", "--message"],
                    insertValue: "-m '{cursor}'",
                    description: "use the given message as the commit message",
                    args: {
                        name: "message",
                    },
                },
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
                    description: "Use the interactive patch selection interface to chose which changes to commi...",
                },
                {
                    name: ["-C", "--reuse-message"],
                    description: "Take an existing commit object, and reuse the log message and the authorship ...",
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ["-c", "--reedit-message"],
                    description: "Like -C, but with -c the editor is invoked, so that the user can further edit...",
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ["--fixup"],
                    description: "Construct a commit message for use with rebase --autosquash. The commit messa...",
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ["--squash"],
                    description: "Construct a commit message for use with rebase --autosquash. The commit messa...",
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ["--reset-author"],
                    description: "When used with -C/-c/--amend options, or when committing after a conflicting ...",
=======
                    name: ["-n", "--dry-run"],
                    description: "Don’t actually add the file(s), just show if they exist and/or will be ignored.",
                },
                { name: ["-v", "--verbose"], description: "Be verbose." },
                {
                    name: ["-f", "--force"],
                    description: "Allow adding otherwise ignored files.",
                },
                {
                    name: ["-i", "--interactive"],
                    description: "Add modified contents in the working tree interactively to the index. Optional path arguments may be supplied to limit operation to a subset of the working tree. See “Interactive mode” for details.",
                },
                {
                    name: ["-p", "--patch"],
                    description: "Interactively choose hunks of patch between the index and the work tree and add them to the index. This gives the user a chance to review the difference before adding modified contents to the index.",
                },
                {
                    name: ["-e", "--edit"],
                    description: "Open the diff vs. the index in an editor and let the user edit it. After the editor was closed, adjust the hunk headers and apply the patch to the index.",
                },
                {
                    name: ["-u", "--update"],
                    description: "Update the index just where it already has an entry matching <pathspec>. This removes as well as modifies index entries to match the working tree, but adds no new files.",
                },
                {
                    name: ["-A", "--all", "--no-ignore-removal"],
                    description: "Update the index not only where the working tree has a file matching <pathspec> but also where the index already has an entry. This adds, modifies, and removes index entries to match the working tree.",
                },
                {
                    name: ["--no-all", "--ignore-removal"],
                    description: "Update the index by adding new files that are unknown to the index and files modified in the working tree, but ignore files that have been removed from the working tree. This option is a no-op when no <pathspec> is used.",
                },
                {
                    name: ["-N", "--intent-to-add"],
                    description: "Record only the fact that the path will be added later. An entry for the path is placed in the index with no content. This is useful for, among other things, showing the unstaged content of such files with git diff and committing them with git commit -a.",
                },
                {
                    name: ["--refresh"],
                    description: "Don’t add the file(s), but only refresh their stat() information in the index.",
                },
                {
                    name: ["--ignore-errors"],
                    description: "If some files could not be added because of errors indexing them, do not abort the operation, but continue adding the others. The command shall still exit with non-zero status. The configuration variable add.ignoreErrors can be set to true to make this the default behaviour.",
                },
                {
                    name: ["--ignore-missing"],
                    description: "This option can only be used together with --dry-run. By using this option the user can check if any of the given files would be ignored, no matter if they are already present in the work tree or not.",
                },
                {
                    name: ["--no-warn-embedded-repo"],
                    description: "By default, git add will warn when adding an embedded repository to the index without using git submodule add to create an entry in .gitmodules. This option will suppress the warning (e.g., if you are manually performing operations on submodules).",
                },
                {
                    name: ["--renormalize"],
                    description: "Apply the 'clean' process freshly to all tracked files to forcibly add them again to the index. This is useful after changing core.autocrlf configuration or the text attribute in order to correct files added with wrong CRLF/LF line endings. This option implies -u.",
                },
                {
                    name: ["--chmod"],
                    description: "Override the executable bit of the added files. The executable bit is only changed in the index, the files on disk are left unchanged.",
                    insertValue: "--chmod=",
                    args: {
                        suggestions: ["+x", "-x"],
                    },
                },
                {
                    name: ["--pathspec-from-file"],
                    description: "Pathspec is passed in <file> instead of commandline args. If <file> is exactly - then standard input is used. Pathspec elements are separated by LF or CR/LF. Pathspec elements can be quoted as explained for the configuration variable core.quotePath (see git-config[1]). See also --pathspec-file-nul and global --literal-pathspecs.",
                    args: {
                        name: "File",
                        description: "File with pathspec",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--pathspec-file-nul"],
                    description: "Only meaningful with --pathspec-from-file. Pathspec elements are separated with NUL character and all other characters are taken literally (including newlines and quotes).",
                },
                {
                    name: "--",
                    description: "This option can be used to separate command-line options from the list of files.",
                },
            ],
            args: {
                name: "pathspec",
                variadic: true,
                isOptional: true,
                // We have a special setting for dot in the vuejs app
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
                    name: ["-v", "--verbose"],
                    description: "be verbose",
>>>>>>> a39c26e... lint: conda, fastly, fig, git
                },
                {
                    name: ["--short"],
                    description: "When doing a dry-run, give the output in the short-format. See git-status[1] ...",
                },
                {
                    name: ["--branch"],
                    description: "Show the branch and tracking info even in short-format.",
                },
                {
                    name: ["--porcelain"],
                    description: "When doing a dry-run, give the output in a porcelain-ready format. See git-st...",
                },
                {
                    name: ["--long"],
                    description: "When doing a dry-run, give the output in the long-format. Implies --dry-run.",
                },
                {
                    name: ["-z", "--null"],
                    description: "When showing short or porcelain status output, print the filename verbatim an...",
                },
                {
                    name: ["-F", "--file"],
                    description: "Take the commit message from the given file. Use - to read the message from t...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--author"],
                    description: "Override the commit author. Specify an explicit author using the standard A U...",
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
                    name: ["-t", "--template"],
                    description: "When editing the commit message, start the editor with the contents in the gi...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["-s", "--signoff"],
                    description: "Add a Signed-off-by trailer by the committer at the end of the commit log mes...",
                },
                {
                    name: ["--no-signoff"],
                    description: "Don't add a Signed-off-by trailer by the committer at the end of the commit l...",
                },
                {
                    name: ["-n", "--no-verify"],
                    description: "This option bypasses the pre-commit and commit-msg hooks. See also githooks[5].",
                },
                {
                    name: ["--allow-empty"],
                    description: "Usually recording a commit that has the exact same tree as its sole parent co...",
                },
                {
                    name: ["--allow-empty-message"],
                    description: "Like --allow-empty this command is primarily for use by foreign SCM interface...",
                },
                {
                    name: ["--cleanup"],
                    description: "This option determines how the supplied commit message should be cleaned up b...",
                    args: {
                        name: "mode",
                        suggestions: [
                            "strip",
                            "whitespace",
                            "verbatim",
                            "scissors",
                            "default",
                        ],
                    },
                },
                {
                    name: ["-e", "--edit"],
                    description: "The message taken from file with -F, command line with -m, and from commit ob...",
                },
                {
                    name: ["--no-edit"],
                    description: "Use the selected commit message without launching an editor. For example, git...",
                },
                {
                    name: ["--amend"],
                    description: "Replace the tip of the current branch by creating a new commit. The recorded ...",
                },
                {
                    name: ["--no-post-rewrite"],
                    description: "Bypass the post-rewrite hook.",
                },
                {
                    name: ["-i", "--include"],
                    description: "Before making a commit out of staged contents so far, stage the contents of p...",
                },
                {
                    name: ["-o", "--only"],
                    description: "Make a commit by taking the updated working tree contents of the paths specif...",
                },
                {
                    name: ["--pathspec-from-file"],
                    description: "Pathspec is passed in instead of commandline args. If is exactly - then stand...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--pathspec-file-nul"],
                    description: "Only meaningful with --pathspec-from-file. Pathspec elements are separated wi...",
                },
                {
                    name: ["-u", "--untracked-files"],
                    description: "Show untracked files. The mode parameter is optional (defaults to all), and i...",
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
                    description: "Do not create a commit, but show a list of paths that are to be committed, pa...",
                },
                {
                    name: ["--status"],
                    description: "Include the output of git-status[1] in the commit message template when using...",
                },
                {
                    name: ["--no-status"],
                    description: "Do not include the output of git-status[1] in the commit message template whe...",
                },
                {
                    name: ["-S", "--gpg-sign"],
                    description: "GPG-sign commits. The keyid argument is optional and defaults to the committe...",
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
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            ],
        },
        {
<<<<<<< HEAD
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
>>>>>>> e321ca1... feat: update all scripts and  move to ts
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
<<<<<<< HEAD
=======
            name: "config",
            description: "set author",
            options: [{
=======
            name: "config",
            description: "set author",
            options: [
                {
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                    name: "--local",
                    description: "Default: write to the repository .git/config file",
                    args: {
                        variadic: true,
<<<<<<< HEAD
                        suggestions: [{
                                name: "user.name",
                                description: "set config for username",
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                insertValue: "user.name '{cursor}'",
                            },
                            {
                                name: 'user.email',
                                description: 'set config for email',
=======
                        suggestions: [
                            {
                                name: "user.name",
                                description: "set config for username",
                                insertValue: "user.name '{cursor}'",
                            },
                            {
                                name: "user.email",
                                description: "set config for email",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                                insertValue: "user.email '{cursor}'",
                            },
                        ],
                    },
                },
                {
<<<<<<< HEAD
                    name: '--global',
                    insertValue: '--global {cursor}',
                    description: 'For writing options: write to global ~/.gitconfig file rather than the repository .git/config',
                    args: {
<<<<<<< HEAD
<<<<<<< HEAD
                        variadic: true,
<<<<<<< HEAD
=======
                        isVariadic: true,
>>>>>>> 7980ce4... refactor: Fix broken specs
=======
                        variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        suggestions: [
                            {
                                name: 'user.name',
                                description: 'set config for username',
<<<<<<< HEAD
=======
                        suggestions: [{
                                name: "user.name",
                                description: "set config for username",
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                insertValue: "user.name '{cursor}'",
                            },
                            {
                                name: 'user.email',
                                description: 'set config for email',
=======
                    name: "--global",
                    insertValue: "--global {cursor}",
                    description: "For writing options: write to global ~/.gitconfig file rather than the repository .git/config",
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
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                                insertValue: "user.email '{cursor}'",
                            },
                        ],
                    },
                },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                {
                    name: ["--replace-all"],
                    description: "Default behavior is to replace at most one line. This replaces all lines matc...",
                },
                {
                    name: ["--add"],
                    description: "Adds a new line to the option without altering any existing values. This is t...",
                },
                {
                    name: ["--get"],
                    description: "Get the value for a given key (optionally filtered by a regex matching the va...",
                },
                {
                    name: ["--get-all"],
                    description: "Like get, but returns all values for a multi-valued key.",
                },
                {
                    name: ["--get-regexp"],
                    description: "Like --get-all, but interprets the name as a regular expression and writes ou...",
                },
                {
                    name: ["--get-urlmatch"],
                    description: "When given a two-part name section.key, the value for section..key whose part...",
                    args: [
                        {
                            name: "name",
                        },
                        {
                            name: "url",
<<<<<<< HEAD
                        }
=======
                        },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                    ],
                },
                {
                    name: ["--system"],
                    description: "For writing options: write to system-wide $(prefix)/etc/gitconfig rather than...",
                },
                {
                    name: ["--worktree"],
                    description: "Similar to --local except that.git/config.worktree is read from or written to...",
                },
                {
                    name: ["-f", "--file"],
                    description: "Use the given config file instead of the one specified by GIT_CONFIG.",
                    args: {
                        name: "config-file",
<<<<<<< HEAD
                        template: "filepaths"
=======
                        template: "filepaths",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                    },
                },
                {
                    name: ["--blob"],
                    description: "Similar to --file but use the given blob instead of a file. E.g. you can use ...",
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
                    description: "List all variables set in config file, along with their values.",
                },
                {
                    name: ["--fixed-value"],
                    description: "When used with the value-pattern argument, treat value-pattern as an exact st...",
                },
                {
                    name: ["--type"],
                    description: "git config will ensure that any input or output is valid under the given type...",
                    args: {
                        name: "type",
                        suggestions: [
<<<<<<< HEAD
                            "bool", "int", "bool-or-int", "path", "expiry-date", "color",
=======
                            "bool",
                            "int",
                            "bool-or-int",
                            "path",
                            "expiry-date",
                            "color",
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                        ],
                    },
                },
                {
                    name: ["--no-type"],
                    description: "Un-sets the previously set type specifier (if one was previously set). This o...",
                },
                {
                    name: ["-z", "--null"],
                    description: "For all options that output values and/or keys, always end values with the nu...",
                },
                {
                    name: ["--name-only"],
                    description: "Output only the names of config variables for --list or --get-regexp.",
                },
                {
                    name: ["--show-origin"],
                    description: "Augment the output of all queried config options with the origin type (file, ...",
                },
                {
                    name: ["--show-scope"],
                    description: "Similar to --show-origin in that it augments the output of all queried config...",
                },
                {
                    name: ["--get-colorbool"],
<<<<<<< HEAD
                    description: "Find the color setting for name (e.g. color.diff) and output \"true\" or \"false...",
=======
                    description: 'Find the color setting for name (e.g. color.diff) and output "true" or "false...',
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                    args: {
                        name: "name",
                    },
                },
                {
                    name: ["--get-color"],
                    description: "Find the color configured for name (e.g. color.diff.new) and output it as the...",
                    args: [
                        {
                            name: "name",
                        },
                        {
                            name: "default",
                            isOptional: true,
<<<<<<< HEAD
                        }
=======
                        },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
                    ],
                },
                {
                    name: ["-e", "--edit"],
                    description: "Opens an editor to modify the specified config file; either --system, --globa...",
                },
                {
                    name: ["--includes"],
                    description: "Respect include.* directives in config files when looking up values. Defaults...",
                },
                {
                    name: ["--no-includes"],
                    description: "Respect include.* directives in config files when looking up values. Defaults...",
                },
                {
                    name: ["--default"],
                    description: "When using --get, and the requested variable is not found, behave as if were ...",
                    args: {
                        name: "value",
                        isOptional: true,
                    },
<<<<<<< HEAD
                },                
>>>>>>> d5d4de6... Update 'git config' specs
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
          name: ["--pathspec-file-nul"],
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
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
                },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
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
<<<<<<< HEAD
<<<<<<< HEAD
            args: {
                suggestions: [],
<<<<<<< HEAD
                generators: generators.commits,
            },
        },
        {
<<<<<<< HEAD
=======
                generators: gitGenerators.commits,
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
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: 'add',
            description: 'Add file contents to the index',
            options: [
                {
                    name: ['-A', '--all', '--no-ignore-removal'],
                    description: 'Add, modify, and remove index entries to match the working tree',
<<<<<<< HEAD
=======
            name: "add",
            description: "Add file contents to the index",
            options: [{
                    name: ["-A", "--all", "--no-ignore-removal"],
                    description: "Add, modify, and remove index entries to match the working tree"
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: ['-f', '--force'],
                    description: 'Allow adding otherwise ignored files',
                },
                {
                    name: ['-i', '--interactive'],
                    description: 'Add modified contents in the working tree interactively to the index',
                },
                {
                    name: ['-n', '--dry-run'],
                    description: "Don't actually add the files(s), just show if they exist and/or will be ignored",
                },
                {
                    name: ['-p', '--patch'],
                    description: 'Interactively choose hunks of patch between the index and the work tree and add them to the index',
                },
            ],
            args: {
<<<<<<< HEAD
                isVariadic: true,
=======
                variadic: true,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                // We have a special setting for dot in the vuejs app
                // suggestions: [
                //     {
                //         name: ".",
                //         description: "current directory",
                //         insertValue: ".",
                //         icon: "fig://icon?type=folder"
                //     }
                // ],
<<<<<<< HEAD
                generators: generators.files_for_staging,
            },
        },
        {
<<<<<<< HEAD
=======
                generators: gitGenerators.files_for_staging,
=======
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
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
            },
          ],
        },
        {
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: 'status',
            description: 'Show the working tree status',
            options: [
                {
                    name: ['-v', '--verbose'],
                    description: 'be verbose',
<<<<<<< HEAD
=======
            name: "status",
            description: "Show the working tree status",
            options: [{
                    name: ["-v", "--verbose"],
                    description: "be verbose"
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: ['-b', '--branch'],
                    description: 'show branch information',
                },
                {
                    name: '--show-stash',
                    description: 'show stash information',
                },
                {
                    name: '--ahead-behind',
                    description: 'compute full ahead/behind values',
                },
                {
                    name: '--long',
                    description: 'show status in long format (default)',
                },
                {
                    name: ['-z', '--null'],
                    description: 'terminate entries with NUL',
                },
                {
                    name: ['-u', '--untracked-files'],
                    description: 'show untracked files',
                    args: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        suggestions: [
                            {
                                name: 'all',
                                description: '(Default)',
<<<<<<< HEAD
=======
                        suggestions: [{
                                name: "all",
                                description: "(Default)"
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                            },
                            {
                                name: 'normal',
                            },
                            {
                                name: 'no',
                            },
                        ],
                    },
                },
                {
                    name: '--ignored',
                    description: 'show ignored files',
                    args: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                        suggestions: [
                            {
                                name: 'traditional',
                                description: '(Default)',
<<<<<<< HEAD
=======
                        suggestions: [{
                                name: "traditional",
                                description: "(Default)"
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                            },
                            {
                                name: 'matching',
                            },
                            {
                                name: 'no',
                            },
                        ],
                    },
                },
                {
                    name: '--no-renames',
                    description: 'do not detect renames',
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: 'push',
            description: 'Update remote refs',
            options: [
                {
                    name: '-all',
                    description: 'Push all branches to remote',
<<<<<<< HEAD
=======
            name: "push",
            description: "Update remote refs",
            options: [{
                    name: "-all",
                    description: "Push all branches to remote"
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                // { name: "--repo", description: "repository" },
                // { name: "--all", description: "push all refs" },
                // { name: "--mirror", description: "mirror all refs" },
                { name: ['-d', '--delete'], description: 'delete refs' },
                { name: '--tags', description: "push tags (can't be used with --all or --mirror)" },
                // { name: ["-n", "--dry-run"], description: "dry run" },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
            args: [
                {
                    name: 'remote',
=======
            args: [{
                    name: "remote",
>>>>>>> 9136b0f... implement stash generator
                    isOptional: true,
                    generators: generators.remotes,
=======
            args: [
                {
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
        // We have a special setting for dot in the vuejs app
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
          name: ["-v", "--verbose"],
          description: "be verbose",
        },
        {
          name: ["-b", "--branch"],
          description: "show branch information",
        },
        {
          name: "--show-stash",
          description: "show stash information",
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
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
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
                    description: "Add, modify, and remove index entries to match the working tree",
                },
                {
                    name: ["-f", "--force"],
                    description: "Allow adding otherwise ignored files",
                },
                {
                    name: ["-i", "--interactive"],
                    description: "Add modified contents in the working tree interactively to the index",
                },
                {
                    name: ["-n", "--dry-run"],
                    description: "Don't actually add the files(s), just show if they exist and/or will be ignored",
                },
                {
                    name: ["-p", "--patch"],
                    description: "Interactively choose hunks of patch between the index and the work tree and add them to the index",
                },
            ],
            args: {
                variadic: true,
                // We have a special setting for dot in the vuejs app
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
                    name: ["-v", "--verbose"],
                    description: "be verbose",
                },
                {
                    name: ["-b", "--branch"],
                    description: "show branch information",
                },
                {
                    name: "--show-stash",
                    description: "show stash information",
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
                        ],
                    },
                },
                {
                    name: "--ignored",
                    description: "show ignored files",
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
                        ],
                    },
                },
                {
                    name: "--no-renames",
                    description: "do not detect renames",
                },
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: 'pull',
            description: 'Integrate with another repository',
            args: [
                {
                    name: 'remote',
<<<<<<< HEAD
=======
            name: "pull",
            description: "Integrate with another repository",
            args: [{
                    name: "remote",
>>>>>>> 9136b0f... implement stash generator
                    isOptional: true,
                    generators: generators.remotes,
=======
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
          name: "--ignored",
          description: "show ignored files",
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
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: 'diff',
            description: 'Show changes between commits, commit and working tree, etc',
            options: [
                {
                    name: '--staged',
                    insertValue: '--staged',
                    description: 'Show difference between the files in the staging area and the latest version',
                },
=======
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
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
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
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            ],
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
                    description: 'Safe: files which are different between the current HEAD and the given commit. Will abort if there are uncommitted changes',
<<<<<<< HEAD
=======
            name: "diff",
            description: "Show changes between commits, commit and working tree, etc",
            options: [{
                name: "--staged",
                insertValue: "--staged",
                description: "Show difference between the files in the staging area and the latest version",
            }]
        },
        {
            name: "reset",
            description: "Reset current HEAD to the specified state",
            options: [{
                    name: "--keep",
                    insertValue: "--keep {cursor}",
                    description: "Safe: files which are different between the current HEAD and the given commit. Will abort if there are uncommitted changes",
>>>>>>> 9136b0f... implement stash generator
                    args: {
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
                    args: {
                        variadic: true,
                        suggestions: [head],
                        generators: gitGenerators.commits,
                    },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: '--soft',
                    insertValue: '--soft {cursor}',
                    description: 'remove the last commit from the current branch, but the file changes will stay in your working tree',
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
                    description: '⚠️WARNING: you will lose all uncommitted changes in addition to the changes introduced in the last commit',
                    args: {
<<<<<<< HEAD
<<<<<<< HEAD
                        variadic: true,
<<<<<<< HEAD
=======
                        isVariadic: true,
>>>>>>> 7980ce4... refactor: Fix broken specs
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
=======
                        suggestions: [{
                            name: "HEAD~<N>",
                            description: "Reset back to any number of commits",
                            insertValue: "HEAD~",
                        }],
>>>>>>> 9136b0f... implement stash generator
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
<<<<<<< HEAD
                        variadic: true,
<<<<<<< HEAD
=======
                        isVariadic: true,
>>>>>>> 7980ce4... refactor: Fix broken specs
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
=======
                        suggestions: [{
                            name: "HEAD~[insert # of commits]",
                            description: "Reset back any number of commits",
                            insertValue: "HEAD~",
                        }],
>>>>>>> 9136b0f... implement stash generator
                        generators: generators.commits,
=======
                        generators: gitGenerators.commits,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    },
                },
                {
                    name: '--merge',
                    insertValue: '--merge {cursor}',
                    description: 'Resets the index and updates the files in the working tree that are different' +
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
        },
        {
<<<<<<< HEAD
=======
                variadic: true,
                suggestions: [],
                generators: gitGenerators.treeish,
=======
          name: "--mixed",
          insertValue: "--mixed {cursor}",
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
=======
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
>>>>>>> a09fa69... removed linting from all js specs in specs folder
            ],
        },
        {
<<<<<<< HEAD
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
=======
            description: "Run as if git was started in &lt;path&gt;",
        },
        {
            name: "-c name=value",
            insertValue: "-c ",
            description: "Pass a config parameter to the command",
        },
        {
            name: "--exec-path",
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
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
      ],
    },
    {
      name: "stash",
      description: "temporarily stores all the modified tracked files",
      subcommands: [
        {
<<<<<<< HEAD
          name: "push",
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
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
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
            { name: "--pathspec-from-file=", description: "" },
            {
              name: "--",
              description:
                "Separates pathsec from options for disambiguation purposes.",
            },
            // TODO: pathspec
          ],
        },
        {
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: 'log',
            description: 'Show commit logs',
            insertValue: 'log',
            options: [
                {
                    name: '--follow',
                    description: 'Show history of given file',
<<<<<<< HEAD
=======
            name: "log",
            description: "Show commit logs",
            insertValue: "log",
            options: [{
                    name: "--follow",
                    description: "Show history of given file",
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    args: {
                        name: 'file',
                        template: 'filepaths',
                    },
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'suppress diff output',
                },
                {
                    name: '--source',
                    description: 'show source',
                },
                {
                    name: '--oneline',
                    description: 'show each commit as a single line ',
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
            name: 'remote',
            description: 'Manage remote repository',
            insertValue: 'remote {cursor}',
            subcommands: [
                {
                    name: 'add',
                    insertValue: 'add {cursor}',
                    description: 'add repo ',
<<<<<<< HEAD
=======
            name: "remote",
            description: "Manage remote repository",
            insertValue: "remote {cursor}",
            subcommands: [{
                    name: "add",
                    insertValue: "add {cursor}",
                    description: "add repo ",
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: 'set-head',
                    insertValue: 'set-head',
                    description: 'Sets or deletes the default branch',
                },
                {
                    name: 'rm',
                    insertValue: 'rm',
                    description: 'Removes given remote [name]',
                },
                {
                    name: 'get-url',
                    insertValue: 'get-url',
                    description: 'Retrieves the URLs for a remote',
                },
                {
                    name: 'set-url',
                    insertValue: 'set-url {cursor}',
                    description: 'Changes the URLs for the remote',
                },
                {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    name: 'show',
                    description: 'Gives some information about the remote [name]',
                },
                {
                    name: 'prune',
                    description: 'Equivalent to git fetch --prune [name], except that no new references will be fetched',
                },
            ],
            options: [
                {
                    name: '-f',
                    insertValue: '-f',
                    description: 'Fetch after remote info is added',
<<<<<<< HEAD
=======
                    name: "show",
                    description: "Gives some information about the remote [name]"
                },
                {
                    name: "prune",
                    description: "Equivalent to git fetch --prune [name], except that no new references will be fetched"
                }
            ],
            options: [{
                    name: "-f",
                    insertValue: "-f",
                    description: "Fetch after remote info is added",
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                {
                    name: '--tags',
                    insertValue: '--tags',
                    description: 'Import tags from remote',
                },
            ],
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
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
                    description: 'Append ref names and object names of fetched refs to the existing contents of .git/FETCH_HEAD',
                },
                {
                    name: ['--atomic'],
                    description: 'Use an atomic transaction to update local refs. Either all refs are updated, or on error, no refs are updated.',
                },
                {
                    name: ['--depth'],
                    insertValue: '--depth {cursor}',
                    args: {
                        name: 'depth',
                    },
                    description: 'Limit fetching to the specified number of commits from the tip of each remote branch history',
                },
                {
                    name: ['--deepen'],
                    insertValue: '--deepen {cursor}',
                    args: {
                        name: 'depth',
                    },
                    description: 'Similar to --depth, except it specifies the number of commits from the current shallow boundary instead of from the tip of each remote branch history',
                },
                {
                    name: ['--shallow-since'],
                    insertValue: '--shallow-since {cursor}',
                    args: {
                        name: 'date',
                    },
                    description: 'Deepen or shorten the history of a shallow repository to include all reachable commits after <date>',
                },
                {
                    name: ['--shallow-exclude'],
                    insertValue: '--shallow-exclude {cursor}',
                    args: {
                        name: 'revision',
                    },
                    description: 'Deepen or shorten the history of a shallow repository to exclude commits reachable from a specified remote branch or tag. This option can be specified multiple times',
                },
                {
                    name: ['--unshallow'],
                    description: 'If the source repository is shallow, fetch as much as possible so that the current repository has the same history as the source repository',
                },
                {
                    name: ['--update-shallow'],
                    description: 'By default when fetching from a shallow repository, git fetch refuses refs that require updating .git/shallow',
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
                    description: 'By default, Git will report, to the server, commits reachable from all local refs to find common commits in an attempt to reduce the size of the to-be-received packfile',
                },
                {
                    name: ['--dry-run'],
                    description: 'Show what would be done, without making any changes.',
                },
                {
                    name: ['--write-fetch-head'],
                    description: 'Write the list of remote refs fetched in the FETCH_HEAD file directly under $GIT_DIR. This is the default',
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
                    description: 'Allow several <repository> and <group> arguments to be specified. No <refspec>s may be specified.',
                },
                {
                    name: ['--auto-maintenance', '--auto-gc'],
                    description: 'Run git maintenance run --auto at the end to perform automatic repository maintenance if',
                },
                {
<<<<<<< HEAD
                    name: ['--no-auto-maintenance', '--no-auto-gc'],
                    description: "Don't run git maintenance run --auto at the end to perform automatic repository maintenance",
                },
                {
                    name: ['--write-commit-graph'],
                    description: 'Write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph',
                },
                {
                    name: ['--no-write-commit-graph'],
                    description: "Don't write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
                },
                {
                    name: ['-p', '--prune'],
                    description: 'Before fetching, remove any remote-tracking references that no longer exist on the remote',
                },
                {
                    name: ['-P', '--prune-tags'],
                    description: 'Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled',
                },
                {
                    name: ['-n', '--no-tags'],
                    description: 'By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following',
                },
                {
                    name: ['--refmap'],
                    insertValue: '--refmap {cursor}',
                    args: {
                        name: 'refspec',
                    },
                    description: 'When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository',
                },
                {
                    name: ['-t', '--tags'],
                    description: 'By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following',
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
                    description: 'Disable recursive fetching of submodules (this has the same effect as using the --recurse-submodules=no option).',
                },
                {
                    name: ['--set-upstream'],
                    description: 'If the remote is fetched successfully, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands.',
                },
                {
                    name: ['--submodule-prefix'],
                    insertValue: '--submodule-prefix {cursor}',
                    args: {
                        name: 'path',
                    },
                    description: 'Prepend <path> to paths printed in informative messages such as ”Fetching submodule foo". This option is used internally when recursing over submodules.',
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
                    description: 'By default git fetch refuses to update the head which corresponds to the current branch. This flag disables the check. This is purely for the internal use for git pull to communicate with git fetch, and unless you are implementing your own Porcelain you are not supposed to use it.',
                },
                {
                    name: ['--upload-pack'],
                    insertValue: '--upload-pack {cursor}',
                    args: {
                        name: 'upload-pack',
                    },
                    description: 'When given, and the repository to fetch from is handled by git fetch-pack, --exec=<upload-pack> is passed to the command to specify non-default path for the command run on the other end.',
                },
                {
                    name: ['-q', '--quiet'],
                    description: 'Pass --quiet to git-fetch-pack and silence any other internally used git commands. Progress is not reported to the standard error stream.',
                },
                {
                    name: ['-v', '--verbose'],
                    description: 'Be verbose.',
                },
                {
                    name: ['--progress'],
                    description: 'Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified.',
                },
                {
                    name: ['-o', '--server-option'],
                    args: {
                        name: 'option',
                    },
                    description: 'Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. ',
                },
                {
                    name: ['--show-forced-updates'],
                    description: 'By default, git checks if a branch is force-updated during fetch. This can be disabled through fetch.showForcedUpdates, but the --show-forced-updates option guarantees this check occurs',
=======
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
                    name: ["-q", "--quiet"],
                    description: "Quiet, suppress feedback messages.",
                },
                {
                    name: ["--progress"],
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless --quiet is specified. This flag enables progress reporting even if not attached to a terminal, regardless of --quiet.",
                },
                {
                    name: ["--no-progress"],
                    description: "Disable progress status reporting",
                },
                {
                    name: ["-f", "--force"],
                    description: "When switching branches, proceed even if the index or the working tree differs from HEAD. This is used to throw away local changes.",
                },
                {
                    name: ["-2", "--ours"],
                    description: "When checking out paths from the index, check out stage #2 (ours) for unmerged paths.",
                },
                {
                    name: ["-3", "--theirs"],
                    description: "When checking out paths from the index, check out stage #3 (theirs) for unmerged paths.",
                },
                {
                    name: ["-b"],
                    description: "Create a new branch named <new_branch> and start it at <start_point>; see git-branch[1] for details.",
                    args: {
                        name: "New Branch",
                    },
                },
                {
                    name: ["-B"],
                    description: "Creates the branch <new_branch> and start it at <start_point>; if it already exists, then reset it to <start_point>. This is equivalent to running 'git branch' with '-f'; see git-branch[1] for details.",
                    args: {
                        name: "New Branch",
                    },
                },
                {
                    name: ["-t", "--track"],
                    description: "When creating a new branch, set up 'upstream' configuration.",
                },
                {
                    name: ["--no-track"],
                    description: "Do not set up 'upstream' configuration, even if the branch.autoSetupMerge configuration variable is true.",
                },
                {
                    name: ["--guess"],
                    description: "If <branch> is not found but there does exist a tracking branch in exactly one remote (call it <remote>) with a matching name, treat as equivalent to $ git checkout -b <branch> --track <remote>/<branch>",
                },
                { name: ["--no-guess"], description: "Disable --guess" },
                {
                    name: ["-l"],
                    description: "Create the new branch’s reflog; see git-branch[1] for details.",
                },
                {
                    name: ["-d", "--detach"],
                    description: "Rather than checking out a branch to work on it, check out a commit for inspection and discardable experiments. This is the default behavior of git checkout <commit> when <commit> is not a branch name.",
                },
                {
                    name: ["--orphan"],
                    description: "Create a new orphan branch, named <new_branch>, started from <start_point> and switch to it.",
                    args: {
                        name: "New Branch",
                    },
                },
                {
                    name: ["--ignore-skip-worktree-bits"],
                    description: "In sparse checkout mode, git checkout -- <paths> would update only entries matched by <paths> and sparse patterns in $GIT_DIR/info/sparse-checkout. This option ignores the sparse patterns and adds back any files in <paths>.",
                },
                {
                    name: ["-m", "--merge"],
                    description: "When switching branches, if you have local modifications to one or more files that are different between the current branch and the branch to which you are switching, the command refuses to switch branches in order to preserve your modifications in context. ",
                },
                {
                    name: ["--conflict"],
                    description: "The same as --merge option above, but changes the way the conflicting hunks are presented, overriding the merge.conflictStyle configuration variable. Possible values are 'merge' (default) and 'diff3' (in addition to what is shown by 'merge' style, shows the original contents).",
                    insertValue: "--conflict=",
                    args: {
                        isOptional: true,
                        suggestions: ["merge", "diff3"],
                    },
                },
                {
                    name: ["-p", "--patch"],
                    description: "Interactively select hunks in the difference between the <tree-ish> (or the index, if unspecified) and the working tree.",
                },
                {
                    name: ["--ignore-other-worktrees"],
                    description: "git checkout refuses when the wanted ref is already checked out by another worktree. This option makes it check the ref out anyway. In other words, the ref can be held by more than one worktree.",
                },
                {
                    name: ["--overwrite-ignore"],
                    description: "Silently overwrite ignored files when switching branches. This is the default behavior. ",
                },
                {
                    name: ["--no-overwrite-ignore"],
                    description: "Use --no-overwrite-ignore to abort the operation when the new branch contains ignored files.",
                },
                {
                    name: ["--recurse-submodules"],
                    description: "Using --recurse-submodules will update the content of all active submodules according to the commit recorded in the superproject. If local modifications in a submodule would be overwritten the checkout will fail unless -f is used. If nothing (or --no-recurse-submodules) is used, submodules working trees will not be updated. Just like git-submodule[1], this will detach HEAD of the submodule.",
                },
                {
                    name: ["--no-recurse-submodules"],
                    description: "Submodules working trees will not be updated",
                },
                {
                    name: ["--overlay "],
                    description: "In the default overlay mode, git checkout never removes files from the index or the working tree.",
                },
                {
                    name: ["--no-overlay"],
                    description: "When specifying --no-overlay, files that appear in the index and working tree, but not in <tree-ish> are removed, to make them match <tree-ish> exactly.",
                },
                {
                    name: ["--pathspec-from-file"],
                    description: "Pathspec is passed in <file> instead of commandline args. ",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--pathspec-file-nul"],
                    description: "Only meaningful with --pathspec-from-file.",
>>>>>>> a39c26e... lint: conda, fastly, fig, git
                },
                {
                    name: ['--no-show-forced-updates'],
                    description: 'By default, git checks if a branch is force-updated during fetch. Pass --no-show-forced-updates or set fetch.showForcedUpdates to false to skip this check for performance reasons.',
                },
                {
<<<<<<< HEAD
                    name: ['-4', '--ipv4'],
                    description: 'Use IPv4 addresses only, ignoring IPv6 addresses.',
                },
=======
                    name: "pathspec",
                    description: "Limits the paths affected by the operation.",
                    isOptional: true,
                    variadic: true,
                    template: "filepaths",
                },
            ],
        },
        {
            name: "merge",
            description: "Join two or more development histories together",
            args: {
                name: "branch",
                generators: gitGenerators.branches,
            },
            options: [
>>>>>>> a39c26e... lint: conda, fastly, fig, git
                {
                    name: ['-6', '--ipv6'],
                    description: 'Use IPv6 addresses only, ignoring IPv4 addresses.',
                },
                {
                    name: '--stdin',
                    description: 'Read refspecs, one per line, from stdin in addition to those provided as arguments. The "tag <name>" format is not supported',
                },
            ],
        },
        {
            name: 'stash',
            description: 'temporarily stores all the modified tracked files',
            subcommands: [
<<<<<<< HEAD
		{
		    name: "push",
		    description: "",
		    insertValue: "push {cursor}",
		    options:
		    [
			{name: ["-p", "--patch"], description: ""},
			{name: ["-k", "--keep-index"], description: ""},
			{name: ["-p", "--includepatch-untracked"], description: ""},
			{name: ["-a", "--all"], description: ""},
			{name: ["-q", "--quiet"], description: ""},
			{name: ["-m", "--message"], description: ""},
			{name: "--pathspec-from-file=", description: ""},
			// TODO
			{name: "--"}
		    ]
		},
		{
		    name: "show",
		    description: "",
		    insertValue: "show {cursor}",
		    options:
		    [
			// TODO: log options
			{}
		    ]
		},
=======
            name: "fetch",
            description: "Download objects and refs from another repository",
            options: [{
                name: "origin",
                description: "copies all branches from the remote"
            }]
        },
        {
            name: "stash",
            description: "temporarily stores all the modified tracked files",
            subcommands: [{
                    name: "push", // TODO: support for no subcommand is missing
                    description: "Save your local modifications to a new stash entry and roll them back to HEAD.",
                    insertValue: "push {cursor}",
                    options: [
                        { name: ["-p", "--patch"], description: "Interactively select hunks from the diff between HEAD and the working tree to be stashed." },
                        { name: ["-k", "--keep-index"], description: "All changed already added to the index are left intact." },
                        { name: ["-u", "--include-untracked"], description: "All untracked files are also stashed and then cleaned up." },
                        { name: ["-a", "--all"], description: "All ignored and untracked files are also stashed." },
                        { name: ["-q", "--quiet"], description: "Quiet, suppress feedback messages." },
                        {
                            name: ["-m", "--message"],
                            insertValue: "-m {cursor}",
                            description: "Use the given <msg> as the stash message.",
                            args: {
                                name: "message"
                            },
                        },
                        { name: "--pathspec-from-file=", description: "" }, // TODO: pathspec file nul and add description
                        { name: "--", description: "Separates pathsec from options for disambiguation purposes." },
                        // TODO: pathspec
                    ]
                },
                {
                    name: "show",
                    description: "Show the changes recorded in the stash entry as a diff.",
                    insertValue: "show {cursor}",
                    options: [
                        // TODO: All log options can be options from list. Needs to be added.
                    ],
                    args: [{
                        name: "stash",
                        isOptional: true,
                        generators: generators.stashes
                    }]
                },
>>>>>>> 9136b0f... implement stash generator
                {
<<<<<<< HEAD
                    name: 'save',
                    description: 'Temporarily stores all the modified tracked files',
=======
                {
                    name: 'push',
                    description: 'Save your local modifications to a new stash entry and roll them back to HEAD.',
                    insertValue: 'push {cursor}',
                    options: [
                        {
                            name: ['-p', '--patch'],
                            description: 'Interactively select hunks from the diff between HEAD and the working tree to be stashed.',
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
                        { name: '--pathspec-from-file=', description: '' },
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
                            generators: gitGenerators.stashes,
                        },
                    ],
                },
                {
                    name: 'save',
                    description: 'Temporarily stores all the modified tracked files',
                    insertValue: 'save {cursor}',
                    options: [
                        {
                            name: ['-p', '--patch'],
                            description: 'Interactively select hunks from the diff between HEAD and the working tree to be stashed.',
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
                            description: "Tries to reinstate not only the working tree's changes, but also the index's ones.",
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
                },
            ],
=======
                    name: "save",
                    description: "Temporarily stores all the modified tracked files",
                    insertValue: "save {cursor}",
                    options: [
                        { name: ["-p", "--patch"], description: "Interactively select hunks from the diff between HEAD and the working tree to be stashed." },
                        { name: ["-k", "--keep-index"], description: "All changed already added to the index are left intact." },
                        { name: ["-u", "--include-untracked"], description: "All untracked files are also stashed and then cleaned up." },
                        { name: ["-a", "--all"], description: "All ignored and untracked files are also stashed." },
                        { name: ["-q", "--quiet"], description: "Quiet, suppress feedback messages." },

                    ],
                    args: {
                        name: "message",
                        isOptional: true
                    },
                },
                {
                    name: "pop",
                    description: "Restores the most recently stashed files",
                    insertValue: "pop {cursor}",
                    options: [
                        { name: "--index", description: "Tries to reinstate not only the working tree's changes, but also the index's ones." },
                        { name: ["-q", "--quiet"], description: "Quiet, suppress feedback messages." }
                    ],
                    args: [{
                        name: "stash",
                        isOptional: true,
                        generators: generators.stashes
                    }]

                },
                {
                    name: "list",
                    description: "Lists all stashed changesets",
                    insertValue: "list {cursor}",
                    options: [
                        // TODO: All log options can be options from list. Needs to be added.
                    ]
                },
                {
                    name: "drop",
                    description: "Discards the most recently stashed changeset",
                    insertValue: "drop {cursor}",
                    options: [
                        { name: ["-q", "--quiet"], description: "Quiet, suppress feedback messages." }
                    ],
                    args: [{
                        name: "stash",
                        isOptional: true,
                        generators: generators.stashes
                    }]

                },
                {
                    name: "clear",
                    description: " Remove all the stash entries.",
                    insertValue: "clear"
                },
                {
                    name: "apply",
                    description: "Like pop, but do not remove the state from the stash list.",
                    insertValue: "apply {cursor}",
                    options: [
                        { name: "--index", description: "Tries to reinstate not only the working tree's changes, but also the index's ones." },
                        { name: ["-q", "--quiet"], description: "Quiet, suppress feedback messages." }
                    ],
                    args: [{
                        name: "stash",
                        isOptional: true,
                        generators: generators.stashes
                    }]

                },
                {
                    name: "branch",
                    description: "Creates and checks out a new branch named ",
                    insertValue: "branch {cursor}",
                    args: [{
                            name: "branch",
                            generators: generators.branches
                        },
                        {
                            name: "stash",
                            isOptional: true,
                            generators: generators.stashes
                        }
                    ],
                },
                {
                    name: "create",
                    description: "Creates a stash with the message <msg>",
                    insertValue: "create {cursor}",
                    args: {
                        name: "message"
                    },
                },
                {
                    name: "store",
                    description: "Store a given stash in the stash ref., updating the staft reflog.",
                    insertValue: "store",
                    args: {
                        name: "message"
                    },
                    options: [{
                            name: ["-m", "--message"],
                            insertValue: "-m {cursor}",
                            description: "Use the given <msg> as the stash message.",
                            args: {
                                name: "message"
                            },
                        },
                        {
                            name: ["-q", "--quiet"],
                            description: "Quiet, suppress feedback messages."
                        }
                    ],
                    args: [{
                        name: "commit",
                        generators: generators.commits
                    }]
                },
            ]
>>>>>>> ff9586a... Implement first options for stash.
        },
        { name: 'reflog', description: 'Show history of events with hashes' },
        {
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'clone',
            description: 'Clone a repository into a new directory',
            args: [{ name: 'repository' }, { name: 'directory', template: 'filepaths' }],
=======
            name: "clone",
            description: "Clone a repository into a new directory",
            args: [{ name: "repository" }, { name: "directory", template: "filepaths" }]
>>>>>>> 9136b0f... implement stash generator
=======
                    insertValue: 'clear',
                },
=======
=======
        },
        {
            name: "add",
            description: "Add file contents to the index",
            options: [
                { name: ["-n", "--dry-run"],
                    description: "Don’t actually add the file(s), just show if they exist and/or will be ignored.",
                },
                { name: ["-v", "--verbose"],
                    description: "Be verbose."
                },
                { name: ["-f", "--force"],
                    description: "Allow adding otherwise ignored files.",
                },
                { name: ["-i", "--interactive"],
                    description: "Add modified contents in the working tree interactively to the index. Optional path arguments may be supplied to limit operation to a subset of the working tree. See “Interactive mode” for details.",
                },
                { name: ["-p", "--patch"],
                    description: "Interactively choose hunks of patch between the index and the work tree and add them to the index. This gives the user a chance to review the difference before adding modified contents to the index.",
                },
                { name: ["-e", "--edit"],
                    description: "Open the diff vs. the index in an editor and let the user edit it. After the editor was closed, adjust the hunk headers and apply the patch to the index.",
                },
                { name: ["-u", "--update"],
                    description: "Update the index just where it already has an entry matching <pathspec>. This removes as well as modifies index entries to match the working tree, but adds no new files.",
                },
                { name: ["-A", "--all", "--no-ignore-removal"],
                    description: "Update the index not only where the working tree has a file matching <pathspec> but also where the index already has an entry. This adds, modifies, and removes index entries to match the working tree.",
                },
                { name: ["--no-all", "--ignore-removal"],
                    description: "Update the index by adding new files that are unknown to the index and files modified in the working tree, but ignore files that have been removed from the working tree. This option is a no-op when no <pathspec> is used.",
                },
                { name: ["-N", "--intent-to-add"],
                    description: "Record only the fact that the path will be added later. An entry for the path is placed in the index with no content. This is useful for, among other things, showing the unstaged content of such files with git diff and committing them with git commit -a."
                },
                { name: ["--refresh"],
                    description: "Don’t add the file(s), but only refresh their stat() information in the index."
                },
                { name: ["--ignore-errors"],
                    description: "If some files could not be added because of errors indexing them, do not abort the operation, but continue adding the others. The command shall still exit with non-zero status. The configuration variable add.ignoreErrors can be set to true to make this the default behaviour."
                },
                { name: ["--ignore-missing"],
                    description: "This option can only be used together with --dry-run. By using this option the user can check if any of the given files would be ignored, no matter if they are already present in the work tree or not."
                },
                { name: ["--no-warn-embedded-repo"],
                    description: "By default, git add will warn when adding an embedded repository to the index without using git submodule add to create an entry in .gitmodules. This option will suppress the warning (e.g., if you are manually performing operations on submodules)."
                },
                { name: ["--renormalize"],
                    description: "Apply the 'clean' process freshly to all tracked files to forcibly add them again to the index. This is useful after changing core.autocrlf configuration or the text attribute in order to correct files added with wrong CRLF/LF line endings. This option implies -u."
                },
                { name: ["--chmod"],
                    description: "Override the executable bit of the added files. The executable bit is only changed in the index, the files on disk are left unchanged.",
                    insertValue: "--chmod=",
                    args: {
                        suggestions: ["+x", "-x"]
                    }
                },
                { name: ["--pathspec-from-file"],
                    description: "Pathspec is passed in <file> instead of commandline args. If <file> is exactly - then standard input is used. Pathspec elements are separated by LF or CR/LF. Pathspec elements can be quoted as explained for the configuration variable core.quotePath (see git-config[1]). See also --pathspec-file-nul and global --literal-pathspecs.",
                    args: {
                        name: "File",
                        description: "File with pathspec",
                        template: "filepaths"
                    }
                },
                { name: ["--pathspec-file-nul"],
                    description: "Only meaningful with --pathspec-from-file. Pathspec elements are separated with NUL character and all other characters are taken literally (including newlines and quotes)."
                },
                {
                    name: "--",
                    description: "This option can be used to separate command-line options from the list of files."
                }
            ],
            args: {
                name: "pathspec",
                variadic: true,
                isOptional: true,
                // We have a special setting for dot in the vuejs app
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
=======
          name: ["-t", "--template"],
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
>>>>>>> 880aa33... feat: update prettierignore
=======
            name: "--no-replace-objects",
            description: "Do not use replacement refs",
        },
        {
            name: "--bare",
            description: "Treat the repository as a bare repository",
        },
        {
            name: "--git-dir",
            args: {
                name: "path",
                template: "folders",
            },
            description: "Set the path to the repository dir (`.git`)",
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
            name: "--work-tree",
            args: {
                name: "path",
                template: "folders",
            },
            description: "Set working tree path",
        },
        {
            name: "--namespace",
            args: {
                name: "name",
            },
            description: "Set the Git namespace",
        },
    ],
    subcommands: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "clean",
            description: "Shows which files would be removed from working directory",
            options: [
                {
                    name: "-n",
                    description: "Don’t actually remove anything, just show what would be done.",
                },
                {
                    name: ["-f", "--force"],
                    description: "If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f or -i.",
                },
=======
          name: ["--cleanup"],
          description:
            "This option determines how the supplied commit message should be cleaned up b...",
          args: {
            name: "mode",
            suggestions: [
              "strip",
              "whitespace",
              "verbatim",
              "scissors",
              "default",
>>>>>>> 880aa33... feat: update prettierignore
            ],
          },
        },
        {
          name: ["-e", "--edit"],
          description:
            "The message taken from file with -F, command line with -m, and from commit ob...",
        },
        {
<<<<<<< HEAD
            name: "push",
            description: "Update remote refs",
            options: [
<<<<<<< HEAD
>>>>>>> cee8840... update fig and git
                {
                    name: 'apply',
                    description: 'Like pop, but do not remove the state from the stash list.',
                    insertValue: 'apply {cursor}',
                    options: [
                        {
                            name: '--index',
                            description: "Tries to reinstate not only the working tree's changes, but also the index's ones.",
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
<<<<<<< HEAD
=======
=======
                {
                    name: "--all",
                    description: "Push all branches (i.e. refs under refs/heads/); cannot be used with other <refspec>.",
                },
                {
                    name: "--prune",
                    description: "Remove remote branches that don't have a local counterpart",
                },
                {
                    name: "--mirror",
                    description: "Instead of naming each ref to push, specifies that all refs under refs/ be mirrored to the remote repository.",
                },
                {
                    name: ["-n", "--dry-run"],
                    description: "Do everything except actually send the updates.",
                },
                {
                    name: "--porcelain",
                    description: "Produce machine-readable output. The output status line for each ref will be tab-separated and sent to stdout instead of stderr.",
                },
                {
                    name: ["-d", "--delete"],
                    description: "All listed refs are deleted from the remote repository. This is the same as prefixing all refs with a colon.",
                },
                {
                    name: "--tags",
                    description: "All refs under refs/tags are pushed, in addition to refspecs explicitly listed on the command line.",
                },
>>>>>>> 3879070... feat: re-add built specs and update gitignore
                {
                    name: "--follow-tags",
                    description: "Push all the refs that would be pushed without this option, and also push annotated tags in refs/tags that are missing from the remote but are pointing at commit-ish that are reachable from the refs being pushed. This can also be specified with configuration variable push.followTags",
                },
                {
                    name: "--signed",
                    description: "GPG-sign the push request to update refs on the receiving side, to allow it to be checked by the hooks and/or be logged. If false or --no-signed, no signing will be attempted. If true or --signed, the push will fail if the server does not support signed pushes. If set to if-asked, sign if and only if the server supports signed pushes. The push will also fail if the actual call to gpg --sign fails. See git-receive-pack(1) for the details on the receiving end.",
                    args: {
                        isOptional: true,
                        suggestions: ["true", "false", "if-asked"],
                    },
                },
                {
                    name: "--no-signed",
                    description: "GPG-sign the push request to update refs on the receiving side, to allow it to be checked by the hooks and/or be logged. If false or --no-signed, no signing will be attempted. If true or --signed, the push will fail if the server does not support signed pushes. If set to if-asked, sign if and only if the server supports signed pushes. The push will also fail if the actual call to gpg --sign fails. See git-receive-pack(1) for the details on the receiving end.",
                },
                {
                    name: "--atomic",
                    description: "Use an atomic transaction on the remote side if available. Either all refs are updated, or on error, no refs are updated. If the server does not support atomic pushes the push will fail.",
                },
                {
                    name: "--no-atomic",
                    description: "Use an atomic transaction on the remote side if available. Either all refs are updated, or on error, no refs are updated. If the server does not support atomic pushes the push will fail.",
                },
                {
                    name: ["-f", "--force"],
                    description: "Usually, the command refuses to update a remote ref that is not an ancestor of the local ref used to overwrite it. Also, when --force-with-lease option is used, the command refuses to update a remote ref whose current value does not match what is expected. This flag disables these checks, and can cause the remote repository to lose commits; use it with care.",
                },
                {
                    name: "--repo",
                    insertValue: "--repo=",
                    description: "This option is equivalent to the <repository> argument. If both are specified, the command-line argument takes precedence.",
                    args: {
                        name: "repository",
                    },
                },
                {
                    name: ["-u", "--set-upstream"],
                    description: "For every branch that is up to date or successfully pushed, add upstream (tracking) reference, used by argument-less git-pull(1) and other commands.",
                },
                {
                    name: "--thin",
                    description: "These options are passed to git-send-pack(1). A thin transfer significantly reduces the amount of sent data when the sender and receiver share many of the same objects in common. The default is --thin.",
                },
                {
                    name: "--no-thin",
                    description: "These options are passed to git-send-pack(1). A thin transfer significantly reduces the amount of sent data when the sender and receiver share many of the same objects in common. The default is --thin.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Suppress all output, including the listing of updated refs, unless an error occurs. Progress is not reported to the standard error stream.",
                },
                { name: ["-v", "--verbose"], description: "Run verbosely" },
                {
                    name: "--progress",
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified. This flag forces progress status even if the standard error stream is not directed to a terminal.",
                },
                {
                    name: "--no-recurse-submodules",
                    description: "May be used to make sure all submodule commits used by the revisions to be pushed are available on a remote-tracking branch. If check is used Git will verify that all submodule commits that changed in the revisions to be pushed are available on at least one remote of the submodule. If any commits are missing the push will be aborted and exit with non-zero status. If on-demand is used all submodules that changed in the revisions to be pushed will be pushed. If on-demand was not able to push all necessary revisions it will also be aborted and exit with non-zero status. If only is used all submodules will be recursively pushed while the superproject is left unpushed. A value of no or using --no-recurse-submodules can be used to override the push.recurseSubmodules configuration variable when no submodule recursion is required.",
                },
                {
                    name: "--recurse-submodules",
                    insertValue: "--recurse-submodules=",
                    description: "May be used to make sure all submodule commits used by the revisions to be pushed are available on a remote-tracking branch. If check is used Git will verify that all submodule commits that changed in the revisions to be pushed are available on at least one remote of the submodule. If any commits are missing the push will be aborted and exit with non-zero status. If on-demand is used all submodules that changed in the revisions to be pushed will be pushed. If on-demand was not able to push all necessary revisions it will also be aborted and exit with non-zero status. If only is used all submodules will be recursively pushed while the superproject is left unpushed. A value of no or using --no-recurse-submodules can be used to override the push.recurseSubmodules configuration variable when no submodule recursion is required.",
                    args: {
                        suggestions: ["check", "on-demand", "only", "no"],
                    },
                },
                {
                    name: "--verify",
                    description: "Turn on the pre-push hook. The default is --verify, giving the hook a chance to prevent the push. With",
                },
                {
                    name: "--no-verify",
                    description: "Turn off the pre-push hook. The default is --verify, giving the hook a chance to prevent the push. With",
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
                    name: ["-o", "--push-option"],
                    description: "Transmit the given string to the server, which passes them to the pre-receive as well as the post-receive hook. The given string must not contain a NUL or LF character. When multiple --push-option=<option> are given, they are all sent to the other side in the order listed on the command line. When no --push-option=<option> is given from the command line, the values of configuration variable push.pushOption are used instead.",
                    args: {
                        name: "option",
                    },
                },
                {
                    name: ["--receive-pack", "--exec"],
                    description: "Path to the git-receive-pack program on the remote end. Sometimes useful when pushing to a remote repository over ssh, and you do not have the program in a directory on the default $PATH.",
                    args: {
                        name: "git-receive-pack",
                    },
                },
                {
                    name: "--no-force-with-lease",
                    description: "Cancel all the previous --force-with-lease on the command line.",
                },
                {
                    name: "-force-with-lease",
                    description: "protect the named ref (alone), if it is going to be updated, by requiring its current value to be the same as the specified value <expect> (which is allowed to be different from the remote-tracking branch we have for the refname, or we do not even have to have such a remote-tracking branch when this form is used). If <expect> is the empty string, then the named ref must not already exist.",
                    args: {
                        name: "refname[:expect]",
                        isOptional: true,
                    },
                },
            ],
            args: [
<<<<<<< HEAD
>>>>>>> cee8840... update fig and git
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
                },
            ],
        },
        { name: 'reflog', description: 'Show history of events with hashes' },
        {
<<<<<<< HEAD
            name: 'clone',
            description: 'Clone a repository into a new directory',
            args: [{ name: 'repository' }, { name: 'directory', template: 'filepaths' }],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
=======
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
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "pull",
            description: "Integrate with another repository",
            options: [
                {
                    name: "--rebase",
                    description: "Fetch the remote’s copy of current branch and rebases it into the local copy.",
                    args: {
                        name: "remote",
                        generators: gitGenerators.remotes,
                    },
                },
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
<<<<<<< HEAD
>>>>>>> cee8840... update fig and git
        },
        { name: 'init', description: 'Create an empty Git repository or reinitialize an existing one' },
        { name: 'mv', description: 'Move or rename a file, a directory, or a symlink' },
        {
            name: 'rm',
            description: 'Remove files from the working tree and from the index',
            args: {
<<<<<<< HEAD
<<<<<<< HEAD
                variadic: true,
<<<<<<< HEAD
=======
                isVariadic: true,
>>>>>>> 7980ce4... refactor: Fix broken specs
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
                suggestions: [{
                    name: ".",
                    description: "current directory",
                    insertValue: ".",
                    icon: "fig://icon?type=folder"
                }],
                generators: generators.files_for_staging
>>>>>>> 9136b0f... implement stash generator
=======
                generators: gitGenerators.files_for_staging,
>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
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
=======
=======
        },
        {
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "diff",
            description: "Show changes between commits, commit and working tree, etc",
            options: [
                {
                    name: "--staged",
                    insertValue: "--staged",
                    description: "Show difference between the files in the staging area and the latest version",
                },
                {
                    name: "--cached",
                    description: "Show difference between staged changes and last commit",
                },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            args: {
                name: "commit",
                isOptional: true,
                suggestions: [{ name: "HEAD" }],
                generators: gitGenerators.commits,
            },
<<<<<<< HEAD
>>>>>>> cee8840... update fig and git
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
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
>>>>>>> 880aa33... feat: update prettierignore
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
<<<<<<< HEAD
          name: "drop",
          description: "Discards the most recently stashed changeset",
          insertValue: "drop {cursor}",
          options: [
            {
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
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
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
                    description: "Append ref names and object names of fetched refs to the existing contents of .git/FETCH_HEAD",
                },
                {
                    name: ["--atomic"],
                    description: "Use an atomic transaction to update local refs. Either all refs are updated, or on error, no refs are updated.",
                },
                {
                    name: ["--depth"],
                    insertValue: "--depth {cursor}",
                    args: {
                        name: "depth",
                    },
                    description: "Limit fetching to the specified number of commits from the tip of each remote branch history",
                },
                {
                    name: ["--deepen"],
                    insertValue: "--deepen {cursor}",
                    args: {
                        name: "depth",
                    },
                    description: "Similar to --depth, except it specifies the number of commits from the current shallow boundary instead of from the tip of each remote branch history",
                },
                {
                    name: ["--shallow-since"],
                    insertValue: "--shallow-since {cursor}",
                    args: {
                        name: "date",
                    },
                    description: "Deepen or shorten the history of a shallow repository to include all reachable commits after <date>",
                },
                {
                    name: ["--shallow-exclude"],
                    insertValue: "--shallow-exclude {cursor}",
                    args: {
                        name: "revision",
                    },
                    description: "Deepen or shorten the history of a shallow repository to exclude commits reachable from a specified remote branch or tag. This option can be specified multiple times",
                },
                {
                    name: ["--unshallow"],
                    description: "If the source repository is shallow, fetch as much as possible so that the current repository has the same history as the source repository",
                },
                {
                    name: ["--update-shallow"],
                    description: "By default when fetching from a shallow repository, git fetch refuses refs that require updating .git/shallow",
                },
                {
                    name: ["--negotiation-tip"],
                    insertValue: "--negotiation-tip ",
                    args: {
                        name: "commit|glob",
                        generators: gitGenerators.commits,
                    },
                    description: "By default, Git will report, to the server, commits reachable from all local refs to find common commits in an attempt to reduce the size of the to-be-received packfile",
                },
                {
                    name: ["--dry-run"],
                    description: "Show what would be done, without making any changes.",
                },
                {
                    name: ["--write-fetch-head"],
                    description: "Write the list of remote refs fetched in the FETCH_HEAD file directly under $GIT_DIR. This is the default",
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
                    description: "Allow several <repository> and <group> arguments to be specified. No <refspec>s may be specified.",
                },
                {
                    name: ["--auto-maintenance", "--auto-gc"],
                    description: "Run git maintenance run --auto at the end to perform automatic repository maintenance if",
                },
                {
                    name: ["--no-auto-maintenance", "--no-auto-gc"],
                    description: "Don't run git maintenance run --auto at the end to perform automatic repository maintenance",
                },
                {
                    name: ["--write-commit-graph"],
                    description: "Write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
                },
                {
                    name: ["--no-write-commit-graph"],
                    description: "Don't write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
                },
                {
                    name: ["-p", "--prune"],
                    description: "Before fetching, remove any remote-tracking references that no longer exist on the remote",
                },
                {
                    name: ["-P", "--prune-tags"],
                    description: "Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled",
                },
                {
                    name: ["-n", "--no-tags"],
                    description: "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
                },
                {
                    name: ["--refmap"],
                    insertValue: "--refmap {cursor}",
                    args: {
                        name: "refspec",
                    },
                    description: "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
                },
                {
                    name: ["-t", "--tags"],
                    description: "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
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
                    description: "Number of parallel children to be used for all forms of fetching.",
                },
                {
                    name: ["--no-recurse-submodules"],
                    description: "Disable recursive fetching of submodules (this has the same effect as using the --recurse-submodules=no option).",
                },
                {
                    name: ["--set-upstream"],
                    description: "If the remote is fetched successfully, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands.",
                },
                {
                    name: ["--submodule-prefix"],
                    insertValue: "--submodule-prefix {cursor}",
                    args: {
                        name: "path",
                    },
                    description: 'Prepend <path> to paths printed in informative messages such as ”Fetching submodule foo". This option is used internally when recursing over submodules.',
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
                    description: "By default git fetch refuses to update the head which corresponds to the current branch. This flag disables the check. This is purely for the internal use for git pull to communicate with git fetch, and unless you are implementing your own Porcelain you are not supposed to use it.",
                },
                {
                    name: ["--upload-pack"],
                    insertValue: "--upload-pack {cursor}",
                    args: {
                        name: "upload-pack",
                    },
                    description: "When given, and the repository to fetch from is handled by git fetch-pack, --exec=<upload-pack> is passed to the command to specify non-default path for the command run on the other end.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Pass --quiet to git-fetch-pack and silence any other internally used git commands. Progress is not reported to the standard error stream.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Be verbose.",
                },
                {
                    name: ["--progress"],
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified.",
                },
                {
                    name: ["-o", "--server-option"],
                    args: {
                        name: "option",
                    },
                    description: "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. ",
                },
                {
                    name: ["--show-forced-updates"],
                    description: "By default, git checks if a branch is force-updated during fetch. This can be disabled through fetch.showForcedUpdates, but the --show-forced-updates option guarantees this check occurs",
                },
                {
                    name: ["--no-show-forced-updates"],
                    description: "By default, git checks if a branch is force-updated during fetch. Pass --no-show-forced-updates or set fetch.showForcedUpdates to false to skip this check for performance reasons.",
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
                    description: 'Read refspecs, one per line, from stdin in addition to those provided as arguments. The "tag <name>" format is not supported',
                },
            ],
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
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
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ['-d', '--delete'],
                    description: 'delete fully merged branch',
=======
                    name: ["-d", "--delete"],
                    description: "delete fully merged branch",
>>>>>>> 9136b0f... implement stash generator
                    args: {
                        generators: generators.branches,
                    },
                },
                {
<<<<<<< HEAD
                    name: '-D',
                    description: 'delete branch (even if not merged)',
=======
                    name: "-D",
                    description: "delete branch (even if not merged)",
>>>>>>> 9136b0f... implement stash generator
                    args: {
                        generators: generators.branches,
                    },
                },
                {
<<<<<<< HEAD
=======
                    name: ['-d', '--delete'],
                    description: 'delete fully merged branch',
                    args: {
                        generators: gitGenerators.branches,
                    },
                },
                {
                    name: '-D',
                    description: 'delete branch (even if not merged)',
                    args: {
                        generators: gitGenerators.branches,
                    },
                },
                {
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    name: ['-m', '--move'],
                    description: 'move/rename a branch and its reflog',
                    args: [
                        {
<<<<<<< HEAD
=======
                    name: ["-m", "--move"],
                    description: "move/rename a branch and its reflog",
                    args: [{
>>>>>>> 9136b0f... implement stash generator
                            generators: generators.branches,
                        },
                        {
                            generators: generators.branches,
                        },
<<<<<<< HEAD
=======
                            generators: gitGenerators.branches,
                        },
                        {
                            generators: gitGenerators.branches,
                        },
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                    ],
                },
                {
                    name: '-M',
                    description: 'move/rename a branch, even if target exists',
                    args: [
                        {
<<<<<<< HEAD
=======
                    ]
                },
                {
                    name: "-M",
                    description: "move/rename a branch, even if target exists",
                    args: [{
>>>>>>> 9136b0f... implement stash generator
                            generators: generators.branches,
                        },
                        {
                            generators: generators.branches,
                        },
<<<<<<< HEAD
                    ],
=======
                    ]
>>>>>>> 9136b0f... implement stash generator
=======
                            generators: gitGenerators.branches,
                        },
                        {
                            generators: gitGenerators.branches,
                        },
                    ],
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                },
                { name: ['-c', '--copy'], description: 'copy a branch and its reflog' },
                { name: '-C', description: 'copy a branch, even if target exists' },
                { name: ['-l', '--list'], description: 'list branch names' },
                { name: ['--create-reflog'], description: "create the branch's reflog" },
                {
<<<<<<< HEAD
<<<<<<< HEAD
                    name: ['--edit-description'],
                    description: 'edit the description for the branch',
=======
                    name: ["--edit-description"],
                    description: "edit the description for the branch",
>>>>>>> 9136b0f... implement stash generator
                    args: {
                        generators: generators.branches,
=======
                    name: ['--edit-description'],
                    description: 'edit the description for the branch',
                    args: {
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
=======
        },
        {
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "stash",
            description: "temporarily stores all the modified tracked files",
            subcommands: [
                {
                    name: "push",
                    description: "Save your local modifications to a new stash entry and roll them back to HEAD.",
                    insertValue: "push {cursor}",
                    options: [
                        {
                            name: ["-p", "--patch"],
                            description: "Interactively select hunks from the diff between HEAD and the working tree to be stashed.",
                        },
                        {
                            name: ["-k", "--keep-index"],
                            description: "All changed already added to the index are left intact.",
                        },
                        {
                            name: ["-u", "--include-untracked"],
                            description: "All untracked files are also stashed and then cleaned up.",
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
                        { name: "--pathspec-from-file", description: "" },
                        {
                            name: "--",
                            description: "Separates pathsec from options for disambiguation purposes.",
                        },
                        // TODO: pathspec
                    ],
                },
                {
                    name: "show",
                    description: "Show the changes recorded in the stash entry as a diff.",
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
                            description: "Interactively select hunks from the diff between HEAD and the working tree to be stashed.",
                        },
                        {
                            name: ["-k", "--keep-index"],
                            description: "All changed already added to the index are left intact.",
                        },
                        {
                            name: ["-u", "--include-untracked"],
                            description: "All untracked files are also stashed and then cleaned up.",
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
                    name: "pop",
                    description: "Restores the most recently stashed files",
                    insertValue: "pop {cursor}",
                    options: [
                        {
                            name: "--index",
                            description: "Tries to reinstate not only the working tree's changes, but also the index's ones.",
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
                    name: "clear",
                    description: " Remove all the stash entries.",
                    insertValue: "clear",
                },
                {
                    name: "apply",
                    description: "Like pop, but do not remove the state from the stash list.",
                    options: [
                        {
                            name: "--index",
                            description: "Tries to reinstate not only the working tree's changes, but also the index's ones.",
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
                    description: "Store a given stash in the stash ref., updating the staft reflog.",
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
=======
          name: ["--pathspec-file-nul"],
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
>>>>>>> 880aa33... feat: update prettierignore
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          name: "apply",
          description:
            "Like pop, but do not remove the state from the stash list.",
          insertValue: "apply {cursor}",
          options: [
            {
              name: "--index",
              description:
                "Tries to reinstate not only the working tree's changes, but also the index's ones.",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
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
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            name: "clone",
            description: "Clone a repository into a new directory",
            args: [
                { name: "repository" },
                { name: "directory", template: "filepaths" },
            ],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
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
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            options: [
                {
                    name: ["-l", "--local"],
                    description: "Bypasses the normal git aware transport mechanism",
                },
                {
                    name: ["-s", "--shared"],
                    description: "Automatically setup .git/objects/info/alternates to share the objects with the source repository",
                },
                {
                    name: ["-n", "--dry-run"],
                    description: "Do nothing; only show what would happen",
                },
                {
                    name: ["--reference"],
                    description: "If the reference repository is on the local machine, automatically setup",
                    args: {
                        name: "repository",
                    },
                },
                {
                    name: "--dissociate",
                    description: "Borrow the objects from reference repositories specified with the --reference options only to reduce network transfer, and stop borrowing from them after a clone is made by making necessary local copies of borrowed objects.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Operate quietly. Progress is not reported to the standard error stream.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Run verbosely. Does not affect the reporting of progress status to the standard error stream.",
                },
                {
                    name: ["--progress"],
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless --quiet is specified. This flag forces progress status even if the standard error stream is not directed to a terminal.",
                },
                {
                    name: "--server-option",
                    description: "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. The server’s handling of server options, including unknown ones, is server-specific. When multiple --server-option=<option> are given, they are all sent to the other side in the order listed on the command line.",
                },
                {
                    name: ["-n", "--no-checkout"],
                    description: "No checkout of HEAD is performed after the clone is complete.",
                },
                {
                    name: "--bare",
                    description: "Make a bare Git repository. That is, instead of creating <directory> and placing the administrative files in <directory>/.git, make the <directory> itself the $GIT_DIR. This obviously implies the --no-checkout because there is nowhere to check out the working tree. Also the branch heads at the remote are copied directly to corresponding local branch heads, without mapping them to refs/remotes/origin/. When this option is used, neither remote-tracking branches nor the related configuration variables are created.",
                },
                {
                    name: "--sparse",
                    description: "Initialize the sparse-checkout file so the working directory starts with only the files in the root of the repository. The sparse-checkout file can be modified to grow the working directory as needed.",
                },
                {
                    name: "--filter",
                    description: "Use the partial clone feature and request that the server sends a subset of reachable objects according to a given object filter. When using --filter, the supplied <filter-spec> is used for the partial clone filter. For example, --filter=blob:none will filter out all blobs (file contents) until needed by Git. Also, --filter=blob:limit=<size> will filter out all blobs of size at least <size>. For more details on filter specifications, see the --filter option in git-rev-list[1].",
                    insertValue: "--filter=",
                    args: { name: "filter spec" },
                },
                {
                    name: "--mirror",
                    description: "Set up a mirror of the source repository. This implies --bare. Compared to --bare, --mirror not only maps local branches of the source to local branches of the target, it maps all refs (including remote-tracking branches, notes etc.) and sets up a refspec configuration such that all these refs are overwritten by a git remote update in the target repository.",
                },
                {
                    name: ["-o", "--origin"],
                    description: "Instead of using the remote name origin to keep track of the upstream repository, use <name>. Overrides clone.defaultRemoteName from the config.",
                    args: { name: "name" },
                },
                {
                    name: ["-b", "--branch"],
                    description: "Instead of pointing the newly created HEAD to the branch pointed to by the cloned repository’s HEAD, point to <name> branch instead. In a non-bare repository, this is the branch that will be checked out. --branch can also take tags and detaches the HEAD at that commit in the resulting repository.",
                    args: { name: "branch name" },
                },
                {
                    name: ["-u", "--upload-pack"],
                    description: "When given, and the repository to clone from is accessed via ssh, this specifies a non-default path for the command run on the other end.",
                    args: {
                        name: "upload pack",
                    },
                },
                {
                    name: "--template",
                    description: "Specify the directory from which templates will be used",
                    insertValue: "--template=",
                    args: {
                        name: "template directory",
                    },
                },
                {
                    name: "--depth",
                    description: "Create a shallow clone with a history truncated to the specified number of commits. Implies --single-branch unless --no-single-branch is given to fetch the histories near the tips of all branches. If you want to clone submodules shallowly, also pass --shallow-submodules.",
                    args: {
                        name: "date",
                    },
                },
                {
                    name: "--shallow-since",
                    description: "Create a shallow clone with a history after the specified time.",
                    insertValue: "--shallow-since=",
                    args: {
                        name: "date",
                    },
                },
                {
                    name: "--shallow-exclude",
                    description: "Create a shallow clone with a history, excluding commits reachable from a specified remote branch or tag. This option can be specified multiple times.",
                    insertValue: "--shallow-exclude=",
                    args: {
                        name: "revision",
                    },
                },
                {
                    name: "--single-branch",
                    description: "Clone only the history leading to the tip of a single branch, either specified by the --branch option or the primary branch remote’s HEAD points at. Further fetches into the resulting repository will only update the remote-tracking branch for the branch this option was used for the initial cloning. If the HEAD at the remote did not point at any branch when --single-branch clone was made, no remote-tracking branch is created.",
                },
                {
                    name: "--no-tags",
                    description: "Don’t clone any tags, and set remote.<remote>.tagOpt=--no-tags in the config, ensuring that future git pull and git fetch operations won’t follow any tags. Subsequent explicit tag fetches will still work, (see git-fetch[1]).",
                },
                {
                    name: "--recurse-submodules",
                    description: "After the clone is created, initialize and clone submodules within based on the provided pathspec. If no pathspec is provided, all submodules are initialized and cloned. This option can be given multiple times for pathspecs consisting of multiple entries.",
                    insertValue: "--recurse-submodules=",
                    args: {
                        name: "pathspec",
                    },
                },
                {
                    name: "--shallow-submodules",
                    description: "All submodules which are cloned will be shallow with a depth of 1.",
                },
                {
                    name: "--remote-submodules",
                    description: "All submodules which are cloned will use the status of the submodule’s remote-tracking branch to update the submodule, rather than the superproject’s recorded SHA-1. Equivalent to passing --remote to git submodule update.",
                },
                {
                    name: "--separate-git-dir",
                    description: "Instead of placing the cloned repository where it is supposed to be, place the cloned repository at the specified directory, then make a filesystem-agnostic Git symbolic link to there. The result is Git repository can be separated from working tree.",
                    insertValue: "--separate-git-dir=",
                    args: {
                        name: "git dir",
                    },
                },
            ],
<<<<<<< HEAD
>>>>>>> d9b1b26... add to git and fig specs
        },
<<<<<<< HEAD
    ],
};

=======
    ]
}
<<<<<<< HEAD
>>>>>>> 9136b0f... implement stash generator
=======
>>>>>>> bd1f973... Update git.js
=======
                generators: gitGenerators.tags,
                isOptional: true,
=======
        {
<<<<<<< HEAD
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
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
            },
          ],
=======
            name: "init",
            description: "Create an empty Git repository or reinitialize an existing one",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
=======
            args: {
                name: "directory",
            },
>>>>>>> cee8840... update fig and git
=======
=======
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
=======
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
                    description: "Use the interactive patch selection interface to chose which changes to commi...",
                },
                {
                    name: ["-C", "--reuse-message"],
                    description: "Take an existing commit object, and reuse the log message and the authorship ...",
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ["-c", "--reedit-message"],
                    description: "Like -C, but with -c the editor is invoked, so that the user can further edit...",
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ["--fixup"],
                    description: "Construct a commit message for use with rebase --autosquash. The commit messa...",
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ["--squash"],
                    description: "Construct a commit message for use with rebase --autosquash. The commit messa...",
                    args: [
                        {
                            name: "commit",
                            generators: gitGenerators.commits,
                        },
                    ],
                },
                {
                    name: ["--reset-author"],
                    description: "When used with -C/-c/--amend options, or when committing after a conflicting ...",
                },
                {
                    name: ["--short"],
                    description: "When doing a dry-run, give the output in the short-format. See git-status[1] ...",
                },
                {
                    name: ["--branch"],
                    description: "Show the branch and tracking info even in short-format.",
                },
                {
                    name: ["--porcelain"],
                    description: "When doing a dry-run, give the output in a porcelain-ready format. See git-st...",
                },
                {
                    name: ["--long"],
                    description: "When doing a dry-run, give the output in the long-format. Implies --dry-run.",
                },
                {
                    name: ["-z", "--null"],
                    description: "When showing short or porcelain status output, print the filename verbatim an...",
                },
                {
                    name: ["-F", "--file"],
                    description: "Take the commit message from the given file. Use - to read the message from t...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--author"],
                    description: "Override the commit author. Specify an explicit author using the standard A U...",
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
                    name: ["-t", "--template"],
                    description: "When editing the commit message, start the editor with the contents in the gi...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["-s", "--signoff"],
                    description: "Add a Signed-off-by trailer by the committer at the end of the commit log mes...",
                },
                {
                    name: ["--no-signoff"],
                    description: "Don't add a Signed-off-by trailer by the committer at the end of the commit l...",
                },
                {
                    name: ["-n", "--no-verify"],
                    description: "This option bypasses the pre-commit and commit-msg hooks. See also githooks[5].",
                },
                {
                    name: ["--allow-empty"],
                    description: "Usually recording a commit that has the exact same tree as its sole parent co...",
                },
                {
                    name: ["--allow-empty-message"],
                    description: "Like --allow-empty this command is primarily for use by foreign SCM interface...",
                },
                {
                    name: ["--cleanup"],
                    description: "This option determines how the supplied commit message should be cleaned up b...",
                    args: {
                        name: "mode",
                        suggestions: [
                            "strip",
                            "whitespace",
                            "verbatim",
                            "scissors",
                            "default",
                        ],
                    },
                },
                {
                    name: ["-e", "--edit"],
                    description: "The message taken from file with -F, command line with -m, and from commit ob...",
                },
                {
                    name: ["--no-edit"],
                    description: "Use the selected commit message without launching an editor. For example, git...",
                },
                {
                    name: ["--amend"],
                    description: "Replace the tip of the current branch by creating a new commit. The recorded ...",
                },
                {
                    name: ["--no-post-rewrite"],
                    description: "Bypass the post-rewrite hook.",
                },
                {
                    name: ["-i", "--include"],
                    description: "Before making a commit out of staged contents so far, stage the contents of p...",
                },
                {
                    name: ["-o", "--only"],
                    description: "Make a commit by taking the updated working tree contents of the paths specif...",
                },
                {
                    name: ["--pathspec-from-file"],
                    description: "Pathspec is passed in instead of commandline args. If is exactly - then stand...",
                    args: {
                        name: "file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--pathspec-file-nul"],
                    description: "Only meaningful with --pathspec-from-file. Pathspec elements are separated wi...",
                },
                {
                    name: ["-u", "--untracked-files"],
                    description: "Show untracked files. The mode parameter is optional (defaults to all), and i...",
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
                    description: "Do not create a commit, but show a list of paths that are to be committed, pa...",
                },
                {
                    name: ["--status"],
                    description: "Include the output of git-status[1] in the commit message template when using...",
                },
                {
                    name: ["--no-status"],
                    description: "Do not include the output of git-status[1] in the commit message template whe...",
                },
                {
                    name: ["-S", "--gpg-sign"],
                    description: "GPG-sign commits. The keyid argument is optional and defaults to the committe...",
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
                        ],
                    },
                },
                {
                    name: "--global",
                    insertValue: "--global {cursor}",
                    description: "For writing options: write to global ~/.gitconfig file rather than the repository .git/config",
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
                    },
                },
                {
                    name: ["--replace-all"],
                    description: "Default behavior is to replace at most one line. This replaces all lines matc...",
                },
                {
                    name: ["--add"],
                    description: "Adds a new line to the option without altering any existing values. This is t...",
                },
                {
                    name: ["--get"],
                    description: "Get the value for a given key (optionally filtered by a regex matching the va...",
                },
                {
                    name: ["--get-all"],
                    description: "Like get, but returns all values for a multi-valued key.",
                },
                {
                    name: ["--get-regexp"],
                    description: "Like --get-all, but interprets the name as a regular expression and writes ou...",
                },
                {
                    name: ["--get-urlmatch"],
                    description: "When given a two-part name section.key, the value for section..key whose part...",
                    args: [
                        {
                            name: "name",
                        },
                        {
                            name: "url",
                        },
                    ],
                },
                {
                    name: ["--system"],
                    description: "For writing options: write to system-wide $(prefix)/etc/gitconfig rather than...",
                },
                {
                    name: ["--worktree"],
                    description: "Similar to --local except that.git/config.worktree is read from or written to...",
                },
                {
                    name: ["-f", "--file"],
                    description: "Use the given config file instead of the one specified by GIT_CONFIG.",
                    args: {
                        name: "config-file",
                        template: "filepaths",
                    },
                },
                {
                    name: ["--blob"],
                    description: "Similar to --file but use the given blob instead of a file. E.g. you can use ...",
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
                    description: "List all variables set in config file, along with their values.",
                },
                {
                    name: ["--fixed-value"],
                    description: "When used with the value-pattern argument, treat value-pattern as an exact st...",
                },
                {
                    name: ["--type"],
                    description: "git config will ensure that any input or output is valid under the given type...",
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
                    },
                },
                {
                    name: ["--no-type"],
                    description: "Un-sets the previously set type specifier (if one was previously set). This o...",
                },
                {
                    name: ["-z", "--null"],
                    description: "For all options that output values and/or keys, always end values with the nu...",
                },
                {
                    name: ["--name-only"],
                    description: "Output only the names of config variables for --list or --get-regexp.",
                },
                {
                    name: ["--show-origin"],
                    description: "Augment the output of all queried config options with the origin type (file, ...",
                },
                {
                    name: ["--show-scope"],
                    description: "Similar to --show-origin in that it augments the output of all queried config...",
                },
                {
                    name: ["--get-colorbool"],
                    description: 'Find the color setting for name (e.g. color.diff) and output "true" or "false...',
                    args: {
                        name: "name",
                    },
                },
                {
                    name: ["--get-color"],
                    description: "Find the color configured for name (e.g. color.diff.new) and output it as the...",
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
                    description: "Opens an editor to modify the specified config file; either --system, --globa...",
                },
                {
                    name: ["--includes"],
                    description: "Respect include.* directives in config files when looking up values. Defaults...",
                },
                {
                    name: ["--no-includes"],
                    description: "Respect include.* directives in config files when looking up values. Defaults...",
                },
                {
                    name: ["--default"],
                    description: "When using --get, and the requested variable is not found, behave as if were ...",
                    args: {
                        name: "value",
                        isOptional: true,
                    },
                },
>>>>>>> c80c604... Revert "feat: update prettierignore"
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
            args: [
                {
                    name: "base",
                    generators: gitGenerators.branches,
                },
                {
                    name: "new base",
                    generators: gitGenerators.branches,
                },
            ],
<<<<<<< HEAD
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
>>>>>>> 880aa33... feat: update prettierignore
        },
        {
          name: ["--get-urlmatch"],
          description:
            "When given a two-part name section.key, the value for section..key whose part...",
          args: [
            {
              name: "name",
            },
<<<<<<< HEAD
>>>>>>> 3879070... feat: re-add built specs and update gitignore
            options: [
                {
                    name: ["-q", "--quiet"],
                    description: "Only print error and warning messages",
                },
                {
                    name: ["--bare"],
                    description: "Create a bare repository",
                },
                {
                    name: ["--object-format="],
                    description: "Specify the given object format",
                    args: {
                        name: "format",
                    },
                },
                {
                    name: "separate-git-dir",
                    description: "C",
                    args: {
                        name: "git dir",
                    },
                },
                {
                    name: ["-b", "--initial-branch"],
                    description: "initial branch for new repo",
                    args: {
                        name: "branch",
                    },
                },
                {
                    name: ["--shared"],
                    args: {
                        suggestions: [
                            {
                                name: "false",
                            },
                            {
                                name: "true",
                            },
                            {
                                name: "umask",
                            },
                            {
                                name: "group",
                            },
                            {
                                name: "all",
                            },
                            {
                                name: "world",
                            },
                            {
                                name: "everybody",
                            },
                            {
                                name: "0xxx",
                            },
                        ],
                    },
                },
            ],
<<<<<<< HEAD
>>>>>>> d9b1b26... add to git and fig specs
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
            {
              name: "url",
            },
          ],
>>>>>>> 880aa33... feat: update prettierignore
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
=======
        },
        {
            name: "add",
            description: "Add file contents to the index",
            options: [
                {
                    name: ["-A", "--all", "--no-ignore-removal"],
                    description: "Add, modify, and remove index entries to match the working tree",
                },
                {
                    name: ["-f", "--force"],
                    description: "Allow adding otherwise ignored files",
                },
                {
                    name: ["-i", "--interactive"],
                    description: "Add modified contents in the working tree interactively to the index",
                },
                {
                    name: ["-n", "--dry-run"],
                    description: "Don't actually add the files(s), just show if they exist and/or will be ignored",
                },
                {
                    name: ["-p", "--patch"],
                    description: "Interactively choose hunks of patch between the index and the work tree and add them to the index",
                },
            ],
            args: {
                variadic: true,
                // We have a special setting for dot in the vuejs app
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
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
            name: "status",
            description: "Show the working tree status",
            options: [
                {
                    name: ["-v", "--verbose"],
                    description: "be verbose",
                },
                {
                    name: ["-b", "--branch"],
                    description: "show branch information",
                },
                {
                    name: "--show-stash",
                    description: "show stash information",
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
                        ],
                    },
                },
                {
                    name: "--ignored",
                    description: "show ignored files",
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
            name: "clean",
            description: "Shows which files would be removed from working directory",
            options: [
                {
                    name: "-n",
                    description: "Don’t actually remove anything, just show what would be done.",
                },
                {
                    name: ["-f", "--force"],
                    description: "If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f or -i.",
                },
            ],
            args: {
                name: "path",
                template: "filepaths",
            },
        },
        {
            name: "revert",
            description: "Create new commit that undoes all of the changes made in <commit>, then apply it to the current branch.",
            args: {
                name: "commit",
                generators: gitGenerators.commits,
            },
        },
        {
            name: "push",
            description: "Update remote refs",
            options: [
                {
                    name: "--all",
                    description: "Push all branches (i.e. refs under refs/heads/); cannot be used with other <refspec>.",
                },
                {
                    name: "--prune",
                    description: "Remove remote branches that don't have a local counterpart",
                },
                {
                    name: "--mirror",
                    description: "Instead of naming each ref to push, specifies that all refs under refs/ be mirrored to the remote repository.",
                },
                {
                    name: ["-n", "--dry-run"],
                    description: "Do everything except actually send the updates.",
                },
                {
                    name: "--porcelain",
                    description: "Produce machine-readable output. The output status line for each ref will be tab-separated and sent to stdout instead of stderr.",
                },
                {
                    name: ["-d", "--delete"],
                    description: "All listed refs are deleted from the remote repository. This is the same as prefixing all refs with a colon.",
                },
                {
                    name: "--tags",
                    description: "All refs under refs/tags are pushed, in addition to refspecs explicitly listed on the command line.",
                },
                {
                    name: "--follow-tags",
                    description: "Push all the refs that would be pushed without this option, and also push annotated tags in refs/tags that are missing from the remote but are pointing at commit-ish that are reachable from the refs being pushed. This can also be specified with configuration variable push.followTags",
                },
                {
                    name: "--signed",
                    description: "GPG-sign the push request to update refs on the receiving side, to allow it to be checked by the hooks and/or be logged. If false or --no-signed, no signing will be attempted. If true or --signed, the push will fail if the server does not support signed pushes. If set to if-asked, sign if and only if the server supports signed pushes. The push will also fail if the actual call to gpg --sign fails. See git-receive-pack(1) for the details on the receiving end.",
                    args: {
                        isOptional: true,
                        suggestions: ["true", "false", "if-asked"],
                    },
                },
                {
                    name: "--no-signed",
                    description: "GPG-sign the push request to update refs on the receiving side, to allow it to be checked by the hooks and/or be logged. If false or --no-signed, no signing will be attempted. If true or --signed, the push will fail if the server does not support signed pushes. If set to if-asked, sign if and only if the server supports signed pushes. The push will also fail if the actual call to gpg --sign fails. See git-receive-pack(1) for the details on the receiving end.",
                    args: {
                        isOptional: true,
                        suggestions: ["true", "false", "if-asked"],
                    },
                },
                {
                    name: "--atomic",
                    description: "Use an atomic transaction on the remote side if available. Either all refs are updated, or on error, no refs are updated. If the server does not support atomic pushes the push will fail.",
                },
                {
                    name: "--no-atomic",
                    description: "Use an atomic transaction on the remote side if available. Either all refs are updated, or on error, no refs are updated. If the server does not support atomic pushes the push will fail.",
                },
                {
                    name: ["-f", "--force"],
                    description: "Usually, the command refuses to update a remote ref that is not an ancestor of the local ref used to overwrite it. Also, when --force-with-lease option is used, the command refuses to update a remote ref whose current value does not match what is expected. This flag disables these checks, and can cause the remote repository to lose commits; use it with care.",
                },
                {
                    name: "--repo",
                    insertValue: "--repo=",
                    description: "This option is equivalent to the <repository> argument. If both are specified, the command-line argument takes precedence.",
                    args: {
                        name: "repository",
                    },
                },
                {
                    name: ["-u", "--set-upstream"],
                    description: "For every branch that is up to date or successfully pushed, add upstream (tracking) reference, used by argument-less git-pull(1) and other commands.",
                },
                {
                    name: "--thin",
                    description: "These options are passed to git-send-pack(1). A thin transfer significantly reduces the amount of sent data when the sender and receiver share many of the same objects in common. The default is --thin.",
                },
                {
                    name: "--no-thin",
                    description: "These options are passed to git-send-pack(1). A thin transfer significantly reduces the amount of sent data when the sender and receiver share many of the same objects in common. The default is --thin.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Suppress all output, including the listing of updated refs, unless an error occurs. Progress is not reported to the standard error stream.",
                },
                { name: ["-v", "--verbose"], description: "Run verbosely" },
                {
                    name: "--progress",
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified. This flag forces progress status even if the standard error stream is not directed to a terminal.",
                },
                {
                    name: "--no-recurse-submodules",
                    description: "May be used to make sure all submodule commits used by the revisions to be pushed are available on a remote-tracking branch. If check is used Git will verify that all submodule commits that changed in the revisions to be pushed are available on at least one remote of the submodule. If any commits are missing the push will be aborted and exit with non-zero status. If on-demand is used all submodules that changed in the revisions to be pushed will be pushed. If on-demand was not able to push all necessary revisions it will also be aborted and exit with non-zero status. If only is used all submodules will be recursively pushed while the superproject is left unpushed. A value of no or using --no-recurse-submodules can be used to override the push.recurseSubmodules configuration variable when no submodule recursion is required.",
                },
                {
                    name: "--recurse-submodules",
                    insertValue: "--recurse-submodules=",
                    description: "May be used to make sure all submodule commits used by the revisions to be pushed are available on a remote-tracking branch. If check is used Git will verify that all submodule commits that changed in the revisions to be pushed are available on at least one remote of the submodule. If any commits are missing the push will be aborted and exit with non-zero status. If on-demand is used all submodules that changed in the revisions to be pushed will be pushed. If on-demand was not able to push all necessary revisions it will also be aborted and exit with non-zero status. If only is used all submodules will be recursively pushed while the superproject is left unpushed. A value of no or using --no-recurse-submodules can be used to override the push.recurseSubmodules configuration variable when no submodule recursion is required.",
                    args: {
                        suggestions: ["check", "on-demand", "only", "no"],
                    },
                },
                {
                    name: "--verify",
                    description: "Turn on the pre-push hook. The default is --verify, giving the hook a chance to prevent the push. With",
                },
                {
                    name: "--no-verify",
                    description: "Turn off the pre-push hook. The default is --verify, giving the hook a chance to prevent the push. With",
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
                    name: ["-o", "--push-option"],
                    description: "Transmit the given string to the server, which passes them to the pre-receive as well as the post-receive hook. The given string must not contain a NUL or LF character. When multiple --push-option=<option> are given, they are all sent to the other side in the order listed on the command line. When no --push-option=<option> is given from the command line, the values of configuration variable push.pushOption are used instead.",
                    args: {
                        name: "option",
                    },
                },
                {
                    name: ["--receive-pack", "--exec"],
                    description: "Path to the git-receive-pack program on the remote end. Sometimes useful when pushing to a remote repository over ssh, and you do not have the program in a directory on the default $PATH.",
                    args: {
                        name: "git-receive-pack",
                    },
                },
                {
                    name: "--no-force-with-lease",
                    description: "Cancel all the previous --force-with-lease on the command line.",
                },
                {
                    name: "-force-with-lease",
                    description: "protect the named ref (alone), if it is going to be updated, by requiring its current value to be the same as the specified value <expect> (which is allowed to be different from the remote-tracking branch we have for the refname, or we do not even have to have such a remote-tracking branch when this form is used). If <expect> is the empty string, then the named ref must not already exist.",
                    args: {
                        name: "refname[:expect]",
                        isOptional: true,
                    },
                },
            ],
<<<<<<< HEAD
          },
        },
        {
<<<<<<< HEAD
            name: "checkout",
            description: "Switch branches or restore working tree files",
            options: [
                { name: ["-q", "--quiet"],
                    description: "Quiet, suppress feedback messages.",
                },
                { name: ["--progress"],
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless --quiet is specified. This flag enables progress reporting even if not attached to a terminal, regardless of --quiet.",
                },
                { name: ["--no-progress"],
                    description: "Disable progress status reporting",
                },
                { name: ["-f", "--force"],
                    description: "When switching branches, proceed even if the index or the working tree differs from HEAD. This is used to throw away local changes.",
                },
                { name: ['-2', "--ours"],
                    description: "When checking out paths from the index, check out stage #2 (ours) for unmerged paths.",
                },
                { name: ["-3", "--theirs"],
                    description: "When checking out paths from the index, check out stage #3 (theirs) for unmerged paths.",
                },
                { name: ["-b"],
                    description: "Create a new branch named <new_branch> and start it at <start_point>; see git-branch[1] for details.",
                    args: {
                        name: "New Branch"
                    }
                },
                { name: ["-B"],
                    description: "Creates the branch <new_branch> and start it at <start_point>; if it already exists, then reset it to <start_point>. This is equivalent to running 'git branch' with '-f'; see git-branch[1] for details.",
                    args: {
                        name: "New Branch"
                    }
                },
                { name: ["-t", "--track"],
                    description: "When creating a new branch, set up 'upstream' configuration.",
                },
                { name: ["--no-track"],
                    description: "Do not set up 'upstream' configuration, even if the branch.autoSetupMerge configuration variable is true.",
                },
                { name: ["--guess"],
                    description: "If <branch> is not found but there does exist a tracking branch in exactly one remote (call it <remote>) with a matching name, treat as equivalent to $ git checkout -b <branch> --track <remote>/<branch>",
                },
                { name: ["--no-guess"],
                    description: "Disable --guess",
                },
                { name: ["-l"],
                    description: "Create the new branch’s reflog; see git-branch[1] for details.",
                },
                { name: ["-d", "--detach"],
                    description: "Rather than checking out a branch to work on it, check out a commit for inspection and discardable experiments. This is the default behavior of git checkout <commit> when <commit> is not a branch name.",
                },
                { name: ["--orphan"],
                    description: "Create a new orphan branch, named <new_branch>, started from <start_point> and switch to it.",
                    args: {
                        name: "New Branch"
                    }
                },
                { name: ["--ignore-skip-worktree-bits"],
                    description: "In sparse checkout mode, git checkout -- <paths> would update only entries matched by <paths> and sparse patterns in $GIT_DIR/info/sparse-checkout. This option ignores the sparse patterns and adds back any files in <paths>.",
                },
                { name: ["-m", "--merge"],
                    description: "When switching branches, if you have local modifications to one or more files that are different between the current branch and the branch to which you are switching, the command refuses to switch branches in order to preserve your modifications in context. ",
                },
                { name: ["--conflict"],
                    description: "The same as --merge option above, but changes the way the conflicting hunks are presented, overriding the merge.conflictStyle configuration variable. Possible values are 'merge' (default) and 'diff3' (in addition to what is shown by 'merge' style, shows the original contents).",
                    insertValue: "--conflict=",
                    args: {
                        isOptional: true,
                        suggestions: [
                            "merge",
                            "diff3"
                        ]
                    }
                },
                { name: ["-p", "--patch"],
                    description: "Interactively select hunks in the difference between the <tree-ish> (or the index, if unspecified) and the working tree.",
                },
                { name: ["--ignore-other-worktrees"],
                    description: "git checkout refuses when the wanted ref is already checked out by another worktree. This option makes it check the ref out anyway. In other words, the ref can be held by more than one worktree.",
                },
                { name: ["--overwrite-ignore"],
                    description: "Silently overwrite ignored files when switching branches. This is the default behavior. ",
                },
                { name: ["--no-overwrite-ignore"],
                    description: "Use --no-overwrite-ignore to abort the operation when the new branch contains ignored files.",
                },
                { name: ["--recurse-submodules"],
                    description: "Using --recurse-submodules will update the content of all active submodules according to the commit recorded in the superproject. If local modifications in a submodule would be overwritten the checkout will fail unless -f is used. If nothing (or --no-recurse-submodules) is used, submodules working trees will not be updated. Just like git-submodule[1], this will detach HEAD of the submodule.",
                },
                { name: ["--no-recurse-submodules"],
                    description: "Submodules working trees will not be updated",
                },
                { name: ["--overlay "],
                    description: "In the default overlay mode, git checkout never removes files from the index or the working tree.",
                },
                { name: ["--no-overlay"],
                    description: "When specifying --no-overlay, files that appear in the index and working tree, but not in <tree-ish> are removed, to make them match <tree-ish> exactly.",
                },
                { name: ["--pathspec-from-file"],
                    description: "Pathspec is passed in <file> instead of commandline args. ",
                    args: {
                        name: "file",
                        template: "filepaths"
                    }
                },
                { name: ["--pathspec-file-nul"],
                    description: "Only meaningful with --pathspec-from-file.",
                },
            ],
            args: [
                {
                    name: "branch or commit",
                    description: "branch or commit to switch to",
                    isOptional: true,
                    generators: gitGenerators.branches,
                    suggestions: [
                        {
                            name: "-",
                            description: "switch to the last used branch",
                            icon: "fig://icon?type=git",
                        },
                    ],
                },
                {
                    name: "pathspec",
                    description: "Limits the paths affected by the operation.",
                    isOptional: true,
                    variadic: true,
                    template: "filepaths"
                }
            ],
=======
          name: "--ignored",
          description: "show ignored files",
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
            ],
          },
>>>>>>> 880aa33... feat: update prettierignore
        },
        {
          name: "--no-renames",
          description: "do not detect renames",
        },
      ],
    },
    {
      name: "clean",
      description: "Shows which files would be removed from working directory",
      options: [
        {
          name: "-n",
          description:
            "Don’t actually remove anything, just show what would be done.",
        },
        {
          name: ["-f", "--force"],
          description:
            "If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f or -i.",
        },
      ],
      args: {
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "revert",
      description:
        "Create new commit that undoes all of the changes made in <commit>, then apply it to the current branch.",
      args: {
        name: "commit",
        generators: gitGenerators.commits,
      },
    },
    {
      name: "push",
      description: "Update remote refs",
      options: [
        {
          name: "--all",
          description:
            "Push all branches (i.e. refs under refs/heads/); cannot be used with other <refspec>.",
        },
        {
          name: "--prune",
          description:
            "Remove remote branches that don't have a local counterpart",
        },
        {
          name: "--mirror",
          description:
            "Instead of naming each ref to push, specifies that all refs under refs/ be mirrored to the remote repository.",
        },
        {
          name: ["-n", "--dry-run"],
          description: "Do everything except actually send the updates.",
        },
        {
          name: "--porcelain",
          description:
            "Produce machine-readable output. The output status line for each ref will be tab-separated and sent to stdout instead of stderr.",
        },
        {
          name: ["-d", "--delete"],
          description:
            "All listed refs are deleted from the remote repository. This is the same as prefixing all refs with a colon.",
        },
        {
          name: "--tags",
          description:
            "All refs under refs/tags are pushed, in addition to refspecs explicitly listed on the command line.",
        },
        {
          name: "--follow-tags",
          description:
            "Push all the refs that would be pushed without this option, and also push annotated tags in refs/tags that are missing from the remote but are pointing at commit-ish that are reachable from the refs being pushed. This can also be specified with configuration variable push.followTags",
        },
        {
          name: "--signed",
          description:
            "GPG-sign the push request to update refs on the receiving side, to allow it to be checked by the hooks and/or be logged. If false or --no-signed, no signing will be attempted. If true or --signed, the push will fail if the server does not support signed pushes. If set to if-asked, sign if and only if the server supports signed pushes. The push will also fail if the actual call to gpg --sign fails. See git-receive-pack(1) for the details on the receiving end.",
          args: {
            isOptional: true,
            suggestions: ["true", "false", "if-asked"],
          },
        },
        {
          name: "--no-signed",
          description:
            "GPG-sign the push request to update refs on the receiving side, to allow it to be checked by the hooks and/or be logged. If false or --no-signed, no signing will be attempted. If true or --signed, the push will fail if the server does not support signed pushes. If set to if-asked, sign if and only if the server supports signed pushes. The push will also fail if the actual call to gpg --sign fails. See git-receive-pack(1) for the details on the receiving end.",
          args: {
            isOptional: true,
            suggestions: ["true", "false", "if-asked"],
          },
        },
        {
          name: "--atomic",
          description:
            "Use an atomic transaction on the remote side if available. Either all refs are updated, or on error, no refs are updated. If the server does not support atomic pushes the push will fail.",
        },
        {
          name: "--no-atomic",
          description:
            "Use an atomic transaction on the remote side if available. Either all refs are updated, or on error, no refs are updated. If the server does not support atomic pushes the push will fail.",
        },
        {
          name: ["-f", "--force"],
          description:
            "Usually, the command refuses to update a remote ref that is not an ancestor of the local ref used to overwrite it. Also, when --force-with-lease option is used, the command refuses to update a remote ref whose current value does not match what is expected. This flag disables these checks, and can cause the remote repository to lose commits; use it with care.",
        },
        {
          name: "--repo",
          insertValue: "--repo=",
          description:
            "This option is equivalent to the <repository> argument. If both are specified, the command-line argument takes precedence.",
          args: {
            name: "repository",
          },
        },
        {
          name: ["-u", "--set-upstream"],
          description:
            "For every branch that is up to date or successfully pushed, add upstream (tracking) reference, used by argument-less git-pull(1) and other commands.",
        },
        {
          name: "--thin",
          description:
            "These options are passed to git-send-pack(1). A thin transfer significantly reduces the amount of sent data when the sender and receiver share many of the same objects in common. The default is --thin.",
        },
        {
          name: "--no-thin",
          description:
            "These options are passed to git-send-pack(1). A thin transfer significantly reduces the amount of sent data when the sender and receiver share many of the same objects in common. The default is --thin.",
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Suppress all output, including the listing of updated refs, unless an error occurs. Progress is not reported to the standard error stream.",
        },
        { name: ["-v", "--verbose"], description: "Run verbosely" },
        {
          name: "--progress",
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified. This flag forces progress status even if the standard error stream is not directed to a terminal.",
        },
        {
          name: "--no-recurse-submodules",
          description:
            "May be used to make sure all submodule commits used by the revisions to be pushed are available on a remote-tracking branch. If check is used Git will verify that all submodule commits that changed in the revisions to be pushed are available on at least one remote of the submodule. If any commits are missing the push will be aborted and exit with non-zero status. If on-demand is used all submodules that changed in the revisions to be pushed will be pushed. If on-demand was not able to push all necessary revisions it will also be aborted and exit with non-zero status. If only is used all submodules will be recursively pushed while the superproject is left unpushed. A value of no or using --no-recurse-submodules can be used to override the push.recurseSubmodules configuration variable when no submodule recursion is required.",
        },
        {
          name: "--recurse-submodules",
          insertValue: "--recurse-submodules=",
          description:
            "May be used to make sure all submodule commits used by the revisions to be pushed are available on a remote-tracking branch. If check is used Git will verify that all submodule commits that changed in the revisions to be pushed are available on at least one remote of the submodule. If any commits are missing the push will be aborted and exit with non-zero status. If on-demand is used all submodules that changed in the revisions to be pushed will be pushed. If on-demand was not able to push all necessary revisions it will also be aborted and exit with non-zero status. If only is used all submodules will be recursively pushed while the superproject is left unpushed. A value of no or using --no-recurse-submodules can be used to override the push.recurseSubmodules configuration variable when no submodule recursion is required.",
          args: {
            suggestions: ["check", "on-demand", "only", "no"],
          },
        },
        {
          name: "--verify",
          description:
            "Turn on the pre-push hook. The default is --verify, giving the hook a chance to prevent the push. With",
        },
        {
          name: "--no-verify",
          description:
            "Turn off the pre-push hook. The default is --verify, giving the hook a chance to prevent the push. With",
=======
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
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
            name: "pull",
            description: "Integrate with another repository",
            options: [
                {
                    name: "--rebase",
                    description: "Fetch the remote’s copy of current branch and rebases it into the local copy.",
                    args: {
                        name: "remote",
                        generators: gitGenerators.remotes,
                    },
                },
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
            name: "diff",
            description: "Show changes between commits, commit and working tree, etc",
            options: [
                {
                    name: "--staged",
                    insertValue: "--staged",
                    description: "Show difference between the files in the staging area and the latest version",
                },
                {
                    name: "--cached",
                    description: "Show difference between staged changes and last commit",
                },
            ],
            args: {
                name: "commit",
                isOptional: true,
                suggestions: [{ name: "HEAD" }],
                generators: gitGenerators.commits,
            },
        },
        {
            name: "reset",
            description: "Reset current HEAD to the specified state",
            options: [
                {
                    name: "--keep",
                    insertValue: "--keep {cursor}",
                    description: "Safe: files which are different between the current HEAD and the given commit. Will abort if there are uncommitted changes",
                    args: {
                        variadic: true,
                        suggestions: [head],
                        generators: gitGenerators.commits,
                    },
                },
                {
                    name: "--soft",
                    insertValue: "--soft {cursor}",
                    description: "remove the last commit from the current branch, but the file changes will stay in your working tree",
                    args: {
                        suggestions: [head],
                        generators: gitGenerators.commits,
                    },
                },
                {
                    name: "--hard",
                    insertValue: "--hard {cursor}",
                    description: "⚠️WARNING: you will lose all uncommitted changes in addition to the changes introduced in the last commit",
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
                    name: "--mixed",
                    insertValue: "--mixed {cursor}",
                    description: "keep the changes in your working tree but not on the index",
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
                    description: "Resets the index and updates the files in the working tree that are different" +
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
                    description: "show each commit as a single line",
                },
                {
                    name: "--p",
                    description: "display the full diff of each commit",
                },
                {
                    name: "--stat",
                    description: "Include which files were altered and the relative number of lines that were added or deleted from each of them.",
                },
                {
                    name: "--grep",
                    description: "Search for commits with a commit message that matches <pattern>",
                    insertValue: "--grep=",
                    args: {
                        name: "pattern",
                    },
                },
                {
                    name: "--author",
                    description: "Search for commits by a particular author.",
                    insertValue: "--author=",
                    args: {
                        name: "pattern",
                    },
                },
                {
                    name: "--source",
                    description: "show source",
                },
                {
                    name: "--oneline",
                    description: "show each commit as a single line",
                },
            ],
            args: [
                {
                    name: "since",
                    description: "commit ID, branch name, HEAD, or revision reference",
                    generators: gitGenerators.commits,
                    suggestions: [{ name: "HEAD" }],
                },
                {
                    name: "until",
                    description: "commit ID, branch name, HEAD, or revision reference",
                    generators: gitGenerators.commits,
                    suggestions: [{ name: "HEAD" }],
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
                    args: {
                        name: "remote",
                        generators: gitGenerators.remotes,
                    },
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
                    description: "Equivalent to git fetch --prune [name], except that no new references will be fetched",
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
                    description: "Append ref names and object names of fetched refs to the existing contents of .git/FETCH_HEAD",
                },
                {
                    name: ["--atomic"],
                    description: "Use an atomic transaction to update local refs. Either all refs are updated, or on error, no refs are updated.",
                },
                {
                    name: ["--depth"],
                    insertValue: "--depth {cursor}",
                    args: {
                        name: "depth",
                    },
                    description: "Limit fetching to the specified number of commits from the tip of each remote branch history",
                },
                {
                    name: ["--deepen"],
                    insertValue: "--deepen {cursor}",
                    args: {
                        name: "depth",
                    },
                    description: "Similar to --depth, except it specifies the number of commits from the current shallow boundary instead of from the tip of each remote branch history",
                },
                {
                    name: ["--shallow-since"],
                    insertValue: "--shallow-since {cursor}",
                    args: {
                        name: "date",
                    },
                    description: "Deepen or shorten the history of a shallow repository to include all reachable commits after <date>",
                },
                {
                    name: ["--shallow-exclude"],
                    insertValue: "--shallow-exclude {cursor}",
                    args: {
                        name: "revision",
                    },
                    description: "Deepen or shorten the history of a shallow repository to exclude commits reachable from a specified remote branch or tag. This option can be specified multiple times",
                },
                {
                    name: ["--unshallow"],
                    description: "If the source repository is shallow, fetch as much as possible so that the current repository has the same history as the source repository",
                },
                {
                    name: ["--update-shallow"],
                    description: "By default when fetching from a shallow repository, git fetch refuses refs that require updating .git/shallow",
                },
                {
                    name: ["--negotiation-tip"],
                    insertValue: "--negotiation-tip ",
                    args: {
                        name: "commit|glob",
                        generators: gitGenerators.commits,
                    },
                    description: "By default, Git will report, to the server, commits reachable from all local refs to find common commits in an attempt to reduce the size of the to-be-received packfile",
                },
                {
                    name: ["--dry-run"],
                    description: "Show what would be done, without making any changes.",
                },
                {
                    name: ["--write-fetch-head"],
                    description: "Write the list of remote refs fetched in the FETCH_HEAD file directly under $GIT_DIR. This is the default",
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
                    description: "Allow several <repository> and <group> arguments to be specified. No <refspec>s may be specified.",
                },
                {
                    name: ["--auto-maintenance", "--auto-gc"],
                    description: "Run git maintenance run --auto at the end to perform automatic repository maintenance if",
                },
                {
                    name: ["--no-auto-maintenance", "--no-auto-gc"],
                    description: "Don't run git maintenance run --auto at the end to perform automatic repository maintenance",
                },
                {
                    name: ["--write-commit-graph"],
                    description: "Write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
                },
                {
                    name: ["--no-write-commit-graph"],
                    description: "Don't write a commit-graph after fetching. This overrides the config setting fetch.writeCommitGraph",
                },
                {
                    name: ["-p", "--prune"],
                    description: "Before fetching, remove any remote-tracking references that no longer exist on the remote",
                },
                {
                    name: ["-P", "--prune-tags"],
                    description: "Before fetching, remove any local tags that no longer exist on the remote if --prune is enabled",
                },
                {
                    name: ["-n", "--no-tags"],
                    description: "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
                },
                {
                    name: ["--refmap"],
                    insertValue: "--refmap {cursor}",
                    args: {
                        name: "refspec",
                    },
                    description: "When fetching refs listed on the command line, use the specified refspec (can be given more than once) to map the refs to remote-tracking branches, instead of the values of remote.*.fetch configuration variables for the remote repository",
                },
                {
                    name: ["-t", "--tags"],
                    description: "By default, tags that point at objects that are downloaded from the remote repository are fetched and stored locally. This option disables this automatic tag following",
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
                    description: "Number of parallel children to be used for all forms of fetching.",
                },
                {
                    name: ["--no-recurse-submodules"],
                    description: "Disable recursive fetching of submodules (this has the same effect as using the --recurse-submodules=no option).",
                },
                {
                    name: ["--set-upstream"],
                    description: "If the remote is fetched successfully, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands.",
                },
                {
                    name: ["--submodule-prefix"],
                    insertValue: "--submodule-prefix {cursor}",
                    args: {
                        name: "path",
                    },
                    description: 'Prepend <path> to paths printed in informative messages such as ”Fetching submodule foo". This option is used internally when recursing over submodules.',
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
                    description: "By default git fetch refuses to update the head which corresponds to the current branch. This flag disables the check. This is purely for the internal use for git pull to communicate with git fetch, and unless you are implementing your own Porcelain you are not supposed to use it.",
                },
                {
                    name: ["--upload-pack"],
                    insertValue: "--upload-pack {cursor}",
                    args: {
                        name: "upload-pack",
                    },
                    description: "When given, and the repository to fetch from is handled by git fetch-pack, --exec=<upload-pack> is passed to the command to specify non-default path for the command run on the other end.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Pass --quiet to git-fetch-pack and silence any other internally used git commands. Progress is not reported to the standard error stream.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Be verbose.",
                },
                {
                    name: ["--progress"],
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless -q is specified.",
                },
                {
                    name: ["-o", "--server-option"],
                    args: {
                        name: "option",
                    },
                    description: "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. ",
                },
                {
                    name: ["--show-forced-updates"],
                    description: "By default, git checks if a branch is force-updated during fetch. This can be disabled through fetch.showForcedUpdates, but the --show-forced-updates option guarantees this check occurs",
                },
                {
                    name: ["--no-show-forced-updates"],
                    description: "By default, git checks if a branch is force-updated during fetch. Pass --no-show-forced-updates or set fetch.showForcedUpdates to false to skip this check for performance reasons.",
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
                    description: 'Read refspecs, one per line, from stdin in addition to those provided as arguments. The "tag <name>" format is not supported',
                },
            ],
        },
        {
            name: "stash",
            description: "temporarily stores all the modified tracked files",
            subcommands: [
                {
                    name: "push",
                    description: "Save your local modifications to a new stash entry and roll them back to HEAD.",
                    insertValue: "push {cursor}",
                    options: [
                        {
                            name: ["-p", "--patch"],
                            description: "Interactively select hunks from the diff between HEAD and the working tree to be stashed.",
                        },
                        {
                            name: ["-k", "--keep-index"],
                            description: "All changed already added to the index are left intact.",
                        },
                        {
                            name: ["-u", "--include-untracked"],
                            description: "All untracked files are also stashed and then cleaned up.",
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
                        { name: "--pathspec-from-file", description: "" },
                        {
                            name: "--",
                            description: "Separates pathsec from options for disambiguation purposes.",
                        },
                        // TODO: pathspec
                    ],
                },
                {
                    name: "show",
                    description: "Show the changes recorded in the stash entry as a diff.",
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
                            description: "Interactively select hunks from the diff between HEAD and the working tree to be stashed.",
                        },
                        {
                            name: ["-k", "--keep-index"],
                            description: "All changed already added to the index are left intact.",
                        },
                        {
                            name: ["-u", "--include-untracked"],
                            description: "All untracked files are also stashed and then cleaned up.",
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
                    name: "pop",
                    description: "Restores the most recently stashed files",
                    insertValue: "pop {cursor}",
                    options: [
                        {
                            name: "--index",
                            description: "Tries to reinstate not only the working tree's changes, but also the index's ones.",
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
                    name: "clear",
                    description: " Remove all the stash entries.",
                    insertValue: "clear",
                },
                {
                    name: "apply",
                    description: "Like pop, but do not remove the state from the stash list.",
                    options: [
                        {
                            name: "--index",
                            description: "Tries to reinstate not only the working tree's changes, but also the index's ones.",
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
                    description: "Store a given stash in the stash ref., updating the staft reflog.",
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
        {
            name: "reflog",
            description: "Show history of events with hashes",
            options: [
                {
                    name: "--relative-date",
                    description: "show date info",
                },
                {
                    name: "--all",
                    description: "show all refs",
                },
            ],
        },
        {
            name: "clone",
            description: "Clone a repository into a new directory",
            args: [
                { name: "repository" },
                { name: "directory", template: "filepaths" },
            ],
            options: [
                {
                    name: ["-l", "--local"],
                    description: "Bypasses the normal git aware transport mechanism",
                },
                {
                    name: ["-s", "--shared"],
                    description: "Automatically setup .git/objects/info/alternates to share the objects with the source repository",
                },
                {
                    name: ["-n", "--dry-run"],
                    description: "Do nothing; only show what would happen",
                },
                {
                    name: ["--reference"],
                    description: "If the reference repository is on the local machine, automatically setup",
                    args: {
                        name: "repository",
                    },
                },
                {
                    name: "--dissociate",
                    description: "Borrow the objects from reference repositories specified with the --reference options only to reduce network transfer, and stop borrowing from them after a clone is made by making necessary local copies of borrowed objects.",
                },
                {
                    name: ["-q", "--quiet"],
                    description: "Operate quietly. Progress is not reported to the standard error stream.",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Run verbosely. Does not affect the reporting of progress status to the standard error stream.",
                },
                {
                    name: ["--progress"],
                    description: "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless --quiet is specified. This flag forces progress status even if the standard error stream is not directed to a terminal.",
                },
                {
                    name: "--server-option",
                    description: "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. The server’s handling of server options, including unknown ones, is server-specific. When multiple --server-option=<option> are given, they are all sent to the other side in the order listed on the command line.",
                },
                {
                    name: ["-n", "--no-checkout"],
                    description: "No checkout of HEAD is performed after the clone is complete.",
                },
                {
                    name: "--bare",
                    description: "Make a bare Git repository. That is, instead of creating <directory> and placing the administrative files in <directory>/.git, make the <directory> itself the $GIT_DIR. This obviously implies the --no-checkout because there is nowhere to check out the working tree. Also the branch heads at the remote are copied directly to corresponding local branch heads, without mapping them to refs/remotes/origin/. When this option is used, neither remote-tracking branches nor the related configuration variables are created.",
                },
                {
                    name: "--sparse",
                    description: "Initialize the sparse-checkout file so the working directory starts with only the files in the root of the repository. The sparse-checkout file can be modified to grow the working directory as needed.",
                },
                {
                    name: "--filter",
                    description: "Use the partial clone feature and request that the server sends a subset of reachable objects according to a given object filter. When using --filter, the supplied <filter-spec> is used for the partial clone filter. For example, --filter=blob:none will filter out all blobs (file contents) until needed by Git. Also, --filter=blob:limit=<size> will filter out all blobs of size at least <size>. For more details on filter specifications, see the --filter option in git-rev-list[1].",
                    insertValue: "--filter=",
                    args: { name: "filter spec" },
                },
                {
                    name: "--mirror",
                    description: "Set up a mirror of the source repository. This implies --bare. Compared to --bare, --mirror not only maps local branches of the source to local branches of the target, it maps all refs (including remote-tracking branches, notes etc.) and sets up a refspec configuration such that all these refs are overwritten by a git remote update in the target repository.",
                },
                {
                    name: ["-o", "--origin"],
                    description: "Instead of using the remote name origin to keep track of the upstream repository, use <name>. Overrides clone.defaultRemoteName from the config.",
                    args: { name: "name" },
                },
                {
                    name: ["-b", "--branch"],
                    description: "Instead of pointing the newly created HEAD to the branch pointed to by the cloned repository’s HEAD, point to <name> branch instead. In a non-bare repository, this is the branch that will be checked out. --branch can also take tags and detaches the HEAD at that commit in the resulting repository.",
                    args: { name: "branch name" },
                },
                {
                    name: ["-u", "--upload-pack"],
                    description: "When given, and the repository to clone from is accessed via ssh, this specifies a non-default path for the command run on the other end.",
                    args: {
                        name: "upload pack",
                    },
                },
                {
                    name: "--template",
                    description: "Specify the directory from which templates will be used",
                    insertValue: "--template=",
                    args: {
                        name: "template directory",
                    },
                },
                {
                    name: "--depth",
                    description: "Create a shallow clone with a history truncated to the specified number of commits. Implies --single-branch unless --no-single-branch is given to fetch the histories near the tips of all branches. If you want to clone submodules shallowly, also pass --shallow-submodules.",
                    args: {
                        name: "date",
                    },
                },
                {
                    name: "--shallow-since",
                    description: "Create a shallow clone with a history after the specified time.",
                    insertValue: "--shallow-since=",
                    args: {
                        name: "date",
                    },
                },
                {
                    name: "--shallow-exclude",
                    description: "Create a shallow clone with a history, excluding commits reachable from a specified remote branch or tag. This option can be specified multiple times.",
                    insertValue: "--shallow-exclude=",
                    args: {
                        name: "revision",
                    },
                },
                {
                    name: "--single-branch",
                    description: "Clone only the history leading to the tip of a single branch, either specified by the --branch option or the primary branch remote’s HEAD points at. Further fetches into the resulting repository will only update the remote-tracking branch for the branch this option was used for the initial cloning. If the HEAD at the remote did not point at any branch when --single-branch clone was made, no remote-tracking branch is created.",
                },
                {
                    name: "--no-tags",
                    description: "Don’t clone any tags, and set remote.<remote>.tagOpt=--no-tags in the config, ensuring that future git pull and git fetch operations won’t follow any tags. Subsequent explicit tag fetches will still work, (see git-fetch[1]).",
                },
                {
                    name: "--recurse-submodules",
                    description: "After the clone is created, initialize and clone submodules within based on the provided pathspec. If no pathspec is provided, all submodules are initialized and cloned. This option can be given multiple times for pathspecs consisting of multiple entries.",
                    insertValue: "--recurse-submodules=",
                    args: {
                        name: "pathspec",
                    },
                },
                {
                    name: "--shallow-submodules",
                    description: "All submodules which are cloned will be shallow with a depth of 1.",
                },
                {
                    name: "--remote-submodules",
                    description: "All submodules which are cloned will use the status of the submodule’s remote-tracking branch to update the submodule, rather than the superproject’s recorded SHA-1. Equivalent to passing --remote to git submodule update.",
                },
                {
                    name: "--separate-git-dir",
                    description: "Instead of placing the cloned repository where it is supposed to be, place the cloned repository at the specified directory, then make a filesystem-agnostic Git symbolic link to there. The result is Git repository can be separated from working tree.",
                    insertValue: "--separate-git-dir=",
                    args: {
                        name: "git dir",
                    },
                },
            ],
        },
        {
            name: "init",
            description: "Create an empty Git repository or reinitialize an existing one",
            args: {
                name: "directory",
            },
            options: [
                {
                    name: ["-q", "--quiet"],
                    description: "Only print error and warning messages",
                },
                {
                    name: ["--bare"],
                    description: "Create a bare repository",
                },
                {
                    name: ["--object-format="],
                    description: "Specify the given object format",
                    args: {
                        name: "format",
                    },
                },
                {
                    name: "separate-git-dir",
                    description: "C",
                    args: {
                        name: "git dir",
                    },
                },
                {
                    name: ["-b", "--initial-branch"],
                    description: "initial branch for new repo",
                    args: {
                        name: "branch",
                    },
                },
                {
                    name: ["--shared"],
                    args: {
                        suggestions: [
                            {
                                name: "false",
                            },
                            {
                                name: "true",
                            },
                            {
                                name: "umask",
                            },
                            {
                                name: "group",
                            },
                            {
                                name: "all",
                            },
                            {
                                name: "world",
                            },
                            {
                                name: "everybody",
                            },
                            {
                                name: "0xxx",
                            },
                        ],
                    },
                },
            ],
        },
        {
            name: "mv",
            description: "Move or rename a file, a directory, or a symlink",
            args: [
                {
                    name: "source",
                    description: "file to move",
                    template: "filepaths",
                },
                {
                    name: "destination",
                    description: "location to move to",
                    template: "folders",
                },
            ],
            options: [
                {
                    name: ["-f", "--force"],
                    description: "Force renaming or moving of a file even if the target exists",
                },
                {
                    name: ["-k"],
                    description: "Skip move or rename actions which would lead to an error condition",
                },
                {
                    name: ["-n", "--dry-run"],
                    description: "Do nothing; only show what would happen",
                },
                {
                    name: ["-v", "--verbose"],
                    description: "Report the names of files as they are moved.",
                },
            ],
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
                    description: "used to separate command-line options from the list of files",
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
            args: {
                name: "branch",
                description: "branch to switch to",
                isOptional: true,
                generators: gitGenerators.branches,
                suggestions: [
                    {
                        name: "-",
                        description: "switch to the last used branch",
                        icon: "fig://icon?type=git",
                    },
                ],
            },
        },
        {
            name: "merge",
            description: "Join two or more development histories together",
            args: {
                name: "branch",
                generators: gitGenerators.branches,
            },
            options: [
                {
                    name: "--no-ff",
                    description: "Merge with a nicer branch history",
                },
            ],
        },
        {
            name: "mergetool",
            description: "Open the git tool to fix conflicts",
        },
        {
            name: "tag",
            description: "Create, list, delete or verify a tag object signed with GPG",
            options: [
                { name: ["-l", "--list"], description: "list tag names" },
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
<<<<<<< HEAD
<<<<<<< HEAD
    ],
    additionalSuggestions: [
        {
            name: "commit -m 'msg'",
            description: "Git commit shortcut",
            insertValue: "commit -m '{cursor}'",
            icon: "fig://template?color=2ecc71&badge=🔥",
            // type: "shortcut",
        },
    ],
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======

>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======

>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
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
          description: "show each commit as a single line",
        },
        {
          name: "--p",
          description: "display the full diff of each commit",
        },
        {
          name: "--stat",
          description:
            "Include which files were altered and the relative number of lines that were added or deleted from each of them.",
        },
        {
          name: "--grep",
          description:
            "Search for commits with a commit message that matches <pattern>",
          insertValue: "--grep=",
          args: {
            name: "pattern",
          },
        },
        {
          name: "--author",
          description: "Search for commits by a particular author.",
          insertValue: "--author=",
          args: {
            name: "pattern",
          },
        },
        {
          name: "--source",
          description: "show source",
        },
        {
          name: "--oneline",
          description: "show each commit as a single line",
        },
      ],
      args: [
        {
          name: "since",
          description: "commit ID, branch name, HEAD, or revision reference",
          generators: gitGenerators.commits,
          suggestions: [{ name: "HEAD" }],
        },
        {
          name: "until",
          description: "commit ID, branch name, HEAD, or revision reference",
          generators: gitGenerators.commits,
          suggestions: [{ name: "HEAD" }],
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
          args: {
            name: "remote",
            generators: gitGenerators.remotes,
          },
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
          name: "push",
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
            { name: "--pathspec-from-file", description: "" },
            {
              name: "--",
              description:
                "Separates pathsec from options for disambiguation purposes.",
            },
            // TODO: pathspec
          ],
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
          name: "pop",
          description: "Restores the most recently stashed files",
          insertValue: "pop {cursor}",
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
          name: "clear",
          description: " Remove all the stash entries.",
          insertValue: "clear",
        },
        {
          name: "apply",
          description:
            "Like pop, but do not remove the state from the stash list.",
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
    {
      name: "reflog",
      description: "Show history of events with hashes",
      options: [
        {
          name: "--relative-date",
          description: "show date info",
        },
        {
          name: "--all",
          description: "show all refs",
        },
      ],
    },
    {
      name: "clone",
      description: "Clone a repository into a new directory",
      args: [
        { name: "repository" },
        { name: "directory", template: "filepaths" },
      ],
      options: [
        {
          name: ["-l", "--local"],
          description: "Bypasses the normal git aware transport mechanism",
        },
        {
          name: ["-s", "--shared"],
          description:
            "Automatically setup .git/objects/info/alternates to share the objects with the source repository",
        },
        {
          name: ["-n", "--dry-run"],
          description: "Do nothing; only show what would happen",
        },
        {
          name: ["--reference"],
          description:
            "If the reference repository is on the local machine, automatically setup",
          args: {
            name: "repository",
          },
        },
        {
          name: "--dissociate",
          description:
            "Borrow the objects from reference repositories specified with the --reference options only to reduce network transfer, and stop borrowing from them after a clone is made by making necessary local copies of borrowed objects.",
        },
        {
          name: ["-q", "--quiet"],
          description:
            "Operate quietly. Progress is not reported to the standard error stream.",
        },
        {
          name: ["-v", "--verbose"],
          description:
            "Run verbosely. Does not affect the reporting of progress status to the standard error stream.",
        },
        {
          name: ["--progress"],
          description:
            "Progress status is reported on the standard error stream by default when it is attached to a terminal, unless --quiet is specified. This flag forces progress status even if the standard error stream is not directed to a terminal.",
        },
        {
          name: "--server-option",
          description:
            "Transmit the given string to the server when communicating using protocol version 2. The given string must not contain a NUL or LF character. The server’s handling of server options, including unknown ones, is server-specific. When multiple --server-option=<option> are given, they are all sent to the other side in the order listed on the command line.",
        },
        {
          name: ["-n", "--no-checkout"],
          description:
            "No checkout of HEAD is performed after the clone is complete.",
        },
        {
          name: "--bare",
          description:
            "Make a bare Git repository. That is, instead of creating <directory> and placing the administrative files in <directory>/.git, make the <directory> itself the $GIT_DIR. This obviously implies the --no-checkout because there is nowhere to check out the working tree. Also the branch heads at the remote are copied directly to corresponding local branch heads, without mapping them to refs/remotes/origin/. When this option is used, neither remote-tracking branches nor the related configuration variables are created.",
        },
        {
          name: "--sparse",
          description:
            "Initialize the sparse-checkout file so the working directory starts with only the files in the root of the repository. The sparse-checkout file can be modified to grow the working directory as needed.",
        },
        {
          name: "--filter",
          description:
            "Use the partial clone feature and request that the server sends a subset of reachable objects according to a given object filter. When using --filter, the supplied <filter-spec> is used for the partial clone filter. For example, --filter=blob:none will filter out all blobs (file contents) until needed by Git. Also, --filter=blob:limit=<size> will filter out all blobs of size at least <size>. For more details on filter specifications, see the --filter option in git-rev-list[1].",
          insertValue: "--filter=",
          args: { name: "filter spec" },
        },
        {
          name: "--mirror",
          description:
            "Set up a mirror of the source repository. This implies --bare. Compared to --bare, --mirror not only maps local branches of the source to local branches of the target, it maps all refs (including remote-tracking branches, notes etc.) and sets up a refspec configuration such that all these refs are overwritten by a git remote update in the target repository.",
        },
        {
          name: ["-o", "--origin"],
          description:
            "Instead of using the remote name origin to keep track of the upstream repository, use <name>. Overrides clone.defaultRemoteName from the config.",
          args: { name: "name" },
        },
        {
          name: ["-b", "--branch"],
          description:
            "Instead of pointing the newly created HEAD to the branch pointed to by the cloned repository’s HEAD, point to <name> branch instead. In a non-bare repository, this is the branch that will be checked out. --branch can also take tags and detaches the HEAD at that commit in the resulting repository.",
          args: { name: "branch name" },
        },
        {
          name: ["-u", "--upload-pack"],
          description:
            "When given, and the repository to clone from is accessed via ssh, this specifies a non-default path for the command run on the other end.",
          args: {
            name: "upload pack",
          },
        },
        {
          name: "--template",
          description:
            "Specify the directory from which templates will be used",
          insertValue: "--template=",
          args: {
            name: "template directory",
          },
        },
        {
          name: "--depth",
          description:
            "Create a shallow clone with a history truncated to the specified number of commits. Implies --single-branch unless --no-single-branch is given to fetch the histories near the tips of all branches. If you want to clone submodules shallowly, also pass --shallow-submodules.",
          args: {
            name: "date",
          },
        },
        {
          name: "--shallow-since",
          description:
            "Create a shallow clone with a history after the specified time.",
          insertValue: "--shallow-since=",
          args: {
            name: "date",
          },
        },
        {
          name: "--shallow-exclude",
          description:
            "Create a shallow clone with a history, excluding commits reachable from a specified remote branch or tag. This option can be specified multiple times.",
          insertValue: "--shallow-exclude=",
          args: {
            name: "revision",
          },
        },
        {
          name: "--single-branch",
          description:
            "Clone only the history leading to the tip of a single branch, either specified by the --branch option or the primary branch remote’s HEAD points at. Further fetches into the resulting repository will only update the remote-tracking branch for the branch this option was used for the initial cloning. If the HEAD at the remote did not point at any branch when --single-branch clone was made, no remote-tracking branch is created.",
        },
        {
          name: "--no-tags",
          description:
            "Don’t clone any tags, and set remote.<remote>.tagOpt=--no-tags in the config, ensuring that future git pull and git fetch operations won’t follow any tags. Subsequent explicit tag fetches will still work, (see git-fetch[1]).",
        },
        {
          name: "--recurse-submodules",
          description:
            "After the clone is created, initialize and clone submodules within based on the provided pathspec. If no pathspec is provided, all submodules are initialized and cloned. This option can be given multiple times for pathspecs consisting of multiple entries.",
          insertValue: "--recurse-submodules=",
          args: {
            name: "pathspec",
          },
        },
        {
          name: "--shallow-submodules",
          description:
            "All submodules which are cloned will be shallow with a depth of 1.",
        },
        {
          name: "--remote-submodules",
          description:
            "All submodules which are cloned will use the status of the submodule’s remote-tracking branch to update the submodule, rather than the superproject’s recorded SHA-1. Equivalent to passing --remote to git submodule update.",
        },
        {
          name: "--separate-git-dir",
          description:
            "Instead of placing the cloned repository where it is supposed to be, place the cloned repository at the specified directory, then make a filesystem-agnostic Git symbolic link to there. The result is Git repository can be separated from working tree.",
          insertValue: "--separate-git-dir=",
          args: {
            name: "git dir",
          },
        },
      ],
    },
    {
      name: "init",
      description:
        "Create an empty Git repository or reinitialize an existing one",
      args: {
        name: "directory",
      },
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Only print error and warning messages",
        },
        {
          name: ["--bare"],
          description: "Create a bare repository",
        },
        {
          name: ["--object-format="],
          description: "Specify the given object format",
          args: {
            name: "format",
          },
        },
        {
          name: "separate-git-dir",
          description: "C",
          args: {
            name: "git dir",
          },
        },
        {
          name: ["-b", "--initial-branch"],
          description: "initial branch for new repo",
          args: {
            name: "branch",
          },
        },
        {
          name: ["--shared"],
          args: {
            suggestions: [
              {
                name: "false",
              },
              {
                name: "true",
              },
              {
                name: "umask",
              },
              {
                name: "group",
              },
              {
                name: "all",
              },
              {
                name: "world",
              },
              {
                name: "everybody",
              },
              {
                name: "0xxx",
              },
            ],
          },
        },
      ],
    },
    {
      name: "mv",
      description: "Move or rename a file, a directory, or a symlink",
      args: [
        {
          name: "source",
          description: "file to move",
          template: "filepaths",
        },
        {
          name: "destination",
          description: "location to move to",
          template: "folders",
        },
      ],
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Force renaming or moving of a file even if the target exists",
        },
        {
          name: ["-k"],
          description:
            "Skip move or rename actions which would lead to an error condition",
        },
        {
          name: ["-n", "--dry-run"],
          description: "Do nothing; only show what would happen",
        },
        {
          name: ["-v", "--verbose"],
          description: "Report the names of files as they are moved.",
        },
      ],
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
      args: {
        name: "branch",
        description: "branch to switch to",
        isOptional: true,
        generators: gitGenerators.branches,
        suggestions: [
          {
            name: "-",
            description: "switch to the last used branch",
            icon: "fig://icon?type=git",
          },
        ],
      },
    },
    {
      name: "merge",
      description: "Join two or more development histories together",
      args: {
        name: "branch",
        generators: gitGenerators.branches,
      },
      options: [
        {
          name: "--no-ff",
          description: "Merge with a nicer branch history",
        },
      ],
    },
    {
      name: "mergetool",
      description: "Open the git tool to fix conflicts",
    },
    {
      name: "tag",
      description:
        "Create, list, delete or verify a tag object signed with GPG",
      options: [
        { name: ["-l", "--list"], description: "list tag names" },
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
  additionalSuggestions: [
    {
      name: "commit -m 'msg'",
      description: "Git commit shortcut",
      insertValue: "commit -m '{cursor}'",
      icon: "fig://template?color=2ecc71&badge=🔥",
      // type: "shortcut",
    },
  ],
};
>>>>>>> 880aa33... feat: update prettierignore
=======
    ],
};

>>>>>>> c80c604... Revert "feat: update prettierignore"
