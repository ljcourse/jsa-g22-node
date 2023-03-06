const { getAllStudents, addStudent, deleteStudent, editStudent } = require('./students');

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