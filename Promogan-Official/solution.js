const solutionMap = {
    ecommerce: {
        html: "solutions/ecommerce.html",
        js: "solutionJS/ecommerce.js"
    },
    healthcare: {
        html: "solutions/healthcare.html",
        js: "solutionJS/healthcare.js",
    },
    education: {
        html: "solutions/education.html",
        js: "solutionJS/education.js"
    },
    finance: {
        html: "solutions/finance.html",
        js: "solutionJS/finance.js"
    },
    "digital-marketing": {
        html: "solutions/digital-marketing.html",
        js: "solutionJS/digital-marketing.js"
    }
}

let currentScript = null
function loadScript(src) {
    return new Promise((resolve, reject) => {
        if(currentScript) {
            currentScript.remove()
            currentScript = null
        }

        const script = document.createElement("script")
        script.src = src
        script.defer = true

        script.onload = () => resolve()
        script.onerror = () => reject()
        document.body.appendChild(script)
        currentScript = script
    })
}

function loadSolution() {
    const hash = window.location.hash.substring(1)
    const config = solutionMap[hash]
    const container = document.getElementById("solution-content")

    if(!config) {
        container.innerHTML = "<h3>Solution not found</h3>"
        return
    }

    fetch(config.html).then(res => {
        if(!res.ok) {
            throw new Error("failed to load html")
        }
        return res.text()
    }).then(html => {
        container.innerHTML = html
        return loadScript(config.js)
    }).catch(() => {
        container.innerHTML = "<h3>Error loading content</h3>"
    })
}

window.addEventListener("DOMContentLoaded", loadSolution)
window.addEventListener("hashchange", loadSolution)