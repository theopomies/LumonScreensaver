# LumonScreensaver [![x.com/theopomies](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/theopomies)
The infamous screensaver from Lumon Industries in Severance, an Apple TV exclusive show

<img src="/assets/LumonBounce.gif">

## Installation
You can find the .saver file to install the ScreenSaver in the [Github Releases](https://github.com/theopomies/LumonScreensaver/releases) for this repository.
Simply download it and execute it, you should be good to go!

## Architecture
The video is rendered using [React](https://react.dev) + [Remotion](https://www.remotion.dev), the code is available in `src/`

The video is then converted into a MacOS native ScreenSaver in the `LumonScreensaver/` XCode Project

## Credits
The Swift code for the ScreenSaver is mostly reusing [Blackmann's Vercel ScreenSaver code](https://github.com/blackmann/vercel-screensavers) 