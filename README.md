# 22K Notify System – V1

[EN]  
A clean and minimal notification system for ESX-based FiveM servers.  
Messages appear at the top center of the screen with configurable duration and multilingual support.

[HU]  
Egy letisztult és egyszerű értesítőrendszer ESX-alapú FiveM szerverekhez.  
Az üzenetek a képernyő felső középső részén jelennek meg, állítható időtartammal és többnyelvű támogatással.

---

## 🔧 Configuration / Beállítás

Edit `config.lua`:

```lua
Config.Language = 'hu' -- 'hu' or 'en'
Config.NotifyDuration = 5000 -- time in milliseconds (e.g., 5000 = 5 seconds)
💬 How to use / Használat
Client-side trigger:

TriggerEvent('22k_notify:sendNotify', 'Your message here')
Example command (client.lua):

---

RegisterCommand("teszt", function()
    TriggerEvent("22k_notify:sendNotify", "Ez egy minta értesítés.")
end)
🌐 Multilingual Support / Többnyelvű Támogatás

Config includes support for:
Hungarian (hu)
English (en)

You can expand the Config.Texts table for more languages.

🎨 UI Features / UI Tulajdonságok
Appears at the top center of the screen
White background with glowing blue border
Rounded design
Custom fade-out animation
Non-stacking: new notifications appear under older ones

✅ Requirements / Követelmények
FiveM server with ESX 

📜 License / Licenc
This script is provided as-is by [22K Scripts].
Free for use on personal or community servers.
Commercial resale is not permitted.
