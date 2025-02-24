window.onload = function () {
    var response = document.getElementById('response');
    var submit = document.getElementById("query");
    var lq, t1;
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        const qname = document.getElementById("qname").value || 'dns.dynx.pro';
        if (qname === lq) return;
        lq = qname;
        t1 && window.clearTimeout(t1);
        t1 = window.setTimeout(() => lq = null, 1000);
        submit.setAttribute('disabled', 'disabled');
        const rrtype = (document.getElementById("rrtype") || { value: 'A' }).value || 'A';
        const https_url = (document.getElementById("https_url") || { value: 'https://dns.dynx.pro/dns-query' }).value || 'https://dns.dynx.pro/dns-query';
        dohjs(qname, rrtype, https_url)
            .then(r => !r || !r.answers || !r.answers.length ? { class: 'has-text-warning', text: qname + ' no result' } :
                r.answers[0].data === '0.0.0.0' ? { class: 'has-text-danger', text: r.answers[0].name + ' blocked' } :
                    { class: 'has-text-success', text: r.answers[0].name + ' not blocked' })
            .then(r => { response.classList.remove(response.classList.item(response.classList.length - 1)); response.classList.add(r.class); response.innerHTML = r.text; })
            .catch(e => {
                response.innerHTML = e; e.text().then(e => {
                    e ? response.innerHTML = e :
                        response.classList.remove(response.classList.item(response.classList.length - 1)); response.classList.add('has-text-warning'); response.innerHTML = qname + ' no result';
                });
            })
            .catch(e => e)
            .then(() => submit.removeAttribute('disabled'));
    }, false);
};