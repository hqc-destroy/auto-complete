// use to complete on files when they are the first string in a branch
export const dotslashCompletionSpec:Fig.Spec = {
    name: "dotslash",
    description: "Change the shell working directory",
    args: {
        template: "filepaths"
    }
}