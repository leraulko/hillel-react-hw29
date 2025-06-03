import './TodoForm.css';
import { Formik, Form, Field } from 'formik';
import { addTodo } from '../store/todosSlice';
import { useDispatch } from 'react-redux';

export default function TodoForm() {
    const dispatch = useDispatch();
    const initialValues = { task: '', priority: 'low' };
    const handleSubmit = (values, { resetForm }) => {
        dispatch(addTodo({ value: values.task, priority: values.priority }));
        resetForm();
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className='todo-form'>
                        <Field name='task' placeholder='New task' className='todo-input' />
                        <Field as='select' name='priority' className='priority-select'>
                            <option value='low'>🔹 Low</option>
                            <option value='medium'>🔸 Medium</option>
                            <option value='high'>🔺 High</option>
                        </Field>
                        <button type='submit' className='add-btn'>Add</button>
                </Form>
            </Formik>
        </>
    )
}
