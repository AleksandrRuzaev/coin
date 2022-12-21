import React from 'react';
import { CategoryDto } from '../../types';
import { Category } from '../category/category';
import './category-list.scss';

type CategoryListProps = {
    categories: Array<CategoryDto>;
    title: string;
};

const CategoryList: React.FC<CategoryListProps> = ({
    categories,
    title,
}): JSX.Element => {
    return (
        <section className="category-list">
            <h3 className="category-list__title">{title}</h3>
            <div className="category-list__list">
                {categories.map((categoty) => (
                    <Category key={categoty.id} {...categoty} />
                ))}
            </div>
        </section>
    );
};

export { CategoryList };
