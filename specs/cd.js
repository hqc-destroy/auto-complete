var completionSpec = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    name: 'cd',
    description: 'Change the shell working directory',
    args: {
        template: 'folders',
    },
<<<<<<< HEAD
    subcommands: [
        { name: "cat" }
    ]
};

// var completionSpec = {
//     name: "cd",
//     description: "Change the shell working directory",
//     args: {
//         generator: {
//             customFunction: async (lastBranch) => {
//                 console.log(lastBranch)
//                 var b = await executeShellCmd("echo hello world")
//                 return [{ name: b }, { name: "bbbbb" }]
//             }
//         }
//     }
// }
=======
};

>>>>>>> e321ca1... feat: update all scripts and  move to ts
=======
=======
>>>>>>> 880aa33... feat: update prettierignore
  name: "cd",
  description: "Change the shell working directory.",
  args: {
    template: "folders",
<<<<<<< HEAD
  },
};
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
    name: "cd",
    description: "Change the shell working directory.",
    args: {
        template: "folders",
<<<<<<< HEAD
        // Add an additional hidden suggestion so users can execute on it if they want to
        suggestions: [
            {
                name: "-",
                description: "switch to the last used folder",
                hidden: true,
            },
        ],
    },
};

<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
=======
    // Add an additional hidden suggestion so users can execute on it if they want to
    suggestions: [
      {
        name: "-",
        description: "switch to the last used folder",
        hidden: true,
      },
    ],
  },
};
>>>>>>> 880aa33... feat: update prettierignore
=======
        // suggestions: [{ name: "-", description: "switch to the last used folder" }],
    },
};

>>>>>>> c80c604... Revert "feat: update prettierignore"
