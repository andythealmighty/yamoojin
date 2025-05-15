document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 시 헤더 스타일 변경
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.padding = '8px 0';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
            header.style.padding = '10px 0';
        }
    });
    
    // 현재 활성화된 메뉴 표시
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(item => {
        if (currentLocation.includes(item.href)) {
            item.classList.add('active');
        }
    });
    
    // 모바일 메뉴 토글 (필요한 경우 추가)
    
    // 폼 제출 처리
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            this.reset();
        });
    }
});
