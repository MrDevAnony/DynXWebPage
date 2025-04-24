async function fetchDnsStats() {
    try {
        const response = await fetch(
            "https://adblocker-api.dynx.pro/dns-stats"
        );
        if (!response.ok) throw new Error("Failed to fetch stats");

        const data = await response.json();
        document.getElementById("adblock-total-queries").textContent =
            data.num_dns_queries.toLocaleString("en-US");
        document.getElementById("adblock-blocked-queries").textContent =
            data.num_blocked_filtering.toLocaleString("en-US");
    } catch (error) {
        console.error(error);
        document.getElementById("adblock-total-queries").textContent = "Error";
        document.getElementById("adblock-blocked-queries").textContent =
            "Error";
    }

    try {
        const response = await fetch("https://antiban1-api.dynx.pro/dns-stats");
        if (!response.ok) throw new Error("Failed to fetch stats");

        const data = await response.json();
        document.getElementById("primary-antiban-queries").textContent =
            data.num_dns_queries.toLocaleString("en-US");
    } catch (error) {
        console.error(error);
        document.getElementById("primary-antiban-queries").textContent = "Error";
    }

    try {
        const response = await fetch("https://antiban2-api.dynx.pro/dns-stats");
        if (!response.ok) throw new Error("Failed to fetch stats");

        const data = await response.json();
        document.getElementById("secondary-antiban-queries").textContent =
            data.num_dns_queries.toLocaleString("en-US");
    } catch (error) {
        console.error(error);
        document.getElementById("secondary-antiban-queries").textContent = "Error";
    }
}
fetchDnsStats();