const offerCategories = (selector) => {
    const categories= document.querySelectorAll(selector);
    const parentWidth = ($parent, $dropdown) => {
        const width = $parent.offsetWidth - (parseInt(getComputedStyle($parent, null)['paddingRight']) + parseInt(getComputedStyle($parent, null)['paddingLeft']));
        $dropdown.style.width = width + 'px';
    }
    categories.forEach($categorie => {
        const $head = $categorie.querySelector('.offer-categories__head');
        const $parent = $categorie.closest('.card-block');
        const $dropdown = $categorie.querySelector('.offer-categories__dropdown');
        const $categoriesItm = $categorie.querySelectorAll('.offer-categories__lnk')
        parentWidth($parent, $dropdown)
        $head.addEventListener('click', (e) => {
            e.preventDefault();
            $categorie.classList.toggle('is-open')
        });
        window.addEventListener('resize', () => {
            parentWidth($parent, $dropdown)
        });
        $categoriesItm.forEach($lnk => {
            $lnk.addEventListener('click', (e) => {
                e.preventDefault();
                $head.querySelector('input').value = $lnk.querySelector('.offer-categories__ttl').textContent;
                $categorie.classList.remove('is-open')
            })
        })
        document.addEventListener('click', (e) => {
            if (!e.target.closest(selector) ) {
                $categorie.classList.remove('is-open')
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    offerCategories('.offer-categories')
});