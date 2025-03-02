document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    const content = document.getElementById('content');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);

            // 移除所有链接的 active 类
            links.forEach(link => link.classList.remove('active'));
            // 为当前点击的链接添加 active 类
            this.classList.add('active');
        });
    }

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
                handlePageLoad(data);
            })
            .catch(error => {
                content.innerHTML = '<p>加载内容失败，请稍后再试。</p>';
            });
    }

    // 默认加载第一个页面
    if (links.length > 0) {
        loadPage(links[0].getAttribute('data-page'));
        links[0].classList.add('active'); // 默认选中第一个链接
    }
});

function handlePageLoad(content) {
    if (content.includes('resume-section')) {
        document.body.style.backgroundColor = '#f7fafc';
        return true;
    }
    document.body.style.backgroundColor = '';
    return false;
}
