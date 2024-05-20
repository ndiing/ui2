import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Scrolling } from "../../com/scrolling/scrolling";

let emojis = [
    {
        name: "Smileys and emotions",
        glyphs: "😀 😃 😄 😁 😆 😅 😂 🤣 😭 😉 😗 😙 😚 😘 🥰 😍 🤩 🥳 🙃 🙂 🥲 🥹 😋 😛 😝 😜 🤪 😇 😊 ☺️ 😏 😌 😔 😑 😐 😶 🫡 🤔 🤫 🫢 🤭 🥱 🤗 🫣 😱 🤨 🧐 😒 🙄 😮‍💨 😤 😠 😡 🤬 🥺 😟 😥 😢 ☹️ 🙁 🫤 😕 🤐 😰 😨 😧 😦 😮 😯 😲 😳 🤯 😬 😓 😞 😖 😣 😩 😫 😵 😵‍💫 🫥 😴 😪 🤤 🌛 🌜 🌚 🌝 🌞 🫠 😶‍🌫️ 🥴 🥵 🥶 🤢 🤮 🤧 🤒 🤕 😷 🤠 🤑 😎 🤓 🥸 🤥 🤡 👻 💩 👽 🤖 🎃 😈 👿 👹 👺 🔥 💫 ⭐ 🌟 ✨ 💥 💯 💢 💨 💦 🫧 💤 🕳️ 🎉 🎊 🙈 🙉 🙊 😺 😸 😹 😻 😼 😽 🙀 😿 😾 ❤️ 🧡 💛 💚 💙 💜 🤎 🖤 🤍 ♥️ 💘 💝 💖 💗 💓 💞 💕 💌 💟 ❣️ ❤️‍🩹 💔 ❤️‍🔥 💋 🫂 👥 👤 🗣️ 👣 🧠 🫀 🫁 🩸 🦠 🦷 🦴 ☠️ 💀 👀 👁️ 👄 🫦 👅 👃 👂 🦻 🦶 🦵 🦿 🦾 💪 👍 👎 👏 🫶 🙌 👐 🤲 🤝 🤜 🤛 ✊ 👊 🫳 🫴 🫱 🫲 🤚 👋 🖐️ ✋ 🖖 🤟 🤘 ✌️ 🤞 🫰 🤙 🤌 🤏 👌 🖕 ☝️ 👆 👇 👉 👈 🫵 ✍️ 🤳 🙏 💅",
    },
    {
        name: "People",
        glyphs: "🙇 🙋 💁 🙆 🙅 🤷 🤦 🙍 🙎 🧏 💆 💇 🧖 🛀 🛌 🧘 🧑‍🦯 🧑‍🦼 🧑‍🦽 🧎 🧍 🚶 🏃 🤸 🏋️ ⛹️ 🤾 🚴 🚵 🧗 🤼 🤹 🏌️ 🏇 🤺 ⛷️ 🏂 🪂 🏄 🚣 🏊 🤽 🧜 🧚 🧞 🧝 🧙 🧛 🧟 🧌 🦸 🦹 🥷 🧑‍🎄 👼 💂 🫅 🤵 👰 🧑‍🚀 👷 👮 🕵️ 🧑‍✈️ 🧑‍🔬 🧑‍⚕️ 🧑‍🔧 🧑‍🏭 🧑‍🚒 🧑‍🌾 🧑‍🏫 🧑‍🎓 🧑‍💼 🧑‍⚖️ 🧑‍💻 🧑‍🎤 🧑‍🎨 🧑‍🍳 👳 🧕 👲 👶 🧒 🧑 🧓 🧑‍🦳 🧑‍🦰 👱 🧑‍🦱 🧑‍🦲 🧔 🕴️ 💃 🕺 👯 🧑‍🤝‍🧑 👭 👬 👫 💏 👩‍❤️‍💋‍👨 👨‍❤️‍💋‍👨 👩‍❤️‍💋‍👩 💑 👩‍❤️‍👨 👨‍❤️‍👨 👩‍❤️‍👩 🫄 🤱 🧑‍🍼 👪",
    },
    {
        name: "Animals and nature",
        glyphs: "💐 🌹 🥀 🌺 🌷 🪷 🌸 💮 🏵️ 🌻 🌼 🍂 🍁 🍄 🌾 🌱 🌿 🍃 ☘️ 🍀 🪴 🌵 🌴 🌳 🌲 🪹 🪺 🪵 🪨 ⛰️ 🏔️ ❄️ ☃️ ⛄ 🌊 🫧 🌬️ 🌀 🌪️ 🌁 🌫️ 🌡️ 🔥 🌋 🏜️ 🏞️ 🏖️ ⛱️ 🌅 🌄 ☀️ 🌤️ ⛅ 🌥️ 🌦️ ☁️ 🌨️ ⛈️ 🌩️ 🌧️ 💧 ☔ ⚡ 🌈 ⭐ 🌟 💫 ✨ 🌙 ☄️ 🌠 🌌 🪐 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌍 🌎 🌏 🙈 🙉 🙊 🐵 🦁 🐯 🐱 🐶 🐺 🐻 🐻‍❄️ 🐨 🐼 🐹 🐭 🐰 🦊 🦝 🐮 🐷 🐽 🐗 🦓 🦄 🐴 🐸 🐲 🦎 🐉 🦖 🦕 🐢 🐊 🐍 🐁 🐀 🐇 🐈 🐈‍⬛ 🐩 🐕 🦮 🐕‍🦺 🐅 🐆 🐎 🐖 🐄 🐂 🐃 🦬 🐏 🐑 🐐 🦌 🦙 🦥 🦘 🐘 🦣 🦏 🦛 🦒 🐒 🦍 🦧 🐪 🐫 🐿️ 🦫 🦨 🦡 🦔 🦦 🦇 🪶 🦅 🦉 🐓 🐔 🐣 🐤 🐥 🐦 🦜 🕊️ 🦤 🦢 🦩 🦚 🦃 🦆 🐧 🦭 🦈 🐬 🐋 🐳 🐟 🐠 🐡 🦐 🦞 🦀 🦑 🐙 🦪 🪸 🦂 🕷️ 🕸️ 🐚 🐌 🐜 🦗 🪲 🦟 🪳 🪰 🐝 🐞 🦋 🐛 🪱 🦠 🐾",
    },
    {
        name: "Food and drink",
        glyphs: "🍓 🍒 🍎 🍉 🍑 🍊 🥭 🍍 🍌 🍋 🍈 🍏 🍐 🥝 🫒 🫐 🍇 🥥 🍅 🌶️ 🥕 🍠 🧅 🌽 🥦 🥒 🥬 🫑 🥑 🍆 🧄 🥔 🫘 🌰 🥜 🍞 🫓 🥐 🥖 🥯 🧇 🥞 🍳 🥚 🧀 🥓 🥩 🍗 🍖 🍔 🌭 🥪 🥨 🍟 🍕 🫔 🌮 🌯 🥙 🧆 🥘 🍝 🥫 🫕 🥣 🥗 🍲 🍛 🍜 🦪 🦞 🍣 🍤 🥡 🍚 🍱 🥟 🍢 🍙 🍘 🍥 🍡 🥠 🥮 🍧 🍨 🍦 🥧 🍰 🍮 🎂 🧁 🍭 🍬 🍫 🍩 🍪 🍯 🧂 🧈 🍿 🧊 🫙 🥤 🧋 🧃 🥛 🍼 🍵 ☕ 🫖 🧉 🍺 🍻 🥂 🍾 🍷 🥃 🫗 🍸 🍹 🍶 🥢 🍴 🥄 🔪 🍽️",
    },
    {
        name: "Travel and places",
        glyphs: "🛑 🚧 🚨 ⛽ 🛢️ 🧭 🛞 🛟 ⚓ 🚏 🚇 🚥 🚦 🛴 🦽 🦼 🩼 🚲 🛵 🏍️ 🚙 🚗 🛻 🚐 🚚 🚛 🚜 🏎️ 🚒 🚑 🚓 🚕 🛺 🚌 🚈 🚝 🚅 🚄 🚂 🚃 🚋 🚎 🚞 🚊 🚉 🚍 🚔 🚘 🚖 🚆 🚢 🛳️ 🛥️ 🚤 ⛴️ ⛵ 🛶 🚟 🚠 🚡 🚁 🛸 🚀 ✈️ 🛫 🛬 🛩️ 🛝 🎢 🎡 🎠 🎪 🗼 🗽 🗿 🗻 🏛️ 💈 ⛲ ⛩️ 🕍 🕌 🕋 🛕 ⛪ 💒 🏩 🏯 🏰 🏗️ 🏢 🏭 🏬 🏪 🏟️ 🏦 🏫 🏨 🏣 🏤 🏥 🏚️ 🏠 🏡 🏘️ 🛖 ⛺ 🏕️ 🏙️ 🌆 🌇 🌃 🌉 🌁 🛤️ 🛣️ 🏝️ 🗾 🗺️ 🌐 💺 🧳",
    },
    {
        name: "Activities and events",
        glyphs: "🎉 🎊 🎈 🎂 🎀 🎁 🎇 🎆 🧨 🧧 🪔 🪅 🪩 🎐 🎏 🎎 🎑 🎍 🎋 🎄 🎃 🎗️ 🥇 🥈 🥉 🏅 🎖️ 🏆 📢 ⚽ ⚾ 🥎 🏀 🏐 🏈 🏉 🎾 🥅 🏸 🥍 🏏 🏑 🏒 🥌 🛷 🎿 ⛸️ 🛼 🩰 🛹 ⛳ 🎯 🏹 🥏 🪃 🪁 🎣 🤿 🩱 🎽 🥋 🥊 🎱 🏓 🎳 ♟️ 🪀 🧩 🎮 🕹️ 👾 🔫 🎲 🎰 🎴 🀄 🃏 🪄 🎩 📷 📸 🖼️ 🎨 🖌️ 🖍️ 🪡 🧵 🧶 🎹 🎷 🎺 🎸 🪕 🎻 🪘 🥁 🪗 🎤 🎧 🎚️ 🎛️ 🎙️ 📻 📺 📼 📹 📽️ 🎥 🎞️ 🎬 🎭 🎫 🎟️",
    },
    {
        name: "Objects",
        glyphs: "📱 ☎️ 📞 📟 📠 🔌 🔋 🪫 🖲️ 💽 💾 💿 📀 🖥️ 💻 ⌨️ 🖨️ 🖱️ 🪙 💸 💵 💴 💶 💷 💳 💰 🧾 🧮 ⚖️ 🛒 🛍️ 🕯️ 💡 🔦 🏮 🧱 🪟 🪞 🚪 🪑 🛏️ 🛋️ 🚿 🛁 🚽 🧻 🪠 🧸 🪆 🧷 🪢 🧹 🧴 🧽 🧼 🪥 🪒 🧺 🧦 🧤 🧣 👖 👕 🎽 👚 👔 👗 👘 🥻 🩱 👙 🩳 🩲 🧥 🥼 🦺 ⛑️ 🪖 🎓 🎩 👒 🧢 👑 🎒 👝 👛 👜 💼 🧳 ☂️ 🌂 💍 💎 💄 👠 👟 👞 🥿 🩴 👡 👢 🥾 👓 🕶️ 🦯 🥽 ⚗️ 🧫 🧪 🌡️ 🧬 💉 💊 🩹 🩺 🩻 🔭 🔬 📡 🛰️ 🧯 🪓 🪜 🪣 🪝 🧲 🧰 🗜️ 🔩 🪛 🪚 🔧 🔨 ⚒️ 🛠️ ⛏️ ⚙️ 🔗 ⛓️ 📎 🖇️ 📏 📐 ✂️ 📌 📍 🗑️ 🖌️ 🖍️ 🖊️ 🖋️ ✒️ ✏️ 📝 📒 📔 📕 📓 📗 📘 📙 📚 📖 🔖 🗒️ 📄 📃 📋 📇 📑 🗃️ 🗄️ 🗂️ 📂 📁 📰 🗞️ 📊 📈 📉 🪧 🪪 🏷️ 📦 📫 📪 📬 📭 📮 ✉️ 📧 📩 📨 💌 📤 📥 🗳️ ⏱️ 🕛 🕧 🕐 🕜 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 🕙 🕥 🕚 🕦 ⌛ ⏳ 🕰️ ⌚ ⏲️ ⏰ 🗓️ 📅 📆 🛎️ 🔔 📯 📢 📣 🔍 🔎 🔮 🧿 🪬 📿 🏺 ⚱️ ⚰️ 🪦 🚬 💣 🪤 📜 ⚔️ 🗡️ 🛡️ 🗝️ 🔑 🔐 🔏 🔒 🔓",
    },
    {
        name: "Symbols",
        glyphs: "❤️ 🧡 💛 💚 💙 💜 🤎 🖤 🤍 🔴 🟠 🟡 🟢 🔵 🟣 🟤 ⚫ ⚪ 🟥 🟧 🟨 🟩 🟦 🟪 🟫 ⬛ ⬜ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ ♀️ ♂️ ⚧️ 🔻 🔺 ❕ ❗ ❔ ❓ ⁉️ ‼️ ⭕ ❌ 🚫 🚳 🚭 🚯 🚱 🚷 📵 🔞 🔕 🔇 🅰️ 🆎 🅱️ 🅾️ 🆑 🆘 🛑 ⛔ 📛 ♨️ 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🉑 🈶 🈚 🈸 🈺 🈷️ 🔶 🔸 🔆 🔅 ✴️ 🆚 🎦 📶 🔁 🔂 🔀 ▶️ ⏩ ⏭️ ⏯️ ◀️ ⏪ ⏮️ 🔼 ⏫ 🔽 ⏬ ⏸️ ⏹️ ⏺️ ⏏️ 📴 📳 📲 🔈 🔉 🔊 🎼 🎵 🎶 ☢️ ☣️ ⚠️ 🚸 ⚜️ 🔱 〽️ 🔰 ✳️ ❇️ ♻️ 💱 💲 💹 🈯 ❎ ✅ ✔️ ☑️ ⬆️ ↗️ ➡️ ↘️ ⬇️ ↙️ ⬅️ ↖️ ↕️ ↔️ ↩️ ↪️ ⤴️ ⤵️ 🔃 🔄 🔙 🔛 🔝 🔚 🔜 🆕 🆓 🆙 🆗 🆒 🆖 ℹ️ 🅿️ 🈁 🈂️ 🈳 🔣 🔤 🔠 🔡 🔢 #️⃣ *️⃣ 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 💠 🔷 🔹 🌐 🏧 Ⓜ️ 🚾 🚻 🚹 🚺 ♿ 🚼 🛗 🚮 🚰 🛂 🛃 🛄 🛅 💟 ⚛️ 🛐 🕉️ ☸️ ☮️ ☯️ ☪️ ✝️ ☦️ ✡️ 🔯 🕎 ♾️ 🆔 ⚕️ ✖️ ➕ ➖ ➗ 🟰 ➰ ➿ 〰️ ©️ ®️ ™️ ♥️ ♦️ ♣️ ♠️ 🔘 🔳 ◼️ ◾ ▪️ 🔲 ◻️ ◽ ▫️ 💭 🗯️ 💬 🗨️ 👁️‍🗨️",
    },
    {
        name: "Flags",
        glyphs: "🏁 🚩 🎌 🏴 🏳️ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ 🇦🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇶 🇧🇷 🇧🇸 🇧🇹 🇧🇻 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇵 🇨🇷 🇨🇺 🇨🇻 🇨🇼 🇨🇽 🇨🇾 🇨🇿 🇩🇪 🇩🇬 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇦 🇪🇨 🇪🇪 🇪🇬 🇪🇭 🇪🇷 🇪🇸 🇪🇹 🇪🇺 🇫🇮 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇲 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇨 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇪 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇺 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇫 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇲 🇵🇳 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇪 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇨 🇸🇩 🇸🇪 🇸🇬 🇸🇭 🇸🇮 🇸🇯 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇸 🇸🇹 🇸🇻 🇸🇽 🇸🇾 🇸🇿 🇹🇦 🇹🇨 🇹🇩 🇹🇫 🇹🇬 🇹🇭 🇹🇯 🇹🇰 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇲 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇬 🇻🇮 🇻🇳 🇻🇺 🇼🇫 🇼🇸 🇽🇰 🇾🇪 🇾🇹 🇿🇦 🇿🇲 🇿ð¼ 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    },
];

emojis = emojis.map((emoji) => emoji.glyphs.split(" ")).flat();

const total = emojis.length;
const limit = 12;
const pages = Math.ceil(total / limit);

const emojis2 = [];
for (let i = 0; i < pages; i++) {
    const page = i + 1;
    const start = (page - 1) * limit;
    const end = start + limit;
    emojis2.push(emojis.slice(start, end));
}
// console.log(emojis2)

class DevEmoji extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">

                    <div class="viewport" style="height:calc(32px * 12);width:calc(32px * 12);">
                        <div class="scrollbar"></div>
                        <div class="container">
                            ${this.emojis?.map(emojis => html`
                                <div class="row" style="display: grid;grid-template-columns: repeat(12,minmax(0,1fr));">
                                    ${emojis.map(emoji => html`
                                        <md-emoji style="margin:4px;">${emoji}</md-emoji>
                                    `)}
                                </div>
                            `)}
                        </div>
                    </div>
                
                </div>
                
                
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.viewport = this.querySelector(".viewport");
        this.scrollbar = this.querySelector(".scrollbar");
        this.container = this.querySelector(".container");

        this.viewport.addEventListener("onScrolling", (event) => {
            const { start, end } = event.detail;
            this.emojis = emojis2.slice(start, end);
            this.requestUpdate();
        });
        this.scrolling = new Scrolling(this.viewport, {
            scrollbar: this.scrollbar,
            container: this.container,
            total: emojis2.length,
            itemHeight: 32,
        });
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.scrolling?.destroy();
    }
}

customElements.define("dev-emoji", DevEmoji);

export default document.createElement("dev-emoji");
