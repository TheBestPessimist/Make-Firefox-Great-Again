// since i no longer have a touchscreen, these 2 are useless
// user_pref("apz.allow_zooming", true); // turning this on breaks zooming on so many sites :(
// user_pref("browser.gesture.pinch.threshold", 450);


// Double click to close the current tab. Nice and easy :).
user_pref("browser.tabs.closeTabByDblclick", true);

// Useless addon.
user_pref("extensions.pocket.enabled", false);
// Useless addon.
user_pref("extensions.screenshots.disabled", true);

/**
 * Disable the stupid urlbar onClick action starting with firefox 75.
 *
 * Why does that shit appear when I click the address bar?
 * What if I did it by mistake?
 * Now I have to move my cursor sooooo far away, out of that dropdown just to close it. WTF!??!
 *
 * That dropdown should only appear when i start typing something. Definitely not always when i click it.
 */
user_Pref("browser.urlbar.openViewOnFocus", false);

// Enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

