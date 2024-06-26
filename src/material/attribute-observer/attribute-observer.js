/**
 * Tambahkan deskripsi
 */
class MDAttributeObserver {
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Tambahkan deskripsi
     */
    observe(target, attributeName) {
        this.callback({
            name: attributeName,
            value: target.getAttribute(attributeName),
        });
        new MutationObserver((entries) => {
            this.callback({
                name: attributeName,
                value: target.getAttribute(attributeName),
            });
        }).observe(target, {
            attributes: true,
            attributeFilter: [attributeName],
        });
    }
}
export { MDAttributeObserver };
