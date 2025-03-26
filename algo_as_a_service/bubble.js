// Algorithme de Bubble
const bubble = (arr) => {
    for(let i = 0; i < arr.length; i++){ // boucle qui itére de façon générale
        for(let j = 0; j < arr.length - i - 1; j++){ // boucle qui va comparer les élèments dans le tableau
            if(arr[j] > arr[j + 1]){ // condition qui compare les deux élèments
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // inversion des élèments si la valeur est plus grande
            }
        }
    }

    return arr
}

export default bubble;
