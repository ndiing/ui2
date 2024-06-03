import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppTempFieldElement extends MDElement {
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
                        <md-temp-field
                            name="text"
                            placeholder="Placeholder text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="rounded"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="filled rounded"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            required
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            leadingIcon="image"
                            trailingIcon="image"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            value="1.000.000"
                            label="Label text"
                            text="Supporting text"
                            placeholder="1.000.000"
                            leadingMeta="Rp"
                            trailingMeta=",00"
                        ></md-temp-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-temp-field
                            ui="outlined rounded"
                            name="text"
                            required
                            label="Label text"
                            text="Supporting text"
                            placeholder="Placeholder text"
                            .trailingActions="${[{ icon: "image" },{ icon: "image" }]}"
                        ></md-temp-field>
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

customElements.define("app-temp-field", AppTempFieldElement);

export default document.createElement("app-temp-field");
