import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevFormField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form-field @onFormFieldNativeSubmit="${console.log}">
                <div class="md-layout__grid">                    
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <label for="">email</label>
                        <br>
                        <input type="email">
                        <br>
                        <br>
                        
                        <label for="">password</label>
                        <br>
                        <input type="password">
                        <br>
                        <br>
                        
                        <label for="">text</label>
                        <br>
                        <input type="text">
                        <br>
                        <br>
                        
                        <label for="">url</label>
                        <br>
                        <input type="url">
                        <br>
                        <br>
                        
                        <label for="">search</label>
                        <br>
                        <input type="search">
                        <br>
                        <br>
                        
                        <label for="">number</label>
                        <br>
                        <input type="number">
                        <br>
                        <br>
                        
                        <label for="">tel</label>
                        <br>
                        <input type="tel">
                        <br>
                        <br>
                        
                        <label for="">date</label>
                        <br>
                        <input type="date">
                        <br>
                        <br>
                        
                        <label for="">datetime</label>
                        <br>
                        <input type="datetime">
                        <br>
                        <br>
                        
                        <label for="">month</label>
                        <br>
                        <input type="month">
                        <br>
                        <br>
                        
                        <label for="">time</label>
                        <br>
                        <input type="time">
                        <br>
                        <br>
                        
                        <label for="">week</label>
                        <br>
                        <input type="week">
                        <br>
                        <br>
                        
                        
                        <label for="">color</label>
                        <br>
                        <input type="color">
                        <br>
                        <br>
                        
                        
                        <label for="">file</label>
                        <br>
                        <input type="file">
                        <br>
                        <br>
                        
                        
                        <input type="checkbox">
                        <br>
                        <label for="">checkbox</label>
                        <br>
                        <br>
                        
                        
                        <input type="radio">
                        <br>
                        <label for="">radio</label>
                        <br>
                        <br>
                        
                        <label for="">select</label>
                        <br>
                        <select>
                            <option value="1">Satu</option>
                            <option value="2">Dua</option>
                            <option value="3">Tiga</option>
                            <option value="4">Empat</option>
                            <option value="5">Lima</option>
                        </select>
                        <br>
                        <br>
                        
                        <label for="">textarea</label>
                        <br>
                        <textarea></textarea>
                        <br>
                        <br>
                        
                        <meter min="0" max="100" low="33" high="66" optimum="80" value="50"></meter>
                        <br>
                        <br>
                        
                        <progress min="0" max="100" value="70"></progress>
                        <br>
                        <br>
                        
                        <button></button>
                    </div>
                    
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button type="reset" label="Reset" ui="filled-tonal"></md-button>
                        <md-button type="submit" label="Submit" ui="filled"></md-button>
                    </div>
                </div>
            </md-form-field>
        `;
    }
}

customElements.define("dev-form-field", DevFormField);

export default document.createElement("dev-form-field");
