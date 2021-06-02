<p align="center">
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBanner.png?raw=true"/>
</p>

---

![os](https://img.shields.io/badge/os-%20macOS-light)
[![Signup](https://img.shields.io/badge/signup-private%20beta-blueviolet)](https://withfig.com?ref=github_autocomplete)
[![Documentation](https://img.shields.io/badge/documentation-black)](https://withfig.com/docs/autocomplete/getting-started)
[![Slack](https://img.shields.io/badge/slack-purple)](https://withfig.com/community)
[![Twitter](https://img.shields.io/twitter/follow/withfig.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=withfig)

**[Fig](https://withfig.com?ref=github_autocomplete) adds autocomplete to the terminal.** As you type, Fig pops up subcommands, options, and contextually relevant arguments in your existing terminal on macOS.


![Fig Visual Autocomplete For Your Terminal Demo](https://withfig.com/gifs/demo-with-header.gif)


## Add a completion spec for a CLI tool 
Looking to improve autocomplete functionality or add support for your favorite CLI tool? We welcome contributions for new specs!

Completion specs are defined in a *declarative* JSON schema, that specifies `subcommands`, `options` and `arguments`. Suggestions can be generated dynamically by running shell commands or reading local files, in addition to the information in the spec itself.

**For more documentation and tutorials**, visit [withfig.com/docs](https://withfig.com/docs/autocomplete/getting-started)

**To request completions for a CLI tool**, open an [issue](https://github.com/withfig/autocomplete/issues/new).

<<<<<<< HEAD
=======

## Typechecking Your Spec
This Repository uses TypeScript to verify the types. 

You can typecheck the specs using 

```bash
npm test
```

## Using the specs locally
In order to use the the specs locally you first need to compile them.
You can do that by running

```bash
npm run build
```

after that you need to copy them into your local `.fig` folder.
You can do that by running
```bash
./copy.sh
```


>>>>>>> 385acba... feat: update readme and transformer
## FAQ

<<<<<<< HEAD
#### What terminals does Fig work with?
Fig works with iTerm, the native MacOS Terminal app, Hyper and the integrated terminal in VSCode.

#### How does Fig work?
Fig uses the Accessibility API on Mac to insert text on your behalf and read the current keybuffer.

#### Does Fig work on Windows or Linux?
Currently, Fig is only available on MacOS.

#### How can I get access?
Sign up for the waitlist at [withfig.com](https://withfig.com?ref=github-autocomplete). Fig is currently in a private beta. We are onboarding batches of new users each week. 

#### Can I use this for internal scripts and CLI tools at my company?
Yes! Check out the [autocomplete for teams](https://withfig.com/docs/autocomplete/autocomplete-for-teams) in our docs. Reach out to hello@withfig.com if you need help.


#### Did we miss something?
Get in touch at hello@withfig.com or chat with us on [Slack](https://withfig.com/community)
=======
### Linting Your Spec
The autocomplete spec linter can be run to validate the format of completion specs. Run it to get syntax and type errors from your autocomplete spec.

To use the linter, run the following command from the root folder.
`node linter.js specs/[specName].js`

To run the linter on ALL specs in the /specs folder, run
`node linter.js`

### Questions and support
<br />
<p>Email us any time: <a href="mailto:hello@withfig.com">hello@withfig.com</a></p>
>>>>>>> 3b53b63... Move linter to root

