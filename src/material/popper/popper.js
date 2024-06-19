/**
 * Manages the positioning of a pop-up container relative to a button or host element.
 *
 * @example
 * // Create a pop-up element and a button element
 * const popUp = document.createElement('div');
 * popUp.textContent = 'I am a pop-up';
 * document.body.appendChild(popUp);
 *
 * const button = document.createElement('button');
 * button.textContent = 'Show Pop-up';
 * document.body.appendChild(button);
 *
 * // Create an instance of MDPopperController with the button as the host
 * const popperController = new MDPopperController(button, {
 *     placements: ['below', 'above', 'right', 'left'],
 *     offset: 10,
 *     boundary: document.body
 * });
 *
 * // Show the pop-up when the button is clicked
 * button.addEventListener('click', () => {
 *     popperController.show(button);
 * });
 */
class MDPopperController {
    /**
     * @param {HTMLElement} host - The host element that controls the pop-up.
     * @param {Object} options - Options for configuring the pop-up placement.
     * @param {Array<string>} options.placements - List of possible placements for the pop-up relative to the button.
     * @param {number} options.offset - Offset value to adjust the position of the pop-up.
     * @param {HTMLElement} options.boundary - Boundary element to constrain the pop-up within.
     */
    constructor(host, options) {
        this.host = host;
        this.host.addController(this); // Assuming `addController` method exists on host to register this controller.
        this.options = options;
    }

    /**
     * Waits for the host element to complete its update.
     */
    async hostConnected() {
        await this.host.updateComplete; // Assuming `updateComplete` is a promise that resolves when host finishes updating.
    }

    /**
     * Waits for the host element to complete its update.
     */
    async hostDisconnected() {
        await this.host.updateComplete; // Assuming `updateComplete` is a promise that resolves when host finishes updating.
    }

