import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Scrolling } from "../../com/scrolling/scrolling";


const emojis = [
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
      glyphs: "🏁 🚩 🎌 🏴 🏳️ 🏳️‍🌈 🏳️‍⚧️ 🏴‍☠️ 🇦🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇶 🇧🇷 🇧🇸 🇧🇹 🇧🇻 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇵 🇨🇷 🇨🇺 🇨🇻 🇨🇼 🇨🇽 🇨🇾 🇨🇿 🇩🇪 🇩🇬 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇦 🇪🇨 🇪🇪 🇪🇬 🇪🇭 🇪🇷 🇪🇸 🇪🇹 🇪🇺 🇫🇮 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇲 🇭🇳 🇭🇷 🇭🇹 🇭🇺 🇮🇨 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇪 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇺 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇫 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇲 🇵🇳 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇪 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇨 🇸🇩 🇸🇪 🇸🇬 🇸🇭 🇸🇮 🇸🇯 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇸 🇸🇹 🇸🇻 🇸🇽 🇸🇾 🇸🇿 🇹🇦 🇹🇨 🇹🇩 🇹🇫 🇹🇬 🇹🇭 🇹🇯 🇹🇰 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇲 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇬 🇻🇮 🇻🇳 🇻🇺 🇼🇫 🇼🇸 🇽🇰 🇾🇪 🇾🇹 🇿🇦 🇿🇲 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿",// 🇿ð¼ 
  },
];


const data = [];

for (const emoji of emojis) {
    const label = emoji.name;
    const emojis = emoji.glyphs.split(' ');
    data.push(label);
    let cols = 12;
    let rows = Math.ceil(emojis.length / cols);
    for (let i = 0; i < rows; i++) {
        let start = i * cols;
        let end = start + cols;
        data.push(emojis.slice(start, end));
    }
}

class DevEmoji extends MDElement {
    constructor(){
        super()

        this.data=data.slice(0,10)
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div class="viewport" style="height:calc(40px * 10);" @onScrolling="${this.handleScrolling}">
                        <div class="scrollbar"></div>
                        <div class="container">
                            ${this.data?.map(row=>html`
                                <div class="row">
                                    ${Array.isArray(row)?row.map(item=>html`
                                        <md-emoji class="item" style="height:40px;line-height:40px;">${item}</md-emoji>
                                    `):html`
                                        <div class="item" style="height:40px;line-height:40px;">${row}</div>
                                    `}
                                </div>
                            `)}
                        </div>
                    </div>
                </div>

            </div>
        `;
    }


    async connectedCallback(){
        super.connectedCallback()

        await this.updateComplete

        this.viewport = this.querySelector('.viewport')
        this.scrollbar = this.querySelector('.scrollbar')
        this.container = this.querySelector('.container')

        this.scrolling = new Scrolling(this.viewport,{
            scrollbar: this.scrollbar,
            container: this.container,
            itemHeight:40,
            total: data.length
        })
    }

    handleScrolling(event){
        const {start,end} = event.detail

        this.data=data.slice(start,end)

        this.requestUpdate()
    }

    disconnectedCallback(){
        super.disconnectedCallback()

        this.scrolling?.destroy()
    }
}

customElements.define("dev-emoji", DevEmoji);

export default document.createElement("dev-emoji");
