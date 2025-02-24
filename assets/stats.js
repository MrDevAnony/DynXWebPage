async function fetchDnsStats() {
  try {
    const response = await fetch('https://api.dynx.pro/dns-stats');
    if (!response.ok) throw new Error('Failed to fetch stats');

    const data = await response.json();
    document.getElementById('total-queries').textContent = data.num_dns_queries.toLocaleString('en-US');
    document.getElementById('blocked-queries').textContent = data.num_blocked_filtering.toLocaleString('en-US');
  } catch (error) {
    console.error(error);
    document.getElementById('total-queries').textContent = 'Error';
    document.getElementById('blocked-queries').textContent = 'Error';
  }
}
fetchDnsStats();