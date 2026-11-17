# Pint Patrol

Pint Patrol: a React Native brewery discovery app using Open Brewery DB.

## Run the app

Open a terminal (such as PowerShell). Navigate to the Pint Patrol project folder, then run these commands to start the app in Expo Go:

```
npm install
npx expo start
```

When the QR code appears, open the project in Expo Go. Keep your phone and computer on the same Wi-Fi network.

## Troubleshooting

If `npm` or `npx` is not recognized, install Node.js LTS, close and reopen the terminal, then try again.

If Expo Go cannot connect, confirm your phone and computer are on the same Wi-Fi network. Expo normally selects the local network automatically; if needed, stop the server with `Ctrl+C` and force LAN mode:

```
npx expo start --lan
```

For an Android phone, USB can be another option if Wi-Fi is unreliable. This requires USB debugging and Android Platform-Tools (`adb`). Connect the phone, approve the USB debugging prompt, stop the Expo server with `Ctrl+C`, then run:

```
adb devices
adb reverse tcp:8081 tcp:8081
npx expo start --localhost
```

On some Samsung Galaxy phones, Auto Blocker can block USB commands. If ADB cannot connect, open **Settings > Security and privacy > Auto Blocker** and long-press Auto Blocker to open its settings. Enable **Turn on automatically** if you want it to turn back on 30 minutes after you turn it off; otherwise, it stays off.

Press `a` in the Expo terminal to open the app on the connected phone. Optionally, run `scrcpy` in another terminal to mirror and control the phone while testing; it does not replace Expo or `adb`.

If Expo Go shows stale code or the bundle seems stuck, stop the server with `Ctrl+C`, then restart Expo and clear Metro's cache:

```
npx expo start --clear
```

This rebuilds the cache; it does not delete project files or phone data.
