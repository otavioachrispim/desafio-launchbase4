const fs = require('fs')
const data = require('./data.json')
const { age, date, graduation} = require('./utils')

// create
exports.post = function (req,res){

    const keys = Object.keys(req.body)

    for( key of keys) {
        if (req.body[key] == ""){
            return res.send('Please, fill all functions')
        }        
    }

    let { avatar_url, birth, name, graduation, type_class, services } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)   

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        graduation,        
        type_class,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!") 
        
        return res.redirect("/teachers")
    })

    // return res.send(req.body)
}

exports.show = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return id == teacher.id
    })

    if (!foundTeacher) return res.send("Teachers not found!")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(","),
        created_at: new Intl.DateTimeFormat("en-GB").format(foundTeacher.created_at)
    }

    return res.render("teachers/show", { teacher, graduation })
}

exports.edit = function(req, res){ 

    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return id == teacher.id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth),
        
    }    
    
    return res.render('teachers/edit', { teacher })
}

exports.put = function(req, res){

    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function(teacher, foundIndex){
        if(id == teacher.id) {
           index = foundIndex
           return true
    }
})

if (!foundTeacher) return res.send("Teacher not found!")

const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth)
}

data.teachers[index] = teacher

fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write error!")

    return res.redirect(`/teachers/${id}`)
})

}

exports.delete = function(req, res){
    const { id } = req.body

    const filteredTeachers = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/teachers")

    })
}


