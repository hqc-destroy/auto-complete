var completionSpec = {
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
  name: "cd",
  description: "Change the shell working directory.",
  args: {
    template: "folders",
  },
};
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
    name: "cd",
    description: "Change the shell working directory.",
    args: {
        template: "folders",
        // suggestions: [{ name: "-", description: "switch to the last used folder" }],
    },
};

<<<<<<< HEAD
>>>>>>> a09fa69... removed linting from all js specs in specs folder
=======
>>>>>>> 3879070... feat: re-add built specs and update gitignore
