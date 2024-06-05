import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppTextFieldElement extends MDElement {
    render() {
        return html`
            <md-form
                @onFormNativeSubmit="${(event) => {
                    console.log(Object.fromEntries(new FormData(event.detail.currentTarget).entries()));
                }}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            value="Input text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            value="Input text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            value="Input text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            value="Input text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            value="Input text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            value="Input text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            value="Input text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            value="Input text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            value="Input text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            value="Input text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            value="Input text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            value="Input text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="rounded"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            value="Input text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            value="Input text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            value="Input text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="filled rounded"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            value="Input text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            value="Input text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            value="Input text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-text-field
                            ui="outlined rounded"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" }]}"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-button
                            type="reset"
                            label="Reset"
                        ></md-button>
                        <md-button
                            type="submit"
                            label="Submit"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("app-text-field", AppTextFieldElement);

export default document.createElement("app-text-field");
