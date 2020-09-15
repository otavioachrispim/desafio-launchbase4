const fs = require('fs')
const data = require('../data.json')
const { age, date, graduation, grade} = require('../utils')

// create
exports.index = function(req, res) {
    return res.render("students/index", { students: data.students, grade } )
}

exports.create = function(req, res) {
    return res.render('students/create')
}

exports.post = function (req,res){

    const keys = Object.keys(req.body)

    for( key of keys) {
        if (req.body[key] == ""){
            return res.send('Please, fill all functions')
        }        
    }

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastStudent = data.students[data.students.length -1]

    if(lastStudent) {
        id = lastStudent.id + 1
    }

    data.students.push({
        id,
        ...req.body,
        birth,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!") 
        
        return res.redirect(`/students/${id}`)
    })

    // return res.send(req.body)
}

exports.show = function(req, res) {
    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return id == student.id
    })

    if (!foundStudent) return res.send("Students not found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay
    }

    return res.render("students/show", { student, graduation, grade })
}

exports.edit = function(req, res){ 

    const { id } = req.params

    const foundStudent = data.students.find(function(student){
        return id == student.id
    })

    if (!foundStudent) return res.send("student not found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
        
    }    
    
    return res.render('students/edit', { student })
}

exports.put = function(req, res){

    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find(function(student, foundIndex){
        if(id == student.id) {
           index = foundIndex
           return true
    }
})

if (!foundStudent) return res.send("student not found!")

const student = {
    ...foundStudent,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
}

data.students[index] = student

fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write error!")

    return res.redirect(`/students/${id}`)
})

}

exports.delete = function(req, res){
    const { id } = req.body

    const filteredStudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/students")

    })
}


