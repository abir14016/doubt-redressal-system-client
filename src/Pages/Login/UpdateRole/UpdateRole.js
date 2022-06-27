import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const UpdateRole = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
    };
    return (
        <div className='container mt-5'>
            <h3 className='mb-4'>Update your role</h3>
            <div className='form-container mx-auto shadow-lg p-5'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                            <label className='fw-bold' htmlFor="role">Choose a role:</label>
                            <select {...register("role", {
                                required: {
                                    value: true,
                                    message: 'role is required'
                                }
                            })}>
                                <option value="student">student</option>
                                <option value="teacher">teacher</option>
                            </select>
                            {errors.role?.type === 'required' && <Form.Text className="text-danger fw-bold">
                                {errors.role.message}
                            </Form.Text>}
                        </div>
                        <Button className='px-5' variant="primary" type="submit">
                            Update
                        </Button>
                    </div>
                    <p className='text-danger fw-bold small-text mt-3'>N:B: If you leave this page without updating your role, will not be able to raise any doubt or answer any doubt</p>
                </Form>
            </div>
        </div>
    );
};

export default UpdateRole;