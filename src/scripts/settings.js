import { i18n } from "./lib/lib.js";
import CONSTANTS from "./constants.js";
import { refresh } from "./module.js";
export const registerSettings = function () {
	game.settings.registerMenu(CONSTANTS.MODULE_NAME, "resetAllSettings", {
		name: `${CONSTANTS.MODULE_NAME}.setting.reset.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.reset.hint`,
		icon: "fas fa-coins",
		type: ResetSettingsDialog,
		restricted: true
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "rarityFlag", {
		name: `${CONSTANTS.MODULE_NAME}.setting.rarityFlag.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.rarityFlag.hint`,
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

	game.settings.register(CONSTANTS.MODULE_NAME, "spellFlag", {
		name: `${CONSTANTS.MODULE_NAME}.setting.spellFlag.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.spellFlag.hint`,
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

	game.settings.register(CONSTANTS.MODULE_NAME, "featFlag", {
		name: `${CONSTANTS.MODULE_NAME}.setting.featFlag.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.featFlag.hint`,
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

	// game.settings.register(CONSTANTS.MODULE_NAME, "spellFeats", {
	// 	name: "Color Spell and Feature Names on item detail",
	// 	hint: "",
	// 	scope: "world",
	// 	config: true,
	// 	type: Boolean,
	// 	default: true
	// });

	game.settings.register(CONSTANTS.MODULE_NAME, "uncommon", {
		name: `${CONSTANTS.MODULE_NAME}.setting.uncommon.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.uncommon.hint`,
		scope: "client",
		type: String,
		default: "#008000",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "uncommonExternal", {
		name: `${CONSTANTS.MODULE_NAME}.setting.uncommonExternal.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.uncommonExternal.hint`,
		scope: "client",
		type: String,
		default: "#006400",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "rare", {
		name: `${CONSTANTS.MODULE_NAME}.setting.rare.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.rare.hint`,
		scope: "client",
		type: String,
		default: "#0000FF",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "rareExternal", {
		name: `${CONSTANTS.MODULE_NAME}.setting.rareExternal.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.rareExternal.hint`,
		scope: "client",
		type: String,
		default: "#191970",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "veryrare", {
		name: `${CONSTANTS.MODULE_NAME}.setting.veryrare.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.veryrare.hint`,
		scope: "client",
		type: String,
		default: "#800080",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "veryrareExternal", {
		name: `${CONSTANTS.MODULE_NAME}.setting.veryrareExternal.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.veryrareExternal.hint`,
		scope: "client",
		type: String,
		default: "#4B0082",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "legendary", {
		name: `${CONSTANTS.MODULE_NAME}.setting.legendary.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.legendary.hint`,
		scope: "client",
		type: String,
		default: "#FFA500",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "legendaryExternal", {
		name: `${CONSTANTS.MODULE_NAME}.setting.legendaryExternal.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.legendaryExternal.hint`,
		scope: "client",
		type: String,
		default: "#D2691E",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "artifact", {
		name: `${CONSTANTS.MODULE_NAME}.setting.artifact.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.artifact.hint`,
		scope: "client",
		type: String,
		default: "#D2691E",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "artifactExternal", {
		name: `${CONSTANTS.MODULE_NAME}.setting.artifactExternal.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.artifactExternal.hint`,
		scope: "client",
		type: String,
		default: "#91450e",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "spell", {
		name: `${CONSTANTS.MODULE_NAME}.setting.spell.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.spell.hint`,
		scope: "client",
		type: String,
		default: "#4a8396" /*#add8e6*/,
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "spellExternal", {
		name: `${CONSTANTS.MODULE_NAME}.setting.spellExternal.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.spellExternal.hint`,
		scope: "client",
		type: String,
		default: "#0000ff",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "feat", {
		name: `${CONSTANTS.MODULE_NAME}.setting.feat.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.feat.hint`,
		scope: "client",
		type: String,
		default: "#48d1cc",
		config: true,
		onChange: refresh
	});
	game.settings.register(CONSTANTS.MODULE_NAME, "featExternal", {
		name: `${CONSTANTS.MODULE_NAME}.setting.featExternal.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.featExternal.hint`,
		scope: "client",
		type: String,
		default: "#0e5c59",
		config: true,
		onChange: refresh
	});

	// ========================================================================
	game.settings.register(CONSTANTS.MODULE_NAME, "debug", {
		name: `${CONSTANTS.MODULE_NAME}.setting.debug.name`,
		hint: `${CONSTANTS.MODULE_NAME}.setting.debug.hint`,
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
			title: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.dialogs.resetsettings.title`),
			content:
				'<p style="margin-bottom:1rem;">' +
				game.i18n.localize(`${CONSTANTS.MODULE_NAME}.dialogs.resetsettings.content`) +
				"</p>",
			buttons: {
				confirm: {
					icon: '<i class="fas fa-check"></i>',
					label: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.dialogs.resetsettings.confirm`),
					callback: async () => {
						const worldSettings = game.settings.storage
							?.get("world")
							?.filter((setting) => setting.key.startsWith(`${CONSTANTS.MODULE_NAME}.`));
						for (let setting of worldSettings) {
							console.log(`Reset setting '${setting.key}'`);
							await setting.delete();
						}
						//window.location.reload();
					}
				},
				cancel: {
					icon: '<i class="fas fa-times"></i>',
					label: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.dialogs.resetsettings.cancel`)
				}
			},
			default: "cancel"
		});
	}
	async _updateObject(event, formData) {
		// do nothing
	}
}
