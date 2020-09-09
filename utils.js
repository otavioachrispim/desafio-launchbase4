module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 ||
            month == 0 &&
            today.getDate() <= birthDate.getDate()) {
            age = age - 1
        }

        return age
    },
    date: function (timestamp) {
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)
        return `${year}-${month}-${day}`
    },
    graduation: function (graduate) {
        if (graduate == 'medio')

            return ("Ensino Médio Completo")

        if (graduate == 'superior')

            return ("Ensino Superior Completo")

        if (graduate == 'mestrado')

            return ("Mestrado")

        if (graduate == 'doutorado')

            return ("Doutorado")
    },
    selectGraduation: function (graduate) {

        if ( graduate == 'medio' ){
            return (
                <select name="graduation">
                    <option value="medio" checked>Ensino Médio Completo</option>
    
                    <option value="superior">Ensino Superior Completo</option>
    
                    <option value="mestrado">Mestrado</option>
    
                    <option value="doutorado">Doutorado</option>
                </select>    
            ) 
        }

        if ( graduate == 'superior' ){
            return (
                <select name="graduation">
                    <option value="medio">Ensino Médio Completo</option>
    
                    <option value="superior" checked>Ensino Superior Completo</option>
    
                    <option value="mestrado">Mestrado</option>
    
                    <option value="doutorado">Doutorado</option>
                </select>    
            ) 
        }

        if ( graduate == 'mestrado' ){
            return (
                <select name="graduation">
                    <option value="medio">Ensino Médio Completo</option>
    
                    <option value="superior">Ensino Superior Completo</option>
    
                    <option value="mestrado" checked>Mestrado</option>
    
                    <option value="doutorado">Doutorado</option>
                </select>    
            ) 
        }

        if ( graduate == 'doutorado' ){
            return (
                <select name="graduation">
                    <option value="medio">Ensino Médio Completo</option>
    
                    <option value="superior">Ensino Superior Completo</option>
    
                    <option value="mestrado">Mestrado</option>
    
                    <option value="doutorado" checked>Doutorado</option>
                </select>    
            ) 
        }

       

        
        // if (graduate == 'medio')

        // return ("Ensino Médio Completo") 

        // if (graduate == 'superior')

        // return ("Ensino Superior Completo") 

        // if (graduate == 'mestrado')

        // return ("Mestrado") 

        // if (graduate == 'doutorado')

        // // return ("Doutorado") 
    }
}


