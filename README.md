<p align="center">
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-22-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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

Completion specs are defined in a *declarative* schema that specifies `subcommands`, `options` and `arguments`. Suggestions can be generated dynamically by running shell commands or reading local files, in addition to the information in the spec itself.

**For more documentation and tutorials**, visit [withfig.com/docs](https://withfig.com/docs/autocomplete/getting-started)

**To request completions for a CLI tool**, open an [issue](https://github.com/withfig/autocomplete/issues/new/choose).

<<<<<<< HEAD
=======

## Get Started

```bash
git clone https://github.com/withfig/autocomplete.git fig-autocomplete
cd fig-autocomplete

# Install packages
npm install

# Go into testing mode
npm run dev
```

Edit your spec in the `dev/` folder. It will compile to the `specs/` folder on save. Start testing your spec immediately in your terminal.

**Note**: Fig usually looks for completion specs in your `~/.fig/autocomplete` folder. When in testing mode, we check your cloned repo's `specs/` folder

<br/>


## Other available commands
```bash

# Create a new spec from a boilerplate template
npm run create-boilerplate

# Typecheck all specs in the dev/ folder
npm test

# Compile typescripts specs from dev/ folder to specs/ folder
npm run build

# Copy all specs from the specs/ folder to the ~/.fig/autocomplete folder
npm run copy:all

# Copy an individual spec from the specs/ folder to the ~/.fig/autocomplete folder
npm run copy <spec-name>
```


<<<<<<< HEAD
## Can I create autocomplete specs for myself / my team's internal scripts?
Hell yeah: https://withfig.com/docs/autocomplete/getting-started


<<<<<<< HEAD
# Update the folder Fig uses to look for completion specs. 
# Only works in developer mode. Otherwise, defaults to ~/.fig/autocomplete
fig settings autocomplete.devCompletionsFolder path/to/folder
```
**Note 1**: These settings are updated automatically when starting / stopping `npm run dev`

**Note 2**: When not in testing mode, Fig looks for completion specs in your `~/.fig/autocomplete` folder.

>>>>>>> 385acba... feat: update readme and transformer
=======
>>>>>>> 931cb91... Update README.md
=======
>>>>>>> 8f1e4b8... Update Readme
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
 
#### Can I use Fig to build autocomplete for my team's internal scripts and CLI tools?
Yes! Check out our guide on how to [get started building autocomplete specs](https://withfig.com/docs/autocomplete/getting-started). 

#### Did we miss something?
Get in touch at hello@withfig.com or chat with us on [Slack](https://withfig.com/community)
<<<<<<< HEAD
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

=======

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/falky97"><img src="https://avatars.githubusercontent.com/u/4949076?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Brendan Falk</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=falky97" title="Code">💻</a></td>
    <td align="center"><a href="http://rolandshen.com/"><img src="https://avatars.githubusercontent.com/u/8952958?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Roland Shen</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=rolandtshen" title="Code">💻</a></td>
    <td align="center"><a href="http://mschrage.com/"><img src="https://avatars.githubusercontent.com/u/3155109?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Matt Schrage</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=mattschrage" title="Code">💻</a></td>
    <td align="center"><a href="https://cstrnt.dev/"><img src="https://avatars.githubusercontent.com/u/20679094?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Tim Raderschad</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=cstrnt" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/QuiiBz"><img src="https://avatars.githubusercontent.com/u/43268759?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Tom</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=QuiiBz" title="Code">💻</a></td>
    <td align="center"><a href="https://julius-kiekbusch.de/"><img src="https://avatars.githubusercontent.com/u/15707543?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Julius Kiekbusch</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=Jubeki" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/FlowyCoder"><img src="https://avatars.githubusercontent.com/u/28676154?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Flowy</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=FlowyCoder" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/samwinslow"><img src="https://avatars.githubusercontent.com/u/4645779?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Sam Winslow</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=samwinslow" title="Code">💻</a></td>
    <td align="center"><a href="https://jamesj.ac/kson"><img src="https://avatars.githubusercontent.com/u/13633271?v=4?s=50" width="50px;" alt=""/><br /><sub><b>James Jackson</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=jsj" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dipakparmar"><img src="https://avatars.githubusercontent.com/u/24366206?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Dipak Parmar</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=dipakparmar" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/DannyAziz"><img src="https://avatars.githubusercontent.com/u/3679064?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Danny Aziz</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=DannyAziz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jdotjdot"><img src="https://avatars.githubusercontent.com/u/1328961?v=4?s=50" width="50px;" alt=""/><br /><sub><b>JJ Fliegelman</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=jdotjdot" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/alexnaiman"><img src="https://avatars.githubusercontent.com/u/25799714?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Alexandru Naiman</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=alexnaiman" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/omichowdhury"><img src="https://avatars.githubusercontent.com/u/969419?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Omi</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=omichowdhury" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/winnayx"><img src="https://avatars.githubusercontent.com/u/46658657?v=4?s=50" width="50px;" alt=""/><br /><sub><b>winnayx</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=winnayx" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Nullfuse"><img src="https://avatars.githubusercontent.com/u/61602086?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Brian</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=Nullfuse" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vicentube"><img src="https://avatars.githubusercontent.com/u/73502080?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Vicente Úbeda</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=vicentube" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/rk-yen"><img src="https://avatars.githubusercontent.com/u/4944665?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Ravi Y</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=rk-yen" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/berbaroovez"><img src="https://avatars.githubusercontent.com/u/6900468?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Carter</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=berbaroovez" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/smeevil"><img src="https://avatars.githubusercontent.com/u/13874?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Gerard de Brieder</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=smeevil" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Chair4ce"><img src="https://avatars.githubusercontent.com/u/33118919?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Chair4ce</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=Chair4ce" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/LI0131"><img src="https://avatars.githubusercontent.com/u/4829473?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Liam McCann</b></sub></a><br /><a href="https://github.com/withfig/autocomplete/commits?author=LI0131" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
>>>>>>> d671881... :busts_in_silhouette: Add @falky97 as a contributor
