function choice(items){
    let randInt = Math.floor(Math.random()* items.length);
    return items[randInt];
};



function remove(items, item){
    let index = items.indexOf(item); 
      if(index !== -1){
          let value = items.splice(index, 1);
          console.log(items)
          return  items;
      }
      return undefined;
  };


export {choice, remove};