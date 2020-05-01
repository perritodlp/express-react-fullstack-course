import { addNewTask, updateTask } from './server';

(async function myFunc() {
    await addNewTask({
        name: "My task 3",
        id:"987654321"
    });

    await updateTask({
        id: "987654321",
        name: "My task 3 updated!!!",
    });
})();

