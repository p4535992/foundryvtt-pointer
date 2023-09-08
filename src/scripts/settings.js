import { i18n } from "./lib/lib.js";
import CONSTANTS from "./constants.js";
import { refresh } from "./main.js";
export const registerSettings = function () {
	game.settings.register('pointer', 'default', {
		name: "Activate placeables changes.",
		hint: "Changes some behaviours of placeables, like preview snapping to grid. Reload for all connected clients is required for this to take effect if changed!",
		scope: "world",
		config: false,
		default: PointerSettingsMenu.defaultSettings,
		type: Object
	});

	game.settings.registerMenu('pointer', 'design-studio', {
		name: game.i18n.localize('POINTER.Settings.Name'),
		label: game.i18n.localize('POINTER.Settings.Button'),
		icon: 'fas fa-paint-roller',
		type: PointerSettingsMenu,
		restricted: false
	});

	game.settings.register('pointer', 'collection', {
		name: "Collection of all pings and pointers",
		config: false,
		restricted: false,
		scope: "world",
		type: Object,
		default: PointerSettingsMenu.defaultCollection,
		onChange: (data) => {
			canvas.controls.pointer.updateAll();
		}
	});

	// game.settings.register('pointer', 'version', {
	// 	name: "Pointer Version",
	// 	scope: "world",
	// 	config: false,
	// 	default: "0",
	// 	type: String
	// });
	// if (game.user.isGM) {
	// 	const version = game.settings.get('pointer', 'version');
	// 	// only do this once after upgrading to 2.0.0
	// 	if (isNewerVersion("2.0.0", version)) {
	// 		new (PointerSettingsMenu)().render(true);
	// 	}
	// 	// Update version to newest mod version - every time
	// 	if (isNewerVersion(game.modules.get('pointer').version, version)) {
	// 		game.settings.set('pointer', 'version', game.modules.get('pointer').version);
	// 	}
	// }

	// ========================================================================
	game.settings.register(CONSTANTS.MODULE_ID, "debug", {
		name: `${CONSTANTS.MODULE_ID}.setting.debug.name`,
		hint: `${CONSTANTS.MODULE_ID}.setting.debug.hint`,
		scope: "client",
		config: true,
		default: false,
		type: Boolean
	});
};
class ResetSettingsDialog extends FormApplication {
	constructor(...args) {
		//@ts-ignore
		super(...args);
		//@ts-ignore
		return new Dialog({
			title: game.i18n.localize(`${CONSTANTS.MODULE_ID}.dialogs.resetsettings.title`),
			content:
				'<p style="margin-bottom:1rem;">' +
				game.i18n.localize(`${CONSTANTS.MODULE_ID}.dialogs.resetsettings.content`) +
				"</p>",
			buttons: {
				confirm: {
					icon: '<i class="fas fa-check"></i>',
					label: game.i18n.localize(`${CONSTANTS.MODULE_ID}.dialogs.resetsettings.confirm`),
					callback: async () => {
						const worldSettings = game.settings.storage
							?.get("world")
							?.filter((setting) => setting.key.startsWith(`${CONSTANTS.MODULE_ID}.`));
						for (let setting of worldSettings) {
							console.log(`Reset setting '${setting.key}'`);
							await setting.delete();
						}
						//window.location.reload();
					}
				},
				cancel: {
					icon: '<i class="fas fa-times"></i>',
					label: game.i18n.localize(`${CONSTANTS.MODULE_ID}.dialogs.resetsettings.cancel`)
				}
			},
			default: "cancel"
		});
	}
	async _updateObject(event, formData) {
		// do nothing
	}
}
