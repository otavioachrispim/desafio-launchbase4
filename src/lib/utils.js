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
        const month = String(date.getUTCMonth()).padStart(2, "0")
        const day = String(date.getUTCDate()).padStart(2, "0")
        
        // const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        // const day = `0${date.getUTCDate()}`.slice(-2)
        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`

        } 
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
    grade: function (school) {
        if (school == '1EF')

            return ("1º ano do Ensino Fundamental")

        if (school == '2EF')

            return ("2º ano do Ensino Fundamental")

        if (school == '3EF')

            return ("3º ano do Ensino Fundamental")

        if (school == '4EF')

            return ("4º ano do Ensino Fundamental")

        if (school == '5EF')

            return ("5º ano do Ensino Fundamental")

        if (school == '6EF')

            return ("6º ano do Ensino Fundamental")

        if (school == '7EF')

            return ("7º ano do Ensino Fundamental")

        if (school == '8EF')

            return ("8º ano do Ensino Fundamental")

        if (school == '9EF')

            return ("9º ano do Ensino Fundamental")

        if (school == '1EM')

            return ("1º ano do Ensino Fundamental")

        if (school == '2EM')

            return ("2º ano do Ensino Fundamental")

        if (school == '3EM')

            return ("3º ano do Ensino Fundamental")

    },
}

