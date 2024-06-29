import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevEmojiPickerComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="emoji">Select emoji</label>
                    <div
                        contenteditable="true"
                        style="display:inline-block;min-width:240px;min-height:24px;background:white;"
                        id="emoji"
                        name="emoji"
                        type="text"
                        value=""
                        @input="${this.handleEmojiLocalInput}"
                    ></div>
                    <md-emoji-picker
                        id="emojiPicker"
                        value=""
                        .frequentlyUsed="${[{ emoji: "😑" }, { emoji: "🥱" }, { emoji: "🫣" }, { emoji: "🧐" }, { emoji: "😵" }, { emoji: "😩" }, { emoji: "😆" }, { emoji: "🤪" }, { emoji: "😁" }, { emoji: "😔" }, { emoji: "😤" }, { emoji: "😮‍💨" }, { emoji: "🥳" }]}"
                        @onEmojiPickerButtonCancelClick="${this.handleEmojiPickerButtonCancelClick}"
                        @onEmojiPickerButtonOkClick="${this.handleEmojiPickerButtonOkClick}"
                        @onEmojiPickerSelection="${this.handleEmojiPickerSelection}"
                        @onEmojiPickerGridColumnClick="${this.handleEmojiPickerGridColumnClick}"
                    ></md-emoji-picker>
                    <md-button
                        variant="tonal"
                        label="Emoji Picker"
                        @click="${this.handleEmojiPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-emoji-picker id="emojiPicker2"></md-emoji-picker>
                    <md-button
                        variant="tonal"
                        label="Emoji Picker 2"
                        @click="${this.handleEmojiPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `;
    }

    get emoji() {
        return this.querySelector("#emoji");
    }

    get emojiPicker() {
        return this.querySelector("#emojiPicker");
    }

    get emojiPicker2() {
        return this.querySelector("#emojiPicker2");
    }

    // button
    handleEmojiPickerButtonClick(event) {
        this.emojiPicker.showModal(event.currentTarget);
    }

    handleEmojiPickerButtonClick2(event) {
        this.emojiPicker2.showModal(event.currentTarget);
    }

    // input
    handleEmojiLocalInput() {
        this.emojiPicker.value = this.emoji.value;
    }

    // emoji-picker
    handleEmojiPickerButtonCancelClick() {
        // this.emoji.value = this.emojiPicker.value;
        this.emojiPicker.close();
    }

    handleEmojiPickerButtonOkClick() {
        this.emoji.value = this.emojiPicker.value;
        this.emojiPicker.close();
    }

    handleEmojiPickerSelection() {
        // this.emoji.value = this.emojiPicker.selection.hex.slice(0, 1 + 6);
    }

    handleEmojiPickerGridColumnClick(event) {
        const emoji = event.detail.currentTarget.data.emoji;
    }
}

customElements.define("dev-emoji-picker", DevEmojiPickerComponent);

export default document.createElement("dev-emoji-picker");
