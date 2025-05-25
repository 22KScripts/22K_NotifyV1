RegisterNetEvent('22k_notify:sendNotify')
AddEventHandler('22k_notify:sendNotify', function(message)
    SendNUIMessage({
        action = "notify",
        text = message,
        title = Config.Texts[Config.Language].title,
        duration = Config.NotifyDuration
    })
end)
