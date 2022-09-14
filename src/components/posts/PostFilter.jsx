import React from 'react';
import MySelect from "../../UI/Select/MySelect";
import MyInput from "../../UI/Input/MyInput";

const PostFilter = ({limit, setLimit, filter, setFilter}) => {
  const setFilterQuery = (query) => {
    setFilter({...filter, query: query})
  }
  const setFilterSort = (sort) => {
    setFilter({...filter, sort: sort})
  }
  return (
      <div>
        <h4 style={{color: 'teal'}}>Search post</h4>
        <MyInput style={{height: '25px'}} placeholder={"Enter text..."}
        value={filter.query} onChange={(e)=>setFilterQuery(e.target.value)}/>
        <div>
          <MySelect defaultValue={'Sorted'} values={['title', 'body']}
                       onChange={setFilterSort} value={filter.sort}/>
          <MySelect defaultValue={limit} values={['5', '10', '20', '100']}
                       onChange={setLimit} value={limit}/>
        </div>
      </div>
  );
};

export default PostFilter;