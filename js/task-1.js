const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}` );

categories.forEach(category => {
    const textHeader = category.querySelector('h2').textContent;
    const lenth = category.querySelectorAll('ul>li').length;

    console.log(`Category: ${textHeader}`);
    console.log(`Elements: ${lenth}`);
    
    
})