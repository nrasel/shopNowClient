import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import { setSuccess } from "../../store/reducers/globalReducer";
import { useCreateMutation } from "../../store/services/categoryService";
import Wrapper from "./Wrapper";

const CreateCategory = () => {
  const [state, setState] = useState("");
  const [saveCategory, data] = useCreateMutation();
  console.log(data);
  const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?.isSuccess) {
      dispatch(setSuccess(data?.data?.message));
      navigate("/dashboard/categories");
    }
  }, [data?.isSuccess]);
  const submitCategory = (e) => {
    e.preventDefault();
    saveCategory({ name: state });
  };
  return (
    <div>
      <Wrapper>
        <ScreenHeader>
          <Link className="btn-dark" to="/dashboard/categories">
            <i className="bi bi-arrow-left"></i> Categories list
          </Link>
        </ScreenHeader>
        <form onSubmit={submitCategory} className="w-full md:w-8/12">
          <h3 className="text-lg capitalize mb-3">Create Category</h3>
          {errors.length > 0 &&
            errors.map((error, key) => (
              <p key={key} className="alert-danger">
                {error.msg}
              </p>
            ))}
          <div className="mb-3">
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Category Name..."
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="submit"
              value={data.isLoading ? "loading" : "create category"}
              className="btn-indigo"
            />
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default CreateCategory;
