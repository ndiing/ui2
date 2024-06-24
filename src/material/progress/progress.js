let requestId;
let startTime;
let pausedTime = 0;
let totalDuration = 10000;
let isAnimating = false;
let elapsedTime = 0;
let progressBar;

/**
 * Starts the progress bar animation.
 * @param {number} [duration=10000] - The total duration for the progress bar animation in milliseconds.
 * @returns {Promise<void>} - A promise that resolves when the animation is complete.
 */
function start(duration = 10000) {
    return new Promise((resolve) => {
        if (!progressBar) {
            createProgressBar();
        }

        if (isAnimating) {
            totalDuration += duration;
            resolve();
            return;
        }

        totalDuration = duration;
        isAnimating = true;
        startTime = performance.now() - pausedTime;
        progressBar.setAttribute("max", totalDuration);
        loop(resolve);
    });
}

/**
 * Creates and inserts the progress bar element into the document body.
 */
function createProgressBar() {
    progressBar = document.createElement("md-progress-indicator");
    progressBar.setAttribute("max", totalDuration);
    progressBar.setAttribute("value", 0);
    document.body.insertAdjacentElement("afterbegin", progressBar);
    progressBar.style.position = "absolute";
    progressBar.style.left = "0px";
    progressBar.style.top = "0px";
}

/**
 * Pauses the progress bar animation.
 */
function pause() {
    if (isAnimating) {
        cancelAnimationFrame(requestId);
        pausedTime = performance.now() - startTime;
        isAnimating = false;
    }
}

/**
 * Resumes the progress bar animation from where it was paused.
 */
function resume() {
    if (!isAnimating) {
        isAnimating = true;
        startTime = performance.now() - pausedTime;
        loop();
    }
}

/**
 * Stops the progress bar animation and resets the animation variables.
 */
function stop() {
    if (isAnimating) {
        let remainingTime = totalDuration - (performance.now() - startTime);
        let progress = Math.min(100, ((totalDuration - remainingTime) / totalDuration) * 100);

        if (progressBar) {
            progressBar.setAttribute("value", totalDuration);
        }

        cancelAnimationFrame(requestId);
        resetAnimationVariables();
    }
}

/**
 * Resets the animation variables and removes the progress bar element after a delay.
 */
function resetAnimationVariables() {
    isAnimating = false;
    pausedTime = 0;
    totalDuration = 10000;
    elapsedTime = 0;

    progressBar.parentNode.removeChild(progressBar);
    progressBar = null;
}

/**
 * The animation loop that updates the progress bar's value.
 * @param {function} [resolve] - The resolve function of the promise to call when the animation is complete.
 */
function loop(resolve) {
    let currentTime = performance.now();
    elapsedTime = currentTime - startTime;

    let progress = Math.min(100, (elapsedTime / totalDuration) * 100);

    if (progressBar) {
        progressBar.setAttribute("value", elapsedTime);
    }

    if (elapsedTime < totalDuration) {
        requestId = requestAnimationFrame(() => loop(resolve));
    } else {
        resetAnimationVariables();
        if (resolve) {
            resolve();
        }
    }
}

export { start, pause, resume, stop };

new PerformanceObserver(function (list) {
    var entries = list.getEntries();
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var name = entry.name;

        start(entry.duration || 100);

        if (name === "markRouterNavigate") {
            pause();
        } else if (name === "measureRouterNavigateSuccess") {
            resume();
        } else if (name === "markRouterNavigateSuccess") {
            stop();
        }
    }
}).observe({
    entryTypes: ["mark", "measure", "navigation"],
});
