// FAQ Accordion
// function(){} равнозначно ()=>{}
document.addEventListener('DOMContentLoaded', ()=>{
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e)=>{
        // проверка работоспособности
        //alert(1);

        // e.target хватает то, на что нажали
        const groupHeader = e.target.closest('.faq-group-header');

        // Если нажат не faq-group-header, то ничего не делать
        if(!groupHeader) return;        
        //console.log(groupHeader);

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Переключение вида иконки
        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Переключение видимости содержимого
        // Toggle visibility of body
        groupBody.classList.toggle('open');

        // Закрытие всех ненажатых групп
        // Close other open FAQ bodies        
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        //console.log(otherGroups);

        otherGroups.forEach((otherGroup)=>{
            // если это не нажатая группа, то закрыть группу и переключить иконку
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButtton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButtton.addEventListener('click', () => 
        mobileMenu.classList.toggle('active')
    );
});