import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";

const ProcessFormView = ({ process = {}, users = [], onSubmit, error }) => (
  <div class="card">
    <div class="card-header justify-content-center">
      <h1 class="card-header-title text-primary"> Decimal a Romano </h1>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <Formik initialValues={process} onSubmit={onSubmit}>
            {({ values, setFieldValue }) => (
              <Form>
                <div class="mb-3">
                  <div class="form-group">
                    <label class="input-label font-italic"> Número a convertir </label>
                    <Field type="number" name="input" class="form-control" />
                  </div>
                  <div class="form-group">
                    <div>
                      <label class="input-label font-italic"> Usuario </label>
                      <Field as="select" name="user_id" class="form-control">
                        <option value=""> Selecciona una opción </option>
                        {users.map((e, idx) => (
                          <option key={`process_${idx}`} value={e.id}>
                            {e.id}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                </div>
                {error ? (
                  <div class="alert alert-soft-danger"> {error} </div>
                ) : null}
                <button type="submit" class="btn btn btn-dark btn-sm active float-right">
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </div>
);

ProcessFormView.propTypes = {
  process: PropTypes.object,
  users: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default ProcessFormView;
