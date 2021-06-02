<<<<<<< HEAD:specs/tar.ts
const tar: Fig.Spec = {

=======
var completionSpec = {
>>>>>>> 3dff486... add new specs:specs/tar.js
    name: "tar",
    description: "Manipulating archive files",
    args: {
    	variadic: true,
        template: "folders"
    },
    options: [
 		{
            name: ["-c", "--create"],
            description: "Create a new archive",
            args: {
    	        variadic: true,
                template: "folders"
            }
        },
 		{
            name: ["-t", "--list"],
            description: "List archive contents",
            args: {
                generators: {
                    script: "ls -1 | grep '.tar'",
                    splitOn: "\n"
                }
            }
        },
 		{
            name: ["-x", "--extract"],
            description: "Extract to disk",
            args: {
                generators: {
                    script: "ls -1 | grep '.tar'",
                    splitOn: "\n"
                }
            }
        },
 		{ name: ["-h", "--help"], description: "Help" },
        { name: ["--version"], description: "Version" },
        { name: ["--wildcards"], args: { name: "pattern", description: "ex: *.html" } }
    ],
    subcommands: [
        {
           name: "c",
           description: "Create a new archive from files",
           args: {
               variadic: true,
               template: "filepaths" 
           }
        },
        {
            name: "z",
            description: "List archive contents",
            args: {}
        },
        {
            name: "f",
            description: "Extract to disk",
            args: {}
        },
        {
            name: "x",
            description: "Extract a compressed archive",
            args: {}
        }
   ]
}