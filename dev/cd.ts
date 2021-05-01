<<<<<<< HEAD
<<<<<<< HEAD
export const completionSpec: Fig.Spec = {
  name: "cd",
  description: "Change the shell working directory.",
  args: {
    template: "folders",

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
=======
export const cd:Fig.Spec = {
    name: "test"
}
>>>>>>> af8088d... test hook
=======
export const cd: Fig.Spec = {
    name: 'test',
};
>>>>>>> 6e8f5f9... test again
