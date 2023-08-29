const instagramPhotos = [
    'img/footer-photogallery-corks.png',
    'img/footer-photogallery-drinking.png',
    'img/footer-photogallery-bottle&fruits.png',
    'img/footer-photogallery-bottles&glass.png',    
    'img/footer-photogallery-grapes.png',
    'img/footer-photogallery-wine.png'
]

const leftArrow = document.querySelector('.footer__instagram-left-arrow')
const rightArrow = document.querySelector('.footer__instagram-right-arrow')
// finish here regarding scrolling images


const instragramPhotoContainer = document.querySelector('.footer__instagram-expanded-outer')
const instagramLargePhoto = document.querySelector('.footer__instagram-large-img')
const instagramThumbnails = document.querySelectorAll('.footer__thumbnail')


const closeWindowBtn = document.querySelector('.footer_instagram-expanded-close')

closeWindowBtn.addEventListener('click', () => {
    setTimeout( () => {
        instragramPhotoContainer.style.visibility = 'hidden'
    }, 1000)
    instragramPhotoContainer.style.opacity = '0'
    instragramPhotoContainer.style.transition = 'opacity 1s'
})

for (let i = 0; i < instagramThumbnails.length; i++) {
    instagramThumbnails[i].addEventListener('click', () => {
        instagramLargePhoto.src = instagramPhotos[i]
        instragramPhotoContainer.style.visibility = 'visible'
        instragramPhotoContainer.style.opacity = '1'
        instagramThumbnails[i].className += '.footer__thumbnal-expanded'
    })
}
