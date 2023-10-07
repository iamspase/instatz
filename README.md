# A very simple tool that lets you see who follows you back on Instagram

You don't have to sign in with Instagram this to work, instead you request your data directly
from your Instagram web/mobile app. It's required to request only the followers and following data for this tool to work.
And most imporantly when requesting the data, you MUST select to download it as JSON. HTML won't work.

### How it works?
So basically how this works is, you upload two files, `followers_0.json` and `followings.json` files into this app and what the app
does is basically compares the two JSON files and checks who doesn't follow you back. As this app works completely on the client and
your device, your data is stored on your device/browser's memory, and it is automatically cleared when you refresh the page. No data is stored on any server.

### How to install locally
To install this you must have Node.js installed on your machine, you can do that by visiting the Node.js website and follow the instructions, any newer version is applicable.

Next you'll clone this project onto your device using `git clone` or just simply download the repo from GitHub.
Open your project and then run `npm install`, this basically installs all the required packages that are required for this app to work.

After everything is installed you can use the command `npm run dev`, this command will run the development server, so you can visit the website via your browser at `localhost:3000`

### Tech stack used:
- Next.js (App router)
- TailwindCSS (styling)

### Have any suggestions/issues?
If you have any suggestions or running into a bug or something feel free to create a pull request or an issue. 