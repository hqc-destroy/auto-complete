<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const herokuCompletionSpec: Fig.Spec = {
=======
export const completionSpec: Fig.Spec = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> e321ca1... feat: update all scripts and  move to ts
    name: 'heroku',
    description: 'CLI Interface for Heroku.com',
    args: {},
    subcommands: [
        {
            name: 'addons:attach',
            description: 'attach an existing add-on resource to an app',
            options: [
                {
                    name: ['-a', '--app'],
                    description: 'app to run command against',
                    args: {
                        generators: {
                            script: 'heroku apps --all --json',
                            // splitOn: "\n",
                            postProcess: function (out) {
                                try {
<<<<<<< HEAD
<<<<<<< HEAD
                                    return JSON.parse(out).map(app => {
                                        return app.name
<<<<<<< HEAD
=======
                                        return { name: app.name, description: app.name, icon: "https://www.herokucdn.com/favicon.ico"}
>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                                    })

                                } catch(e) {
                                    return []
=======
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                    return JSON.parse(out).map((app) => {
                                        return {
                                            name: app.name,
                                            description: app.name,
                                            icon: 'https://www.herokucdn.com/favicon.ico',
                                        };
                                    });
                                } catch (e) {
                                    return [];
<<<<<<< HEAD
>>>>>>> 6bc5008... feat: lint & prettier all files
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                }
                            },
                        },
                    },
                },
            ],
=======
  name: 'heroku',
  description: 'CLI Interface for Heroku.com',
=======
  name: "heroku",
  description: "CLI Interface for Heroku.com",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
  args: {},
=======
const getAppGenerator: Fig.Generator = {
  script: "heroku apps --all --json",
  postProcess: function (out) {
    try {
      return JSON.parse(out).map((app) => {
        return {
          name: app.name,
          description: app.name,
          icon: "https://www.herokucdn.com/favicon.ico",
        };
      });
    } catch (e) {
      return [];
    }
  },
};

export const spec: Fig.Spec = {
  name: "heroku",
>>>>>>> 7c43a05... feat: add new heroku spec
=======
const getAppGenerator: Fig.Generator = {
  script: "heroku apps --all --json",
  postProcess: function (out) {
    try {
      return JSON.parse(out).map((app) => {
        return {
          name: app.name,
          description: app.name,
          icon: "https://www.herokucdn.com/favicon.ico",
        };
      });
    } catch (e) {
      return [];
    }
  },
};

export const spec: Fig.Spec = {
  name: "heroku",
>>>>>>> 880aa33... feat: update prettierignore
=======
export const completionSpec: Fig.Spec = {
  name: "heroku",
  description: "CLI Interface for Heroku.com",
  args: {},
>>>>>>> c80c604... Revert "feat: update prettierignore"
  subcommands: [
    {
      name: "addons:attach",
      description: "attach an existing add-on resource to an app",
      options: [
        {
<<<<<<< HEAD
          name: "--as",
          description: "name for add-on attachment",
          args: {},
        },
        {
          name: "--credential",
          description: "credential name for scoped access to Heroku Postgres",
          args: {},
        },
        {
          name: "--confirm",
          description: "overwrite existing add-on attachment with same name",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
>>>>>>> 65036d2... fixed linting and prettier
        },
      ],
      args: [
        {
          name: "addon_name",
        },
      ],
      args: [
        {
          name: "addon_name",
        },
      ],
    },
    {
      name: "addons:create",
      description: "create a new add-on resource",
      options: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            name: 'logs',
            description: 'view server logs',
            options: [
                {
                    name: ['-t', '--tail'],
                    description: 'continually stream logs',
                },
                {
                    name: ['-a', '--app'],
                    description: 'app to run command against',
                    args: {
                        generators: {
                            script: 'heroku apps --all --json',
                            // splitOn: "\n",
                            postProcess: function (out) {
                                try {
<<<<<<< HEAD
<<<<<<< HEAD
                                    return JSON.parse(out).map(app => {
                                        let build = app.buildpack_provided_description ? `(${app.buildpack_provided_description})` : ""
                                        return { name: app.name, description: `heroku app ${build}`, icon: "https://www.herokucdn.com/favicon.ico"}
                                    })
<<<<<<< HEAD
                                    
=======
                                        return app.name
                                        return { name: app.name, description: app.name, icon: "https://www.herokucdn.com/favicon.ico"}
                                    })

>>>>>>> ac4358a... adding v2 of spec format for autocomplete
                                } catch(e) {
=======
                                } catch (e) {
>>>>>>> 95c3d67... Update heroku.js
                                    return []
=======
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                    return JSON.parse(out).map((app) => {
                                        const build = app.buildpack_provided_description
                                            ? `(${app.buildpack_provided_description})`
                                            : '';
                                        return {
                                            name: app.name,
                                            description: `heroku app ${build}`,
                                            icon: 'https://www.herokucdn.com/favicon.ico',
                                        };
                                    });
                                } catch (e) {
                                    return [];
<<<<<<< HEAD
>>>>>>> 6bc5008... feat: lint & prettier all files
=======
>>>>>>> e321ca1... feat: update all scripts and  move to ts
                                }
                            },
                        },
                    },
                },
            ],
=======
          name: ['-t', '--tail'],
          description: 'continually stream logs',
>>>>>>> 65036d2... fixed linting and prettier
=======
          name: ["-t", "--tail"],
          description: "continually stream logs",
>>>>>>> 02ea794... added some more logic to eslint and changed the glob so we only lint files in the dev/ specs/ and scripts/ folders
=======
=======
>>>>>>> 880aa33... feat: update prettierignore
          name: "--name",
          description: "name for the add-on resource",
          args: {},
        },
        {
          name: "--as",
          description: "name for the initial add-on attachment",
          args: {},
        },
        {
          name: "--confirm",
          description:
            "overwrite existing config vars or existing add-on attachments",
          args: {},
        },
        {
          name: "--wait",
          description: "watch add-on creation status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "service:plan",
        },
        {
          name: "addon",
          variadic: true,
        },
      ],
    },
    {
      name: "addons:add",
      description: "create a new add-on resource",
      options: [
        {
          name: "--name",
          description: "name for the add-on resource",
          args: {},
        },
        {
          name: "--as",
          description: "name for the initial add-on attachment",
          args: {},
        },
        {
          name: "--confirm",
          description:
            "overwrite existing config vars or existing add-on attachments",
          args: {},
        },
        {
          name: "--wait",
          description: "watch add-on creation status and exit when complete",
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "service:plan",
        },
        {
          name: "addon",
          variadic: true,
        },
      ],
    },
    {
      name: "addons:destroy",
      description: "permanently destroy an add-on resource",
      options: [
        {
          name: "--force",
          description: "allow destruction even if connected to other apps",
        },
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
          variadic: true,
        },
      ],
    },
    {
      name: "addons:remove",
      description: "permanently destroy an add-on resource",
      options: [
        {
          name: "--force",
          description: "allow destruction even if connected to other apps",
        },
        {
          name: "--confirm",
          args: {},
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            name: "app",
            isOptional: true,
            generators: getAppGenerator,
          },
        },
      ],
      args: [
        {
          name: "addon",
          variadic: true,
        },
      ],
    },
    {
      name: "addons:detach",
      description: "detach an existing add-on resource from an app",
      options: [
        {
=======
>>>>>>> c80c604... Revert "feat: update prettierignore"
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            generators: {
              script: "heroku apps --all --json",
              // splitOn: "\n",
              postProcess: function (out) {
                try {
                  return JSON.parse(out).map((app) => {
                    return {
                      name: app.name,
                      description: app.name,
                      icon: "https://www.herokucdn.com/favicon.ico",
                    };
                  });
                } catch (e) {
                  return [];
                }
              },
            },
          },
        },
      ],
    },
    {
      name: "logs",
      description: "view server logs",
      options: [
        {
<<<<<<< HEAD
          name: "--show-url",
          description: "show URL, do not open browser",
<<<<<<< HEAD
>>>>>>> 7c43a05... feat: add new heroku spec
=======
>>>>>>> 880aa33... feat: update prettierignore
=======
          name: ["-t", "--tail"],
          description: "continually stream logs",
>>>>>>> c80c604... Revert "feat: update prettierignore"
        },
        {
          name: ["-a", "--app"],
          description: "app to run command against",
          args: {
            generators: {
              script: "heroku apps --all --json",
              // splitOn: "\n",
              postProcess: function (out) {
                try {
                  return JSON.parse(out).map((app) => {
                    const build = app.buildpack_provided_description
                      ? `(${app.buildpack_provided_description})`
                      : "";
                    return {
                      name: app.name,
                      description: `heroku app ${build}`,
                      icon: "https://www.herokucdn.com/favicon.ico",
                    };
                  });
                } catch (e) {
                  return [];
                }
              },
            },
          },
        },
      ],
    },
    { name: "access", description: "manage user access to apps" },
    {
      name: "addons",
      description:
        "tools and services for developing, extending, and operating your app",
    },
    { name: "apps", description: "manage apps on Heroku" },
    { name: "auth", description: "check 2fa status" },
    { name: "authorizations", description: "OAuth authorizations" },
    {
      name: "autocomplete",
      description: "display autocomplete installation instructions",
    },
    { name: "buildpacks", description: "scripts used to compile apps" },
    { name: "certs", description: "a topic for the ssl plugin" },
    { name: "ci", description: "run an application test suite on Heroku" },
    { name: "clients", description: "OAuth clients on the platform" },
    { name: "config", description: "environment variables of apps" },
    {
      name: "container",
      description: "Use containers to build and deploy Heroku apps",
    },
    { name: "domains", description: "custom domains for apps" },
    { name: "drains", description: "forward logs to syslog or HTTPS" },
    { name: "features", description: "add/remove app features" },
    { name: "git", description: "manage local git repository for app" },
    { name: "help", description: "display help for heroku" },
    { name: "keys", description: "add/remove account ssh keys" },
    { name: "labs", description: "add/remove experimental features" },
    { name: "local", description: "run Heroku app locally" },
    { name: "maintenance", description: "enable/disable access to app" },
    { name: "members", description: "manage organization members" },
    { name: "notifications", description: "display notifications" },
    { name: "orgs", description: "manage organizations" },
    { name: "pg", description: "manage postgresql databases" },
    { name: "pipelines", description: "manage pipelines" },
    { name: "plugins", description: "list installed plugins" },
    { name: "ps", description: "Client tools for Heroku Exec" },
    { name: "psql", description: "open a psql shell to the database" },
    { name: "redis", description: "manage heroku redis instances" },
    { name: "regions", description: "list available regions for deployment" },
    { name: "releases", description: "display the releases for an app" },
    { name: "reviewapps", description: "manage reviewapps in pipelines" },
    { name: "run", description: "run a one-off process inside a Heroku dyno" },
    { name: "sessions", description: "OAuth sessions" },
    { name: "spaces", description: "manage heroku private spaces" },
    { name: "status", description: "status of the Heroku platform" },
    { name: "teams", description: "manage teams" },
    { name: "update", description: "update the Heroku CLI" },
    { name: "webhooks", description: "list webhooks on an app" },
  ],
};
