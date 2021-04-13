/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('https://web-doctors-portal.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <section>
            <Container fluid>
                <Row>
                    <Sidebar />
                    <div
                        className="col-md-10 p-4 pr-5"
                        style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}
                    >
                        <h5 className="text-brand">Add a Doctor</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    onBlur={handleBlur}
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input
                                    onBlur={handleBlur}
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Upload a image</label>
                                <br />
                                <input
                                    onChange={handleFileChange}
                                    type="file"
                                    className="form-label"
                                    id="exampleInputPassword1"
                                    placeholder="Picture"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </Row>
            </Container>
        </section>
    );
};
export default AddDoctor;
