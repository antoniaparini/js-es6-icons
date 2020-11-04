/**
 * JAVASCRIPT
 */

$(document).ready(function(){
    // Icon set
    const icons = [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
        },
        {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
        },

    ];


    const colors = [
        'blue',
        'orange',
        'purple'
    ];

/**
 * ICONS CONTAINER
 */


const container = $ ('.icons');
container.html(icons);

/**
  * PRINT ICONS ON SCREEN
  */
    /*printIcons(icons,container);*/

/**
 * PRINT COLORED ICONS
 */

 const coloredIcons = colorIcons(icons, colors);
 /*console.log(coloredIcons);*/

  }); //<-- end here//
 
  
 function printIcons(icons, container){


    icons.forEach((icon) => {
        const {family, prefix, name} = icon;
        const html = `<div class="icon">
        <i class="${family} ${prefix}${name}"></i>
        <div class="title">${name}</div>
        </div>
        `
        container.append(html);
    });
 }
  

/**
 * COLORED ICONS
 *  
 * */  

 function colorIcons(icons, colors) {
     //Get types
     const types = getType(icons);

     //Assign color by type
     const coloredIcons = icons.map((icon) => {
         const indexType = types.indexOf(icon.type);
         return{
             ...icon,
             color: colors[indexType]
            }
        });
        return coloredIcons;
 }

 /**
  * GET ICONS TYPES
  */

  function getType(icons){
      const types = [];
      icons.forEach((icon) => {
        if(! types.includes(icon.type)) {
            types.push(icon.type);
        }
        return types;
  });

}

  
  
  

