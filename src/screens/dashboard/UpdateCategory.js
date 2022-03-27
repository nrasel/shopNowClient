import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import { useFetchCategoryQuery } from "../../store/services/categoryService";
import Wrapper from "./Wrapper";

const UpdateCategory = () => {
  const [state, setState] = useState("");
  const { id } = useParams();
  const { data, isFetching } = useFetchCategoryQuery(id);
  console.log("category", data);
  useEffect(() => {
    data?.category && setState(data?.category?.name);
  }, [data?.category]);

  const submitCategory = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Wrapper>
        <ScreenHeader>
          <Link className="btn-dark" to="/dashboard/categories">
            <i className="bi bi-arrow-left"></i> Categories list
          </Link>
        </ScreenHeader>
        {!isFetching && (
          <form onSubmit={submitCategory} className="w-full md:w-8/12">
            <h3 className="text-lg capitalize mb-3">Update Category</h3>

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
                value="Update"
                className="btn-indigo rounded"
              />
            </div>
          </form>
        )}
      </Wrapper>
    </div>
  );
};

export default UpdateCategory;
