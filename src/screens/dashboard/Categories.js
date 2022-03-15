import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import Spinner from "../../components/Spinner";
import { clearMessage } from "../../store/reducers/globalReducer";
import { useGetQuery } from "../../store/services/categoryService";
import Wrapper from "./Wrapper";

const Categories = () => {
  const { page } = useParams();
  console.log("Your page", page);
  const { success } = useSelector((state) => state.globalReducer);
  console.log(success);
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetQuery(page ? page : 1);
  console.log(data, isLoading);
  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, []);
  return (
    <div>
      <Wrapper>
        <ScreenHeader>
          <Link className="btn-dark" to="/dashboard/create-category">
            Add Categories <i className="bi bi-plus"></i>
          </Link>
        </ScreenHeader>
        {success && <div className="alert-success">{success}</div>}

        {!isLoading ? (
          data?.categories?.length > 0 && (
            <div>
              <table className="w-full bg-gray-900 rounded-md">
                <thead>
                  <tr className="border-b border-gray-800 text-left">
                    <th className="p-3 uppercase font-medium text-sm">name</th>
                    <th className="p-3 uppercase font-medium text-sm">edit</th>
                    <th className="p-3 uppercase font-medium text-sm">
                      delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.categories?.map((category) => (
                    <tr key={category._id} className="odd:bg-gray-800">
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        {category.name}
                      </td>
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        <button>edit</button>
                      </td>
                      <td className="p-3 capitalize text-sm font-normal text-gray-400">
                        <button>delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : (
          <Spinner />
        )}
      </Wrapper>
    </div>
  );
};

export default Categories;
