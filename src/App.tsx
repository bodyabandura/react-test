import './App.scss';
import React from 'react';
import { useGetAllHousesQuery } from './Redux/RTK_Query/houses.service';
import { Card } from './components/Card/Card';
import { Pagination } from './components/Pagination/Pagination';
import { useAppSelector } from './Redux/store';
import { Loader } from './components/Loader/Loader';


  export const App: React.FC = () => {
    const paginationPage = useAppSelector((state) => state.paginationPage.value);
  
    const { data: houses, isSuccess } = useGetAllHousesQuery();
    const start = 3 * paginationPage - 3;
    const end =
      houses && 3 * paginationPage <= houses.length
        ? 3 * paginationPage
        : houses?.length;
  
    const housesToShow = houses && houses.slice(start, end);
  
    const showPagination = (housesToShow && housesToShow.length <= 3)
    || housesToShow?.length === 0;

      if (!isSuccess) {
        return <Loader />
      }
  
    return (
      <div className="app">
        {housesToShow?.map((house) => (
          <Card
            key={house.id}
            house={house}
          />
        ))}
  
        {showPagination && houses && (
          <Pagination
            total={houses.length}
            perPage={3}
          />
        )}
      </div>
    );
  };
