const instagramPhotos = [
    'img/footer-photogallery-corks.png',
    'img/footer-photogallery-drinking.png',
    'img/footer-photogallery-bottle&fruits.png',
    'img/footer-photogallery-bottles&glass.png',    
    'img/footer-photogallery-grapes.png',
    'img/footer-photogallery-wine.png'
]


const instragramOuterContainer = document.querySelector('.footer__instagram-expanded-outer')
const instagramLargePhoto = document.querySelector('.footer__instagram-large-img')
const instagramThumbnails = document.querySelectorAll('.footer__thumbnail')
// let nextPhotoSrc
// let previousPhotoSrc

const closeWindowBtn = document.querySelector('.footer_instagram-expanded-close')

closeWindowBtn.addEventListener('click', () => {
    setTimeout( () => {
        instragramOuterContainer.style.visibility = 'hidden'
    }, 1000)
    instragramOuterContainer.style.opacity = '0'
    instragramOuterContainer.style.transition = 'opacity 1s'
})

for (let i = 0; i < instagramThumbnails.length; i++) {
    instagramThumbnails[i].addEventListener('click', () => {
        instagramLargePhoto.src = instagramPhotos[i]
        instragramOuterContainer.style.visibility = 'visible'
        instragramOuterContainer.style.opacity = '1'
        instagramThumbnails[i].className += '.footer__thumbnal-expanded'
    })
}

const leftArrow = document.querySelector('.footer__instagram-left-arrow')
const rightArrow = document.querySelector('.footer__instagram-right-arrow')
const instagramPhotosContainer = document.querySelector('.footer__instagram-large-image')
leftArrow.addEventListener('click', scrollLeft)

function scrollLeft() {
    const currentPhoto = document.querySelector('.footer__instagram-large-img')
    const currentSrc = currentPhoto.getAttribute('src')
    console.log('currentSrc ', currentSrc)
    const indexOfcurrentPhoto = instagramPhotos.indexOf(currentSrc)
    const nextPhotoSrc = indexOfcurrentPhoto === instagramPhotos.length - 1 ? instagramPhotos[0] : instagramPhotos[indexOfcurrentPhoto + 1]
    console.log('indexOfcurrentPhoto ', indexOfcurrentPhoto)
    console.log('instagramPhotos.length ', instagramPhotos.length)
    console.log('nextPhotoSrc ', nextPhotoSrc)

    const nextImgNode = document.createElement('img')
    instagramPhotosContainer.appendChild(nextImgNode)
    nextImgNode.src = nextPhotoSrc
    nextImgNode.alt = 'Large Instagram photo'
    nextImgNode.className = 'footer__instagram-large-img'   
    instagramPhotosContainer.removeChild(instagramPhotosContainer.firstChild)
    // nextImgNode.style.transform = 'translate(100%)'
    currentPhoto.style.transform = 'translate(-100%)'
    nextImgNode.style.transform = 'translate(-100%)'

    console.log('testScroll left ============================================')
}
