async function fetchDnsStats() {
  try {
    const response = await fetch('https://adblocker-api.dynx.pro/dns-stats');
    if (!response.ok) throw new Error('Failed to fetch stats');

    const data = await response.json();
    document.getElementById('adblock-total-queries').textContent = data.num_dns_queries.toLocaleString('en-US');
    document.getElementById('adblock-blocked-queries').textContent = data.num_blocked_filtering.toLocaleString('en-US');
  } catch (error) {
    console.error(error);
    document.getElementById('total-queries').textContent = 'Error';
    document.getElementById('blocked-queries').textContent = 'Error';
  }

  try {
    const response = await fetch('https://secondary-antiban-api.dynx.pro/dns-stats');
    if (!response.ok) throw new Error('Failed to fetch stats');

    const data = await response.json();
    document.getElementById('antiban-secondary-queries').textContent = data.num_dns_queries.toLocaleString('en-US');
  } catch (error) {
    console.error(error);
    document.getElementById('antiban-secondary-queries').textContent = 'Error';
  }

  try {
    const response = await fetch('https://primary-antiban-api.dynx.pro/dns-stats');
    if (!response.ok) throw new Error('Failed to fetch stats');

    const data = await response.json();
    document.getElementById('antiban-primary-queries').textContent = data.num_dns_queries.toLocaleString('en-US');
  } catch (error) {
    console.error(error);
    document.getElementById('antiban-primary-queries').textContent = 'Error';
  }
}
fetchDnsStats();