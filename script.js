function cloneObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
      // If it's not an object or is null, return it as is
      return obj;
    }
  
    if (Array.isArray(obj)) {
      // If it's an array, create a new array and clone its elements
      const clonedArray = [];
      for (let i = 0; i < obj.length; i++) {
        clonedArray[i] = cloneObject(obj[i]);
      }
      return clonedArray;
    }
  
    // If it's an object, create a new object and clone its properties
    const clonedObject = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObject[key] = cloneObject(obj[key]);
      }
    }
    return clonedObject;
  }
  
  //For Example
  const originalObject = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York'
    },
    hobbies: ['reading', 'painting']
  };
  
  const clonedObject = cloneObject(originalObject);
  
  console.log(originalObject);
  console.log(clonedObject);