<p align="center">
    <img width="300" src="https://github.com/withfig/fig/blob/main/static/FigBanner.png?raw=true"/>
</p>

---

![os](https://img.shields.io/badge/os-%20macOS-light)
[![Signup](https://img.shields.io/badge/signup-private%20beta-blueviolet)](https://fig.io?ref=github_autocomplete)
[![Documentation](https://img.shields.io/badge/documentation-black)](https://fig.io/docs/)
[![All-Contributors](https://img.shields.io/github/contributors/withfig/autocomplete)](#Contributors)
![Discord](https://img.shields.io/discord/837809111248535583?color=768ad4&label=discord)
[![Twitter](https://img.shields.io/twitter/follow/fig.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=fig)

**[Fig](https://fig.io?ref=github_autocomplete) adds autocomplete to your terminal.** 

As you type, Fig pops up subcommands, options, and contextually relevant arguments in your existing terminal on macOS.

![Fig Visual Autocomplete For Your Terminal Demo](https://fig.io/gifs/demo-with-header.gif)

<br/>

## 👋 Add a completion spec for a CLI tool

Want to add autocomplete to a CLI tool (or make changes to an existing autocomplete spec)? We welcome contributions for new specs!

Completion specs are defined in a _declarative_ schema that specifies `subcommands`, `options` and `arguments`. Suggestions are generated from information in the spec or can be generated dynamically by running shell commands or reading local files.

**For documentation and tutorials**, visit [fig.io/docs](https://fig.io/docs/autocomplete/getting-started)

**To request autocomplete for a CLI tool**, open an [issue](https://github.com/withfig/autocomplete/issues/new/choose).

<br/>


## 😎 Get Started

Build your first spec in < 3 min: [fig.io/docs/getting-started](fig.io/docs/getting-started)


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> fc8e4dd... feat: update badge
## Get Started
=======
1. Fork this repo
[![GitHub forks](https://img.shields.io/github/forks/withfig/autocomplete.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/withfig/autocomplete/fork/)
>>>>>>> 0e498a5... Added some flare to readme

2. Clone your forked repo and create an example spec
```bash
# Replace `YOUR_GITHUB_USERNAME` with your own github username 
git clone https://github.com/YOUR_GITHUB_USERNAME/autocomplete.git fig-autocomplete
cd fig-autocomplete

# Add withfig/autocomplete as a remote
git remote add upstream https://github.com/withfig/autocomplete.git

# Install packages
npm install

# Create an example spec (call it "abc")
npm run create-example

# Turn on "dev mode"
npm run dev
```
3. Now go to your terminal and type `abc[space]`. Your example spec will appear 😊 

#### Other things to know
* Edit your spec in typescript in the `dev/` folder
* On save, specs are compiled to the `specs/` folder
* In **dev mode** specs are read from the `specs` folders. Otherwise they are read from `~/.fig/autocomplete`

<br/>

## 📦 Other available package.json commands

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
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
>>>>>>> fc8e4dd... feat: update badge
=======
## Need Help?
=======
## 😊 Need Help?
>>>>>>> 0e498a5... Added some flare to readme

<p align="center">
    Join our community
<br/>
<a href="https://fig.io/community">
    <img src="http://fig.io/icons/discord-logo-square.png" width="80px" height="80px" /> 
</a>
</p>

<<<<<<< HEAD
>>>>>>> 0279af9... Added discord logo to readme
## FAQ
=======

## 🙋‍♀️ FAQ
>>>>>>> 0e498a5... Added some flare to readme

<<<<<<< HEAD
#### What terminals does Fig work with?

Fig works with iTerm, the native MacOS Terminal app, Hyper and the integrated terminal in VSCode.

#### How does Fig work?

Fig uses the Accessibility API on Mac to position the window, insert text on your behalf, and read what you've typed in your terminal.

#### Does Fig work on Windows or Linux?

Currently, Fig is only available on MacOS.

#### How can I get access?

Sign up for the waitlist at [fig.io](https://fig.io?ref=github-autocomplete). Fig is currently in a private beta. We are onboarding batches of new users each week.

#### Can I use Fig to build autocomplete for my team's internal scripts and CLI tools?

Yes! Check out our guide on how to [get started building autocomplete specs](https://fig.io/docs/autocomplete/getting-started).

#### Did we miss something?

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
Get in touch at hello@fig.io or chat with us on [Slack](https://fig.io/community)
>>>>>>> 4bbddae... feat: update readme
=======
Get in touch at hello@fig.io or chat with us on [Discord](https://fig.io/community)
>>>>>>> 5d64cab... updated links to discord

<<<<<<< HEAD
## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/falky97"><img src="https://avatars.githubusercontent.com/u/4949076?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="http://rolandshen.com/"><img src="https://avatars.githubusercontent.com/u/8952958?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="http://mschrage.com/"><img src="https://avatars.githubusercontent.com/u/3155109?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://cstrnt.dev/"><img src="https://avatars.githubusercontent.com/u/20679094?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/QuiiBz"><img src="https://avatars.githubusercontent.com/u/43268759?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://julius-kiekbusch.de/"><img src="https://avatars.githubusercontent.com/u/15707543?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/FlowyCoder"><img src="https://avatars.githubusercontent.com/u/28676154?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/samwinslow"><img src="https://avatars.githubusercontent.com/u/4645779?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://jamesj.ac/kson"><img src="https://avatars.githubusercontent.com/u/13633271?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/dipakparmar"><img src="https://avatars.githubusercontent.com/u/24366206?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/DannyAziz"><img src="https://avatars.githubusercontent.com/u/3679064?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/jdotjdot"><img src="https://avatars.githubusercontent.com/u/1328961?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/alexnaiman"><img src="https://avatars.githubusercontent.com/u/25799714?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/omichowdhury"><img src="https://avatars.githubusercontent.com/u/969419?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/winnayx"><img src="https://avatars.githubusercontent.com/u/46658657?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/Nullfuse"><img src="https://avatars.githubusercontent.com/u/61602086?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/vicentube"><img src="https://avatars.githubusercontent.com/u/73502080?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/rk-yen"><img src="https://avatars.githubusercontent.com/u/4944665?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/berbaroovez"><img src="https://avatars.githubusercontent.com/u/6900468?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/smeevil"><img src="https://avatars.githubusercontent.com/u/13874?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Chair4ce"><img src="https://avatars.githubusercontent.com/u/33118919?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/LI0131"><img src="https://avatars.githubusercontent.com/u/4829473?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="http://sauntimo.org/"><img src="https://avatars.githubusercontent.com/u/2720466?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
    <td align="center"><a href="https://github.com/ygaitonde"><img src="https://avatars.githubusercontent.com/u/54426809?v=4" width="30px;" alt="" style="border-radius:100%!important"></a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<<<<<<< HEAD

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
<<<<<<< HEAD
>>>>>>> d671881... :busts_in_silhouette: Add @falky97 as a contributor
=======
>>>>>>> fc8e4dd... feat: update badge
=======
>>>>>>> e8786b1... feat: update readme
=======
<br/>

## ✨ Contributors 


<a href="https://github.com/withfig/autocomplete/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=withfig/autocomplete" />
</a>
<!--  https://contrib.rocks -->
>>>>>>> 0e498a5... Added some flare to readme
