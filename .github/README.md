# \[Firefox\] user.js

These are custom configuration files (user.js) for Firefox on Linux and Windows.  
They include various settings I've collected here and there over the years to improve performance, security, privacy, and usability.

Many of these settings come from:
- [Arkenfox - user.js](https://github.com/arkenfox/user.js)
- [Yokoffing - Betterfox](https://github.com/yokoffing/Betterfox)
- [CachyOS - cachyos.js](https://github.com/CachyOS/CachyOS-PKGBUILDS/blob/master/cachyos-firefox-settings/cachyos.js)

---

## Files:

You can find a *user.js* file for **Linux** and for **Windows** on their respective directories.

---

## Usage:

Download the *user.js* file for your operating system or create a new one and copy/paste its contents.

Each *user_pref* line corresponds to a setting.  
Open the file with a text editor and modify or comment/uncomment them (with a double slash "//") as needed.

Move the *user.js* file to your Firefox profile directory:

- Open Firefox
- Type **about:support** in the URL bar and press **Enter**
- On the *troubleshooting page*, locate and click the button to open your **profile directory**.
- Place your *user.js* file in this directory.

Restart Firefox to apply the settings.

---

## Troubleshooting:

As indicated in the *user.js* files, some of these settings may be unstable in certain configurations.  
For example: `user_pref("gfx.direct3d11.reuse-decoder-device-force-enabled", true); // Can be unstable`

&nbsp;
&nbsp;

The best way to disable an unstable *user_pref* is to comment out the line and revert its setting in Firefox:

- Open your Firefox **profile directory** as explained above
- Open the *user.js* file with a text editor
- Comment out the potentially unstable line with a double slash

> For example: `user_pref("gfx.direct3d11.reuse-decoder-device-force-enabled", true); // Can be unstable`  
> Becomes: `//user_pref("gfx.direct3d11.reuse-decoder-device-force-enabled", true); // Can be unstable`

- Save changes to the *user.js* file
- In the Firefox URL bar, type **about:config** and press **Enter**
- Click the button to accept the risks if prompted
- Copy/paste the preference name in the search bar (in our example: `gfx.direct3d11.reuse-decoder-device-force-enabled`)
- Click the **back arrow** to reinitialize the preference to its default value
- Restart Firefox to apply
    