    /**
     * Shows the pop-up relative to a button or element.
     * @param {HTMLElement|Event} button - The button or element to position the pop-up relative to.
     * @param {Object} [options] - Additional options to override default options.
     */
    async show(button, options = {}) {
        // Merge provided options with default options
        this.options = {
            /* prettier-ignore */
            placements: [
                "above", "above-start", "above-end",
                "after", "after-start", "after-end",
                "below", "below-start", "below-end",
                "before", "before-start", "before-end",
                "top", "top-start", "top-end",
                "right", "right-start", "right-end",
                "bottom", "bottom-start", "bottom-end",
                "left", "left-start", "left-end",
                "north-east", "south-east", "south-west", "north-west",
                "center"
            ],
            offset: 0,
            boundary: document.documentElement,
            ...options,
        };

        // Set references to container, button, and boundary
        this.container = this.host;
        this.button = button;
        this.boundary = this.options.boundary;

        // Define placement calculations for each placement option
        const placements = [
            { placement: "above", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top - containerRect.height - this.options.offset, originX: "50%", originY: "100%" }) },
            { placement: "above-start", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left, top: buttonRect.top - containerRect.height - this.options.offset, originX: "0%", originY: "100%" }) },
            { placement: "above-end", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.top - containerRect.height - this.options.offset, originX: "100%", originY: "100%" }) },
            { placement: "after", calculate: (buttonRect, containerRect) => ({ left: buttonRect.right + this.options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "0%", originY: "50%" }) },
            { placement: "after-start", calculate: (buttonRect) => ({ left: buttonRect.right + this.options.offset, top: buttonRect.top, originX: "0%", originY: "0%" }) },
            { placement: "after-end", calculate: (buttonRect, containerRect) => ({ left: buttonRect.right + this.options.offset, top: buttonRect.top + buttonRect.height - containerRect.height, originX: "0%", originY: "100%" }) },
            { placement: "below", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.bottom + this.options.offset, originX: "50%", originY: "0%" }) },
            { placement: "below-start", calculate: (buttonRect) => ({ left: buttonRect.left, top: buttonRect.bottom + this.options.offset, originX: "0%", originY: "0%" }) },
            { placement: "below-end", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.bottom + this.options.offset, originX: "100%", originY: "0%" }) },
            { placement: "before", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left - containerRect.width - this.options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "100%", originY: "50%" }) },
            { placement: "before-start", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left - containerRect.width - this.options.offset, top: buttonRect.top, originX: "100%", originY: "0%" }) },
            { placement: "before-end", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left - containerRect.width - this.options.offset, top: buttonRect.top + buttonRect.height - containerRect.height, originX: "100%", originY: "100%" }) },
            { placement: "top", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top + this.options.offset, originX: "50%", originY: "0%" }) },
            { placement: "top-start", calculate: (buttonRect) => ({ left: buttonRect.left, top: buttonRect.top + this.options.offset, originX: "0%", originY: "0%" }) },
            { placement: "top-end", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.top + this.options.offset, originX: "100%", originY: "0%" }) },
            { placement: "right", calculate: (buttonRect, containerRect) => ({ left: buttonRect.right - containerRect.width - this.options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "0%", originY: "50%" }) },
            { placement: "right-start", calculate: (buttonRect, containerRect) => ({ left: buttonRect.right - containerRect.width - this.options.offset, top: buttonRect.top, originX: "0%", originY: "0%" }) },
            { placement: "right-end", calculate: (buttonRect, containerRect) => ({ left: buttonRect.right - containerRect.width - this.options.offset, top: buttonRect.top + buttonRect.height - containerRect.height, originX: "0%", originY: "100%" }) },
            { placement: "bottom", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.bottom - containerRect.height - this.options.offset, originX: "50%", originY: "100%" }) },
            { placement: "bottom-start", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left, top: buttonRect.bottom - containerRect.height - this.options.offset, originX: "0%", originY: "100%" }) },
            { placement: "bottom-end", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + buttonRect.width - containerRect.width, top: buttonRect.bottom - containerRect.height - this.options.offset, originX: "100%", originY: "100%" }) },
            { placement: "left", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + this.options.offset, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "100%", originY: "50%" }) },
            { placement: "left-start", calculate: (buttonRect) => ({ left: buttonRect.left + this.options.offset, top: buttonRect.top, originX: "100%", originY: "0%" }) },
            { placement: "left-end", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + this.options.offset, top: buttonRect.top + buttonRect.height - containerRect.height, originX: "100%", originY: "100%" }) },
            { placement: "north-east", calculate: (buttonRect, containerRect) => ({ left: buttonRect.right + this.options.offset, top: buttonRect.top - containerRect.height - this.options.offset, originX: "0%", originY: "100%" }) },
            { placement: "south-east", calculate: (buttonRect) => ({ left: buttonRect.right + this.options.offset, top: buttonRect.bottom + this.options.offset, originX: "0%", originY: "0%" }) },
            { placement: "south-west", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left - containerRect.width - this.options.offset, top: buttonRect.bottom + this.options.offset, originX: "100%", originY: "0%" }) },
            { placement: "north-west", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left - containerRect.width - this.options.offset, top: buttonRect.top - containerRect.height - this.options.offset, originX: "100%", originY: "100%" }) },
            { placement: "center", calculate: (buttonRect, containerRect) => ({ left: buttonRect.left + (buttonRect.width - containerRect.width) / 2, top: buttonRect.top + (buttonRect.height - containerRect.height) / 2, originX: "50%", originY: "50%" }) },
        ];

        // Loop through each placement option and try to find a suitable position within the boundary
        for (const placement of this.options.placements) {
            const containerRect = this.container.getBoundingClientRect();
            const buttonRect = this.calculateBoundingClientRect(this.button);
            const boundaryRect = this.boundary.getBoundingClientRect();

            // Find the placement object that matches the current placement option
            const item = placements.find((item) => item.placement === placement);

            // Calculate the position and origin based on the found placement object
            const { left, top, originX, originY } = item.calculate(buttonRect, containerRect);
            const right = left + containerRect.width;
            const bottom = top + containerRect.height;

            // Check if the calculated position exceeds the boundary
            const exceed = left < boundaryRect.left || top < boundaryRect.top || right > boundaryRect.right || bottom > boundaryRect.bottom;

            // If the position does not exceed the boundary, set the styles and break the loop
            if (!exceed) {
                this.container.style.left = `${left}px`;
                this.container.style.top = `${top}px`;
                this.container.style.transformOrigin = `${originX} ${originY}`;
                break;
            }
        }
    }

    /**
     * Calculates the bounding client rect of an element or event.
     * @param {HTMLElement|Event} button - The button or element to calculate the bounding client rect for.
     * @returns {Object} Bounding client rect object with properties: left, top, width, height, right, bottom.
     */
    calculateBoundingClientRect(button) {
        if (button instanceof Event) {
            const { clientX: left, clientY: top, width, height } = button;

            return { left, top, width, height, right: left + width, bottom: top + height };
        } else {
            return button.getBoundingClientRect();
        }
    }
}

export { MDPopperController };
