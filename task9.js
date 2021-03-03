function typeNumber(Arr) {
    let zeroNumber = 0;
    let evenNumber = 0;
    let oddNumber = 0;
    
    for (let i = 0; i < Arr.length; i++) {
      if (typeof(Arr[i]) == "number" && Arr[i] == 0)
        zeroNumber += 1
      else if (typeof(Arr[i]) == "number" && Arr[i] % 2 == 0)
        evenNumber += 1
      else if (typeof(Arr[i]) == "number")
        oddNumber += 1
      else
        ;
    }
    
    console.log(zeroNumber + ' - нулевых элементов')
    console.log(evenNumber + ' - чётных элементов')
    console.log(oddNumber + ' - нечётных элементов')
    
    }
    
    const arr1 = [0, 4, 4, 5, null, 'текст', true, 0, 0];
    typeNumber(arr1);
    console.log('___________________')
    const arr2 = [0, 1, 2, 3, 4, 5];
    typeNumber(arr2);