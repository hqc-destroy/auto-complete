var listTargets = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
    script: "make -qp | awk -F':' '/^[a-zA-Z0-9][^$#\\/\\t=]*:([^=]|$)/ {split($1,A,/ /);for(i in A)print A[i]}' | sort -u",
    postProcess: function (out) {
        var lines = out.split("\n");
        var targets = [];
        for (var i = 1; i < lines.length; i++) {
            targets.push({
<<<<<<< HEAD
                name: lines[i].trim(),
=======
                name: lines[i],
>>>>>>> c80c604... Revert "feat: update prettierignore"
                description: "make target",
                icon: "🎯",
                priority: 80,
            });
        }
        return targets;
    },
<<<<<<< HEAD
=======
  script:
    "make -qp | awk -F':' '/^[a-zA-Z0-9][^$#\\/\\t=]*:([^=]|$)/ {split($1,A,/ /);for(i in A)print A[i]}' | sort -u",
  postProcess: function (out) {
    var lines = out.split("\n");
    var targets = [];
    for (var i = 1; i < lines.length; i++) {
      targets.push({
        name: lines[i].trim(),
        description: "make target",
        icon: "🎯",
        priority: 80,
      });
    }
    return targets;
  },
>>>>>>> 880aa33... feat: update prettierignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
};
var completionSpec = {
    name: "make",
    args: {
        name: "target",
        generators: listTargets,
    },
    options: [
        {
            name: ["-j"],
            args: [{ name: "number" }, { name: "target", generators: listTargets }],
        },
        {
            name: ["--file"],
            args: {
                name: "file",
                template: "filepaths",
            },
        },
        {
            name: ["--directory"],
            args: {
                name: "directory",
                template: "folders",
            },
        },
        {
            name: ["--always-make"],
            args: {
                name: "target",
                generators: listTargets,
            },
        },
        {
            name: ["--environment-overrides"],
            args: {
                name: "target",
                generators: listTargets,
            },
        },
    ],
};

