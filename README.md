# PnP - Pointer and Pings! (BETA)


![GitHub issues](https://img.shields.io/github/issues-raw/p4535992/foundryvtt-pointer?style=for-the-badge)

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-pointer/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fpointer&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=pointer)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-pointer%2Fmaster%2Fsrc%2Fmodule.json&label=Foundry%20Version&query=$.compatibility.verified&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-pointer%2Fmaster%2Fsrc%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fpointer%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/pointer/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-pointer/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/pointer/-/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/pointer/)

### If you want to buy me a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)

Gives all players the option to show a customizable cursor on demand, as well as ping any location with a custom ping!
Hotkeys, pings, pointer, everything customizable!
As GM you can also move your players view to your pin on demand.

## WHY THIS MODULE IS IN BETA ? Don't get too excited, I just took the module maintenance and did some minor bug fixing, the module requires considerable rewriting especially with the new API of v12
## There is a open commission on the Discord League Server for anyone interested on help to save this module from the void.

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-pointer/master/src/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

![](wiki/doc/pnp.gif)

# Feature Overview

Press buttons, stuff happens!
Press a button and a pointer will follow your mouse, while the button is pressed. Press another button and a stationary ping will appear at your cursors position, which will disappear after some time. As GM you can even press another different button and a stationary ping will appear *and* every players view will get moved to that ping!

## Settings Menu

The pointer, pings and buttons are customizable using the settings menu. Here you can choose different images, or videos and apply some basic transformations as well as animations to them.
To make setup easier for players the GM can decide to force his settings onto all players! (This will not stop them from changing those afterwards.)

### Creating Pointers and Pings

![](wiki/doc/design_studio.webp)

GM View of the design studio (1).
2. Here you can which custom pointer you want to use as pointer or as ping. Just click on one of the checkboxes. The GM can also create new custom pointer or delete any existing.
3. A small preview of your custom pointer. the red X in the center is the location of your mouse pointer when displaying the pointer on the canvas. This view help to properly position your chosen image relative to your mouse pointer.
	Clicking on the canvas lets you also choose the image or video file used for the custom pointer. You can choose of all file types compatible with core FVTTs canvas.
4. Configuration panel for your pointer. Configure some basic transformations, like position, rotation and add some animations.

Due to core FVTT limitations it is currently only possible for users allowed to edit world settings to create and delete custom pointer. (Screenshot below)

![](wiki/doc/global_settings.webp)

*Beware that this allows them to edit most FVTT settings. It is up to you, the GM, whether you trust your players with that much power!*

~~## Important Information : Maintenance Mode
This repository is no longer receiving active attention. In my opinion this module is complete and stable, and i'll be focusing my efforts on other modules/stuff. PR's are welcome and i'll try to investigate bugs and keep this module up to date with Foundry, when i find the time to do so.
That said, feel free to keep suggesting features, if i find something interesting i may end up implementing it.~~

# Build

## Install all packages

```bash
npm install
```

### dev

`dev` will let you develop you own code with hot reloading on the browser

```bash
npm run dev
```

## npm build scripts

### build

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run build
```

### build-watch

`build-watch` will build and watch for changes, rebuilding automatically.

```bash
npm run build-watch
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

### lint and lint:fix

`lint` launch the eslint process based on the configuration [here](./.eslintrc.json)

```bash
npm run-script lint
```

`lint:fix` launch the eslint process with the fix argument

```bash
npm run-script lint:fix
```


## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-pointer/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

-  The images used are from www.game-icons.net, all licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/):
- [Pointer](https://github.com/Moerill/fvtt-pointer) ([MIT](https://github.com/Moerill/fvtt-pointer/blob/master/LICENSE))
- [Pointer (fork farling42)](https://github.com/farling42/fvtt-pointer) ([MIT](https://github.com/farling42/fvtt-pointer/blob/master/LICENSE))

This package is under an [MIT](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

## Acknowledgements

- Thank you to [Moerill](https://github.com/Moerill) for the module [Pointer](https://github.com/Moerill/fvtt-pointer) original project
- Thank you to [farling42](https://github.com/farling42) for the module [Pointer (fork farling42)](https://github.com/farling42/fvtt-pointer) for bug fix v11

## Attribution

The arrow pointer made by [Iga from the Noun Project](https://thenounproject.com/term/pointer/1727334/) and modified by ayan and me for compatibility.
The Focus was made by [Creative Stall from the Noun Project](https://thenounproject.com/term/pointer/1727334/).
Both are licensed under [Creative Commons](https://creativecommons.org/licenses/by/3.0/us/legalcode).

The following items are from www.game-icons.net, all licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/):
- [Pin](https://game-icons.net/1x1/delapouite/pin.html)
- [Triangle](https://game-icons.net/1x1/delapouite/triangle-target.html)
- [Plain Arrow](https://game-icons.net/1x1/delapouite/plain-arrow.html)
- [Convergence Target](https://game-icons.net/1x1/delapouite/convergence-target.html)
All were slightly modified to fully fill their square and width/height attributes were added so they're compatible with FVTT as SVG.
