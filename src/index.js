// write your code here

fetch("http://localhost:3000/ramens")
.then(res=>res.json())
.then(ramenData => {
    
    const ramenMenu = document.getElementById('ramen-menu')
    ramenData.forEach(ramen => {
        const ramenImage = document.createElement('img')
        ramenImage.src = ramen.image
        ramenMenu.appendChild(ramenImage)
        // const ramenDetail = document.getElementById('ramen-detail')
        ramenImage.addEventListener('click', (event) => {
            event.preventDefault();
            const detailImage = document.querySelector('.detail-image')
            detailImage.src = ramen.image
            const ramenName = document.querySelector('.name')
            ramenName.textContent = ramen.name
            const restaurant = document.querySelector('.restaurant')
            restaurant.textContent = ramen.restaurant
            const ratingDisplay = document.getElementById('rating-display')
            ratingDisplay.textContent = ramen.rating
            const commentDisplay = document.getElementById('comment-display')
            commentDisplay.textContent = ramen.comment
            
        })
    }) 
})

// Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.

const newRamen = document.getElementById('new-ramen')
newRamen.addEventListener('submit', (event) => {
    event.preventDefault();
    //grab the submitted information
    const insertedName = document.getElementById('insert-name').value
    const insertedRestaurant = document.getElementById('new-restaurant').value
    const insertedImage = document.getElementById('new-image').value
    const insertedRating = document.getElementById('new-rating').value
    const insertedComment = document.getElementById('new-comment').value
    const ramenMenu = document.getElementById('ramen-menu')
    const ramenImage = document.createElement('img')
    ramenImage.src = insertedImage
    ramenMenu.appendChild(ramenImage)
    ramenImage.addEventListener('click', () => {
        const detailImage = document.querySelector('.detail-image')
        detailImage.src = insertedImage
        const ramenName = document.querySelector('.name')
        ramenName.textContent = insertedName
        const restaurant = document.querySelector('.restaurant')
        restaurant.textContent = insertedRestaurant
        const ratingDisplay = document.getElementById('rating-display')
        ratingDisplay.textContent = insertedRating
        const commentDisplay = document.getElementById('comment-display')
        commentDisplay.textContent = insertedComment
    })
})


//how do I grab the submitted information and populate it into a new thing
