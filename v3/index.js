const fs = require('fs');


const read = async () => {
    return new Promise((success, fail) => {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) return fail(err)
            data = JSON.parse(data);
            return success(data)
        })
    })
}

const write = async (data) => {
    return new Promise((success, fail) => {
        data = JSON.stringify(data)
        fs.writeFile('data.json', data, (err, data) => {
            if (err) return fail(err)
            return success(data)
        })
    })
}
const getAllStudents = async () => {
    let students = await read()
    return read(students);
}

const addStudent = async (studentData) => {
    let students = await read();
    students.push(studentData);
    await write(students);
}


const deleteStudent = async (studentIndex) => {
    let students = await read();
    students = students.filter((s, i) => i !== studentIndex);
    await write(students);
};

const editStudent = async (studentIndex, studentData) => {
    let students = await read();
    students = students.map((s, i) => {
        if (i === studentIndex) {
            return {
                ...s,
                ...studentData
            };
        }
        return s;
    });
    await write(students);
};

(async () => {
    try {
        await addStudent({
            ime: 'ime',
            prezime: 'prezime',
            prosek: 0,
            grad: 'grad'
        });
        let students = await getAllStudents();
        console.log(students);
        await editStudent(0, {
            ime: 'ime',
            prezime: 'prezime0',
            prosek: 0,
            grad: 'grad'
        });
        students = await getAllStudents();
        console.log(students);

        await deleteStudent(0);
        students = await getAllStudents();

    } catch (err) {
        console.log('ERROR', err);
    } finally {
        console.log('err');
    }
})();