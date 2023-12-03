

document.addEventListener('DOMContentLoaded', () => {
    const accordionItem = document.querySelectorAll('.accordion-item');
    accordionItem.forEach((item, index) => {

        const accordionHeader = item.querySelector('.accordion-header-content');
        const plusIcon = item.querySelector('.fa-plus');
        const minusIcon = item.querySelector('.fa-minus');
        
        accordionHeader.addEventListener('click', () => {
            item.classList.toggle('active');
            let content = item.querySelector(".accordion-content p");

            if (item.classList.contains('active')) {
                content.style.height = `${content.scrollHeight}px`;
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'inline-block';
                // console.log(content.parentElement.parentElement.children[0].children[1].children[0]);
            } else {
                content.style.height = `0px`;
                plusIcon.style.display = 'inline-block';
                minusIcon.style.display = 'none';
            }

            removeActive(index);

        })
    })


    function removeActive(index1) {
        accordionItem.forEach((item2, index2) => {
            if (index1 !== index2) {
                item2.classList.remove('active');
                let desc = item2.querySelector('.accordion-content p');
                desc.style.height = `0px`;

                const plusIcon2 = item2.querySelector('.fa-plus');
                const minusIcon2 = item2.querySelector('.fa-minus');
                plusIcon2.style.display = 'inline-block';
                minusIcon2.style.display = 'none';
            }

            
        })
    }

})